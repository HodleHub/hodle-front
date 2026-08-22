import type { Metadata } from 'next'
import { desenvolvedores } from '../../content/pages/desenvolvedores'
import { InfoPageView } from '../../components/infoPageView'
import { infoPageMetadata } from '../../utils/infoPageMetadata'

const siteUrl = 'https://hodle.com.br'

export const metadata: Metadata = infoPageMetadata({ page: desenvolvedores })

const webApiJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebAPI',
  name: 'Hodle API',
  alternateName: 'API Hodle',
  description:
    'API REST para pagar Pix a partir de saldo em stablecoin, emitir invoice Lightning que liquida em Pix, rodar on-ramp e off-ramp, ler carteiras auto-custodiais e enviar KYC de usuário final.',
  url: `${siteUrl}/desenvolvedores`,
  documentation: 'https://docs.hodle.com.br',
  termsOfService: `${siteUrl}/termos`,
  provider: {
    '@type': 'Organization',
    name: 'Hodle',
    url: siteUrl,
  },
  potentialAction: {
    '@type': 'ConsumeAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://api.hodle.com.br',
      contentType: 'application/json',
      httpMethod: ['GET', 'POST'],
      description:
        'Autenticação por API key: Authorization: Bearer SUA_API_KEY.',
    },
  },
  encodingFormat: 'application/json',
  isBasedOn: `${siteUrl}/openapi.json`,
}

const techArticleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'API Hodle para desenvolvedores',
  description: desenvolvedores.description,
  url: `${siteUrl}/desenvolvedores`,
  inLanguage: 'pt-BR',
  dateModified: desenvolvedores.updatedAt,
  author: { '@type': 'Organization', name: 'Hodle', url: siteUrl },
  publisher: { '@type': 'Organization', name: 'Hodle', url: siteUrl },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Desenvolvedores',
      item: `${siteUrl}/desenvolvedores`,
    },
  ],
}

export default function DesenvolvedoresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApiJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <InfoPageView page={desenvolvedores} />
    </>
  )
}
