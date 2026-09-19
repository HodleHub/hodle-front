import type { TopicSection } from '../types/topic'

export const platformFacts: TopicSection[] = [
  {
    id: 'modelo-operacional',
    kind: 'COMPARISON',
    heading: 'Custódia, verificação e acesso: quem faz o quê',
    body: 'A Hodle fornece software e API para conectar Pix e ativos digitais. Nas wallets auto-custodiais, o usuário controla as chaves. Os serviços financeiros e os fluxos de fundos regulados são executados por parceiros licenciados e/ou regulados. Referências conferidas em 19 de setembro de 2026.',
    bullets: [],
    icons: [],
    code: null,
    image: null,
    comparison: {
      headers: ['Critério', 'Como funciona na Hodle'],
      rows: [
        [
          'Custódia',
          'Wallets auto-custodiais: chaves sob controle do usuário. A Hodle não custodia fundos ou ativos de clientes.',
        ],
        [
          'KYC e KYB',
          'Verificação de pessoa física ou jurídica e habilitação do fluxo são requisitos de produção. Testar no sandbox não aprova uma conta de produção.',
        ],
        [
          'Sandbox',
          'Cadastro separado em app-sandbox.hodle.com.br e chave de teste. As operações suportadas usam Base Sepolia; Pix é simulado, sem movimentação de reais.',
        ],
        [
          'Produção',
          'API em api.hodle.com.br, com chave de produção, conta aprovada e permissões para o fluxo contratado. A disponibilidade depende do ativo, da rede e da operação.',
        ],
        [
          'Integração white-label',
          'Seu produto mantém a experiência e a relação com o cliente. Marca própria não transfere à Hodle as obrigações do seu modelo de negócio.',
        ],
      ],
    },
    links: [
      { label: 'Termos e responsabilidades', href: '/termos' },
      { label: 'API e recursos para desenvolvedores', href: '/desenvolvedores' },
      { label: 'English: Pix stablecoin API', href: '/en/pix-stablecoin-api' },
      { label: 'Cobertura do sandbox', href: 'https://docs.hodle.com.br/docs/sandbox' },
      {
        label: 'KYC e operações de terceiros',
        href: 'https://docs.hodle.com.br/docs/kyc',
      },
    ],
  },
  {
    id: 'custos-da-integracao',
    kind: 'COMPARISON',
    heading: 'Quanto custa integrar Pix e stablecoin',
    body: 'On-ramp e off-ramp têm taxa de serviço publicada: de 2% a 0,5%, conforme a faixa de volume, com mínimo de R$ 0,75 por operação. O volume liquidado no mês anterior define a faixa do mês seguinte; compra e venda contam juntas. Condições do contrato assinado prevalecem sobre a tabela.',
    bullets: [],
    icons: [],
    code: null,
    image: null,
    comparison: {
      headers: ['Serviço', 'Preço de tabela e condição'],
      rows: [
        [
          'On-ramp e off-ramp',
          '2% até R$ 100 mil de volume mensal; faixas intermediárias de 1,6%, 1,25%, 0,95% e 0,7%; 0,5% acima de R$ 5 milhões. Mínimo de R$ 0,75 por operação.',
        ],
        [
          'Exemplo de taxa de serviço',
          'Uma operação de R$ 1.000 na faixa de 2% tem R$ 20 de taxa de serviço. Isso não é uma cotação de câmbio nem uma promessa de quantidade líquida de tokens.',
        ],
        [
          'Emissão de conta nominal PJ',
          'Setup de R$ 15.000, uma única vez, para habilitar a emissão. Esse setup não é necessário para usar on-ramp e off-ramp.',
        ],
        [
          'Conversão e envio entre redes',
          'Sem tabela pública única. Confirme o par, a rede e a condição comercial antes de executar.',
        ],
      ],
    },
    links: [
      { label: 'Tabela completa de preços e regras', href: '/precos' },
      {
        label: 'Cotação e composição das taxas',
        href: 'https://docs.hodle.com.br/docs/quote',
      },
    ],
  },
]
