import type { Metadata } from 'next'
import Link from 'next/link'
import { notFoundMarkdown } from '../content/markdown/notFoundMarkdown'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description:
    'Este caminho não existe em hodle.com.br. Use o sitemap, o llms.txt ou a documentação para continuar.',
  robots: {
    index: false,
    follow: true,
  },
}

const destinations = [
  {
    href: '/',
    label: 'Home',
    description: 'O que a Hodle faz, em uma página.',
  },
  {
    href: '/desenvolvedores',
    label: 'Desenvolvedores',
    description: 'OpenAPI, autenticação, webhooks e sandbox.',
  },
  {
    href: '/precos',
    label: 'Preços e taxas',
    description: 'A referência oficial de preço.',
  },
  {
    href: '/faq',
    label: 'Perguntas frequentes',
    description: 'O que é, como funciona, quanto custa.',
  },
  {
    href: '/articles',
    label: 'Artigos',
    description: 'Como os fluxos funcionam por dentro.',
  },
  {
    href: '/contato',
    label: 'Contato',
    description: 'Todos os canais oficiais da Hodle.',
  },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[720px] px-6 py-20 lg:py-24">
        <span className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500">
          <span className="h-1 w-1 rounded-full bg-foreground" />
          Erro 404
        </span>
        <h1
          className={`${heading} mb-4 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.15] text-foreground`}
        >
          Esta página não existe
        </h1>
        <p className="mb-12 text-[15px] leading-relaxed text-gray-600">
          O caminho que você pediu não existe em hodle.com.br. A resposta é um
          404 de verdade, não uma página vazia com status 200 — se você é um
          agente ou um script, pode confiar no status e seguir para um dos
          destinos abaixo.
        </p>

        <ul className="space-y-3">
          {destinations.map((destination) => (
            <li key={destination.href}>
              <Link
                href={destination.href}
                className="group block rounded-xl border border-gray-200 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50/60"
              >
                <span className="text-sm font-medium text-foreground">
                  {destination.label}
                </span>
                <span className="mt-1 block text-[13px] leading-relaxed text-gray-500">
                  {destination.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h2
          className={`${heading} mt-16 mb-3 text-lg font-medium text-foreground`}
        >
          Mapa de recuperação
        </h2>
        <p className="mb-5 text-sm text-gray-500">
          O mesmo conteúdo em markdown. Uma requisição com{' '}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[13px] text-foreground">
            Accept: text/markdown
          </code>{' '}
          recebe este corpo direto, como{' '}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-[13px] text-foreground">
            text/markdown
          </code>
          .
        </p>
        <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-xl border border-gray-200 bg-gray-50 p-5 text-[12px] leading-relaxed text-gray-600">
          {notFoundMarkdown}
        </pre>
      </div>
    </div>
  )
}
