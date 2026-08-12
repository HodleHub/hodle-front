import { MetadataRoute } from 'next'

// A crawler obeys exactly one group, so the AI bots below ignore the '*' rules
// entirely. Both groups share this list or the AI crawlers would be the only
// ones walking into the app and proxy paths.
//
// /lnurlpay/ and /verify/ are rewrites onto lnurl.hodle.com.br: when that host
// is down they answer 5xx under this domain and Search Console reports it as a
// server error on hodle.com.br. /create and /animation are app and demo
// surfaces that answer 200 with no indexable content, which is what Search
// Console flags as a soft 404.
const disallow: string[] = [
  '/api/',
  '/.well-known/',
  '/lnurlp/',
  '/lnurlpay/',
  '/verify/',
  '/create',
  '/animation',
]

const aiUserAgents: string[] = [
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'Bytespider',
  'CCBot',
  'PerplexityBot',
  'YouBot',
  'Applebot-Extended',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
      {
        userAgent: aiUserAgents,
        allow: '/',
        disallow,
      },
    ],
    sitemap: 'https://hodle.com.br/sitemap.xml',
  }
}
