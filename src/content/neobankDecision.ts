import type { TopicSection } from '../types/topic'

export const neobankDecision: TopicSection = {
  id: 'escolher-modulos',
  kind: 'COMPARISON',
  heading: 'Como começar um neobank com Pix e stablecoins',
  body: 'Escolha primeiro o fluxo que seu cliente precisa: receber, guardar ou pagar. Uma integração de on-ramp e off-ramp não exige contratar todos os módulos nem habilitar a emissão de contas nominais.',
  bullets: [],
  icons: [],
  code: null,
  image: null,
  comparison: {
    headers: ['Necessidade do produto', 'Módulos e decisões'],
    rows: [
      [
        'Entrada e saída de stablecoins por Pix',
        'Comece por on-ramp, off-ramp e webhooks. Defina o ativo, a rede, os titulares envolvidos e a verificação exigida.',
      ],
      [
        'Wallet dentro da sua experiência',
        'Defina quem controla as chaves, o onboarding da carteira e como o usuário autoriza transferências. O white-label preserva o modelo auto-custodial.',
      ],
      [
        'Emitir contas nominais PJ',
        'Confirme o setup de emissão, o onboarding empresarial e a habilitação junto aos parceiros. É uma contratação distinta do simples uso das rampas.',
      ],
      [
        'Operar depois do lançamento',
        'Seu time precisa tratar atendimento, conciliação, permissões e obrigações do seu modelo. A API fornece os recursos; a integração não substitui esses processos.',
      ],
    ],
  },
  links: [
    { label: 'API de on-ramp e off-ramp', href: '/api-pix-stablecoin' },
    { label: 'Começar pelos recursos de desenvolvimento', href: '/desenvolvedores' },
    { label: 'Wallets e front white-label', href: '/crypto-as-a-service#whitelabel' },
    { label: 'Pagar fornecedores com USDC', href: '/pagar-fornecedores-com-usdc' },
  ],
}
