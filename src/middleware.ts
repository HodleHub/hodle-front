import { NextRequest, NextResponse } from 'next/server'
import { negotiateAccept } from './utils/negotiateAccept'
import { hasMarkdownVariant } from './utils/hasMarkdownVariant'
import { isKnownSitePath } from './utils/isKnownSitePath'
import { notFoundMarkdown } from './content/markdown/notFoundMarkdown'

const MARKDOWN_CONTENT_TYPE = 'text/markdown; charset=utf-8'
const VARY_VALUE = 'Accept, Accept-Encoding'

const unsupportedBody = `# 406 — tipo de mídia não suportado

hodle.com.br serve \`text/html\` e \`text/markdown\`. Repita a requisição com
\`Accept: text/markdown\` ou \`Accept: text/html\`.

Mapa do site: https://hodle.com.br/llms.txt
`

const isAsset = (pathname: string): boolean => pathname.includes('.')

/**
 * The Next client router fetches flight payloads with `RSC: 1` and
 * `Accept: text/x-component`. Those must pass through untouched or
 * client-side navigation breaks.
 */
const isReactServerComponentRequest = (request: NextRequest): boolean =>
  request.headers.get('rsc') !== null ||
  request.headers.get('next-router-prefetch') !== null ||
  (request.headers.get('accept') ?? '').includes('text/x-component')

const markdownResponse = (body: string, status: number): NextResponse =>
  new NextResponse(body, {
    status,
    headers: {
      'Content-Type': MARKDOWN_CONTENT_TYPE,
      Vary: VARY_VALUE,
    },
  })

/**
 * Content negotiation for agents, per acceptmarkdown.com and RFC 9110:
 * `Accept: text/markdown` gets markdown, an unsupported media type gets 406,
 * and a dead path gets a markdown 404 instead of a visual page.
 *
 * The markdown variant is served by an internal rewrite to `/md`, which also
 * gives the two representations separate cache keys — Next owns the `Vary`
 * header of a page response and drops anything middleware appends to it, so the
 * rewrite is what keeps a cache from mixing the variants up. `Vary: Accept` is
 * declared by the `/md` route handler and by `next.config.ts`.
 */
export const middleware = (request: NextRequest): NextResponse => {
  const { pathname } = request.nextUrl

  if (isAsset(pathname) || isReactServerComponentRequest(request)) {
    return NextResponse.next()
  }

  const preference = negotiateAccept(request.headers.get('accept'))

  if (preference === 'UNSUPPORTED') {
    return markdownResponse(unsupportedBody, 406)
  }

  if (preference === 'HTML') {
    return NextResponse.next()
  }

  if (!isKnownSitePath(pathname)) {
    return markdownResponse(notFoundMarkdown, 404)
  }

  if (!hasMarkdownVariant(pathname)) {
    return NextResponse.next()
  }

  const rewritten = request.nextUrl.clone()
  rewritten.pathname = pathname === '/' ? '/md' : `/md${pathname}`

  return NextResponse.rewrite(rewritten)
}

export const config = {
  matcher: [
    '/((?!api/|md/|_next/|lnurlp/|lnurlpay/|verify/|\\.well-known/).*)',
  ],
}
