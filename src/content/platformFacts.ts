import type { TopicSection } from '../types/topic'

export const platformFacts: TopicSection[] = [
  {
    id: 'modelo-operacional',
    kind: 'COMPARISON',
    heading: 'Custódia, verificação e acesso: quem faz o quê',
    body: 'A Hodle fornece software e API para conectar Pix e ativos digitais. A autorização das wallets depende do modelo de assinatura e de quem fornece as credenciais da carteira selecionada. Os serviços financeiros e os fluxos de fundos regulados são executados por parceiros licenciados e/ou regulados. Modelo de autorização revisado em 4 de outubro de 2026.',
    bullets: [],
    icons: [],
    code: null,
    image: null,
    comparison: {
      headers: ['Critério', 'Como funciona na Hodle'],
      rows: [
        [
          'Custódia',
          'A Hodle não custodia fundos ou ativos de clientes. No fluxo por PIN da API, a integração fornece o PIN e a chave protegida da carteira selecionada para assinatura temporária no servidor. A descrição técnica não determina, por si só, o enquadramento jurídico da integração.',
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
      { label: 'Modelo de autorização e seleção da wallet', href: 'https://docs.hodle.com.br/docs/wallet-keys' },
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
    body: 'A tabela comercial por volume publica faixas de 2% a 0,5%, com mínimo de R$ 0,75, para operações abrangidas por uma proposta ou contrato que adote essas condições. API payout, Lightning e wallet podem ter regras próprias. Confira o fluxo, a condição da conta e a cotação antes de confirmar.',
    bullets: [],
    icons: [],
    code: null,
    image: null,
    comparison: {
      headers: ['Serviço', 'Preço de tabela e condição'],
      rows: [
        [
          'Tabela comercial por volume',
          'Para operações abrangidas pela tabela: 2% até R$ 100 mil de volume mensal; faixas intermediárias de 1,6%, 1,25%, 0,95% e 0,7%; 0,5% acima de R$ 5 milhões. Mínimo de R$ 0,75. Não define automaticamente a tarifa de cada endpoint.',
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
