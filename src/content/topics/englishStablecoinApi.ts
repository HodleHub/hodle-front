import type { TopicPage, TopicSection } from '../../types/topic'
import { pageUpdatedAt } from '../pageUpdatedAt'
import { assetRows, volumeTiers } from '../pricing/pricingTables'
import { sandboxQuote } from '../sandboxQuote'

const section = (id: string, heading: string, body: string, extra: Partial<TopicSection> = {}): TopicSection => ({
  id, heading, body, kind: 'PROSE', bullets: [], icons: [], comparison: null, code: null, image: null, ...extra,
})

export const stablecoinApiLinks = [
  { label: 'Stablecoin API overview', href: '/en/stablecoin-api' },
  { label: 'USDT to BRL via Pix', href: '/en/usdt-to-brl' },
  { label: 'USDC to BRL via Pix', href: '/en/usdc-to-brl' },
]

const pricing = section('pricing', 'Stablecoin API pricing',
  'API payouts have their own pricing, which can vary by account, asset, network and enabled flow. Check the fee and total debit in the beneficiary-linked quote. When executed with quoteId, the payout uses that quote’s conditions. The commercial schedule below applies only to operations covered by a proposal or contract adopting it; its BRL 0.75 minimum does not automatically apply to API payouts.', {
    kind: 'COMPARISON',
    comparison: {
      headers: ['Monthly volume (BRL)', 'Commercial service fee'],
      rows: volumeTiers.map((tier, index) => [
        ['Up to 100,000', 'Above 100,000 to 300,000', 'Above 300,000 to 800,000', 'Above 800,000 to 2 million', 'Above 2 million to 5 million', 'Above 5 million'][index],
        tier.fee.replace(',', '.'),
      ]),
    },
    links: [{ label: 'Full pricing and conditions (Portuguese)', href: '/precos' }],
  })

const quickstart = section('sandbox', 'Sandbox quickstart: request a quote',
  'Create a separate account at app-sandbox.hodle.com.br and issue a test key. Set HODLE_SANDBOX_API_KEY on your backend, then run this curl request for BRL 100 into USDC via Base. A quote is indicative: it does not execute a payment or lock a rate. Supported sandbox operations use Base Sepolia test tokens and simulate Pix; sandbox rates are not production prices.', {
    kind: 'CODE',
    code: { ...sandboxQuote, label: 'cURL · sandbox quote · no payment execution' },
    links: [{ label: 'Sandbox guide', href: 'https://docs.hodle.com.br/docs/sandbox' }],
  })

const base: Pick<TopicPage, 'apiSchema' | 'language' | 'changeFrequency' | 'priority' | 'kicker' | 'heroIcons' | 'ctaSubhead' | 'ctaPrimary' | 'ctaSecondary' | 'faqSubhead' | 'ogImage'> = {
  apiSchema: true, language: 'en', changeFrequency: 'monthly', priority: 0.8,
  kicker: 'STABLECOIN INFRASTRUCTURE FOR DEVELOPERS',
  heroIcons: [{ src: '/usdt.svg', label: 'USDT' }, { src: '/usdc.svg', label: 'USDC' }, { src: '/pix.svg', label: 'Pix' }],
  ctaSubhead: 'Test with a separate sandbox account before applying for production verification and flow permissions.',
  ctaPrimary: { label: 'Start in the sandbox', href: 'https://app-sandbox.hodle.com.br' },
  ctaSecondary: { label: 'Read the API docs', href: 'https://docs.hodle.com.br' },
  faqSubhead: 'Practical questions before integrating.', ogImage: '/og-image-v2.png',
}

const translations = (slug: string): Record<string, string> => ({ en: `/${slug}`, 'x-default': `/${slug}` })

const related = [
  ...stablecoinApiLinks,
  { label: 'Brazil Pix integration deep dive', href: '/en/pix-stablecoin-api' },
  { label: 'Developer resources (Portuguese)', href: '/desenvolvedores' },
  { label: 'Pricing (Portuguese)', href: '/precos' },
  { label: 'API documentation', href: 'https://docs.hodle.com.br' },
]

