import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const script = fileURLToPath(new URL('../check-crawl-budget.mjs', import.meta.url))
const budget = 1_500_000

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'hodle-crawl-budget-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  const put = async (path, contents) => {
    const target = join(root, path)
    await mkdir(dirname(target), { recursive: true })
    await writeFile(target, contents)
  }
  await put('.next/BUILD_ID', 'test-build')
  await put('.next/server/app/index.html', '<html>Hodle</html>')
  await put('.next/static/chunks/app.js', 'console.log("Hodle")')
  await mkdir(join(root, 'public'))
  return {
    root,
    put,
    run: () => spawnSync(process.execPath, [script], { cwd: root, encoding: 'utf8' }),
  }
}

test('accepts the exact decimal budget and reports nested files by type', async (t) => {
  const { put, run } = await fixture(t)
  await put('.next/server/app/articles/example.html', 'a'.repeat(budget))
  await put('.next/server/app/articles/example.rsc', 'rsc')
  await put('.next/static/css/nested/app.css', 'body{}')
  await put('.next/static/data/nested/catalog.json', '{}')
  await put('public/nested/robots.txt', 'Allow: /')
  await put('public/.well-known/apple-app-site-association', '{}')
  const result = run()

  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /1,500,000 bytes\s+\.next\/server\/app\/articles\/example\.html/)
  for (const type of ['HTML', 'RSC', 'JS', 'CSS', 'JSON', 'TXT', 'WELL-KNOWN']) {
    assert.ok(result.stdout.includes(`${type} (`), `Missing report for ${type}`)
  }
  assert.match(result.stdout, /Crawl budget passed/)
})

test('measures uncompressed UTF-8 bytes and rejects files above the budget', async (t) => {
  const { put, run } = await fixture(t)
  // 750,001 characters, but 1,500,002 bytes before compression.
  await put('.next/server/app/large.rsc', 'é'.repeat(budget / 2 + 1))
  await put('.next/static/chunks/large.js', 'a'.repeat(budget + 1))
  await put('public/nested/large.svg', 'a'.repeat(budget + 1))
  await put('public/.well-known/openid-configuration', 'a'.repeat(budget + 1))
  const result = run()

  assert.equal(result.status, 1)
  assert.match(result.stderr, /Crawl budget exceeded by 4 file\(s\)/)
  assert.match(result.stderr, /large\.rsc: 1,500,002 bytes \(2 bytes over budget\)/)
  assert.match(result.stderr, /large\.js: 1,500,001 bytes \(1 bytes over budget\)/)
  assert.match(result.stderr, /public\/nested\/large\.svg/)
  assert.match(result.stderr, /public\/\.well-known\/openid-configuration/)
})

test('excludes server bundles, source maps, fonts, raster media and unknown extensionless files', async (t) => {
  const { put, run } = await fixture(t)
  for (const path of [
    '.next/server/app/page.js', '.next/server/chunks/large.js',
    '.next/static/chunks/app.js.map', '.next/static/media/font.woff2',
    'public/photo.png', 'public/movie.mp4', 'public/app.js.map',
    'public/.well-known/unknown-binary', 'public/unknown-text',
  ]) {
    await put(path, 'a'.repeat(budget + 1))
  }
  const result = run()

  assert.equal(result.status, 0, result.stderr)
  assert.match(result.stdout, /Checked 2 generated/)
})

test('uses route response metadata to check text bodies while excluding binary images', async (t) => {
  const { put, run } = await fixture(t)
  await put('.next/server/app/opengraph-image.body', Buffer.alloc(budget + 1))
  await put('.next/server/app/opengraph-image.meta', JSON.stringify({ headers: { 'content-type': 'image/png' } }))
  for (const [path, mime] of [
    ['sitemap.xml', 'application/xml'], ['robots.txt', 'text/plain'],
    ['discovery', 'application/linkset+json'], ['styles', 'text/css'],
    ['script', 'application/javascript'],
  ]) {
    await put(`.next/server/app/${path}.body`, 'small text response')
    await put(`.next/server/app/${path}.meta`, JSON.stringify({ headers: { 'Content-Type': `${mime}; charset=utf-8` } }))
  }
  const underBudget = run()
  assert.equal(underBudget.status, 0, underBudget.stderr)
  assert.doesNotMatch(underBudget.stdout, /opengraph-image\.body/)
  for (const type of ['XML', 'TXT', 'JSON', 'CSS', 'JS']) {
    assert.ok(underBudget.stdout.includes(`${type} (`), `Missing route response type ${type}`)
  }

  await put('.next/server/app/md/article.body', 'é'.repeat(budget / 2 + 1))
  await put('.next/server/app/md/article.meta', JSON.stringify({ headers: { 'content-type': 'text/markdown; charset=utf-8' } }))
  const overBudget = run()
  assert.equal(overBudget.status, 1)
  assert.match(overBudget.stdout, /MARKDOWN \(1 files\)/)
  assert.match(overBudget.stderr, /Crawl budget exceeded by 1 file\(s\)/)
  assert.match(overBudget.stderr, /md\/article\.body: 1,500,002 bytes \(2 bytes over budget\)/)
})

test('fails when production build output is missing or incomplete', async (t) => {
  const { root, run } = await fixture(t)
  await rm(join(root, '.next/BUILD_ID'))
  const missing = run()
  assert.equal(missing.status, 1)
  assert.match(missing.stderr, /Production build missing/)

  await writeFile(join(root, '.next/BUILD_ID'), 'test-build')
  await rm(join(root, '.next/server/app/index.html'))
  const incomplete = run()
  assert.equal(incomplete.status, 1)
  assert.match(incomplete.stderr, /Production build incomplete/)

  await rm(join(root, '.next/static'), { recursive: true })
  const missingDirectory = run()
  assert.equal(missingDirectory.status, 1)
  assert.match(missingDirectory.stderr, /Crawl budget check failed/)
})
