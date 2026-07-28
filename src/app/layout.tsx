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
    'Hodle: infraestrutura cripto para empresas no Brasil. Stablecoin API, comprar bitcoin via PIX, pagamentos em USDT e USDC, Lightning Network, wallets auto-custodiais, contas PJ e banking as a service. Conversão BRL para dólar e stablecoins.',
  applicationName: 'Hodle',
  keywords: [
    'stablecoin API',
    'api pix USD',
    'api pix USDT',
    'comprar bitcoin API',
    'API cripto Brasil',
    'pagamento stablecoin',
    'crypto payment API',
    'stablecoin payment API',
    'USDT payment gateway',
    'USDC payment gateway',
    'bitcoin payment API',
    'crypto checkout API',
    'stablecoin checkout',
    'stablecoin on-ramp',
    'stablecoin off-ramp',
    'on-ramp off-ramp cripto',
    'BRL to USDT API',
    'BRL to USDC API',
    'conversão BRL USD',
    'api receber pix cripto',
    'comprar USDT pix',
    'comprar USDC pix',
    'vender bitcoin pix',
    'receber pix em dólar',
    'Lightning Network API',
    'crossborder payments API',
    'cross border payment API Latin America',
    'pagamentos internacionais API',
    'wallet auto-custodial API',
    'wallet as a service',
    'banking as a service cripto',
    'banking em stablecoin',
    'conta em dólar API',
    'conta PJ cripto',
    'conta internacional dólar',
    'white label crypto API',
    'fintech API Brasil',
    'fintech cripto Brasil',
    'crypto payment gateway brasil',
    'pagamento bitcoin empresa',
    'pagamento stablecoin empresa',
    'stablecoin treasury',
    'tesouraria stablecoin',
    'programmable money API',
    'dinheiro programável',
    'crypto invoicing API',
    'faturamento cripto',
    'merchant payments cripto',
    'pagamentos merchant cripto',
    'processamento cripto',
    'crypto processing API',
    'neobank crypto API',
    'PSP crypto API',
    'remessa stablecoin',
    'remessa internacional cripto',
    'crypto on-ramp brasil',
    'crypto off-ramp brasil',
    'infraestrutura cripto empresa',
    'API conversão BRL USD',
    'agentes IA cripto',
    'AI agents crypto',
    'financial stack AI agents',
    'API pix bitcoin',
    'comprar bitcoin pix',
    'vender bitcoin pix',
    'bitcoin pix instantâneo',
    'stablecoin pix',
    'USDT pix brasil',
    'USDC pix brasil',
    'digital dollar API',
    'dólar digital API',
    'conta dólar stablecoin',
    'carteira stablecoin',
    'wallet USDT',
    'wallet USDC',
    'multi-currency wallet API',
    'carteira multi-moeda',
    'crypto compliance API',
    'KYC crypto API',
    'AML crypto API',
    'compliance stablecoin',
    'gateway agêntico',
    'agentic gateway',
    'pagamento recorrente cripto',
    'assinatura stablecoin',
    'crypto subscription API',
    'marketplace crypto payments',
    'marketplace stablecoin',
    'pagar fornecedores stablecoin',
    'pagar fornecedores dólar',
    'receber pagamento stablecoin',
    'receber pagamento dólar',
    'stablecoin settlement',
    'liquidação stablecoin',
    'instant settlement cripto',
    'liquidação instantânea cripto',
    'bitcoin cashback API',
    'cashback stablecoin',
    'CDI em bitcoin',
    'yield stablecoin',
    'rendimento stablecoin',
    'conta digital bitcoin',
    'conta digital dólar',
    'fintech bitcoin brasil',
    'fintech stablecoin brasil',
    'plataforma cripto brasil',
    'exchange stablecoin API',
    'corretora cripto API',
    'bull Bitcoin API',
    'pit Bitcoin API',
  ],
  authors: [{ name: 'Hodle', url: siteUrl }],
  creator: 'Hodle',
  publisher: 'Hodle',
  category: 'tecnologia financeira',
  classification: 'Fintech, Crypto Infrastructure, Payments',
  alternates: {
    canonical: siteUrl,
    languages: {
      'pt-BR': siteUrl,
    },
  },
  openGraph: {
    title: 'Hodle - Infraestrutura cripto para empresas',
    description:
      'Hodle: stablecoin API, comprar bitcoin via PIX, pagamentos em USDT e USDC, Lightning Network, banking as a service e wallets auto-custodiais.',
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
      'Hodle: stablecoin API, comprar bitcoin via PIX, pagamentos em USDT e USDC, Lightning Network, banking as a service.',
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
  url: siteUrl,
  logo: `${siteUrl}/new_logo_hodle.png`,
  description:
    'Stablecoin API para empresas no Brasil: compra de bitcoin via PIX, pagamentos em USDT e USDC, Lightning Network, banking as a service, wallets auto-custodiais e contas PJ.',
  foundingDate: '2024',
  sameAs: [
    'https://github.com/HodleHub',
    'https://app.hodle.com.br',
    'https://docs.hodle.com.br',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Hodle',
  url: siteUrl,
  description:
    'Stablecoin API para empresas no Brasil: compra de bitcoin via PIX, pagamentos em USDT e USDC, Lightning Network, banking as a service, wallets auto-custodiais e contas PJ.',
  inLanguage: 'pt-BR',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
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
                'Contas PJ com bancos regulados pelo Banco Central',
                'Conversão BRL para USD e stablecoins (on/off-ramp)',
                'Banking as a Service — embuta stablecoin banking na sua marca',
                'Stablecoin On/Off-Ramp via PIX',
                'Wallet as a Service — carteiras multi-rede embutidas',
                'Processamento cripto para marketplaces',
                'Programmable money API para automação financeira',
                'Stablecoin treasury para gestão de caixa em dólar',
                'Crypto checkout para e-commerces e plataformas',
                'Cross-border payments BRL/USD',
                'KYC/compliance integrado nos trilhos de pagamento',
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
                'Banking as a Service',
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
                      name: 'Banking as a Service',
                      description: 'Embuta stablecoin banking, contas e pagamentos sob sua marca via API',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Hodle - Infraestrutura cripto para empresas',
              description:
                'Stablecoin API: compra de Bitcoin via PIX, pagamentos em USDT e USDC, Lightning Network, banking as a service, APIs para SaaS e agentes de IA, wallets auto-custodiais e contas PJ.',
              url: siteUrl,
              inLanguage: 'pt-BR',
              isPartOf: {
                '@type': 'WebSite',
                name: 'Hodle',
                url: siteUrl,
              },
              about: {
                '@type': 'Thing',
                name: 'Infraestrutura cripto para empresas',
              },
              mentions: [
                { '@type': 'Thing', name: 'Bitcoin' },
                { '@type': 'Thing', name: 'Lightning Network' },
                { '@type': 'Thing', name: 'Stablecoins' },
                { '@type': 'Thing', name: 'USDT' },
                { '@type': 'Thing', name: 'USDC' },
                { '@type': 'Thing', name: 'PIX' },
                { '@type': 'Thing', name: 'API cripto' },
                { '@type': 'Thing', name: 'Banking as a Service' },
                { '@type': 'Thing', name: 'Stablecoin API' },
                { '@type': 'Thing', name: 'Cross-border payments' },
                { '@type': 'Thing', name: 'Wallet as a Service' },
                { '@type': 'Thing', name: 'Programmable Money' },
              ],
              significantLink: [
                `${siteUrl}/faq`,
                `${siteUrl}/privacidade`,
                `${siteUrl}/termos`,
                `${siteUrl}/articles`,
              ],
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
