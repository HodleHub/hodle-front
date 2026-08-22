import { getMarkdownDocument } from '../../../utils/getMarkdownDocument'
import { notFoundMarkdown } from '../../../content/markdown/notFoundMarkdown'
import { markdownPaths } from '../../../content/markdown/markdownPaths'

const siteUrl = 'https://hodle.com.br'

export const dynamic = 'force-static'
export const dynamicParams = true

export const generateStaticParams = (): { slug: string[] }[] =>
  markdownPaths.map((path) => ({
    slug: path === '/' ? [] : path.slice(1).split('/'),
  }))

const toPathname = (slug: string[] | undefined): string => {
  if (!slug || slug.length === 0) {
    return '/'
  }

  return `/${slug.join('/')}`
}

/**
 * Serves the markdown representation of a page. Reached by an internal rewrite
 * from `src/middleware.ts` when the request negotiates `text/markdown`, so the
 * client keeps seeing the original URL.
 */
export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ slug?: string[] }> },
): Promise<Response> => {
  const { slug } = await params
  const pathname = toPathname(slug)
  const document = getMarkdownDocument({ pathname })

  if (!document) {
    return new Response(notFoundMarkdown, {
      status: 404,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        Vary: 'Accept, Accept-Encoding',
      },
    })
  }

  const canonical = pathname === '/' ? `${siteUrl}/` : `${siteUrl}${pathname}`

  return new Response(document, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept, Accept-Encoding',
      Link: `<${canonical}>; rel="canonical"; type="text/html"`,
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
