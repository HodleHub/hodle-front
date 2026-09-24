import Image from 'next/image'
import { ICONS } from '../landingV2/landingV2Data'

const heading = 'font-[family-name:var(--font-space-grotesk)]'
const mono = 'font-[family-name:var(--font-geist-mono)]'

const SIDEBAR: string[] = ['Home', 'Conta USD', 'Destinatários', 'Transações', 'Wallets']

const ACTIVE_SIDEBAR_INDEX = 1

type TransferRow = {
  id: string
  recipient: string
  rail: string
  value: string
  done: boolean
}

const ROWS: TransferRow[] = [
  { id: 'TRF…9QA', recipient: 'Northwind Software LLC', rail: 'Wire', value: 'US$ 4.200,00', done: true },
  { id: 'TRF…7KD', recipient: 'Conta própria ••••4821', rail: 'ACH', value: 'US$ 1.000,00', done: true },
  { id: 'TRF…3MX', recipient: 'Sam Chen', rail: 'ACH', value: 'US$ 650,00', done: true },
]

const ROW_GRID = 'grid grid-cols-[100px_1fr_90px_130px_120px] items-center px-4 text-[13px]'

type SummaryCellProps = {
  label: string
  value: string
}

const SummaryCell = ({ label, value }: SummaryCellProps) => (
  <div className="p-4">
    <div className="text-[13px] text-gray-500">{label}</div>
    <div className={`${heading} text-3xl font-medium tracking-tight mt-1.5`}>{value}</div>
  </div>
)

const CompletedBadge = () => (
  <span className="text-[11px] font-semibold bg-[#CCFBF1] text-[#115E59] rounded-md px-2 py-0.5">CONCLUÍDO</span>
)

const InTransitBadge = () => (
  <span className="text-[11px] font-semibold bg-[#FEF3C7] text-[#854D0E] rounded-md px-2 py-0.5">A CAMINHO</span>
)

const sidebarItemClass = (index: number): string => {
  if (index === ACTIVE_SIDEBAR_INDEX) return 'bg-white border-[#E5E5E5] font-medium'

  return 'border-transparent text-gray-500'
}

const sidebarDotClass = (index: number): string => {
  if (index === ACTIVE_SIDEBAR_INDEX) return 'bg-[#EAB308]'

  return 'bg-[#D4D4D4]'
}

/**
 * Mock of the Conta USD screen under the /usd hero, with sample transfers.
 */
export const UsdDashboardMock = () => (
  <div className="lv2-dash relative z-10 mx-4 mt-14 lg:absolute lg:left-6 lg:right-6 lg:top-[700px] lg:mx-0 lg:mt-0 bg-white border border-[#E5E5E5] rounded-2xl shadow-[0_40px_80px_-20px_rgba(10,10,10,0.18),0_0_0_8px_rgba(255,255,255,0.6)] overflow-hidden flex lg:h-[520px]">
    <div className="hidden lg:flex w-[220px] shrink-0 border-r border-[#EDEDED] p-4 flex-col gap-1 bg-[#FAFAFA]">
      <div className="flex items-center gap-2 px-2 pb-4">
        <Image src={ICONS.hodleWordmark} alt="Hodle" width={226} height={88} className="h-7 w-auto" />
      </div>
      {SIDEBAR.map((label, index) => (
        <div key={label} className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm border ${sidebarItemClass(index)}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${sidebarDotClass(index)}`} />
          {label}
        </div>
      ))}
    </div>

    <div className="flex-1 min-w-0 p-5 lg:p-7 flex flex-col gap-5">
      <div className="flex justify-between items-center gap-4">
        <div>
          <div className="text-xl font-semibold">Enviar dólar</div>
          <div className="text-[13px] text-gray-500">Dados de exemplo</div>
        </div>
        <div className="hidden sm:flex gap-2 text-[13px]">
          <span className="border border-[#E5E5E5] rounded-lg px-3 py-2">Novo destinatário</span>
          <span className="bg-[#0A0A0A] text-white rounded-lg px-3 py-2">Gerar Pix</span>
        </div>
      </div>

      <div className="lv2-cells grid-cols-1 md:grid-cols-3 border border-[#E5E5E5] rounded-xl overflow-hidden">
        <SummaryCell label="Você paga via Pix" value="R$ 5.748,10" />
        <SummaryCell label="Chega nos EUA" value="US$ 1.000,00" />
        <div className="p-4 flex flex-col gap-2">
          <div className="text-[13px] text-gray-500">Trilho</div>
          <div className="flex items-center gap-2.5">
            <span className="relative w-2.5 h-2.5 inline-block">
              <span className="lv2-ping" />
              <span className="absolute inset-0 rounded-full bg-[#14B8A6]" />
            </span>
            <span className={`${heading} text-3xl font-medium`}>ACH</span>
          </div>
          <div className="text-[13px] text-[#525252]">1 a 3 dias úteis</div>
        </div>
      </div>

      <div className="border border-[#E5E5E5] rounded-xl overflow-x-auto">
        <div className="min-w-[620px]">
          <div className={`${ROW_GRID} py-2.5 text-xs text-gray-500 border-b border-[#EDEDED] bg-[#FAFAFA]`}>
            <span>ID</span>
            <span>Destinatário</span>
            <span>Trilho</span>
            <span>Valor</span>
            <span>Status</span>
          </div>
          <div className={`lv2-rowin ${ROW_GRID} py-3 border-b border-[#F0F0F0] bg-[#FEFCE8]`}>
            <span className={`${mono} text-gray-500`}>TRF…X2A</span>
            <span className="flex items-center gap-1.5">
              <Image src={ICONS.pix} alt="" width={16} height={16} className="w-4 h-4" />
              Pix recebido
            </span>
            <span>ACH</span>
            <span className="font-medium">US$ 1.000,00</span>
            <span>
              <InTransitBadge />
            </span>
          </div>
          {ROWS.map((row) => (
            <div key={row.id} className={`${ROW_GRID} py-3 border-b border-[#F0F0F0] last:border-b-0`}>
              <span className={`${mono} text-gray-500`}>{row.id}</span>
              <span className="truncate pr-3">{row.recipient}</span>
              <span>{row.rail}</span>
              <span className="font-medium">{row.value}</span>
              <span>
                <CompletedBadge />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)
