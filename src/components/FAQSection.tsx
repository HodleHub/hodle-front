'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'O que é a Hodle?',
    answer:
      'A Hodle é uma plataforma brasileira que permite comprar Bitcoin de forma simples, rápida e com low-KYC. ou seja, sem necessidade de enviar documentos. Toda a verificação é feita automaticamente utilizando os dados do próprio PIX, garantindo segurança e privacidade.',
  },
  {
    question: 'O que é DePix?',
    answer:
      'DePix é uma stablecoin lastreada 1:1 no real, emitida na Liquid Network. O token tem o objetivo de ser a porta entrada entre o mundo fiat e a blockchain, um token transiente com o objetivo de ser trocado por BTC',
  },
  {
    question: 'É seguro usar a Hodle?',
    answer:
      'Sim, não guardamos quaisquer dados pessoais, todos os dados são cifrados, ou seja, nem a hodle tem acesso a quem fez as operações',
  },
  {
    question: 'Quanto tempo demora para receber o Bitcoin?',
    answer:
      'Após o pagamento, é praticamente instantâneo, caso seja selecionado, DePix, LBTC ou lightning, recebimentos on-chain demora o tempo que o bloco demora para ser minerado, cerca de 10 minutos.',
  },
]

export default function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <AnimatedSection delay={0.2}>
      <section className="w-full max-w-2xl mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600">
            Esclarecemos suas principais dúvidas sobre nossa plataforma
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center min-h-[64px]"
              >
                <span className="font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                {openAccordion === index ? (
                  <Minus className="h-5 w-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-orange-500 flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  )
}









