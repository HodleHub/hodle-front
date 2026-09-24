import { SectionMarks } from '../landingV2/SectionMarks'
import { USD_RAILS, type UsdRail } from './usdData'

const heading = 'font-[family-name:var(--font-space-grotesk)]'
const mono = 'font-[family-name:var(--font-geist-mono)]'

const DARK_RAIL_INDEX = 1

type RailTheme = {
  cell: string
  tag: string
  eta: string
  body: string
  note: string
}

const LIGHT_THEME: RailTheme = {
  cell: 'bg-white',
  tag: 'text-gray-500',
  eta: 'text-[#A16207]',
  body: 'text-[#525252]',
  note: 'text-gray-500',
}

const DARK_THEME: RailTheme = {
  cell: '!bg-[#0A0A0A] text-white',
  tag: 'text-gray-400',
  eta: 'text-[#FACC15]',
  body: 'text-[#D4D4D4]',
  note: 'text-gray-400',
}

const getRailTheme = (index: number): RailTheme => {
  if (index === DARK_RAIL_INDEX) return DARK_THEME

  return LIGHT_THEME
}

type RailCardProps = {
  rail: UsdRail
  index: number
}

const RailCard = ({ rail, index }: RailCardProps) => {
  const theme = getRailTheme(index)

  return (
    <div className={`px-6 lg:px-10 py-12 lg:py-14 flex flex-col gap-4 ${theme.cell}`}>
      <span className={`${mono} text-xs ${theme.tag}`}>
        0{index + 1} · {rail.label.toUpperCase()}
      </span>
      <h3 className={`${heading} text-[44px] font-medium tracking-[-0.03em] leading-none`}>{rail.label}</h3>
      <span className={`${mono} text-[13px] ${theme.eta}`}>{rail.eta}</span>
      <p className={`text-[16px] leading-relaxed ${theme.body}`}>{rail.description}</p>
      <span className={`text-sm mt-auto ${theme.note}`}>{rail.requirement}</span>
    </div>
  )
}

/**
 * ACH versus wire, side by side, with the wire cell inverted like the home product grid.
 */
export const UsdRailCompare = () => (
  <section aria-labelledby="usd-trilhos-h" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail lv2-cells grid-cols-1 lg:grid-cols-[1.1fr_1fr_1fr]">
      <div className="px-6 lg:px-11 py-12 lg:py-14 flex flex-col gap-4">
        <div className={`${mono} text-[13px] tracking-[0.14em] text-[#A16207]`}>TRILHOS</div>
        <h2 id="usd-trilhos-h" className={`${heading} text-4xl lg:text-[44px] font-medium tracking-[-0.04em] leading-[1.08]`}>
          Escolha como o dólar viaja.
        </h2>
        <p className="text-lg leading-relaxed text-[#525252]">Os dois chegam em qualquer banco americano. Muda o prazo e o que o outro lado pede.</p>
      </div>
      {USD_RAILS.map((rail, index) => (
        <RailCard key={rail.key} rail={rail} index={index} />
      ))}
    </div>
  </section>
)
