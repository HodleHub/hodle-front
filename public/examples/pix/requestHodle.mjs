/**
 * @typedef {{ baseUrl: string, apiKey: string, fetchImpl?: typeof fetch }} RequestConfig
 * @typedef {RequestConfig & { path: string, method?: string, body?: Record<string, unknown> }} RequestHodleArgs
 * @typedef {{ success: true, payload: Record<string, unknown> }} RequestHodleSuccess
 * @typedef {{ success: false, error: string, status: number }} RequestHodleError
 * @typedef {RequestHodleSuccess | RequestHodleError} RequestHodleResult
 */

const allowedOrigins = ['https://sandbox-api.hodle.com.br', 'https://api.hodle.com.br']
const requestTimeoutMs = 10000

/** Sends one request without automatically retrying a financial operation.
 * @param {RequestHodleArgs} args
 * @returns {Promise<RequestHodleResult>}
 */
export const requestHodle = async (args) => {
  if (!allowedOrigins.includes(args.baseUrl) || !args.apiKey || !args.path.startsWith('/api/')) {
    return { success: false, error: 'Invalid API configuration', status: 0 }
  }

  try {
    const response = await (args.fetchImpl ?? fetch)(`${args.baseUrl}${args.path}`, {
      method: args.method ?? 'GET',
      headers: { Authorization: `Bearer ${args.apiKey}`, 'Content-Type': 'application/json' },
      body: args.body ? JSON.stringify(args.body) : undefined,
      signal: AbortSignal.timeout(requestTimeoutMs),
      redirect: 'error',
    })
    const payload = await response.json()

    if (!response.ok || !payload || payload.success !== true) {
      return { success: false, error: 'API request failed; reconcile before retrying', status: response.status }
    }

    return { success: true, payload }
  } catch {
    return { success: false, error: 'No usable response; the operation outcome is unknown', status: 0 }
  }
}
