import { TopicPage } from '../../types/topic'
import { realOnchain } from './realOnchain'
import { pagarPixComUsdt } from './pagarPixComUsdt'
import { apiPixStablecoin } from './apiPixStablecoin'
import { walletAutoCustodial } from './walletAutoCustodial'
import { paraAgentesDeIa } from './paraAgentesDeIa'
import { lightningParaPix } from './lightningParaPix'
import { comprarBitcoinComPix } from './comprarBitcoinComPix'
import { comprarUsdtComPix } from './comprarUsdtComPix'
import { receberPixEmStablecoin } from './receberPixEmStablecoin'
import { offshore } from './offshore'
import { gatewayDePagamentoCripto } from './gatewayDePagamentoCripto'
import { comoAceitarCriptomoedas } from './comoAceitarCriptomoedas'
import { pagarFornecedoresComUsdc } from './pagarFornecedoresComUsdc'

import { pix } from './pix'
import { apiPix } from './apiPix'
import { cobrancaPix } from './cobrancaPix'
import { linkDePagamentoPix } from './linkDePagamentoPix'
import { conciliacaoPix } from './conciliacaoPix'
import { baas } from './baas'
import { contaDigitalPj } from './contaDigitalPj'

export const topics: TopicPage[] = [
  pix,
  apiPix,
  cobrancaPix,
  linkDePagamentoPix,
  conciliacaoPix,
  baas,
  contaDigitalPj,
  realOnchain,
  pagarPixComUsdt,
  lightningParaPix,
  comprarBitcoinComPix,
  comprarUsdtComPix,
  receberPixEmStablecoin,
  apiPixStablecoin,
  walletAutoCustodial,
  paraAgentesDeIa,
  offshore,
  gatewayDePagamentoCripto,
  comoAceitarCriptomoedas,
  pagarFornecedoresComUsdc,
]
