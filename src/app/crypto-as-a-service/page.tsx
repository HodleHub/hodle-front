import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  LayoutTemplate,
  LockKeyhole,
  MessageCircle,
  Shuffle,
  UserRoundCheck,
  Wallet,
} from 'lucide-react'
import AnimatedSection from '../../components/AnimatedSection'
import CodeBlock from '../../components/CodeBlock'
import { ButtonShadow } from '../../components/ui/ButtonShadow'

const siteUrl = 'https://hodle.com.br/crypto-as-a-service'
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511960000445'
const DOCS_URL = 'https://docs.hodle.com.br'
const heading = 'font-[family-name:var(--font-space-grotesk)]'

const title = 'Crypto as a Service para empresas'
const description =
  'Hodle CaaS: rampas de Pix para stablecoin, wallets auto-custodiais multi-rede, swaps entre ativos e redes e front whitelabel. Uma API para ligar cripto ao seu produto.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Hodle CaaS — Crypto as a Service',
    description:
      'Rampas, wallets, swaps e whitelabel na sua marca e na sua API. A infraestrutura cripto inteira por trás do seu produto.',
    url: siteUrl,
    siteName: 'Hodle',
    images: [
      {
        url: 'https://hodle.com.br/og-image-v2.png',
        width: 1200,
        height: 630,
        alt: 'Hodle CaaS — Crypto as a Service',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
}

const webpageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: siteUrl,
  inLanguage: 'pt-BR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Hodle',
    url: 'https://hodle.com.br',
  },
}

const SEGMENTS = [
  'Fintechs',
  'PSPs',
  'Marketplaces',
  'Exchanges',
  'Neobanks',
  'Plataformas SaaS',
] as const

const STATS = [
  { value: '24/7', label: 'Liquidação em Pix' },
  { value: '100%', label: 'Auto-custódia' },
  { value: '7', label: 'Redes & rails' },
  { value: '1', label: 'API para tudo' },
] as const

const RAILS = [
  { icon: '/pix.svg', name: 'Pix' },
  { icon: '/usdt.svg', name: 'USDT' },
  { icon: '/usdc.svg', name: 'USDC' },
  { icon: '/btc.svg', name: 'Bitcoin' },
  { icon: '/ln.svg', name: 'Lightning' },
  { icon: '/polygon.svg', name: 'Polygon' },
  { icon: '/base.png', name: 'Base' },
  { icon: '/arbitrum.svg', name: 'Arbitrum' },
  { icon: '/solana.svg', name: 'Solana' },
  { icon: '/spark.svg', name: 'Spark' },
] as const

const PILLARS = [
  {
    icon: ArrowLeftRight,
    title: 'Rampas',
    desc: 'On e off-ramp em Pix. O real entra, a stablecoin sai — e o caminho de volta, 24/7.',
    href: '#rampas',
  },
  {
    icon: Wallet,
    title: 'Wallets',
    desc: 'Uma carteira auto-custodial multi-rede para cada usuário seu, com gas patrocinado.',
    href: '#wallets',
  },
  {
    icon: Shuffle,
    title: 'Swaps',
    desc: 'Troca entre ativos e entre redes numa chamada só: BRL, USDT, USDC, BTC e Lightning.',
    href: '#swaps',
  },
  {
    icon: LayoutTemplate,
    title: 'Whitelabel',
    desc: 'Checkout e painel com a sua marca. O seu usuário nunca sai do seu produto.',
    href: '#whitelabel',
  },
] as const

const RAMPAS_ITEMS = [
  'On-ramp: cobrança Pix dinâmica com cotação travada',
  'Off-ramp: payout em Pix a partir de saldo em stablecoin',
  'Entrega em Polygon, Base, Arbitrum, Solana, Tron ou Spark',
  'Webhooks assinados em cada transição de estado',
] as const

const WALLETS_ITEMS = [
  'Chaves sempre sob controle do usuário, nunca da Hodle',
  'Multi-rede: um usuário, endereços em todas as redes',
  'Gas patrocinado nas redes EVM',
  'Recuperação por passkey ou senha, sem seed na tela',
] as const

const SWAPS_ITEMS = [
  'Swap entre ativos: BRL, USDT, USDC, BTC',
  'Swap entre redes, com roteamento automático',
  'Ponte para Lightning: on-chain vira instantâneo',
  'Cotação com validade explícita antes de executar',
] as const

const WHITELABEL_ITEMS = [
  'Logo, cor de marca e domínio próprio',
  'KYC e KYB embutidos no seu fluxo',
  'Modo headless para quem quer desenhar a tela',
  'Sandbox para testar antes de qualquer contrato',
] as const

