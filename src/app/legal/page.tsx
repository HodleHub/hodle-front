import type { Metadata } from 'next'
import Link from 'next/link'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export const metadata: Metadata = {
  title: 'Central Legal',
  description:
    'Central legal da Hodle: termos de serviço, política de privacidade, política de cookies e política de uso por IA, em conformidade com a LGPD e o Marco Civil da Internet.',
  alternates: {
    canonical: 'https://hodle.com.br/legal',
  },
  openGraph: {
    title: 'Central Legal | Hodle',
    description:
      'Todos os documentos legais da Hodle em um só lugar: termos, privacidade, cookies e uso por IA.',
    url: 'https://hodle.com.br/legal',
    images: ['/og-image-v2.png'],
  },
}

const documents = [
  {
    href: '/termos',
    title: 'Termos de Serviço',
    description:
      'Regras de uso da plataforma, responsabilidades das partes, limites de uso da API e condições de contratação.',
  },
  {
    href: '/privacidade',
    title: 'Política de Privacidade',
    description:
      'Quais dados pessoais coletamos, com que finalidade, por quanto tempo guardamos e como você exerce seus direitos sob a LGPD.',
  },
  {
    href: '/cookies',
    title: 'Política de Cookies',
    description:
      'Cookies e tecnologias similares que usamos, para que servem e como gerenciar suas preferências no navegador.',
  },
  {
    href: '/ai',
    title: 'Política de Uso por IA',
    description:
      'Como agentes e assistentes de IA podem acessar, citar e integrar o conteúdo e a API da Hodle.',
  },
]

const legalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Central Legal | Hodle',
  description:
    'Termos de serviço, política de privacidade, política de cookies e política de uso por IA da Hodle.',
  url: 'https://hodle.com.br/legal',
  hasPart: documents.map((document) => ({
    '@type': 'WebPage',
    name: document.title,
    url: `https://hodle.com.br${document.href}`,
    description: document.description,
  })),
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalJsonLd) }}
      />
      <article className="max-w-[720px] mx-auto px-6 py-20 lg:py-24">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            Legal
          </span>
          <h1
            className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-4`}
          >
            Central Legal
          </h1>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            Todos os documentos que regem o uso da Hodle, reunidos em um só
            lugar.
          </p>
        </div>

        <div className="space-y-4">
          {documents.map((document) => (
            <Link
              key={document.href}
              href={document.href}
              className="block border border-gray-200 rounded-lg p-6 hover:border-foreground transition-colors"
            >
              <h2
                className={`${heading} text-xl font-medium text-foreground mb-2`}
              >
                {document.title}
              </h2>
              <p className="text-[15px] text-gray-600 leading-relaxed">
                {document.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 pt-10">
          <p className="text-sm text-gray-600 leading-relaxed">
            Dúvidas sobre qualquer um destes documentos? Fale com a gente em{' '}
            <a
              href="mailto:contato@hodle.com.br"
              className="text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              contato@hodle.com.br
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  )
}
