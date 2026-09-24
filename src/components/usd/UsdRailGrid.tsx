import Image from 'next/image'
import type { ReactNode } from 'react'
import { Landmark, Zap } from 'lucide-react'
import { ICONS } from '../landingV2/landingV2Data'
import { SectionMarks } from '../landingV2/SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const SPOTLIGHT_STEP_SECONDS = 2

type RailTile = {
  name: string
  visual: ReactNode
}

const TILES: RailTile[] = [
  { name: 'Pix', visual: <Image src={ICONS.pix} alt="" width={36} height={36} className="w-8 h-8 lg:w-9 lg:h-9 object-contain" /> },
  { name: 'ACH', visual: <Landmark className="w-8 h-8 text-[#525252]" strokeWidth={1.6} aria-hidden="true" /> },
  { name: 'Wire', visual: <Zap className="w-8 h-8 text-[#525252]" strokeWidth={1.6} aria-hidden="true" /> },
  { name: 'USDT', visual: <Image src={ICONS.usdt} alt="" width={36} height={36} className="w-8 h-8 lg:w-9 lg:h-9 object-contain" /> },
]

/**
 * The rails a USD transfer touches: Pix in, ACH or wire out, USDT as balance.
 */
export const UsdRailGrid = () => (
  <section aria-labelledby="usd-trilhos-top" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail">
      <div className="px-6 py-10 text-center border-b border-[#E5E5E5]">
        <h2 id="usd-trilhos-top" className={`${heading} text-xl lg:text-2xl font-normal text-[#404040] tracking-tight`}>
          Um Pix de ida, dois trilhos de chegada
        </h2>
      </div>
      <div className="lv2-cells grid-cols-2 md:grid-cols-4">
        {TILES.map((tile, index) => (
          <div key={tile.name} className="lv2-cell h-24 lg:h-[124px] flex items-center justify-center gap-3.5">
            <span className="lv2-spot flex" style={{ animationDelay: `${index * SPOTLIGHT_STEP_SECONDS}s` }}>
              {tile.visual}
            </span>
            <span className={`${heading} text-lg lg:text-[22px] font-medium text-[#404040]`}>{tile.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)
