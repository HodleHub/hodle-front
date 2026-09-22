import { requestHodle } from './requestHodle.mjs'

/**
 * @typedef {import('./requestHodle.mjs').RequestConfig & { externalId: string, address: string, valueCents: number }} CreatePixDepositArgs
 * @typedef {{ success: true, externalId: string, qrCode: string }} CreatePixDepositSuccess
 * @typedef {{ success: false, error: string, status: number }} CreatePixDepositError
 * @typedef {CreatePixDepositSuccess | CreatePixDepositError} CreatePixDepositResult
 */

/** Creates a BRL-to-USDC deposit on the documented Base rail.
 * @param {CreatePixDepositArgs} args
 * @returns {Promise<CreatePixDepositResult>}
 */
export const createPixDeposit = async (args) => {
  const result = await requestHodle({
    ...args,
    path: '/api/deposit/asset',
    method: 'POST',
    body: { value: args.valueCents, address: args.address, asset: 'USDC', network: 'base', externalId: args.externalId },
  })

  if (result.success === false) {
    return result
  }

  if (typeof result.payload.externalId !== 'string' || typeof result.payload.qrCode !== 'string') {
    return { success: false, error: 'Unexpected deposit response; reconcile by externalId', status: 0 }
  }

  return { success: true, externalId: result.payload.externalId, qrCode: result.payload.qrCode }
}
