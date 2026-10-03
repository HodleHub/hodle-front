import { NextResponse } from 'next/server'

/**
 * LNURL-pay discovery. Two backends answer it and neither knows about the other:
 *
 * - The self-hosted Breez LNURL server owns addresses registered through the
 *   Spark SDK (`sparkDetails.lightningAddress`) — every address created from the
 *   wallet's Lightning tab.
 * - The Hodler API owns the legacy addresses, matched on `moneyAddressUser`, and
 *   issues invoices over Liquid/Ark.
 *
 * Spark goes first because it is the current rail; whatever it does not know
 * falls through to the legacy handler, so old addresses keep resolving.
 */
const SPARK_LNURL_BACKEND = 'https://lnurl.hodle.com.br'
const LEGACY_LNURL_BACKEND = 'https://api.hodle.com.br'

const DISCOVERY_TIMEOUT_MS = 5000

type PayRequest = {
  status?: string
  tag?: string
}

const isPayRequest = (data: unknown): boolean => {
  if (!data || typeof data !== 'object') return false

  const payRequest = data as PayRequest

  return payRequest.status !== 'ERROR' && payRequest.tag === 'payRequest'
}

type DiscoveryResult = {
  data: unknown
  status: number
} | null

/**
 * A backend that is down or slow must not stall discovery: the sender's wallet
 * gives up long before we would, and the other backend may hold the answer.
 */
const discover = async (
  backend: string,
  username: string,
): Promise<DiscoveryResult> => {
  try {
    const response = await fetch(
      `${backend}/.well-known/lnurlp/${encodeURIComponent(username)}`,
      { signal: AbortSignal.timeout(DISCOVERY_TIMEOUT_MS) },
    )

    return { data: await response.json(), status: response.status }
  } catch {
    return null
  }
}

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ username: string }> },
): Promise<NextResponse> => {
  const { username } = await params

  const spark = await discover(SPARK_LNURL_BACKEND, username)

  if (spark && spark.status === 200 && isPayRequest(spark.data)) {
    return NextResponse.json(spark.data, { status: 200 })
  }

  const legacy = await discover(LEGACY_LNURL_BACKEND, username)

  if (legacy) {
    return NextResponse.json(legacy.data, { status: legacy.status })
  }

  if (spark) {
    return NextResponse.json(spark.data, { status: spark.status })
  }

  return NextResponse.json(
    { status: 'ERROR', reason: 'Lightning Address indisponivel no momento' },
    { status: 503 },
  )
}
