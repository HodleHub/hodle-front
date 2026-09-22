import { staticSitePaths } from '../../content/markdown/sitePaths'
import { articleMarkdownSlugs, topicMarkdownSlugs } from '../../content/markdown/markdownPaths'

type GetAcquisitionArgs = { url: string; referrer: string }
type GetAcquisitionSuccess = {
  success: true
  source: string
  medium: string
  campaign: string
  landing: string
}
type GetAcquisitionError = { success: false; error: string }
type GetAcquisitionResult = GetAcquisitionSuccess | GetAcquisitionError

const sources: Map<string, string> = new Map(Object.entries({
  'google.com': 'google', 'www.google.com': 'google', 'www.google.com.br': 'google', google: 'google',
  'bing.com': 'bing', 'www.bing.com': 'bing', bing: 'bing',
  'chatgpt.com': 'chatgpt', 'chat.openai.com': 'chatgpt', chatgpt: 'chatgpt',
  'perplexity.ai': 'perplexity', 'www.perplexity.ai': 'perplexity', perplexity: 'perplexity',
  'claude.ai': 'claude', claude: 'claude', 'gemini.google.com': 'gemini',
  'copilot.microsoft.com': 'copilot', 'duckduckgo.com': 'duckduckgo',
  'x.com': 'x', 't.co': 'x', 'linkedin.com': 'linkedin', 'www.linkedin.com': 'linkedin',
}))
const paths: Set<string> = new Set([
  ...staticSitePaths,
  ...topicMarkdownSlugs.map((slug: string): string => `/${slug}`),
  ...articleMarkdownSlugs.map((slug: string): string => `/articles/${slug}`),
])
const mediums: string[] = ['organic', 'referral', 'social', 'email', 'cpc', 'paid-social']
const campaigns: string[] = ['pix', 'api-pix', 'baas', 'stablecoins', 'seo-pix-baas']

/** Reduces acquisition data to a fixed vocabulary; URLs and arbitrary query values never become event properties. */
export const getAcquisition = ({ url, referrer }: GetAcquisitionArgs): GetAcquisitionResult => {
  try {
    const page: URL = new URL(url)
    const referringHost: string = referrer ? new URL(referrer).hostname : ''
    const source: string = sources.get(page.searchParams.get('utm_source') ?? '') ?? sources.get(referringHost) ?? (referringHost ? 'other-referral' : 'direct')
    const medium: string = page.searchParams.get('utm_medium') ?? ''
    const campaign: string = page.searchParams.get('utm_campaign') ?? ''
    const defaultMedium: string = source === 'direct' ? 'none' : ['google', 'bing', 'duckduckgo'].includes(source) ? 'organic' : 'referral'

    return { success: true, source, medium: mediums.includes(medium) ? medium : defaultMedium, campaign: campaigns.includes(campaign) ? campaign : 'none', landing: paths.has(page.pathname) ? page.pathname : 'other' }
  } catch {
    return { success: false, error: 'Invalid acquisition URL' }
  }
}
