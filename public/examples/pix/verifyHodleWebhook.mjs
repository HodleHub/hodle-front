import { createHmac, timingSafeEqual } from 'node:crypto'

/**
 * @typedef {{ rawBody: Buffer, signature: string, timestamp: string, secret: string, nowSeconds?: number }} VerifyHodleWebhookArgs
 * @typedef {{ success: true }} VerifyHodleWebhookSuccess
 * @typedef {{ success: false, error: string }} VerifyHodleWebhookError
 * @typedef {VerifyHodleWebhookSuccess | VerifyHodleWebhookError} VerifyHodleWebhookResult
 */

const toleranceSeconds = 300

/** Verifies the exact request bytes and rejects stale or malformed signatures.
 * @param {VerifyHodleWebhookArgs} args
 * @returns {VerifyHodleWebhookResult}
 */
export const verifyHodleWebhook = (args) => {
  const nowSeconds = args.nowSeconds ?? Math.floor(Date.now() / 1000)
  const age = Math.abs(nowSeconds - Number(args.timestamp))

  if (!args.secret || !/^\d+$/.test(args.timestamp) || !Number.isFinite(age) || age > toleranceSeconds) {
    return { success: false, error: 'Invalid timestamp or secret' }
  }

  if (!/^[a-fA-F0-9]{64}$/.test(args.signature)) {
    return { success: false, error: 'Invalid signature format' }
  }

  const expected = createHmac('sha256', args.secret).update(`${args.timestamp}.`).update(args.rawBody).digest()
  const received = Buffer.from(args.signature, 'hex')

  if (!timingSafeEqual(expected, received)) {
    return { success: false, error: 'Invalid signature' }
  }

  return { success: true }
}
