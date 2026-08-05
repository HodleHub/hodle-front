import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ButtonShadow } from '../ui/ButtonShadow'
import AnimatedSection from '../AnimatedSection'
import { brsCopy, type BrsCopy } from './brsCopy'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const REGISTER_URL = 'https://app.hodle.com.br/register'

type BrsFinalCtaProps = {
  copy?: BrsCopy
}

export const BrsFinalCta = ({ copy = brsCopy.pt }: BrsFinalCtaProps) => {
  return (
    <section className="border-t border-gray-200 bg-gray-50/50">
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
        <AnimatedSection delay={0.1}>
          <div className="text-center max-w-[680px] mx-auto">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b] mb-5">
              <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
              {copy.finalCta.eyebrow}
            </span>
            <h2
              className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
            >
              {copy.finalCta.title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 text-pretty">
              {copy.finalCta.description}
            </p>
            <Link href={REGISTER_URL} target="_blank" rel="noreferrer">
              <ButtonShadow
                faceClassName="border-[#009c3b] bg-[#009c3b] text-white hover:bg-[#009c3b]"
                shadowClassName="bg-[#32bcad]/40"
              >
                {copy.finalCta.buyCta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </ButtonShadow>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
