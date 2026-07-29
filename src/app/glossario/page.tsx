import type { Metadata } from 'next'
import Link from 'next/link'
import { glossaryTerms } from '../../content/glossary/glossaryTerms'
import { groupGlossaryByLetter } from '../../utils/groupGlossaryByLetter'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const siteUrl = 'https://hodle.com.br'

export const metadata: Metadata = {
  title: 'Glossário de stablecoins e pagamentos',
  description:
    'Definições objetivas dos termos de stablecoin, Pix, Lightning e regulação de criptoativos no Brasil. Referência para quem integra pagamentos.',
  alternates: {
    canonical: `${siteUrl}/glossario`,
  },
  openGraph: {
    title: 'Glossário de stablecoins e pagamentos',
    description:
      'Definições objetivas dos termos de stablecoin, Pix, Lightning e regulação de criptoativos no Brasil. Referência para quem integra pagamentos.',
    url: `${siteUrl}/glossario`,
    images: ['/og-image-v2.png'],
  },
}

const groupedTerms = groupGlossaryByLetter(glossaryTerms)
const letters = Object.keys(groupedTerms).sort()

const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossário de stablecoins e pagamentos',
  url: `${siteUrl}/glossario`,
  inLanguage: 'pt-BR',
  dateModified: '2026-07-29',
  hasDefinedTerm: glossaryTerms.map((t) => ({
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.definition,
    inDefinedTermSet: `${siteUrl}/glossario`,
  })),
}

export default function GlossarioPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }}
      />
      <article className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            Glossário
          </span>
          <h1
            className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-4`}
          >
            Glossário de stablecoins e pagamentos
          </h1>
          <p className="text-sm text-gray-500 max-w-[600px]">
            Definições curtas dos termos que aparecem quando se integra pagamentos com stablecoin no Brasil. Sem marketing, sem promessa.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-gray-200">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letra-${letter.toLowerCase()}`}
              className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium text-foreground border border-gray-200 rounded hover:bg-gray-50 transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>

        <div className="space-y-10">
          {letters.map((letter) => (
            <section key={letter}>
              <h2
                id={`letra-${letter.toLowerCase()}`}
                className={`${heading} text-xl font-medium text-foreground mb-6 pb-2 border-b border-gray-200`}
              >
                {letter}
              </h2>
              <dl className="space-y-6">
                {groupedTerms[letter].map((term) => (
                  <div key={term.term}>
                    <dt className="text-sm font-semibold text-foreground mb-1">
                      {term.term}
                    </dt>
                    <dd>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {term.definition}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 pt-10">
          <nav className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/api-pix-stablecoin"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              API Pix stablecoin
            </Link>
            <Link
              href="/pagar-pix-com-usdt"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Pagar Pix com USDT
            </Link>
            <Link
              href="/wallet-auto-custodial"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Carteiras auto-custodiais
            </Link>
            <Link
              href="/para-agentes-de-ia"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              Para agentes de IA
            </Link>
            <Link
              href="/faq"
              className="text-sm text-foreground underline underline-offset-2 hover:text-gray-600"
            >
              FAQ
            </Link>
          </nav>
        </div>
      </article>
    </div>
  )
}