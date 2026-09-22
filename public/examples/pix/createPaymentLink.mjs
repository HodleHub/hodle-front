import { requestHodle } from './requestHodle.mjs'

/**
 * @typedef {import('./requestHodle.mjs').RequestConfig & { name: string, priceCents: number }} CreatePaymentLinkArgs
 * @typedef {{ success: true, productId: string, slug: string, url: string }} CreatePaymentLinkSuccess
 * @typedef {{ success: false, error: string, status: number }} CreatePaymentLinkError
 * @typedef {CreatePaymentLinkSuccess | CreatePaymentLinkError} CreatePaymentLinkResult
 */

/** Publishes a product using the account's existing settlement settings.
 * @param {CreatePaymentLinkArgs} args
 * @returns {Promise<CreatePaymentLinkResult>}
 */
export const createPaymentLink = async (args) => {
  const result = await requestHodle({
    ...args,
    path: '/api/checkout/products',
    method: 'POST',
    body: { name: args.name, priceCents: args.priceCents, stock: null, askTaxId: true, askNote: false },
  })

  if (result.success === false) {
    return result
  }

  const data = result.payload.data

  if (!data || typeof data !== 'object' || !('product' in data)) {
    return { success: false, error: 'Unexpected product envelope; inspect products before retrying', status: 0 }
  }

  const product = data.product

  if (!product || typeof product !== 'object' || !('id' in product) || !('slug' in product) || typeof product.id !== 'string' || typeof product.slug !== 'string' || !product.slug) {
    return { success: false, error: 'Unexpected product response; inspect products before retrying', status: 0 }
  }

  return { success: true, productId: product.id, slug: product.slug, url: `https://checkout.hodle.com.br/pay/${encodeURIComponent(product.slug)}` }
}
