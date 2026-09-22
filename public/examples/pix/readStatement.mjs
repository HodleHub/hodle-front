import { requestHodle } from './requestHodle.mjs'

/**
 * @typedef {import('./requestHodle.mjs').RequestConfig & { from: string, to: string, cursor?: string, seenCursors?: string[] }} ReadStatementArgs
 * @typedef {{ success: true, operations: Record<string, unknown>[] }} ReadStatementSuccess
 * @typedef {{ success: false, error: string, status: number }} ReadStatementError
 * @typedef {ReadStatementSuccess | ReadStatementError} ReadStatementResult
 */

const pageLimit = 200
const maximumPages = 100

/** Reads a fixed window and stops on repeated cursors rather than returning incomplete data.
 * @param {ReadStatementArgs} args
 * @returns {Promise<ReadStatementResult>}
 */
export const readStatement = async (args) => {
  const seenCursors = args.seenCursors ?? []

  if (seenCursors.length >= maximumPages || (args.cursor && seenCursors.includes(args.cursor))) {
    return { success: false, error: 'Pagination limit or repeated cursor; narrow the window', status: 0 }
  }

  const query = new URLSearchParams({ from: args.from, to: args.to, limit: String(pageLimit) })

  if (args.cursor) {
    query.set('cursor', args.cursor)
  }

  const result = await requestHodle({ ...args, path: `/api/account/statement?${query}` })

  if (result.success === false) {
    return result
  }

  const data = result.payload.data

  if (!data || typeof data !== 'object' || !('operations' in data) || !Array.isArray(data.operations)) {
    return { success: false, error: 'Unexpected statement response', status: 0 }
  }

  const nextCursor = 'nextCursor' in data ? data.nextCursor : null

  if (!nextCursor) {
    return { success: true, operations: data.operations }
  }

  if (typeof nextCursor !== 'string') {
    return { success: false, error: 'Unexpected statement cursor', status: 0 }
  }

  const next = await readStatement({ ...args, cursor: nextCursor, seenCursors: [...seenCursors, args.cursor ?? ''] })

  if (next.success === false) {
    return next
  }

  return { success: true, operations: [...data.operations, ...next.operations] }
}
