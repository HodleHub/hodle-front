import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, X } from 'lucide-react'
import { ButtonShadow } from '../../components/ui/ButtonShadow'
import { pageUpdatedAt } from '../../content/pageUpdatedAt'

const siteUrl = 'https://hodle.com.br'
const pageUrl = `${siteUrl}/marca`
const heading = 'font-[family-name:var(--font-space-grotesk)]'
const mono = 'font-[family-name:var(--font-geist-mono)]'
const serif = { fontFamily: 'Georgia, "Times New Roman", serif' }
const eyebrow = 'text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500'
const wordmark = '/new_logo_hodle.png'
const symbol = '/h-logo.svg'

const description =
  'Brand kit da Hodle: logo, símbolo, cores, tipografia, elementos de interface e tom de voz. Arquivos oficiais para parceiros e imprensa.'

export const metadata: Metadata = {
  title: 'Marca',
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Marca Hodle',
    description,
    url: pageUrl,
    siteName: 'Hodle',
    locale: 'pt_BR',
    type: 'website',
  },
}

const CORE_COLORS = [
  {
    name: 'Tinta',
    hex: '#0A0A0A',
    swatch: 'bg-[#0a0a0a] text-white',
    role: 'Texto, logo, botão primário e fundos escuros',
  },
  {
    name: 'Branco',
    hex: '#FFFFFF',
    swatch: 'bg-white text-[#0a0a0a] border-b border-gray-200',
    role: 'Fundo padrão de todas as páginas',
  },
  {
    name: 'Verde Brasil',
    hex: '#009C3B',
    swatch: 'bg-[#009c3b] text-white',
    role: 'Reais, BRS e neobank. No máximo uma vez por tela',
  },
] as const

const NEUTRALS = [
  { hex: '#FAFAF8', swatch: 'bg-[#fafaf8]', role: 'Papel, seções alternadas' },
  { hex: '#F3F4F6', swatch: 'bg-[#f3f4f6]', role: 'Chips e código' },
  { hex: '#E5E7EB', swatch: 'bg-[#e5e7eb]', role: 'Bordas e divisórias' },
  { hex: '#9CA3AF', swatch: 'bg-[#9ca3af]', role: 'Texto sobre tinta' },
  { hex: '#6B7280', swatch: 'bg-[#6b7280]', role: 'Texto secundário' },
  { hex: '#4B5563', swatch: 'bg-[#4b5563]', role: 'Corpo longo' },
] as const

const COLOR_RATIO = [
  { label: 'Branco 60', flex: 'flex-[60]', swatch: 'bg-white' },
  { label: 'Tinta 32', flex: 'flex-[32]', swatch: 'bg-[#0a0a0a]' },
  { label: 'Neutros 7', flex: 'flex-[7]', swatch: 'bg-[#e5e7eb]' },
  { label: 'Verde 1', flex: 'flex-[1]', swatch: 'bg-[#009c3b]' },
] as const

const TYPE_SCALE = [
  { token: 'display', spec: 'Space Grotesk 300 · 90/92', use: 'Hero, um por página' },
  { token: 'h2', spec: 'Space Grotesk 400 · 48/50', use: 'Título de seção' },
  { token: 'h3', spec: 'Space Grotesk 500 · 22/28', use: 'Cards e subseções' },
  { token: 'body', spec: 'Geist 400 · 17/27', use: 'Parágrafos' },
  { token: 'eyebrow', spec: 'Geist 500 · 11 · caixa alta +16%', use: 'Rótulos acima de títulos' },
] as const

const LOGO_DONTS = [
  {
    label: 'Distorcer a proporção',
    box: 'bg-white border border-gray-200',
    image: 'w-[200px] h-[34px]',
  },
  {
    label: 'Recolorir fora de tinta ou branco',
    box: 'bg-white border border-gray-200',
    image: 'w-full max-w-[200px] h-auto invert-[48%] sepia saturate-[15] hue-rotate-[190deg]',
  },
  {
    label: 'Aplicar sobre fundo com ruído',
    box: 'bg-[repeating-linear-gradient(45deg,#009c3b_0_14px,#9ca3af_14px_28px)]',
    image: 'w-full max-w-[200px] h-auto',
  },
] as const

