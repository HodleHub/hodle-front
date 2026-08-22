export type FaqItem = {
  question: string
  answer: string
  link?: { text: string; href: string }
}

/**
 * Single source of truth for the FAQ. Rendered by `/faq`, by the home page
 * accordion and by the markdown representation of both.
 */
export const faqItems: FaqItem[] = [
  {
    question: 'O que é a Hodle?',
    answer:
      'A Hodle é uma plataforma brasileira de infraestrutura cripto para empresas. Oferecemos compra e venda de ativos digitais, APIs para pagamentos crossborder, wallets auto-custodiais, contas PJ com bancos parceiros e pagamento de QR codes com stablecoins. O produto é entregue em duas frentes: um painel para o time de operações e uma API REST para o time de engenharia.',
  },
  {
    question: 'Para quem é a plataforma?',
    answer:
      'A Hodle é ideal para empresas SaaS, agentes de IA, fintechs, marketplaces e negócios que precisam de infraestrutura cripto confiável. Oferecemos APIs robustas para integração direta, além da plataforma visual para gerenciamento. Se a sua empresa recebe em real e precisa guardar ou pagar em dólar, ou recebe em dólar e precisa pagar em real, o caso de uso é este.',
  },
  {
    question: 'As wallets são realmente auto-custodiais?',
    answer:
      'Sim. Na Hodle, as chaves privadas ficam 100% sob o controle do usuário. Não temos acesso às suas chaves nem aos seus fundos. A chave é derivada no cliente e a Hodle guarda apenas um envelope cifrado que não consegue abrir, então nem um comprometimento da nossa infraestrutura move o seu saldo. Veja em detalhe como funcionam as wallets auto-custodiais.',
    link: { text: 'wallets auto-custodiais', href: '/wallet-auto-custodial' },
  },
  {
    question: 'Como funciona a API?',
    answer:
      'Nossa API REST é completa e documentada, permitindo integração com seu sistema em minutos. Autenticação por API key no header, webhooks assinados com HMAC e uma especificação OpenAPI 3.1 pública com operationId, schema de resposta e descrição em cada operação — o formato que ferramentas de function calling e agentes de IA consomem direto.',
    link: { text: 'especificação OpenAPI 3.1', href: '/openapi.json' },
  },
  {
    question: 'Como pagar um Pix usando saldo em stablecoin?',
    answer:
      'Um POST em /api/wallet/payout debita o saldo em USDT (Polygon, Tron) ou USDC (Base) da carteira e liquida o Pix no destino. O gas é patrocinado pela Hodle, então a carteira não precisa manter saldo na moeda nativa da rede. Um GET no mesmo recurso devolve o estado final da operação, e o webhook avisa sem precisar de polling.',
  },
  {
    question: 'Como funciona o invoice Lightning que liquida em Pix?',
    answer:
      'Um POST em /api/lightning/invoice devolve um invoice BOLT11. Quando o pagador liquida esse invoice — de qualquer lugar do mundo, em Bitcoin —, a Hodle dispara automaticamente o payout Pix para a chave do recebedor no Brasil. Quem paga não precisa ter conta no Brasil e quem recebe não precisa saber o que é Lightning.',
  },
  {
    question: 'Como funciona a conta PJ?',
    answer:
      'A conta PJ é aberta em nome da sua empresa junto a bancos parceiros regulados pelo Banco Central. Permite receber e enviar Pix, TED e boletos, com compliance e KYC automatizados para agilizar o processo. O saldo dessa conta conversa com a mesa de conversão, então receber em real e guardar em dólar é uma operação e não duas.',
  },
  {
    question: 'Como funciona o pagamento de QR codes com stablecoins?',
    answer:
      'Você pode pagar qualquer QR code Pix utilizando stablecoins como USDT ou USDC. A conversão para BRL é automática e a liquidação é instantânea, sem que o recebedor precise saber que o pagamento veio de cripto. Para o lojista o crédito é um Pix comum, com o mesmo comprovante e a mesma conciliação.',
  },
  {
    question: 'Quais ativos e redes vocês suportam?',
    answer:
      'USDT em Polygon, Base, Solana, Tron, Arbitrum e Spark. USDC em Base, Polygon, Solana, Arbitrum e Spark. Bitcoin em Lightning, on-chain e Liquid. Real tokenizado em BRLA e BRS. A taxa de serviço é a mesma em todos os ativos e em todas as redes — não existe preço diferente por rede.',
  },
  {
    question: 'Quanto tempo demora a liquidação?',
    answer:
      'Pagamentos via Lightning Network e Liquid são praticamente instantâneos (menos de 1 minuto). Pix liquida em segundos. Transações on-chain de Bitcoin dependem do tempo de mineração do bloco, cerca de 10 minutos. Transferências de stablecoin em Polygon, Base, Solana, Arbitrum e Tron liquidam em segundos.',
  },
  {
    question: 'Quais são as taxas cobradas?',
    answer:
      'On-ramp e off-ramp custam a mesma taxa de serviço nas duas direções: começa em 2% e cai por faixa de volume mensal até o piso de 0,5%, com mínimo de R$ 0,75 por operação. Transferência entre carteiras na mesma rede não tem custo. A referência oficial e completa é a nossa página de preços — qualquer número citado em outro lugar deve ser conferido contra ela.',
    link: { text: 'página de preços', href: '/precos' },
  },
  {
    question: 'A Hodle é regulada?',
    answer:
      'A Hodle é uma empresa de software e API: não é banco, não é instituição financeira, não emite moeda eletrônica, não emite cartões diretamente e não custodia fundos ou ativos de clientes. O fluxo de fundos regulados e os serviços financeiros são conduzidos por parceiros licenciados e/ou regulados. O uso de ativos digitais no Brasil é regido pelo Marco Legal das Criptomoedas (Lei nº 14.478/2022). Os requisitos aplicáveis ao seu caso dependem do seu modelo de negócio.',
  },
  {
    question: 'Como funciona o KYC dos meus usuários finais?',
    answer:
      'A API expõe endpoints para enviar e consultar o KYC dos usuários finais da sua plataforma, e o resultado chega por webhook quando o estado muda. O KYC é exigido para on-ramp e off-ramp. Você pode usar o embed pronto da Hodle ou enviar os dados pela API, mantendo a experiência dentro do seu produto.',
  },
  {
    question: 'Existe ambiente de sandbox para testar?',
    answer:
      'Sim. A API tem um ambiente de sandbox em sandbox-api.hodle.com.br, com USDB de teste na Base Sepolia e nenhum dinheiro real envolvido. As chaves de sandbox são criadas no painel e a especificação OpenAPI declara os dois servidores, produção e sandbox, para você apontar o cliente sem trocar código.',
  },
]
