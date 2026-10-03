import { MetadataRoute } from 'next'

// A crawler obeys exactly one group, so the AI bots below ignore the '*' rules
// entirely. Both groups share this list or the AI crawlers would be the only
// ones walking into the app and proxy paths.
//
// /lnurlpay/ and /verify/ are rewrites onto lnurl.hodle.com.br: when that host
// is down they answer 5xx under this domain and Search Console reports it as a
// server error on hodle.com.br. Public utility routes /create and /animation
// remain crawlable so search engines can read their layout's noindex metadata.
const disallow: string[] = [
  '/api/',
  '/.well-known/',
  '/lnurlp/',
  '/lnurlpay/',
  '/verify/',
  '/md/',
]

// The API catalog is the RFC 9727 discovery point, so it has to stay reachable
// even though the rest of /.well-known/ is closed. A longer Allow beats the
// shorter Disallow for every crawler that implements the standard.
const allow: string[] = ['/', '/.well-known/api-catalog']

const aiCrawlerUserAgents: string[] = [
  'Googlebot',
  'bingbot',
  'OAI-SearchBot',
  'GPTBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'anthropic-ai',
  'Google-Extended',
  'Bytespider',
  'CCBot',
  'PerplexityBot',
  'Perplexity-User',
  'YouBot',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow,
        disallow,
      },
      {
        userAgent: aiCrawlerUserAgents,
        allow,
        disallow,
      },
    ],
    sitemap: 'https://hodle.com.br/sitemap.xml',
  }
}