const VOICE = [
  {
    yes: 'Receba em Pix, guarde em dólar, pague em stablecoin.',
    no: 'Revolucione suas finanças com o poder da blockchain!',
  },
  {
    yes: 'Liquida em Pix. Você recebe em reais.',
    no: 'Nossa solução disruptiva de pagamentos Web3 de próxima geração.',
  },
  {
    yes: 'Sua chave, sua carteira. A gente não guarda seus fundos.',
    no: 'Segurança de nível bancário com tecnologia de ponta.',
  },
] as const

const DOWNLOADS = [
  { name: 'Assinatura', formats: 'PNG · tinta', href: wordmark },
  { name: 'Símbolo', formats: 'SVG · tinta', href: symbol },
  {
    name: 'Space Grotesk',
    formats: 'Google Fonts',
    href: 'https://fonts.google.com/specimen/Space+Grotesk',
  },
  { name: 'Geist e Geist Mono', formats: 'Google Fonts', href: 'https://fonts.google.com/specimen/Geist' },
] as const

const NAV = [
  { label: 'Logo', href: '#logo' },
  { label: 'Cores', href: '#cores' },
  { label: 'Tipografia', href: '#tipografia' },
  { label: 'Elementos', href: '#elementos' },
  { label: 'Voz', href: '#voz' },
  { label: 'Downloads', href: '#downloads' },
] as const

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Marca', item: pageUrl },
  ],
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Marca Hodle',
  description,
  url: pageUrl,
  inLanguage: 'pt-BR',
  dateModified: pageUpdatedAt.marca,
  isPartOf: { '@type': 'WebSite', name: 'Hodle', url: siteUrl },
}

type SectionHeaderProps = { index: string; title: string; children: React.ReactNode }

const SectionHeader = ({ index, title, children }: SectionHeaderProps) => (
  <div className="grid gap-6 md:grid-cols-2 md:items-end mb-12">
    <div className="flex flex-col gap-3">
      <span className={`${mono} text-[13px] text-gray-500`}>{index}</span>
      <h2 className={`${heading} text-5xl font-normal leading-[1.05] tracking-[-0.03em]`}>
        {title}
      </h2>
    </div>
    <p className="text-[17px] leading-relaxed text-gray-600 max-w-[520px]">{children}</p>
  </div>
)

type CaptionProps = { children: React.ReactNode }

const Caption = ({ children }: CaptionProps) => (
  <figcaption className="text-[13px] text-gray-500">{children}</figcaption>
)

