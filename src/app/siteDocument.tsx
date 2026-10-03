import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import { Footer } from '../components/ui/Footer'
import { Analytics } from '@vercel/analytics/next'
import { ConversionAnalytics } from '../components/analytics/conversionAnalytics'
import { organizationContactPoints } from '../content/organizationContactPoints'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const siteUrl = 'https://hodle.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hodle - Pix, stablecoins e infraestrutura financeira',
    template: '%s | Hodle',
  },
  description:
    'Hodle conecta Pix, stablecoins e contas PJ via parceiros. Conheça cobrança, link de pagamento, API e infraestrutura de software para projetos BaaS.',
  applicationName: 'Hodle',
  keywords: [
    'API Pix stablecoin',
    'api pix cripto',
    'pagar pix com USDT',
    'pagamento com stablecoin',
    'carteira auto-custodial para empresas',
    'wallet as a service',
    'on-ramp off-ramp Brasil',
    'Lightning Network API',
    'infraestrutura cripto para empresas',
    'conversão BRL USD stablecoin',
    'webhook pagamento cripto',
    'conta PJ cripto',
  ],
  authors: [{ name: 'Hodle', url: siteUrl }],
  creator: 'Hodle',
  publisher: 'Hodle',
  category: 'tecnologia financeira',
  classification: 'Fintech, Crypto Infrastructure, Payments',
  openGraph: {
    title: 'Hodle - Pix, stablecoins e infraestrutura financeira',
    description:
      'Hodle conecta Pix, stablecoins e contas PJ via parceiros. Conheça cobrança, link de pagamento, API e infraestrutura de software para projetos BaaS.',
    url: siteUrl,
    siteName: 'Hodle',
    images: [
      {
        url: `${siteUrl}/og-image-v2.png`,
        secureUrl: `${siteUrl}/og-image-v2.png`,
        width: 1200,
        height: 630,
        alt: 'Hodle - Pix, stablecoins e infraestrutura financeira',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hodle - Pix, stablecoins e infraestrutura financeira',
    description:
      'Hodle conecta Pix, stablecoins e contas PJ via parceiros. Conheça cobrança, link de pagamento, API e infraestrutura de software para projetos BaaS.',
    images: [`${siteUrl}/og-image-v2.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console — set via NEXT_PUBLIC_GOOGLE_VERIFICATION in production
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Hodle',
  legalName: 'Hodle LLC',
  url: siteUrl,
  logo: `${siteUrl}/h-logo.svg`,
  description:
    'Infraestrutura cripto para empresas: API para pagar Pix com USDT e USDC, invoice Lightning que liquida em Pix, carteiras auto-custodiais multi-rede e conversão entre reais, dólar e stablecoins.',
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
  contactPoint: organizationContactPoints,
  identifier: [
    {
      '@type': 'PropertyValue',
      name: 'Wyoming Secretary of State Filing ID',
      value: '2026-001968203',
    },
  ],
  sameAs: [
    'https://x.com/hodle_app',
    'https://github.com/HodleHub',
    'https://app.hodle.com.br',
    'https://docs.hodle.com.br',
  ],
  mainEntityOfPage: `${siteUrl}/sobre`,
  areaServed: [
    { '@type': 'Country', name: 'Brazil' },
    { '@type': 'Country', name: 'United States' },
  ],
  industry: 'Financial technology software',
  knowsAbout: [
    'Pix',
    'Stablecoin payments',
    'USDT',
    'USDC',
    'Bitcoin Lightning Network',
    'Self-custodial wallets',
    'Crypto payment API',
    'On-ramp and off-ramp',
    'Payment webhooks',
  ],
  subOrganization: {
    '@type': 'Organization',
    name: 'HODLE TECNOLOGIA LTDA',
    legalName: 'HODLE TECNOLOGIA LTDA',
    alternateName: 'HODLE TECNOLOGIA',
    foundingDate: '2025-11-14',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
    },
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'CNPJ',
        value: '63.673.264/0001-26',
      },
    ],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Hodle',
  alternateName: ['Hodle LLC', 'HODLE TECNOLOGIA LTDA', 'hodle.com.br'],
  url: siteUrl,
  description:
    'Infraestrutura cripto para empresas: API para pagar Pix com USDT e USDC, invoice Lightning que liquida em Pix, carteiras auto-custodiais multi-rede e conversão entre reais, dólar e stablecoins.',
  inLanguage: ['pt-BR', 'en'],
  publisher: {
    '@type': 'Organization',
    name: 'Hodle',
    url: siteUrl,
    contactPoint: organizationContactPoints,
  },
  hasPart: [
    { '@type': 'AboutPage', name: 'Sobre a Hodle', url: `${siteUrl}/sobre` },
    { '@type': 'ContactPage', name: 'Contato', url: `${siteUrl}/contato` },
    {
      '@type': 'WebPage',
      name: 'API Hodle para desenvolvedores',
      url: `${siteUrl}/desenvolvedores`,
    },
  ],
}

export default function SiteDocument({
  children,
  language,
}: {
  children: React.ReactNode
  language: 'pt-BR' | 'en'
}) {
  return (
    <html lang={language}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-[family-name:var(--font-geist-sans)]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <noscript>
          <style>{
            '.animated-section{opacity:1 !important;transform:none !important}'
          }</style>
        </noscript>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <ConversionAnalytics />
      </body>
    </html>
  )
}
