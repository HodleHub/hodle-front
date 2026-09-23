import Image from 'next/image'
import Link from 'next/link'
import { LockKeyhole } from 'lucide-react'
import { APP_URL } from './landingV2Data'
import { TransactionFeed } from './TransactionFeed'
import { SectionHeader } from './SectionHeader'
import { SectionMarks } from './SectionMarks'

const heading = 'font-[family-name:var(--font-space-grotesk)]'
const mono = 'font-[family-name:var(--font-geist-mono)]'

const Eyebrow = ({ children, dark }: { children: string; dark?: boolean }) => (
  <span className={`${mono} text-xs ${dark ? 'text-[#A3A3A3]' : 'text-gray-500'}`}>{children}</span>
)

const BuySell = () => (
  <article className="lv2-cell md:col-span-6 lg:col-span-4 p-8 lg:p-11 flex flex-col md:flex-row gap-8 lg:min-h-[400px]">
    <div className="flex-1 flex flex-col gap-3.5">
      <Eyebrow>01 · COMPRA E VENDA</Eyebrow>
      <h3 className={`${heading} text-3xl font-medium leading-tight tracking-[-0.03em]`}>Compre bitcoin e stablecoin com Pix.</h3>
      <p className="text-base leading-relaxed text-[#525252]">
        Compre stablecoins e bitcoin com Pix. Quando quiser, venda e receba em reais na sua conta.
      </p>
      <a href={APP_URL} target="_blank" rel="noreferrer" className="font-medium mt-auto">
        Comprar agora →
      </a>
    </div>
    <div className="md:w-[340px] shrink-0 bg-[#FAFAFA] border border-[#EDEDED] rounded-2xl p-4 flex flex-col gap-3">
      <span className="font-medium text-[13px] text-[#525252]">Transações recentes</span>
      <TransactionFeed />
    </div>
  </article>
)

const Wallets = () => (
  <article className="lv2-cell md:col-span-6 lg:col-span-2 p-8 lg:p-9 flex flex-col gap-3 !bg-[#0A0A0A] text-white overflow-hidden min-h-[400px]">
    <Eyebrow dark>02 · WALLETS</Eyebrow>
    <h3 className={`${heading} text-[28px] font-medium leading-tight`}>Suas chaves. Suas moedas.</h3>
    <p className="text-[15px] leading-relaxed text-[#D4D4D4]">
      Apenas o seu dispositivo pode acessar o seu saldo.
    </p>
    <div aria-hidden="true" className="relative w-40 h-40 mx-auto mt-auto -mb-1.5">
      <div className="lv2-orbit lv2-orbit-fast absolute inset-0 border border-dashed border-[#525252] rounded-full">
        <span className="absolute -top-1.5 left-[74px] w-3 h-3 rounded-full bg-[#EAB308] shadow-[0_0_12px_#EAB308]" />
      </div>
      <div className="lv2-orbit lv2-orbit-rev absolute inset-7 border border-dashed border-[#525252] rounded-full">
        <span className="absolute -bottom-1.5 left-[46px] w-3 h-3 rounded-full bg-[#14B8A6] shadow-[0_0_12px_#14B8A6]" />
      </div>
      <div className="absolute inset-14 bg-[#171717] border border-[#404040] rounded-xl flex items-center justify-center">
        <LockKeyhole className="w-6 h-6 text-[#EAB308]" />
      </div>
    </div>
  </article>
)

