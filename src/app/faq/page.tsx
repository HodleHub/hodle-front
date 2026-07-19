import type { Metadata } from 'next'
import Link from 'next/link'

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
  },
}

const faqItems = [
  {
    question: 'O que é a Hodle?',
    answer:
      'A Hodle é uma plataforma brasileira de infraestrutura cripto para empresas. Oferecemos compra e venda de ativos digitais, APIs para pagamentos crossborder, wallets auto-custodiais, contas PJ com bancos parceiros e pagamento de QR codes com stablecoins.',
  },
  {
    question: 'Para quem é a plataforma?',
    answer:
      'A Hodle é ideal para empresas SaaS, agentes de IA, fintechs e negócios que precisam de infraestrutura cripto confiável. Oferecemos APIs robustas para integração direta, além da plataforma visual para gerenciamento.',
  },
  {
    question: 'As wallets são realmente auto-custodiais?',
    answer:
      'Sim. Na Hodle, as chaves privadas ficam 100% sob o controle do usuário. Não temos acesso às suas chaves nem aos seus fundos. Você tem total autonomia sobre seus ativos digitais.',
  },
  {
    question: 'Como funciona a conta PJ?',
    answer:
      'A conta PJ é aberta em nome da sua empresa junto a bancos parceiros regulados pelo Banco Central. Permite receber e enviar PIX, TED e boletos, com compliance e KYC automatizados para agilizar o processo.',
  },
  {
    question: 'Como funciona o pagamento de QR codes com stablecoins?',
    answer:
      'Você pode pagar qualquer QR code PIX utilizando stablecoins como USDT, USDC ou DePix. A conversão para BRL é automática e a liquidação é instantânea, sem que o recebedor precise saber que o pagamento veio de cripto.',
  },
  {
    question: 'Quanto tempo demora a liquidação?',
    answer:
      'Pagamentos via Lightning Network e Liquid são praticamente instantâneos (menos de 1 minuto). Transações on-chain dependem do tempo de mineração do bloco, cerca de 10 minutos para Bitcoin.',
  },
  {
    question: 'Quais ativos digitais são suportados?',
    answer:
      'Suportamos Bitcoin (BTC), USDT, USDC, DePix, além das redes Arbitrum, Polygon, Base, Spark e Lightning Network. Estamos constantemente expandindo nossa oferta de ativos e redes.',
  },
  {
    question: 'Preciso passar por verificação (KYC)?',
    answer:
      'Sim. Para utilizar a plataforma, é necessário completar o processo de KYC (Know Your Customer) conforme exigido pela legislação brasileira de prevenção à lavagem de dinheiro. O processo é 100% digital e automatizado.',
  },
  {
    question: 'Como funciona a API?',
    answer:
      'Nossa API REST é completa e documentada, permitindo integração com seu sistema em minutos. Oferecemos SDKs, webhooks e callbacks em tempo real. Consulte nossa documentação em docs.hodle.com.br para mais detalhes.',
  },
  {
    question: 'A Hodle é regulada?',
    answer:
      'A Hodle opera em conformidade com a legislação brasileira, incluindo o Marco Legal das Criptomoedas (Lei nº 14.478/2022) e as diretrizes do Banco Central. Trabalhamos com parceiros regulados para serviços bancários.',
  },
  {
    question: 'Como entrar em contato com o suporte?',
    answer:
      'Você pode falar conosco pelo WhatsApp (11) 96000-0445 ou pelo e-mail contato@hodle.com.br. Nosso time de suporte está disponível para ajudar com dúvidas, problemas técnicos ou questões comerciais.',
  },
  {
    question: 'Quais são as taxas cobradas?',
    answer:
      'As taxas variam conforme o serviço utilizado. Consulte nossa página de preços (/articles/precos) para informações detalhadas sobre taxas de compra, venda, saque e transferência.',
  },
  {
    question: 'Como funciona o crossborder com stablecoins?',
    answer:
      'Você pode enviar stablecoins (USDT, USDC) para qualquer lugar do mundo com liquidação em minutos. O destinatário pode sacar em moeda local através de parceiros locais. Ideal para remessas internacionais, pagamento a fornecedores e folha de pagamento global.',
  },
  {
    question: 'Preciso de conhecimento técnico para usar a API?',
    answer:
      'Nossa API REST é documentada e oferece SDKs para facilitar a integração. Desenvolvedores com experiência em REST APIs conseguem integrar em poucas horas. Disponibilizamos exemplos em JavaScript, Python e curl na documentação em docs.hodle.com.br.',
  },
  {
    question: 'A Hodle oferece suporte a agentes de IA?',
    answer:
      'Sim! Nossa plataforma foi projetada para funcionar com agentes de IA autônomos. Oferecemos endpoints de API simples, webhooks em tempo real e SDK leve para que agentes possam criar wallets, enviar pagamentos e consultar saldos de forma programática.',
  },
  {
    question: 'Como funciona a segurança da plataforma?',
    answer:
      'Adotamos as melhores práticas de segurança do mercado financeiro: criptografia TLS 1.3 em trânsito e AES-256 em repouso, autenticação multifator, controles de acesso com privilégio mínimo, monitoramento contínuo e auditorias periódicas. Como as wallets são auto-custodiais, suas chaves privadas nunca saem do seu dispositivo.',
  },
  {
    question: 'Posso usar a Hodle como pessoa física?',
    answer:
      'No momento, a Hodle é focada em soluções empresariais (PJ). Oferecemos contas empresariais, APIs para fintechs e infraestrutura para plataformas SaaS. Se você é uma empresa buscando soluções cripto, entre em contato pelo WhatsApp para avaliarmos seu caso.',
  },
  {
    question: 'O DePix é lastreado em real?',
    answer:
      'Sim. O DePix é uma stablecoin com paridade 1:1 com o Real Brasileiro (BRL), totalmente lastreada em reservas. Cada DePix em circulação corresponde a R$ 1,00 em reservas mantidas em instituições financeiras reguladas. Isso garante estabilidade e previsibilidade para suas operações.',
  },
  {
    question: 'Há limite de transações?',
    answer:
      'Os limites de transação variam conforme o nível de verificação da sua conta (KYC) e o perfil de risco. Consulte sua conta na plataforma para verificar os limites atuais. Limites mais altos podem ser solicitados mediante análise de compliance.',
  },
]

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
                  {item.answer}
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
              href="/articles"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Ver artigos
            </Link>
            <Link
              href="/articles/precos"
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
