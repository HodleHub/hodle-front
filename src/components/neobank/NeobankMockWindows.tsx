'use client'

import Image from 'next/image'
import type { ElementType, ReactNode } from 'react'
import {
  ArrowDownRight,
  CircleDollarSign,
  KeyRound,
  Landmark,
  RefreshCcw,
  ShieldCheck,
  Wallet,
  Webhook,
  Zap,
} from 'lucide-react'
import { IllustrativeNote, NeutralPill, StatusPill } from './neobankPills'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

// Illustrative product windows of the /neobank page (account, Pix cycle and
// wallet). They are client islands on purpose: as server components their
// whole markup was serialized into the page's RSC payload on top of the HTML.
// Server rendering still emits the same markup, so the text stays in the
// initial HTML and readable without JavaScript.

const transactions = [
  {
    label: 'Pix recebido',
    meta: 'conta nominal • agora',
    value: '+ R$ 8.420,00',
    icon: ArrowDownRight,
    tint: 'bg-teal-50',
    tone: 'text-[#1f9c90]',
  },
  {
    label: 'Swap executado',
    meta: 'BRLA → USDT • há 2 min',
    value: '+ 1.512,42 USDT',
    icon: RefreshCcw,
    tint: 'bg-gray-100',
    tone: 'text-gray-600',
  },
  {
    label: 'Payout Lightning',
    meta: 'BTC → invoice • há 8 min',
    value: '− 0,0021 BTC',
    icon: Zap,
    tint: 'bg-orange-50',
    tone: 'text-[#f7931a]',
  },
] as const

const walletAddresses = [
  { network: 'Polygon', icon: '/polygon.svg', tint: 'bg-violet-50', address: '0x1F2C…A5F07d', assets: ['USDT', 'USDC'] },
  { network: 'Solana', icon: '/solana.svg', tint: 'bg-emerald-50', address: '7bXk…Qm2P', assets: ['BRS', 'USDC'] },
  { network: 'Tron', icon: '/tron.svg', tint: 'bg-red-50', address: 'TQ4n…9vHr', assets: ['USDT'] },
  { network: 'Spark', icon: '/spark.svg', tint: 'bg-amber-50', address: 'sp1q…74dz', assets: ['BTC'] },
] as const