const QrPayment = () => (
  <article className="lv2-cell md:col-span-2 p-8 lg:p-9 flex flex-col gap-3 min-h-[420px]">
    <Eyebrow>03 · PAGAMENTO QR</Eyebrow>
    <h3 className={`${heading} text-[26px] font-medium leading-tight`}>Pague qualquer QR Pix com USDT.</h3>
    <p className="text-[15px] leading-relaxed text-[#525252]">Pro lojista, é um Pix comum. Mesmo comprovante, mesma conciliação.</p>
    <div aria-hidden="true" className="relative mx-auto mt-auto mb-3">
      <Image
        src="/qr-code.svg"
        alt=""
        width={140}
        height={140}
        className="w-[140px] h-[140px]"
        style={{ filter: 'drop-shadow(3px 3px 0px #d4d4d4) drop-shadow(5px 5px 0px rgba(0,0,0,0.08))' }}
      />
      <span className="absolute -top-3 -left-3 w-9 h-9 border-t-4 border-l-4 border-[#0A0A0A] rounded-tl-xl" />
      <span className="absolute -top-3 -right-3 w-9 h-9 border-t-4 border-r-4 border-[#0A0A0A] rounded-tr-xl" />
      <span className="absolute -bottom-3 -left-3 w-9 h-9 border-b-4 border-l-4 border-[#0A0A0A] rounded-bl-xl" />
      <span className="absolute -bottom-3 -right-3 w-9 h-9 border-b-4 border-r-4 border-[#0A0A0A] rounded-br-xl" />
      <span className="lv2-scan" />
    </div>
  </article>
)

const PJ_CHIPS: { label: string; className: string }[] = [
  { label: 'Pix', className: 'border border-[#E5E5E5]' },
  { label: 'Extrato por ativo', className: 'bg-[#FEF3C7] text-[#854D0E]' },
]

const BusinessAccount = () => (
  <article className="lv2-cell md:col-span-2 p-8 lg:p-9 flex flex-col gap-3 min-h-[420px]">
    <Eyebrow>04 · CONTA PJ</Eyebrow>
    <h3 className={`${heading} text-[26px] font-medium leading-tight`}>Conta no nome da sua empresa.</h3>
    <p className="text-[15px] leading-relaxed text-[#525252]">
      Com bancos parceiros regulados pelo Banco Central. Receber em real e guardar em dólar vira uma operação só.
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {PJ_CHIPS.map((chip) => (
        <span key={chip.label} className={`${chip.className} rounded-full px-3.5 py-1.5 text-sm font-medium`}>
          {chip.label}
        </span>
      ))}
    </div>
  </article>
)

const Api = () => (
  <article className="lv2-cell md:col-span-2 p-8 lg:p-9 flex flex-col gap-3 min-h-[420px]">
    <Eyebrow>05 · API</Eyebrow>
    <h3 className={`${heading} text-[26px] font-medium leading-tight`}>Tudo isso por API.</h3>
    <p className="text-[15px] leading-relaxed text-[#525252]">
      Integre pagamentos com Pix e stablecoin no seu produto em minutos. REST, SDK e webhooks — pensados para times de produto e agentes de IA.
    </p>
    <div className={`${mono} mt-auto bg-[#0A0A0A] text-[#FAFAFA] rounded-xl px-4 py-3.5 text-sm`}>
      <span className="text-[#EAB308]">POST</span> /api/wallet/payout
      <span className="lv2-caret ml-1.5" />
    </div>
    <Link href="#flow" className="font-medium text-[15px]">
      Montar o fluxo →
    </Link>
  </article>
)

/**
 * Product cells: buy/sell, wallets, QR payments, business account and API.
 */
export const Products = () => (
  <section id="produtos" aria-labelledby="lv2-produtos-h" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail">
      <SectionHeader
        id="lv2-produtos-h"
        eyebrow="PRODUTOS"
        title={
          <>
            Cinco produtos. <span className="lv2-gtext">Um saldo.</span>
          </>
        }
        aside={<p className="text-lg leading-relaxed text-[#525252]">Pela plataforma visual ou pela API. O mesmo saldo passa por todos.</p>}
      />
      <div className="lv2-cells grid-cols-1 md:grid-cols-6">
        <BuySell />
        <Wallets />
        <QrPayment />
        <BusinessAccount />
        <Api />
      </div>
    </div>
  </section>
)
