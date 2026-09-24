import type { Metadata } from 'next'
import '../landingV2.css'
import { Faq } from '../../components/landingV2/Faq'
import { UsdAudiences } from '../../components/usd/UsdAudiences'
import { UsdClosingCta } from '../../components/usd/UsdClosingCta'
import { UsdFlowBuilder } from '../../components/usd/UsdFlowBuilder'
import { UsdHero } from '../../components/usd/UsdHero'
import { UsdMiddleLayer } from '../../components/usd/UsdMiddleLayer'
import { UsdRailCompare } from '../../components/usd/UsdRailCompare'
import { UsdRailGrid } from '../../components/usd/UsdRailGrid'
import { UsdStats } from '../../components/usd/UsdStats'
import { UsdSteps } from '../../components/usd/UsdSteps'
import { USD_FAQ_ITEMS, USD_PAGE_DESCRIPTION, USD_PAGE_TITLE, USD_PAGE_URL } from '../../components/usd/usdData'

const title = USD_PAGE_TITLE
const description = USD_PAGE_DESCRIPTION

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: USD_PAGE_URL,
  },
  openGraph: {
    title,
    description,
    url: USD_PAGE_URL,
    siteName: 'Hodle',
    images: [
      {
        url: 'https://hodle.com.br/og-image-v2.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://hodle.com.br/og-image-v2.png'],
  },
}

const webpageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: USD_PAGE_URL,
  inLanguage: 'pt-BR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Hodle',
    url: 'https://hodle.com.br',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: USD_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function UsdPage() {
  return (
    <div className="lv2 bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <UsdHero />
      <UsdRailGrid />
      <UsdStats />
      <UsdMiddleLayer />
      <UsdSteps />
      <UsdRailCompare />
      <UsdFlowBuilder />
      <UsdAudiences />
      <Faq items={USD_FAQ_ITEMS} />
      <UsdClosingCta />
    </div>
  )
}
