import { ArticleFaqItem } from '../types/article'

const isFaqItem = (entry: any): boolean =>
  Boolean(entry) &&
  typeof entry.question === 'string' &&
  typeof entry.answer === 'string' &&
  entry.question.trim().length > 0 &&
  entry.answer.trim().length > 0

/**
 * Normalizes the optional `faq` frontmatter into typed pairs. Anything that is
 * not a complete question/answer pair is dropped so a malformed entry never
 * reaches the FAQPage structured data, where Google treats it as an error.
 */
export const toArticleFaq = ({
  data,
}: {
  data: Record<string, any>
}): ArticleFaqItem[] => {
  if (!Array.isArray(data.faq)) {
    return []
  }

  return data.faq.filter(isFaqItem).map((entry: ArticleFaqItem) => ({
    question: entry.question.trim(),
    answer: entry.answer.trim(),
  }))
}
