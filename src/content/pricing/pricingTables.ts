export type VolumeTier = {
  volume: string
  fee: string
}

export type AssetRow = {
  asset: string
  networks: string
}

/**
 * Commercial schedule for operations covered by a proposal or contract that
 * adopts it. API and wallet flows may use their own pricing rules.
 */
export const volumeTiers: VolumeTier[] = [
  { volume: 'Até R$ 100 mil', fee: '2,00%' },
  { volume: 'Acima de R$ 100 mil até R$ 300 mil', fee: '1,60%' },
  { volume: 'Acima de R$ 300 mil até R$ 800 mil', fee: '1,25%' },
  { volume: 'Acima de R$ 800 mil até R$ 2 milhões', fee: '0,95%' },
  { volume: 'Acima de R$ 2 milhões até R$ 5 milhões', fee: '0,70%' },
  { volume: 'Acima de R$ 5 milhões', fee: '0,50%' },
]

export const pricingPolicy = {
  description:
    'Preços da Hodle por operação: tabela comercial por volume, regras específicas de API e Lightning, taxas de serviço e cotação aplicável à sua conta.',
  volumeScope:
    'Esta tabela comercial apresenta faixas de 2% a 0,5% por volume, com mínimo de R$ 0,75, para operações abrangidas por uma proposta ou contrato que adote essas condições. Confirme os fluxos e ativos incluídos. Ela não define automaticamente a tarifa de toda conta, API ou wallet.',
  payout:
    'O payout por API tem precificação própria, que pode variar conforme a conta, o ativo, a rede e o fluxo habilitado. Confira a taxa e o total debitado na cotação vinculada ao beneficiário; quando executada com quoteId, a operação usa as condições dessa cotação. O mínimo da tabela comercial não deve ser aplicado automaticamente a esse endpoint.',
  lightning:
    'Lightning para Pix usa a regra específica de emissão da invoice. Confira a taxa, o valor que o destinatário receberá e o total a pagar na resposta da operação antes de quitar a invoice. Essa tarifa não deve ser deduzida da tabela comercial por volume nem de outra superfície da wallet.',
}

export const assetRows: AssetRow[] = [
  { asset: 'USDT', networks: 'Polygon, Base, Solana, Tron, Arbitrum, Spark' },
  { asset: 'USDC', networks: 'Base, Polygon, Solana, Arbitrum, Spark' },
  { asset: 'Bitcoin', networks: 'Lightning, on-chain, Liquid' },
]
