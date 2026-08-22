import type { Metadata } from 'next'
import { sobre } from '../../content/pages/sobre'
import { InfoPageView } from '../../components/infoPageView'
import { infoPageMetadata } from '../../utils/infoPageMetadata'

const siteUrl = 'https://hodle.com.br'

export const metadata: Metadata = infoPageMetadata({ page: sobre })

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre a Hodle',
  description: sobre.description,
  url: `${siteUrl}/sobre`,
  inLanguage: 'pt-BR',
  dateModified: sobre.updatedAt,
  mainEntity: {
    '@type': 'Organization',
    name: 'Hodle',
    legalName: 'Hodle LLC',
    url: siteUrl,
    logo: `${siteUrl}/h-logo.svg`,
    foundingDate: '2026-05-04',
    email: 'contato@hodle.com.br',
    telephone: '+55-11-96000-0445',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30 N Gould St, Ste R',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US',
    },
  },
  isPartOf: {
    '@type': 'WebSite',
    name: 'Hodle',
    url: siteUrl,
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Sobre',
      item: `${siteUrl}/sobre`,
    },
  ],
}

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <InfoPageView page={sobre} />
    </>
  )
}
