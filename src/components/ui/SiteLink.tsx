import Link from 'next/link'
import type { ComponentProps } from 'react'
import { isStaticFileHref } from '../../utils/isStaticFileHref'

type SiteLinkProps = ComponentProps<typeof Link>

/**
 * `next/link` for routes, a plain anchor for static files under `public/`
 * (`.txt`, `.json`, `.pdf`, `.html`, `.xml`) so Next never prefetches them as
 * RSC routes and logs a 404.
 */
export const SiteLink = ({ href, prefetch, ...rest }: SiteLinkProps) => {
  if (typeof href === 'string' && isStaticFileHref(href)) {
    return <a href={href} {...rest} />
  }

  return <Link href={href} prefetch={prefetch} {...rest} />
}
