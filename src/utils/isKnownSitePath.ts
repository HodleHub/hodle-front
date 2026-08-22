import {
  staticSitePaths,
  sitePathPrefixes,
} from '../content/markdown/sitePaths'
import {
  articleMarkdownSlugs,
  topicMarkdownSlugs,
} from '../content/markdown/markdownPaths'

const knownPaths = new Set([
  ...staticSitePaths,
  ...topicMarkdownSlugs.map((slug) => `/${slug}`),
  ...articleMarkdownSlugs.map((slug) => `/articles/${slug}`),
])

const stripTrailingSlash = (pathname: string): string => {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

/**
 * True when the app has a page for `pathname`. A false answer is what the
 * middleware turns into a markdown 404.
 */
export const isKnownSitePath = (pathname: string): boolean => {
  const path = stripTrailingSlash(pathname)

  if (knownPaths.has(path)) {
    return true
  }

  return sitePathPrefixes.some((prefix) => path.startsWith(prefix))
}
