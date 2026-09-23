import Image from 'next/image'
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react'
import { ICONS } from './landingV2Data'

type Currency = 'BRL' | 'USDC' | 'USDT'

type FeedItem = {
  name: string
  direction: 'sent' | 'received'
  amount: string
  currency: Currency
  counterAmount: string
  counterCurrency: Currency
}

const FEED: FeedItem[] = [
  { name: 'Ana Paula', direction: 'sent', amount: '5.400', currency: 'BRL', counterAmount: '1.000,00', counterCurrency: 'USDC' },
  { name: 'Luis Dias', direction: 'received', amount: '2.500', currency: 'USDC', counterAmount: '13.500,00', counterCurrency: 'BRL' },
  { name: 'William Alves', direction: 'sent', amount: '245.000', currency: 'BRL', counterAmount: '45.370,37', counterCurrency: 'USDC' },
  { name: 'Marina Costa', direction: 'received', amount: '800', currency: 'USDT', counterAmount: '4.320,00', counterCurrency: 'BRL' },
  { name: 'Pedro Lima', direction: 'sent', amount: '1.200', currency: 'BRL', counterAmount: '222,22', counterCurrency: 'USDC' },
]

const CURRENCY_ICON: Record<Exclude<Currency, 'BRL'>, string> = {
  USDC: ICONS.usdc,
  USDT: ICONS.usdt,
}

const BrazilFlag = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="12" fill="#009C3B" />
    <path d="M12 4.5 21 12l-9 7.5L3 12z" fill="#FFDF00" />
    <circle cx="12" cy="12" r="4.2" fill="#002776" />
  </svg>
)

const CurrencyIcon = ({ currency, size }: { currency: Currency; size: number }) => {
  if (currency === 'BRL') return <BrazilFlag size={size} />

  return <Image src={CURRENCY_ICON[currency]} alt="" width={size} height={size} />
}

const FeedRow = ({ item }: { item: FeedItem }) => (
  <div className="flex items-center gap-3 bg-white border border-[#EDEDED] rounded-2xl px-4 py-3.5 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
    <span className="w-9 h-9 shrink-0 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#737373]">
      {item.direction === 'sent' ? <ArrowUpRight className="w-4 h-4" aria-hidden="true" /> : <ArrowDownLeft className="w-4 h-4" aria-hidden="true" />}
    </span>
    <div className="flex-1 min-w-0">
      <div className="font-medium text-[15px] truncate">{item.name}</div>
      <div className="text-xs text-[#737373]">{item.direction === 'sent' ? 'Enviado' : 'Recebido'}</div>
    </div>
    <div className="flex flex-col items-end gap-0.5">
      <div className="flex items-center gap-1.5 text-[15px] font-medium">
        <CurrencyIcon currency={item.currency} size={18} />
        {item.amount}
        <span className="text-[#A3A3A3]">{item.currency}</span>
      </div>
      <div className="flex items-center gap-1 text-[11px] text-[#525252]">
        <CurrencyIcon currency={item.counterCurrency} size={12} />
        {item.counterAmount} {item.counterCurrency}
      </div>
    </div>
  </div>
)

/**
 * Example transaction feed that scrolls downward, fading in at the top and out at the bottom.
 */
export const TransactionFeed = () => (
  <div className="lv2-feed relative h-[300px] overflow-hidden" aria-label="Transações de exemplo">
    <div className="lv2-feed-track flex flex-col gap-2.5">
      {[...FEED, ...FEED].map((item, index) => (
        <div key={`${item.name}-${index}`} aria-hidden={index >= FEED.length}>
          <FeedRow item={item} />
        </div>
      ))}
    </div>
  </div>
)
