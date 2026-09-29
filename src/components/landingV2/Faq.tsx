import type { ReactElement } from 'react'
import { Plus } from 'lucide-react'
import { FAQ_ITEMS, type FaqItem } from './landingV2Data'
import { SectionMarks } from './SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

type FaqProps = {
  items?: FaqItem[]
}

/**
 * Renders every answer in HTML with a native accordion that also works without JavaScript.
 */
export const Faq = ({ items = FAQ_ITEMS }: FaqProps): ReactElement => {
  return (
    <section id="faq" aria-labelledby="lv2-faq-h" className="lv2-sec">
      <SectionMarks />
      <div className="lv2-rail lv2-cells grid-cols-1 lg:grid-cols-[420px_1fr]">
        <div className="px-6 lg:px-11 py-14 flex flex-col gap-4">
          <div className="font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[0.14em] text-[#A16207]">FAQ</div>
          <h2 id="lv2-faq-h" className={`${heading} text-4xl lg:text-[46px] font-medium tracking-[-0.04em] leading-[1.05]`}>
            Perguntas frequentes
          </h2>
          <p className="text-base leading-relaxed text-[#525252]">
            Não achou? Fale com o time no WhatsApp ou em{' '}
            <a href="mailto:contato@hodle.com.br" className="underline underline-offset-4">
              contato@hodle.com.br
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col">
          {items.map((item: FaqItem, index: number): ReactElement => (
            <details key={item.question} name="landing-faq" open={index === 0} className="group border-b border-[#E5E5E5] last:border-b-0">
              <summary
                className="w-full flex justify-between items-center gap-5 px-6 lg:px-9 py-5 text-left text-lg font-medium transition-colors cursor-pointer list-none [&::-webkit-details-marker]:hidden bg-white hover:bg-[#FAFAFA] group-open:bg-[#FFFDF5]"
              >
                <span>{item.question}</span>
                <span
                  className="w-[30px] h-[30px] shrink-0 rounded-lg flex items-center justify-center transition-colors bg-[#F5F5F5] group-open:bg-[#EAB308]"
                >
                  <Plus className="w-4 h-4 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
                </span>
              </summary>
              <p className="lv2-fade-up px-6 lg:px-9 pr-16 lg:pr-24 pb-6 text-base leading-relaxed text-[#525252] bg-[#FFFDF5]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
