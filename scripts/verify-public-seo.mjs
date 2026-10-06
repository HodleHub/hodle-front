import assert from 'node:assert/strict'

const base = new URL(process.argv[2] ?? 'http://localhost:3000')
const canonicalOrigin = 'https://hodle.com.br'
const pages = new Map()
const images = new Set()
const renderAssets = new Set()
const crawlBudget = 1_500_000

const fetchPage = async (pathname, headers = {}) => {
  const response = await fetch(new URL(pathname, base), {
    headers,
    redirect: 'manual',
    signal: AbortSignal.timeout(30000),
  })
  const body = await response.text()
  if (/^text\/|^application\/(?:javascript|json|xml)/.test(response.headers.get('content-type') ?? '')) {
    // fetch decodes gzip/Brotli; Content-Length can describe the compressed body.
    assert.ok(Buffer.byteLength(body) <= crawlBudget, `${pathname}: response exceeds the 1.5 MB uncompressed crawl budget`)
  }
  return { response, body }
}

const sitemap = await fetchPage('/sitemap.xml')
assert.equal(sitemap.response.status, 200, 'Sitemap must be available')
const urls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]))
assert.ok(urls.length > 0, 'Sitemap must contain public pages')

let index = 0
await Promise.all(Array.from({ length: 4 }, async () => {
  while (index < urls.length) {
    const url = urls[index++]
    const { pathname } = url
    const page = await fetchPage(pathname)
    assert.equal(page.response.status, 200, `${pathname}: expected HTTP 200 without a redirect`)
    assert.match(page.response.headers.get('content-type') ?? '', /text\/html/, `${pathname}: HTML representation`)
    assert.equal([...page.body.matchAll(/<h1\b/gi)].length, 1, `${pathname}: one H1`)
    assert.equal([...page.body.matchAll(/<html\b/gi)].length, 1, `${pathname}: one HTML document`)
    assert.equal([...page.body.matchAll(/<body\b/gi)].length, 1, `${pathname}: one body`)
    const canonical = page.body.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]
    assert.ok(canonical, `${pathname}: canonical missing`)
    assert.equal(new URL(canonical).href, new URL(pathname, canonicalOrigin).href, `${pathname}: canonical changed`)
    assert.equal(page.body.match(/<html[^>]*lang="([^"]+)"/)?.[1], pathname.startsWith('/en/') ? 'en' : 'pt-BR', `${pathname}: document language`)
    assert.doesNotMatch(page.body, /<meta[^>]*(?:name="(?:robots|googlebot)"[^>]*content="[^"]*noindex)/i, `${pathname}: public page must remain indexable`)
    assert.doesNotMatch(page.response.headers.get('x-robots-tag') ?? '', /noindex/i, `${pathname}: public page header`)
    for (const match of page.body.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
      JSON.parse(match[1])
    }
    for (const match of page.body.matchAll(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"/g)) {
      const image = new URL(match[1], canonicalOrigin)
      if (image.origin === canonicalOrigin) images.add(`${image.pathname}${image.search}`)
    }
    for (const match of page.body.matchAll(/(?:src|href)="([^"]+\.(?:js|css)(?:\?[^"]*)?)"/g)) {
      const asset = new URL(match[1].replaceAll('&amp;', '&'), base)
      if (asset.origin === base.origin || asset.origin === canonicalOrigin) {
        renderAssets.add(`${asset.pathname}${asset.search}`)
      }
    }
    pages.set(pathname, page.body)
  }
}))

for (const pathname of renderAssets) {
  const asset = await fetchPage(pathname)
  assert.equal(asset.response.status, 200, `${pathname}: render asset must remain available`)
  assert.match(asset.response.headers.get('content-type') ?? '', /(?:java|ecma)script|text\/css/, `${pathname}: render asset content type`)
  assert.ok(Buffer.byteLength(asset.body) <= crawlBudget, `${pathname}: render asset exceeds the 1.5 MB uncompressed crawl budget`)
}

