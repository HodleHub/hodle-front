import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { JsonLd } from './json-ld'
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://hodle.com.br'),
  title: 'Hodle - Pagamentos com Stablecoins e Bitcoin Lightning',
  description: 'Envie e receba pagamentos instantâneos com stablecoins USDT ou Bitcoin Lightning. Gere QR Codes e chaves PIX para suas transações, sem limites e com segurança blockchain.',
  keywords: [
    'stablecoin',
    'pagamentos cripto',
    'USDT',
    'Bitcoin Lightning',
    'Crypto PIX',
    'PIX cripto',
    'pagamento com criptomoeda',
    'transferência blockchain',
    'carteira digital',
    'pagamento instantâneo',
    'cripto Brasil',
  ],
  openGraph: {
    title: 'Hodle - Pagamentos com Stablecoins e Bitcoin Lightning',
    description: 'Envie e receba pagamentos instantâneos com stablecoins USDT ou Bitcoin Lightning. Rápido, seguro e sem fronteiras.',
    url: 'https://hodle.com.br',
    siteName: 'Hodle',
    images: [
      {
        url: '/api/og?title=Hodle',
        width: 1200,
        height: 630,
        alt: 'Hodle - Pagamentos com Stablecoins e Bitcoin Lightning',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ThiagoMot_',
    title: 'Hodle - Pagamentos com Stablecoins e Bitcoin Lightning',
    description: 'Pague e receba com stablecoins USDT e Bitcoin Lightning via PIX e QR Code. Simples, rápido e seguro.',
    images: ['/api/og?title=Hodle'],
  },
  alternates: {
    canonical: 'https://hodle.com.br',
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
  icons: {
    icon: [
      { url: '/h-logo.png' },
      new URL('/h-logo.png', 'https://hodle.com.br'),
    ],
    shortcut: '/h-logo.png',
    apple: [
      { url: '/h-logo.png' },
      { url: '/h-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Analytics />
        {children}
        <Toaster
          position="top-right"
          closeButton
          richColors
          toastOptions={{
            unstyled: false,
            classNames: {
              closeButton: 'ml-[324px] mt-4',
            },
          }}
        />
      </body>
    </html>
  )
}
