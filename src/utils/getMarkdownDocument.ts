import {
  articleMarkdownSlugs,
  topicMarkdownSlugs,
} from '../content/markdown/markdownPaths'
import { homeMarkdown } from '../content/markdown/homeMarkdown'
import { sobre } from '../content/pages/sobre'
import { contato } from '../content/pages/contato'
import { desenvolvedores } from '../content/pages/desenvolvedores'
import { getTopicBySlug } from './getTopicBySlug'
import { getArticleMarkdown } from './getArticleMarkdown'
import { articlesIndexToMarkdown } from './articlesIndexToMarkdown'
import { infoPageToMarkdown } from './infoPageToMarkdown'
import { topicToMarkdown } from './topicToMarkdown'
import { glossaryToMarkdown } from './glossaryToMarkdown'
import { faqToMarkdown } from './faqToMarkdown'
import { pricingToMarkdown } from './pricingToMarkdown'

const staticDocuments: Record<string, () => string> = {
  '/': () => homeMarkdown,
  '/articles': articlesIndexToMarkdown,
  '/contato': () => infoPageToMarkdown({ page: contato }),
  '/desenvolvedores': () => infoPageToMarkdown({ page: desenvolvedores }),
  '/faq': faqToMarkdown,
  '/glossario': glossaryToMarkdown,
  '/precos': pricingToMarkdown,
  '/sobre': () => infoPageToMarkdown({ page: sobre }),
}

const articlePrefix = '/articles/'

/**
 * The markdown representation of a pathname, or `undefined` when the path has
 * none. `undefined` is what the route turns into a 404 markdown body.
 */
export const getMarkdownDocument = ({
  pathname,
}: {
  pathname: string
}): string | undefined => {
  const staticDocument = staticDocuments[pathname]

  if (staticDocument) {
    return staticDocument()
  }

  if (pathname.startsWith(articlePrefix)) {
    const slug = pathname.slice(articlePrefix.length)

    if (!articleMarkdownSlugs.includes(slug)) {
      return undefined
    }

    return getArticleMarkdown({ slug })
  }

  const topicSlug = pathname.slice(1)

  if (!topicMarkdownSlugs.includes(topicSlug)) {
    return undefined
  }

  const topic = getTopicBySlug({ slug: topicSlug })

  if (!topic) {
    return undefined
  }

  return topicToMarkdown({ topic })
}
