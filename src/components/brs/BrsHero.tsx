import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ButtonShadow } from '../ui/ButtonShadow'
import { LatamDotMap } from './LatamDotMap'
import { SaoPauloMarker } from './SaoPauloMarker'
import { GlobalToLocal } from './GlobalToLocal'
import { NoraBadge } from './NoraBadge'
import { brsCopy, type BrsCopy } from './brsCopy'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const REGISTER_URL = 'https://app.hodle.com.br/register'

type BrsHeroProps = {
  copy?: BrsCopy
}

export const BrsHero = ({ copy = brsCopy.pt }: BrsHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(0,156,59,0.18)] lg:h-16 lg:w-16">
                <Image
                  src="/brs.svg"
                  alt="BRS"
                  width={36}
                  height={36}
                  className="h-8 w-8 lg:h-9 lg:w-9"
                  priority
                />
              </div>
            </div>

            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b] mb-5">
              <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
              {copy.hero.eyebrow}
            </span>

            <h1
              className={`${heading} text-[clamp(2.6rem,6.6vw,5.2rem)] font-light text-foreground leading-[1.05] mb-7 tracking-[-0.03em] text-balance`}
            >
              A stablecoin{' '}
              <span className="block sm:inline">
                <GlobalToLocal />
              </span>{' '}
              {copy.hero.titleSuffix}
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 max-w-[560px] mx-auto lg:mx-0 mb-6 leading-relaxed text-pretty">
              {copy.hero.description}
            </p>

            <div className="flex justify-center lg:justify-start mb-9">
              <NoraBadge label={copy.hero.issuer} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center">
              <Link href={REGISTER_URL} target="_blank" rel="noreferrer">
                <ButtonShadow
                  faceClassName="border-[#009c3b] bg-[#009c3b] text-white hover:bg-[#009c3b]"
                  shadowClassName="bg-[#32bcad]/40"
                >
                  {copy.hero.buyCta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ButtonShadow>
              </Link>
              <Link href="#developer">
                <ButtonShadow
                  faceClassName="border-gray-300 bg-white text-gray-600 hover:text-foreground"
                  shadowClassName="bg-gray-200"
                >
                  {copy.hero.apiCta}
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </ButtonShadow>
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-[420px] mx-auto aspect-[34/49] lg:max-w-none lg:mx-0">
            <LatamDotMap />
            <SaoPauloMarker label={copy.hero.mapLabel} />
          </div>
        </div>
      </div>
    </section>
  )
}
