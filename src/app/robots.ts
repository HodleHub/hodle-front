import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/.well-known/', '/lnurlp/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 'Bytespider', 'CCBot', 'PerplexityBot', 'YouBot', 'Applebot-Extended'],
        allow: '/',
      },
    ],
    sitemap: 'https://hodle.com.br/sitemap.xml',
  }
}
