type BuildAppAttributionUrlArgs = { url: URL; source: string; landing: string; medium: string; campaign: string }
type BuildAppAttributionUrlSuccess = { success: true; href: string }
type BuildAppAttributionUrlError = { success: false; error: string }
type BuildAppAttributionUrlResult = BuildAppAttributionUrlSuccess | BuildAppAttributionUrlError

/** Carries bounded acquisition context to the app without replacing its existing campaign or routing parameters. */
export const buildAppAttributionUrl = ({ url, source, landing, medium, campaign }: BuildAppAttributionUrlArgs): BuildAppAttributionUrlResult => {
  if (!['app.hodle.com.br', 'app-sandbox.hodle.com.br'].includes(url.hostname) || url.protocol !== 'https:') return { success: false, error: 'Not the Hodle app' }

  const target: URL = new URL(url.href)
  const values: Record<string, string> = { utm_source: source, utm_medium: medium, utm_campaign: campaign, hodle_landing: landing }

  Object.entries(values).forEach(([key, value]: [string, string]): void => {
    if (!target.searchParams.has(key)) target.searchParams.set(key, value)
  })

  return { success: true, href: target.href }
}
