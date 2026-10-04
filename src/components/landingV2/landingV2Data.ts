export type IconItem = {
  name: string
  icon: string
}

export const ICONS = {
  pix: '/landing-v2/pix-teal.svg',
  usdt: '/usdt.svg',
  usdc: '/usdc.svg',
  btc: '/btc.svg',
  lightning: '/ln.svg',
  spark: '/spark.svg',
  base: '/base.png',
  tron: '/tron.svg',
  brla: '/brla.png',
  brs: '/brs.svg',
  polygon: '/polygon.svg',
  solana: '/solana.svg',
  arbitrum: '/arbitrum.svg',
  hodleMark: '/landing-v2/hodle-mark.png',
  hodleWordmark: '/landing-v2/hodle-wordmark.png',
} as const

export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=5511960000445'
export const APP_URL = 'https://app.hodle.com.br'
export const DOCS_URL = 'https://docs.hodle.com.br'
export const FLOW_BUILDER_URL = 'https://docs.hodle.com.br/docs/flow-builder'

export const RAILS: IconItem[] = [
  { name: 'Pix', icon: ICONS.pix },
  { name: 'Polygon', icon: ICONS.polygon },
  { name: 'Base', icon: ICONS.base },
  { name: 'Solana', icon: ICONS.solana },
  { name: 'Tron', icon: ICONS.tron },
  { name: 'Arbitrum', icon: ICONS.arbitrum },
  { name: 'Lightning', icon: ICONS.lightning },
  { name: 'Spark', icon: ICONS.spark },
]

export const PILE_TILES: IconItem[] = [
  { name: 'USDT', icon: ICONS.usdt },
  { name: 'USDC', icon: ICONS.usdc },
  { name: 'Bitcoin', icon: ICONS.btc },
  { name: 'Pix', icon: ICONS.pix },
  { name: 'BRLA', icon: ICONS.brla },
  { name: 'BRS', icon: ICONS.brs },
  { name: 'Lightning', icon: ICONS.lightning },
  { name: 'Spark', icon: ICONS.spark },
  { name: 'Polygon', icon: ICONS.polygon },
  { name: 'Base', icon: ICONS.base },
  { name: 'Solana', icon: ICONS.solana },
  { name: 'Tron', icon: ICONS.tron },
  { name: 'Arbitrum', icon: ICONS.arbitrum },
]

export type SupportedAsset = {
  name: string
  icon: string
  networks: string[]
}

export const SUPPORTED_ASSETS: SupportedAsset[] = [
  { name: 'USDT', icon: ICONS.usdt, networks: ['Polygon', 'Base', 'Solana', 'Tron', 'Arbitrum', 'Spark'] },
  { name: 'USDC', icon: ICONS.usdc, networks: ['Base', 'Polygon', 'Solana', 'Arbitrum', 'Spark'] },
  { name: 'Bitcoin', icon: ICONS.btc, networks: ['Lightning', 'On-chain'] },
  { name: 'Real digital', icon: ICONS.pix, networks: ['BRLA · Polygon', 'BRS · Solana'] },
]

export type FaqItem = {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O que é a Hodle?',
    answer:
      'Uma plataforma brasileira de infraestrutura cripto para empresas: compra e venda de ativos, APIs para pagamentos crossborder, wallets auto-custodiais, contas PJ com bancos parceiros e pagamento de QR codes com stablecoins.',
  },
  {
    question: 'Como as operações da wallet são autorizadas?',
    answer:
      'Na integração por PIN, o titular estabelece o PIN na plataforma. A criação da wallet exige esse PIN; transferências e payouts usam o PIN e a chave protegida da wallet selecionada para autorizar a assinatura no servidor. O PIN não é armazenado em texto aberto. Há também fluxos específicos de assinatura pelo usuário, descritos na documentação.',
  },
  {
    question: 'Como funciona a API?',
    answer:
      'API REST documentada, autenticação por API key no header, webhooks assinados com HMAC e especificação OpenAPI 3.1 pública.',
  },
  {
    question: 'Como pagar um Pix usando saldo em stablecoin?',
    answer:
      'A API de payout usa o saldo em stablecoin para iniciar um Pix nos ativos e redes habilitados para a conta. Acompanhe a operação até a confirmação; o aceite da solicitação não confirma a liquidação. A Hodle patrocina o gas nesse fluxo, mas as taxas de serviço continuam aplicáveis.',
  },
  {
    question: 'Como funciona a conta PJ?',
    answer:
      'Uma conta no nome da sua empresa, aberta junto a bancos parceiros regulados pelo Banco Central, com Pix e extrato com saldo por ativo.',
  },
]

export type FlowSource = {
  label: string
  asset: string
  network: string
  icon: string
  networkIcon: string
}

export const FLOW_SOURCES: FlowSource[] = [
  { label: 'USDT · Polygon', asset: 'USDT', network: 'polygon', icon: ICONS.usdt, networkIcon: ICONS.polygon },
  { label: 'USDT · Tron', asset: 'USDT', network: 'tron', icon: ICONS.usdt, networkIcon: ICONS.tron },
  { label: 'USDT · Solana', asset: 'USDT', network: 'solana', icon: ICONS.usdt, networkIcon: ICONS.solana },
  { label: 'USDC · Base', asset: 'USDC', network: 'base', icon: ICONS.usdc, networkIcon: ICONS.base },
  { label: 'BTC · Lightning', asset: 'BTC', network: 'lightning', icon: ICONS.btc, networkIcon: ICONS.lightning },
]

export type FlowStep = {
  title: string
  description: string
}

export type FlowRecipe = {
  description: string
  docsUrl: string
  steps: FlowStep[]
}

export const buildFlowRecipe = (source: FlowSource): FlowRecipe => {
  if (source.network === 'lightning') {
    return {
      description: 'Pague com Bitcoin pela Lightning e envie reais via Pix.',
      docsUrl: `${DOCS_URL}/docs/flow-lightning-pix`,
      steps: [
        {
          title: 'Informe o Pix',
          description: 'Escolha o destinatário e o valor em reais. Confira os dados e as taxas do pagamento.',
        },
        {
          title: 'Pague com Lightning',
          description: 'Use sua carteira Lightning para pagar o QR code ou o código copia e cola.',
        },
        {
          title: 'Acompanhe a confirmação',
          description: 'Veja o andamento do pagamento até a confirmação do Pix.',
        },
      ],
    }
  }

  return {
    description: `Use seu saldo em ${source.asset} para pagar um Pix em reais.`,
    docsUrl: `${DOCS_URL}/docs/wallet-payout`,
    steps: [
      {
        title: 'Escolha seu saldo',
        description: `Selecione o saldo em ${source.label} que deseja usar no pagamento.`,
      },
      {
        title: 'Confira o pagamento',
        description: 'Informe a chave Pix e o valor em reais. Confira o destinatário, a cotação e as taxas.',
      },
      {
        title: 'Autorize e acompanhe',
        description: 'Confirme o pagamento e acompanhe o andamento até a confirmação do Pix.',
      },
    ],
  }
}
