const STATIC_FILE_PATH = /^\/[^?#]*\.(txt|json|pdf|html|xml)(?:[?#].*)?$/

/**
 * Tells whether a site-relative href points at a static file served from
 * `public/` (not an App Router route), so it must not go through `next/link`
 * prefetching.
 */
export const isStaticFileHref = (href: string): boolean => STATIC_FILE_PATH.test(href)
