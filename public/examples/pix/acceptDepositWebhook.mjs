import { verifyHodleWebhook } from './verifyHodleWebhook.mjs'

/**
 * @typedef {{ key: string, payload: Record<string, unknown> }} InboxEntry
 * @typedef {import('./verifyHodleWebhook.mjs').VerifyHodleWebhookArgs & { accountId: string, acceptOnce: (entry: InboxEntry) => Promise<boolean> }} AcceptDepositWebhookArgs
 * @typedef {{ success: true, status: number, outcome: string }} AcceptDepositWebhookSuccess
 * @typedef {{ success: false, status: number, error: string }} AcceptDepositWebhookError
 * @typedef {AcceptDepositWebhookSuccess | AcceptDepositWebhookError} AcceptDepositWebhookResult
 */

const acceptedEvents = ['DEPOSIT_ASSET_FAILED', 'DEPOSIT_ASSET_REFUNDED']

/** Accepts only documented eventId-bearing deposit events into a durable inbox.
 * acceptOnce must atomically persist the payload under a unique key before resolving.
 * @param {AcceptDepositWebhookArgs} args
 * @returns {Promise<AcceptDepositWebhookResult>}
 */
export const acceptDepositWebhook = async (args) => {
  try {
    const payload = JSON.parse(args.rawBody.toString('utf8'))

    if (payload?.event === 'WEBHOOK_TEST') {
      return { success: true, status: 200, outcome: 'TEST_IGNORED' }
    }

    if (!verifyHodleWebhook(args).success) {
      return { success: false, status: 401, error: 'Invalid webhook signature' }
    }

    if (!acceptedEvents.includes(payload?.event)) {
      return { success: true, status: 200, outcome: 'UNSUPPORTED_EVENT_IGNORED' }
    }

    if (!args.accountId || typeof payload.data?.eventId !== 'string' || !payload.data.eventId || typeof payload.data.externalId !== 'string' || !payload.data.externalId) {
      return { success: false, status: 400, error: 'Missing reconciliation identifiers' }
    }

    const key = JSON.stringify([args.accountId, payload.event, payload.data.eventId])
    const accepted = await args.acceptOnce({ key, payload })

    return { success: true, status: 200, outcome: accepted ? 'ACCEPTED' : 'DUPLICATE' }
  } catch {
    return { success: false, status: 503, error: 'Delivery was not accepted; investigate and retry' }
  }
}
