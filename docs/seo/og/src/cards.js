// Manifesto dos cards OG. Uma entrada por URL de hodle.com.br.
// Copy derivada do h1/subhead real de cada pagina — nada inventado.
// Numeros permitidos: 2% (taxa publicada em /precos) e 43 (termos do glossario).

const CARDS = {
  'pagar-pix-com-usdt': {
    l1: 'Pague um Pix',
    l2: 'com saldo em USDT',
    flow: ['usdt', 'convert', 'pix'],
    feats: [
      { k: 'pix', v: '24/7', i: 'bolt' },
      { k: 'usdt', v: 'Polygon e Tron', i: 'coins' },
      { k: 'usdc', v: 'Base', i: 'coins' },
      { k: 'gas', v: 'patrocinado', i: 'shield' },
    ],
  },
  'lightning-para-pix': {
    l1: 'Cobre em Lightning,',
    l2: 'liquide em Pix',
    flow: ['ln', 'convert', 'pix'],
    feats: [
      { k: 'invoice', v: 'BOLT11', i: 'code' },
      { k: 'liquidação', v: 'em segundos', i: 'bolt' },
      { k: 'alcance', v: 'de qualquer lugar', i: 'network' },
      { k: 'nó próprio', v: 'não precisa', i: 'shield' },
    ],
  },
  'api-pix-stablecoin': {
    l1: 'Uma API.',
    l2: 'Pix, dólar e stablecoins.',
    flow: ['pix', 'convert', 'usdt'],
    feats: [
      { k: 'rest', v: 'autenticada', i: 'code' },
      { k: 'webhook', v: 'HMAC', i: 'shield' },
      { k: 'gas', v: 'patrocinado', i: 'bolt' },
      { k: 'redes', v: 'multi-rede', i: 'network' },
    ],
  },
  'para-agentes-de-ia': {
    l1: 'Trilhos que um agente',
    l2: 'opera sozinho',
    flow: ['code', 'convert', 'pix'],
    feats: [
      { k: 'rest', v: 'sem interface', i: 'code' },
      { k: 'chave', v: 'por usuário', i: 'key' },
      { k: 'webhook', v: 'assinado', i: 'shield' },
      { k: 'gas', v: 'patrocinado', i: 'bolt' },
    ],
  },
  'wallet-auto-custodial': {
    l1: 'Carteiras em que',
    l2: 'a chave é do usuário',
    flow: ['key', 'network', 'usdt'],
    feats: [
      { k: 'chaves', v: 'do usuário', i: 'key' },
      { k: 'custódia', v: 'nenhuma', i: 'shield' },
      { k: 'redes', v: 'multi-rede', i: 'network' },
      { k: 'acesso', v: 'por API', i: 'code' },
    ],
  },
  'comprar-bitcoin-com-pix': {
    l1: 'Reais entram por Pix,',
    l2: 'sai bitcoin',
    flow: ['pix', 'convert', 'btc'],
    feats: [
      { k: 'lightning', v: 'instantâneo', i: 'bolt' },
      { k: 'on-chain', v: 'liquidação', i: 'network' },
      { k: 'liquid', v: 'sidechain', i: 'drop' },
      { k: 'entrega', v: 'no seu endereço', i: 'key' },
    ],
  },
  'comprar-usdt-com-pix': {
    l1: 'Reais entram por Pix,',
    l2: 'sai dólar digital',
    flow: ['pix', 'convert', 'usdt'],
    feats: [
      { k: 'usdt', v: 'Polygon e Tron', i: 'coins' },
      { k: 'usdc', v: 'Base', i: 'coins' },
      { k: 'usdce', v: 'disponível', i: 'drop' },
      { k: 'entrega', v: 'no seu endereço', i: 'key' },
    ],
  },
  'real-onchain': {
    l1: 'Receba em Pix,',
    l2: 'guarde em real onchain',
    flow: ['pix', 'convert', 'network'],
    feats: [
      { k: 'lastro', v: 'em reais', i: 'shield' },
      { k: 'pix', v: '24/7', i: 'bolt' },
      { k: 'redes', v: 'públicas', i: 'network' },
      { k: 'liquidação', v: 'on-chain', i: 'drop' },
    ],
  },
  precos: {
    l1: 'Taxa de serviço,',
    l2: 'publicada e única',
    flow: ['usdt', 'convert', 'btc'],
    feats: [
      { k: 'usdt', v: '2%', i: 'coins' },
      { k: 'usdc', v: '2%', i: 'coins' },
      { k: 'bitcoin', v: '2%', i: 'coins' },
      { k: 'gas', v: 'patrocinado', i: 'shield' },
    ],
  },
  glossario: {
    l1: 'Os termos de stablecoin',
    l2: 'e pagamentos',
    flow: ['code', 'network', 'pix'],
    feats: [
      { k: 'termos', v: '43', i: 'code' },
      { k: 'trilhos', v: 'Pix e Lightning', i: 'bolt' },
      { k: 'redes', v: 'e ativos', i: 'network' },
      { k: 'regulação', v: 'definida', i: 'shield' },
    ],
  },
  ai: {
    l1: 'Política de uso',
    l2: 'por IA',
    flow: ['code', 'network', 'shield'],
    feats: [
      { k: 'rastreio', v: 'permitido', i: 'network' },
      { k: 'citação', v: 'permitida', i: 'code' },
      { k: 'dados', v: 'verificáveis', i: 'shield' },
      { k: 'atribuição', v: 'hodle.com.br', i: 'key' },
    ],
  },
}
