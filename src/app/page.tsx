import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

import { AnimatedCodeIcon } from '../components/ui/AnimatedCodeIcon'
import { AnimatedArrowLeftRightIcon } from '../components/ui/AnimatedArrowLeftRightIcon'
import { AnimatedServerIcon } from '../components/ui/AnimatedServerIcon'
import { AnimatedShieldIcon } from '../components/ui/AnimatedShieldIcon'
import AnimatedSection from '../components/AnimatedSection'
import FAQSection from '../components/FAQSection'
import ArticlesSection from '../components/ArticlesSection'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function BitcoinLightningPayment() {

  return (
    <div
      className="min-h-screen relative flex flex-col text-gray-900"
      style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #fff7ed 100%)',
      }}
    >
      <main className="flex-1 flex flex-col items-center px-4 max-w-7xl mx-auto">
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-6 mb-32 px-4">
          <div className="max-w-xl flex flex-col text-left w-full pl-0">
            <Link
              href="/"
              className="flex ml-[-16px] items-center mb-2 pl-0 cursor-pointer"
            >
              <Image
                width={160}
                height={160}
                src="/h-logo.svg"
                alt="Hodle logo"
                className="h-24 md:h-28 w-auto mr-[-6px]"
              />
              <span
                className={`${poppins.className} text-6xl md:text-7xl font-bold tracking-tight text-gray-900 -ml-2`}
              >
                ODLE
              </span>
            </Link>

            <h1 className="text-5xl md:text-6xl font-normal leading-tight text-gray-700 pl-0">
              Compre Bitcoin de forma rápida e segura
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              A maneira mais fácil de comprar{' '}
              <span className="text-orange-600">BITCOIN</span> diretamente via
              Pix, em qualquer rede, ligtning, liquid ou onchain
            </p>

            <div className="mt-10">
                <Link href="https://app.hodle.com.br" target="_blank">
                  <Button
                    className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 text-lg"
                  >
                    Comece agora
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
          </div>

          <div className="mt-16 md:mt-0 md:ml-8">
            <Image
              src="/people-buy_without_bg.png"
              alt="Lightning"
              width={520}
              height={520}
              className="drop-shadow-xl"
            />
          </div>
        </div>
        <AnimatedSection delay={0.1}>
          <section className="w-full max-w-6xl mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="flex flex-col items-center text-center">
              <AnimatedShieldIcon className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Seguro</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-bold">
                Compre direto para a sua carteira, não guardamos informações
                sensíveis. Sem bloqueios imprevisíveis
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <AnimatedServerIcon className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Infraestrutura
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-bold">
                Liquidez lightning para você utilizar nas suas próprias
                carteiras
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <AnimatedCodeIcon className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">API</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-bold">
                Utilize nossas apis para fazer swaps ou compras de forma
                recorrente
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <AnimatedArrowLeftRightIcon className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SWAPS</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-bold">
                Transite entre onchain, lightning e liquid de forma extremamente
                simples
              </p>
            </div>
          </div>
        </section>
        </AnimatedSection>
        <FAQSection />
        <ArticlesSection />
      </main>
    </div>
  )
}
