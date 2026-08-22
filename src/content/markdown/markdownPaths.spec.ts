import fs from 'fs'
import path from 'path'
import { expect, it } from 'vitest'
import {
  articleMarkdownSlugs,
  markdownPaths,
  staticMarkdownPaths,
  topicMarkdownSlugs,
} from './markdownPaths'
import { topics } from '../topics/topics'

const appDirectory = path.join(process.cwd(), 'src/app')
const articlesDirectory = path.join(process.cwd(), 'src/content/articles')

it('lists every topic slug in the topic registry', () => {
  const registrySlugs = topics.map((topic) => topic.slug).sort()

  expect([...topicMarkdownSlugs].sort()).toEqual(registrySlugs)
})

it('lists every article file on disk', () => {
  const diskSlugs = fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
    .sort()

  expect([...articleMarkdownSlugs].sort()).toEqual(diskSlugs)
})

it('only lists static paths that have a page on disk', () => {
  const missing = staticMarkdownPaths.filter((markdownPath) => {
    const segments = markdownPath === '/' ? [] : markdownPath.slice(1).split('/')

    return !fs.existsSync(
      path.join(appDirectory, ...segments, 'page.tsx'),
    )
  })

  expect(missing).toEqual([])
})

it('has no duplicate entries', () => {
  expect(new Set(markdownPaths).size).toBe(markdownPaths.length)
})

it('starts every entry with a slash and never ends with one', () => {
  const malformed = markdownPaths.filter(
    (markdownPath) =>
      !markdownPath.startsWith('/') ||
      (markdownPath.length > 1 && markdownPath.endsWith('/')),
  )

  expect(malformed).toEqual([])
})
