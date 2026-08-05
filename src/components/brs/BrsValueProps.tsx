import Image from 'next/image'
import AnimatedSection from '../AnimatedSection'
import { NoraMark } from './NoraMark'
import { brsCopy, type BrsCopy } from './brsCopy'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const monoGreenFilter = {
  filter: 'grayscale(1) sepia(1) hue-rotate(70deg) saturate(4) brightness(0.9)',
} as const

const VALUE_MARKS = [
  {
    mark: (
      <Image
        src="/brs.svg"
        alt="BRS"
        width={24}
        height={24}
        className="h-6 w-6"
        style={monoGreenFilter}
      />
    ),

  },
  {
    mark: (
      <Image
        src="/pix.svg"
        alt="Pix"
        width={24}
        height={24}
        className="h-6 w-6"
        style={monoGreenFilter}
      />
    ),

  },
  {
    mark: (
      <Image
        src="/solana.svg"
        alt="Solana"
        width={24}
        height={24}
        className="h-6 w-6"
      />
    ),

  },
  {
    mark: <NoraMark className="h-6 w-6 text-[#009c3b]" />,

  },
] as const

type BrsValuePropsProps = {
  copy?: BrsCopy
}

export const BrsValueProps = ({ copy = brsCopy.pt }: BrsValuePropsProps) => {
  return (
    <section className="border-t border-gray-200 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        <AnimatedSection delay={0.05}>
          <div className="max-w-[600px] mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b] mb-5">
              <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
              {copy.valueProps.eyebrow}
            </span>
            <h2
              className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15]`}
            >
              {copy.valueProps.title}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {copy.valueProps.items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08} direction="up">
              <div className="h-full border-t border-gray-200 pt-6">
                <div className="mb-5">{VALUE_MARKS[i]?.mark}</div>
                <h3
                  className={`${heading} text-base font-semibold text-foreground mb-2.5`}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
