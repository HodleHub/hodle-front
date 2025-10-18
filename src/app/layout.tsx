import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { JsonLd } from './json-ld'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hodle.com.br'),
  themeColor: '#000000',
  title: "Hodle - Pagamentos com Stablecoins e Bitcoin Lightning",
  description:
    "Envie e receba pagamentos instantâneos com stablecoins USDT ou Bitcoin Lightning. Gere QR Codes e chaves PIX para suas transações, sem limites e com segurança blockchain.",
  keywords: [
    "stablecoin",
    "pagamentos cripto",
    "USDT",
    "Bitcoin Lightning",
    "Crypto PIX",
    "PIX cripto",
    "pagamento com criptomoeda",
    "transferência blockchain",
    "carteira digital",
    "pagamento instantâneo",
    "cripto Brasil",
  ],
  openGraph: {
    title: "Hodle - Pagamentos com Stablecoins e Bitcoin Lightning",
    description:
      "Faça pagamentos e receba via QR Code ou chave PIX usando USDT ou Bitcoin Lightning. Rápido, seguro e sem fronteiras.",
    url: "https://hodle.com.br",
    siteName: "Hodle",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThiagoMot_",
    title: "Hodle - Pagamentos com Stablecoins e Bitcoin Lightning",
    description:
      "Pague e receba com stablecoins USDT e Bitcoin Lightning via PIX e QR Code. Simples, rápido e seguro.",
  },
  alternates: {
    canonical: "https://hodle.com.br",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/h-logo.png',
    shortcut: '/h-logo.png',
    apple: '/h-logo.png',
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
