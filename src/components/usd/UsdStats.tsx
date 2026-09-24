import type { ReactNode } from 'react'
import { SectionMarks } from '../landingV2/SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

type Stat = {
  value: ReactNode
  label: string
  delay: string
}

const STATS: Stat[] = [
  { value: <>1<span className="text-[#EAB308]"> Pix</span></>, label: 'É tudo que você paga. O câmbio acontece do nosso lado.', delay: '0.3s' },
  { value: <>2<span className="text-[#14B8A6]"> trilhos</span></>, label: 'ACH e wire para qualquer banco nos Estados Unidos.', delay: '0.5s' },
  { value: <>0<span className="text-[#EAB308]"> contas</span></>, label: 'no exterior para você abrir. Quem recebe usa o banco dele.', delay: '0.7s' },
]

/**
 * Three headline numbers of the USD product, same roll-in as the home stats.
 */
export const UsdStats = () => (
  <section aria-labelledby="usd-numeros" className="lv2-sec">
    <SectionMarks />
    <h2 id="usd-numeros" className="sr-only">
      A Conta USD em números
    </h2>
    <div className="lv2-rail lv2-cells grid-cols-1 md:grid-cols-3">
      {STATS.map((stat) => (
        <div key={stat.label} className="lv2-cell px-8 lg:px-11 py-12 lg:py-14">
          <div className={`${heading} text-6xl lg:text-[76px] font-medium tracking-[-0.05em] leading-none h-[1em] overflow-hidden`}>
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
