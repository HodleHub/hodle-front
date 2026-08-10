import { Metadata } from 'next'

const siteUrl = 'https://hodle.com.br'

export const metadata: Metadata = {
  title: 'Artigos',
  description:
    'Notas de produto, engenharia e mercado sobre Pix, stablecoins, Lightning e as APIs da Hodle.',
  alternates: {
    canonical: `${siteUrl}/articles`,
  },
  openGraph: {
    title: 'Artigos | Hodle',
    description:
      'Notas de produto, engenharia e mercado sobre Pix, stablecoins, Lightning e as APIs da Hodle.',
    url: `${siteUrl}/articles`,
  },
}

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-[#FAFAF8]">{children}</div>
}
