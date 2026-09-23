import Image from 'next/image'
import { RAILS } from './landingV2Data'
import { SectionMarks } from './SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const SPOTLIGHT_STEP_SECONDS = 2

/**
 * BlindPay-style logo grid; each rail lights up in turn and on hover.
 */
export const NetworkGrid = () => (
  <section aria-labelledby="lv2-redes-top" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail">
      <div className="px-6 py-10 text-center border-b border-[#E5E5E5]">
        <h2 id="lv2-redes-top" className={`${heading} text-xl lg:text-2xl font-normal text-[#404040] tracking-tight`}>
          Um saldo que circula em todas estas redes e rails
        </h2>
      </div>
      <div className="lv2-cells grid-cols-2 md:grid-cols-4">
        {RAILS.map((rail, index) => (
          <div key={rail.name} className="lv2-cell h-24 lg:h-[124px] flex items-center justify-center gap-3.5">
            <Image
              src={rail.icon}
              alt=""
              width={36}
              height={36}
              className="lv2-spot w-8 h-8 lg:w-9 lg:h-9 object-contain"
              style={{ animationDelay: `${index * SPOTLIGHT_STEP_SECONDS}s` }}
            />
            <span className={`${heading} text-lg lg:text-[22px] font-medium text-[#404040]`}>{rail.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)
