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
  { label: 'Bitcoin on-chain', asset: 'BTC', network: 'bitcoin', icon: ICONS.btc, networkIcon: ICONS.btc },
]

type JsonValue = string | number

type FlowStepDetails = {
  title: string
  description: string
  webhooks?: string[]
}

export type FlowStep = FlowStepDetails & (
  | {
      kind: 'request'
      method: 'GET' | 'POST'
      path: string
      body: Record<string, JsonValue> | null
    }
  | { kind: 'instruction' }
)

export type FlowRecipe = {
  supported: boolean
  description: string
  prerequisites: string
  docsUrl: string
  steps: FlowStep[]
}

// Operation-specific matrix checked against wallet-payout and wallet-keys on 2026-10-04.
// Asset availability on deposit/asset does not imply support for wallet creation or payout.
const PAYOUT_ASSETS: Record<string, readonly string[]> = {
  polygon: ['USDT', 'USDC', 'BRLA'],
  base: ['USDC', 'BRLA'],
  solana: ['USDT', 'USDC', 'BRS'],
  tron: ['USDT'],
}

const buildStablecoinSteps = (source: FlowSource): FlowStep[] => [
  source.network === 'tron'
    ? {
        kind: 'request',
        title: 'Selecionar wallet existente',
        method: 'POST',
        path: '/api/wallet/get',
        description: 'Use o WALLET_ID de uma wallet Tron existente na subconta. Confirme a rede na resposta; /api/wallet/create não cria wallets Tron.',
        body: { subAccountId: '$SUBACCOUNT_ID', walletId: '$WALLET_ID' },
      }
    : {
        kind: 'request',
        title: 'Criar a wallet',
        method: 'POST',
        path: '/api/wallet/create',
        description: 'Use o PIN de seis dígitos já estabelecido pelo titular na plataforma. Salve data.id como WALLET_ID e a chave protegida dessa wallet. Cada chamada cria uma nova wallet; não repita para consultá-la.',
        body: {
          subAccountId: '$SUBACCOUNT_ID',
          network: source.network,
          walletPin: '$WALLET_PIN',
        },
      },
  {
    kind: 'instruction',
    title: 'Disponibilizar saldo',
    description: `Antes de continuar, confirme saldo suficiente de ${source.asset} na wallet ${source.network} selecionada, incluindo taxas. Uma wallet recém-criada não tem saldo. Confira endereço, rede e ativo antes de transferir.`,
  },
  {
    kind: 'request',
    title: 'Buscar a chave da wallet',
    method: 'POST',
    path: '/api/wallet/keys',
    description: 'Busque a chave apenas se ela não estiver salva da criação. Guarde protectedSymmetricKey e email por walletId; atualize após mudança da chave protegida. Use o mesmo WALLET_ID e a mesma subconta no payout.',
    body: { subAccountId: '$SUBACCOUNT_ID', walletId: '$WALLET_ID' },
  },
  {
    kind: 'request',
    title: 'Confirmar destinatário e preço',
    method: 'POST',
    path: '/api/wallet/payout/beneficiary',
    description: 'Este exemplo paga uma chave do próprio titular verificado. Mostre nome, banco, ativo e taxas ao usuário. Salve quoteId como QUOTE_ID e confirme antes de expiresAt. O valor 10000 representa R$ 100,00 recebidos.',
    body: {
      subAccountId: '$SUBACCOUNT_ID',
      value: 10000,
      network: source.network,
      asset: source.asset,
      pixKey: '$PIX_KEY',
      pixKeyType: 'EMAIL',
    },
  },
  {
    kind: 'request',
    title: 'Autorizar o payout',
    method: 'POST',
    path: '/api/wallet/payout',
    description: 'Envie o quoteId aprovado e os dados da mesma wallet. EXTERNAL_ID identifica uma ordem e deve ser reutilizado nas tentativas dessa ordem. Guarde transactionId; HTTP 202 ainda não confirma o Pix.',
    body: {
      subAccountId: '$SUBACCOUNT_ID',
      walletId: '$WALLET_ID',
      value: 10000,
      network: source.network,
      asset: source.asset,
      quoteId: '$QUOTE_ID',
      walletPin: '$WALLET_PIN',
      protectedSymmetricKey: '$PROTECTED_SYMMETRIC_KEY',
      externalId: '$EXTERNAL_ID',
    },
  },
  {
    kind: 'request',
    title: 'Confirmar a liquidação',
    method: 'GET',
    path: '/api/wallet/payout/$TRANSACTION_ID',
    description: 'Consulte a cada 5 segundos até COMPLETED ou FAILED. Valide a assinatura dos webhooks e concilie por transactionId/externalId, processando cada evento uma vez. Trate também estornos posteriores.',
    body: null,
    webhooks: ['PAYOUT_SUCCESSFUL', 'PAYOUT_FAILED', 'PAYOUT_REFUNDED'],
  },
]

