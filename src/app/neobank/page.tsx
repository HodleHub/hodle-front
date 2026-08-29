import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Bitcoin,
  Blocks,
  Check,
  CircleDollarSign,
  Code2,
  FileCheck2,
  Info,
  KeyRound,
  Landmark,
  LockKeyhole,
  Mail,
  MessageCircle,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Wallet,
  Webhook,
  Zap,
} from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import SectionNav from '../../components/neobank/SectionNav'
import { ButtonShadow } from '../../components/ui/ButtonShadow'

const siteUrl = 'https://hodle.com.br/neobank'
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511960000445'
const DOCS_URL = 'https://docs.hodle.com.br'
const CONTACT_EMAIL = 'contato@hodle.com.br'
const heading = 'font-[family-name:var(--font-space-grotesk)]'

// The global Header is sticky and 64px tall; SectionNav adds another ~52px.
// Anchor targets must clear both. globals.css sets `[id] { scroll-margin-top:
// 5rem }` for the rest of the site, and an attribute selector outranks a plain
// utility on source order, so this needs the important modifier to win.
const anchorOffset = '!scroll-mt-32'

export const metadata: Metadata = {
  title: 'Infraestrutura para neobanks',
  description:
    'A infraestrutura da Hodle para neobanks: conta nominal, Pix liquidado em real tokenizado, wallets, USDT e USDC, swaps, Bitcoin, USD fiat, disputes e KYB em uma única camada.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Hodle — infraestrutura para neobanks',
    description:
      'Lance produtos financeiros conectados a Pix, fiat e cripto sem construir cada trilho do zero.',
    url: siteUrl,
    siteName: 'Hodle',
    images: [
      {
        url: `${siteUrl}/og-image-v2.png`,
        width: 1200,
        height: 630,
        alt: 'Hodle — infraestrutura para neobanks',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

// Labels deliberately avoid the global Header's own items (Plataforma, API,
// Wallets): the same word in two stacked bars pointing at different targets
// reads as a broken link, not as two levels of navigation.
const navItems = [
  { id: 'plataforma', label: 'Módulos' },
  { id: 'redes', label: 'Redes' },
  { id: 'conta-pj', label: 'Conta nominal' },
  { id: 'wallets', label: 'Carteiras' },
  { id: 'ativos', label: 'Ativos' },
  { id: 'operacao', label: 'Operação' },
  { id: 'api', label: 'Para devs' },
  { id: 'precos', label: 'Preços' },
] as const

const networks = [
  { name: 'Bitcoin', detail: 'On-chain', icon: '/btc.svg', tint: 'bg-orange-50' },
  { name: 'Lightning', detail: 'Instantâneo', icon: '/ln.svg', tint: 'bg-purple-50' },
  { name: 'Liquid', detail: 'Sidechain BTC', icon: '/liquid.svg', tint: 'bg-blue-50' },
  { name: 'Polygon', detail: 'EVM', icon: '/polygon.svg', tint: 'bg-violet-50' },
  { name: 'Base', detail: 'EVM', icon: '/base.png', tint: 'bg-blue-50' },
  { name: 'Arbitrum', detail: 'EVM', icon: '/arbitrum.svg', tint: 'bg-sky-50' },
  { name: 'Solana', detail: 'Alto throughput', icon: '/solana.svg', tint: 'bg-emerald-50' },
  { name: 'Tron', detail: 'Stablecoins', icon: '/tron.svg', tint: 'bg-red-50' },
  { name: 'Spark', detail: 'Bitcoin L2', icon: '/spark.svg', tint: 'bg-amber-50' },
] as const

// Nine modules chunked into three named families: nine flat cards asked the
// reader to hold nine unrelated items in memory at once.
const moduleFamilies = [
  {
    title: 'Contas e dinheiro',
    range: '01–03',
    modules: [
      {
        number: '01',
        title: 'Conta nominal',
        description:
          'Uma conta empresarial no nome do seu cliente, pronta para receber e movimentar BRL.',
        icon: Landmark,
        href: '#conta-pj',
      },
      {
        number: '02',
        title: 'Pix',
        description:
          'Entrada, saída e pagamentos Pix 24/7, por API, painel ou experiência white-label.',
        icon: Zap,
        href: '#conta-pj',
      },
      {
        number: '03',
        title: 'USD fiat',
        description:
          'Operações em dólar e treasury para empresas que atuam além do Brasil.',
        icon: Banknote,
        href: '#ativos',
      },
    ],
  },
  {
    title: 'Ativos digitais',
    range: '04–07',
    modules: [
      {
        number: '04',
        title: 'Wallets',
        description:
          'Carteiras multi-rede auto-custodiais, com chaves sob controle do usuário final.',
        icon: Wallet,
        href: '#wallets',
      },
      {
        number: '05',
        title: 'Real tokenizado',
        description:
          'BRLA e BRS representam o real on-chain. O Pix liquida direto aqui, sem conversão cambial.',
        icon: CircleDollarSign,
        href: '#ativos',
      },
      {
        number: '06',
        title: 'Swaps',
        description:
          'Converta entre real tokenizado, USDT, USDC, BTC e USD dentro do mesmo fluxo.',
        icon: RefreshCcw,
        href: '#ativos',
      },
      {
        number: '07',
        title: 'Bitcoin',
        description:
          'BTC on-chain, Liquid e Lightning como pagamento e reserva de valor.',
        icon: Bitcoin,
        href: '#ativos',
      },
    ],
  },
  {
    title: 'Confiança e operação',
    range: '08–09',
    modules: [
      {
        number: '08',
        title: 'KYB',
        description:
          'Onboarding empresarial e verificações de compliance integrados ao ciclo da conta.',
        icon: FileCheck2,
        href: '#operacao',
      },
      {
        number: '09',
        title: 'Disputes',
        description:
          'Fluxos para investigar, contestar e resolver movimentações com rastreabilidade.',
        icon: Scale,
        href: '#operacao',
      },
    ],
  },
] as const

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

const stablecoinNetworks = [
  { name: 'Polygon', icon: '/polygon.svg' },
  { name: 'Base', icon: '/base.png' },
  { name: 'Arbitrum', icon: '/arbitrum.svg' },
  { name: 'Solana', icon: '/solana.svg' },
  { name: 'Tron', icon: '/tron.svg' },
] as const

const faqs = [
  {
    question: 'A Hodle substitui o core banking?',
    answer:
      'A Hodle funciona como uma camada de infraestrutura financeira e cripto. Você mantém a experiência do seu produto e conecta os módulos necessários por API ou painel.',
  },
  {
    question: 'Posso começar só com Pix e conta nominal?',
    answer:
      'Sim. A arquitetura é modular: comece com o fluxo de BRL e adicione wallets, real tokenizado, swaps, BTC, USD fiat e operações conforme o produto evolui.',
  },
  {
    question: 'O Pix recebido vira BRL ou stablecoin?',
    answer:
      'Ele já nasce tokenizado. Receber um Pix e liquidá-lo em real on-chain não passa por conversão cambial: o valor é entregue como BRLA na Polygon ou como BRS na Solana.',
  },
  {
    question: 'Quais redes estão disponíveis?',
    answer:
      'Bitcoin, Lightning, Liquid, Polygon, Base, Arbitrum, Solana, Tron e Spark. A disponibilidade por ativo e operação pode variar por fluxo.',
  },
  {
    question: 'A integração é por API?',
    answer:
      'Sim. A Hodle oferece API, webhooks assinados e documentação para times de produto e engenharia orquestrarem os fluxos dentro da própria experiência.',
  },
] as const

type SectionEyebrowProps = {
  children: React.ReactNode
  badge?: string
}

// Brand green is reserved for Hodle itself. Status colour never appears as a
// bare fill — it always carries a border and a label (see StatusPill).
const SectionEyebrow = ({ children, badge }: SectionEyebrowProps) => (
  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b]">
    {badge ? (
      <span className="rounded border border-green-200 bg-green-50 px-1.5 py-0.5 font-mono tracking-[0.04em]">
        {badge}
      </span>
    ) : (
      <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
    )}
    {children}
  </span>
)

const StatusPill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-green-700">
    <span className="h-1.5 w-1.5 rounded-full bg-[#009c3b]" />
    {children}
  </span>
)

const NeutralPill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
    {children}
  </span>
)

