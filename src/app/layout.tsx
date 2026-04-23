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
  title: 'Hodle - Infraestrutura cripto para empresas',
  description:
    'Compra e venda de ativos digitais, pagamentos com stablecoins, APIs para SaaS e agentes de IA, wallets auto-custodiais e contas PJ. Tudo em uma única plataforma.',
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
    'DePix',
    'USDT',
    'agentes IA',
  ],
  authors: [{ name: 'Hodle' }],
  openGraph: {
    title: 'Hodle - Infraestrutura cripto para empresas',
    description:
      'Compra e venda de ativos digitais, pagamentos com stablecoins e APIs para SaaS e agentes de IA. Tudo em uma única plataforma.',
    url: siteUrl,
    siteName: 'Hodle',
    images: [
      {
        url: `${siteUrl}/og-img.png?v=2`,
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
    images: [`${siteUrl}/og-img.png?v=2`],
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
