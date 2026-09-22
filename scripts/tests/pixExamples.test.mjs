import assert from 'node:assert/strict'
import { createHmac } from 'node:crypto'
import test from 'node:test'
import { createPixDeposit } from '../../public/examples/pix/createPixDeposit.mjs'
import { getPixDeposit } from '../../public/examples/pix/getPixDeposit.mjs'
import { requestHodle } from '../../public/examples/pix/requestHodle.mjs'
import { verifyHodleWebhook } from '../../public/examples/pix/verifyHodleWebhook.mjs'
import { acceptDepositWebhook } from '../../public/examples/pix/acceptDepositWebhook.mjs'
import { readStatement } from '../../public/examples/pix/readStatement.mjs'
import { createPaymentLink } from '../../public/examples/pix/createPaymentLink.mjs'

const sandboxConfig = { baseUrl: 'https://sandbox-api.hodle.com.br', apiKey: 'hodle_test_example' }
const timestamp = '1790035200'
const secret = 'example-secret-for-local-tests-only'
const rawBody = Buffer.from('{"event":"DEPOSIT_ASSET_FAILED","data":{"eventId":"event-1","externalId":"order-1"}}')
const signature = createHmac('sha256', secret).update(`${timestamp}.`).update(rawBody).digest('hex')
const signedDelivery = { rawBody, signature, timestamp, secret, nowSeconds: Number(timestamp) }

test('deposit example sends centavos, Bearer auth and parses the top-level response', async () => {
  const result = await createPixDeposit({
    ...sandboxConfig,
    externalId: 'order-1',
    address: '0x1111111111111111111111111111111111111111',
    valueCents: 2500,
    fetchImpl: async (url, options) => {
      assert.equal(url, `${sandboxConfig.baseUrl}/api/deposit/asset`)
      assert.equal(options.headers.Authorization, 'Bearer hodle_test_example')
      assert.equal(options.redirect, 'error')
      assert.deepEqual(JSON.parse(options.body), {
        externalId: 'order-1', value: 2500, asset: 'USDC', network: 'base',
        address: '0x1111111111111111111111111111111111111111',
      })

      return Response.json({ success: true, externalId: 'order-1', qrCode: 'sandbox-br-code' })
    },
  })

  assert.deepEqual(result, { success: true, externalId: 'order-1', qrCode: 'sandbox-br-code' })
})

test('an uncertain POST is sent once and never retried automatically', async () => {
  const calls = []
  const result = await createPixDeposit({
    ...sandboxConfig, externalId: 'order-1', address: '0x1111111111111111111111111111111111111111', valueCents: 2500,
    fetchImpl: async (url) => {
      calls.push(url)

      throw new Error('Connection lost after sending request')
    },
  })

  assert.equal(calls.length, 1)
  assert.equal(result.success, false)
  assert.match(result.error, /unknown/)
})

test('deposit GET encodes externalId and preserves FIAT_PAID instead of treating it as delivery', async () => {
  const result = await getPixDeposit({
    ...sandboxConfig, externalId: 'order/1',
    fetchImpl: async (url) => {
      assert.match(url, /order%2F1$/)

      return Response.json({ success: true, data: { status: 'FIAT_PAID', transactionHash: null } })
    },
  })

  assert.equal(result.success, true)
  assert.equal(result.data.status, 'FIAT_PAID')
  assert.equal(result.data.transactionHash, null)
})

test('HTTP failures, malformed JSON and application failures do not become successes', async () => {
  const responses = [
    Response.json({ success: false }, { status: 409 }),
    Response.json({ success: false }, { status: 200 }),
    new Response('not-json', { status: 502 }),
  ]

  for (const response of responses) {
    const result = await requestHodle({ ...sandboxConfig, path: '/api/checkout/products', fetchImpl: async () => response })

    assert.equal(result.success, false)
  }
})

test('API credentials are not sent to an unrecognized base URL', async () => {
  const result = await requestHodle({
    apiKey: 'secret', baseUrl: 'https://example.com', path: '/api/account/statement',
    fetchImpl: async () => assert.fail('No HTTP call expected'),
  })

  assert.equal(result.success, false)
})

test('signature validation accepts exact bytes and rejects changed body, secret or timestamp', () => {
  assert.equal(verifyHodleWebhook(signedDelivery).success, true)
  assert.equal(verifyHodleWebhook({ ...signedDelivery, rawBody: Buffer.from(`${rawBody} `) }).success, false)
  assert.equal(verifyHodleWebhook({ ...signedDelivery, secret: 'different-secret' }).success, false)
  assert.equal(verifyHodleWebhook({ ...signedDelivery, timestamp: String(Number(timestamp) + 1) }).success, false)
})