export const AccountWindow = () => (
  <div className="relative mx-auto w-full max-w-[520px]">
    <div className="absolute -inset-4 rounded-3xl border border-gray-200" aria-hidden="true" />
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_12px_45px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <Image src="/h-logo.svg" alt="Hodle" width={24} height={24} className="h-6 w-6" />
          <span className="text-sm font-semibold text-foreground">Conta nominal</span>
        </div>
        <StatusPill>Conectado</StatusPill>
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
              Saldo operacional
            </p>
            <p className={`${heading} mt-2 text-4xl font-light tracking-[-0.05em] sm:text-5xl`}>
              R$ 1.284.320<span className="text-gray-300">,40</span>
            </p>
          </div>
          <NeutralPill>+12,8% / 30d</NeutralPill>
        </div>

        <div className="mt-7 h-24 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 px-3 pt-3">
          <svg
            viewBox="0 0 520 92"
            className="h-full w-full"
            preserveAspectRatio="none"
            aria-label="Gráfico de crescimento operacional"
          >
            <defs>
              <linearGradient id="neobank-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#0a0a0b" stopOpacity=".14" />
                <stop offset="1" stopColor="#0a0a0b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 76 C35 71 40 59 74 63 S110 53 143 57 S177 38 212 44 S250 29 280 35 S320 41 348 23 S388 31 418 19 S463 17 520 5 V92 H0Z"
              fill="url(#neobank-area)"
            />
            <path
              d="M0 76 C35 71 40 59 74 63 S110 53 143 57 S177 38 212 44 S250 29 280 35 S320 41 348 23 S388 31 418 19 S463 17 520 5"
              fill="none"
              stroke="#0a0a0b"
              strokeWidth="2.2"
            />
          </svg>
        </div>

        <div className="mt-7 space-y-2.5">
          {transactions.map((transaction) => (
            <div
              key={transaction.label}
              className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3"
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${transaction.tint}`}
              >
                <transaction.icon className={`h-4 w-4 ${transaction.tone}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-foreground">{transaction.label}</p>
                <p className="mt-0.5 truncate text-[10.5px] text-gray-400">{transaction.meta}</p>
              </div>
              <span className="whitespace-nowrap font-mono text-[11px] font-medium text-foreground">
                {transaction.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <IllustrativeNote>
        <span className="uppercase tracking-[0.15em]">9 redes • 3 webhooks</span>
      </IllustrativeNote>
    </div>
  </div>
)

// The payload mirrors the real DEPOSIT_ASSET_SUCCESS event emitted by
// sendWooviStableDepositWebhook — same event name, same field names.
const WebhookPayload = () => (
  <div className="mt-2.5 overflow-hidden rounded-xl bg-foreground px-3.5 py-3">
    <pre className="overflow-x-auto font-mono text-[11px] leading-[1.75] text-white/60">
      <code>{`{
  "event": "DEPOSIT_ASSET_SUCCESS",
  "data": {
    "asset": "BRLA",
    "network": "polygon",
    "valueInBrl": "8420.00",
    "fee": "0.75",
    "trackId": "wc_8f21c4"
  }
}`}</code>
    </pre>
  </div>
)

type PixFlowStepProps = {
  icon: ElementType
  title: string
  time: string
  description: ReactNode
  isLast?: boolean
  children?: ReactNode
}

const PixFlowStep = ({
  icon: Icon,
  title,
  time,
  description,
  isLast = false,
  children,
}: PixFlowStepProps) => (
  <div className="flex gap-4">
    <div className="flex shrink-0 flex-col items-center">
      <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gray-100">
        <Icon className="h-4 w-4 text-foreground" />
      </span>
      {!isLast && <span className="my-1.5 w-0.5 flex-1 bg-gray-200" />}
    </div>
    <div className={`min-w-0 flex-1 ${isLast ? '' : 'pb-6'}`}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        <span className="shrink-0 font-mono text-[11px] text-gray-400">{time}</span>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-gray-500">{description}</p>
      {children}
    </div>
  </div>
)

export const PixCycleWindow = () => (
  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
    <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-5 py-3.5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground text-white">
          <Landmark className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold">Ciclo de um Pix recebido</p>
          <p className="mt-0.5 truncate text-[11px] text-gray-400">
            Sua Empresa Ltda. • ag. 0001 / cc. 12345-6
          </p>
        </div>
      </div>
      <StatusPill>Conta ativa</StatusPill>
    </div>

    <div className="p-5 sm:p-7">
      <PixFlowStep
        icon={Zap}
        title="Pagador envia o Pix"
        time="t + 0s"
        description="Chave Pix da conta nominal do seu cliente. O pagador vê o nome da empresa dele, não o da Hodle."
      />

      <PixFlowStep
        icon={CircleDollarSign}
        title="Liquida já tokenizado"
        time="t + 2s"
        description="O Pix não vira saldo em BRL para depois ser convertido — ele nasce tokenizado. BRLA na Polygon ou BRS na Solana, sem conversão cambial no caminho."
      >
        <div className="mt-2.5 flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5">
          <span className="truncate font-mono text-[11px] text-gray-400">
            E2E E18236120…4c1a • BRLA / Polygon
          </span>
          <span className="shrink-0 font-mono text-xs font-medium">8.420,00 BRLA</span>
        </div>
      </PixFlowStep>

      <PixFlowStep
        icon={Webhook}
        title="Entrega confirmada por webhook"
        time="t + 2s"
        description={
          <>
            O evento de entrega chega assinado em{' '}
            <span className="font-mono text-[11px]">X-Hodle-Signature</span>. Seu backend
            confere a assinatura e libera o produto.
          </>
        }
      >
        <WebhookPayload />
      </PixFlowStep>

      <PixFlowStep
        icon={RefreshCcw}
        title="Saldo pronto para uso"
        time="t + 3s"
        isLast
        description="O saldo já está on-chain. Daqui segue para USDT, USDC, BTC ou um Pix de saída — mesma API, sem sair da camada."
      >
        <div className="mt-3 flex gap-2">
          <span className="flex-1 rounded-lg bg-foreground py-2.5 text-center text-[11.5px] font-semibold text-white">
            Ir para USDT
          </span>
          <span className="flex-1 rounded-lg border border-gray-200 py-2.5 text-center text-[11.5px] font-semibold text-gray-500">
            Converter
          </span>
          <span className="flex-1 rounded-lg border border-gray-200 py-2.5 text-center text-[11.5px] font-semibold text-gray-500">
            Extrato
          </span>
        </div>
      </PixFlowStep>
    </div>

    <IllustrativeNote>
      <span>Tempos variam por instituição pagadora</span>
    </IllustrativeNote>
  </div>
)

export const WalletWindow = () => (
  <div className="mx-auto max-w-[540px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
    <div className="flex items-center justify-between gap-4 border-b border-gray-200 px-5 py-3.5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100">
          <Wallet className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold">Wallet multi-rede</p>
          <p className="mt-0.5 text-[11px] text-gray-400">Auto-custodial por padrão</p>
        </div>
      </div>
      <NeutralPill>
        <ShieldCheck className="h-3.5 w-3.5" /> Chaves do usuário
      </NeutralPill>
    </div>

    <div className="p-5 sm:p-6">
      <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gray-400">
        Endereços por rede
      </p>
      <div className="space-y-2">
        {walletAddresses.map((wallet) => (
          <div
            key={wallet.network}
            className="flex items-center gap-3 rounded-xl border border-gray-200 p-3"
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${wallet.tint}`}
            >
              <Image
                src={wallet.icon}
                alt={wallet.network}
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold">{wallet.network}</span>
              <span className="mt-0.5 block truncate font-mono text-[10.5px] text-gray-400">
                {wallet.address}
              </span>
            </span>
            <span className="flex shrink-0 gap-1.5">
              {wallet.assets.map((asset) => (
                <span
                  key={asset}
                  className="rounded-md border border-gray-200 px-1.5 py-0.5 font-mono text-[10px] text-gray-600"
                >
                  {asset}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>

    <IllustrativeNote>
      <span className="inline-flex items-center gap-1.5">
        <KeyRound className="h-3 w-3" /> A Hodle não custodia as chaves
      </span>
    </IllustrativeNote>
  </div>
)
