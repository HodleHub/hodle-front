import AnimatedSection from '../AnimatedSection'
import { brsCopy, type BrsCopy } from './brsCopy'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

type BrsHowItWorksProps = {
  copy?: BrsCopy
}

export const BrsHowItWorks = ({ copy = brsCopy.pt }: BrsHowItWorksProps) => {
  return (
    <section className="border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        <AnimatedSection delay={0.05}>
          <div className="max-w-[600px] mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b] mb-5">
              <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
              {copy.howItWorks.eyebrow}
            </span>
            <h2
              className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15]`}
            >
              {copy.howItWorks.title}
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 lg:border-t lg:border-gray-200 lg:pt-8">
          {copy.howItWorks.steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1} direction="up">
              <div className="border-t border-gray-200 pt-6 lg:border-t-0 lg:pt-0">
                <p
                  className={`${heading} text-3xl font-light text-[#009c3b] mb-3 tracking-tight`}
                >
                  {step.number}
                </p>
                <h3
                  className={`${heading} text-base font-semibold text-foreground mb-2`}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
