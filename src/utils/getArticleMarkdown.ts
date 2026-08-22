import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { articlesDirectory } from './getAllArticles'

const siteUrl = 'https://hodle.com.br'

/**
 * The raw markdown body of one article, with a front-matter derived header.
 * Read at build time, the same way the article page reads it.
 */
export const getArticleMarkdown = ({
  slug,
}: {
  slug: string
}): string | undefined => {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return undefined
  }

  const { content, data } = matter(fs.readFileSync(filePath, 'utf8'))

  return [
    `# ${data.title ?? slug}`,
    '',
    ...(data.description ? [`> ${data.description}`, ''] : []),
    `Fonte canônica: ${siteUrl}/articles/${slug}${data.date ? ` — publicado em ${data.date}` : ''}.`,
    '',
    content.trim(),
    '',
  ].join('\n')
}