test('signature validation rejects malformed hex, stale timestamps and excessive future skew', () => {
  assert.equal(verifyHodleWebhook({ ...signedDelivery, signature: `${signature}zz` }).success, false)
  assert.equal(verifyHodleWebhook({ ...signedDelivery, signature: '00' }).success, false)
  assert.equal(verifyHodleWebhook({ ...signedDelivery, timestamp: 'NaN' }).success, false)
  assert.equal(verifyHodleWebhook({ ...signedDelivery, nowSeconds: Number(timestamp) + 301 }).success, false)
  assert.equal(verifyHodleWebhook({ ...signedDelivery, nowSeconds: Number(timestamp) - 301 }).success, false)
})

test('duplicate signed deliveries share the durable-inbox key and are acknowledged twice', async () => {
  const persisted = new Map()
  const acceptOnce = async ({ key, payload }) => {
    if (persisted.has(key)) {
      return false
    }

    persisted.set(key, payload)

    return true
  }
  const args = { ...signedDelivery, accountId: 'merchant-1', acceptOnce }
  const results = await Promise.all([acceptDepositWebhook(args), acceptDepositWebhook(args)])

  assert.equal(persisted.size, 1)
  assert.deepEqual(results.map((result) => result.outcome).sort(), ['ACCEPTED', 'DUPLICATE'])
  assert.ok(results.every((result) => result.status === 200))
})

test('registration tests are ignored without side effects and forged real events are rejected', async () => {
  const acceptOnce = async () => assert.fail('Inbox must not be written')
  const registration = await acceptDepositWebhook({
    ...signedDelivery, accountId: 'merchant-1', acceptOnce,
    rawBody: Buffer.from('{"event":"WEBHOOK_TEST"}'), signature: '', secret: '',
  })
  const forged = await acceptDepositWebhook({ ...signedDelivery, accountId: 'merchant-1', acceptOnce, signature: '00'.repeat(32) })

  assert.equal(registration.outcome, 'TEST_IGNORED')
  assert.equal(forged.status, 401)
})

test('an inbox persistence failure is not acknowledged as processed', async () => {
  const result = await acceptDepositWebhook({
    ...signedDelivery, accountId: 'merchant-1',
    acceptOnce: async () => { throw new Error('Database unavailable') },
  })

  assert.equal(result.success, false)
  assert.equal(result.status, 503)
})

test('statement pagination preserves its window and all decimal-string amounts', async () => {
  const calls = []
  const result = await readStatement({
    ...sandboxConfig, from: '2026-09-01T00:00:00Z', to: '2026-09-02T00:00:00Z',
    fetchImpl: async (url) => {
      const query = new URL(url).searchParams

      calls.push(query.get('cursor'))
      assert.equal(query.get('from'), '2026-09-01T00:00:00Z')
      assert.equal(query.get('to'), '2026-09-02T00:00:00Z')
      assert.equal(query.get('limit'), '200')

      if (query.get('cursor')) {
        return Response.json({ success: true, data: { operations: [{ id: 'op-2', amount: '0.10000000', asset: 'USDC' }], nextCursor: null } })
      }

      return Response.json({ success: true, data: { operations: [{ id: 'op-1', amount: '25.00', asset: 'BRL' }], nextCursor: 'page-2' } })
    },
  })

  assert.deepEqual(calls, [null, 'page-2'])
  assert.equal(result.operations.length, 2)
  assert.equal(result.operations[1].amount, '0.10000000')
})

test('repeated cursors fail closed instead of looping or presenting a partial statement', async () => {
  const result = await readStatement({
    ...sandboxConfig, from: '2026-09-01T00:00:00Z', to: '2026-09-02T00:00:00Z',
    fetchImpl: async () => Response.json({ success: true, data: { operations: [], nextCursor: 'same' } }),
  })

  assert.equal(result.success, false)
  assert.match(result.error, /cursor/)
})

test('payment-link example uses nested product fields and does not override settlement settings', async () => {
  const result = await createPaymentLink({
    baseUrl: 'https://api.hodle.com.br', apiKey: 'hodle_live_example', name: 'Aula individual', priceCents: 12500,
    fetchImpl: async (url, options) => {
      assert.equal(url, 'https://api.hodle.com.br/api/checkout/products')
      assert.deepEqual(JSON.parse(options.body), { name: 'Aula individual', priceCents: 12500, stock: null, askTaxId: true, askNote: false })

      return Response.json({ success: true, data: { product: { id: 'product-1', slug: 'aula-example' } } }, { status: 201 })
    },
  })

  assert.deepEqual(result, { success: true, productId: 'product-1', slug: 'aula-example', url: 'https://checkout.hodle.com.br/pay/aula-example' })
})
