import { ShieldCheck, Zap, Share2, Building2 } from 'lucide-react'
import AnimatedSection from '../AnimatedSection'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const VALUE_PROPS = [
  {
    icon: ShieldCheck,
    title: '1:1 lastreado em Real',
    desc: 'Cada BRS em circulação é respaldado por reais em reserva, sem surpresas de paridade.',
  },
  {
    icon: Zap,
    title: 'Liquidação instantânea via Pix',
    desc: 'Entrada e saída em Pix, 24 horas por dia, todos os dias — sem esperar horário bancário.',
  },
  {
    icon: Share2,
    title: 'On-chain, em várias redes',
    desc: 'BRS circula em Polygon, Base e Solana. Envie e receba direto na carteira, sem fronteiras.',
  },
  {
    icon: Building2,
    title: 'Nora Finance, disponível na Hodle',
    desc: 'BRS é emitido pela Nora Finance. Na Hodle, você compra, guarda e movimenta com Pix.',
  },
] as const

export const BrsValueProps = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        <AnimatedSection delay={0.05}>
          <div className="max-w-[600px] mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b] mb-5">
              <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
              Por que BRS
            </span>
            <h2
              className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15]`}
            >
              O Real que nunca dorme
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUE_PROPS.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08} direction="up">
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-7">
                <div className="w-11 h-11 rounded-xl bg-[#32bcad]/10 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#009c3b]" />
                </div>
                <h3
                  className={`${heading} text-base font-medium text-foreground mb-2.5`}
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