// Every fabricated figure on the page carries this marker, so no mock reads as
// a live platform metric.
const IllustrativeNote = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex items-center justify-between gap-3 border-t border-gray-200 bg-gray-50 px-5 py-2.5 text-[10.5px] text-gray-400 sm:px-7">
    <span className="inline-flex items-center gap-1.5">
      <Info className="h-3 w-3" aria-hidden="true" /> Dados ilustrativos
    </span>
    {children}
  </div>
)

const ArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-[#009c3b]"
  >
    {children}
    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </Link>
)

const AccountWindow = () => (
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

const CodePanel = () => (
  <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#111] shadow-[0_10px_35px_rgba(0,0,0,0.12)]">
    <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-4 font-mono text-[10px] text-white/35">create-payment.ts</span>
    </div>
    <pre className="overflow-x-auto p-6 font-mono text-[12px] leading-7 sm:p-8 sm:text-[13px]">
      <code>
        <span className="text-purple-400">const</span>{' '}
        <span className="text-blue-300">payment</span>{' '}
        <span className="text-white/35">=</span>{' '}
        <span className="text-purple-400">await</span>{' '}
        <span className="text-blue-300">hodle</span>
        <span className="text-white/55">.payments</span>
        <span className="text-yellow-300">.create</span>
        <span className="text-white/55">({'{'}</span>
        {'\n'}
        {'  '}<span className="text-blue-200">amount</span>
        <span className="text-white/35">:</span>{' '}
        <span className="text-orange-300">1000.00</span>
        <span className="text-white/35">,</span>
        {'\n'}
        {'  '}<span className="text-blue-200">currency</span>
        <span className="text-white/35">:</span>{' '}
        <span className="text-green-300">&apos;BRL&apos;</span>
        <span className="text-white/35">,</span>
        {'\n'}
        {'  '}<span className="text-blue-200">destination</span>
        <span className="text-white/35">:</span>{' '}
        <span className="text-green-300">&apos;USDT&apos;</span>
        <span className="text-white/35">,</span>
        {'\n'}
        {'  '}<span className="text-blue-200">network</span>
        <span className="text-white/35">:</span>{' '}
        <span className="text-green-300">&apos;polygon&apos;</span>
        <span className="text-white/35">,</span>
        {'\n'}
        {'  '}<span className="text-blue-200">reference</span>
        <span className="text-white/35">:</span>{' '}
        <span className="text-green-300">&apos;order_8472&apos;</span>
        {'\n'}
        <span className="text-white/55">{'});'}</span>
      </code>
    </pre>
    <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 font-mono text-[10px] text-white/35 sm:px-8">
      <span>POST /v1/payments</span>
      <span className="flex items-center gap-1.5 text-green-400">
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 201 Created
      </span>
    </div>
  </div>
)

type PixFlowStepProps = {
  icon: React.ElementType
  title: string
  time: string
  description: React.ReactNode
  isLast?: boolean
  children?: React.ReactNode
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

export default function NeobankPage() {
  return (
    <>
      <SectionNav items={navItems} />

      <main className="overflow-hidden bg-white text-foreground">
        {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pb-24 lg:pt-24">
          <AnimatedSection direction="left">
            <SectionEyebrow>Infraestrutura para neobanks</SectionEyebrow>
            <h1
              className={`${heading} mt-6 max-w-[640px] text-[clamp(2.8rem,6.6vw,5.2rem)] font-light leading-[1.02] tracking-[-0.045em]`}
            >
              O sistema por trás do seu <span className="text-[#009c3b]">neobank.</span>
            </h1>
            <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-gray-500 lg:text-xl">
              Uma camada financeira para lançar contas, movimentar Pix e operar ativos digitais — com
              a experiência da sua marca e a complexidade da infraestrutura já resolvida.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <ButtonShadow
                  as="span"
                  faceClassName="w-full border-foreground bg-foreground text-white hover:bg-foreground sm:w-auto"
                  shadowClassName="bg-[#009c3b]/35"
                >
                  Falar com vendas <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonShadow>
              </Link>
              <Link
                href={DOCS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[14px] border-2 border-gray-300 px-9 py-3.5 text-base font-semibold tracking-tight text-foreground transition-colors hover:border-foreground"
              >
                Ver a documentação <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#009c3b]" /> API-first
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#009c3b]" /> Multi-rail
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#009c3b]" /> Operação 24/7
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <AccountWindow />
          </AnimatedSection>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-gray-200 bg-gray-50/50">
        <div className="mx-auto grid max-w-[1200px] grid-cols-3 divide-x divide-gray-200 px-6 py-8 sm:py-10">
          {[
            { value: '9', label: 'redes e rails' },
            { value: '7', label: 'ativos e moedas' },
            { value: '24/7', label: 'Pix e liquidação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`${heading} text-2xl font-light tracking-tight sm:text-3xl`}>
                {stat.value}
              </p>
              <p className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.16em] text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="plataforma" className={`border-b border-gray-200 bg-white ${anchorOffset}`}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <AnimatedSection>
            <div className="mx-auto mb-14 max-w-[660px] text-center">
              <SectionEyebrow>O produto inteiro, em blocos</SectionEyebrow>
              <h2
                className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.035em]`}
              >
                Tudo que um neobank precisa para operar dinheiro.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Nove módulos em três famílias. Comece por uma, conecte as outras quando o produto
                pedir.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {moduleFamilies.map((family, familyIndex) => (
              <AnimatedSection key={family.title} delay={familyIndex * 0.06} direction="up">
                <div className="flex items-baseline justify-between border-t-2 border-foreground pb-4 pt-3.5">
                  <h3 className={`${heading} text-[17px] font-semibold tracking-tight`}>
                    {family.title}
                  </h3>
                  <span className="font-mono text-[11px] text-gray-400">{family.range}</span>
                </div>

                {family.modules.map((module) => (
                  <a
                    key={module.number}
                    href={module.href}
                    className="group flex gap-3.5 border-t border-gray-200 py-4 transition-colors hover:border-[#009c3b]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 transition-colors group-hover:bg-gray-900">
                      <module.icon className="h-[19px] w-[19px] transition-colors group-hover:text-white" />
                    </span>
                    <span className="min-w-0">
                      <span className="flex items-baseline gap-2.5">
                        <span className="font-mono text-[11px] font-medium text-[#009c3b]">
                          {module.number}
                        </span>
                        <span className={`${heading} text-[15.5px] font-semibold`}>
                          {module.title}
                        </span>
                      </span>
                      <span className="mt-1.5 block text-xs leading-relaxed text-gray-500">
                        {module.description}
                      </span>
                    </span>
                  </a>
                ))}

                {family.range === '08–09' && (
                  <div className="mt-3.5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                    <p className="text-xs font-semibold text-foreground">Não precisa dos nove.</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                      A arquitetura é modular. A maioria começa por{' '}
                      <strong className="font-semibold text-foreground">01 + 02</strong> e adiciona o
                      resto conforme o produto evolui.
                    </p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="stack" className={`border-b border-gray-200 bg-gray-50/50 ${anchorOffset}`}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <AnimatedSection>
            <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-10">
              <div className="max-w-[640px]">
                <SectionEyebrow>Uma integração para toda a operação</SectionEyebrow>
                <h2
                  className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}
                >
                  Seu produto na frente. A Hodle no meio. Os rails embaixo.
                </h2>
              </div>
              <p className="max-w-[380px] text-sm leading-relaxed text-gray-500">
                Você desenha a experiência. A Hodle orquestra contas, saldos, conversões, pagamentos,
                compliance e liquidação nos trilhos certos.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-10">
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.3fr_0.85fr] lg:items-stretch">
                <div className="flex flex-col rounded-2xl border border-gray-200 p-6">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Camada 1 • sua experiência
                  </p>
                  <div className="mx-auto mt-7 flex h-13 w-13 items-center justify-center rounded-2xl bg-gray-900 p-3.5">
                    <span className="h-5 w-5 rounded bg-white" />
                  </div>
                  <p className={`${heading} mt-4 text-center text-[15px] font-semibold`}>Seu app</p>
                  <p className="mt-2 text-center text-[11.5px] leading-relaxed text-gray-400">
                    conta • wallet • pagamentos
                  </p>
                  <div className="mt-auto flex flex-wrap justify-center gap-1.5 pt-6">
                    <span className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-[10.5px] text-gray-600">
                      Sua marca
                    </span>
                    <span className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-[10.5px] text-gray-600">
                      Sua jornada
                    </span>
                  </div>
                </div>

                <div className="relative rounded-2xl border-2 border-foreground bg-foreground p-6 text-white shadow-[5px_5px_0_0_#009c3b]">
                  <div className="flex items-start justify-between">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      Camada 2 • Hodle
                    </p>
                    <Code2 className="h-4 w-4 text-[#009c3b]" />
                  </div>
                  <p className={`${heading} mt-6 text-2xl font-light leading-tight tracking-[-0.03em] sm:text-[28px]`}>
                    A mesma lógica para todos os seus fluxos.
                  </p>
                  <div className="mt-7 grid grid-cols-3 gap-2">
                    {['Accounts', 'Balances', 'Payouts', 'Swaps', 'Webhooks', 'KYB'].map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/15 px-1.5 py-2.5 text-center text-[11px] font-medium text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2.5 border-t border-white/10 pt-4 text-[11.5px] text-white/55">
                    <LockKeyhole className="h-3.5 w-3.5" /> Fluxo regulado por parceiros licenciados
                  </div>
                </div>

                <div className="flex flex-col rounded-2xl border border-gray-200 p-6">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    Camada 3 • rails
                  </p>
                  <div className="mx-auto mt-7 flex h-13 w-13 items-center justify-center rounded-2xl bg-gray-100 p-3.5">
                    <Blocks className="h-5 w-5" />
                  </div>
                  <p className={`${heading} mt-4 text-center text-[15px] font-semibold`}>
                    9 redes conectadas
                  </p>
                  <p className="mt-2 text-center text-[11.5px] leading-relaxed text-gray-400">
                    a rede certa para cada operação
                  </p>
                  <div className="mt-auto flex flex-wrap justify-center gap-1.5 pt-6">
                    <span className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-[10.5px] text-gray-600">
                      Pix &amp; fiat
                    </span>
                    <span className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-[10.5px] text-gray-600">
                      On-chain
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* NETWORKS */}
      <section id="redes" className={`border-b border-gray-200 bg-white ${anchorOffset}`}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionEyebrow>Redes</SectionEyebrow>
              <h2
                className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.04em]`}
              >
                Uma conta. Muitos rails.
              </h2>
            </div>
            <p className="max-w-[390px] text-sm leading-relaxed text-gray-500">
              Escolha a rede que faz sentido para cada ativo, operação e usuário final.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {networks.map((network, index) => (
              <AnimatedSection key={network.name} delay={index * 0.03}>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 p-3.5 transition-colors hover:border-[#009c3b]">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${network.tint}`}
                  >
                    <Image
                      src={network.icon}
                      alt={network.name}
                      width={24}
                      height={24}
                      className="h-5 w-5 object-contain"
                    />
                  </span>
                  <span className="min-w-0">
                    <strong className="block truncate text-[13.5px] font-semibold">
                      {network.name}
                    </strong>
                    <small className="mt-0.5 block truncate text-[11px] text-gray-400">
                      {network.detail}
                    </small>
                  </span>
                </div>
              </AnimatedSection>
            ))}

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-3.5 transition-colors hover:border-foreground"
            >
              <span className="min-w-0">
                <strong className="block text-xs font-semibold text-gray-600">
                  Precisa de outra rede?
                </strong>
                <small className="mt-0.5 block text-[11px] text-gray-400">Fale com o time</small>
              </span>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-2.5 gap-y-2 border-t border-gray-200 pt-6">
            <span className="mr-1.5 text-xs font-semibold text-foreground">Ativos disponíveis</span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-foreground bg-foreground px-2.5 py-1.5 font-mono text-[11px] font-medium text-white">
              <Image src="/usdt.svg" alt="" width={13} height={13} className="h-3.5 w-3.5" />
              USDT
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-foreground bg-foreground px-2.5 py-1.5 font-mono text-[11px] font-medium text-white">
              <Image src="/usdc.svg" alt="" width={13} height={13} className="h-3.5 w-3.5" />
              USDC
            </span>
            {['BRS', 'BRLA', 'BRL', 'USD', 'BTC'].map((asset) => (
              <span
                key={asset}
                className="rounded-lg border border-gray-200 px-2.5 py-1.5 font-mono text-[11px] text-gray-600"
              >
                {asset}
              </span>
            ))}
            <span className="ml-1.5 text-[11.5px] text-gray-400">
              A disponibilidade por ativo e operação varia por fluxo.
            </span>
          </div>
        </div>
      </section>

      {/* CONTA NOMINAL + PIX */}
      <section id="conta-pj" className={`border-b border-gray-200 bg-gray-50/50 ${anchorOffset}`}>
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20 lg:py-24">
          <AnimatedSection direction="left">
            <SectionEyebrow badge="01 • 02">Conta nominal + Pix</SectionEyebrow>
            <h2
              className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}
            >
              O dinheiro tem nome. A operação tem contexto.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-500">
              Abra uma conta empresarial no nome do seu cliente, receba via Pix e movimente o saldo a
              partir da mesma camada. Menos reconciliação manual. Mais produto.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                'Conta empresarial nominal',
                'Pix de entrada e saída 24/7',
                'Liquidação direta em real tokenizado',
                'Extrato por ativo e operação',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50">
                    <Check className="h-3 w-3 text-[#009c3b]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ArrowLink href={WHATSAPP_URL}>Falar sobre conta nominal</ArrowLink>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
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
          </AnimatedSection>
        </div>
      </section>

      {/* WALLETS */}
      <section id="wallets" className={`border-b border-gray-200 bg-white ${anchorOffset}`}>
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-24">
          <AnimatedSection direction="left">
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
          </AnimatedSection>

          <AnimatedSection direction="right">
            <SectionEyebrow badge="04">Wallets</SectionEyebrow>
            <h2
              className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}
            >
              A wallet vira parte do seu produto.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-500">
              Ofereça endereços, saldos e movimentações multi-rede sem abrir mão da auto-custódia. A
              experiência é sua; as chaves continuam com quem usa.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold">Chaves sob controle</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  Sem custódia de terceiros no fluxo da wallet.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold">Multi-rede nativa</p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  Um usuário, muitos rails e ativos.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <ArrowLink href="https://app.hodle.com.br">Conhecer as wallets</ArrowLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ATIVOS — USDT e USDC em destaque */}
      <section id="ativos" className={`border-b border-gray-200 bg-gray-50/50 ${anchorOffset}`}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <AnimatedSection>
            <div className="mx-auto mb-12 max-w-[680px] text-center">
              <SectionEyebrow badge="03 • 05–07">Movimente valor</SectionEyebrow>
              <h2
                className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.04em]`}
              >
                De real para dólar digital. Em segundos.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                A conversão, o roteamento e a liquidação acontecem dentro da mesma jornada.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up">
            <div className="rounded-3xl border border-gray-800 bg-foreground p-6 text-white shadow-[6px_6px_0_0_#009c3b] sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-14">
                <div>
                  <div className="flex flex-wrap items-center gap-3.5">
                    <span className="flex items-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                        <Image src="/usdt.svg" alt="USDT" width={30} height={30} className="h-[30px] w-[30px]" />
                      </span>
                      <span className="-ml-3 flex h-11 w-11 items-center justify-center rounded-full bg-white ring-2 ring-foreground">
                        <Image src="/usdc.svg" alt="USDC" width={30} height={30} className="h-[30px] w-[30px]" />
                      </span>
                    </span>
                    <span className="rounded-full border border-white/20 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white/70">
                      O ativo mais pedido
                    </span>
                  </div>

                  <h3
                    className={`${heading} mt-7 text-[clamp(1.85rem,3.4vw,2.4rem)] font-light leading-[1.12] tracking-[-0.04em]`}
                  >
                    USDT e USDC, na rede que o seu cliente usa.
                  </h3>
                  <p className="mt-4 max-w-[540px] text-sm leading-relaxed text-white/60 sm:text-[15px]">
                    O dólar digital é o destino da maior parte do volume que passa pela Hodle. Entra
                    Pix, sai USDT ou USDC no endereço do usuário final — em cinco redes, com a taxa
                    de rede sempre separada na cotação.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {stablecoinNetworks.map((network) => (
                      <span
                        key={network.name}
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.18] px-3.5 py-1.5 text-[11.5px] text-white/75"
                      >
                        <Image
                          src={network.icon}
                          alt=""
                          width={15}
                          height={15}
                          className="h-[15px] w-[15px] object-contain"
                        />
                        {network.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.14] bg-white/[0.04] p-5 sm:p-6">
                  <span className="text-[10.5px] uppercase tracking-[0.16em] text-white/45">
                    Pix → dólar digital
                  </span>
                  <div className="mt-4 flex items-center justify-between rounded-xl border border-white/[0.14] px-4 py-3.5">
                    <span className="font-mono text-xs text-white/55">Você envia</span>
                    <span className="font-mono text-[15px] font-medium">R$ 8.420,00</span>
                  </div>
                  <div className="flex justify-center py-2">
                    <ArrowDown className="h-4 w-4 text-white/40" />
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/30 bg-white/[0.07] px-4 py-3.5">
                    <span className="inline-flex items-center gap-2">
                      <Image src="/usdt.svg" alt="USDT" width={19} height={19} className="h-[19px] w-[19px]" />
                      <span className="font-mono text-xs text-white/75">USDT</span>
                    </span>
                    <span className="font-mono text-[15px] font-medium">1.512,42</span>
                  </div>
                  <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    <span className="flex justify-between text-[11.5px] text-white/50">
                      Taxa de rede
                      <span className="font-mono text-white/70">separada na cotação</span>
                    </span>
                    <span className="flex justify-between text-[11.5px] text-white/50">
                      Liquidação
                      <span className="font-mono text-white/70">on-chain</span>
                    </span>
                  </div>
                  <p className="mt-4 text-[10.5px] text-white/35">Dados ilustrativos</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-3.5 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-gray-200 bg-white p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-gray-200">
                  <Image src="/brs.svg" alt="BRS" width={24} height={24} className="h-6 w-6" />
                </span>
                <span className="font-mono text-[11px] font-medium text-gray-400">05</span>
              </div>
              <h3 className={`${heading} mt-6 text-[21px] font-medium tracking-[-0.03em]`}>
                Real tokenizado
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-500">
                BRLA na Polygon e BRS na Solana. O Pix liquida direto aqui, sem conversão cambial.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 font-mono text-[11px]">
                  BRLA
                </span>
                <span className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 font-mono text-[11px]">
                  BRS
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-gray-100">
                  <RefreshCcw className="h-5 w-5" />
                </span>
                <span className="font-mono text-[11px] font-medium text-gray-400">06</span>
              </div>
              <h3 className={`${heading} mt-6 text-[21px] font-medium tracking-[-0.03em]`}>Swaps</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-500">
                Entre real tokenizado, USDT, USDC, BTC e USD na mesma jornada.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 font-mono text-[11px]">
                  BRLA
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-gray-400" />
                <span className="rounded-lg border border-gray-300 px-2.5 py-1.5 font-mono text-[11px] font-semibold">
                  USDT
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-orange-50">
                  <Bitcoin className="h-5 w-5 text-[#f7931a]" />
                </span>
                <span className="font-mono text-[11px] font-medium text-gray-400">07</span>
              </div>
              <h3 className={`${heading} mt-6 text-[21px] font-medium tracking-[-0.03em]`}>
                Bitcoin
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-500">
                On-chain, Liquid e Lightning para pagamento, liquidação e treasury.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 font-mono text-[11px]">
                  BTC
                </span>
                <span className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 font-mono text-[11px]">
                  Lightning
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-gray-100">
                  <Banknote className="h-5 w-5" />
                </span>
                <span className="font-mono text-[11px] font-medium text-gray-400">03</span>
              </div>
              <h3 className={`${heading} mt-6 text-[21px] font-medium tracking-[-0.03em]`}>
                USD fiat
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-500">
                Dólar em conta para operação internacional, treasury e cross-border.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 font-mono text-[11px]">
                  USD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERAÇÃO */}
      <section id="operacao" className={`border-b border-gray-200 bg-white ${anchorOffset}`}>
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionEyebrow badge="08 • 09">Operação e confiança</SectionEyebrow>
              <h2
                className={`${heading} mt-5 max-w-[620px] text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}
              >
                Infraestrutura boa também resolve o que dá errado.
              </h2>
            </div>
            <p className="max-w-[390px] text-sm leading-relaxed text-gray-500">
              Compliance, atendimento e operações no mesmo desenho — não como remendos depois do
              lançamento.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="border-t-2 border-foreground pt-5">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10.5px] text-gray-400">08 • KYC / KYB</span>
              </div>
              <h3 className={`${heading} mt-6 text-xl font-medium`}>Onboarding empresarial</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-gray-500">
                Colete dados, acompanhe status e mantenha o ciclo de compliance conectado à abertura
                da conta.
              </p>
              <div className="mt-6">
                <StatusPill>Verificação em andamento</StatusPill>
              </div>
            </div>

            <div className="border-t-2 border-foreground pt-5">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                  <Scale className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10.5px] text-gray-400">09 • OPS / DISPUTES</span>
              </div>
              <h3 className={`${heading} mt-6 text-xl font-medium`}>Disputes rastreáveis</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-gray-500">
                Investigue operações, organize evidências e dê ao time uma fila clara para resolver
                exceções.
              </p>
              <div className="mt-6">
                <NeutralPill>
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-600" /> 3 casos aguardando
                  análise
                </NeutralPill>
              </div>
            </div>

            <div className="border-t-2 border-foreground pt-5">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10.5px] text-gray-400">CONTROLES</span>
              </div>
              <h3 className={`${heading} mt-6 text-xl font-medium`}>Visibilidade operacional</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-gray-500">
                Webhooks assinados, estados e extratos para o seu time saber o que aconteceu — e por
                quê.
              </p>
              <div className="mt-6">
                <NeutralPill>
                  <Webhook className="h-3.5 w-3.5" /> Eventos assinados
                </NeutralPill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API */}
      <section id="api" className={`border-b border-gray-200 bg-gray-50/50 ${anchorOffset}`}>
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:py-24">
          <AnimatedSection direction="left">
            <SectionEyebrow>Para engenharia</SectionEyebrow>
            <h2
              className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}
            >
              O dinheiro também é uma <span className="text-[#009c3b]">API.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-500">
              REST, webhooks assinados e operações tipadas para transformar contas e saldos em
              produto. Comece no sandbox, valide o fluxo e escale com a mesma interface.
            </p>
            <div className="mt-7 space-y-3">
              {[
                'API REST documentada',
                'Webhooks assinados em tempo real',
                'Sandbox para testar sem dinheiro real',
                'Autenticação por API key',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="h-4 w-4 shrink-0 text-[#009c3b]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href={DOCS_URL} target="_blank" rel="noreferrer">
                <ButtonShadow
                  as="span"
                  size="sm"
                  faceClassName="border-foreground bg-foreground text-white hover:bg-foreground"
                  shadowClassName="bg-[#009c3b]/35"
                >
                  <span>Ver documentação</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </ButtonShadow>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <CodePanel />
          </AnimatedSection>
        </div>
      </section>

      {/* PREÇOS — aponta para a tabela pública em /precos */}
      <section id="precos" className={`border-b border-gray-200 bg-white ${anchorOffset}`}>
        <div className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
          <AnimatedSection direction="up">
            <div className="flex flex-col justify-between gap-8 rounded-3xl border-2 border-foreground bg-white p-8 shadow-[6px_6px_0_0_#009c3b] lg:flex-row lg:items-center lg:gap-12 lg:p-10">
              <div>
                <SectionEyebrow>Preços</SectionEyebrow>
                <h2
                  className={`${heading} mt-4 max-w-[680px] text-[clamp(1.6rem,3vw,2.15rem)] font-light leading-[1.12] tracking-[-0.04em]`}
                >
                  A tabela é pública. Não precisa falar com vendas para saber quanto custa.
                </h2>
                <p className="mt-3 max-w-[620px] text-sm leading-relaxed text-gray-500">
                  Taxa por operação, tabela por volume e o rail de Pix para real tokenizado — tudo
                  aberto em <span className="font-mono text-[13px] text-foreground">/precos</span>.
                </p>
              </div>
              <Link href="/precos" className="shrink-0">
                <ButtonShadow
                  as="span"
                  faceClassName="w-full border-foreground bg-foreground text-white hover:bg-foreground sm:w-auto"
                  shadowClassName="bg-[#009c3b]/35"
                >
                  Ver preços e taxas <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonShadow>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-20">
            <AnimatedSection direction="left">
              <SectionEyebrow>Pronto para começar?</SectionEyebrow>
              <h2
                className={`${heading} mt-5 max-w-[620px] text-[clamp(2.5rem,5vw,4.4rem)] font-light leading-[1] tracking-[-0.05em]`}
              >
                Construa o neobank. <span className="text-[#009c3b]">Não os trilhos.</span>
              </h2>
              <p className="mt-5 max-w-[500px] text-base leading-relaxed text-gray-500">
                Conte o que você está lançando e desenhamos a combinação de módulos para o seu caso.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <ButtonShadow
                    as="span"
                    faceClassName="w-full border-foreground bg-foreground text-white hover:bg-foreground sm:w-auto"
                    shadowClassName="bg-[#009c3b]/35"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar no WhatsApp
                  </ButtonShadow>
                </Link>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-[14px] border-2 border-gray-300 px-9 py-3.5 text-base font-semibold tracking-tight text-foreground transition-colors hover:border-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
              </div>

              <p className="mt-4 text-[12.5px] text-gray-400">
                Prefere ler antes? A{' '}
                <Link
                  href={DOCS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-foreground hover:text-[#009c3b]"
                >
                  documentação
                </Link>{' '}
                e o sandbox ficam abertos, sem cadastro.
              </p>
            </AnimatedSection>

            <div>
              <p className="mb-3.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                Perguntas frequentes
              </p>
              <div className="border-t border-gray-200">
                {faqs.map((item, index) => (
                  <details key={item.question} className="group border-b border-gray-200 py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                      <span>
                        <span className="mr-3 font-mono text-[11px] font-normal text-gray-400">
                          0{index + 1}
                        </span>
                        {item.question}
                      </span>
                      <span className="text-xl font-light text-gray-400 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 pl-7 text-[13px] leading-relaxed text-gray-500">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 bg-gray-50/50 px-6 py-5">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            Hodle / Infrastructure for neobanks
          </span>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={DOCS_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-600 transition-colors hover:text-foreground"
            >
              Documentação
            </Link>
            <Link href="/precos" className="text-xs text-gray-600 transition-colors hover:text-foreground">
              Preços
            </Link>
            <a href="#plataforma" className="text-xs text-gray-600 transition-colors hover:text-foreground">
              Voltar ao topo ↑
            </a>
          </div>
        </div>
        </div>
      </main>
    </>
  )
}
