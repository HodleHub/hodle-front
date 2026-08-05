import type { Metadata } from 'next'
import { BrsHero } from '../../../components/brs/BrsHero'
import { BrsValueProps } from '../../../components/brs/BrsValueProps'
import { BrsHowItWorks } from '../../../components/brs/BrsHowItWorks'
import { BrsUseCases } from '../../../components/brs/BrsUseCases'
import { BrsDeveloperSection } from '../../../components/brs/BrsDeveloperSection'
import { BrsFaq } from '../../../components/brs/BrsFaq'
import { BrsFinalCta } from '../../../components/brs/BrsFinalCta'
import { brsCopy } from '../../../components/brs/brsCopy'

const siteUrl = 'https://hodle.com.br'
const pageUrl = `${siteUrl}/en/brs`
const copy = brsCopy.en

const title = 'BRS: the local Real stablecoin at Hodle'
const description =
  'BRS is Nora Finance\'s 1:1 Real stablecoin, available on Hodle. Move in and out via Pix 24/7 and circulate on-chain on Solana.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
    languages: {
      'pt-BR': `${siteUrl}/brs`,
      en: pageUrl,
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
    locale: 'en_US',
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
  inLanguage: 'en',
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
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function EnglishBrsPage() {
  return (
    <div lang="en" className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BrsHero copy={copy} />
      <BrsValueProps copy={copy} />
      <BrsHowItWorks copy={copy} />
      <BrsUseCases copy={copy} />
      <BrsDeveloperSection copy={copy} />
      <BrsFaq copy={copy} />
      <BrsFinalCta copy={copy} />
    </div>
  )
}
