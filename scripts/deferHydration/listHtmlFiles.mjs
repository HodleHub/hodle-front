import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Recursively lists every `.html` file under a directory.
 *
 * @param args.dir Directory to walk.
 * @returns Absolute paths of the html files found.
 */
export const listHtmlFiles = async ({ dir }) => {
  const entries = await readdir(dir, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map((entry) => {
      const full = join(dir, entry.name)

      if (entry.isDirectory()) return listHtmlFiles({ dir: full })

      return entry.name.endsWith('.html') ? [full] : []
    }),
  )

  return nested.flat()
}
