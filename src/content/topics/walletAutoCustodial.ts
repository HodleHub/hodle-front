import { TopicPage } from '../../types/topic'

export const walletAutoCustodial: TopicPage = {
  slug: 'wallet-auto-custodial',
  title: 'Carteira auto-custodial para empresas',
  h1: 'Carteiras em que a chave é do usuário',
  description:
    'Ofereça carteiras multi-rede no seu produto sem custodiar nada. As chaves privadas ficam com o usuário final, e a integração é por API REST.',
  keywords: [
    'carteira auto-custodial para empresas',
    'wallet as a service',
    'carteira cripto por api',
    'api de carteira multi-rede',
    'carteira auto-custodial api',
    'custódia das chaves pelo usuário',
  ],
  primaryKeyword: 'carteira auto-custodial para empresas',
  updatedAt: '2026-07-30T21:04:55-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'WALLETS',
  subhead:
    'A Hodle entrega a carteira, as redes e a API. A chave privada fica com o usuário final do seu produto — nem você nem a Hodle acessam os fundos dele.',
  heroIcons: [
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/btc.svg', label: 'Bitcoin' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/tron.svg', label: 'Tron' },
    { src: '/base.png', label: 'Base' },
  ],
  ctaSubhead:
    'Ofereça carteiras no seu produto sem assumir custódia.',
  ctaPrimary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  ctaSecondary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br/docs/wallet-get',
  },
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'O que é uma carteira auto-custodial',
      body: 'Numa carteira auto-custodial, a chave privada fica sob controle exclusivo de quem é dono dos ativos. Não existe um terceiro que possa mover o saldo, congelar a conta ou devolver o acesso — o controle é de quem tem a chave, e só. É o oposto do modelo custodial, em que a plataforma guarda a chave e o usuário tem um saldo registrado num banco de dados. Os dois modelos existem e resolvem problemas diferentes. O que a Hodle entrega é o primeiro.',
      bullets: [
        'A chave privada fica sob controle exclusivo do usuário final.',
        'A Hodle não custodia fundos nem ativos de clientes.',
        'A empresa que integra não ganha acesso aos fundos dos usuários dela.',
        'O saldo é on-chain, verificável na rede, não um registro interno.',
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
      body: 'Oferecer carteira sem custodiar muda a sua exposição. Você não passa a guardar ativo de terceiro, não precisa construir a operação de custódia e não vira o ponto único de falha do saldo dos seus usuários. Em troca, o desenho do produto tem que respeitar o modelo: operação que move fundo exige a chave do usuário. É por isso que a API expõe o protectedSymmetricKey — sem ele, não há payout nem transfer.',
      bullets: [
        'Você embute carteira no seu produto sem assumir custódia.',
        'A operação de recuperação e de segurança da chave fica no desenho do seu fluxo.',
        'Movimentação exige a chave do usuário, por construção.',
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
      body: 'Três chamadas cobrem leitura, assinatura e movimentação.',
      bullets: [
        'Ler a carteira. Um GET devolve os endereços por rede e os saldos atuais do usuário da API key. Guia em docs.hodle.com.br/docs/wallet-get.',
        'Buscar a chave. Um GET devolve o protectedSymmetricKey necessário para assinar payouts e transfers. Faça cache uma vez por usuário.',
        'Movimentar. Um POST envia USDT para qualquer endereço em Polygon, Base ou Tron. O gas em redes EVM é patrocinado pela Hodle.',
        'Acompanhar. O extrato devolve saldo por ativo e operações paginadas, e o webhook assinado com HMAC avisa cada mudança de estado.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'redes',
      kind: 'ASSETS',
      heading: 'Uma carteira, várias redes',
      body: 'A mesma carteira endereça Bitcoin on-chain e Lightning, USDT em Polygon e Tron, USDC em Base, e as duas stablecoins em Arbitrum e Spark. O usuário não gerencia uma carteira por rede.',
      bullets: [],
      icons: [
        { src: '/btc.svg', label: 'Bitcoin' },
        { src: '/ln.svg', label: 'Lightning' },
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/tron.svg', label: 'Tron' },
        { src: '/base.png', label: 'Base' },
        { src: '/arbitrum.svg', label: 'Arbitrum' },
        { src: '/spark.svg', label: 'Spark' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'com-pix',
      kind: 'PROSE',
      heading: 'A carteira que também paga Pix',
      body: 'A diferença prática entre uma carteira auto-custodial genérica e a da Hodle é a saída em reais. O saldo em USDT ou USDC da carteira financia um Pix, sem etapa manual de venda: um POST dispara o pagamento e quem recebe cai em reais. É a mesma carteira, o mesmo saldo e a mesma chave. O trilho brasileiro fica do lado da Hodle.',
      bullets: [
        'Pagar Pix com o saldo da carteira, sem converter antes.',
        'Receber por invoice Lightning e liquidar em Pix.',
        'Converter reais em USDT, USDC, USDCE ou Lightning.',
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
        'É uma carteira em que a chave privada fica sob controle exclusivo do dono dos ativos. Nenhum terceiro consegue mover, bloquear ou recuperar o saldo — quem tem a chave tem o controle.',
    },
    {
      question: 'Qual a diferença entre auto-custódia e MPC?',
      answer:
        'São respostas para perguntas diferentes. Auto-custódia trata de quem tem o controle da chave; MPC é uma técnica para dividir uma chave em partes, e pode ser usada tanto em arranjo custodial quanto não custodial. Nas carteiras da Hodle, o controle é do usuário final.',
    },
    {
      question: 'A empresa que integra consegue acessar os fundos dos usuários?',
      answer:
        'Não. Operações que movem fundos exigem a chave do usuário, e é o usuário que a controla. A Hodle também não custodia fundos ou ativos de clientes.',
    },
    {
      question: 'Quais redes e ativos a carteira suporta?',
      answer:
        'Bitcoin on-chain e por Lightning, USDT em Polygon e Tron, USDC em Base, e as duas stablecoins também em Arbitrum e Spark. É uma carteira única, não uma por rede.',
    },
    {
      question: 'Como integro a carteira no meu produto?',
      answer:
        'Por API REST: um GET devolve endereços e saldos, outro devolve o protectedSymmetricKey usado para assinar, e um POST move os ativos. O gas em redes EVM é patrocinado. Os guias estão em docs.hodle.com.br.',
    },
  ],
  related: [
    { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
    { label: 'API Pix stablecoin', href: '/api-pix-stablecoin' },
    { label: 'Perguntas frequentes', href: '/faq' },
    { label: 'Preços e taxas', href: '/precos' },
  ],
  ogImage: '/og-image-v2.png',
}
