import Image from 'next/image'
import { ICONS } from './landingV2Data'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const SIDEBAR: string[] = [
  'Home',
  'Transações',
  'Compra',
  'Venda e pagamento QR',
  'Wallets',
  'APIs',
  'Link de afiliado',
]

type TxRow = {
  id: string
  date: string
  from: string
  fromIcon: string
  to: string
  toIcon: string
  value: string
}

const ROWS: TxRow[] = [
  { id: 'VHJ…TA5', date: '14/02, 14:07', from: 'Pix', fromIcon: ICONS.pix, to: 'Polygon', toIcon: ICONS.polygon, value: '+ R$ 50,00' },
  { id: 'VHJ…TVk', date: '07/02, 17:50', from: 'Lightning', fromIcon: ICONS.lightning, to: 'Polygon', toIcon: ICONS.polygon, value: '- R$ 0,10' },
  { id: 'VHJ…TM5', date: '07/02, 17:46', from: 'Lightning', fromIcon: ICONS.lightning, to: 'Pix', toIcon: ICONS.pix, value: '- R$ 0,10' },
  { id: 'VHJ…TZi', date: '06/02, 18:22', from: 'Pix', fromIcon: ICONS.pix, to: 'Solana', toIcon: ICONS.solana, value: '- R$ 0,10' },
  { id: 'VHJ…GQx', date: '05/02, 12:38', from: 'Pix', fromIcon: ICONS.pix, to: 'Base', toIcon: ICONS.base, value: '+ R$ 100,00' },
]

const DIGITS: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const ROW_GRID = 'grid grid-cols-[110px_130px_1fr_1fr_120px_120px] items-center px-4 text-[13px]'

type RollingDigitProps = {
  slow?: boolean
}

const RollingDigit = ({ slow }: RollingDigitProps) => (
  <span className="inline-block h-[1.2em] overflow-hidden">
    <span className={`lv2-roll ${slow ? 'lv2-roll-slow' : ''} flex flex-col leading-[1.2em]`}>
      {DIGITS.map((digit) => (
        <span key={digit}>{digit}</span>
      ))}
    </span>
  </span>
)

type AssetBarProps = {
  icon: string
  label: string
  color: string
  max: string
}

const AssetBar = ({ icon, label, color, max }: AssetBarProps) => (
  <div className="flex items-center gap-2">
    <Image src={icon} alt="" width={18} height={18} className="w-[18px] h-[18px]" />
    <span className="w-10">{label}</span>
    <span className="flex-1 h-1.5 bg-[#F5F5F5] rounded-full overflow-hidden">
      <span className="lv2-bar block h-full" style={{ background: color, maxWidth: max }} />
    </span>
  </div>
)

type RailCellProps = {
  icon: string
  label: string
}

const RailCell = ({ icon, label }: RailCellProps) => (
  <span className="flex items-center gap-1.5">
    <Image src={icon} alt="" width={16} height={16} className="w-4 h-4" />
    {label}
  </span>
)

const CompletedBadge = () => (
  <span className="text-[11px] font-semibold bg-[#CCFBF1] text-[#115E59] rounded-md px-2 py-0.5">COMPLETED</span>
)

/**
 * Animated mock of the Hodle platform overview, used under the hero.
 */
