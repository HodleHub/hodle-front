import { TopicPage } from '../../types/topic'

export const paraAgentesDeIa: TopicPage = {
  slug: 'para-agentes-de-ia',
  primaryKeyword: 'api para agentes de IA pagamento',
  title: 'API de pagamento para agentes de IA',
  h1: 'Trilhos que um agente opera sozinho',
  description:
    'API REST para agentes de IA moverem dinheiro: pagar Pix com stablecoin, emitir invoice Lightning, transferir entre redes e reconciliar por webhook.',
  keywords: [
    'api para agentes de IA pagamento',
    'pagamentos agênticos',
    'agente de IA pix',
    'api pix para agentes',
    'automatizar pagamento com IA',
    'agente autônomo stablecoin',
  ],
  updatedAt: '2026-07-29',
  changeFrequency: 'monthly',
  priority: 0.8,
  ogImage: '/og-image-v2.png',
  kicker: 'AGENTES DE IA',
  subhead:
    'Um agente precisa de operações determinísticas, autorização por chave e confirmação assinada. É o que a API entrega: dispara o pagamento, lê o estado, recebe o webhook. Sem clique humano no meio.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/ln.svg', label: 'Lightning' },
    { src: '/polygon.svg', label: 'Polygon' },
  ],
  ctaSubhead:
    'Comece pela documentação ou fale com o time da Hodle.',
  ctaPrimary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br',
  },
  ctaSecondary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  sections: [
    {
      id: 'o-que-muda',
      kind: 'PROSE',
      heading: 'O que um agente precisa que uma pessoa não precisa',
      body: 'Uma pessoa tolera ambiguidade: lê a tela, entende o erro, tenta de novo. Um agente não. Ele precisa de operação com resultado determinístico, de um jeito de provar que tem autorização para mover fundo, e de um sinal confiável de que a operação terminou.\n\nA API da Hodle é construída nesses três pontos. O disparo é um POST com corpo em JSON. A autorização é a chave do usuário, buscada uma vez e cacheada. O fim da operação chega por webhook assinado, não por polling esperançoso.',
      bullets: [
        'Operações com resultado determinístico, não fluxo de tela.',
        'Autorização por chave do usuário final, não por sessão de navegador.',
        'Confirmação por webhook assinado com HMAC, não por polling.',
        'Gas patrocinado nas redes EVM: o agente não administra saldo de rede.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'o-que-o-agente-faz',
      kind: 'STEPS',
      heading: 'O que o agente consegue fazer pela API',
      body: 'Cada item é uma chamada documentada. Nenhum passo exige interface.',
      bullets: [
        'Pagar um Pix com saldo em stablecoin. POST /api/wallet/payout, financiado por USDT em Polygon ou Tron, ou USDC em Base.',
        'Receber de fora do Brasil. POST /api/lightning/invoice emite uma BOLT11 que, ao ser paga, liquida em Pix em segundos.',
        'Converter reais em ativo. O deposit-asset entrega em Lightning, USDT, USDC ou USDCE num endereço.',
        'Mover entre redes. USDT para qualquer endereço em Polygon, Base ou Tron, com gas patrocinado nas EVM.',
        'Ler estado. Endereços por rede, saldo por ativo e extrato paginado de operações.',
        'Reconciliar. Webhook assinado com HMAC em depósito, payout e mudança de KYC.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'autorizacao',
      kind: 'PROSE',
      heading: 'Quem autoriza o que',
      body: 'Há dois níveis. A API key identifica a sua plataforma e define o escopo do que ela alcança. A chave do usuário final é o que permite mover os fundos dele: sem ela não há payout nem transfer, por construção.\n\nIsso significa que o desenho do seu agente decide o limite dele. Você escolhe quais usuários ele alcança, quais operações expõe e o que faz antes de cada disparo. A plataforma não decide isso no seu lugar, e a Hodle não movimenta fundo de usuário sem a chave dele.',
      bullets: [
        'API key com escopo por plataforma, nos headers.',
        'Chave do usuário final necessária para qualquer movimentação.',
        'A fronteira do agente é o desenho do seu fluxo, não uma configuração nossa.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'exemplo',
      kind: 'CODE',
      heading: 'A chamada que o agente faz',
      body: 'A mesma API que roda o painel da Hodle é a que o agente consome. Autenticação por header, corpo em JSON, resposta com o estado da operação.',
      bullets: [
        'POST /api/wallet/payout — paga Pix com saldo em stablecoin.',
        'POST /api/lightning/invoice — invoice BOLT11 que liquida em Pix ao ser paga.',
        'GET wallet-keys — o protectedSymmetricKey do usuário, cacheado uma vez.',
        'POST wallet-transfer — USDT em Polygon, Base ou Tron.',
      ],
      icons: [],
      comparison: null,
      code: null,
    },
    {
      id: 'redes',
      kind: 'ASSETS',
      heading: 'Ativos e redes que o agente alcança',
      body: 'USDT em Polygon e Tron, USDC em Base, as duas também em Arbitrum e Spark. Bitcoin on-chain e por Lightning. Reais entram e saem por Pix.',
      bullets: [],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/btc.svg', label: 'Bitcoin' },
        { src: '/ln.svg', label: 'Lightning' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/base.png', label: 'Base' },
        { src: '/arbitrum.svg', label: 'Arbitrum' },
        { src: '/spark.svg', label: 'Spark' },
      ],
      comparison: null,
      code: null,
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre agentes de IA operando pagamentos pela API.',
  faq: [
    {
      question: 'Um agente de IA pode pagar um Pix?',
      answer:
        'Sim, pela API. O agente dispara um POST em /api/wallet/payout com a chave Pix e o valor, financiado por saldo em USDT ou USDC, e acompanha o resultado por webhook assinado. Não há tela no caminho.',
    },
    {
      question: 'Como o agente é autorizado a movimentar fundos?',
      answer:
        'Por duas chaves. A API key identifica a sua plataforma e define o escopo. A chave do usuário final, buscada uma vez e cacheada, é o que autoriza mover os fundos dele — sem ela não há payout nem transfer.',
    },
    {
      question: 'O que impede o agente de gastar além do previsto?',
      answer:
        'O desenho do seu fluxo. Você decide quais usuários o agente alcança, quais operações expõe e quais validações rodam antes de cada disparo. A Hodle não movimenta fundo de usuário sem a chave dele, mas o limite de comportamento do agente é responsabilidade de quem o constrói.',
    },
    {
      question: 'Precisa de MCP para integrar?',
      answer:
        'Não. A Hodle expõe uma API REST, e é isso que a documentação cobre. Não publicamos servidor MCP hoje. Qualquer agente que faça chamada HTTP autenticada integra direto.',
    },
    {
      question: 'Quais operações o agente consegue fazer?',
      answer:
        'Pagar Pix com stablecoin, emitir invoice Lightning que liquida em Pix, converter reais em Lightning, USDT, USDC ou USDCE, transferir USDT entre Polygon, Base e Tron, ler endereços, saldos e extrato, e receber webhook de cada mudança de estado.',
    },
  ],
  related: [
    { label: 'API Pix stablecoin', href: '/api-pix-stablecoin' },
    { label: 'Carteiras auto-custodiais', href: '/wallet-auto-custodial' },
    { label: 'Glossário', href: '/glossario' },
    { label: 'Documentação da API', href: 'https://docs.hodle.com.br' },
  ],
}