const buildLightningSteps = (): FlowStep[] => [
  {
    kind: 'request',
    title: 'Criar invoice Lightning',
    method: 'POST',
    path: '/api/lightning/invoice',
    description: 'O destinatário recebe R$ 100,00 (value em centavos). Salve invoice, transactionId e expiresAt. Este endpoint não documenta externalId: controle novas emissões na integração, sem presumir a idempotência de wallet/payout.',
    body: {
      subAccountId: '$SUBACCOUNT_ID',
      value: 10000,
      pixKey: '$PIX_KEY',
      pixKeyType: 'EMAIL',
    },
  },
  {
    kind: 'instruction',
    title: 'Pagar a invoice BOLT11',
    description: 'Apresente a invoice retornada ao pagador, como QR code ou copia e cola. Ele paga com uma carteira Lightning antes de expiresAt. Se expirar sem pagamento, não há webhook; a integração deve marcar a expiração.',
  },
  {
    kind: 'instruction',
    title: 'Confirmar o Pix por webhook',
    description: 'Após o pagamento da invoice, a Hodle envia o Pix. Valide a assinatura do webhook e associe data.transactionId à ordem. PAYOUT_SUCCESSFUL com status COMPLETED confirma a liquidação; processe cada evento uma vez e trate falhas ou estornos.',
    webhooks: ['PAYOUT_SUCCESSFUL', 'PAYOUT_FAILED', 'PAYOUT_REFUNDED'],
  },
]

export const buildFlowRecipe = (source: FlowSource): FlowRecipe => {
  if (source.asset === 'BTC' && source.network === 'lightning') {
    return {
      supported: true,
      description: 'BTC chega por uma invoice Lightning e o destinatário recebe reais via Pix.',
      prerequisites: 'Conta e subconta verificadas, limites de saída disponíveis e webhook configurado. O exemplo usa uma chave Pix do titular. A invoice tem preço e validade próprios.',
      docsUrl: `${DOCS_URL}/docs/flow-lightning-pix`,
      steps: buildLightningSteps(),
    }
  }

  if (PAYOUT_ASSETS[source.network]?.includes(source.asset)) {
    return {
      supported: true,
      description: 'Saldo em stablecoin da wallet selecionada paga uma chave Pix em reais.',
      prerequisites: `Use uma subconta verificada, o PIN do titular e acesso ao pagamento Pix pela API.${source.network === 'tron' ? ' Para Tron, confirme a disponibilidade na conta e use uma wallet existente.' : ''}${source.asset === 'BRS' ? ' Para BRS, confirme a disponibilidade na conta.' : ''}${source.network === 'solana' ? ' Solana está disponível em produção, não no sandbox.' : ''} Pagamentos a terceiros exigem habilitação e dados adicionais do beneficiário.`,
      docsUrl: `${DOCS_URL}/docs/wallet-payout`,
      steps: buildStablecoinSteps(source),
    }
  }

  return {
    supported: false,
    description: source.asset === 'BTC' && source.network === 'bitcoin'
      ? 'Não há uma receita pública validada neste demonstrador para Bitcoin on-chain → Pix. O contrato documentado de BTC on-chain em /api/deposit/asset faz o sentido inverso: Pix → Bitcoin.'
      : 'Esta combinação de ativo e rede não tem uma receita de saída para Pix neste demonstrador.',
    prerequisites: 'Consulte a matriz por operação antes de integrar. Para BTC → Pix, a receita documentada aqui usa Lightning.',
    docsUrl: `${DOCS_URL}/docs/assets`,
    steps: [],
  }
}

export type CodeLineTone = 'plain' | 'muted' | 'string' | 'number'

export type CodeLine = {
  text: string
  tone: CodeLineTone
}

const API_HOST = 'https://api.hodle.com.br'

const formatBodyLine = (key: string, value: JsonValue, isLast: boolean): CodeLine => {
  const separator = isLast ? '' : ','
  const field = JSON.stringify(key)

  if (typeof value === 'number') {
    return { text: `    ${field}: ${value}${separator}`, tone: 'number' }
  }

  const environmentVariable = value.match(/^\$([A-Z][A-Z0-9_]*)$/)?.[1]

  if (environmentVariable) {
    return { text: `    ${field}: process.env.${environmentVariable} ?? ""${separator}`, tone: 'string' }
  }

  return { text: `    ${field}: ${JSON.stringify(value)}${separator}`, tone: 'string' }
}

export const buildCurlLines = (step: FlowStep): CodeLine[] => {
  if (step.kind !== 'request') return []

  const command = `curl -X ${step.method} "${API_HOST}${step.path}"`

  if (!step.body) {
    return [
      { text: `${command} \\`, tone: 'plain' },
      { text: '  -H "Authorization: Bearer $HODLE_API_KEY"', tone: 'muted' },
    ]
  }

  const entries = Object.entries(step.body)

  return [
    { text: '# Requer Node.js; exporte as variáveis usadas abaixo.', tone: 'muted' },
    { text: `node <<'NODE' | ${command} \\`, tone: 'plain' },
    { text: '  -H "Authorization: Bearer $HODLE_API_KEY" \\', tone: 'muted' },
    { text: '  -H "Content-Type: application/json" \\', tone: 'muted' },
    { text: '  --data-binary @-', tone: 'plain' },
    { text: 'process.stdout.write(JSON.stringify({', tone: 'plain' },
    ...entries.map(([key, value], index) => formatBodyLine(key, value, index === entries.length - 1)),
    { text: '}))', tone: 'plain' },
    { text: 'NODE', tone: 'plain' },
  ]
}
