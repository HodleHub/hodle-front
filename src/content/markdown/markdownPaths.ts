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
  '/articles',
  '/contato',
  '/desenvolvedores',
  '/faq',
  '/glossario',
  '/precos',
  '/sobre',
]

export const topicMarkdownSlugs: string[] = [
  'api-pix-stablecoin',
  'comprar-bitcoin-com-pix',
  'comprar-usdt-com-pix',
  'lightning-para-pix',
  'offshore',
  'pagar-pix-com-usdt',
  'para-agentes-de-ia',
  'real-onchain',
  'receber-pix-em-stablecoin',
  'wallet-auto-custodial',
]

export const articleMarkdownSlugs: string[] = [
  'auto-custodia-nao-e-detalhe-de-implementacao',
  'invoice-lightning-que-liquida-em-pix',
  'pagar-pix-com-saldo-em-stablecoin',
]

export const markdownPaths: string[] = [
  ...staticMarkdownPaths,
  ...topicMarkdownSlugs.map((slug) => `/${slug}`),
  ...articleMarkdownSlugs.map((slug) => `/articles/${slug}`),
]