const API_ITEMS = [
  'REST + SDK TypeScript',
  'Webhooks e callbacks em tempo real',
  'Sandbox com as mesmas rotas da produção',
  'Feita também para agentes de IA integrarem sozinhos',
] as const

const COMPLIANCE_CARDS = [
  {
    icon: LockKeyhole,
    title: 'Auto-custódia por padrão',
    desc: 'A Hodle guarda um envelope cifrado que não consegue abrir. Não somos ponto único de falha do saldo do seu usuário.',
  },
  {
    icon: UserRoundCheck,
    title: 'KYC e KYB embutidos',
    desc: 'Onboarding de pessoa física e jurídica dentro do seu fluxo, com os documentos e as checagens que o trilho exige.',
  },
  {
    icon: LayoutTemplate,
    title: 'Uma camada, não quatro contratos',
    desc: 'Rampa, carteira, swap e front chegam pela mesma integração, com uma conciliação só no fim do mês.',
  },
] as const

const RESPONSIBILITIES = [
  {
    scope: 'Conta PJ e Pix',
    owner: 'Instituição de pagamento autorizada pelo Banco Central do Brasil',
  },
  {
    scope: 'Câmbio e liquidação em real',
    owner: 'Parceiro autorizado a operar câmbio',
  },
  {
    scope: 'Custódia dos ativos',
    owner: 'Ninguém: a chave é derivada no dispositivo do seu usuário',
  },
  {
    scope: 'Integração, API e suporte',
    owner: 'Hodle',
  },
] as const

const Eyebrow = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
    <span className="h-1 w-1 rounded-full bg-foreground" />
    {label}
  </span>
)

const CheckList = ({ items }: { items: readonly string[] }) => (
  <ul className="space-y-4 mb-10">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <Check className="h-4 w-4 text-foreground shrink-0 mt-0.5" />
        <span className="text-gray-500">{item}</span>
      </li>
    ))}
  </ul>
)

const AssetPill = ({ icon, label }: { icon: string; label: string }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white py-1 pl-1.5 pr-3">
    <Image src={icon} alt={label} width={18} height={18} className="h-[18px] w-[18px] rounded-full" />
    <span className="text-xs font-medium text-gray-600">{label}</span>
  </span>
)

