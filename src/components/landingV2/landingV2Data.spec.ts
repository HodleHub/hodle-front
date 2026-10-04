import { execFileSync } from 'node:child_process'
import { describe, expect, it } from 'vitest'
import { buildCurlLines, buildFlowRecipe, FLOW_SOURCES, type FlowSource, type FlowStep } from './landingV2Data'

type RequestStep = Extract<FlowStep, { kind: 'request' }>

const sourceFor = (asset: string, network: string): FlowSource => ({
  ...FLOW_SOURCES[0], asset, network,
})

const requestsFor = (source: FlowSource): RequestStep[] =>
  buildFlowRecipe(source).steps.filter((step): step is RequestStep => step.kind === 'request')

const requestAt = (steps: RequestStep[], path: string): RequestStep => {
  const step = steps.find((item) => item.path === path)
  if (!step) throw new Error(`Missing request: ${path}`)
  return step
}

// Contract assertions below come from the public wallet-keys, wallet-payout,
// beneficiary and lightning-invoice docs, checked 2026-10-04. No live payments.
describe('off-ramp recipes', () => {
  it.each([
    ['USDT', 'polygon'], ['USDT', 'solana'], ['USDC', 'base'],
  ])('creates and spends the same selected %s wallet on %s', (asset, network) => {
    const steps = requestsFor(sourceFor(asset, network))
    const create = requestAt(steps, '/api/wallet/create')
    const keys = requestAt(steps, '/api/wallet/keys')
    const quote = requestAt(steps, '/api/wallet/payout/beneficiary')
    const payout = requestAt(steps, '/api/wallet/payout')
    const status = requestAt(steps, '/api/wallet/payout/$TRANSACTION_ID')

    expect(create.method).toBe('POST')
    expect(create.body).toMatchObject({ network, walletPin: '$WALLET_PIN', subAccountId: '$SUBACCOUNT_ID' })
    expect(keys.method).toBe('POST')
    expect(keys.body).toEqual({ walletId: '$WALLET_ID', subAccountId: '$SUBACCOUNT_ID' })
    expect(payout.body).toMatchObject({
      walletId: keys.body?.walletId,
      subAccountId: create.body?.subAccountId,
      network,
      asset,
      walletPin: create.body?.walletPin,
      protectedSymmetricKey: '$PROTECTED_SYMMETRIC_KEY',
      externalId: '$EXTERNAL_ID',
    })
    expect(quote.body).toMatchObject({ network, asset, value: 10000, pixKey: '$PIX_KEY', pixKeyType: 'EMAIL' })
    expect(payout.body?.quoteId).toBe('$QUOTE_ID')
    expect(payout.body?.value).toBe(quote.body?.value)
    expect(payout.body?.subAccountId).toBe(quote.body?.subAccountId)
    expect(payout.body).not.toHaveProperty('qrCode')
    expect(status.method).toBe('GET')
    expect(status.body).toBeNull()
    expect(status.webhooks).toEqual(expect.arrayContaining(['PAYOUT_SUCCESSFUL', 'PAYOUT_FAILED']))
    expect(steps.indexOf(quote)).toBeLessThan(steps.indexOf(payout))
    expect(steps.indexOf(payout)).toBeLessThan(steps.indexOf(status))
    expect(steps.some((step) => step.path === '/api/quote')).toBe(false)
  })

  it('uses an existing Tron wallet without sending unsupported wallet/create requests', () => {
    const steps = requestsFor(sourceFor('USDT', 'tron'))
    expect(steps.some((step) => step.path === '/api/wallet/create')).toBe(false)
    const read = requestAt(steps, '/api/wallet/get')
    expect(read.method).toBe('POST')
    expect(read.body?.walletId).toBe('$WALLET_ID')
    expect(requestAt(steps, '/api/wallet/payout').body).toMatchObject({
      network: 'tron', asset: 'USDT', walletId: read.body?.walletId,
      walletPin: '$WALLET_PIN', protectedSymmetricKey: '$PROTECTED_SYMMETRIC_KEY',
    })
  })

  it('uses a Lightning invoice and settlement events instead of a stablecoin wallet', () => {
    const recipe = buildFlowRecipe(sourceFor('BTC', 'lightning'))
    const requests = requestsFor(sourceFor('BTC', 'lightning'))
    expect(recipe.supported).toBe(true)
    expect(requests).toHaveLength(1)
    expect(requests[0]).toMatchObject({
      method: 'POST', path: '/api/lightning/invoice',
      body: { value: 10000, pixKey: '$PIX_KEY', pixKeyType: 'EMAIL', subAccountId: '$SUBACCOUNT_ID' },
    })
    expect(Object.keys(requests[0].body ?? {}).sort()).toEqual(['pixKey', 'pixKeyType', 'subAccountId', 'value'])
    const actions = recipe.steps.filter((step) => step.kind === 'instruction')
    expect(actions).toHaveLength(2)
    expect(actions[1].webhooks).toEqual(['PAYOUT_SUCCESSFUL', 'PAYOUT_FAILED', 'PAYOUT_REFUNDED'])
    expect(actions.flatMap(buildCurlLines)).toEqual([])
  })

  it.each([
    ['BTC', 'bitcoin'], ['BTC', 'polygon'], ['USDT', 'base'],
    ['USDC', 'tron'], ['USDC', 'lightning'], ['USDT', 'arbitrum'], ['BRLA', 'solana'],
  ])('does not invent an outbound contract for %s on %s', (asset, network) => {
    const recipe = buildFlowRecipe(sourceFor(asset, network))
    expect(recipe.supported).toBe(false)
    expect(recipe.steps).toEqual([])
    expect(recipe.docsUrl).toBe('https://docs.hodle.com.br/docs/assets')
  })

  it('never substitutes the inverse Pix-to-crypto deposit operation into a Pix payout', () => {
    for (const source of FLOW_SOURCES) {
      expect(requestsFor(source).some((step) => step.path.startsWith('/api/deposit/asset'))).toBe(false)
    }
    expect(buildFlowRecipe(sourceFor('BTC', 'bitcoin')).supported).toBe(false)
    expect(buildFlowRecipe(sourceFor('BTC', 'lightning')).supported).toBe(true)
  })
})

