import type { Metadata } from 'next'
import { contato } from '../../content/pages/contato'
import { InfoPageView } from '../../components/infoPageView'
import { infoPageMetadata } from '../../utils/infoPageMetadata'
import { organizationContactPoints } from '../../content/organizationContactPoints'

const siteUrl = 'https://hodle.com.br'

export const metadata: Metadata = infoPageMetadata({ page: contato })

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato | Hodle',
  description: contato.description,
  url: `${siteUrl}/contato`,
  inLanguage: 'pt-BR',
  dateModified: contato.updatedAt,
  mainEntity: {
    '@type': 'Organization',
    name: 'Hodle',
    legalName: 'Hodle LLC',
    url: siteUrl,
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
    contactPoint: organizationContactPoints,
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
      name: 'Contato',
      item: `${siteUrl}/contato`,
    },
  ],
}

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <InfoPageView page={contato} />
    </>
  )
}
