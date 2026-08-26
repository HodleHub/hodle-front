import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Banknote,
  BadgeCheck,
  Bitcoin,
  Blocks,
  Check,
  ChevronRight,
  CircleDollarSign,
  Code2,
  FileCheck2,
  KeyRound,
  Landmark,
  LockKeyhole,
  MessageCircle,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Wallet,
  Webhook,
  Zap,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { ButtonShadow } from '../components/ui/ButtonShadow'

const siteUrl = 'https://hodle.com.br'
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511960000445'
const heading = 'font-[family-name:var(--font-space-grotesk)]'

export const metadata: Metadata = {
  title: 'Infraestrutura para neobanks',
  description:
    'A infraestrutura da Hodle para neobanks: conta nominal, Pix, wallets, stablecoins de real, swaps, Bitcoin, USD fiat, disputes e KYB em uma única camada.',
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

const networks = [
  { name: 'Bitcoin', detail: 'On-chain', icon: '/btc.svg', tint: 'bg-orange-50' },
  { name: 'Lightning', detail: 'Instantâneo', icon: '/ln.svg', tint: 'bg-yellow-50' },
  { name: 'Liquid', detail: 'Bitcoin sidechain', icon: '/liquid.svg', tint: 'bg-blue-50' },
  { name: 'Polygon', detail: 'EVM', icon: '/polygon.svg', tint: 'bg-violet-50' },
  { name: 'Base', detail: 'EVM', icon: '/base.png', tint: 'bg-blue-50' },
  { name: 'Arbitrum', detail: 'EVM', icon: '/arbitrum.svg', tint: 'bg-sky-50' },
  { name: 'Solana', detail: 'High throughput', icon: '/solana.svg', tint: 'bg-emerald-50' },
  { name: 'Tron', detail: 'Stablecoins', icon: '/tron.svg', tint: 'bg-red-50' },
  { name: 'Spark', detail: 'Bitcoin L2', icon: '/spark.svg', tint: 'bg-amber-50' },
] as const

const modules = [
  {
    number: '01',
    title: 'Conta nominal',
    description:
      'Uma conta empresarial no nome do seu cliente, pronta para receber e movimentar BRL.',
    icon: Landmark,
    id: 'conta-pj',
  },
  {
    number: '02',
    title: 'Pix',
    description:
      'Entrada, saída e pagamentos Pix 24/7, por API, painel ou experiência white-label.',
    icon: Zap,
    id: 'pagamentos',
  },
  {
    number: '03',
    title: 'Wallets',
    description:
      'Carteiras multi-rede auto-custodiais, com chaves sob controle do usuário final.',
    icon: Wallet,
    id: 'wallets',
  },
  {
    number: '04',
    title: 'Stablecoins de real',
    description:
      'BRS e BRLA para representar o real on-chain e conectar caixa local à sua experiência.',
    icon: CircleDollarSign,
    id: 'brs',
  },
  {
    number: '05',
    title: 'Swaps',
    description:
      'Converta entre BRL, stablecoins e BTC dentro do mesmo fluxo.',
    icon: RefreshCcw,
    id: 'swaps',
  },
  {
    number: '06',
    title: 'Bitcoin',
    description:
      'BTC on-chain, Liquid e Lightning como pagamento e reserva de valor.',
    icon: Bitcoin,
    id: 'bitcoin',
  },
  {
    number: '07',
    title: 'USD fiat',
    description:
      'Operações em dólar e treasury para empresas que atuam além do Brasil.',
    icon: Banknote,
    id: 'usd-fiat',
  },
  {
    number: '08',
    title: 'Disputes',
    description:
      'Fluxos para investigar, contestar e resolver movimentações com rastreabilidade.',
    icon: Scale,
    id: 'disputes',
  },
  {
    number: '09',
    title: 'KYB',
    description:
      'Onboarding empresarial e verificações de compliance integrados ao ciclo da conta.',
    icon: FileCheck2,
    id: 'kyb',
  },
] as const

const transactions = [
  {
    label: 'Pix recebido',
    meta: 'conta nominal • agora',
    value: '+ R$ 8.420,00',
    icon: ArrowDownRight,
    tone: 'text-green-600',
  },
  {
    label: 'Swap executado',
    meta: 'BRL → USDC • há 2 min',
    value: '+ 1.512,42 USDC',
    icon: RefreshCcw,
    tone: 'text-orange-500',
  },
  {
    label: 'Payout Lightning',
    meta: 'BTC → invoice • há 8 min',
    value: '− 0,0021 BTC',
    icon: Zap,
    tone: 'text-orange-500',
  },
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
      'Sim. A arquitetura é modular: comece com o fluxo de BRL e adicione wallets, stablecoins, swaps, BTC, USD fiat e operações conforme o produto evolui.',
  },
  {
    question: 'Quais redes estão disponíveis?',
    answer:
      'Bitcoin, Lightning, Liquid, Polygon, Base, Arbitrum, Solana, Tron e Spark. A disponibilidade por ativo e operação pode variar por fluxo.',
  },
  {
    question: 'A integração é por API?',
    answer:
      'Sim. A Hodle oferece API, webhooks e documentação para times de produto e engenharia orquestrarem os fluxos dentro da própria experiência.',
  },
] as const

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#009c3b]">
      <span className="h-1 w-1 rounded-full bg-[#009c3b]" />
      {children}
    </span>
  )
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-[#009c3b]"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  )
}

