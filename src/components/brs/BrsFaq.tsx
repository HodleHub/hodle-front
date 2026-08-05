'use client'

import { useState, useCallback } from 'react'
import { Plus, Minus } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const FAQ_ITEMS = [
  {
    question: 'O que é o BRS?',
    answer:
      'BRS é uma stablecoin de Real, emitida pela Nora Finance. Cada BRS é lastreado 1:1 em reais mantidos em reserva, e você pode comprar, guardar e movimentar BRS na Hodle.',
  },
  {
    question: 'A Hodle emite o BRS?',
    answer:
      'Não. O BRS é emitido pela Nora Finance. A Hodle é a plataforma onde você compra, guarda em carteira auto-custodial e movimenta BRS via Pix ou on-chain.',
  },
  {
    question: 'Como eu compro e saco BRS?',
    answer:
      'Você paga um Pix na Hodle e recebe BRS na sua carteira. Para sacar, converte o BRS de volta para reais e recebe via Pix, 24 horas por dia.',
  },
  {
    question: 'Em quais redes o BRS existe?',
    answer:
      'BRS circula on-chain na rede Solana, onde você recebe e envia direto da sua carteira.',
  },
  {
    question: 'Quanto tempo leva a liquidação?',
    answer:
      'A entrada e a saída via Pix são praticamente instantâneas. Movimentações on-chain seguem o tempo de confirmação da rede escolhida.',
  },
] as const

export const BrsFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <section className="border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24 flex justify-center">
        <AnimatedSection delay={0.1} className="w-full max-w-[700px]">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009c3b] mb-4 block">
              FAQ
            </span>
            <h2
              className={`${heading} text-[clamp(2rem,4vw,3rem)] font-light text-foreground`}
            >
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-2">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={item.question}
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
                    {openIndex === index ? (
                      <Minus className="h-3.5 w-3.5 text-[#009c3b]" />
                    ) : (
                      <Plus className="h-3.5 w-3.5 text-gray-400" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
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
        </AnimatedSection>
      </div>
    </section>
  )
}
