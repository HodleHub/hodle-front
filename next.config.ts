import type { NextConfig } from 'next'

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
}

export default nextConfig
