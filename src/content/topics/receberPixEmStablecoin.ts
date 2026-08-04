import { TopicPage } from '../../types/topic'

export const receberPixEmStablecoin: TopicPage = {
  slug: 'receber-pix-em-stablecoin',
  primaryKeyword: 'receber pix em stablecoin',
  title: 'Receber Pix em stablecoin na sua carteira',
  h1: 'Receba Pix em stablecoin, direto na sua carteira',
  description:
    'Todo Pix que cai na chave ou no QR Code estático da sua empresa é convertido e entregue em USDC na Base, numa carteira externa que só você cadastra.',
  keywords: [
    'receber pix em stablecoin',
    'receber pix em dólar',
    'chave pix stablecoin',
    'receber pagamento em usdc',
    'gateway de pagamento pix cripto',
    'qr code estático pix',
    'receber pix em usdt',
  ],
  updatedAt: '2026-07-30T21:04:55-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  ogImage: '/og-image-v2.png',
  kicker: 'RECEBIMENTO',
  subhead:
    'Sua empresa continua divulgando a mesma chave Pix e o mesmo QR Code estático. Cada Pix que chega é convertido e entregue em USDC numa carteira externa que só você cadastra.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/qr-code.svg', label: 'QR Code' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/base.png', label: 'Base' },
  ],
  ctaSubhead:
    'A liberação é avaliada caso a caso. Fale com o time da Hodle sobre o seu recebimento e a carteira de destino.',
  ctaPrimary: {
    label: 'Falar com o time',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  ctaSecondary: { label: 'Preços e taxas', href: '/precos' },
  faqSubhead:
    'As dúvidas mais comuns de quem quer receber Pix em stablecoin.',
  sections: [
    {
      id: 'o-que-e',
      kind: 'PROSE',
      heading: 'O que é receber Pix em stablecoin',
      body: 'Receber Pix em stablecoin é manter o meio de cobrança que a sua empresa já usa e trocar só o destino do dinheiro. O pagador faz um Pix comum, na chave ou no QR Code estático da sua conta, e o valor não fica parado em real: ele é convertido e sai em USDC para uma carteira externa que você cadastrou antes.\n\nNão existe uma chamada de API por transação nem um botão a apertar. O gatilho é o próprio Pix chegando na chave, então quem paga não precisa saber que existe stablecoin no meio do caminho.',
      bullets: [
        'A mesma chave Pix e o mesmo QR Code estático que você já divulga.',
        'Quem paga faz um Pix comum, sem app novo e sem cadastro.',
        'A conversão é disparada pelo recebimento, não por uma chamada sua.',
        'O destino é uma carteira externa sua, não um saldo interno.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'como-funciona',
      kind: 'STEPS',
      heading: 'Da sua chave Pix até o USDC na carteira',
      body: 'São três etapas, e você configura apenas a primeira.',
      bullets: [
        'Cadastrar a carteira de destino. Você adiciona o endereço na whitelist da sua conta e marca uma carteira como padrão. Sem carteira padrão nada é enviado: o valor fica retido na conta e o nosso time é avisado.',
        'Receber o Pix normalmente. O pagador usa a chave ou o QR Code estático da sua conta, e nenhuma cobrança precisa ser emitida antes.',
        'Receber em USDC. O valor é convertido e enviado para a carteira padrão da whitelist, e a conversão aparece na sua tela com o hash da transação on-chain.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'a-tela',
      kind: 'SCREENSHOT',
      heading: 'A tela que controla o recebimento',
      body: 'Tudo o que você configura fica em uma tela: a chave Pix da sua conta, a whitelist de carteiras que podem receber, e o histórico de conversões com o hash de cada entrega on-chain.\n\nUma carteira só entra na whitelist por ação sua. É isso que impede que um endereço que você não cadastrou receba um Pix da sua empresa.',
      bullets: [],
      icons: [],
      comparison: null,
      code: null,
      image: {
        src: '/pix2stable-tela.png',
        alt: 'Tela de recebimento em stablecoin, com a chave Pix da conta, a whitelist de carteiras externas em USDC na Base e o histórico de conversões',
        caption: 'Tela do produto com dados ilustrativos.',
        width: 1920,
        height: 3002,
      },
    },
    {
      id: 'ativos',
      kind: 'ASSETS',
      heading: 'O que é entregue hoje: USDC na Base',
      body: 'O par entregue hoje é USDC na rede Base. É o único par em produção, e ele está aqui porque foi provado ponta a ponta, não porque cabia em uma lista.\n\nOutras redes e outros ativos entram conforme forem validados. Confirme com o time o que está disponível antes de cadastrar a carteira de destino.',
      bullets: [],
      icons: [
        { src: '/pix.svg', label: 'Pix' },
        { src: '/qr-code.svg', label: 'QR Code estático' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/base.png', label: 'Base' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'autocustodia',
      kind: 'PROSE',
      heading: 'A carteira de destino é sua',
      body: 'O endereço que recebe é um endereço seu, em uma carteira que você controla. A Hodle não guarda as chaves dessa carteira, então o USDC entregue não fica sob custódia nossa esperando um saque.\n\nNa prática isso muda quem depende de quem. O valor está na sua carteira desde a entrega, e cada entrega tem hash on-chain, verificável por qualquer pessoa em um explorador público.',
      bullets: [
        'As chaves da carteira de destino não ficam com a Hodle.',
        'Cada entrega tem hash on-chain, verificável em explorador público.',
        'A whitelist é da sua conta: só recebe o endereço que você cadastrou.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'condicoes',
      kind: 'PROSE',
      heading: 'Como habilitar na sua conta',
      body: 'O recebimento em stablecoin é liberado conta por conta e não é autoatendimento. A liberação depende do seu perfil de recebimento, do volume e da carteira de destino, e por isso o primeiro passo é conversar com o time.\n\nEsta página também não substitui orientação contábil ou fiscal. A emissão da nota fiscal em reais, a apuração e o reporte das operações continuam sendo responsabilidade da sua empresa e do seu contador.',
      bullets: [
        'Sujeito a condições especiais: a liberação é avaliada caso a caso.',
        'Conta verificada é pré-requisito.',
        'Nota fiscal e apuração fiscal continuam com a sua empresa.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faq: [
    {
      question: 'Como receber Pix em stablecoin?',
      answer:
        'Você cadastra a carteira externa que vai receber e continua divulgando a chave Pix ou o QR Code estático da sua conta. Cada Pix que chega é convertido e enviado em USDC para essa carteira, sem uma chamada de API por transação.',
    },
    {
      question: 'Empresa pode receber pagamento em stablecoin no Brasil?',
      answer:
        'Sim, e é o uso pretendido aqui: o que entra continua sendo um Pix em reais, e a entrega é feita em stablecoin em uma carteira sua. As obrigações contábeis e fiscais da operação continuam com a sua empresa, e a Hodle não presta orientação tributária.',
    },
    {
      question: 'Preciso emitir nota fiscal recebendo em stablecoin?',
      answer:
        'A nota fiscal segue as regras da sua atividade e é emitida em reais, porque o pagamento que entra é um Pix em reais. Como o enquadramento depende do seu caso, confirme com o seu contador.',
    },
    {
      question: 'Qual a diferença entre chave Pix estática e QR Code dinâmico?',
      answer:
        'A chave e o QR Code estático são fixos e aceitam qualquer valor, sem uma cobrança emitida antes, e é justamente esse caso que dispara a conversão. O QR Code dinâmico nasce de uma cobrança, e um Pix pago contra uma cobrança segue o fluxo dessa cobrança.',
    },
    {
      question: 'A stablecoin cai na minha carteira ou fica na plataforma?',
      answer:
        'Cai na carteira externa que você marcou como padrão. Se nenhuma carteira estiver cadastrada, o valor fica retido na sua conta e o nosso time é avisado, então nada é enviado para um endereço que você não aprovou.',
    },
  ],
  related: [
    { label: 'Pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
    { label: 'Comprar USDT com Pix', href: '/comprar-usdt-com-pix' },
    { label: 'API Pix stablecoin', href: '/api-pix-stablecoin' },
    { label: 'Preços e taxas', href: '/precos' },
  ],
}