for (const pathname of images) {
  const image = await fetchPage(pathname)
  assert.equal(image.response.status, 200, `${pathname}: social image must remain available after route moves`)
  assert.match(image.response.headers.get('content-type') ?? '', /^image\//, `${pathname}: social image content type`)
}

const home = pages.get('/')
assert.ok(home, 'Homepage must be in the sitemap')
const homeIds = new Set([...home.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]))
for (const [pathname, html] of pages) {
  for (const match of html.matchAll(/href="\/#([^"]+)"/g)) {
    assert.ok(homeIds.has(match[1]), `${pathname}: missing homepage fragment #${match[1]}`)
  }
  assert.doesNotMatch(html, /"@type":"SoftwareApplication"/, `${pathname}: no inherited application offer`)
}
assert.match(home, /href="https:\/\/app-sandbox\.hodle\.com\.br\/?"/, 'Home must link to separate sandbox registration')

for (const [pt, en] of [['/brs', '/en/brs'], ['/api-pix-stablecoin', '/en/pix-stablecoin-api']]) {
  for (const pathname of [pt, en]) {
    const html = pages.get(pathname)
    const alternates = [...html.matchAll(/<link\b[^>]*>/gi)].map(([tag]) =>
      Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, name, value]) => [name.toLowerCase(), value])),
    ).filter((link) => link.rel === 'alternate')
    assert.ok(alternates.some((link) => link.hreflang === 'pt-BR' && link.href === `${canonicalOrigin}${pt}`), `${pathname}: Portuguese alternate`)
    assert.ok(alternates.some((link) => link.hreflang === 'en' && link.href === `${canonicalOrigin}${en}`), `${pathname}: English alternate`)
  }
}

const markdown = await fetchPage('/', { Accept: 'text/markdown' })
assert.equal(markdown.response.status, 200)
assert.match(markdown.response.headers.get('content-type') ?? '', /text\/markdown/)
assert.match(markdown.body, /app-sandbox\.hodle\.com\.br/)
assert.doesNotMatch(markdown.body, /a liquidação é instantânea/)

for (const pathname of ['/animation', '/create/lightning/seo-verification']) {
  const utility = await fetchPage(pathname)
  assert.equal(utility.response.status, 200, `${pathname}: utility remains available`)
  assert.match(utility.body, /<meta name="robots" content="noindex/, `${pathname}: utility noindex`)
  assert.match(utility.body, /<meta name="googlebot" content="noindex/, `${pathname}: Googlebot noindex`)
}
const robots = await fetchPage('/robots.txt')
assert.equal(robots.response.status, 200)
assert.doesNotMatch(robots.body, /Disallow: \/(?:animation|create)(?:\s|$)/)

for (const path of ['/seo-verification-missing-page', '/unknown/nested/seo-verification', '/en/seo-verification-missing-page']) {
  const missing = await fetchPage(path)
  assert.equal(missing.response.status, 404, `${path}: real HTTP 404`)
  assert.equal([...missing.body.matchAll(/<html\b/gi)].length, 1, `${path}: one error document`)
  assert.equal([...missing.body.matchAll(/<body\b/gi)].length, 1, `${path}: one error body`)
}

const article = pages.get('/articles/psav-regulacao-banco-central')
assert.ok(article?.includes('589'), 'PSAV article must cite the amendment')
assert.ok(article?.includes('6 de novembro de 2026'), 'Article must distinguish the amended prohibition date')
assert.ok(article?.includes('30 de outubro de 2026'), 'Article must retain the separate filing deadline')

console.log(`SEO verification passed: ${urls.length} public URLs, ${renderAssets.size} JS/CSS assets and ${images.size} social images; crawl size budget, canonical, H1, language, indexability, JSON-LD, navigation, hreflang, Markdown, sandbox, utility noindex and 404 checks.`)
