import { SectionMarks } from '../landingV2/SectionMarks'
import { USD_STEPS } from './usdData'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

/**
 * Four steps from the Pix to the dollars in the account, with the animated rail.
 */
export const UsdSteps = () => (
  <section id="como-funciona" aria-labelledby="usd-passos-h" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail">
      <div className="px-6 pt-14 text-center">
        <h2 id="usd-passos-h" className={`${heading} text-4xl lg:text-[46px] font-medium tracking-[-0.04em]`}>
          Do Pix ao dólar na conta.
        </h2>
      </div>
      <div className="relative mt-10">
        <div aria-hidden="true" className="absolute z-[5] hidden md:block h-0.5 bg-[#EDEDED] left-[12.5%] right-[12.5%] top-[42px]">
          <div className="lv2-bar h-0.5 bg-[#EAB308]" />
        </div>
        <div className="lv2-cells grid-cols-1 md:grid-cols-4 border-t border-[#E5E5E5]">
          {USD_STEPS.map((step, index) => (
            <div key={step.title} className="lv2-cell px-7 pt-5 pb-12 flex flex-col items-center text-center gap-3">
              <span
                className="lv2-lit relative z-10 font-[family-name:var(--font-geist-mono)] w-11 h-11 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center text-[15px]"
                style={{ animationDelay: step.delay }}
              >
                {index + 1}
              </span>
              <h3 className="mt-1.5 text-xl font-semibold">{step.title}</h3>
              <p className="text-[16px] leading-relaxed text-[#525252] max-w-[260px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
