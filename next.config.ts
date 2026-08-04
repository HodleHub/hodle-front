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

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/og-image-v2.png',
        destination: '/api/og',
      },
      {
        source: '/pitch',
        destination: '/pitch.html',
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
      ...legalAliases.map((alias) => ({ ...alias, permanent: true })),
    ]
  },
}

export default nextConfig
