import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { articlesDirectory } from './getAllArticles'
import { compileArticleContent } from './compileArticleContent'
import { toArticleMeta } from './toArticleMeta'
import { Article } from '../types/article'

/**
 * Compiles one `.mdx` article to a renderable component plus its typed metadata.
 * Returns null when the slug has no file, which the route turns into a 404.
 */
export const getArticleBySlug = async ({
  slug,
}: {
  slug: string
}): Promise<Article | null> => {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const { content, data } = matter(fs.readFileSync(filePath, 'utf8'))

  return {
    ...toArticleMeta({ slug, body: content, data }),
    content: await compileArticleContent({ source: content }),
  }
}
