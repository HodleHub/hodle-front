import type { ReactNode } from 'react'
import { SectionMarks } from './SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

type Stat = {
  value: ReactNode
  label: string
  delay: string
}

const STATS: Stat[] = [
  { value: '24/7', label: 'Pix disponível, a qualquer hora.', delay: '0.3s' },
  { value: <>100<span className="text-[#EAB308]">%</span></>, label: 'Auto-custódia. Suas chaves, suas moedas.', delay: '0.5s' },
  { value: <>5<span className="text-[#14B8A6]">+</span></>, label: 'Redes e rails num só saldo.', delay: '0.7s' },
]

/**
 * Three headline numbers that roll up from behind a mask.
 */
export const Stats = () => (
  <section aria-labelledby="lv2-numeros" className="lv2-sec">
    <SectionMarks />
    <h2 id="lv2-numeros" className="sr-only">
      A Hodle em números
    </h2>
    <div className="lv2-rail lv2-cells grid-cols-1 md:grid-cols-3">
      {STATS.map((stat) => (
        <div key={stat.label} className="lv2-cell px-8 lg:px-11 py-12 lg:py-14">
          <div className={`${heading} text-7xl lg:text-[88px] font-medium tracking-[-0.05em] leading-none h-[1em] overflow-hidden`}>
            <span className="lv2-rollin" style={{ animationDelay: stat.delay }}>
              {stat.value}
            </span>
          </div>
          <div className="text-lg text-[#525252] mt-4">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
)
