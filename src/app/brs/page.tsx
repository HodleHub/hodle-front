import type { Metadata } from 'next'
import { BrsHero } from '../../components/brs/BrsHero'
import { BrsValueProps } from '../../components/brs/BrsValueProps'
import { BrsHowItWorks } from '../../components/brs/BrsHowItWorks'
import { BrsUseCases } from '../../components/brs/BrsUseCases'
import { BrsDeveloperSection } from '../../components/brs/BrsDeveloperSection'
import { BrsFaq } from '../../components/brs/BrsFaq'
import { BrsFinalCta } from '../../components/brs/BrsFinalCta'

const siteUrl = 'https://hodle.com.br'
const pageUrl = `${siteUrl}/brs`

const title = 'BRS: a stablecoin local do Real, na Hodle'
const description =
  'BRS é a stablecoin de Real da Nora Finance, disponível na Hodle. Lastreada 1:1 em reais, entra e sai via Pix 24/7, e circula on-chain na rede Solana.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
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
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é o BRS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BRS é uma stablecoin de Real, emitida pela Nora Finance. Cada BRS é lastreado 1:1 em reais mantidos em reserva, e você pode comprar, guardar e movimentar BRS na Hodle.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Hodle emite o BRS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O BRS é emitido pela Nora Finance. A Hodle é a plataforma onde você compra, guarda em carteira auto-custodial e movimenta BRS via Pix ou on-chain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como eu compro e saco BRS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Você paga um Pix na Hodle e recebe BRS na sua carteira. Para sacar, converte o BRS de volta para reais e recebe via Pix, 24 horas por dia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Em quais redes o BRS existe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BRS circula on-chain na rede Solana, onde você recebe e envia direto da sua carteira.',
      },
    },
  ],
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
      <BrsHero />
      <BrsValueProps />
      <BrsHowItWorks />
      <BrsUseCases />
      <BrsDeveloperSection />
      <BrsFaq />
      <BrsFinalCta />
    </div>
  )
}
