import AnimatedSection from '../components/AnimatedSection'
import FAQSection from '../components/FAQSection'
import ArticlesSection from '../components/ArticlesSection'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonShadow } from '../components/ui/ButtonShadow'
import {
  Check,
  ArrowRight,
  ArrowUpRight,
  Lock,
  Wallet,
  ChevronRight,
  Home,
  ArrowLeftRight,
  CreditCard,
  Link2,
  Code2,
  QrCode,
  BarChart3,
  Landmark,
  MessageCircle,
} from 'lucide-react'

console.log('[Hodle] Page module loaded')

const heading = 'font-[family-name:var(--font-space-grotesk)]'

export default function HomePage() {
  console.log('[Hodle] Rendering home page', new Date().toISOString())

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden">
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="hero-spotlight absolute inset-0 pointer-events-none" />

        <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-28 lg:pt-32 lg:pb-36">
          <div className="text-center max-w-[900px] mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 mb-8 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              Infraestrutura de pagamentos · Pix ↔ stablecoin
            </span>

            <h1
              className={`${heading} text-[clamp(2.8rem,7vw,5.6rem)] font-light text-foreground leading-[1.02] mb-7 tracking-[-0.035em] text-balance`}
            >
              Receba em Pix, guarde em dólar,{' '}
              <span
                className="italic font-light text-foreground/85"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                pague em stablecoin.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 max-w-[660px] mx-auto mb-9 leading-relaxed text-pretty">
              A infraestrutura que conecta Pix, dólar e stablecoins — via API ou
              plataforma. Feita para empresas que movem dinheiro na América
              Latina.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="https://api.whatsapp.com/send?phone=5511960000445"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonShadow
                  faceClassName="border-foreground bg-foreground text-white hover:bg-foreground"
                  shadowClassName="bg-gray-300"
                >
                  Falar com vendas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </ButtonShadow>
              </Link>
              <Link href="https://app.hodle.com.br" target="_blank">
                <ButtonShadow
                  faceClassName="border-gray-300 bg-white text-gray-600 hover:text-foreground"
                  shadowClassName="bg-gray-200"
                >
                  Criar minha wallet
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </ButtonShadow>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400 mr-1">
                Feita para
              </span>
              {[
                'Fintechs',
                'Marketplaces',
                'PSPs',
                'Plataformas SaaS',
                'Exchanges',
                'Agentes de IA',
              ].map((segment) => (
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

      {/* ═══════════════ STATS STRIP ═══════════════ */}
      <section className="border-t border-gray-200 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-14 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { value: '< 1s', label: 'Liquidação Lightning' },
              { value: '24/7', label: 'PIX disponível' },
              { value: '100%', label: 'Auto-custódia' },
              { value: '8+', label: 'Redes & rails' },
            ].map((stat, i) => (
              <div
                key={i}
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

      {/* ═══════════════ NETWORKS & RAILS MARQUEE ═══════════════ */}
      <section className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6 py-12 lg:py-14">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 mb-8">
            Redes e rails suportados
          </p>
          <div className="marquee-track marquee-mask overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-12 pr-12">
              {[
                { icon: '/pix.svg', name: 'Pix' },
                { icon: '/ln.svg', name: 'Lightning' },
                { icon: '/btc.svg', name: 'Bitcoin' },
                { icon: '/liquid.svg', name: 'Liquid' },
                { icon: '/polygon.svg', name: 'Polygon' },
                { icon: '/usdt.svg', name: 'USDT' },
                { icon: '/usdc.svg', name: 'USDC' },
                { icon: '/depix.png', name: 'DePix' },
              ]
                .concat([
                  { icon: '/pix.svg', name: 'Pix' },
                  { icon: '/ln.svg', name: 'Lightning' },
                  { icon: '/btc.svg', name: 'Bitcoin' },
                  { icon: '/liquid.svg', name: 'Liquid' },
                  { icon: '/polygon.svg', name: 'Polygon' },
                  { icon: '/usdt.svg', name: 'USDT' },
                  { icon: '/usdc.svg', name: 'USDC' },
                  { icon: '/depix.png', name: 'DePix' },
                ])
                .map((rail, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 shrink-0"
                    aria-hidden={i >= 8}
                  >
                    <Image
                      src={rail.icon}
                      alt={rail.name}
                      width={28}
                      height={28}
                      className="w-7 h-7 rounded-full"
                    />
                    <span
                      className={`${heading} text-base font-medium text-gray-500`}
                    >
                      {rail.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 3-COL FEATURES (BlindPay dividers) ═══════════════ */}
      <section className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {[
            {
              icon: ArrowLeftRight,
              title: 'Compra e venda de ativos',
              desc: 'Compre bitcoin e stablecoins em diversas redes com liquidação instantânea via PIX.',
            },
            {
              icon: Landmark,
              title: 'Contas PJ nominais',
              desc: 'Contas empresariais com bancos parceiros regulados pelo Banco Central.',
            },
            {
              icon: Wallet,
              title: 'Wallets auto-custodiais',
              desc: 'Chaves privadas 100% sob seu controle. Sem custódia de terceiros.',
            },
          ].map((feat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} direction="up">
              <div className="px-10 py-16 text-center">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <feat.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3
                  className={`${heading} text-lg font-medium text-foreground mb-3`}
                >
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[280px] mx-auto">
                  {feat.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════ PARTNERS ═══════════════ */}
      <section
        id="parceiros"
        className="border-t border-gray-200 bg-gray-50/50"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-14 lg:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-[560px]">
              <span className="text-xs font-semibold uppercase text-gray-500 mb-4 block">
                Parceiros
              </span>
              <h2
                className={`${heading} text-3xl lg:text-4xl font-light text-foreground leading-tight text-balance mb-4`}
              >
                Infraestrutura conectada com quem move dinheiro na América
                Latina
              </h2>
              <p className="text-gray-500 leading-relaxed text-pretty">
                A Hodle trabalha com parceiros estratégicos para entregar PIX,
                stablecoins e liquidação local com uma experiência simples para
                empresas.
              </p>
            </div>

            <a
              href="https://avenia.io"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-gray-200 bg-white px-8 py-7 shadow-sm transition-colors hover:border-gray-300"
            >
              <span className="text-xs font-medium text-gray-400 mb-5 block">
                Parceiro regulado
              </span>
              <Image
                src="/avenia.png"
                alt="Avenia"
                width={349}
                height={81}
                className="h-auto w-48 sm:w-56"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ PLATFORM SHOWCASE ═══════════════ */}
      <AnimatedSection delay={0.1}>
        <section
          id="plataforma"
          className="border-t border-gray-200 py-20 lg:py-28"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden lg:flex flex-col w-52 border-r border-gray-200 py-4 shrink-0">
                  <div className="px-4 mb-5">
                    <div className="flex items-center">
                      <Image
                        src="/h-logo.svg"
                        alt="Hodle"
                        width={24}
                        height={24}
                        className="-mr-1"
                      />
                      <span
                        className={`${heading} text-sm font-bold tracking-[-0.04em] text-foreground`}
                      >
                        odle
                      </span>
                    </div>
                  </div>
                  <nav className="flex-1 space-y-px px-2">
                    {[
                      { icon: Home, label: 'Home', active: false },
                      { icon: BarChart3, label: 'Transações', active: false },
                      { icon: CreditCard, label: 'Compra', active: false },
                      {
                        icon: QrCode,
                        label: 'Venda e pagamento QR',
                        active: true,
                      },
                      { icon: Wallet, label: 'Wallets', active: false },
                      { icon: Code2, label: 'APIs', active: false },
                      { icon: Link2, label: 'Link de Afiliado', active: false },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs ${
                          item.active
                            ? 'bg-gray-100 text-foreground font-semibold'
                            : 'text-gray-400 font-medium'
                        }`}
                      >
                        <item.icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Main */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">
                        Venda e pagamento de QR code
                      </h4>
                      <p className="text-[11px] text-gray-400">
                        Gerenciar pagamentos realizados
                      </p>
                    </div>
                    <div className="bg-foreground text-white px-3 py-1.5 rounded-lg text-[11px] font-semibold">
                      + Nova compra
                    </div>
                  </div>

                  <div className="px-5 py-2 flex gap-5 border-b border-gray-200">
                    <span className="text-[11px] font-semibold text-foreground border-b-2 border-foreground pb-2">
                      Novo Pagamento
                    </span>
                    <span className="text-[11px] text-gray-400 pb-2">
                      Payouts
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="text-left text-gray-400 border-b border-gray-100">
                          <th className="px-5 py-2.5 font-medium">ID</th>
                          <th className="px-3 py-2.5 font-medium">Data</th>
                          <th className="px-3 py-2.5 font-medium">Pago com</th>
                          <th className="px-3 py-2.5 font-medium">
                            Enviado para
                          </th>
                          <th className="px-3 py-2.5 font-medium">Valor</th>
                          <th className="px-3 py-2.5 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            id: 'VHJ...TA5',
                            date: '14/02/2026, 14:07',
                            from: 'PIX',
                            fromIcon: '/pix.svg',
                            to: 'Polygon',
                            toIcon: '/polygon.svg',
                            val: '+ R$ 50.00',
                            status: 'COMPLETED',
                            pos: true,
                          },
                          {
                            id: 'VHJ...TVk',
                            date: '07/02/2026, 17:50',
                            from: 'Lightning',
                            fromIcon: '/ln.svg',
                            to: 'Polygon',
                            toIcon: '/polygon.svg',
                            val: '- R$ 0.10',
                            status: 'COMPLETED',
                            pos: false,
                          },
                          {
                            id: 'VHJ...TM5',
                            date: '07/02/2026, 17:46',
                            from: 'Lightning',
                            fromIcon: '/ln.svg',
                            to: 'PIX',
                            toIcon: '/pix.svg',
                            val: '- R$ 0.10',
                            status: 'COMPLETED',
                            pos: false,
                          },
                          {
                            id: 'VHJ...TNi',
                            date: '07/02/2026, 17:09',
                            from: 'PIX',
                            fromIcon: '/pix.svg',
                            to: 'Polygon',
                            toIcon: '/polygon.svg',
                            val: '- R$ 0.10',
                            status: 'PENDING',
                            pos: false,
                          },
                          {
                            id: 'VHJ...jli',
                            date: '07/02/2026, 17:08',
                            from: 'Lightning',
                            fromIcon: '/ln.svg',
                            to: 'PIX',
                            toIcon: '/pix.svg',
                            val: '- R$ 1.00',
                            status: 'PENDING',
                            pos: false,
                          },
                          {
                            id: 'VHJ...TZi',
                            date: '06/02/2026, 18:22',
                            from: 'PIX',
                            fromIcon: '/pix.svg',
                            to: 'Polygon',
                            toIcon: '/polygon.svg',
                            val: '- R$ 0.10',
                            status: 'COMPLETED',
                            pos: false,
                          },
                          {
                            id: 'VHJ...GQx',
                            date: '05/02/2026, 12:38',
                            from: 'PIX',
                            fromIcon: '/pix.svg',
                            to: 'Polygon',
                            toIcon: '/polygon.svg',
                            val: '+ R$ 100.00',
                            status: 'COMPLETED',
                            pos: true,
                          },
                        ].map((tx, i) => (
                          <tr
                            key={i}
                            className="border-b border-gray-50 last:border-0"
                          >
                            <td className="px-5 py-3 font-mono text-gray-400">
                              {tx.id}
                            </td>
                            <td className="px-3 py-3 text-gray-400">
                              {tx.date}
                            </td>
                            <td className="px-3 py-3">
                              <span className="flex items-center gap-1.5 text-gray-500">
                                <Image
                                  src={tx.fromIcon}
                                  alt={tx.from}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4 shrink-0 rounded-full"
                                />
                                {tx.from}
                              </span>
                            </td>
                            <td className="px-3 py-3">
                              <span className="flex items-center gap-1.5 text-gray-500">
                                <Image
                                  src={tx.toIcon}
                                  alt={tx.to}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4 shrink-0 rounded-full"
                                />
                                {tx.to}
                              </span>
                            </td>
                            <td
                              className={`px-3 py-3 font-medium ${tx.pos ? 'text-green-600' : 'text-red-400'}`}
                            >
                              {tx.val}
                            </td>
                            <td className="px-3 py-3">
                              <span
                                className={`text-[10px] font-bold tracking-wider ${tx.status === 'COMPLETED' ? 'text-green-600' : 'text-yellow-500'}`}
                              >
                                {tx.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ═══════════════ COMPRA E VENDA ═══════════════ */}
      <section id="compra-venda" className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="left" className="flex-1">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5"><span className="h-1 w-1 rounded-full bg-foreground" />
                Compra e Venda
              </span>
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                Compra e venda de ativos digitais
              </h2>
              <ul className="space-y-4 mb-10">
                {[
                  'Compre bitcoin e stablecoins em diversas redes',
                  'Liquidação via PIX instantâneo',
                  'Integração simples via API ou plataforma',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-base shrink-0 mt-0.5" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="https://app.hodle.com.br" target="_blank">
                <ButtonShadow size="sm">
                  Saiba mais
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right" className="flex-1">
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200">
                  <div>
                    <h4 className="font-semibold text-foreground text-xs">
                      Transações recentes
                    </h4>
                  </div>
                  <div className="bg-foreground text-white px-3 py-1 rounded-lg text-[10px] font-semibold">
                    + Nova compra
                  </div>
                </div>
                <div className="h-[280px] overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                  <div className="animate-scroll-up divide-y divide-gray-100">
                    {[
                      {
                        pair: 'BTC/BRL',
                        type: 'Compra',
                        icon: '/btc.svg',
                        val: 'R$ 500,00',
                        btc: '0.00089 BTC',
                        status: 'Concluído',
                      },
                      {
                        pair: 'USDT/BRL',
                        type: 'Venda',
                        icon: '/usdt.svg',
                        val: 'R$ 1.200,00',
                        btc: '240 USDT',
                        status: 'Concluído',
                      },
                      {
                        pair: 'BTC/BRL',
                        type: 'Compra',
                        icon: '/btc.svg',
                        val: 'R$ 2.000,00',
                        btc: '0.00356 BTC',
                        status: 'Pendente',
                      },
                      {
                        pair: 'USDC/BRL',
                        type: 'Compra',
                        icon: '/usdc.svg',
                        val: 'R$ 500,00',
                        btc: '100 USDC',
                        status: 'Concluído',
                      },
                      {
                        pair: 'USDT/BRL',
                        type: 'Compra',
                        icon: '/usdt.svg',
                        val: 'R$ 750,00',
                        btc: '150 USDT',
                        status: 'Concluído',
                      },
                      {
                        pair: 'BTC/BRL',
                        type: 'Venda',
                        icon: '/btc.svg',
                        val: 'R$ 3.400,00',
                        btc: '0.00601 BTC',
                        status: 'Concluído',
                      },
                    ]
                      .concat([
                        {
                          pair: 'BTC/BRL',
                          type: 'Compra',
                          icon: '/btc.svg',
                          val: 'R$ 500,00',
                          btc: '0.00089 BTC',
                          status: 'Concluído',
                        },
                        {
                          pair: 'USDT/BRL',
                          type: 'Venda',
                          icon: '/usdt.svg',
                          val: 'R$ 1.200,00',
                          btc: '240 USDT',
                          status: 'Concluído',
                        },
                        {
                          pair: 'BTC/BRL',
                          type: 'Compra',
                          icon: '/btc.svg',
                          val: 'R$ 2.000,00',
                          btc: '0.00356 BTC',
                          status: 'Pendente',
                        },
                        {
                          pair: 'USDC/BRL',
                          type: 'Compra',
                          icon: '/usdc.svg',
                          val: 'R$ 500,00',
                          btc: '100 USDC',
                          status: 'Concluído',
                        },
                        {
                          pair: 'USDT/BRL',
                          type: 'Compra',
                          icon: '/usdt.svg',
                          val: 'R$ 750,00',
                          btc: '150 USDT',
                          status: 'Concluído',
                        },
                        {
                          pair: 'BTC/BRL',
                          type: 'Venda',
                          icon: '/btc.svg',
                          val: 'R$ 3.400,00',
                          btc: '0.00601 BTC',
                          status: 'Concluído',
                        },
                      ])
                      .map((tx, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between px-5 py-3.5"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={tx.icon}
                              alt={tx.pair}
                              width={32}
                              height={32}
                              className="w-8 h-8 shrink-0 rounded-lg"
                            />
                            <div>
                              <p className="text-xs font-medium text-foreground">
                                {tx.pair}
                              </p>
                              <p className="text-[10px] text-gray-400">
                                {tx.type}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-medium text-foreground">
                              {tx.val}
                            </p>
                            <p className="text-[10px] text-gray-400">
                              {tx.btc}
                            </p>
                          </div>
                          <span
                            className={`text-[9px] font-bold tracking-wider ${tx.status === 'Concluído' ? 'text-green-600' : 'text-yellow-500'}`}
                          >
                            {tx.status.toUpperCase()}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ API CROSSBORDER ═══════════════ */}
      {/* <section id="api" className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="left" className="flex-1">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5"><span className="h-1 w-1 rounded-full bg-foreground" />
                API Crossborder
              </span>
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                APIs para SaaS e agentes de IA
              </h2>
              <ul className="space-y-4 mb-10">
                {[
                  'API REST completa e documentada',
                  'Pagamentos crossborder com stablecoins',
                  'SDK para automação com agentes de IA',
                  'Webhooks e callbacks em tempo real',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-base shrink-0 mt-0.5" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="#">
                <ButtonShadow size="sm">
                  Documentação
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right" className="flex-1">
              <CodeBlock />
            </AnimatedSection>
          </div>
        </div>
      </section> */}

      {/* ═══════════════ WALLETS ═══════════════ */}
      <section id="wallets" className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="right" className="flex-1">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5"><span className="h-1 w-1 rounded-full bg-foreground" />
                Wallets
              </span>
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                Wallets 100% auto-custodiais
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Suas chaves, suas moedas. Controle total dos seus ativos sem
                depender de terceiros.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Chaves privadas sempre sob seu controle',
                  'Sem custódia de terceiros ou intermediários',
                  'Compatível com os principais padrões do mercado',
                  'Backup e recuperação simplificados',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-base shrink-0 mt-0.5" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="https://app.hodle.com.br" target="_blank">
                <ButtonShadow size="sm">
                  Criar wallet
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left" className="flex-1">
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Wallet className="w-4 h-4 text-foreground" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">
                      Carteira
                    </span>
                    <span className="bg-base text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                      Padrão
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-foreground">
                      $15.26
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 bg-green-50 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded-full border border-green-100">
                      <Lock className="w-2.5 h-2.5" /> SEGURA
                    </span>
                  </div>
                </div>

                {/* Polygon */}
                <div className="px-5 py-4 border-b border-gray-100">
                  <p className="text-[10px] font-bold text-foreground tracking-wider mb-2">
                    POLYGON
                  </p>
                  <div className="mb-3">
                    <p className="text-[10px] text-gray-400 mb-1">
                      Smart Account
                    </p>
                    <div className="inline-flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100">
                      <span className="text-[11px] font-mono text-gray-500">
                        0x1F2CCa...A5F07d
                      </span>
                      <svg
                        className="w-3 h-3 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-[10px] text-gray-400 mb-2">Saldos</p>
                  <div className="space-y-2 mb-3">
                    {[
                      {
                        icon: '/usdt.svg',
                        name: 'USDT',
                        balance: '1.250,45',
                      },
                      {
                        icon: '/usdc.svg',
                        name: 'USDC',
                        balance: '835,12',
                      },
                    ].map((asset) => (
                      <div
                        key={asset.name}
                        className="flex items-center gap-2.5"
                      >
                        <Image
                          src={asset.icon}
                          alt={asset.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 rounded-full"
                        />
                        <span className="text-xs font-medium text-foreground">
                          {asset.balance}{' '}
                          <span className="text-gray-400">{asset.name}</span>
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {[
                      { label: 'Receber', icon: '↙' },
                      { label: 'Enviar', icon: '↗' },
                      { label: 'Sincronizar', icon: '↻' },
                    ].map((action) => (
                      <div
                        key={action.label}
                        className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-[10px] font-medium text-gray-600"
                      >
                        <span>{action.icon}</span>
                        {action.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTA PJ ═══════════════ */}
      <section id="conta-pj" className="border-t border-gray-200 bg-gray-50/50">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="left" className="flex-1">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5"><span className="h-1 w-1 rounded-full bg-foreground" />
                Conta PJ
              </span>
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                Conta PJ nominal com bancos parceiros
              </h2>
              <ul className="space-y-4 mb-10">
                {[
                  'Conta empresarial no nome da sua empresa',
                  'Bancos parceiros regulados pelo Banco Central',
                  'PIX com com integração direta',
                  'Compliance e KYC automatizados',
                  'Produtos financeiros para sua empresa (pix automático, splits de pagamentos)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-base shrink-0 mt-0.5" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="https://api.whatsapp.com/send?phone=5511960000445" target="_blank">
                <ButtonShadow size="sm">
                  Abrir conta PJ
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="right" className="flex-1">
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200 p-7">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Conta PJ
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Banco parceiro regulado
                    </p>
                  </div>
                  <span className="ml-auto bg-green-50 text-green-700 text-[9px] font-bold px-2 py-0.5 rounded-full border border-green-100">
                    ATIVA
                  </span>
                </div>

                <div className="mb-5">
                  <p className="text-[10px] text-gray-400 mb-0.5">
                    Razão Social
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Sua Empresa Ltda.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
                    <p className="text-[10px] text-gray-400 mb-0.5">CNPJ</p>
                    <p className="text-xs font-mono text-gray-600">
                      12.345.678/0001-90
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
                    <p className="text-[10px] text-gray-400 mb-0.5">
                      Ag / Conta
                    </p>
                    <p className="text-xs font-mono text-gray-600">
                      0001 / 12345-6
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3.5 mb-5 border border-gray-100">
                  <p className="text-[10px] text-gray-400 mb-0.5">
                    Saldo disponível
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    R$ 45.230,00
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1 bg-foreground text-white text-center py-2 rounded-lg text-[10px] font-semibold">
                    PIX
                  </div>
                  <div className="flex-1 bg-gray-100 text-gray-500 text-center py-2 rounded-lg text-[10px] font-semibold border border-gray-200">
                    TED
                  </div>
                  <div className="flex-1 bg-gray-100 text-gray-500 text-center py-2 rounded-lg text-[10px] font-semibold border border-gray-200">
                    Boleto
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ QR CODE STABLECOINS ═══════════════ */}
      <section id="pagamentos" className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} direction="right" className="flex-1">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5"><span className="h-1 w-1 rounded-full bg-foreground" />
                Pagamentos
              </span>
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                Pagamento de QR codes com stablecoins
              </h2>
              <ul className="space-y-4 mb-10">
                {[
                  'Pague qualquer QR code PIX usando stablecoins',
                  'Conversão automática stablecoin para BRL',
                  'Suporte a USDT e USDC',
                  'Liquidação instantânea',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-base shrink-0 mt-0.5" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="https://app.hodle.com.br" target="_blank">
                <ButtonShadow size="sm">
                  Começar a pagar
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </ButtonShadow>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left" className="flex-1">
              <div className="relative rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1),0_4px_20px_rgba(0,0,0,0.06)] border border-gray-200/80 p-12 lg:p-16 overflow-hidden bg-[#f7f7f5]">
                {/* Grid background */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />

                <div className="relative flex items-center justify-center">
                  <div className="relative">
                    {/* QR Code with 3D depth */}
                    <Image
                      src="/qr-code.svg"
                      alt="QR Code PIX"
                      width={280}
                      height={280}
                      className="w-52 h-52 lg:w-64 lg:h-64"
                      style={{
                        filter:
                          'drop-shadow(3px 3px 0px #d4d4d4) drop-shadow(5px 5px 0px rgba(0,0,0,0.08))',
                      }}
                    />

                    {/* Corner scan brackets */}
                    <div className="absolute -top-5 -left-5 w-14 h-14 border-t-[5px] border-l-[5px] border-foreground rounded-tl-2xl" />
                    <div className="absolute -top-5 -right-5 w-14 h-14 border-t-[5px] border-r-[5px] border-foreground rounded-tr-2xl" />
                    <div className="absolute -bottom-5 -left-5 w-14 h-14 border-b-[5px] border-l-[5px] border-foreground rounded-bl-2xl" />
                    <div className="absolute -bottom-5 -right-5 w-14 h-14 border-b-[5px] border-r-[5px] border-foreground rounded-br-2xl" />

                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <div className="border-t border-gray-200 bg-gray-50/50 py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-center">
          <FAQSection />
        </div>
      </div>

      {/* ═══════════════ FALE CONOSCO ═══════════════ */}
      <section id="fale-conosco" className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
          <AnimatedSection delay={0.1}>
            <div className="text-center max-w-[680px] mx-auto">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-5">
                <span className="h-1 w-1 rounded-full bg-foreground" />
                Fale Conosco
              </span>
              <h2
                className={`${heading} text-[clamp(2rem,4vw,3.2rem)] font-light text-foreground leading-[1.15] mb-6`}
              >
                Tire suas dúvidas pelo WhatsApp
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10 text-pretty">
                Fale direto com nosso time. Respondemos rápido para ajudar você
                a começar a usar a Hodle ou abrir uma conta PJ.
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=5511960000445"
                target="_blank"
                rel="noreferrer"
              >
                <ButtonShadow
                  faceClassName="border-foreground bg-foreground text-white hover:bg-foreground"
                  shadowClassName="bg-gray-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Conversar no WhatsApp
                </ButtonShadow>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ ARTICLES ═══════════════ */}
      <div className="border-t border-gray-200 py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-center">
          <ArticlesSection />
        </div>
      </div>
    </div>
  )
}
