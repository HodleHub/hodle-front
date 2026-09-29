/** Public BRS purchase example: cents, Solana, and no third-party destination. */
export const brsDepositExample = {
  endpoint: 'https://api.hodle.com.br/api/deposit/asset',
  body: {
    value: 10000,
    asset: 'BRS',
    network: 'solana',
    externalId: 'my-brs-order-123',
  },
} as const
