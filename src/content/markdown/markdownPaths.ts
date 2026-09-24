/**
 * Every pathname that answers `Accept: text/markdown` with a markdown
 * representation. Kept as literals so the Edge middleware can import it
 * without pulling the content pipeline into the Edge bundle.
 *
 * `markdownPaths.spec.ts` asserts this list stays in sync with the topic
 * registry, the article files on disk and the static routes under `src/app`.
 */
export const staticMarkdownPaths: string[] = [
  '/',
  '/ai',
  '/articles',
  '/brs',
  '/contato',
  '/crypto-as-a-service',
  '/desenvolvedores',
  '/en/pix-stablecoin-api',
  '/faq',
  '/glossario',
  '/neobank',
  '/precos',
  '/sobre',
  '/usd',
]

export const topicMarkdownSlugs: string[] = [
  'api-pix',
  'api-pix-stablecoin',
  'baas',
  'cobranca-pix',
  'como-aceitar-criptomoedas',
  'comprar-bitcoin-com-pix',
  'comprar-usdt-com-pix',
  'conciliacao-pix',
  'conta-digital-pj',
  'gateway-de-pagamento-cripto',
  'lightning-para-pix',
  'link-de-pagamento-pix',
  'offshore',
  'pagar-fornecedores-com-usdc',
  'pagar-pix-com-usdt',
  'para-agentes-de-ia',
  'pix',
  'real-onchain',
  'receber-pix-em-stablecoin',
  'wallet-auto-custodial',
]

export const articleMarkdownSlugs: string[] = [
  'auto-custodia-nao-e-detalhe-de-implementacao',
  'psav-regulacao-banco-central',
  'integrar-api-pix-nodejs',
  'validar-webhook-pix-idempotencia',
  'conciliacao-pix-api',
  'criar-link-pagamento-pix-api',
  'comparar-api-pix-baas',
]

export const markdownPaths: string[] = [
  ...staticMarkdownPaths,
  ...topicMarkdownSlugs.map((slug) => `/${slug}`),
  ...articleMarkdownSlugs.map((slug) => `/articles/${slug}`),
]
