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
    question: 'As wallets são realmente auto-custodiais?',
    answer:
      'Sim. A chave é derivada no seu dispositivo e a Hodle guarda apenas um envelope cifrado que não consegue abrir. Nem um comprometimento da nossa infraestrutura move saldo.',
  },
  {
    question: 'Como funciona a API?',
    answer:
      'API REST documentada, autenticação por API key no header, webhooks assinados com HMAC e especificação OpenAPI 3.1 pública.',
  },
  {
    question: 'Como pagar um Pix usando saldo em stablecoin?',
    answer:
      'Um POST em /api/wallet/payout debita o saldo em USDT ou USDC da carteira e liquida o Pix no destino. O gas é patrocinado pela Hodle.',
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
  { label: 'Bitcoin on-chain', asset: 'BTC', network: 'bitcoin', icon: ICONS.btc, networkIcon: ICONS.btc },
]

type JsonValue = string | number

export type FlowStep = {
  title: string
  method: 'GET' | 'POST'
  path: string
  description: string
  body: Record<string, JsonValue> | null
}

export const buildFlowSteps = (source: FlowSource): FlowStep[] => [
  {
    title: 'Criar subconta',
    method: 'POST',
    path: '/api/subaccount',
    description: 'Conta segregada para o seu usuário final. Retorna subAccountId.',
    body: { name: 'Sam Chen' },
  },
  {
    title: 'Verificar o titular',
    method: 'POST',
    path: '/api/kyc',
    description: 'Envie os documentos antes em /api/kyc/document e aguarde o webhook KYC_APPROVED.',
    body: {
      subAccountId: '$SUBACCOUNT_ID',
      fullName: 'Sam Chen',
      dateOfBirth: '1993-04-12',
      countryOfTaxId: 'BRA',
      taxIdNumber: '12345678901',
    },
  },
  {
    title: 'Provisionar a wallet',
    method: 'POST',
    path: '/api/wallet/create',
    description: 'Cria a wallet auto-custodial do usuário na rede de origem.',
    body: { subAccountId: '$SUBACCOUNT_ID', network: source.network },
  },
  {
    title: 'Buscar as chaves',
    method: 'POST',
    path: '/api/wallet/keys',
    description: 'Retorna o protectedSymmetricKey usado para assinar transferências com o PIN da wallet.',
    body: { subAccountId: '$SUBACCOUNT_ID' },
  },
  {
    title: 'Pré-visualizar a cotação',
    method: 'POST',
    path: '/api/quote',
    description: 'Mostra câmbio e taxas antes de executar.',
    body: {
      inputCurrency: source.asset,
      inputPaymentMethod: source.network.toUpperCase(),
      outputCurrency: 'BRL',
      outputPaymentMethod: 'PIX',
      inputAmount: '100.00',
    },
  },
  {
    title: 'Disparar o payout',
    method: 'POST',
    path: '/api/wallet/payout',
    description: 'Debita a wallet, converte e dispara o Pix.',
    body: {
      subAccountId: '$SUBACCOUNT_ID',
      value: 10000,
      network: source.network,
      asset: source.asset,
      pixKey: 'voce@empresa.com',
      pixKeyType: 'EMAIL',
      walletPin: '$PIN',
      protectedSymmetricKey: '$PSK',
      externalId: 'payout-123',
    },
  },
  {
    title: 'Acompanhar o status',
    method: 'GET',
    path: '/api/wallet/payout/$TRANSACTION_ID',
    description: 'Consulte até COMPLETED, ou use os webhooks PAYOUT_SUCCESSFUL e PAYOUT_FAILED.',
    body: null,
  },
]

export type CodeLineTone = 'plain' | 'muted' | 'string' | 'number'

export type CodeLine = {
  text: string
  tone: CodeLineTone
}

const API_HOST = 'https://api.hodle.com.br'

const formatBodyLine = (key: string, value: JsonValue, isLast: boolean): CodeLine => {
  const separator = isLast ? '' : ','

  if (typeof value === 'number') {
    return { text: `    "${key}": ${value}${separator}`, tone: 'number' }
  }

  return { text: `    "${key}": "${value}"${separator}`, tone: 'string' }
}

export const buildCurlLines = (step: FlowStep): CodeLine[] => {
  if (!step.body) {
    return [
      { text: `curl -X GET ${API_HOST}${step.path} \\`, tone: 'plain' },
      { text: "  -H 'Authorization: Bearer $HODLE_API_KEY'", tone: 'muted' },
    ]
  }

  const entries = Object.entries(step.body)

  return [
    { text: `curl -X ${step.method} ${API_HOST}${step.path} \\`, tone: 'plain' },
    { text: "  -H 'Authorization: Bearer $HODLE_API_KEY' \\", tone: 'muted' },
    { text: "  -H 'Content-Type: application/json' \\", tone: 'muted' },
    { text: "  -d '{", tone: 'plain' },
    ...entries.map(([key, value], index) => formatBodyLine(key, value, index === entries.length - 1)),
    { text: "  }'", tone: 'plain' },
  ]
}