const LogoSection = () => (
  <section id="logo" className="border-t border-gray-200">
    <div className="max-w-[1200px] mx-auto px-6 py-24">
      <SectionHeader index="01" title="Logo">
        O símbolo é um H em perspectiva dentro de um quadrado arredondado: um bloco sólido,
        empilhável, como a infraestrutura que ele representa. Use a assinatura completa sempre que
        houver espaço; o símbolo sozinho vale para avatar, favicon e header.
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <figure className="flex flex-col gap-3">
          <div className="h-[280px] rounded-[20px] border border-gray-200 bg-white flex items-center justify-center p-12">
            <Image src={wordmark} alt="Assinatura Hodle em tinta sobre branco" width={868} height={257} className="w-full max-w-[360px] h-auto" />
          </div>
          <Caption>Assinatura primária · tinta sobre branco</Caption>
        </figure>
        <figure className="flex flex-col gap-3">
          <div className="h-[280px] rounded-[20px] bg-[#0a0a0a] flex items-center justify-center p-12">
            <Image src={wordmark} alt="Assinatura Hodle em branco sobre tinta" width={868} height={257} className="w-full max-w-[360px] h-auto invert" />
          </div>
          <Caption>Assinatura invertida · branco sobre tinta</Caption>
        </figure>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <figure className="flex flex-col gap-3">
          <div className="h-[220px] rounded-[20px] border border-gray-200 bg-[#fafaf8] flex items-center justify-center">
            <Image src={symbol} alt="Símbolo Hodle" width={96} height={96} className="w-24 h-24" />
          </div>
          <Caption>Símbolo · avatar, app, favicon</Caption>
        </figure>
        <figure className="flex flex-col gap-3">
          <div className="h-[220px] rounded-[20px] bg-[#0a0a0a] flex items-center justify-center">
            <Image src={symbol} alt="Símbolo Hodle invertido" width={96} height={96} className="w-24 h-24 invert" />
          </div>
          <Caption>Símbolo invertido</Caption>
        </figure>
        <figure className="flex flex-col gap-3">
          <div className="h-[220px] rounded-[20px] border border-gray-200 bg-white flex items-center justify-center">
            <div className="relative p-6 outline outline-1 outline-dashed outline-gray-400">
              <Image src={symbol} alt="Área de proteção do símbolo" width={96} height={96} className="block w-24 h-24" />
              <span className={`${mono} absolute top-1 left-1/2 -translate-x-1/2 text-[11px] text-gray-500`}>¼</span>
              <span className={`${mono} absolute left-1.5 top-1/2 -translate-y-1/2 text-[11px] text-gray-500`}>¼</span>
            </div>
          </div>
          <Caption>Área de proteção · ¼ da altura do símbolo em cada lado</Caption>
        </figure>
        <figure className="flex flex-col gap-3">
          <div className="h-[220px] rounded-[20px] border border-gray-200 bg-white flex items-end justify-center gap-7 pb-14">
            {[64, 32, 20].map((size) => (
              <div key={size} className="flex flex-col items-center gap-2.5">
                <Image src={symbol} alt={`Símbolo a ${size} px`} width={size} height={size} style={{ width: size, height: size }} />
                <span className={`${mono} text-[11px] text-gray-500`}>{size}</span>
              </div>
            ))}
          </div>
          <Caption>Escala · 32 px é o tamanho do header do site</Caption>
        </figure>
      </div>

      <h3 className={`${heading} text-[22px] font-medium tracking-[-0.02em] mt-16 mb-5`}>Não faça</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LOGO_DONTS.map((item) => (
          <figure key={item.label} className="flex flex-col gap-3">
            <div className={`h-[180px] rounded-[20px] flex items-center justify-center p-8 overflow-hidden ${item.box}`}>
              <Image src={wordmark} alt={item.label} width={868} height={257} className={item.image} />
            </div>
            <figcaption className="flex items-center gap-2 text-[13px] text-gray-500">
              <X className="w-3.5 h-3.5 text-red-700" aria-hidden="true" />
              {item.label}
            </figcaption>
          </figure>
        ))}
        <figure className="flex flex-col gap-3">
          <div className="h-[180px] rounded-[20px] border border-gray-200 bg-white flex items-center justify-center p-6">
            <Image src="/hodlelogo.png" alt="Logo antigo da Hodle com engrenagem" width={738} height={246} className="w-full max-w-[220px] h-auto opacity-70" />
          </div>
          <figcaption className="flex items-center gap-2 text-[13px] text-gray-500">
            <X className="w-3.5 h-3.5 text-red-700" aria-hidden="true" />
            Usar o logo antigo (engrenagem)
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
)

