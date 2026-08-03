import { QrCode, WalletMinimal, ArrowLeftRight, Banknote } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const STEPS = [
  {
    icon: QrCode,
    title: 'Pix in',
    desc: 'Você paga um Pix na Hodle, do valor que quiser.',
  },
  {
    icon: WalletMinimal,
    title: 'BRS na carteira',
    desc: 'O Real vira BRS e cai na sua carteira auto-custodial.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Envia e recebe on-chain',
    desc: 'Movimente BRS entre carteiras em Polygon, Base ou Solana.',
  },
  {
    icon: Banknote,
    title: 'Pix out',
    desc: 'Converta de volta para reais e saque via Pix quando quiser.',
  },
] as const

export const BrsHowItWorks = () => {
  return (
    <section className="border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        <AnimatedSection delay={0.05}>
          <div className="max-w-[600px] mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b] mb-5">
              <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
              Como funciona
            </span>
            <h2
              className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15]`}
            >
              Do Pix ao on-chain, e de volta
            </h2>
          </div>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex-1 flex items-center gap-4">
              <AnimatedSection
                delay={i * 0.1}
                direction="up"
                className="flex-1 h-full"
              >
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 text-center">
                  <div className="w-11 h-11 rounded-xl bg-[#32bcad]/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-5 h-5 text-[#009c3b]" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-1.5">
                    {i + 1}
                  </p>
                  <h3
                    className={`${heading} text-base font-medium text-foreground mb-2`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>

              {i < STEPS.length - 1 && (
                <ChevronRight className="hidden lg:block w-5 h-5 text-gray-300 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
