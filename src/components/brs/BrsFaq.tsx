'use client'

import { useState, useCallback } from 'react'
import { Plus, Minus } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'
import { brsCopy, type BrsCopy } from './brsCopy'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

type BrsFaqProps = {
  copy?: BrsCopy
}

export const BrsFaq = ({ copy = brsCopy.pt }: BrsFaqProps) => {
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
              {copy.faq.eyebrow}
            </span>
            <h2
              className={`${heading} text-[clamp(2rem,4vw,3rem)] font-light text-foreground`}
            >
              {copy.faq.title}
            </h2>
          </div>

          <div className="space-y-2">
            {copy.faq.items.map((item, index) => (
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
