import { SectionHeader } from '../landingV2/SectionHeader'
import { SectionMarks } from '../landingV2/SectionMarks'
import { USD_AUDIENCES } from './usdData'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

/**
 * Who the Conta USD is for: companies, own US accounts and platforms.
 */
export const UsdAudiences = () => (
  <section aria-labelledby="usd-para-quem-h" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail">
      <SectionHeader
        id="usd-para-quem-h"
        eyebrow="PARA QUEM"
        title={
          <>
            Recebe em real, <span className="lv2-gtext">paga em dólar.</span>
          </>
        }
        aside={
          <p className="text-lg leading-relaxed text-[#525252]">
            Pela plataforma visual hoje, e pela API em breve. O mesmo fluxo serve a sua empresa ou os clientes da sua plataforma.
          </p>
        }
      />
      <div className="lv2-cells grid-cols-1 md:grid-cols-3">
        {USD_AUDIENCES.map((audience) => (
          <div key={audience.tag} className="lv2-cell px-6 lg:px-10 pt-11 pb-12 flex flex-col gap-3.5">
            <span className="font-[family-name:var(--font-geist-mono)] text-xs text-gray-500">{audience.tag}</span>
            <h3 className={`${heading} text-[26px] font-medium tracking-[-0.02em]`}>{audience.title}</h3>
            <p className="text-[16px] leading-relaxed text-[#525252]">{audience.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
