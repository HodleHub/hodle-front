import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ButtonShadow } from '../ui/ButtonShadow'
import { LatamDotMap } from './LatamDotMap'
import { SaoPauloMarker } from './SaoPauloMarker'
import { GlobalToLocal } from './GlobalToLocal'
import { NoraBadge } from './NoraBadge'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const REGISTER_URL = 'https://app.hodle.com.br/register'

export const BrsHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 flex items-start justify-center pt-6 lg:pt-0">
        <div className="relative w-full max-w-[580px] aspect-[34/49] lg:max-w-[720px]">
          <LatamDotMap />
          <SaoPauloMarker />
        </div>
      </div>
      <div className="hero-spotlight absolute inset-0 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-28 lg:pt-24 lg:pb-36">
        <div className="text-center max-w-[900px] mx-auto">
          <div className="brs-coin-float mb-6 flex justify-center">
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

          <span className="brs-text-halo inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b] mb-5">
            <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
            BRS na Hodle
          </span>

          <h1
            className={`${heading} brs-text-halo text-[clamp(2.6rem,6.6vw,5.2rem)] font-light text-foreground leading-[1.05] mb-7 tracking-[-0.03em] text-balance`}
          >
            A stablecoin{' '}
            <span className="block sm:inline">
              <GlobalToLocal />
            </span>{' '}
            do Real
          </h1>

          <p className="brs-text-halo text-lg lg:text-xl text-gray-500 max-w-[640px] mx-auto mb-6 leading-relaxed text-pretty">
            BRS é o Real digital 1:1, emitido pela Nora Finance e disponível
            na Hodle. Entra e sai em Pix, 24 horas por dia, e circula on-chain
            na velocidade da internet.
          </p>

          <div className="flex justify-center mb-9">
            <NoraBadge />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <Link href={REGISTER_URL} target="_blank" rel="noreferrer">
              <ButtonShadow
                faceClassName="border-[#009c3b] bg-[#009c3b] text-white hover:bg-[#009c3b]"
                shadowClassName="bg-[#32bcad]/40"
              >
                Comprar BRS
                <ArrowRight className="w-4 h-4 ml-2" />
              </ButtonShadow>
            </Link>
            <Link href="#developer">
              <ButtonShadow
                faceClassName="border-gray-300 bg-white text-gray-600 hover:text-foreground"
                shadowClassName="bg-gray-200"
              >
                Ver a API
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </ButtonShadow>
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        .brs-text-halo {
          text-shadow:
            0 0 14px #fff,
            0 0 14px #fff,
            0 0 22px #fff,
            0 0 22px #fff;
        }
        .brs-coin-float {
          animation: brsCoinFloat 5.5s ease-in-out infinite;
        }
        @keyframes brsCoinFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brs-coin-float {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
