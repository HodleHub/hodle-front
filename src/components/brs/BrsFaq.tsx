import type { ReactElement } from 'react'
import { Plus } from 'lucide-react'
import { brsCopy, type BrsCopy } from './brsCopy'

const heading: string = 'font-[family-name:var(--font-space-grotesk)]'

type BrsFaqProps = { copy?: BrsCopy }

/** Keeps complete BRS answers in the initial HTML and operable without JavaScript. */
export const BrsFaq = ({ copy = brsCopy.pt }: BrsFaqProps): ReactElement => (
  <section id="brs-faq" className="border-t border-gray-200">
    <div className="max-w-[700px] mx-auto px-6 py-20 lg:py-24">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009c3b] mb-4 block">{copy.faq.eyebrow}</span>
        <h2 className={`${heading} text-[clamp(2rem,4vw,3rem)] font-light text-foreground`}>{copy.faq.title}</h2>
      </div>
      <div className="space-y-2">
        {copy.faq.items.map((item: BrsCopy['faq']['items'][number], index: number): ReactElement => (
          <details key={item.question} name="brs-faq" open={index === 0} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
            <summary className="w-full px-5 py-4 text-left flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="text-sm font-medium text-foreground pr-4">{item.question}</span>
              <span className="shrink-0 w-7 h-7 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                <Plus className="h-3.5 w-3.5 text-[#009c3b] group-open:rotate-45" aria-hidden="true" />
              </span>
            </summary>
            <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)
