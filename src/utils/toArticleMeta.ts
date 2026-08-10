import {
  articleCategories,
  defaultArticleCategory,
} from '../content/articleCategories'
import { getReadingMinutes } from './getReadingMinutes'
import { ArticleCover, ArticleMeta } from '../types/article'

const DEFAULT_AUTHOR_NAME = 'Hodle'
const DEFAULT_AUTHOR_ROLE = 'Equipe Hodle'

type ToArticleMetaArgs = {
  slug: string
  body: string
  data: Record<string, any>
}

const toCover = ({
  data,
  title,
}: {
  data: Record<string, any>
  title: string
}): ArticleCover | null => {
  const src = data.coverImage || data.imageUrl

  if (!src) {
    return null
  }

  return { src, alt: data.coverAlt || title }
}

/**
 * Maps raw frontmatter onto the typed article metadata the pattern renders.
 * Every optional field degrades to a sane default so an article only has to
 * declare `title`, `description` and `date`.
 */
export const toArticleMeta = ({
  slug,
  body,
  data,
}: ToArticleMetaArgs): ArticleMeta => ({
  slug,
  title: data.title,
  description: data.description,
  date: data.date,
  category: articleCategories[data.category] || defaultArticleCategory,
  author: {
    name: data.author || DEFAULT_AUTHOR_NAME,
    role: data.authorRole || DEFAULT_AUTHOR_ROLE,
  },
  cover: toCover({ data, title: data.title }),
  coverKicker: data.coverKicker || data.title,
  readingMinutes: getReadingMinutes({ body }),
})
