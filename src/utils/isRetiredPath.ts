const retiredPaths = new Set(['/gateway-de-pagamento-cripto'])

const stripTrailingSlash = (pathname: string): string => {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }

  return pathname
}

/**
 * True when `pathname` was a published page that was removed on purpose. The
 * middleware answers it with 410 Gone so search engines drop it from the index
 * faster than a 404.
 */
export const isRetiredPath = (pathname: string): boolean =>
  retiredPaths.has(stripTrailingSlash(pathname))
