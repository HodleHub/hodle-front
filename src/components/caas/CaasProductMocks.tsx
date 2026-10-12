'use client'

import Image from 'next/image'
import {
  ArrowRight,
  Copy,
  LockKeyhole,
  Wallet,
} from 'lucide-react'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

// Illustrative product windows of the /crypto-as-a-service page (ramps,
// wallets, swaps and white-label). They are client islands on purpose: as
// server components their whole markup was serialized into the page's RSC
// payload on top of the HTML. Server rendering still emits the same markup,
// so the text stays in the initial HTML and readable without JavaScript.

const AssetPill = ({ icon, label }: { icon: string; label: string }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white py-1 pl-1.5 pr-3">
    <Image src={icon} alt={label} width={18} height={18} className="h-[18px] w-[18px] rounded-full" />
    <span className="text-xs font-medium text-gray-600">{label}</span>
  </span>
)

export const RampasMock = () => (
  <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
    <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200">
      <div className="flex items-center gap-2.5">
        <span className="text-[13px] font-semibold text-foreground">
          Nova compra
        </span>
        <span className="rounded-full border border-gray-200 px-2 py-0.5 text-[10px] font-medium text-gray-400">
          exemplo
        </span>
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-[10px] font-bold tracking-[0.06em] text-green-700">
        <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
        LIQUIDADO
      </span>
    </div>

    <div className="px-5 py-6 flex flex-col gap-3">
      <div className="rounded-xl border border-gray-200 bg-gray-50 px-[18px] py-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
          Seu cliente paga
        </p>
        <div className="flex items-center justify-between gap-3">
          <span
            className={`${heading} text-[32px] font-light tracking-tight text-foreground`}
          >
            R$ 1.000,00
          </span>
          <AssetPill icon="/pix.svg" label="Pix" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white">
          <ArrowRight className="h-3.5 w-3.5 rotate-90 text-gray-400" />
        </span>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white px-[18px] py-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
          Seu cliente recebe
        </p>
        <div className="flex items-center justify-between gap-3">
          <span
            className={`${heading} text-[32px] font-light tracking-tight text-foreground`}
          >
            178,42 USDT
          </span>
          <AssetPill icon="/polygon.svg" label="Polygon" />
        </div>
      </div>
    </div>

    <div className="border-t border-[#F3F4F6] px-5 py-3.5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Cotação travada</span>
        <span className="font-mono text-xs text-gray-600">
          no momento da cobrança
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Liquidação</span>
        <span className="font-mono text-xs text-green-600">
          Pix confirmado em segundos
        </span>
      </div>
    </div>

    <div className="border-t border-[#F3F4F6] bg-gray-50 px-5 py-3 flex items-center gap-2">
      <span className="font-mono text-[11px] text-gray-400">POST</span>
      <span className="font-mono text-[11px] text-gray-600">
        /api/deposit/asset
      </span>
      <span className="grow" />
      <span className="font-mono text-[11px] text-gray-400">
        webhook: payment.settled
      </span>
    </div>
  </div>
)

export const WalletsMock = () => (
  <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
    <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200">
      <div className="flex items-center gap-2.5">
        <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
          <Wallet className="w-4 h-4 text-foreground" />
        </span>
        <span className="text-[13px] font-semibold text-foreground">
          Carteira do usuário
        </span>
        <span className="rounded-full bg-base px-2 py-0.5 text-[9px] font-bold text-white">
          PADRÃO
        </span>
      </div>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-[9px] font-bold text-green-700">
        <LockKeyhole className="h-2.5 w-2.5" />
        AUTO-CUSTÓDIA
      </span>
    </div>

    <div className="px-5 py-5 flex flex-col gap-4">
      <div className="flex items-center gap-2 flex-wrap">
        {['/polygon.svg', '/arbitrum.svg', '/solana.svg', '/spark.svg', '/ln.svg'].map(
          (icon) => (
            <Image
              key={icon}
              src={icon}
              alt=""
              aria-hidden
              width={22}
              height={22}
              className="h-[22px] w-[22px] rounded-full"
            />
          ),
        )}
        <span className="ml-1 text-[11px] text-gray-400">
          mesma carteira, 7 redes
        </span>
      </div>

      <div>
        <p className="mb-1.5 text-[10px] font-bold tracking-[0.1em] text-foreground">
          POLYGON
        </p>
        <p className="mb-1.5 text-[10px] text-gray-400">Smart Account</p>
        <span className="inline-flex items-center gap-2 rounded-[10px] border border-[#F3F4F6] bg-gray-50 px-3 py-1.5">
          <span className="font-mono text-[11px] text-gray-500">
            0x1F2CCa…A5F07d
          </span>
          <Copy className="h-3 w-3 text-gray-400" />
        </span>
      </div>

      <div>
        <p className="mb-2.5 text-[10px] text-gray-400">Saldos</p>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <Image src="/usdt.svg" alt="USDT" width={20} height={20} className="h-5 w-5 rounded-full" />
            <span className={`${heading} text-sm font-medium text-foreground`}>
              1.250,45 <span className="text-gray-400">USDT</span>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Image src="/usdc.svg" alt="USDC" width={20} height={20} className="h-5 w-5 rounded-full" />
            <span className={`${heading} text-sm font-medium text-foreground`}>
              835,12 <span className="text-gray-400">USDC</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {['Receber', 'Enviar', 'Sincronizar'].map((action) => (
          <span
            key={action}
            className="inline-flex items-center rounded-[10px] border border-gray-200 bg-gray-50 px-3 py-1.5 text-[11px] font-medium text-gray-600"
          >
            {action}
          </span>
        ))}
      </div>
    </div>

    <div className="border-t border-[#F3F4F6] bg-gray-50 px-5 py-3 flex items-center gap-2">
      <span className="font-mono text-[11px] text-gray-400">POST</span>
      <span className="font-mono text-[11px] text-gray-600">/api/wallet/create</span>
      <span className="grow" />
      <span className="font-mono text-[11px] text-gray-400">gas patrocinado</span>
    </div>
  </div>
)

