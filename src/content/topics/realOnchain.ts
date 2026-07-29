import { TopicPage } from '../../types/topic'

export const realOnchain: TopicPage = {
  slug: 'real-onchain',
  title: 'Real tokenizado: stablecoin de real com Pix',
  h1: 'Receba em Pix, guarde em real onchain',
  description:
    'Como funciona o real tokenizado na prática: entra Pix, sai BRLA na rede Polygon, converte em dólar digital e volta em Pix — por API ou pela plataforma.',
  keywords: [
    'real tokenizado',
    'real onchain',
    'stablecoin de real',
    'stablecoin brasileira',
    'BRLA',
    'BRZ',
    'BRL1',
    'Drex',
    'Pix',
    'Polygon',
  ],
  primaryKeyword: 'real tokenizado',
  updatedAt: '2026-07-25',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'Real onchain',
  subhead:
    'O real tokenizado é o real que circula em blockchain. Na Hodle você entra por Pix, recebe BRLA na rede Polygon e converte para dólar digital quando quiser.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/brla.png', label: 'BRLA' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
  ],
  ctaSubhead:
    'Receba em Pix, guarde em real onchain na Hodle.',
  ctaPrimary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  ctaSecondary: { label: 'Criar minha conta', href: 'https://app.hodle.com.br' },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'O que é real tokenizado',
      body: 'Real tokenizado é um token emitido em blockchain com paridade de 1 para 1 com o real: cada unidade equivale a R$ 1 e é lastreada em reais mantidos fora da rede. O termo real onchain descreve o mesmo ativo pelo lado da operação — o real que você movimenta em rede pública, 24 horas por dia, sem depender do horário bancário. Na Hodle, o real onchain é o BRLA, emitido pela Avenia.',
      bullets: [
        'Paridade de 1 para 1 com o real, com lastro mantido fora da rede',
        'Liquidação em segundos, 24 horas por dia, inclusive no fim de semana',
        'Emissão privada: não é o Drex e não é moeda do Banco Central',
        'Na Hodle, circula na rede Polygon',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Como funciona na prática: do Pix ao real onchain',
      body: 'O caminho é o mesmo que a sua operação já faz em reais. A diferença é que, no meio do trajeto, o dinheiro passa a circular em rede pública.',
      bullets: [
        'Você envia um Pix para a sua conta na Hodle.',
        'O valor vira BRLA na rede Polygon, com paridade de 1 para 1 com o real.',
        'Com saldo em real onchain você transfere para endereços e parceiros ou converte para dólar digital em USDT e USDC.',
        'Quando precisar de reais na conta bancária, a saída também é Pix.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'onde-circula',
      kind: 'ASSETS',
      heading: 'Onde o real onchain circula na Hodle',
      body: 'A Hodle opera o BRLA na rede Polygon, ao lado do dólar digital e do Pix. É a combinação que permite receber em real, guardar em dólar e pagar em stablecoin sem trocar de plataforma.',
      bullets: [
        'BRLA: real onchain na rede Polygon',
        'USDT e USDC: dólar digital para proteger poder de compra',
        'Pix: entrada e saída em reais, 24 horas por dia',
        'Compra e recebimento de BRLA disponíveis para contas com KYC completo',
      ],
      icons: [
        { src: '/brla.png', label: 'BRLA' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/pix.svg', label: 'Pix' },
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
      ],
      comparison: null,
      code: null,
    },
    {
      id: 'brla-brz-brl1',
      kind: 'COMPARISON',
      heading: 'BRLA, BRZ e BRL1: qual é a diferença?',
      body: 'Existem mais de dez stablecoins de real em circulação. Todas prometem paridade com o real; o que muda é quem emite, o que dá lastro e onde o token circula.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Token', 'Quem emite', 'Lastro', 'Na Hodle'],
        rows: [
          [
            'BRLA',
            'Avenia, empresa privada brasileira',
            'Reais em reserva, 1 para 1',
            'Sim: compra, recebimento e transferência por API na Polygon',
          ],
          [
            'BRZ',
            'Transfero, empresa privada',
            'Reais em reserva, 1 para 1',
            'Não',
          ],
          [
            'BRL1',
            'Consórcio de Foxbit, Bitso, Mercado Bitcoin e Cainvest',
            'Reais em reserva, 1 para 1',
            'Não',
          ],
          [
            'Drex',
            'Banco Central do Brasil',
            'Emissão soberana',
            'Não: é infraestrutura do Banco Central, não uma stablecoin',
          ],
        ],
      },
      code: null,
    },
    {
      id: 'vs-drex',
      kind: 'PROSE',
      heading: 'Real onchain e Drex não são a mesma coisa',
      body: 'O Drex é o projeto de moeda digital do Banco Central: emissão soberana, infraestrutura própria e acesso intermediado por instituições autorizadas. O real tokenizado é emissão privada, com lastro em reais custodiados, e já circula em redes públicas. Um não substitui o outro — enquanto o Drex avança, o real onchain já liquida pagamentos em segundos.',
      bullets: [
        'Drex: moeda digital do Banco Central, com emissão soberana',
        'Real tokenizado: emissão privada com lastro em reais',
        'Pix é meio de pagamento, não moeda: os três convivem',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'rendimento',
      kind: 'PROSE',
      heading: 'Real onchain rende?',
      body: 'Depende do token. Algumas stablecoins de real são lastreadas em títulos públicos e repassam parte do rendimento das reservas para quem carrega o token. Outras, como o BRLA, são lastreadas em reais e não distribuem rendimento por si. Existe ainda rendimento oferecido por protocolos onchain, que carrega o risco do protocolo, não do emissor. A Hodle não oferece produto de rendimento em real hoje.',
      bullets: [
        'Stablecoin lastreada em títulos públicos pode repassar o rendimento das reservas',
        'BRLA é lastreado em reais e não distribui rendimento',
        'Rendimento em protocolo onchain é risco do protocolo, não do emissor',
        'A Hodle não oferece produto de rendimento em real hoje',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'api',
      kind: 'CODE',
      heading: 'Real onchain no seu produto, por API',
      body: 'A mesma operação existe como API: sua aplicação recebe por Pix, movimenta BRLA na rede Polygon e converte para dólar digital sem passar por tela. A transferência on-chain é assinada e submetida pelo servidor, com gas patrocinado, então seu time não gerencia carteira nem taxa de rede. O acesso à API de transferência é liberado por conta.',
      bullets: [
        'Transferência de BRLA, USDT e USDC na Polygon em um endpoint',
        'Gas patrocinado: sem gerenciar saldo de rede',
        'Webhooks para conciliar entrada e saída',
        'Documentação em docs.hodle.com.br',
      ],
      icons: [],
      comparison: null,
      code: {
        label: 'Transferir real onchain',
        language: 'cURL',
        snippet: `curl -X POST https://api.hodle.com.br/api/wallet/transfer \\
  -H "Authorization: Bearer $HODLE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "asset": "BRLA",
    "amount": "50",
    "recipientAddress": "0x520ec4aD3BdC629D13a49dB558D7F6813f3696aD",
    "reference": "pedido-9f3c1a",
    "walletPin": "1234",
    "protectedSymmetricKey": "AoofiKHyVRLvdrknnXzo..."
  }'

# 200 -> { "success": true, "data": { "txHash": "0xd3c1...", "asset": "BRLA", "amount": "50" } }`,
      },
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre real tokenizado e real onchain.',
  faq: [
    {
      question: 'O que é real tokenizado?',
      answer:
        'Real tokenizado é um token em blockchain com paridade de 1 para 1 com o real, lastreado em reais mantidos fora da rede. Ele permite transferir reais em segundos, 24 horas por dia, sem depender do horário bancário. Na Hodle, o real tokenizado é o BRLA, emitido pela Avenia e operado na rede Polygon.',
    },
    {
      question: 'Qual a diferença entre real onchain e Drex (real digital)?',
      answer:
        'O Drex é a moeda digital do Banco Central, com emissão soberana e acesso intermediado por instituições autorizadas. O real onchain é emissão privada, com lastro em reais custodiados, e já circula em redes públicas. São infraestruturas diferentes e podem coexistir.',
    },
    {
      question: 'Como comprar BRLA com Pix?',
      answer:
        'Você envia um Pix para a sua conta na Hodle e escolhe BRLA como ativo; o valor é creditado na rede Polygon. A compra de BRLA está disponível para contas com KYC completo.',
    },
    {
      question: 'Quem emite o BRLA e o que dá lastro ao token?',
      answer:
        'O BRLA é emitido pela Avenia, empresa privada brasileira, com lastro em reais mantidos em reserva na proporção de 1 para 1. Não é moeda do Banco Central e não tem garantia soberana.',
    },
    {
      question: 'Real onchain rende?',
      answer:
        'O BRLA não distribui rendimento, porque é lastreado em reais. Existem stablecoins de real lastreadas em títulos públicos que repassam parte do rendimento das reservas, e existe rendimento oferecido por protocolos onchain, que carrega o risco do protocolo. A Hodle não oferece produto de rendimento em real hoje.',
    },
  ],
  related: [
    { label: 'Perguntas frequentes', href: '/faq' },
    { label: 'Preços e taxas', href: '/articles/precos' },
    { label: 'Artigos', href: '/articles' },
  ],
  ogImage: '/og-image-v2.png',
}
