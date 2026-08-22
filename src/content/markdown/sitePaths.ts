/**
 * Every pathname the app answers with a page. Used by the middleware to tell a
 * page that simply has no markdown variant (answer HTML) from a dead path
 * (answer a markdown 404). Literals so the Edge bundle stays small.
 *
 * `sitePaths.spec.ts` asserts this list covers every route under `src/app`.
 */
export const staticSitePaths: string[] = [
  '/',
  '/ai',
  '/animation',
  '/articles',
  '/brs',
  '/contato',
  '/cookies',
  '/create',
  '/desenvolvedores',
  '/en/brs',
  '/faq',
  '/glossario',
  '/legal',
  '/pitch',
  '/precos',
  '/privacidade',
  '/sobre',
  '/termos',
]

export const sitePathPrefixes: string[] = ['/create/']
