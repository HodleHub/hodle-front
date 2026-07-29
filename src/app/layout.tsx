import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import { Footer } from '../components/ui/Footer'
import { Analytics } from '@vercel/analytics/next'

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
    default: 'Hodle - Infraestrutura cripto para empresas',
    template: '%s | Hodle',
  },
  description:
    'Hodle: infraestrutura cripto para empresas no Brasil. API para pagar Pix com USDT e USDC, invoice Lightning que liquida em Pix, carteiras auto-custodiais multi-rede e conversão entre reais, dólar e stablecoins.',
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
    title: 'Hodle - Infraestrutura cripto para empresas',
    description:
      'Hodle: infraestrutura cripto para empresas no Brasil. API para pagar Pix com USDT e USDC, invoice Lightning que liquida em Pix, carteiras auto-custodiais multi-rede.',
    url: siteUrl,
    siteName: 'Hodle',
    images: [
      {
        url: `${siteUrl}/og-image-v2.png`,
        secureUrl: `${siteUrl}/og-image-v2.png`,
        width: 1200,
        height: 630,
        alt: 'Hodle - Infraestrutura cripto para empresas',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hodle - Infraestrutura cripto para empresas',
    description:
      'Hodle: infraestrutura cripto para empresas no Brasil. API para pagar Pix com USDT e USDC, invoice Lightning que liquida em Pix, carteiras auto-custodiais multi-rede.',
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
  name: 'Hodle',
  legalName: 'Hodle LLC',
  url: siteUrl,
  logo: `${siteUrl}/new_logo_hodle.png`,
  description:
    'Infraestrutura cripto para empresas: API para pagar Pix com USDT e USDC, invoice Lightning que liquida em Pix, carteiras auto-custodiais multi-rede e conversão entre reais, dólar e stablecoins.',
  foundingDate: '2026-05-04',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 N Gould St, Ste R',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
  },
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
  name: 'Hodle',
  url: siteUrl,
  description:
    'Infraestrutura cripto para empresas: API para pagar Pix com USDT e USDC, invoice Lightning que liquida em Pix, carteiras auto-custodiais multi-rede e conversão entre reais, dólar e stablecoins.',
  inLanguage: 'pt-BR',
  publisher: {
    '@type': 'Organization',
    name: 'Hodle',
    url: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Hodle',
              applicationCategory: 'FinanceApplication',
              operatingSystem: 'Web',
              url: `${siteUrl}/`,
              description:
                'Plataforma de infraestrutura cripto para empresas: compra e venda de ativos digitais, pagamentos com stablecoins, APIs para SaaS e agentes de IA.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'BRL',
              },
              featureList: [
                'Compra de Bitcoin via PIX com liquidação instantânea',
                'Pagamentos em USDT e USDC em múltiplas redes',
                'Lightning Network integrada para pagamentos instantâneos',
                'API REST para SaaS, agentes de IA e plataformas',
                'Wallets auto-custodiais com controle total de chaves',
                'Pagamento de Pix com saldo em USDT (Polygon, Tron) ou USDC (Base), com gas patrocinado',
                'Invoice Lightning BOLT11 que dispara payout Pix automaticamente',
                'Conversão BRL para USD e stablecoins (on/off-ramp)',
                'Stablecoin On/Off-Ramp via PIX',
                'Wallet as a Service — carteiras multi-rede embutidas',
                'Processamento cripto para marketplaces',
                'Programmable money API para automação financeira',
                'Stablecoin treasury para gestão de caixa em dólar',
                'Crypto checkout para e-commerces e plataformas',
                'Cross-border payments BRL/USD',
                'KYC/compliance integrado nos trilhos de pagamento',
                'Webhooks assinados com HMAC para depósito, payout e mudança de estado de KYC',
                'Extrato com saldo por ativo e operações paginadas',
              ],
              screenshot: `${siteUrl}/og-image-v2.png`,
              softwareVersion: '1.0',
              provider: {
                '@type': 'Organization',
                name: 'Hodle',
                url: siteUrl,
              },
              applicationSubCategory: 'Crypto Payments, Digital Asset Management',
              supports: {
                '@type': 'SoftwareApplication',
                name: 'Web',
                applicationCategory: 'WebApplication',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Hodle Crypto Infrastructure API',
              description:
                'API de infraestrutura cripto para empresas: conversão de ativos, pagamentos com stablecoins, gerenciamento de wallets, e integração com PIX e Lightning Network.',
              provider: {
                '@type': 'Organization',
                name: 'Hodle',
                url: siteUrl,
              },
              areaServed: {
                '@type': 'Country',
                name: 'Brazil',
              },
              serviceType: [
                'Crypto Payment Processing',
                'Stablecoin Payment API',
                'Bitcoin Payment API',
                'Digital Asset Exchange',
                'Wallet Management API',
                'Wallet as a Service',
                'Stablecoin Payments',
                'Lightning Network Payments',
                'PIX Integration',
                'Cross-border Payments',
                'Stablecoin On/Off-Ramp',
                'Crypto Checkout',
                'Programmable Money',
                'Stablecoin Treasury',
                'Crypto Processing',
                'AI Agent Financial Stack',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Hodle Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Stablecoin API',
                      description: 'API completa para pagamentos e conversões em stablecoins (USDT/USDC)',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Buy Bitcoin via PIX',
                      description: 'Compra de Bitcoin com liquidação instantânea via PIX',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Stablecoin Payments API',
                      description: 'Aceite e envie pagamentos em USDT e USDC em múltiplas redes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Lightning Network Payments',
                      description: 'Pagamentos instantâneos em Bitcoin via Lightning Network',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Cross-border BRL USD Conversion',
                      description: 'Conversão entre reais e dólar/stablecoins para operações internacionais',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Stablecoin On/Off-Ramp',
                      description: 'Conversão BRL para USDT/USDC e vice-versa via PIX',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Wallet as a Service',
                      description: 'Carteiras auto-custodiais multi-rede embutidas no seu produto',
                    },
                  },
                ],
              },
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