describe('generated cURL', () => {
  // Shadow curl with a shell function: capture its arguments and stdin, never access the API.
  const evaluate = (step: FlowStep, env: Record<string, string> = {}): string => execFileSync('bash', ['-c', [
    'curl() { printf "%s\\n" "$@"; cat; }',
    buildCurlLines(step).map((line) => line.text).join('\n'),
  ].join('\n')], {
    encoding: 'utf8',
    env: {
      PATH: process.env.PATH,
      NODE_ENV: 'test',
      HODLE_API_KEY: 'test-api-key',
      SUBACCOUNT_ID: 'subaccount-test',
      WALLET_ID: '6a4d263d4cc67674bf72a3c9',
      WALLET_PIN: '123456',
      PROTECTED_SYMMETRIC_KEY: 'test-protected-key',
      QUOTE_ID: 'quote-test',
      EXTERNAL_ID: 'order-test',
      PIX_KEY: 'owner@example.com',
      TRANSACTION_ID: 'transaction-test',
      ...env,
    },
  })

  it.each(FLOW_SOURCES.filter((source) => buildFlowRecipe(source).supported))('expands variables into valid request JSON for $label', (source) => {
    for (const request of requestsFor(source)) {
      const output = evaluate(request)
      expect(output).toContain('Authorization: Bearer test-api-key')
      expect(output).not.toMatch(/\$[A-Z_]+/)
      if (!request.body) {
        expect(output).toContain('/api/wallet/payout/transaction-test')
        continue
      }
      const payload = JSON.parse(output.slice(output.indexOf('{')))
      expect(Object.keys(payload)).toEqual(Object.keys(request.body))
      if ('value' in payload) expect(payload.value).toBe(10000)
      if ('walletPin' in payload) expect(payload.walletPin).toMatch(/^\d{6}$/)
      if ('walletId' in payload) expect(payload.walletId).toBe('6a4d263d4cc67674bf72a3c9')
      if ('externalId' in payload) expect(payload.externalId).toBe('order-test')
    }
  })

  it.each([
    'order"quoted',
    'order\\test',
    'order\nnext\r\nline\ttab',
    'pedido-á-日本語',
    '$HOME $(printf substituted) `printf substituted`',
  ])('preserves the exact idempotency key %j through shell and JSON serialization', (externalId) => {
    const request = requestAt(requestsFor(FLOW_SOURCES[0]), '/api/wallet/payout')
    const output = evaluate(request, { EXTERNAL_ID: externalId })
    const payload = JSON.parse(output.slice(output.indexOf('{')))

    expect(payload.externalId).toBe(externalId)
    expect(payload.value).toBe(10000)
    expect(payload.walletPin).toBe('123456')
    expect(output).toContain('--data-binary\n@-')
  })

  it('serializes literal text without shell expansion or broken JavaScript quoting', () => {
    const literal = 'quoted "value" with \\slash,\nnewline and $HOME $(printf substituted)'
    const step: RequestStep = {
      kind: 'request', title: 'Serialization check', description: '',
      method: 'POST', path: '/example', body: { externalId: literal, value: 10000 },
    }
    const output = evaluate(step)
    const payload = JSON.parse(output.slice(output.indexOf('{')))

    expect(payload).toEqual(step.body)
    expect(buildCurlLines(step)[0].text).toContain('Node.js; exporte')
  })
})
