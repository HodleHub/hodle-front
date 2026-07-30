import { TopicPage } from '../../types/topic'
import { realOnchain } from './realOnchain'
import { pagarPixComUsdt } from './pagarPixComUsdt'
import { apiPixStablecoin } from './apiPixStablecoin'
import { walletAutoCustodial } from './walletAutoCustodial'
import { paraAgentesDeIa } from './paraAgentesDeIa'
import { lightningParaPix } from './lightningParaPix'
import { comprarBitcoinComPix } from './comprarBitcoinComPix'

export const topics: TopicPage[] = [
  realOnchain,
  pagarPixComUsdt,
  lightningParaPix,
  comprarBitcoinComPix,
  apiPixStablecoin,
  walletAutoCustodial,
  paraAgentesDeIa,
]
