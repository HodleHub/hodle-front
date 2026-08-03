import Link from 'next/link'
import { Check, ChevronRight } from 'lucide-react'
import { ButtonShadow } from '../ui/ButtonShadow'
import AnimatedSection from '../AnimatedSection'
import { BrsCodeBlock } from './BrsCodeBlock'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const DEV_ITEMS = [
  'API REST para enviar e receber BRS via Pix ou on-chain',
  'Webhooks em tempo real para cada movimentação',
  'Suporte a Polygon, Base e Solana no mesmo endpoint',
] as const

export const BrsDeveloperSection = () => {
  return (
    <section
      id="developer"
      className="border-t border-gray-200 bg-gray-50/50"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          <AnimatedSection delay={0.1} direction="left" className="flex-1">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b] mb-5">
              <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
              Developer
            </span>
            <h2
              className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
            >
              Uma API para mover BRS
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Envie um payout em BRS direto para uma carteira on-chain, ou
              receba via Pix e converta automaticamente. Tudo pela mesma API
              que já move Pix, dólar e stablecoins na Hodle.
            </p>
            <ul className="space-y-4 mb-10">
              {DEV_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-[#009c3b] shrink-0 mt-0.5" />
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="https://docs.hodle.com.br" target="_blank">
              <ButtonShadow
                as="span"
                size="sm"
                faceClassName="border-[#009c3b] bg-[#009c3b] text-white hover:bg-[#009c3b]"
                shadowClassName="bg-[#32bcad]/40"
              >
                Ver documentação
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </ButtonShadow>
            </Link>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            direction="right"
            className="flex-1 w-full"
          >
            <BrsCodeBlock />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
