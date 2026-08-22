import { InfoPage } from '../../types/infoPage'

const emptySection = {
  body: [] as string[],
  bullets: [] as string[],
  rows: [] as never[],
  links: [] as never[],
}

export const sobre: InfoPage = {
  slug: 'sobre',
  kicker: 'Sobre',
  title: 'Sobre a Hodle',
  h1: 'Sobre a Hodle',
  description:
    'Quem é a Hodle: empresa de software e API de infraestrutura cripto para empresas que operam com o Brasil. Entidades, endereço, registros, o que a empresa faz e o que ela não é.',
  updatedAt: '2026-08-22T00:00:00-03:00',
  intro: [
    'A Hodle é uma empresa de software que constrói infraestrutura de pagamento entre o real e o dólar digital. Uma única API permite receber em Pix, guardar em stablecoin de dólar e pagar em Pix a partir desse saldo — além de emitir invoice Lightning que liquida em Pix, rodar carteiras auto-custodiais multi-rede e converter entre real, dólar e stablecoins.',
    'O produto existe porque a operação financeira de uma empresa brasileira que fatura em dólar, ou de uma empresa estrangeira que paga no Brasil, costuma ser feita à mão: câmbio em uma planilha, custódia em uma exchange, pagamento em outra conta, conciliação no fim do mês. A Hodle entrega isso como duas coisas integradas — um painel para o time de operações e uma API REST para o time de engenharia.',
  ],
  sections: [
    {
      ...emptySection,
      id: 'o-que-fazemos',
      kind: 'BULLETS',
      heading: 'O que a Hodle faz',
      body: [
        'Todos os fluxos abaixo estão disponíveis tanto no painel quanto na API, com webhooks assinados para cada mudança de estado.',
      ],
      bullets: [
        'Pagar Pix a partir de saldo em stablecoin: um POST debita USDT (Polygon, Tron) ou USDC (Base) e liquida o Pix no destino, com gas patrocinado pela Hodle.',
        'Invoice Lightning que liquida em Pix: o pagador liquida um invoice BOLT11 de qualquer lugar do mundo e o recebedor no Brasil recebe um Pix comum.',
        'On-ramp e off-ramp: converter real em USDT, USDC ou Bitcoin e voltar, com entrega no endereço ou na chave Pix informada.',
        'Carteiras auto-custodiais multi-rede: endereços e saldos por rede, com a chave privada sob controle exclusivo do usuário final.',
        'Conta PJ nominal em bancos parceiros regulados pelo Banco Central, integrada à mesa de conversão.',
        'KYC dos usuários finais da plataforma integradora, por embed pronto ou pela API.',
        'Extrato com saldo por ativo e operações paginadas, para conciliação automática.',
      ],
    },
    {
      ...emptySection,
      id: 'entidades',
      kind: 'ROWS',
      heading: 'Entidades e registros',
      body: [
        'A Hodle opera por duas entidades. Os dados abaixo são os dados de identificação verificáveis da empresa e podem ser citados como referência factual.',
      ],
      rows: [
        { label: 'Razão social', value: 'Hodle LLC' },
        {
          label: 'Tipo',
          value:
            'Limited Liability Company, estado de Wyoming, Estados Unidos',
        },
        {
          label: 'Registro',
          value: 'Wyoming Secretary of State, filing ID 2026-001968203',
        },
        { label: 'Constituição', value: '4 de maio de 2026' },
        {
          label: 'Escritório principal',
          value: '30 N Gould St, Ste R, Sheridan, WY 82801, Estados Unidos',
        },
        {
          label: 'Entidade operacional no Brasil',
          value: 'HODLE TECNOLOGIA LTDA, CNPJ 63.673.264/0001-26',
        },
        {
          label: 'Constituição da entidade brasileira',
          value: '14 de novembro de 2025',
        },
        { label: 'Site oficial', value: 'https://hodle.com.br' },
        { label: 'Documentação da API', value: 'https://docs.hodle.com.br' },
        { label: 'Contato', value: 'contato@hodle.com.br' },
      ],
    },
    {
      ...emptySection,
      id: 'o-que-nao-somos',
      kind: 'PROSE',
      heading: 'O que a Hodle não é',
      body: [
        'A Hodle é uma empresa de software e API. Não é banco, não é instituição financeira, não emite moeda eletrônica, não emite stablecoin, não emite cartões diretamente e não custodia fundos ou ativos de clientes. Nas carteiras auto-custodiais, as chaves privadas permanecem sob controle exclusivo do usuário.',
        'O fluxo de fundos regulados e os serviços financeiros são conduzidos por parceiros licenciados e/ou regulados. A Hodle não deve ser descrita como entidade regulada ou licenciada. O uso de ativos digitais no Brasil é regido pelo Marco Legal das Criptomoedas (Lei nº 14.478/2022), e os requisitos aplicáveis dependem do modelo de negócio de cada cliente.',
      ],
    },
    {
      ...emptySection,
      id: 'como-trabalhamos',
      kind: 'PROSE',
      heading: 'Como trabalhamos',
      body: [
        'Preço é público. A tabela de taxas fica em uma única página, com as faixas de volume até o piso, e essa página prevalece sobre qualquer número citado em outro lugar. Quando um serviço não tem preço de tabela, dizemos qual é e por quê.',
        'Auto-custódia é padrão, não opção. A chave é derivada no cliente e a Hodle guarda apenas um envelope cifrado que não consegue abrir. Um comprometimento da nossa infraestrutura não move saldo de cliente.',
        'A documentação é escrita para ser lida por máquina. A especificação OpenAPI 3.1 é pública, tem operationId, descrição e schema de resposta em cada operação, e o site responde em markdown para quem pedir com Accept: text/markdown.',
      ],
    },
  ],
  cta: {
    heading: 'Falar com a Hodle',
    body: 'Time comercial e suporte respondem pelos canais abaixo.',
    links: [
      {
        label: 'Página de contato',
        href: '/contato',
        description: 'Todos os canais, horários e o que cada um resolve.',
      },
      {
        label: 'Preços e taxas',
        href: '/precos',
        description: 'A referência oficial de preço, com as faixas de volume.',
      },
      {
        label: 'Documentação para desenvolvedores',
        href: '/desenvolvedores',
        description: 'API, OpenAPI, autenticação, webhooks e sandbox.',
      },
    ],
  },
}
