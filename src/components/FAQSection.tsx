'use client'

import { useState, useCallback } from 'react'
import { Plus, Minus } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { faqItems } from '../content/faq/faqItems'
import { FaqAnswer } from './FaqAnswer'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

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
                    <FaqAnswer item={item} />
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
