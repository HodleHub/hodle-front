import type { TopicPage } from '../../types/topic'
import { sandboxQuote } from '../sandboxQuote'

export const englishPixStablecoin: TopicPage = {
  slug: 'en/pix-stablecoin-api',
  language: 'en',
  translations: {
    'pt-BR': '/api-pix-stablecoin',
    en: '/en/pix-stablecoin-api',
  },
  title: 'Brazil Pix stablecoin API: on-ramp, off-ramp and sandbox',
  h1: 'Connect Brazil’s Pix to your stablecoin product',
  description:
    'Build Pix on-ramps and off-ramps with Hodle’s REST API. Compare custody, published fees, KYC/KYB, supported flows and sandbox integration.',
  keywords: [
    'Brazil Pix stablecoin API',
    'Brazil on-ramp off-ramp',
    'stablecoin neobank Brazil',
  ],
  primaryKeyword: 'api pix stablecoin',
  updatedAt: '2026-09-19T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'FOR DEVELOPERS AND PRODUCT TEAMS',
  subhead:
    'Hodle provides software and API infrastructure for businesses connecting Brazilian real payments with digital assets. Add Pix collections, stablecoin-funded payouts and self-custodial wallets to your fintech or neobank.',
  heroIcons: [
    {
      src: '/pix.svg',
      label: 'Pix',
    },
    {
      src: '/usdt.svg',
      label: 'USDT',
    },
    {
      src: '/usdc.svg',
      label: 'USDC',
    },
    {
      src: '/base.png',
      label: 'Base',
    },
  ],
  ctaSubhead:
    'Create a separate sandbox account, issue a test key and validate your integration before applying for production access.',
  ctaPrimary: {
    label: 'Start in the sandbox',
    href: 'https://app-sandbox.hodle.com.br',
  },
  ctaSecondary: {
    label: 'Read the API docs',
    href: 'https://docs.hodle.com.br',
  },
  sections: [
    {
      id: 'on-ramp-off-ramp',
      kind: 'COMPARISON',
      heading: 'Which Pix and stablecoin flow do you need?',
      body: 'An on-ramp converts Brazilian reais into digital assets. An off-ramp converts digital asset balances into BRL for a Pix payment. Availability depends on the specific asset, network, account and operation.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Criterion', 'Availability and conditions'],
        rows: [
          [
            'Pix collection by API',
            'POST /api/deposit/asset starts the on-ramp flow. Select an asset and network available to your account and track delivery.',
          ],
          [
            'Stablecoin-funded Pix payout',
            'POST /api/wallet/payout. Documented examples include USDT on Polygon or Tron and USDC on Base. Verification and flow permissions apply.',
          ],
          [
            'Automatic delivery to an external wallet',
            'A static Pix key or QR can trigger USDC delivery on Base. Requires verification, commercial enablement and a whitelisted default external wallet. Production only.',
          ],
          [
            'Pix to USDT checkout',
            'A hosted checkout uses a dynamic Pix charge. It is separate from the automatic static-key flow.',
          ],
          [
            'Lightning to Pix',
            'POST /api/lightning/invoice starts the invoice flow. The sandbox invoice cannot be paid.',
          ],
        ],
      },
      code: null,
      image: null,
      links: [
        {
          label: 'On-ramp reference',
          href: 'https://docs.hodle.com.br/docs/deposit-asset',
        },
        {
          label: 'Payout reference',
          href: 'https://docs.hodle.com.br/docs/wallet-payout',
        },
      ],
    },
    {
      id: 'operating-model',
      kind: 'COMPARISON',
      heading: 'Custody, verification and responsibilities',
      body: 'Hodle is a software company, not a bank or a custodian. In self-custodial wallets, users control the keys. Licensed and/or regulated partners execute regulated funds flows and financial services. References reviewed on September 19, 2026.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Criterion', 'Availability and conditions'],
        rows: [
          [
            'Custody',
            'Users control their self-custodial wallet keys. Hodle does not custody customer funds or digital assets.',
          ],
          [
            'KYC and KYB',
            'Production access requires the applicable individual or business verification and flow enablement. Sandbox access does not approve production access.',
          ],
          [
            'Sandbox',
            'Separate registration at app-sandbox.hodle.com.br and a test API key. Supported operations use Base Sepolia test tokens; Pix is simulated.',
          ],
          [
            'Production',
            'Use api.hodle.com.br with a production key, an approved account and the required permissions. Network support is specific to each operation.',
          ],
          [
            'White-label and neobank products',
            'Your business owns its customer experience and operating model. Using Hodle does not transfer a partner’s licence to your business.',
          ],
        ],
      },
      code: null,
      image: null,
      links: [
        {
          label: 'Terms and responsibilities (Portuguese)',
          href: '/termos',
        },
        {
          label: 'Sandbox coverage',
          href: 'https://docs.hodle.com.br/docs/sandbox',
        },
        {
          label: 'KYC and third-party operations',
          href: 'https://docs.hodle.com.br/docs/kyc',
        },
      ],
    },
    {
      id: 'pricing',
      kind: 'COMPARISON',
      heading: 'Published fees for Pix on-ramps and off-ramps',
      body: 'Hodle publishes a service fee schedule. On-ramp and off-ramp fees range from 2% to 0.5%, with a BRL 0.75 minimum per operation. The previous calendar month’s settled volume sets the next month’s tier; both directions count together. A signed negotiated contract takes precedence.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Criterion', 'Availability and conditions'],
        rows: [
          [
            'On-ramp and off-ramp',
            '2% up to BRL 100,000 monthly volume. Intermediate tiers: 1.6%, 1.25%, 0.95% and 0.7%. 0.5% above BRL 5 million. Minimum BRL 0.75 per operation.',
          ],
          [
            'Service fee example',
            'A BRL 1,000 operation at the 2% tier has a BRL 20 service fee. This is not an exchange-rate quote or a promised net token amount.',
          ],
          [
            'Named business account issuance',
            'One-time BRL 15,000 setup to enable issuance. This setup is not required for on-ramp or off-ramp use.',
          ],
          [
            'Asset conversion and cross-network transfers',
            'No single public price table; confirm the pair, network and commercial terms before execution.',
          ],
        ],
      },
      code: null,
      image: null,
      links: [
        {
          label: 'Full pricing table (Portuguese)',
          href: '/precos',
        },
        {
          label: 'Quote and fee breakdown API',
          href: 'https://docs.hodle.com.br/docs/quote',
        },
      ],
    },
    {
      id: 'integration',
      kind: 'STEPS',
      heading: 'From your test key to the first operation',
      body: 'Start with a sandbox quote. Validate rejected requests, pending states and reconciliation before seeking production approval. Supported route paths remain the same; credentials, data and permissions are separate.',
      bullets: [
        'Create a separate sandbox account and issue a test key. Keep the key on your backend.',
        'Use Authorization: Bearer YOUR_API_KEY. X-API-Key is also accepted. Never put API keys in a URL, frontend code or logs.',
        'Call POST /api/quote for indicative pricing. It neither executes a payment nor locks a rate.',
        'For payouts, obtain the selected wallet’s protected key with POST /api/wallet/keys. Follow the documented wallet PIN and subaccount scope requirements, and cache protected key material per wallet.',
        'Confirm the beneficiary and the payout quote through POST /api/wallet/payout/beneficiary before asking the user to approve the payment.',
        'Persist the transactionId, check GET /api/wallet/payout/{transactionId} and verify webhook signatures. An accepted request is not settlement confirmation.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        {
          label: 'Sandbox guide',
          href: 'https://docs.hodle.com.br/docs/sandbox',
        },
        {
          label: 'Wallet keys and selection',
          href: 'https://docs.hodle.com.br/docs/wallet-keys',
        },
        {
          label: 'Confirm the beneficiary',
          href: 'https://docs.hodle.com.br/docs/wallet-payout-beneficiary',
        },
      ],
    },
    {
      id: 'example',
      kind: 'CODE',
      heading: 'A documented sandbox request',
      body: 'Set the environment variable to your sandbox key on your backend. This request quotes BRL 100 into USDC via Base without moving funds. Sandbox rates must not be used as production prices.',
      bullets: [],
      icons: [],
      comparison: null,
      code: { ...sandboxQuote, label: 'cURL · sandbox quote · no payment execution' },
      image: null,
      links: [
        {
          label: 'Quote parameters and response',
          href: 'https://docs.hodle.com.br/docs/quote',
        },
      ],
    },
    {
      id: 'reconciliation',
      kind: 'COMPARISON',
      heading: 'Handle pending states, failures and retries',
      body: 'Release an order only after its expected final state. Request acceptance, Pix receipt and on-chain delivery are separate stages.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Criterion', 'Availability and conditions'],
        rows: [
          [
            'Pending operation',
            'Keep its identifier and check status. Do not create a new payment because the existing one is pending.',
          ],
          [
            'Duplicate webhook',
            'Verify the signature and deduplicate the event before changing an order or balance.',
          ],
          [
            '401 or 403',
            'Check the host and key environment. A 403 may indicate missing flow permissions or verification.',
          ],
          ['429', 'Respect Retry-After when present and apply backoff.'],
          [
            'Timeout after submission',
            'An unknown result is not a failed payment. Resolve the existing operation before considering a new submission.',
          ],
        ],
      },
      code: null,
      image: null,
      links: [
        {
          label: 'Webhook catalogue and signatures',
          href: 'https://docs.hodle.com.br/docs/webhooks',
        },
        {
          label: 'Stablecoin to Pix integration guide',
          href: 'https://docs.hodle.com.br/docs/flow-stable-pix',
        },
      ],
    },
  ],
  faqSubhead: 'Questions to answer before choosing your infrastructure.',
  faq: [
    {
      question: 'Does Hodle offer on-ramp and off-ramp APIs in Brazil?',
      answer:
        'Yes. The REST API connects Pix collection to digital asset delivery and supports Pix payouts funded from stablecoin balances. Availability depends on the asset, network, flow permissions and verification.',
    },
    {
      question: 'Does Hodle custody customer assets?',
      answer:
        'No. Hodle provides software and self-custodial wallets with keys controlled by the user. Licensed and/or regulated partners execute regulated financial services and funds flows.',
    },
    {
      question: 'Are Hodle’s fees only available on request?',
      answer:
        'No. The published on-ramp and off-ramp service fees range from 2% to 0.5% by volume, with a BRL 0.75 minimum per operation. The complete schedule is on the pricing page. Asset conversions and cross-network transfers require confirmation of the applicable commercial terms.',
    },
    {
      question: 'Does the sandbox send real Pix payments?',
      answer:
        'No. Supported operations use test tokens on Base Sepolia and simulate the Pix leg. A separate sandbox registration and key are required. Production verification and module availability are independent.',
    },
    {
      question: 'Can I use every supported network for every API operation?',
      answer:
        'No. Confirm support for the exact asset, network and operation. For example, automatic static-key Pix collection delivers USDC on Base; it does not imply USDT or other-network support in that same flow.',
    },
    {
      question: 'Do I need a licence to build with the API?',
      answer:
        'Requirements depend on your business model. Hodle is a software company, not a bank or financial institution. An API integration does not replace legal assessment of your operation or transfer a partner’s licences to your business.',
    },
  ],
  related: [
    {
      label: 'API documentation',
      href: 'https://docs.hodle.com.br',
    },
    {
      label: 'Sandbox guide',
      href: 'https://docs.hodle.com.br/docs/sandbox',
    },
    {
      label: 'Full pricing (Portuguese)',
      href: '/precos',
    },
    {
      label: 'Neobank infrastructure (Portuguese)',
      href: '/neobank',
    },
    {
      label: 'Ler em português',
      href: '/api-pix-stablecoin',
    },
  ],
  ogImage: '/og-image-v2.png',
}