export const DashboardMock = () => (
  <div className="lv2-dash relative z-10 mx-4 mt-14 lg:absolute lg:left-6 lg:right-6 lg:top-[720px] lg:mx-0 lg:mt-0 bg-white border border-[#E5E5E5] rounded-2xl shadow-[0_40px_80px_-20px_rgba(10,10,10,0.18),0_0_0_8px_rgba(255,255,255,0.6)] overflow-hidden flex lg:h-[560px]">
    <div className="hidden lg:flex w-[220px] shrink-0 border-r border-[#EDEDED] p-4 flex-col gap-1 bg-[#FAFAFA]">
      <div className="flex items-center gap-2 px-2 pb-4">
        <Image src={ICONS.hodleWordmark} alt="Hodle" width={226} height={88} className="h-7 w-auto" />
      </div>
      {SIDEBAR.map((label, index) => (
        <div
          key={label}
          className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm border ${index === 0 ? 'bg-white border-[#E5E5E5] font-medium' : 'border-transparent text-gray-500'}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-[#EAB308]' : 'bg-[#D4D4D4]'}`} />
          {label}
        </div>
      ))}
    </div>

    <div className="flex-1 min-w-0 p-5 lg:p-7 flex flex-col gap-5">
      <div className="flex justify-between items-center gap-4">
        <div>
          <div className="text-xl font-semibold">Visão geral</div>
          <div className="text-[13px] text-gray-500">Dados de exemplo</div>
        </div>
        <div className="hidden sm:flex gap-2 text-[13px]">
          <span className="border border-[#E5E5E5] rounded-lg px-3 py-2">Receber Pix</span>
          <span className="bg-[#0A0A0A] text-white rounded-lg px-3 py-2">+ Nova compra</span>
        </div>
      </div>

      <div className="lv2-cells grid-cols-1 md:grid-cols-3 border border-[#E5E5E5] rounded-xl overflow-hidden">
        <div className="p-4">
          <div className="text-[13px] text-gray-500">Saldo total</div>
          <div className={`${heading} text-3xl font-medium tracking-tight mt-1.5 flex`}>
            US$ 12.48
            <RollingDigit slow />,
            <RollingDigit />0
          </div>
          <svg width="100%" height="36" viewBox="0 0 200 36" preserveAspectRatio="none" aria-hidden="true" className="mt-2">
            <path className="lv2-flow" d="M0 30 L25 26 L50 28 L75 18 L100 20 L125 12 L150 14 L175 6 L200 8" fill="none" stroke="#EAB308" strokeWidth="2" />
          </svg>
        </div>
        <div className="p-4">
          <div className="text-[13px] text-gray-500">Por ativo</div>
          <div className="flex flex-col gap-2 mt-2.5 text-[13px]">
            <AssetBar icon={ICONS.usdt} label="USDT" color="#14B8A6" max="62%" />
            <AssetBar icon={ICONS.usdc} label="USDC" color="#0A0A0A" max="28%" />
            <AssetBar icon={ICONS.btc} label="BTC" color="#EAB308" max="10%" />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <div className="text-[13px] text-gray-500">Pix disponível</div>
          <div className="flex items-center gap-2.5">
            <span className="relative w-2.5 h-2.5 inline-block">
              <span className="lv2-ping" />
              <span className="absolute inset-0 rounded-full bg-[#14B8A6]" />
            </span>
            <span className={`${heading} text-3xl font-medium`}>24/7</span>
          </div>
          <div className="text-[13px] text-[#525252]">Inclusive fim de semana e feriado</div>
        </div>
      </div>

      <div className="border border-[#E5E5E5] rounded-xl overflow-x-auto">
        <div className="min-w-[680px]">
          <div className={`${ROW_GRID} py-2.5 text-xs text-gray-500 border-b border-[#EDEDED] bg-[#FAFAFA]`}>
            <span>ID</span>
            <span>Data</span>
            <span>Pago com</span>
            <span>Enviado para</span>
            <span>Valor</span>
            <span>Status</span>
          </div>
          <div className={`lv2-rowin ${ROW_GRID} py-3 border-b border-[#F0F0F0] bg-[#FEFCE8]`}>
            <span className="font-[family-name:var(--font-geist-mono)] text-gray-500">VHJ…X2a</span>
            <span className="text-gray-500">agora</span>
            <RailCell icon={ICONS.pix} label="Pix" />
            <RailCell icon={ICONS.polygon} label="Polygon" />
            <span className="font-medium">+ R$ 250,00</span>
            <span className="relative h-[22px]">
              <span className="lv2-st-a absolute left-0 text-[11px] font-semibold bg-[#FEF3C7] text-[#854D0E] rounded-md px-2 py-0.5">PENDING</span>
              <span className="lv2-st-b absolute left-0">
                <CompletedBadge />
              </span>
            </span>
          </div>
          {ROWS.map((row) => (
            <div key={row.id} className={`${ROW_GRID} py-3 border-b border-[#F0F0F0] last:border-b-0`}>
              <span className="font-[family-name:var(--font-geist-mono)] text-gray-500">{row.id}</span>
              <span className="text-gray-500">{row.date}</span>
              <RailCell icon={row.fromIcon} label={row.from} />
              <RailCell icon={row.toIcon} label={row.to} />
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