const ColorSection = () => (
  <section id="cores" className="border-t border-gray-200 bg-[#fafaf8]">
    <div className="max-w-[1200px] mx-auto px-6 py-24">
      <SectionHeader index="02" title="Cores">
        Monocromática por padrão. Tinta e branco fazem quase todo o trabalho; o verde aparece só em
        superfícies de real e BRS.
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-3 mb-12">
        {CORE_COLORS.map((color) => (
          <div key={color.hex} className="rounded-[20px] overflow-hidden border border-gray-200 bg-white flex flex-col">
            <div className={`h-[168px] p-5 flex items-end ${heading} text-[28px] tracking-[-0.02em] ${color.swatch}`}>
              {color.name}
            </div>
            <div className="px-5 pt-4 pb-5 flex flex-col gap-1.5">
              <span className={`${mono} text-[13px]`}>{color.hex}</span>
              <span className="text-[13px] text-gray-500">{color.role}</span>
            </div>
          </div>
        ))}
      </div>

      <p className={`${eyebrow} mb-4`}>Neutros de interface</p>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-12">
        {NEUTRALS.map((neutral) => (
          <div key={neutral.hex} className="flex flex-col gap-2">
            <div className={`h-16 rounded-xl border border-gray-200 ${neutral.swatch}`} />
            <span className={`${mono} text-xs`}>{neutral.hex}</span>
            <span className="text-xs text-gray-500">{neutral.role}</span>
          </div>
        ))}
      </div>

      <p className={`${eyebrow} mb-4`}>Proporção de uso</p>
      <div className="flex h-12 rounded-xl overflow-hidden border border-gray-200 mb-4">
        {COLOR_RATIO.map((part) => (
          <div key={part.label} className={`${part.flex} ${part.swatch}`} />
        ))}
      </div>
      <div className="flex flex-wrap gap-6 text-[13px] text-gray-500">
        {COLOR_RATIO.map((part) => (
          <span key={part.label}>{part.label}</span>
        ))}
      </div>
    </div>
  </section>
)

type SpecimenRowProps = { name: string; spec: string; children: React.ReactNode }

const SpecimenRow = ({ name, spec, children }: SpecimenRowProps) => (
  <div className="grid gap-6 md:grid-cols-3 py-10 border-b border-gray-200 items-baseline">
    <div className="flex flex-col gap-1.5">
      <span className="font-semibold text-[15px]">{name}</span>
      <span className="text-[13px] text-gray-500">{spec}</span>
    </div>
    <div className="md:col-span-2">{children}</div>
  </div>
)

