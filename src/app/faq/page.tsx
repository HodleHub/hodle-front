import type { Metadata } from 'next'
import Link from 'next/link'
import { faqItems } from '../../content/faq/faqItems'
import { FaqAnswer } from '../../components/FaqAnswer'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes (FAQ)',
  description:
    'Tire suas dúvidas sobre a Hodle: o que é, como funciona a wallet auto-custodial, conta PJ, pagamento de QR codes com stablecoins, API, taxas, segurança e muito mais.',
  alternates: {
    canonical: 'https://hodle.com.br/faq',
  },
  openGraph: {
    title: 'FAQ | Hodle - Perguntas Frequentes',
    description:
      'Esclareça suas principais dúvidas sobre nossa plataforma de infraestrutura cripto para empresas.',
    url: 'https://hodle.com.br/faq',
    images: ['/og-image-v2.png'],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hodle.com.br' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://hodle.com.br/faq' },
  ],
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-[700px] mx-auto px-6 py-20 lg:py-24">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
            <span className="h-1 w-1 rounded-full bg-foreground" />
            FAQ
          </span>
          <h1
            className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-4`}
          >
            Perguntas Frequentes
          </h1>
          <p className="text-gray-500 text-sm max-w-[500px] mx-auto">
            Esclarecemos suas principais dúvidas sobre nossa plataforma de
            infraestrutura cripto para empresas.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl overflow-hidden bg-white transition-colors hover:border-gray-300 [&[open]]:border-gray-300"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none select-none">
                <span className="text-sm font-medium text-foreground pr-4">
                  {item.question}
                </span>
                <div className="shrink-0 w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center transition-transform duration-200 group-open:rotate-45">
                  <svg
                    className="h-3.5 w-3.5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </summary>
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-500 leading-relaxed">
                  <FaqAnswer item={item} />
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-10">
          <h2
            className={`${heading} text-lg font-medium text-foreground mb-3`}
          >
            Ainda tem dúvidas?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Nossa equipe está pronta para ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a
              href="https://api.whatsapp.com/send?phone=5511960000445"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-foreground text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Falar com vendas
            </a>
            <Link
              href="/glossario"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Ver glossário
            </Link>
            <Link
              href="/precos"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Ver preços
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
