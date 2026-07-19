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
    'Compra e venda de ativos digitais, pagamentos com stablecoins, APIs para SaaS e agentes de IA, wallets auto-custodiais e contas PJ. Tudo em uma única plataforma.',
  applicationName: 'Hodle',
  keywords: [
    'Bitcoin',
    'Lightning Network',
    'PIX',
    'stablecoins',
    'API cripto',
    'crossborder payments',
    'wallet auto-custodial',
    'conta PJ cripto',
    'infraestrutura cripto',
    'USDT',
    'USDC',
    'agentes IA',
    'pagamentos blockchain',
    'Brasil',
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
      'Compra e venda de ativos digitais, pagamentos com stablecoins e APIs para SaaS e agentes de IA. Tudo em uma única plataforma.',
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
      'Compra e venda de ativos digitais, pagamentos com stablecoins e APIs para SaaS e agentes de IA.',
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
    'Infraestrutura cripto para empresas: compra e venda de ativos digitais, pagamentos com stablecoins, APIs para SaaS e agentes de IA.',
  foundingDate: '2024',
  sameAs: [
    'https://github.com/HodleHub',
    'https://app.hodle.com.br',
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
    'Infraestrutura cripto para empresas: compra e venda de ativos digitais, pagamentos com stablecoins, APIs para SaaS e agentes de IA.',
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
                'Compra e venda de ativos digitais, pagamentos com stablecoins, APIs para SaaS e agentes de IA, wallets auto-custodiais e contas PJ.',
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
                { '@type': 'Thing', name: 'PIX' },
                { '@type': 'Thing', name: 'API cripto' },
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
