export type VolumeTier = {
  volume: string
  fee: string
}

export type AssetRow = {
  asset: string
  networks: string
}

/**
 * Published service fee by monthly volume. Rendered by `/precos` and by the
 * markdown representation of the same page, so the two can never disagree.
 */
export const volumeTiers: VolumeTier[] = [
  { volume: 'Até R$ 100 mil', fee: '2,00%' },
  { volume: 'Acima de R$ 100 mil até R$ 300 mil', fee: '1,60%' },
  { volume: 'Acima de R$ 300 mil até R$ 800 mil', fee: '1,25%' },
  { volume: 'Acima de R$ 800 mil até R$ 2 milhões', fee: '0,95%' },
  { volume: 'Acima de R$ 2 milhões até R$ 5 milhões', fee: '0,70%' },
  { volume: 'Acima de R$ 5 milhões', fee: '0,50%' },
]

export const assetRows: AssetRow[] = [
  { asset: 'USDT', networks: 'Polygon, Base, Solana, Tron, Arbitrum, Spark' },
  { asset: 'USDC', networks: 'Base, Polygon, Solana, Arbitrum, Spark' },
  { asset: 'Bitcoin', networks: 'Lightning, on-chain, Liquid' },
]
