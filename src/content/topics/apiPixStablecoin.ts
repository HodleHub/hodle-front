import { TopicPage } from '../../types/topic'

export const apiPixStablecoin: TopicPage = {
  slug: 'api-pix-stablecoin',
  title: 'API Pix stablecoin para desenvolvedores',
  h1: 'A API que paga Pix com stablecoin',
  description:
    'API REST para pagar Pix com saldo em USDT ou USDC, emitir invoice Lightning que liquida em Pix e mover stablecoin entre redes. Gas patrocinado.',
  keywords: [
    'api pix stablecoin',
    'api pix cripto',
    'api de pagamento stablecoin',
    'api usdt brasil',
    'webhook pix cripto',
    'api pix para desenvolvedores',
    'on-ramp off-ramp api',
  ],
  primaryKeyword: 'api pix stablecoin',
  updatedAt: '2026-07-28',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'DESENVOLVEDORES',
  subhead:
    'Uma API REST para os trilhos brasileiros: pagar Pix com saldo em stablecoin, receber por invoice Lightning, mover USDT entre redes e reconciliar por webhook assinado. O gas em redes EVM é nosso.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/ln.svg', label: 'Lightning' },
    { src: '/polygon.svg', label: 'Polygon' },
  ],
  ctaSubhead:
    'Comece pela documentação ou fale com o time da Hodle.',
  ctaPrimary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br',
  },
  ctaSecondary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  sections: [
    {
      id: 'o-que-a-api-faz',
      kind: 'PROSE',
      heading: 'O que a API Pix stablecoin resolve',
      body: 'A API da Hodle conecta saldo em stablecoin ao sistema de pagamentos brasileiro. Você dispara um Pix financiado por USDT ou USDC, emite uma invoice Lightning que liquida em reais quando for paga, converte reais em stablecoin e move ativos entre redes — tudo por HTTP, com autenticação por API key com escopo por plataforma. São dois fluxos ponta a ponta que cobrem a maioria das integrações: stablecoin para Pix, e Lightning para Pix. Cada um está documentado com as telas, as chamadas e os modos de falha.',
      bullets: [
        'Pagar Pix com saldo em USDT (Polygon, Tron) ou USDC (Base).',
        'Emitir invoice Lightning BOLT11 que dispara um payout Pix ao ser paga.',
        'Converter reais em Lightning, USDT, USDC ou USDCE e entregar em um endereço.',
        'Ler saldos por ativo e o extrato paginado de operações.',
        'Receber webhook assinado com HMAC em depósito, payout e mudança de KYC.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'integracao',
      kind: 'STEPS',
      heading: 'A integração mais curta é um POST e um GET',
      body: 'O fluxo de pagamento não exige orquestração no seu lado. Você autentica, dispara, e escuta.',
      bullets: [
        'Autenticação. API key nos headers, com escopo por plataforma. Guia em docs.hodle.com.br/docs/authentication.',
        'Chave da carteira. Um GET em /docs/wallet-keys devolve o protectedSymmetricKey usado para assinar payouts e transfers. Cache uma vez por usuário.',
        'Disparo. POST /api/wallet/payout para pagar um Pix com stablecoin, ou POST /api/lightning/invoice para emitir uma invoice que liquida em Pix.',
        'Confirmação. GET no recurso devolve o estado atual, e o webhook assinado com HMAC avisa cada transição — é o caminho recomendado para reconciliação.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'gas-patrocinado',
      kind: 'PROSE',
      heading: 'Gas patrocinado nas redes EVM',
      body: 'Em Polygon e Base, a Hodle paga o gas dos transfers e dos payouts. Isso remove da sua integração o problema operacional de manter saldo em moeda nativa de cada rede, monitorar preço de gas e tratar transação que falhou por falta de fundo para taxa. Na prática, o seu usuário só precisa ter a stablecoin. A rede é detalhe de implementação.',
      bullets: [
        'Sem saldo nativo de Polygon ou Base para operar.',
        'Sem monitoramento de preço de gas no seu backend.',
        'Sem transação travada por falta de fundo para taxa.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'exemplo',
      kind: 'CODE',
      heading: 'Exemplo de chamada',
      body: 'A mesma API que roda o painel da Hodle é a que você consome. Autenticação por header, corpo em JSON, resposta com o estado da operação.',
      bullets: [
        'POST /api/wallet/payout — paga Pix com saldo em stablecoin.',
        'POST /api/lightning/invoice — invoice BOLT11 que liquida em Pix em segundos ao ser paga.',
        'GET /docs/wallet-get — endereços por rede e saldos do usuário da API key.',
        'POST /docs/wallet-transfer — USDT para qualquer endereço em Polygon, Base ou Tron.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'redes-e-ativos',
      kind: 'ASSETS',
      heading: 'Redes e ativos disponíveis pela API',
      body: 'USDT em Polygon e Tron, USDC em Base, e as duas também em Arbitrum e Spark. Bitcoin on-chain e por Lightning. Reais entram e saem por Pix.',
      bullets: [],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/btc.svg', label: 'Bitcoin' },
        { src: '/ln.svg', label: 'Lightning' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/base.png', label: 'Base' },
        { src: '/arbitrum.svg', label: 'Arbitrum' },
        { src: '/spark.svg', label: 'Spark' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre a API de Pix com stablecoin.',
  faq: [
    {
      question: 'Como integrar uma API de Pix com stablecoin?',
      answer:
        'Autentique com uma API key nos headers, busque o protectedSymmetricKey do usuário uma vez, e dispare um POST em /api/wallet/payout com a chave Pix e o valor. Um GET no recurso devolve o estado e o webhook assinado avisa cada transição.',
    },
    {
      question: 'Como funciona o webhook de confirmação?',
      answer:
        'A Hodle envia um payload assinado com HMAC quando há depósito, payout ou mudança de estado de KYC. Você verifica a assinatura e usa o evento para reconciliar, em vez de ficar consultando o estado em loop.',
    },
    {
      question: 'Quem paga a taxa de rede nas transações?',
      answer:
        'Nas redes EVM, a Hodle. O gas de Polygon e Base é patrocinado, tanto em transfer quanto em payout, então o seu usuário só precisa ter a stablecoin.',
    },
    {
      question: 'Quais redes a API suporta?',
      answer:
        'USDT em Polygon e Tron, USDC em Base, ambas também em Arbitrum e Spark. Bitcoin on-chain e por Lightning Network. Reais por Pix.',
    },
    {
      question: 'Preciso de licença para usar a API?',
      answer:
        'A Hodle é uma empresa de software e API: não é banco, não é instituição financeira e não custodia fundos ou ativos de clientes. O fluxo de fundos regulados e os serviços financeiros são conduzidos por parceiros licenciados e/ou regulados. Os requisitos aplicáveis ao seu caso dependem do seu modelo de negócio — trate isso com o seu jurídico e fale com o nosso time comercial.',
    },
  ],
  related: [
    { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
    { label: 'Carteiras auto-custodiais', href: '/wallet-auto-custodial' },
    { label: 'Documentação da API', href: 'https://docs.hodle.com.br' },
    { label: 'Perguntas frequentes', href: '/faq' },
  ],
  ogImage: '/og-image-v2.png',
}
