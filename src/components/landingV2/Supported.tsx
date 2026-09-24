import Image from 'next/image'
import { SUPPORTED_ASSETS } from './landingV2Data'
import { TilePile } from './TilePile'
import { SectionMarks } from './SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

/**
 * Supported assets and networks, next to a pile of their tiles the visitor can grab and throw.
 */
export const Supported = () => (
  <section id="redes" aria-labelledby="lv2-redes-h" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail lv2-cells grid-cols-1 lg:grid-cols-[520px_1fr]">
      <div className="lv2-dots !bg-[#FCFCFC] relative h-[380px] sm:h-[440px] lg:h-auto lg:min-h-[480px] overflow-hidden">
        <TilePile />
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
