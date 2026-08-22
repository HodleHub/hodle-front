import { markdownPaths } from '../content/markdown/markdownPaths'

const knownPaths = new Set(markdownPaths)

const stripTrailingSlash = (pathname: string): string => {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

/**
 * True when `pathname` has a markdown representation the `/md` route can serve.
 */
export const hasMarkdownVariant = (pathname: string): boolean =>
  knownPaths.has(stripTrailingSlash(pathname))
