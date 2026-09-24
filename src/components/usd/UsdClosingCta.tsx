import { APP_URL, WHATSAPP_URL } from '../landingV2/landingV2Data'
import { SectionMarks } from '../landingV2/SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const PlayMark = ({ color }: { color: string }) => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M7 4l12 8-12 8z" />
  </svg>
)

/**
 * Closing call to action of /usd, same layout as the home closing.
 */
export const UsdClosingCta = () => (
  <section aria-labelledby="usd-cta-h" className="lv2-sec bg-[#FAFAFA]">
    <SectionMarks />
    <div className="lv2-rail grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-6 px-6 lg:px-[76px] py-24 lg:py-32 items-center">
      <div className="lg:col-span-7 flex flex-col gap-5">
        <h2 id="usd-cta-h" className={`${heading} text-4xl lg:text-[54px] font-medium tracking-[-0.04em] leading-[1.08] text-balance`}>
          Seu próximo pagamento em dólar começa com um Pix.
        </h2>
        <p className="text-lg leading-relaxed text-[#525252] max-w-[600px]">
          Abra a conta, faça a verificação e cadastre o primeiro destinatário nos Estados Unidos.
        </p>
        <div className="flex flex-wrap items-center gap-8 mt-2">
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="lv2-btn lv2-sheen bg-[#0A0A0A] text-white font-medium text-[16px] px-6 py-4 rounded-xl flex items-center gap-2.5"
          >
            Abrir minha Conta USD
            <PlayMark color="#EAB308" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="font-medium text-[16px] hover:text-[#A16207]">
            Falar com vendas
          </a>
        </div>
      </div>
      <div className="lg:col-start-9 lg:col-span-4 flex flex-col gap-4">
        <div className="flex gap-3.5">
          <span aria-hidden="true" className="w-[3px] h-[22px] rounded bg-[#EAB308] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium">Integração por API</h3>
            <p className="text-[16px] leading-relaxed text-[#525252]">
              Os endpoints de USD estão chegando à API. Fale com o time para entrar no acesso antecipado.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="font-medium flex items-center gap-2 hover:text-[#A16207]">
              Pedir acesso antecipado
              <PlayMark color="#0A0A0A" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)
