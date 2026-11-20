import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { listHtmlFiles } from './deferHydration/listHtmlFiles.mjs'
import { transformHtml } from './deferHydration/transformHtml.mjs'

const APP_DIR = join(process.cwd(), '.next', 'server', 'app')

const rewrite = async (file) => {
  const original = await readFile(file, 'utf8')
  const { html, count } = transformHtml({ html: original })

  if (count === 0) return false

  await writeFile(file, html)

  return true
}

const files = await listHtmlFiles({ dir: APP_DIR })
const rewritten = (await Promise.all(files.map(rewrite))).filter(Boolean).length

console.log(`defer-hydration: rewrote ${rewritten} of ${files.length} prerendered pages`)

if (files.length > 0 && rewritten === 0) {
  console.error(
    'defer-hydration: found prerendered pages but rewrote none. The Next.js markup likely changed; update scripts/deferHydration/transformHtml.mjs or remove the step from the build script.',
  )
  process.exit(1)
}