function ProductWindow() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-4 rounded-3xl border border-gray-200" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_12px_45px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <Image
              src="/h-logo.svg"
              alt="Hodle"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="text-sm font-semibold text-foreground">Control room</span>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Live
          </span>
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
            <span className="mb-1 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-700">
              +12,8%
            </span>
          </div>
          <div className="mt-7 h-24 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 px-3 pt-3">
            <svg
              viewBox="0 0 520 92"
              className="h-full w-full"
              preserveAspectRatio="none"
              aria-label="Gráfico de crescimento operacional"
            >
              <defs>
                <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#f7931a" stopOpacity=".22" />
                  <stop offset="1" stopColor="#f7931a" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 76 C35 71 40 59 74 63 S110 53 143 57 S177 38 212 44 S250 29 280 35 S320 41 348 23 S388 31 418 19 S463 17 520 5 V92 H0Z"
                fill="url(#area)"
              />
              <path
                d="M0 76 C35 71 40 59 74 63 S110 53 143 57 S177 38 212 44 S250 29 280 35 S320 41 348 23 S388 31 418 19 S463 17 520 5"
                fill="none"
                stroke="#f7931a"
                strokeWidth="2.5"
              />
            </svg>
          </div>
          <div className="mt-7 space-y-2.5">
            {transactions.map((transaction) => (
              <div
                key={transaction.label}
                className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
                  <transaction.icon className="h-4 w-4 text-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-foreground">
                    {transaction.label}
                  </p>
                  <p className="mt-0.5 truncate text-[10px] text-gray-400">
                    {transaction.meta}
                  </p>
                </div>
                <span
                  className={`whitespace-nowrap font-mono text-[11px] font-medium ${transaction.tone}`}
                >
                  {transaction.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 px-5 py-3 text-[10px] uppercase tracking-[0.15em] text-gray-400">
          <span>09 rails conectados</span>
          <span>03 webhooks</span>
        </div>
      </div>
    </div>
  )
}

function CodePanel() {
  return (
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
      <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-[10px] text-white/35 sm:px-8">
        <span>POST /v1/payments</span>
        <span className="flex items-center gap-1.5 text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> 201 Created
        </span>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:px-6 lg:pb-28 lg:pt-28">
          <AnimatedSection direction="left">
            <SectionEyebrow>Infraestrutura para neobanks</SectionEyebrow>
            <h1
              className={`${heading} mt-6 max-w-[640px] text-[clamp(2.8rem,6.6vw,5.2rem)] font-light leading-[1.02] tracking-[-0.045em]`}
            >
              O sistema por trás do seu{' '}
              <span className="text-[#009c3b]">neobank.</span>
            </h1>
            <p className="mt-7 max-w-[560px] text-lg leading-relaxed text-gray-500 lg:text-xl">
              Uma camada financeira para lançar contas, movimentar Pix e operar ativos digitais — com a experiência da sua marca e a complexidade da infraestrutura já resolvida.
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
              <ArrowLink href="#stack">Explorar a stack</ArrowLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#009c3b]" /> API-first</span>
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#009c3b]" /> Multi-rail</span>
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#009c3b]" /> Operação 24/7</span>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1}>
            <ProductWindow />
          </AnimatedSection>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-gray-200 bg-gray-50/50">
        <div className="mx-auto grid max-w-[1200px] grid-cols-3 divide-x divide-gray-200 px-6 py-8 sm:py-10">
          {[
            { value: '09', label: 'redes e rails' },
            { value: '07', label: 'ativos e moedas' },
            { value: '01', label: 'camada operacional' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`${heading} text-2xl font-light tracking-tight sm:text-3xl`}>{stat.value}</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="plataforma" className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <AnimatedSection>
            <div className="mx-auto mb-14 max-w-[650px] text-center">
              <SectionEyebrow>O produto inteiro, em blocos</SectionEyebrow>
              <h2 className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.035em]`}>
                Tudo que um neobank precisa para operar dinheiro.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                Do onboarding à liquidação, conecte os serviços que normalmente ficam espalhados entre bancos, processadores, custodians e provedores de cripto.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => {
              const Icon = module.icon
              return (
                <AnimatedSection key={module.title} delay={index * 0.04} direction="up">
                  <a href={`#${module.id}`} className="group block h-full border-t border-gray-200 pt-6 transition-colors hover:border-[#009c3b]">
                    <div className="flex items-start justify-between">
                      <span className={`${heading} text-3xl font-light tracking-tight text-[#009c3b]`}>{module.number}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 transition-colors group-hover:bg-gray-900 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className={`${heading} mt-8 text-lg font-semibold text-foreground`}>{module.title}</h3>
                    <p className="mt-2 max-w-[310px] text-sm leading-relaxed text-gray-500">{module.description}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400 transition-colors group-hover:text-foreground">
                      Ver módulo <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="stack" className="border-b border-gray-200 bg-gray-50/50">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-20">
            <AnimatedSection direction="left">
              <SectionEyebrow>Uma integração para toda a operação</SectionEyebrow>
              <h2 className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}>
                Seu produto na frente. A Hodle no meio. Os rails embaixo.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-gray-500 lg:text-base">
                Você desenha a experiência. A Hodle orquestra contas, saldos, conversões, pagamentos, compliance e liquidação nos trilhos certos.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Sparkles, label: 'Experiência white-label', text: 'Sua marca e sua jornada.' },
                  { icon: Code2, label: 'API + painel operacional', text: 'Uma camada para produto e operações.' },
                  { icon: Blocks, label: 'Rails conectados', text: 'Pix, fiat, stablecoins e Bitcoin.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200"><item.icon className="h-4 w-4" /></div>
                    <div><p className="text-sm font-semibold">{item.label}</p><p className="text-xs text-gray-500">{item.text}</p></div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] sm:p-7">
                <div className="grid gap-3 lg:grid-cols-[0.8fr_1.05fr_0.8fr] lg:items-center">
                  <div className="rounded-xl border border-gray-200 p-4 text-center"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Sua experiência</p><div className="mx-auto mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900"><span className="h-5 w-5 rounded bg-white" /></div><p className="mt-3 text-xs font-semibold">Seu app</p><p className="mt-1 text-[10px] text-gray-400">conta • wallet • pagamentos</p></div>
                  <div className="relative rounded-xl border-2 border-foreground bg-foreground p-5 text-white shadow-[4px_4px_0_0_#009c3b]"><span className="absolute right-4 top-4 text-[#009c3b]"><Code2 className="h-4 w-4" /></span><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45">Camada Hodle</p><p className={`${heading} mt-7 text-2xl font-light leading-tight`}>A mesma lógica para todos os seus fluxos.</p><div className="mt-6 grid grid-cols-2 gap-2">{['Accounts', 'Balances', 'Payouts', 'Swaps', 'Webhooks', 'KYB'].map((item) => <span key={item} className="rounded-lg border border-white/15 px-2.5 py-2 text-center text-[10px] font-medium text-white/75">{item}</span>)}</div></div>
                  <div className="rounded-xl border border-gray-200 p-4 text-center"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Rails</p><div className="mx-auto mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100"><Blocks className="h-5 w-5" /></div><p className="mt-3 text-xs font-semibold">09 conectados</p><p className="mt-1 text-[10px] text-gray-400">rede certa por operação</p></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* NETWORKS */}
      <section id="redes" className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionEyebrow>Redes</SectionEyebrow><h2 className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.04em]`}>Uma conta. Muitos rails.</h2></div><p className="max-w-[390px] text-sm leading-relaxed text-gray-500">Escolha a rede que faz sentido para cada ativo, operação e usuário final.</p></div>
          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">{networks.map((network, index) => <AnimatedSection key={network.name} delay={index * 0.03}><div className="group flex items-center gap-3 border-t border-gray-200 pt-4 transition-colors hover:border-[#009c3b]"><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${network.tint}`}><Image src={network.icon} alt={network.name} width={24} height={24} className="h-5 w-5 object-contain" /></span><span className="min-w-0"><strong className="block truncate text-sm font-semibold">{network.name}</strong><small className="mt-0.5 block truncate text-[10px] text-gray-400">{network.detail}</small></span></div></AnimatedSection>)}</div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-200 pt-6 text-[11px] font-medium text-gray-500"><span>Ativos:</span><span>USDT</span><span>USDC</span><span>BRS</span><span>BRLA</span><span>BRL</span><span>USD</span><span>BTC</span></div>
        </div>
      </section>

      {/* ACCOUNT + PIX */}
      <section id="conta-pj" className="border-b border-gray-200 bg-gray-50/50">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20 lg:py-24">
          <AnimatedSection direction="left"><SectionEyebrow>Conta nominal + Pix</SectionEyebrow><h2 className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}>O dinheiro tem nome. A operação tem contexto.</h2><p className="mt-5 text-base leading-relaxed text-gray-500">Abra uma conta empresarial no nome do seu cliente, receba via Pix e movimente o saldo a partir da mesma camada. Menos reconciliação manual. Mais produto.</p><ul className="mt-7 space-y-3">{['Conta empresarial nominal', 'Pix de entrada e saída 24/7', 'Extrato por ativo e operação', 'Experiência por API ou painel'].map((item) => <li key={item} className="flex items-center gap-3 text-sm text-gray-600"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50"><Check className="h-3 w-3 text-green-600" /></span>{item}</li>)}</ul><div className="mt-8"><ArrowLink href={WHATSAPP_URL}>Falar sobre conta nominal</ArrowLink></div></AnimatedSection>
          <AnimatedSection direction="right"><div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]"><div className="flex items-center justify-between border-b border-gray-200 px-5 py-3.5"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-white"><Landmark className="h-4 w-4" /></div><div><p className="text-sm font-semibold">Conta nominal</p><p className="text-[10px] text-gray-400">Sua Empresa Ltda.</p></div></div><span className="flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-700"><span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Ativa</span></div><div className="grid gap-5 p-5 sm:grid-cols-[1.1fr_0.9fr] sm:p-7"><div><p className="text-[10px] uppercase tracking-[0.16em] text-gray-400">Saldo disponível</p><p className={`${heading} mt-2 text-4xl font-light tracking-[-0.05em]`}>R$ 45.230<span className="text-gray-300">,00</span></p><div className="mt-7 grid grid-cols-2 gap-2"><div className="rounded-xl bg-gray-50 p-3"><p className="text-[10px] text-gray-400">Agência</p><p className="mt-1 font-mono text-xs">0001</p></div><div className="rounded-xl bg-gray-50 p-3"><p className="text-[10px] text-gray-400">Conta</p><p className="mt-1 font-mono text-xs">12345-6</p></div></div><div className="mt-5 flex gap-2"><span className="flex-1 rounded-lg bg-foreground py-2.5 text-center text-[11px] font-semibold text-white">Pix</span><span className="flex-1 rounded-lg border border-gray-200 py-2.5 text-center text-[11px] font-semibold text-gray-500">Extrato</span></div></div><div className="rounded-2xl border border-gray-200 bg-gray-50 p-4"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">Pix hoje</span><Zap className="h-4 w-4 text-[#f7931a]" /></div><p className={`${heading} mt-4 text-2xl font-medium`}>R$ 8.420</p><div className="mt-5 space-y-3">{['Recebidos', 'Enviados', 'Pendentes'].map((item, index) => <div key={item} className="flex items-center justify-between text-[11px]"><span className="text-gray-500">{item}</span><span className="font-mono font-medium">{['12', '08', '02'][index]}</span></div>)}</div><div className="mt-6 h-1.5 overflow-hidden rounded-full bg-gray-200"><div className="h-full w-[78%] rounded-full bg-green-500" /></div></div></div><div className="flex items-center gap-3 border-t border-gray-200 px-5 py-3 text-[10px] text-gray-400 sm:px-7"><LockKeyhole className="h-3.5 w-3.5 text-green-600" /> Fluxo regulado por parceiros licenciados</div></div></AnimatedSection>
        </div>
      </section>

      {/* WALLET */}
      <section id="wallets" className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-24">
          <AnimatedSection direction="left"><div className="mx-auto max-w-[540px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]"><div className="flex items-center justify-between border-b border-gray-200 px-5 py-3.5"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100"><Wallet className="h-4 w-4" /></div><div><p className="text-sm font-semibold">Wallet multi-rede</p><p className="text-[10px] text-gray-400">Auto-custodial por padrão</p></div></div><span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-green-600"><ShieldCheck className="h-3.5 w-3.5" /> Segura</span></div><div className="p-5 sm:p-7"><div className="rounded-2xl bg-foreground p-5 text-white"><div className="flex items-center justify-between"><span className="text-[10px] uppercase tracking-[0.15em] text-white/45">Portfolio</span><span className="font-mono text-[11px] text-green-400">+8,42%</span></div><p className={`${heading} mt-3 text-3xl font-light tracking-[-0.04em]`}>$ 15.260<span className="text-white/30">,34</span></p><div className="mt-5 flex items-center gap-2"><div className="h-1.5 flex-1 rounded-full bg-[#f7931a]" /><div className="h-1.5 w-[32%] rounded-full bg-blue-400" /><div className="h-1.5 w-[18%] rounded-full bg-green-400" /></div><div className="mt-3 flex justify-between text-[10px] text-white/45"><span>USDT 50%</span><span>USDC 32%</span><span>BTC 18%</span></div></div><div className="mt-6 grid gap-2 sm:grid-cols-3">{['Polygon', 'Solana', 'Spark'].map((network, index) => <div key={network} className="rounded-xl border border-gray-200 bg-gray-50 p-3"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold">{network}</span><span className={`h-1.5 w-1.5 rounded-full ${index === 1 ? 'bg-green-500' : 'bg-[#f7931a]'}`} /></div><p className="mt-2 truncate font-mono text-[10px] text-gray-400">0x1F2C...A5F07d</p></div>)}</div></div><div className="flex items-center gap-3 border-t border-gray-200 px-5 py-3 text-[10px] text-gray-400 sm:px-7"><KeyRound className="h-3.5 w-3.5 text-blue-600" /> Chaves sob controle do usuário</div></div></AnimatedSection>
          <AnimatedSection direction="right"><SectionEyebrow>Wallets</SectionEyebrow><h2 className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}>A wallet vira parte do seu produto.</h2><p className="mt-5 text-base leading-relaxed text-gray-500">Ofereça endereços, saldos e movimentações multi-rede sem abrir mão da auto-custódia. A experiência é sua; as chaves continuam com quem usa.</p><div className="mt-8 grid gap-4 sm:grid-cols-2"><div className="border-t border-gray-200 pt-4"><p className="text-sm font-semibold">Chaves sob controle</p><p className="mt-1 text-xs leading-relaxed text-gray-500">Sem custódia de terceiros no fluxo da wallet.</p></div><div className="border-t border-gray-200 pt-4"><p className="text-sm font-semibold">Multi-rede nativa</p><p className="mt-1 text-xs leading-relaxed text-gray-500">Um usuário, muitos rails e ativos.</p></div></div><div className="mt-8"><ArrowLink href="https://app.hodle.com.br">Conhecer as wallets</ArrowLink></div></AnimatedSection>
        </div>
      </section>

      {/* ASSETS */}
      <section className="border-b border-gray-200 bg-gray-50/50">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24"><div className="mx-auto max-w-[650px] text-center"><SectionEyebrow>Movimente valor</SectionEyebrow><h2 className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] tracking-[-0.04em]`}>De real para cripto. De cripto para o mundo.</h2><p className="mt-4 text-sm leading-relaxed text-gray-500">A conversão, o roteamento e a liquidação acontecem dentro da mesma jornada.</p></div><div className="mt-14 grid gap-3 md:grid-cols-2"><div id="brs" className="rounded-2xl border border-gray-200 bg-white p-7 md:col-span-2 lg:p-9"><div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"><div><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white"><Image src="/brs.svg" alt="BRS" width={30} height={30} /></div><span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-green-700">Real on-chain</span></div><h3 className={`${heading} mt-7 text-3xl font-light tracking-[-0.04em]`}>Stablecoins de real, prontas para o produto.</h3><p className="mt-3 max-w-[520px] text-sm leading-relaxed text-gray-500">BRS e BRLA conectam o real a experiências on-chain para guardar, pagar, liquidar e criar novos casos de uso.</p></div><div className="rounded-2xl border border-gray-200 bg-gray-50 p-5"><div className="flex items-center justify-between"><span className="text-[10px] uppercase tracking-[0.16em] text-gray-400">Saldo em BRS</span><span className="text-[10px] font-semibold text-green-600">1:1 BRL</span></div><p className={`${heading} mt-4 text-3xl font-light`}>R$ 25.000<span className="text-gray-300">,00</span></p><div className="mt-5 flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-[11px]"><span className="font-mono text-gray-500">BRS • Solana</span><ArrowUpRight className="h-3.5 w-3.5 text-green-600" /></div></div></div></div><div id="swaps" className="rounded-2xl border border-gray-200 bg-white p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100"><RefreshCcw className="h-5 w-5" /></div><h3 className={`${heading} mt-7 text-2xl font-medium tracking-[-0.035em]`}>Swaps</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">Troque BRL, stablecoins, BTC e USD dentro de uma jornada única.</p><div className="mt-7 flex items-center gap-2 text-[11px] font-mono"><span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">BRL</span><ArrowRight className="h-3.5 w-3.5 text-[#f7931a]" /><span className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">USDC</span></div></div><div id="bitcoin" className="rounded-2xl border border-gray-800 bg-foreground p-7 text-white"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7931a] text-foreground"><Bitcoin className="h-5 w-5" /></div><h3 className={`${heading} mt-7 text-2xl font-medium tracking-[-0.035em]`}>Bitcoin</h3><p className="mt-3 text-sm leading-relaxed text-white/60">On-chain, Liquid e Lightning para pagamentos, liquidação e treasury.</p><div className="mt-7 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60"><span className="rounded-full border border-white/20 px-3 py-1.5">BTC</span><span className="rounded-full border border-white/20 px-3 py-1.5">Lightning</span><span className="rounded-full border border-white/20 px-3 py-1.5">Liquid</span></div></div><div id="usd-fiat" className="rounded-2xl border border-gray-200 bg-white p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100"><Banknote className="h-5 w-5" /></div><h3 className={`${heading} mt-7 text-2xl font-medium tracking-[-0.035em]`}>USD fiat</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">Dólar para operações internacionais, treasury e fluxos cross-border.</p><div className="mt-7 flex items-center justify-between border-t border-gray-200 pt-4 text-[11px]"><span className="text-gray-500">Treasury balance</span><span className="font-mono font-medium">$ 84.230,12</span></div></div></div></div>
      </section>

      {/* OPERATIONS */}
      <section id="operacao" className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionEyebrow>Operação e confiança</SectionEyebrow><h2 className={`${heading} mt-5 max-w-[620px] text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}>Infraestrutura boa também resolve o que dá errado.</h2></div><p className="max-w-[390px] text-sm leading-relaxed text-gray-500">Compliance, atendimento e operações no mesmo desenho — não como remendos depois do lançamento.</p></div><div className="mt-14 grid gap-3 md:grid-cols-3"><div id="kyb" className="border-t border-gray-200 pt-6"><div className="flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100"><BadgeCheck className="h-5 w-5" /></div><span className="font-mono text-[10px] text-gray-400">KYC / KYB</span></div><h3 className={`${heading} mt-8 text-xl font-medium`}>Onboarding empresarial</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">Colete dados, acompanhe status e mantenha o ciclo de compliance conectado à abertura da conta.</p><div className="mt-7 flex items-center gap-2 text-[11px] font-semibold text-green-600"><span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Verificação em andamento</div></div><div id="disputes" className="border-t border-gray-200 pt-6"><div className="flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100"><Scale className="h-5 w-5" /></div><span className="font-mono text-[10px] text-gray-400">OPS / DISPUTES</span></div><h3 className={`${heading} mt-8 text-xl font-medium`}>Disputes rastreáveis</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">Investigue operações, organize evidências e dê ao time uma fila clara para resolver exceções.</p><div className="mt-7 flex items-center gap-2 text-[11px] font-semibold text-gray-600"><span className="h-1.5 w-1.5 rounded-full bg-gray-900" /> 03 casos aguardando análise</div></div><div className="border-t border-gray-200 pt-6"><div className="flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100"><ShieldCheck className="h-5 w-5" /></div><span className="font-mono text-[10px] text-gray-400">CONTROLES</span></div><h3 className={`${heading} mt-8 text-xl font-medium`}>Visibilidade operacional</h3><p className="mt-3 text-sm leading-relaxed text-gray-500">Webhooks, estados e extratos para o seu time saber o que aconteceu — e por quê.</p><div className="mt-7 flex items-center gap-2 text-[11px] font-semibold text-green-600"><Webhook className="h-3.5 w-3.5" /> Eventos assinados</div></div></div></div>
      </section>

      {/* API */}
      <section id="api" className="border-b border-gray-200 bg-gray-50/50">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:py-24"><AnimatedSection direction="left"><SectionEyebrow>Para engenharia</SectionEyebrow><h2 className={`${heading} mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.08] tracking-[-0.04em]`}>O dinheiro também é uma <span className="text-[#009c3b]">API.</span></h2><p className="mt-5 text-base leading-relaxed text-gray-500">REST, webhooks e operações tipadas para transformar contas e saldos em produto. Comece no sandbox, valide o fluxo e escale com a mesma interface.</p><div className="mt-7 space-y-3">{['API REST documentada', 'Webhooks em tempo real', 'Sandbox para testar sem dinheiro real', 'Autenticação por API key'].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-gray-600"><Check className="h-4 w-4 text-green-600" />{item}</div>)}</div><div className="mt-8"><Link href="https://docs.hodle.com.br" target="_blank" rel="noreferrer"><ButtonShadow as="span" size="sm" faceClassName="border-foreground bg-foreground text-white hover:bg-foreground" shadowClassName="bg-[#009c3b]/35"><span>Ver documentação</span><ArrowUpRight className="ml-2 h-4 w-4" /></ButtonShadow></Link></div></AnimatedSection><AnimatedSection direction="right"><CodePanel /></AnimatedSection></div>
      </section>

      {/* FAQ + CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-24"><div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-20"><AnimatedSection direction="left"><SectionEyebrow>Pronto para começar?</SectionEyebrow><h2 className={`${heading} mt-5 max-w-[620px] text-[clamp(2.5rem,5vw,4.4rem)] font-light leading-[1] tracking-[-0.05em]`}>Construa o neobank. <span className="text-[#009c3b]">Não os trilhos.</span></h2><p className="mt-5 max-w-[500px] text-base leading-relaxed text-gray-500">Conte o que você está lançando e desenhamos a combinação de módulos para o seu caso.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"><Link href={WHATSAPP_URL} target="_blank" rel="noreferrer"><ButtonShadow as="span" faceClassName="w-full border-foreground bg-foreground text-white hover:bg-foreground sm:w-auto" shadowClassName="bg-[#009c3b]/35"><MessageCircle className="mr-2 h-4 w-4" />Falar com vendas</ButtonShadow></Link><ArrowLink href="https://docs.hodle.com.br">Ler a documentação</ArrowLink></div></AnimatedSection><div className="border-t border-gray-200">{faqs.map((item, index) => <details key={item.question} className="group border-b border-gray-200 py-5 first:pt-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold"><span><span className="mr-3 font-mono text-[10px] text-gray-400">0{index + 1}</span>{item.question}</span><span className="text-xl font-light text-gray-400 transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 pl-7 text-sm leading-relaxed text-gray-500">{item.answer}</p></details>)}</div></div></div>
      </section>

      <div className="border-t border-gray-200 bg-gray-50/50 px-6 py-5"><div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400"><span>Hodle / Infrastructure for neobanks</span><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Built for movement</span></div></div>
    </main>
  )
}
