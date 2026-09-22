import { requestHodle } from './requestHodle.mjs'

/**
 * @typedef {import('./requestHodle.mjs').RequestConfig & { externalId: string }} GetPixDepositArgs
 * @typedef {{ success: true, data: Record<string, unknown> }} GetPixDepositSuccess
 * @typedef {{ success: false, error: string, status: number }} GetPixDepositError
 * @typedef {GetPixDepositSuccess | GetPixDepositError} GetPixDepositResult
 */

/** Reads the main account's deposit; subaccount integrations must also send subAccountId.
 * @param {GetPixDepositArgs} args
 * @returns {Promise<GetPixDepositResult>}
 */
export const getPixDeposit = async (args) => {
  const result = await requestHodle({ ...args, path: `/api/deposit/asset/${encodeURIComponent(args.externalId)}` })

  if (result.success === false) {
    return result
  }

  const data = result.payload.data

  if (!data || typeof data !== 'object' || Array.isArray(data) || !('status' in data) || typeof data.status !== 'string') {
    return { success: false, error: 'Unexpected deposit status response', status: 0 }
  }

  return { success: true, data }
}
