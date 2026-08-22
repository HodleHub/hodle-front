import fs from 'fs'
import path from 'path'
import { expect, it } from 'vitest'
import { staticSitePaths } from './sitePaths'
import { markdownPaths } from './markdownPaths'

const appDirectory = path.join(process.cwd(), 'src/app')

const dynamicSegment = /^[[(]/
const excludedRoots = ['api', 'md', 'lnurlp', '.well-known']

const collectPagePaths = (directory: string, prefix: string): string[] => {
  const entries = fs.readdirSync(directory, { withFileTypes: true })

  const own = entries.some((entry) => entry.name === 'page.tsx')
    ? [prefix === '' ? '/' : prefix]
    : []

  const nested = entries
    .filter((entry) => entry.isDirectory())
    .filter((entry) => !dynamicSegment.test(entry.name))
    .filter((entry) => !excludedRoots.includes(entry.name))
    .flatMap((entry) =>
      collectPagePaths(
        path.join(directory, entry.name),
        `${prefix}/${entry.name}`,
      ),
    )

  return [...own, ...nested]
}

it('covers every static page route under src/app', () => {
  const routes = collectPagePaths(appDirectory, '').sort()
  const missing = routes.filter((route) => !staticSitePaths.includes(route))

  expect(missing).toEqual([])
})

it('covers every path that has a markdown variant', () => {
  const dynamicPaths = markdownPaths.filter(
    (markdownPath) => !staticSitePaths.includes(markdownPath),
  )

  expect(
    dynamicPaths.every((markdownPath) => markdownPath.startsWith('/')),
  ).toBe(true)
})

it('is sorted and free of duplicates', () => {
  expect(new Set(staticSitePaths).size).toBe(staticSitePaths.length)
  expect([...staticSitePaths].sort()).toEqual(staticSitePaths)
})