export const englishStablecoinApi: TopicPage = {
  ...base, slug: 'en/stablecoin-api', translations: translations('en/stablecoin-api'),
  title: 'Stablecoin API for Brazil: Pix on-ramp, off-ramp and wallets',
  h1: 'Stablecoin API for Pix on-ramps, off-ramps and wallets',
  description: 'Evaluate Hodle’s stablecoin API for Brazil: Pix on-ramps, stablecoin-funded payouts, wallet authorization, pricing and a sandbox curl quickstart.',
  keywords: ['stablecoin API', 'stablecoin API Brazil', 'stablecoin wallets API'], primaryKeyword: 'stablecoin API',
  updatedAt: pageUpdatedAt.stablecoinApi,
  subhead: 'Connect BRL payments and digital assets through a REST API. Evaluate the objects, signing requirements, pricing and test environment before integrating Hodle into your fintech.',
  sections: [
    section('overview', 'What a stablecoin API does', 'A stablecoin API lets software request quotes, connect fiat payments to digital assets and track transfers. Hodle connects Brazil’s Pix to on-ramp and off-ramp flows and wallets. This overview helps you evaluate the integration; the Brazil Pix guide covers the payment flows in detail.', {
      links: [{ label: 'Explore the Brazil Pix API flows', href: '/en/pix-stablecoin-api' }],
    }),
    section('objects', 'Core objects: quote, pay-in, payout, wallet and webhook', 'Think of these as integration concepts; the endpoint reference defines the request and response fields.', {
      kind: 'COMPARISON', comparison: { headers: ['Object', 'Role in your integration'], rows: [
        ['Quote', 'POST /api/quote returns indicative pricing without payment execution or a locked rate.'],
        ['Pay-in', 'POST /api/deposit/asset starts the on-ramp flow for an available asset and network.'],
        ['Payout', 'POST /api/wallet/payout starts a stablecoin-funded Pix payout; track its transactionId and status.'],
        ['Wallet', 'In the PIN-based flow, supply walletPin and protectedSymmetricKey for the selected source wallet. An API key alone does not authorize signing.'],
        ['Webhook', 'An event used to reconcile operation state. Verify signatures and deduplicate before updating orders or balances.'],
      ] },
    }),
    section('idempotency', 'Idempotency and webhooks', 'Build idempotent processing around persisted operation identifiers and deduplicated events. An accepted request is not settlement confirmation. If a submission times out, resolve the existing operation before submitting another payment. Verify webhook signatures and check the expected final state before releasing an order. Consult the endpoint documentation for retry semantics rather than assuming a universal idempotency header.', {
      links: [{ label: 'Webhook catalogue and signatures', href: 'https://docs.hodle.com.br/docs/webhooks' }, { label: 'Payout reference', href: 'https://docs.hodle.com.br/docs/wallet-payout' }],
    }),
    section('assets', 'Supported assets and networks', 'The published asset list includes the networks below. Availability is specific to the asset, account and operation: this is not a promise that every endpoint supports every listed network. Documented Pix payout examples include USDT on Polygon or Tron and USDC on Base.', {
      kind: 'COMPARISON', comparison: { headers: ['Stablecoin', 'Published networks; confirm support for your flow'], rows: assetRows.filter((row) => ['USDT', 'USDC'].includes(row.asset)).map((row) => [row.asset, row.networks]) },
    }),
    pricing, quickstart,
    section('production', 'Evaluate production access and wallet authorization', 'Hodle supplies software and API infrastructure. Production requires applicable individual or business verification and flow enablement. In the PIN-based API flow, the server temporarily unlocks the selected wallet key in memory to sign; your platform must protect wallet and subaccount credentials. Sandbox access does not approve production access.', {
      links: [{ label: 'Developer resources', href: '/desenvolvedores' }, { label: 'Wallet authorization reference', href: 'https://docs.hodle.com.br/docs/wallet-keys' }],
    }),
  ],
  faq: [
    { question: 'What is a stablecoin API?', answer: 'A stablecoin API is an interface for software to request quotes, connect payments to stablecoins and track operations. Hodle offers Pix on-ramp and off-ramp flows and wallet infrastructure for Brazil.' },
    { question: 'How do I choose a stablecoin API?', answer: 'Check the exact asset, network and payment flow, wallet signing model, verification requirements, quote and fee breakdown, event handling and sandbox coverage. Test pending states and unknown submission results before production.' },
    { question: 'How much does a stablecoin API cost?', answer: 'Hodle publishes a commercial volume schedule from 2% to 0.5%, with a BRL 0.75 minimum, for covered operations. API payouts have their own pricing; confirm your account terms and the beneficiary-linked quote rather than applying the commercial table to every endpoint.' },
    { question: 'Can I convert USDT to BRL by API?', answer: 'Yes. Hodle supports stablecoin-funded Pix payouts, with documented USDT examples on Polygon and Tron. Availability depends on your account, verification and enabled flow. Confirm the beneficiary and quote before execution.' },
    { question: 'Is there a sandbox?', answer: 'Yes. Register separately at app-sandbox.hodle.com.br and issue a test key. Supported operations use Base Sepolia test tokens and simulate Pix without moving reais. Production access requires separate approval.' },
    { question: 'Does a quote execute a stablecoin payment?', answer: 'No. POST /api/quote returns indicative pricing without executing a payment or locking a rate. Follow the documented flow for beneficiary confirmation, authorization, execution and status tracking.' },
  ],
  related: related.filter((link) => link.href !== '/en/stablecoin-api'),
}

