type GetConversionTargetArgs = { href: string; origin: string }
type GetConversionTargetSuccess = { success: true; destination: 'sales' | 'docs' | 'app' | 'sandbox'; url: URL }
type GetConversionTargetError = { success: false; error: string }
type GetConversionTargetResult = GetConversionTargetSuccess | GetConversionTargetError

/** Only named Hodle conversion destinations are eligible for tracking. */
export const getConversionTarget = ({ href, origin }: GetConversionTargetArgs): GetConversionTargetResult => {
  try {
    const url: URL = new URL(href, origin)

    if (url.protocol === 'mailto:' && url.pathname === 'contato@hodle.com.br') return { success: true, destination: 'sales', url }

    if (url.protocol !== 'https:' && url.origin !== origin) return { success: false, error: 'Unsupported protocol' }

    if (url.hostname === 'app-sandbox.hodle.com.br') return { success: true, destination: 'sandbox', url }

    if (url.hostname === 'app.hodle.com.br') return { success: true, destination: 'app', url }

    if (url.hostname === 'docs.hodle.com.br') return { success: true, destination: 'docs', url }

    if ((url.hostname === 'api.whatsapp.com' || url.hostname === 'wa.me') && (url.searchParams.get('phone') === '5511960000445' || url.pathname === '/5511960000445')) return { success: true, destination: 'sales', url }

    if (url.origin === origin && url.pathname === '/contato') return { success: true, destination: 'sales', url }

    return { success: false, error: 'Not a conversion destination' }
  } catch {
    return { success: false, error: 'Invalid destination URL' }
  }
}