const TypographySection = () => (
  <section id="tipografia" className="border-t border-gray-200">
    <div className="max-w-[1200px] mx-auto px-6 py-24">
      <SectionHeader index="03" title="Tipografia">
        Três famílias e um acento. Space Grotesk leve para títulos, Geist para leitura, Geist Mono
        para números, endereços e código. O itálico serifado entra uma vez por título, na parte que
        vira promessa.
      </SectionHeader>

      <div className="border-t border-gray-200 mb-12">
        <SpecimenRow name="Space Grotesk" spec="Display · Light 300 · tracking −3,5%">
          <p className={`${heading} font-light text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.035em]`}>
            Receba em Pix, guarde em dólar,{' '}
            <span className="italic text-foreground/85" style={serif}>
              pague em stablecoin.
            </span>
          </p>
        </SpecimenRow>
        <SpecimenRow name="Georgia Italic" spec="Acento · só dentro de títulos · 85% de opacidade">
          <p className="italic text-[40px] leading-tight text-foreground/85" style={serif}>
            auto-custódia, sem atrito.
          </p>
        </SpecimenRow>
        <SpecimenRow name="Geist" spec="Texto · Regular 400 / Semibold 600">
          <p className="text-xl leading-relaxed text-gray-600 max-w-[640px]">
            A infraestrutura que conecta Pix, dólar e stablecoins, via API ou plataforma. Feita para
            empresas que movem dinheiro na América Latina.
          </p>
        </SpecimenRow>
        <SpecimenRow name="Geist Mono" spec="Valores, hashes, código">
          <p className={`${mono} text-lg leading-[1.7]`}>
            R$ 1.250,00 → 230,41 USDT
            <br />
            0x6a54…e1c9 · Base
          </p>
        </SpecimenRow>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {TYPE_SCALE.map((step) => (
          <div key={step.token} className="rounded-2xl border border-gray-200 p-5 flex flex-col gap-2.5">
            <span className={`${mono} text-xs text-gray-500`}>{step.token}</span>
            <span className="text-sm font-semibold">{step.spec}</span>
            <span className="text-[13px] text-gray-500">{step.use}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const ElementsSection = () => (
  <section id="elementos" className="border-t border-gray-200 bg-[#fafaf8]">
    <div className="max-w-[1200px] mx-auto px-6 py-24">
      <SectionHeader index="04" title="Elementos">
        Peças que se repetem em todo hodle.com.br. Bordas de 2 px, cantos de 14 px e uma sombra
        sólida que se desloca 1 px no hover: o bloco do símbolo virando botão.
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-2 mb-12">
        <div className="rounded-[20px] border border-gray-200 bg-white p-8 flex flex-col gap-7">
          <span className={eyebrow}>ButtonShadow</span>
          <div className="flex flex-wrap gap-4">
            <ButtonShadow faceClassName="border-foreground bg-foreground text-white hover:bg-foreground" shadowClassName="bg-gray-300">
              Falar com vendas
            </ButtonShadow>
            <ButtonShadow faceClassName="border-gray-300 bg-white text-gray-600 hover:text-foreground" shadowClassName="bg-gray-200">
              Criar minha wallet
            </ButtonShadow>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonShadow size="sm">Ver documentação</ButtonShadow>
          </div>
          <span className={`${mono} text-xs text-gray-500`}>
            radius 14 · border 2 · shadow offset 1 px · cubic-bezier(.34,1.56,.64,1)
          </span>
        </div>

        <div className="rounded-[20px] border border-gray-200 bg-white p-8 flex flex-col gap-7">
          <span className={eyebrow}>Eyebrows e chips</span>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`${eyebrow} mr-1`}>Feita para</span>
            {['Fintechs', 'Marketplaces', 'PSPs', 'Plataformas SaaS'].map((chip) => (
              <span key={chip} className="text-[13px] px-3 py-1.5 rounded-full border border-gray-200 bg-white">
                {chip}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#009c3b]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#007a2e]">
              Conta em reais · BRS
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`${mono} text-xs px-2.5 py-1 rounded-lg bg-gray-100`}>POST /api/pix/charge</span>
            <span className={`${mono} text-xs px-2.5 py-1 rounded-lg bg-gray-100`}>webhook</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[20px] border border-gray-200 bg-white min-h-[260px] p-8 flex flex-col justify-between">
          <div className="hero-grid absolute inset-0 pointer-events-none" />
          <span className={`relative ${eyebrow}`}>Textura · grade clara</span>
          <span className={`relative ${mono} text-xs text-gray-500`}>56 px · linhas 4,5% · máscara radial</span>
        </div>

        <div className="relative overflow-hidden rounded-[20px] bg-[#0a0a0a] min-h-[260px] p-8 flex flex-col justify-between">
          <div className="dark-grid absolute inset-0 pointer-events-none" />
          <span className="relative text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
            Textura · grade escura
          </span>
          <span className={`relative ${mono} text-xs text-gray-400`}>64 px · linhas 6% · para CTAs e rodapé</span>
        </div>
      </div>

      <p className={`${eyebrow} mb-4`}>Aplicação · card de compartilhamento 1200 × 630</p>
      <div className="relative overflow-hidden rounded-[20px] bg-[#0a0a0a] aspect-[1200/630] max-w-[840px] p-[6%] flex flex-col justify-between">
        <div className="dark-grid absolute inset-0 pointer-events-none" />
        <Image src={wordmark} alt="Assinatura Hodle" width={868} height={257} className="relative w-[22%] h-auto invert" />
        <p className={`relative ${heading} font-light text-[clamp(1.6rem,4vw,3.4rem)] leading-[1.04] tracking-[-0.035em] text-white max-w-[80%]`}>
          Pague qualquer Pix{' '}
          <span className="italic text-white/80" style={serif}>
            com USDT.
          </span>
        </p>
        <span className={`relative ${mono} text-[clamp(11px,1.4vw,15px)] text-gray-400`}>hodle.com.br</span>
      </div>
    </div>
  </section>
)

const VoiceSection = () => (
  <section id="voz" className="border-t border-gray-200">
    <div className="max-w-[1200px] mx-auto px-6 py-24">
      <SectionHeader index="05" title="Voz">
        Direta, técnica quando precisa, nunca hype. Falamos do que o dinheiro faz (entra, guarda,
        paga), não de revolução. Português do Brasil, com acento.
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-3">
        {VOICE.map((pair) => (
          <div key={pair.yes} className="rounded-[20px] border border-gray-200 overflow-hidden flex flex-col">
            <div className="p-6 flex flex-col gap-2.5 border-b border-gray-200">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#007a2e]">Assim</span>
              <p className={`${heading} text-[22px] leading-snug tracking-[-0.015em]`}>{pair.yes}</p>
            </div>
            <div className="p-6 flex flex-col gap-2.5 bg-[#fafaf8] flex-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-red-700">Não assim</span>
              <p className="text-base leading-normal text-gray-500 line-through decoration-red-700/40">{pair.no}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const DownloadsSection = () => (
  <section id="downloads" className="relative overflow-hidden bg-[#0a0a0a] text-white">
    <div className="dark-grid absolute inset-0 pointer-events-none" />
    <div className="relative max-w-[1200px] mx-auto px-6 py-28">
      <div className="flex flex-col gap-4 max-w-[720px] mb-12">
        <span className={`${mono} text-[13px] text-gray-400`}>06</span>
        <h2 className={`${heading} font-light text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] tracking-[-0.035em]`}>
          Leve a marca{' '}
          <span className="italic text-white/80" style={serif}>
            com você.
          </span>
        </h2>
        <p className="text-[17px] leading-relaxed text-gray-400">
          Arquivos oficiais. Para usos fora destas diretrizes, fale com a gente antes de publicar.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {DOWNLOADS.map((file) => (
          <a
            key={file.name}
            href={file.href}
            download={file.href.startsWith('/') ? '' : undefined}
            target={file.href.startsWith('/') ? undefined : '_blank'}
            rel={file.href.startsWith('/') ? undefined : 'noreferrer'}
            className="flex items-center justify-between gap-4 px-6 py-5 rounded-2xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.07] transition-colors"
          >
            <span className="flex flex-col gap-1">
              <span className="font-semibold text-[15px]">{file.name}</span>
              <span className={`${mono} text-xs text-gray-400`}>{file.formats}</span>
            </span>
            <Download className="w-[18px] h-[18px]" aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
        <div className="flex items-center gap-3">
          <Image src={symbol} alt="" width={28} height={28} className="w-7 h-7 invert" />
          <span className="text-sm text-gray-400">
            Imprensa e parcerias:{' '}
            <a href="mailto:contato@hodle.com.br" className="text-white hover:text-gray-300">
              contato@hodle.com.br
            </a>
          </span>
        </div>
      </div>
    </div>
  </section>
)

export default function MarcaPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="hero-spotlight absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-28 lg:pt-32 lg:pb-32 text-center">
          <span className={eyebrow}>Brand kit · v1 · 2026</span>
          <h1 className={`${heading} text-[clamp(2.8rem,7vw,5.6rem)] font-light leading-[1.02] tracking-[-0.035em] text-balance max-w-[900px] mx-auto mt-7 mb-7`}>
            A marca Hodle,{' '}
            <span className="italic font-light text-foreground/85" style={serif}>
              pronta para usar.
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-500 max-w-[660px] mx-auto mb-9 leading-relaxed text-pretty">
            Logo, cores, tipografia e tom de voz da infraestrutura que conecta Pix, dólar e
            stablecoins. Para parceiros, imprensa e quem constrói com a gente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mb-10">
            <Link href="#downloads" className="w-full sm:w-auto">
              <ButtonShadow as="span" className="w-full sm:w-auto" faceClassName="w-full border-foreground bg-foreground text-white hover:bg-foreground" shadowClassName="bg-gray-300">
                Baixar arquivos
                <Download className="w-4 h-4 ml-2" />
              </ButtonShadow>
            </Link>
            <Link href="#logo" className="w-full sm:w-auto">
              <ButtonShadow as="span" className="w-full sm:w-auto" faceClassName="w-full border-gray-300 bg-white text-gray-600 hover:text-foreground" shadowClassName="bg-gray-200">
                Ver diretrizes
                <ArrowRight className="w-4 h-4 ml-2" />
              </ButtonShadow>
            </Link>
          </div>
          <nav aria-label="Seções do brand kit" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-500 hover:text-foreground transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <LogoSection />
      <ColorSection />
      <TypographySection />
      <ElementsSection />
      <VoiceSection />
      <DownloadsSection />
    </div>
  )
}
