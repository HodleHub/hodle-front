import type { NextConfig } from 'next'

const legalAliases = [
  { source: '/politica-de-privacidade', destination: '/privacidade' },
  { source: '/politica-privacidade', destination: '/privacidade' },
  { source: '/privacy', destination: '/privacidade' },
  { source: '/privacy-policy', destination: '/privacidade' },
  { source: '/termos-de-uso', destination: '/termos' },
  { source: '/termos-de-servico', destination: '/termos' },
  { source: '/terms', destination: '/termos' },
  { source: '/terms-of-use', destination: '/termos' },
  { source: '/terms-of-service', destination: '/termos' },
  { source: '/politica-de-cookies', destination: '/cookies' },
  { source: '/cookie-policy', destination: '/cookies' },
]

// English aliases for the pages an agent looks for by convention before it
// reads the sitemap.
const trustPageAliases = [
  { source: '/about', destination: '/sobre' },
  { source: '/about-us', destination: '/sobre' },
  { source: '/contact', destination: '/contato' },
  { source: '/contact-us', destination: '/contato' },
  { source: '/developers', destination: '/desenvolvedores' },
  { source: '/developer', destination: '/desenvolvedores' },
  { source: '/api-docs', destination: '/desenvolvedores' },
  { source: '/pricing', destination: '/precos' },
]

// Every page is available as HTML and as markdown, so caches must key on
// Accept. Next's own router values are repeated here because a custom header
// replaces the framework one instead of merging with it.
const varyHeader = [
  'Accept',
  'Accept-Encoding',
  'RSC',
  'Next-Router-State-Tree',
  'Next-Router-Prefetch',
  'Next-Router-Segment-Prefetch',
].join(', ')

// RFC 9727 (api-catalog) and RFC 8631 (service-desc) discovery, advertised on
// every HTML response so an agent finds the API description without guessing.
const discoveryLinkHeader = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  '</openapi.json>; rel="service-desc"; type="application/json"',
  '</llms.txt>; rel="describedby"; type="text/plain"',
].join(', ')

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Link', value: discoveryLinkHeader },
          { key: 'Vary', value: varyHeader },
        ],
      },
      {
        source: '/openapi.json',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/pitch',
        destination: '/pitch.html',
      },
      {
        source: '/openapi.json',
        destination: 'https://docs.hodle.com.br/openapi.json',
      },
      {
        source: '/lnurlpay/:path*',
        destination: 'https://lnurl.hodle.com.br/lnurlpay/:path*',
      },
      {
        source: '/verify/:path*',
        destination: 'https://lnurl.hodle.com.br/verify/:path*',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/articles/precos',
        destination: '/precos',
        permanent: true,
      },
      {
        source: '/articles/comecando-com-bitcoin',
        destination: '/comprar-bitcoin-com-pix',
        permanent: true,
      },
      ...legalAliases.map((alias) => ({ ...alias, permanent: true })),
      ...trustPageAliases.map((alias) => ({ ...alias, permanent: true })),
    ]
  },
}

export default nextConfig
