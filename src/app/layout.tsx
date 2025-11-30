import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Archivo_Black } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import { Footer } from '../components/ui/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const archivoBlack = Archivo_Black({
  variable: '--font-archivo-black',
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hodle.com.br'),
  title: 'Hodle - Compre Bitcoin de forma rápida e segura',
  description:
    'Hodle é o futuro dos pagamentos utilizando a tecnologia bitcoin, peer-to-peer por natureza e sem intermediários. Compra e venda sem fricção',
  keywords: [
    'Bitcoin',
    'Lightning Network',
    'PIX',
    'cryptocurrency',
    'carteira Bitcoin',
    'compra Bitcoin',
    'Bitcoin Brasil',
    'DePix',
    'Decentralized Pix',
    'Eulen',
    'P2P',
  ],
  authors: [{ name: 'Hodle' }],
  openGraph: {
    title: 'Hodle - Compre Bitcoin de forma rápida e segura',
    description:
      'A maneira mais fácil de comprar Bitcoin diretamente via Pix, em qualquer rede, lightning, liquid ou onchain.',
    url: 'https://hodle.com.br',
    siteName: 'Hodle',
    images: [
      {
        url: '/og-img.png',
        width: 1200,
        height: 630,
        alt: 'Hodle - Compre Bitcoin de forma rápida e segura',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hodle - Compre Bitcoin de forma rápida e segura',
    description:
      'A maneira mais fácil de comprar Bitcoin diretamente via Pix, em qualquer rede, lightning, liquid ou onchain.',
    images: ['/og-img.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} ${archivoBlack.variable}`}
      >
        <Header />
        {children}
        <Footer />
        {/* <Toaster
          position="top-right"
          closeButton
          richColors
          toastOptions={{
            unstyled: false,
            classNames: {
              closeButton: 'ml-[324px] mt-4',
            },
          }}
        /> */}
      </body>
    </html>
  )
}
