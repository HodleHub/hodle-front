import { readFile, readdir, stat } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'

const root = process.cwd()
const budget = 1_500_000
const formatBytes = (bytes) => `${bytes.toLocaleString('en-US')} bytes`
const publicTypes = new Map([
  ['.html', 'HTML'], ['.js', 'JS'], ['.mjs', 'JS'], ['.css', 'CSS'],
  ['.json', 'JSON'], ['.svg', 'SVG'], ['.txt', 'TXT'], ['.xml', 'XML'],
])
const wellKnownTextFiles = new Set([
  'apple-app-site-association', 'webfinger', 'nodeinfo', 'host-meta',
  'openid-configuration', 'oauth-authorization-server',
])

async function collect(directory, classify) {
  const files = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...await collect(path, classify))
    } else if (entry.isFile()) {
      const type = await classify(path)
      if (type) files.push({ path: relative(root, path), type, bytes: (await stat(path)).size })
    }
  }
  return files
}

async function generatedBodyType(path) {
  // Next stores route response bodies separately from their HTTP metadata.
  const metadata = JSON.parse(await readFile(path.replace(/\.body$/, '.meta'), 'utf8'))
  const header = Object.entries(metadata.headers ?? {})
    .find(([name]) => name.toLowerCase() === 'content-type')?.[1]
  const mime = String(header ?? '').split(';')[0].trim().toLowerCase()
  if (mime.startsWith('image/')) return null
  if (mime === 'text/html' || mime === 'application/xhtml+xml') return 'HTML'
  if (mime === 'application/json' || mime.endsWith('+json')) return 'JSON'
  if (mime === 'application/xml' || mime === 'text/xml' || mime.endsWith('+xml')) return 'XML'
  if (/^(?:application|text)\/(?:javascript|ecmascript)$/.test(mime)) return 'JS'
  if (mime === 'text/css') return 'CSS'
  if (mime === 'text/markdown') return 'MARKDOWN'
  return mime.startsWith('text/') ? 'TXT' : null
}

async function checkCrawlBudget() {
  // BUILD_ID is written by a completed production build, unlike next dev output.
  const buildId = join(root, '.next/BUILD_ID')
  if (!(await stat(buildId).catch(() => null))?.isFile()) {
    throw new Error('Production build missing: run next build before checking the crawl budget (.next/BUILD_ID not found).')
  }

  const appFiles = await collect(join(root, '.next/server/app'), (path) => {
    const extension = extname(path)
    if (extension === '.body') return generatedBodyType(path)
    return extension === '.html' ? 'HTML' : extension === '.rsc' ? 'RSC' : null
  })
  const staticFiles = await collect(join(root, '.next/static'), (path) => {
    const extension = extname(path)
    return ['.js', '.css', '.json'].includes(extension) ? publicTypes.get(extension) : null
  })
  if (!appFiles.some((file) => file.type === 'HTML') || staticFiles.length === 0) {
    throw new Error('Production build incomplete: expected generated HTML and browser assets in .next/server/app and .next/static.')
  }

  const publicFiles = await collect(join(root, 'public'), (path) => {
    const extensionType = publicTypes.get(extname(path).toLowerCase())
    if (extensionType) return extensionType
    const publicPath = relative(join(root, 'public'), path).split(/[\\/]/)
    return publicPath.length === 2 && publicPath[0] === '.well-known' && wellKnownTextFiles.has(publicPath[1])
      ? 'WELL-KNOWN'
      : null
  })
  const files = [...appFiles, ...staticFiles, ...publicFiles]
    .sort((a, b) => b.bytes - a.bytes || a.path.localeCompare(b.path))

  console.log(`Crawl payload budget: ${formatBytes(budget)} per uncompressed file (1.5 MB decimal).`)
  console.log(`Checked ${files.length} generated HTML/RSC/text responses, browser JS/CSS/JSON and public text files.`)
  console.log('Largest files by type (up to 3 each):')
  for (const type of [...new Set(files.map((file) => file.type))].sort()) {
    const matching = files.filter((file) => file.type === type)
    console.log(`${type} (${matching.length} files):`)
    for (const file of matching.slice(0, 3)) console.log(`  ${formatBytes(file.bytes)}  ${file.path}`)
  }

  const oversized = files.filter((file) => file.bytes > budget)
  if (oversized.length > 0) {
    console.error(`Crawl budget exceeded by ${oversized.length} file(s):`)
    for (const file of oversized) {
      console.error(`  ${file.path}: ${formatBytes(file.bytes)} (${formatBytes(file.bytes - budget)} over budget)`)
    }
    process.exitCode = 1
    return
  }
  console.log(`Crawl budget passed: all checked files are at or below ${formatBytes(budget)}.`)
}

checkCrawlBudget().catch((error) => {
  console.error(`Crawl budget check failed: ${error.message}`)
  process.exitCode = 1
})
