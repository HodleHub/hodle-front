'use client'

import { useState, useCallback } from 'react'
import { Plus, Minus } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

interface FAQItem {
  question: string
  answer: string
}

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const faqItems: FAQItem[] = [
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
      'Pagamentos via Lightning Network e Liquid são praticamente instantâneos (menos de 1 minuto). Transações on-chain dependem do tempo de mineração do bloco, cerca de 10 minutos.',
  },
]

export default function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = useCallback((index: number) => {
    console.log(`[Hodle] FAQ toggled: ${faqItems[index].question}`)
    setOpenAccordion((prev) => (prev === index ? null : index))
  }, [])

  return (
    <AnimatedSection delay={0.15}>
      <section className="w-full max-w-[700px]">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-base mb-4 block">
            FAQ
          </span>
          <h2
            className={`${heading} text-[clamp(2rem,4vw,3rem)] font-light text-foreground mb-4`}
          >
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-sm">
            Esclarecemos suas principais dúvidas sobre nossa plataforma
          </p>
        </div>

        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center"
              >
                <span className="text-sm font-medium text-foreground pr-4">
                  {item.question}
                </span>
                <div className="shrink-0 w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                  {openAccordion === index ? (
                    <Minus className="h-3.5 w-3.5 text-base" />
                  ) : (
                    <Plus className="h-3.5 w-3.5 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-4">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  )
}
