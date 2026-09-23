import { APP_URL, DOCS_URL, WHATSAPP_URL } from './landingV2Data'
import { SectionMarks } from './SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const PlayMark = ({ color }: { color: string }) => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M7 4l12 8-12 8z" />
  </svg>
)

/**
 * Light lumx-style closing: headline and CTAs on the left, integration pointer on the right.
 */
export const ClosingCta = () => (
  <section aria-labelledby="lv2-cta-h" className="lv2-sec bg-[#FAFAFA]">
    <SectionMarks />
    <div className="lv2-rail grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-6 px-6 lg:px-[76px] py-24 lg:py-32 items-center">
      <div className="lg:col-span-7 flex flex-col gap-5">
        <h2 id="lv2-cta-h" className={`${heading} text-4xl lg:text-[54px] font-medium tracking-[-0.04em] leading-[1.08] text-balance`}>
          Construa sua infraestrutura de pagamentos com a Hodle
        </h2>
        <p className="text-lg leading-relaxed text-[#525252] max-w-[600px]">
          Crie uma conta para explorar a plataforma em sandbox, ou fale com o time para desenhar uma integração sob medida para o seu negócio.
        </p>
        <div className="flex flex-wrap items-center gap-8 mt-2">
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="lv2-btn lv2-sheen bg-[#0A0A0A] text-white font-medium text-base px-6 py-4 rounded-xl flex items-center gap-2.5"
          >
            Comece agora
            <PlayMark color="#EAB308" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="font-medium text-base hover:text-[#A16207]">
            Falar com vendas
          </a>
        </div>
      </div>
      <div className="lg:col-start-9 lg:col-span-4 flex flex-col gap-4">
        <div className="flex gap-3.5">
          <span aria-hidden="true" className="w-[3px] h-[22px] rounded bg-[#EAB308] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Comece sua integração</h3>
            <p className="text-base leading-relaxed text-[#525252]">
              Teste tudo em sandbox em minutos. Produção liga quando a verificação da empresa é aprovada.
            </p>
            <a href={DOCS_URL} target="_blank" rel="noreferrer" className="font-medium flex items-center gap-2 hover:text-[#A16207]">
              Referência da API
              <PlayMark color="#0A0A0A" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)
