import type { Metadata } from 'next'
import { InfoPage } from '../types/infoPage'

const siteUrl = 'https://hodle.com.br'

/**
 * Metadata for an `InfoPage`, so `/sobre`, `/contato` and `/desenvolvedores`
 * describe themselves the same way.
 */
export const infoPageMetadata = ({ page }: { page: InfoPage }): Metadata => {
  const url = `${siteUrl}/${page.slug}`

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
      types: {
        'text/markdown': url,
      },
    },
    openGraph: {
      title: `${page.title} | Hodle`,
      description: page.description,
      url,
      images: ['/og-image-v2.png'],
    },
  }
}
