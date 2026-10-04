import { TopicPage } from '../../types/topic'

export const walletAutoCustodial: TopicPage = {
  slug: 'wallet-auto-custodial',
  title: 'Carteira auto-custodial para empresas',
  h1: 'Carteiras por API, com autorização de assinatura',
  description:
    'Integre carteiras ao seu produto por API REST. Entenda a autorização por PIN e chave protegida, as redes por operação e o pagamento de Pix com stablecoins.',
  keywords: [
    'carteira auto-custodial para empresas',
    'wallet as a service',
    'carteira cripto por api',
    'api de carteira multi-rede',
    'carteira auto-custodial api',
    'custódia das chaves pelo usuário',
  ],
  primaryKeyword: 'carteira auto-custodial para empresas',
  updatedAt: '2026-10-04T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'WALLETS',
  subhead:
    'A Hodle oferece carteiras e operações por API. No fluxo por PIN, a aplicação fornece as credenciais da carteira e o servidor assina temporariamente em memória. Conheça esse modelo antes de definir as permissões do seu produto.',
  heroIcons: [
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/base.png', label: 'Base' },
  ],
  ctaSubhead:
    'Defina a criação de carteiras, a guarda das credenciais e a autorização das operações no seu produto.',
  ctaPrimary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  ctaSecondary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br/docs/wallet-keys',
  },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'Como funciona a assinatura na integração por API',
      body: 'Auto-custódia diz respeito a quem controla a autorização de assinatura. Para avaliar uma integração, é necessário conhecer quem guarda as credenciais e onde a transação é assinada.\n\nNo fluxo por PIN documentado pela Hodle, a aplicação envia walletPin e protectedSymmetricKey da carteira de origem. O servidor usa essas credenciais para desbloquear a chave temporariamente em memória, assinar e descartá-la. A documentação descreve armazenamento de chaves criptografadas e exige as credenciais da origem a cada transferência.',
      bullets: [
        'A API key autentica a conta; isoladamente, ela não substitui o PIN e a chave protegida nesse fluxo.',
        'A assinatura desse fluxo ocorre no servidor, com as credenciais fornecidas pela aplicação.',
        'A plataforma integradora deve guardar e fornecer as credenciais corretas das subcontas e controlar sua utilização.',
        'O poder de movimentar depende das credenciais e permissões entregues à aplicação.',
      ],
      links: [
        { label: 'Modelo de assinatura de Wallet Transfer', href: 'https://docs.hodle.com.br/docs/wallet-transfer' },
        { label: 'Credenciais e seleção da carteira', href: 'https://docs.hodle.com.br/docs/wallet-keys' },
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'o-que-muda',
      kind: 'PROSE',
      heading: 'O que muda para a empresa que integra',
      body: 'A aplicação que possui as credenciais de assinatura pode solicitar movimentações no escopo permitido. Por isso, a integração deve definir quem pode autorizar uma operação, quais carteiras cada usuário alcança e como proteger PINs e chaves protegidas. A descrição técnica do fluxo não determina, por si só, o enquadramento jurídico de custódia.\n\nUse walletId para selecionar a origem e mantenha as credenciais dessa carteira associadas ao titular correto. Em transferências de subcontas, informe fromSubAccountId; em consultas e payouts, subAccountId. Uma carteira de outro titular ou escopo é rejeitada.',
      bullets: [
        'Defina autorização, limites e guarda de credenciais conforme o fluxo escolhido.',
        'Não registre PINs ou chaves protegidas em logs, prompts ou mensagens de erro.',
        'Use a carteira, o titular e as credenciais correspondentes em cada chamada.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'como-integrar',
      kind: 'STEPS',
      heading: 'Como integrar a carteira por API',
      body: 'Crie uma carteira apenas quando precisar de uma nova e guarde o walletId retornado. Consultas e movimentações devem reutilizar esse identificador.',
      bullets: [
        'Criar. POST /api/wallet/create exige walletPin de seis dígitos e documenta Polygon, Base e Solana. Informe subAccountId para uma carteira de cliente. Cada chamada bem-sucedida cria outra carteira.',
        'Consultar. POST /api/wallet/get seleciona a carteira pelo walletId e retorna seus dados.',
        'Obter a chave protegida. POST /api/wallet/keys retorna walletId, protectedSymmetricKey e email. Faça cache por walletId, junto do email do proprietário, e atualize quando a chave protegida daquela carteira mudar.',
        'Transferir. POST /api/wallet/transfer usa walletId, walletPin e a chave protegida da origem para enviar o ativo na rede selecionada. A Hodle patrocina o gas nas redes documentadas para esse endpoint.',
        'Acompanhar. O extrato devolve saldo por ativo e operações paginadas, e o webhook assinado com HMAC avisa cada mudança de estado.',
      ],
      links: [
        { label: 'Criar carteira e consultar Wallet Keys', href: 'https://docs.hodle.com.br/docs/wallet-keys' },
        { label: 'Consultar endereços e saldos', href: 'https://docs.hodle.com.br/docs/wallet-get' },
        { label: 'Transferir tokens pela API', href: 'https://docs.hodle.com.br/docs/wallet-transfer' },
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'redes',
      kind: 'ASSETS',
      heading: 'Transferências: ativos disponíveis por rede',
      body: 'A matriz abaixo é de POST /api/wallet/transfer. A operação envia tokens na mesma rede; não faz bridge. A criação de wallets, o payout Pix e o fluxo Lightning têm contratos próprios.',
      bullets: [
        'Polygon: USDT, USDC e BRLA.',
        'Base: USDC e BRLA.',
        'Solana: USDT, USDC e BRS. Para BRS, confirme o acesso às operações desse ativo pela API.',
        'BNB Chain: USDT BEP20, com mínimo de 1 USDT. Depende de disponibilidade na conta; não está disponível no sandbox.',
        'No sandbox, a criação EVM usa Base Sepolia. A criação de carteira Solana não está disponível nesse ambiente.',
      ],
      links: [
        { label: 'Redes, ativos e habilitações de Wallet Transfer', href: 'https://docs.hodle.com.br/docs/wallet-transfer' },
        { label: 'Redes de criação e comportamento no sandbox', href: 'https://docs.hodle.com.br/docs/wallet-keys' },
      ],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/base.png', label: 'Base' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'com-pix',
      kind: 'PROSE',
      heading: 'A carteira que também paga Pix',
      body: 'POST /api/wallet/payout inicia um Pix financiado pelo saldo elegível da carteira. O recebedor recebe reais; a seleção do ativo segue as regras de saldo e preferência do endpoint. A resposta inicial traz transactionId para acompanhamento e não confirma a liquidação.',
      bullets: [
        'Payout em Polygon: USDT, USDC e BRLA; em Base: USDC e BRLA; em Tron: USDT; em Solana: USDT, USDC e BRS.',
        'O payout depende de acesso às operações de pagamento Pix pela API. Confirme também a disponibilidade de Tron e BRS em Solana na sua conta.',
        'No fluxo por PIN, envie walletId, walletPin e protectedSymmetricKey correspondentes. A documentação também descreve um fluxo separado com assinatura do usuário para carteira própria.',
        'Lightning → Pix usa uma invoice BOLT11 em /api/lightning/invoice, separada da transferência e do payout de stablecoins.',
      ],
      links: [
        { label: 'Payout Pix: autorização, ativos e status', href: 'https://docs.hodle.com.br/docs/wallet-payout' },
        { label: 'Fluxo Lightning para Pix', href: 'https://docs.hodle.com.br/docs/lightning-invoice' },
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre carteiras auto-custodiais para empresas.',
  faq: [
    {
      question: 'O que é uma carteira auto-custodial?',
      answer:
        'Auto-custódia trata do controle da autorização de assinatura. Na integração por PIN da Hodle, a aplicação fornece walletPin e protectedSymmetricKey, e o servidor desbloqueia a chave temporariamente em memória para assinar. Avalie quem controla essas credenciais e permissões no seu produto.',
    },
    {
      question: 'Qual a diferença entre auto-custódia e MPC?',
      answer:
        'Auto-custódia trata de quem controla a assinatura; MPC é uma técnica de computação com múltiplas partes. Uma técnica não define sozinha quem pode autorizar movimentações. O fluxo descrito nesta página usa PIN e chave protegida conforme a documentação da Hodle; não pressupõe MPC.',
    },
    {
      question: 'A empresa que integra consegue acessar os fundos dos usuários?',
      answer:
        'Depende das credenciais e permissões que ela controla. No fluxo por PIN, uma integração com API key, walletPin e protectedSymmetricKey válidos pode solicitar movimentações da carteira autorizada. A API key sozinha não substitui essas credenciais. A plataforma deve proteger os PINs das subcontas e controlar cada autorização.',
    },
    {
      question: 'Quais redes e ativos a carteira suporta?',
      answer:
        'Depende da operação. Wallet Transfer suporta Polygon com USDT/USDC/BRLA, Base com USDC/BRLA, Solana com USDT/USDC/BRS e BNB Chain com USDT BEP20. BRS e BNB exigem habilitações específicas; BNB não funciona no sandbox. Tron com USDT é documentada para Wallet Payout, não para Wallet Transfer. Lightning usa um fluxo separado.',
    },
    {
      question: 'Como integro a carteira no meu produto?',
      answer:
        'Crie a carteira com POST /api/wallet/create e PIN de seis dígitos, guarde o walletId e consulte a carteira com POST /api/wallet/get. POST /api/wallet/keys retorna a chave protegida e o email do proprietário: faça cache por walletId com esse email e atualize quando a chave mudar. Para transferir, envie as credenciais da carteira de origem e uma combinação de rede e ativo suportada.',
    },
  ],
  related: [
    { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
    { label: 'API Pix stablecoin', href: '/api-pix-stablecoin' },
    { label: 'Perguntas frequentes', href: '/faq' },
    { label: 'Preços e taxas', href: '/precos' },
    { label: 'Documentação de Wallet Keys', href: 'https://docs.hodle.com.br/docs/wallet-keys' },
    { label: 'Documentação de Wallet Transfer', href: 'https://docs.hodle.com.br/docs/wallet-transfer' },
  ],
  ogImage: '/og-image-v2.png',
}
