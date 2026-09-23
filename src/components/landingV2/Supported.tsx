import Image from 'next/image'
import { ICONS, RAILS, SUPPORTED_ASSETS } from './landingV2Data'
import { SectionMarks } from './SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const ORBIT_SIZE = 420
const ORBIT_RADIUS = 180

const toPercent = (value: number): string => `${((value / ORBIT_SIZE) * 100).toFixed(3)}%`

const orbitPosition = (index: number, total: number): { left: string; top: string } => {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  const center = ORBIT_SIZE / 2

  return {
    left: toPercent(center + ORBIT_RADIUS * Math.cos(angle)),
    top: toPercent(center + ORBIT_RADIUS * Math.sin(angle)),
  }
}

const Orbit = () => (
  <div className="relative w-full max-w-[420px] aspect-square shrink-0">
    <div aria-hidden="true" className="absolute inset-[7.143%] rounded-full border border-[#EDEDED]" />
    <div className="lv2-orbit absolute inset-0">
      {RAILS.map((rail, index) => (
        <div
          key={rail.name}
          className="lv2-counter absolute w-12 h-12 -ml-6 -mt-6 sm:w-14 sm:h-14 sm:-ml-7 sm:-mt-7 rounded-2xl bg-white border border-[#E5E5E5] shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center"
          style={orbitPosition(index, RAILS.length)}
        >
          <Image src={rail.icon} alt={rail.name} width={30} height={30} loading="eager" className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] object-contain" />
        </div>
      ))}
    </div>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] sm:w-[90px] sm:h-[90px] rounded-3xl bg-white border border-[#E5E5E5] flex items-center justify-center">
      <Image src={ICONS.hodleMark} alt="Hodle" width={56} height={56} className="w-12 h-12 sm:w-14 sm:h-14" />
    </div>
  </div>
)

/**
 * Supported assets and networks, with the rails orbiting the Hodle core.
 */
export const Supported = () => (
  <section id="redes" aria-labelledby="lv2-redes-h" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail lv2-cells grid-cols-1 lg:grid-cols-[520px_1fr]">
      <div className="lv2-dots !bg-[#FCFCFC] p-6 sm:p-8 lg:p-12 flex items-center justify-center overflow-hidden">
        <Orbit />
      </div>
      <div className="flex flex-col">
        <div className="px-6 lg:px-11 pt-14 pb-9 border-b border-[#E5E5E5]">
          <div className="font-[family-name:var(--font-geist-mono)] text-[13px] tracking-[0.14em] text-[#A16207]">SUPORTADO</div>
          <h2 id="lv2-redes-h" className={`${heading} mt-3.5 mb-3 text-4xl lg:text-[46px] font-medium tracking-[-0.04em] leading-[1.08]`}>
            Tudo que flui pela Hodle.
          </h2>
          <p className="text-[17px] text-[#525252] leading-relaxed">Trocar de rede não muda a taxa de serviço.</p>
        </div>
        <div className="lv2-cells grid-cols-1 sm:grid-cols-2 flex-1">
          {SUPPORTED_ASSETS.map((asset) => (
            <div key={asset.name} className="lv2-cell px-7 py-6 flex flex-col gap-3.5">
              <div className="flex items-center gap-2.5">
                <Image src={asset.icon} alt="" width={28} height={28} />
                <span className="font-semibold text-lg">{asset.name}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {asset.networks.map((network) => (
                  <span key={network} className="text-[13px] bg-[#F5F5F5] rounded-md px-2 py-1">
                    {network}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
