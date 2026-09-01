import { ArticleFaqItem } from '../types/article'

/**
 * The FAQ section of an article rendered as markdown. The questions live in
 * frontmatter, so without this the markdown mirror of an article would drop
 * exactly the question and answer pairs an AI crawler quotes.
 */
export const articleFaqToMarkdown = ({
  items,
}: {
  items: ArticleFaqItem[]
}): string[] => {
  if (items.length === 0) {
    return []
  }

  const questions = items.flatMap((item) => [
    `### ${item.question}`,
    '',
    item.answer,
    '',
  ])

  return ['', '## Perguntas frequentes', '', ...questions]
}
