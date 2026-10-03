import type { Metadata } from 'next'
import { BrsHero } from '../../../components/brs/BrsHero'
import { BrsValueProps } from '../../../components/brs/BrsValueProps'
import { BrsHowItWorks } from '../../../components/brs/BrsHowItWorks'
import { BrsUseCases } from '../../../components/brs/BrsUseCases'
import { BrsDeveloperSection } from '../../../components/brs/BrsDeveloperSection'
import { BrsFaq } from '../../../components/brs/BrsFaq'
import { BrsFinalCta } from '../../../components/brs/BrsFinalCta'
import { brsCopy } from '../../../components/brs/brsCopy'
import { BrsResources } from '../../../components/brs/BrsResources'
import { pageUpdatedAt } from '../../../content/pageUpdatedAt'

const copy = brsCopy.pt
const siteUrl = 'https://hodle.com.br'
const pageUrl = `${siteUrl}/brs`

const title = copy.hero.metadataTitle
const description = copy.hero.description

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
    languages: {
      'pt-BR': pageUrl,
      en: `${siteUrl}/en/brs`,
    },
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: 'Hodle',
    images: [
      {
        url: `${siteUrl}/og-image-v2.png`,
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
    images: [`${siteUrl}/og-image-v2.png`],
  },
}

const webpageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: pageUrl,
  dateModified: pageUpdatedAt.brs,
  inLanguage: 'pt-BR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Hodle',
    url: siteUrl,
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: copy.faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function BrsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BrsHero
        languageLink={{
          href: '/en/brs',
          hrefLang: 'en',
          label: 'English',
        }}
      />
      <BrsValueProps />
      <BrsHowItWorks />
      <BrsUseCases />
      <BrsDeveloperSection />
      <BrsFaq />
      <BrsResources copy={copy} />
      <BrsFinalCta />
    </div>
  )
}
