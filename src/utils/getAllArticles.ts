import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { toArticleMeta } from './toArticleMeta'
import { ArticleMeta } from '../types/article'

export const articlesDirectory = path.join(process.cwd(), 'src/content/articles')

/**
 * Every article in `src/content/articles`, newest first.
 */
export const getAllArticles = (): ArticleMeta[] => {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => path.extname(fileName) === '.mdx')
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fileContents = fs.readFileSync(
        path.join(articlesDirectory, fileName),
        'utf8',
      )
      const { content, data } = matter(fileContents)

      return toArticleMeta({ slug, body: content, data })
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
