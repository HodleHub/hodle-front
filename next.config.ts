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
    ]
  },
}

export default nextConfig
