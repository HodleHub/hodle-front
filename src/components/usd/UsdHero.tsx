import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { APP_URL, WHATSAPP_URL } from '../landingV2/landingV2Data'
import { UsdDashboardMock } from './UsdDashboardMock'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

/**
 * Hero of /usd: headline, CTAs and the Conta USD screen mock.
 */
export const UsdHero = () => (
  <section id="topo" className="lv2-sec overflow-hidden">
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="lv2-blob lv2-b1 w-[620px] h-[620px] left-[8%] top-[500px] bg-[#FDE68A]" />
      <div className="lv2-blob lv2-b2 w-[560px] h-[560px] right-[8%] top-[440px] bg-[#99F6E4]" />
      <div className="lv2-blob lv2-b3 w-[420px] h-[420px] left-[40%] top-[620px] bg-[#FCD34D]" />
    </div>
    <div aria-hidden="true" className="lv2-hatch absolute left-0 w-[calc(50%-600px)] top-[700px] bottom-0 border-t border-[#E5E5E5] hidden xl:block" />
    <div aria-hidden="true" className="lv2-hatch absolute right-0 w-[calc(50%-600px)] top-[700px] bottom-0 border-t border-[#E5E5E5] hidden xl:block" />

    <div className="lv2-rail pb-16 lg:pb-0 lg:h-[1240px]">
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 lg:pt-24">
        <Link
          href="#como-funciona"
          className="lv2-up lv2-u1 flex items-center gap-3 bg-white border border-[#E5E5E5] rounded-full pl-1.5 pr-4 py-1.5 text-sm"
        >
          <span className="bg-[#EAB308] text-[#0A0A0A] font-semibold text-xs tracking-wide rounded-full px-2.5 py-1">
            NOVO
          </span>
          Conta USD: do Pix para uma conta nos EUA
          <span className="text-gray-500">→</span>
        </Link>

        <h1
          className={`${heading} mt-8 text-[clamp(2.6rem,6.4vw,5.25rem)] leading-[1.02] font-medium tracking-[-0.045em] max-w-[1060px] text-balance`}
        >
          <span className="lv2-up lv2-u2 inline-block">Pague em Pix,</span>{' '}
          <span className="lv2-up lv2-u3 inline-block">
            chegue em <span className="lv2-gtext">dólar.</span>
          </span>
        </h1>

        <p className="lv2-up lv2-u4 mt-7 text-lg lg:text-xl leading-relaxed text-[#525252] max-w-[660px]">
          Envie dólares para qualquer conta bancária nos Estados Unidos a partir de um Pix. Por ACH ou wire, sem abrir conta lá fora e com a cotação na tela antes de pagar.
        </p>

        <div className="lv2-up lv2-u5 mt-9 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="lv2-btn lv2-sheen bg-[#0A0A0A] text-white font-medium text-[16px] px-6 py-4 rounded-xl flex items-center justify-center gap-2.5"
          >
            Abrir minha Conta USD
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="lv2-btn bg-white text-[#0A0A0A] font-medium text-[16px] px-6 py-4 rounded-xl border border-[#D4D4D4] flex items-center justify-center gap-2.5"
          >
            Falar com vendas
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <UsdDashboardMock />
    </div>
    <div aria-hidden="true" className="absolute left-0 right-0 bottom-0 h-[110px] bg-gradient-to-b from-white/0 to-white z-20 hidden lg:block" />
  </section>
)