export const SwapsMock = () => (
  <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
    <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200">
      <span className="text-[13px] font-semibold text-foreground">Swap</span>
      <span className="font-mono text-[11px] text-gray-400">
        cotação com validade
      </span>
    </div>

    <div className="px-5 py-5 flex flex-col gap-2.5">
      <div className="rounded-xl border border-gray-200 bg-gray-50 px-[18px] py-4">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            De
          </span>
          <span className="text-[11px] text-gray-400">Saldo 1.250,45</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span
            className={`${heading} text-[30px] font-light tracking-tight text-foreground`}
          >
            500,00
          </span>
          <AssetPill icon="/usdt.svg" label="USDT · Polygon" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white">
          <ArrowRight className="h-3.5 w-3.5 rotate-90 text-gray-400" />
        </span>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white px-[18px] py-4">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            Para
          </span>
          <span className="text-[11px] text-gray-400">estimado</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span
            className={`${heading} text-[30px] font-light tracking-tight text-foreground`}
          >
            499,21
          </span>
          <AssetPill icon="/usdc.svg" label="USDC · Solana" />
        </div>
      </div>
    </div>

    <div className="border-t border-[#F3F4F6] px-5 py-3.5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Rota</span>
        <span className="inline-flex items-center gap-1.5">
          <Image src="/polygon.svg" alt="Polygon" width={16} height={16} className="h-4 w-4 rounded-full" />
          <ArrowRight className="h-3 w-3 text-gray-300" />
          <Image src="/solana.svg" alt="Solana" width={16} height={16} className="h-4 w-4 rounded-full" />
          <span className="font-mono text-[11px] text-gray-600">
            bridge automática
          </span>
        </span>
      </div>
    </div>

    <div className="border-t border-[#F3F4F6] bg-gray-50 px-5 py-3 flex items-center gap-2">
      <span className="font-mono text-[11px] text-gray-400">POST</span>
      <span className="font-mono text-[11px] text-gray-600">/api/quote</span>
      <span className="grow" />
      <span className="font-mono text-[11px] text-gray-400">cotação indicativa</span>
    </div>
  </div>
)

export const WhitelabelMock = () => (
  <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
    <div className="flex items-center gap-2.5 border-b border-gray-200 bg-gray-50 px-4 py-3">
      <span className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
      </span>
      <span className="flex grow items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1">
        <LockKeyhole className="h-2.5 w-2.5 text-green-600" />
        <span className="font-mono text-[11px] text-gray-500">
          pagar.sua-marca.com.br
        </span>
      </span>
    </div>

    <div className="px-6 pb-6 pt-7 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2.5">
          <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-[9px] bg-foreground text-sm font-bold text-white">
            S
          </span>
          <span className={`${heading} text-[15px] font-semibold text-foreground`}>
            SUA MARCA
          </span>
        </span>
        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-600">
          Etapa 2 de 3
        </span>
      </div>

      <div>
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
          Valor a pagar
        </p>
        <p className={`${heading} text-[40px] font-light tracking-[-0.03em] text-foreground`}>
          R$ 1.000,00
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 px-4 py-3.5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Você recebe</span>
          <span className={`${heading} text-sm font-medium text-foreground`}>
            178,42 USDT
          </span>
        </div>
        <div className="h-px bg-[#F3F4F6]" />
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Na rede</span>
          <span className="inline-flex items-center gap-1.5">
            <Image src="/polygon.svg" alt="Polygon" width={16} height={16} className="h-4 w-4 rounded-full" />
            <span className="text-xs font-medium text-foreground">Polygon</span>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3.5">
        <Image src="/pix.svg" alt="Pix" width={24} height={24} className="h-6 w-6" />
        <span className="grow">
          <span className="block text-[13px] font-semibold text-foreground">
            Pagar com Pix
          </span>
          <span className="block text-[11px] text-gray-500">
            Confirmação em segundos, 24/7
          </span>
        </span>
        <span className="h-4 w-4 rounded-full border-[5px] border-foreground bg-white" />
      </div>

      <div className="rounded-xl bg-foreground py-4 text-center text-sm font-semibold text-white">
        Gerar QR Code Pix
      </div>

      <p className="text-center text-[10px] text-gray-400">
        Infraestrutura por Hodle · a sua marca é a única que o
        usuário vê
      </p>
    </div>
  </div>
)
