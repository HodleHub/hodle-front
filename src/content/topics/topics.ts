import { TopicPage } from '../../types/topic'
import { realOnchain } from './realOnchain'
import { pagarPixComUsdt } from './pagarPixComUsdt'
import { apiPixStablecoin } from './apiPixStablecoin'
import { walletAutoCustodial } from './walletAutoCustodial'
import { paraAgentesDeIa } from './paraAgentesDeIa'

export const topics: TopicPage[] = [
  realOnchain,
  pagarPixComUsdt,
  apiPixStablecoin,
  walletAutoCustodial,
  paraAgentesDeIa,
]
