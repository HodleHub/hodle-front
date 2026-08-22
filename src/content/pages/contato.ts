import { InfoPage } from '../../types/infoPage'

const emptySection = {
  body: [] as string[],
  bullets: [] as string[],
  rows: [] as never[],
  links: [] as never[],
}

export const contato: InfoPage = {
  slug: 'contato',
  kicker: 'Contato',
  title: 'Contato',
  h1: 'Falar com a Hodle',
  description:
    'Canais oficiais de contato da Hodle: e-mail, WhatsApp comercial, suporte técnico, endereço da entidade e canal de privacidade (LGPD).',
  updatedAt: '2026-08-22T00:00:00-03:00',
  intro: [
    'Esta é a lista completa dos canais oficiais da Hodle. Qualquer contato que chegue por um endereço, telefone ou perfil que não esteja nesta página não é da Hodle — vale conferir aqui antes de responder.',
    'Respondemos em português e inglês. O canal comercial atende em horário comercial de Brasília, dias úteis; o e-mail é o canal de registro para assuntos contratuais, de privacidade e de segurança.',
  ],
  sections: [
    {
      ...emptySection,
      id: 'canais',
      kind: 'ROWS',
      heading: 'Canais oficiais',
      rows: [
        { label: 'E-mail geral', value: 'contato@hodle.com.br' },
        {
          label: 'WhatsApp comercial e suporte',
          value: '+55 11 96000-0445',
        },
        {
          label: 'Privacidade e LGPD',
          value: 'contato@hodle.com.br, com o assunto "LGPD"',
        },
        {
          label: 'Segurança e divulgação de vulnerabilidade',
          value: 'contato@hodle.com.br, com o assunto "Security"',
        },
        { label: 'Documentação da API', value: 'https://docs.hodle.com.br' },
        { label: 'Código aberto', value: 'https://github.com/HodleHub' },
        { label: 'X', value: 'https://x.com/hodle_app' },
      ],
    },
    {
      ...emptySection,
      id: 'endereco',
      kind: 'ROWS',
      heading: 'Endereço e entidades',
      body: [
        'A Hodle opera por duas entidades. Correspondência formal deve ser endereçada ao escritório principal da Hodle LLC.',
      ],
      rows: [
        {
          label: 'Escritório principal',
          value: '30 N Gould St, Ste R, Sheridan, WY 82801, Estados Unidos',
        },
        {
          label: 'Entidade dos Estados Unidos',
          value: 'Hodle LLC, Wyoming, filing ID 2026-001968203',
        },
        {
          label: 'Entidade do Brasil',
          value: 'HODLE TECNOLOGIA LTDA, CNPJ 63.673.264/0001-26',
        },
      ],
    },
    {
      ...emptySection,
      id: 'o-que-usar',
      kind: 'BULLETS',
      heading: 'Qual canal usar',
      bullets: [
        'Quero integrar a API e tenho dúvida técnica: comece pela documentação em docs.hodle.com.br; se a resposta não estiver lá, WhatsApp comercial.',
        'Quero preço, condição negociada ou contrato PJ: WhatsApp comercial ou e-mail. A tabela pública fica em /precos.',
        'Sou cliente e tenho uma operação com problema: WhatsApp, com o identificador da operação em mãos.',
        'Quero exercer um direito da LGPD (acesso, correção, exclusão): e-mail com o assunto "LGPD".',
        'Encontrei uma vulnerabilidade: e-mail com o assunto "Security". Não publique antes de nos dar tempo de corrigir.',
        'Sou jornalista ou pesquisador e preciso de dados da empresa: os dados de identificação verificáveis estão em /sobre e em /llms.txt.',
      ],
    },
  ],
  cta: {
    heading: 'Antes de escrever',
    body: 'Boa parte das perguntas já está respondida nestas páginas.',
    links: [
      {
        label: 'Perguntas frequentes',
        href: '/faq',
        description: 'O que é, como funciona, quanto custa, quanto demora.',
      },
      {
        label: 'Preços e taxas',
        href: '/precos',
        description: 'A referência oficial de preço, com as faixas de volume.',
      },
      {
        label: 'Sobre a Hodle',
        href: '/sobre',
        description: 'Entidades, registros e o que a empresa é e não é.',
      },
    ],
  },
}