const conversionTopic = (asset: 'USDT' | 'USDC'): TopicPage => {
  const slug = `en/${asset.toLowerCase()}-to-brl`

  const network = asset === 'USDT' ? 'Polygon or Tron' : 'Base'

  return {
    ...base, slug, translations: translations(slug),
    title: `${asset} to BRL: convert via Pix by API`,
    h1: `Convert ${asset} to BRL via Pix by API`,
    description: `Use ${asset} balances to fund BRL Pix payouts with Hodle’s API. Review the beneficiary, account-specific quote, wallet authorization and sandbox before integrating.`,
    keywords: [`${asset} to BRL`, `${asset} Pix API`], primaryKeyword: `${asset} to BRL`,
    updatedAt: asset === 'USDT' ? pageUpdatedAt.usdtToBrl : pageUpdatedAt.usdcToBrl,
    subhead: `Build a ${asset}-funded Pix payout flow for your product. Documented examples use ${asset} on ${network}; confirm support for your account and operation before sending.`,
    sections: [
      section('how-it-works', `How ${asset} to BRL payouts work`, `The off-ramp uses a supported ${asset} balance to fund a BRL Pix payment. Production requires verification and permission for the flow. The recipient and quote need confirmation before the wallet signs the payout.`, {
        kind: 'STEPS', bullets: [
          'Select the source wallet and obtain its protected key through POST /api/wallet/keys, following wallet PIN and subaccount scope requirements.',
          'Confirm the beneficiary through POST /api/wallet/payout/beneficiary. Review the fee, BRL payment amount and total debit in the linked quote.',
          'Authorize POST /api/wallet/payout with the required wallet credentials. When executing with quoteId, use the linked quote’s conditions.',
          'Persist transactionId, check GET /api/wallet/payout/{transactionId}, verify webhook signatures and reconcile the final state before marking the payment complete.',
        ], links: [{ label: 'Stablecoin to Pix guide', href: 'https://docs.hodle.com.br/docs/flow-stable-pix' }],
      }),
      { ...pricing, heading: `${asset} to BRL fees and quotes` },
      section('networks', `${asset} networks for Pix payouts`, `Documented payout examples use ${asset} on ${network}. The wider platform asset list is not a guarantee of support for this payout flow. Confirm your account’s enabled asset and network, and use its quote instead of assuming a fixed exchange rate.`, {
        links: [{ label: 'Payout endpoint reference', href: 'https://docs.hodle.com.br/docs/wallet-payout' }],
      }),
      { ...quickstart, body: `${quickstart.body} This shared quote example tests BRL to USDC; it does not execute a ${asset}-to-BRL payout. Follow the sandbox coverage guide when testing the payout flow.` },
    ],
    faq: [
      { question: `Can I convert ${asset} to BRL via Pix by API?`, answer: `Yes. Hodle supports stablecoin-funded Pix payouts, with documented ${asset} examples on ${network}. Your account must have the required verification and flow permissions.` },
      { question: `How much does a ${asset} to BRL payout cost?`, answer: 'API payout pricing can vary by account, asset, network and enabled flow. Check the fee and total debit in the beneficiary-linked quote. The commercial volume schedule and its minimum do not automatically apply to this endpoint.' },
      { question: 'Is the exchange rate fixed by the quote example?', answer: 'No. POST /api/quote is indicative and does not lock a rate or execute a payment. Review the beneficiary-linked payout quote before authorization; execution with quoteId uses that quote’s conditions.' },
      { question: 'Can I test without sending real Pix payments?', answer: 'Yes. Use a separate sandbox registration and test key. Supported operations use Base Sepolia test tokens and simulate Pix; check the sandbox guide for flow coverage. Production assets and permissions are separate.' },
      { question: 'How do I know the Pix payout has completed?', answer: 'Keep the transactionId, check the payout status and verify webhook signatures. Deduplicate events and wait for the expected final state. Request acceptance or a timeout alone does not establish the payment outcome.' },
    ],
    related: related.filter((link) => link.href !== `/${slug}`),
  }
}

export const englishUsdtToBrl = conversionTopic('USDT')

export const englishUsdcToBrl = conversionTopic('USDC')

export const englishStablecoinTopics = [englishStablecoinApi, englishUsdtToBrl, englishUsdcToBrl]
