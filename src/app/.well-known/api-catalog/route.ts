const siteUrl = 'https://hodle.com.br'
const docsUrl = 'https://docs.hodle.com.br'

export const dynamic = 'force-static'

/**
 * API catalog as a linkset, per RFC 9727 (`/.well-known/api-catalog`) using the
 * `application/linkset+json` document of RFC 9264. It is the standard discovery
 * point for the Hodle API description.
 */
const linkset = {
  linkset: [
    {
      anchor: `${siteUrl}/`,
      'service-desc': [
        {
          href: `${siteUrl}/openapi.json`,
          type: 'application/json',
          title: 'Hodle API — OpenAPI 3.1 description',
        },
      ],
      'service-doc': [
        {
          href: docsUrl,
          type: 'text/html',
          title: 'Hodle API documentation',
        },
        {
          href: `${siteUrl}/desenvolvedores`,
          type: 'text/html',
          title: 'Hodle developer resources',
        },
      ],
      'service-meta': [
        {
          href: `${siteUrl}/llms.txt`,
          type: 'text/plain',
          title: 'Machine readable summary of Hodle',
        },
        {
          href: `${siteUrl}/termos`,
          type: 'text/html',
          title: 'Terms of service',
        },
      ],
      author: [
        {
          href: `${siteUrl}/contato`,
          type: 'text/html',
          title: 'Hodle — contact',
        },
      ],
      status: [
        {
          href: `${docsUrl}/docs/sandbox`,
          type: 'text/html',
          title: 'Sandbox environment',
        },
      ],
    },
  ],
}

export const GET = async (): Promise<Response> =>
  new Response(JSON.stringify(linkset, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/linkset+json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  })
