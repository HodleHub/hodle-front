import { SectionMarks } from './SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

type Step = {
  title: string
  description: string
  delay: string
}

const STEPS: Step[] = [
  { title: 'Crie a conta e teste', description: 'Tudo começa em sandbox, com as mesmas telas e APIs de produção.', delay: '0s' },
  { title: 'Verifique a empresa', description: 'KYC para pessoa física, KYB para empresa. Aprovou, produção liga.', delay: '1.2s' },
  { title: 'Mova dinheiro de verdade', description: 'Receba em Pix, guarde em dólar e pague em stablecoin.', delay: '2.4s' },
]

/**
 * Three onboarding steps with an animated progress rail.
 */
export const Steps = () => (
  <section aria-labelledby="lv2-passos-h" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail">
      <div className="px-6 pt-14 text-center">
        <h2 id="lv2-passos-h" className={`${heading} text-4xl lg:text-[46px] font-medium tracking-[-0.04em]`}>
          Do zero ao primeiro Pix.
        </h2>
      </div>
      <div className="relative mt-10">
      <div aria-hidden="true" className="absolute z-[5] hidden md:block h-0.5 bg-[#EDEDED] left-[16.66%] right-[16.66%] top-[42px]">
        <div className="lv2-bar h-0.5 bg-[#EAB308]" />
      </div>
      <div className="lv2-cells grid-cols-1 md:grid-cols-3 border-t border-[#E5E5E5]">
        {STEPS.map((step, index) => (
          <div key={step.title} className="lv2-cell px-9 pt-5 pb-12 flex flex-col items-center text-center gap-3">
            <span
              className="lv2-lit relative z-10 font-[family-name:var(--font-geist-mono)] w-11 h-11 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center text-[15px]"
              style={{ animationDelay: step.delay }}
            >
              {index + 1}
            </span>
            <h3 className="mt-1.5 text-xl font-semibold">{step.title}</h3>
            <p className="text-base leading-relaxed text-[#525252] max-w-[300px]">{step.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  </section>
)
