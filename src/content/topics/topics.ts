import { TopicPage } from '../../types/topic'
import { realOnchain } from './realOnchain'
import { pagarPixComUsdt } from './pagarPixComUsdt'
import { apiPixStablecoin } from './apiPixStablecoin'

export const topics: TopicPage[] = [realOnchain, pagarPixComUsdt, apiPixStablecoin]
