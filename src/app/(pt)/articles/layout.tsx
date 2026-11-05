import { Metadata } from 'next'

const siteUrl = 'https://hodle.com.br'

export const metadata: Metadata = {
  title: {
    default: 'Artigos sobre Pix, stablecoins e APIs',
    template: '%s | Hodle',
  },
  description:
    'Aprenda a integrar Pix e stablecoins com os artigos da Hodle: guias de API, webhooks e conciliação, além de análises de auto-custódia, regulação e BaaS.',
  alternates: {
    canonical: `${siteUrl}/articles`,
  },
  openGraph: {
    title: 'Artigos sobre Pix, stablecoins e APIs | Hodle',
    description:
      'Aprenda a integrar Pix e stablecoins com os artigos da Hodle: guias de API, webhooks e conciliação, além de análises de auto-custódia, regulação e BaaS.',
    url: `${siteUrl}/articles`,
    images: ['/og-image-v2.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artigos sobre Pix, stablecoins e APIs | Hodle',
    images: ['/og-image-v2.png'],
  },
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-[#FAFAF8]">{children}</div>
}
