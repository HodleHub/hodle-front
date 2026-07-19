import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/.well-known/', '/lnurlp/'],
      },
    ],
    sitemap: 'https://hodle.com.br/sitemap.xml',
  }
}