export default function CaasPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="hero-spotlight absolute inset-0 pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-28 lg:pt-28 lg:pb-32">
          <div className="text-center max-w-[940px] mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-2.5 pr-3.5 text-xs font-medium text-gray-600 mb-8">
              <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] font-bold tracking-[0.08em] text-white">
                CAAS
              </span>
              Crypto as a Service para empresas brasileiras
            </span>

            <h1
              className={`${heading} text-[clamp(2.6rem,6vw,4.9rem)] font-light text-foreground leading-[1.02] mb-7 tracking-[-0.035em] text-balance`}
            >
              Rampas, wallets e swaps{' '}
              <span
                className="italic font-light text-foreground/85"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                na sua marca, na sua API.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 max-w-[680px] mx-auto mb-9 leading-relaxed text-pretty">
              A Hodle entrega a infraestrutura cripto inteira — on/off-ramp em
              Pix, carteiras auto-custodiais multi-rede, swap entre ativos e
              redes, e um front whitelabel. Você liga no seu produto em dias,
              não em trimestres.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-10">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <ButtonShadow
                  as="span"
                  className="w-full sm:w-auto"
                  faceClassName="w-full border-foreground bg-foreground text-white hover:bg-foreground"
                  shadowClassName="bg-gray-300"
                >
                  Falar com vendas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ButtonShadow>
              </Link>
              <Link href={DOCS_URL} target="_blank" className="w-full sm:w-auto">
                <ButtonShadow
                  as="span"
                  className="w-full sm:w-auto"
                  faceClassName="w-full border-gray-300 bg-white text-gray-600 hover:text-foreground"
                  shadowClassName="bg-gray-200"
                >
                  Ver documentação
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </ButtonShadow>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400 mr-1">
                Feita para
              </span>
              {SEGMENTS.map((segment) => (
                <span
                  key={segment}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section
        aria-labelledby="caas-numeros"
        className="border-t border-gray-200 bg-white"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-14">
          <h2 id="caas-numeros" className="sr-only">
            O CaaS da Hodle em números
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center md:border-r md:last:border-r-0 border-gray-200"
              >
                <div
                  className={`${heading} text-3xl md:text-4xl font-light text-foreground tracking-tight mb-1.5`}
                >
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ RAILS ═══════════════ */}
      <section className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-14">
          <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 mb-8">
            Redes e rails suportados
          </h2>
          <div className="marquee-track marquee-mask overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-12 pr-12">
              {[...RAILS, ...RAILS, ...RAILS, ...RAILS].map((rail, i) => (
                <div
                  key={`${rail.name}-${i}`}
                  className="flex items-center gap-2.5 shrink-0"
                  aria-hidden={i >= RAILS.length}
                >
                  <Image
                    src={rail.icon}
                    alt={rail.name}
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full"
                  />
                  <span className={`${heading} text-base font-medium text-gray-500`}>
                    {rail.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PILARES ═══════════════ */}
      <section aria-labelledby="caas-modulos" className="border-t border-gray-200">
        <h2 id="caas-modulos" className="sr-only">
          Os quatro módulos do Hodle CaaS
        </h2>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {PILLARS.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1} direction="up">
              <Link href={pillar.href} className="block group">
                <div className="px-8 py-14 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-gray-200">
                    <pillar.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className={`${heading} text-lg font-medium text-foreground mb-3`}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[260px] mx-auto">
                    {pillar.desc}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════ RAMPAS ═══════════════ */}
      <section id="rampas" className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="left" className="flex-1">
              <Eyebrow label="Rampas" />
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                Pix entra, stablecoin sai. E o caminho de volta.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Você cria uma cobrança, o seu cliente paga em Pix e a stablecoin
                aparece na carteira dele — na rede que você escolher. O off-ramp
                faz o inverso: queima o saldo e devolve reais na chave Pix do
                beneficiário. Tudo com webhook a cada mudança de status, sem
                você precisar de mesa de operação.
              </p>
              <CheckList items={RAMPAS_ITEMS} />
              <Link href={DOCS_URL} target="_blank">
                <ButtonShadow as="span" size="sm">
                  Ver a API de rampas
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right" className="flex-1 w-full">
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
                    /v1/payments
                  </span>
                  <span className="grow" />
                  <span className="font-mono text-[11px] text-gray-400">
                    webhook: payment.settled
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ WALLETS ═══════════════ */}
      <section id="wallets" className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="right" className="flex-1">
              <Eyebrow label="Wallets" />
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                Uma wallet auto-custodial para cada usuário seu.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                A chave é derivada no dispositivo do usuário e a Hodle guarda
                apenas um envelope cifrado que não consegue abrir — nem um
                comprometimento da nossa infraestrutura move saldo. A mesma
                carteira tem endereço e saldo em várias redes, e nas EVM o gas
                dos transfers e dos payouts é patrocinado pela Hodle: o seu
                usuário nunca precisa comprar token de rede para movimentar um
                dólar.
              </p>
              <CheckList items={WALLETS_ITEMS} />
              <Link href="https://app.hodle.com.br" target="_blank">
                <ButtonShadow as="span" size="sm">
                  Ver as wallets
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left" className="flex-1 w-full">
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
                  <span className="font-mono text-[11px] text-gray-600">/v1/wallets</span>
                  <span className="grow" />
                  <span className="font-mono text-[11px] text-gray-400">gas patrocinado</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ SWAPS ═══════════════ */}
      <section id="swaps" className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="left" className="flex-1">
              <Eyebrow label="Swaps" />
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                Entre ativos e entre redes, numa chamada só.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                USDT em Polygon virando USDC em Solana, BTC on-chain virando
                saldo Lightning, stablecoin virando real. A Hodle escolhe a
                rota, cota, executa e devolve o resultado — o seu produto só
                precisa saber de onde e para onde.
              </p>
              <CheckList items={SWAPS_ITEMS} />
              <Link href={DOCS_URL} target="_blank">
                <ButtonShadow as="span" size="sm">
                  Ver a API de swaps
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right" className="flex-1 w-full">
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
                  <span className="font-mono text-[11px] text-gray-600">/v1/swaps/quote</span>
                  <span className="grow" />
                  <span className="font-mono text-[11px] text-gray-400">então /v1/swaps</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHITELABEL ═══════════════ */}
      <section id="whitelabel" className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="right" className="flex-1">
              <Eyebrow label="Whitelabel" />
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                O seu produto na frente. A Hodle atrás.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Checkout, painel e onboarding com o seu logo, a sua cor e o seu
                domínio — o KYC acontece dentro do seu fluxo, sem redirecionar o
                usuário para uma marca que ele não conhece. Se preferir
                controlar cada pixel, use a mesma API em modo headless e desenhe
                a tela você mesmo.
              </p>
              <CheckList items={WHITELABEL_ITEMS} />
              <Link href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <ButtonShadow as="span" size="sm">
                  Pedir uma demo
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left" className="flex-1 w-full">
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ API ═══════════════ */}
      <section id="api" className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="left" className="flex-1">
              <Eyebrow label="API" />
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                Uma API para rampas, wallets e swaps.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                REST documentada, SDK em TypeScript e webhooks assinados. A
                mesma chave que cria uma cobrança cria a carteira do usuário e
                executa o swap — sem quatro fornecedores, quatro contratos e
                quatro conciliações.
              </p>
              <CheckList items={API_ITEMS} />
              <Link href={DOCS_URL} target="_blank">
                <ButtonShadow as="span" size="sm">
                  Ver documentação
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right" className="flex-1 w-full">
              <CodeBlock />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ SEGURANÇA E CONFORMIDADE ═══════════════ */}
      <section
        id="conformidade"
        aria-labelledby="caas-conformidade"
        className="border-t border-gray-200"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-24">
          <div className="text-center mb-14">
            <Eyebrow label="Segurança e conformidade" />
            <h2
              id="caas-conformidade"
              className={`${heading} text-[clamp(1.9rem,3.4vw,2.8rem)] font-light text-foreground leading-[1.15] max-w-[720px] mx-auto`}
            >
              Infraestrutura que você pode explicar para o seu compliance.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {COMPLIANCE_CARDS.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1} direction="up">
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-7">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                    <card.icon className="h-[18px] w-[18px] text-foreground" />
                  </div>
                  <h3 className={`${heading} text-[17px] font-medium text-foreground mb-2.5`}>
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.1} direction="up">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/60 overflow-hidden">
              <div className="border-b border-gray-200 px-7 py-5">
                <h3 className={`${heading} text-lg font-medium text-foreground mb-1.5`}>
                  Quem responde pelo quê
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[720px]">
                  A perna regulada da operação não é feita pela Hodle. Conta,
                  Pix e câmbio correm por parceiros autorizados pelo Banco
                  Central do Brasil, e o seu contrato mostra qual instituição
                  responde por cada trecho antes de você assinar.
                </p>
              </div>
              <dl className="divide-y divide-gray-200">
                {RESPONSIBILITIES.map((row) => (
                  <div
                    key={row.scope}
                    className="flex flex-col gap-1 px-7 py-4 sm:flex-row sm:items-center sm:gap-6"
                  >
                    <dt className="text-sm font-medium text-foreground sm:w-[240px] sm:shrink-0">
                      {row.scope}
                    </dt>
                    <dd className="text-sm text-gray-500">{row.owner}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-gray-200 px-7 py-4">
                <p className="text-xs text-gray-400 leading-relaxed">
                  A Hodle não é instituição financeira e não custodia os ativos
                  dos seus usuários. Detalhes em{' '}
                  <Link href="/termos" className="text-gray-500 underline underline-offset-2">
                    Termos de uso
                  </Link>{' '}
                  e na{' '}
                  <Link href="/legal" className="text-gray-500 underline underline-offset-2">
                    Central Legal
                  </Link>
                  .
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative overflow-hidden bg-base">
        <div className="dark-grid absolute inset-0 pointer-events-none" />
        <div className="cta-glow absolute inset-0 pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 py-24">
          <div className="text-center max-w-[800px] mx-auto">
            <h2
              className={`${heading} text-[clamp(2.1rem,4.2vw,3.4rem)] font-light text-white leading-[1.1] tracking-[-0.03em] mb-5 text-balance`}
            >
              Vamos ligar a sua rampa?
            </h2>
            <p className="text-lg text-gray-400 max-w-[600px] mx-auto mb-9 leading-relaxed">
              Conte o volume, o ativo e a rede que o seu produto precisa. A
              gente devolve um desenho de integração e um acesso ao sandbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-7">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <ButtonShadow
                  as="span"
                  className="w-full sm:w-auto"
                  faceClassName="w-full border-white bg-white text-foreground"
                  shadowClassName="bg-white/30"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com vendas
                </ButtonShadow>
              </Link>
              <Link href={DOCS_URL} target="_blank" className="w-full sm:w-auto">
                <ButtonShadow
                  as="span"
                  className="w-full sm:w-auto"
                  faceClassName="w-full border-white/25 bg-transparent text-white"
                  shadowClassName="bg-white/10"
                >
                  Ver documentação
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </ButtonShadow>
              </Link>
            </div>

            <p className="font-mono text-xs text-gray-500">
              contato@hodle.com.br · WhatsApp +55 11 96000-0445
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
