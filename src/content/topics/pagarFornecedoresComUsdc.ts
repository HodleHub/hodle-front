import type { TopicPage } from '../../types/topic'

export const pagarFornecedoresComUsdc: TopicPage = {
  slug: 'pagar-fornecedores-com-usdc',
  language: 'pt-BR',
  title: 'Pagar fornecedores via Pix com USDC: fluxo e requisitos',
  h1: 'Como pagar fornecedores via Pix usando USDC',
  description:
    'Veja os requisitos para pagar um fornecedor em reais a partir de USDC: habilitação para terceiros, beneficiário, cotação, taxas e conciliação por API.',
  keywords: [
    'pagar fornecedores Pix USDC',
    'USDC para Pix empresa',
    'pagamento fornecedor stablecoin',
  ],
  primaryKeyword: 'pagar fornecedores pix usdc',
  updatedAt: '2026-09-19T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'CONTAS A PAGAR',
  subhead:
    'Sua empresa usa saldo em USDC e o fornecedor recebe reais via Pix. O fluxo depende da rede da carteira, da verificação da conta e da autorização para pagamentos a terceiros.',
  heroIcons: [
    {
      src: '/pix.svg',
      label: 'Pix',
    },
    {
      src: '/usdt.svg',
      label: 'USDT',
    },
    {
      src: '/usdc.svg',
      label: 'USDC',
    },
    {
      src: '/base.png',
      label: 'Base',
    },
  ],
  ctaSubhead:
    'Confirme a habilitação para terceiros e os limites da conta antes de integrar pagamentos de fornecedores.',
  ctaPrimary: {
    label: 'Validar meu fluxo com o time',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  ctaSecondary: {
    label: 'Ler a API de payout',
    href: 'https://docs.hodle.com.br/docs/wallet-payout',
  },
  sections: [
    {
      id: 'requisitos',
      kind: 'COMPARISON',
      heading: 'O que precisa estar habilitado',
      body: 'Pagar um fornecedor é uma operação para um beneficiário diferente do titular da conta. Nas subcontas, operações para terceiros são desabilitadas por padrão e precisam de habilitação explícita. Uma chave de API ou uma cotação não concede essa permissão.',
      bullets: [],
      icons: [],
      comparison: {
        headers: ['Fluxo', 'Ativo, rede e condição'],
        rows: [
          [
            'Conta e beneficiário',
            'Verificação aprovada e permissão para operar para terceiros. Confirme com o time como identificar corretamente o beneficiário no fluxo da sua empresa.',
          ],
          [
            'Rede e ativo',
            'USDC em Base, Polygon ou Solana, conforme a documentação de payout e a habilitação da conta. O suporte da wallet não substitui o suporte do endpoint.',
          ],
          [
            'Saldo e preço',
            'Saldo suficiente para o pagamento e a taxa. Confirme o ativo efetivamente debitado: alguns fluxos podem priorizar saldo em real tokenizado antes de usar USDC.',
          ],
          [
            'Teste',
            'O sandbox simula o Pix e usa Base Sepolia nos fluxos suportados. Ele não comprova liquidação bancária nem habilitação de produção.',
          ],
        ],
      },
      code: null,
      image: null,
      links: [
        {
          label: 'Regras de pagamentos para terceiros',
          href: 'https://docs.hodle.com.br/docs/kyc#third-party-operations',
        },
        {
          label: 'Redes e seleção de ativo do payout',
          href: 'https://docs.hodle.com.br/docs/wallet-payout',
        },
      ],
    },
    {
      id: 'passo-a-passo',
      kind: 'STEPS',
      heading: 'Do saldo em USDC ao Pix do fornecedor',
      body: 'A integração deve confirmar o destinatário e o valor antes do envio. A liquidação só é confirmada no estado final da operação.',
      bullets: [
        'Escolha a carteira e o escopo da subconta corretos. Confira rede, saldo e permissões.',
        'Resolva o beneficiário em POST /api/wallet/payout/beneficiary. Confira nome, documento mascarado e banco com o fornecedor.',
        'Mostre o valor em reais, o ativo debitado, a taxa e a cotação para aprovação. Use o quoteId retornado pelo fluxo de beneficiário conforme o contrato da API.',
        'Envie POST /api/wallet/payout com os dados exigidos da carteira, do beneficiário e da operação. Use um externalId estável por pagamento para proteger retentativas.',
        'Guarde transactionId e externalId junto à obrigação a pagar. Consulte GET /api/wallet/payout/{transactionId} e só baixe o título quando COMPLETED.',
        'Em timeout, consulte o pagamento existente. Repetir com um novo identificador pode criar uma segunda operação.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        {
          label: 'Confirmar destinatário e cotação',
          href: 'https://docs.hodle.com.br/docs/wallet-payout-beneficiary',
        },
        {
          label: 'Payout e idempotência',
          href: 'https://docs.hodle.com.br/docs/wallet-payout',
        },
        {
          label: 'Webhooks e conciliação',
          href: 'https://docs.hodle.com.br/docs/webhooks',
        },
      ],
    },
    {
      id: 'custos',
      kind: 'PROSE',
      heading: 'Taxa, câmbio e conciliação são coisas diferentes',
      body: 'A taxa de serviço pública de off-ramp vai de 2% a 0,5% conforme volume, com mínimo de R$ 0,75 por operação. Uma operação de R$ 1.000 na faixa de 2% tem R$ 20 de taxa de serviço; a quantidade de USDC debitada depende da cotação da operação. O contrato negociado pode prevalecer.',
      bullets: [
        'Guarde valor em BRL, ativo e rede debitados, taxa, identificador e estado final no registro do pagamento.',
        'Confirme com sua contabilidade os documentos e registros necessários para a operação.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        {
          label: 'Tabela de preços e regra das faixas',
          href: '/precos',
        },
        {
          label: 'Como funciona a cotação',
          href: 'https://docs.hodle.com.br/docs/quote',
        },
      ],
    },
  ],
  faqSubhead: 'Condições antes de integrar contas a pagar.',
  faq: [
    {
      question: 'O fornecedor precisa ter uma carteira cripto?',
      answer:
        'Não para receber o Pix: ele recebe reais na conta vinculada à chave ou ao QR Code usado. Sua empresa precisa ter o fluxo de payout e os pagamentos para terceiros habilitados.',
    },
    {
      question: 'Basta ter USDC em qualquer rede?',
      answer:
        'Não. O payout depende da rede e da carteira suportadas, do saldo, da verificação e das permissões da conta. Consulte a referência de payout antes de enviar fundos.',
    },
    {
      question: 'Uma resposta 202 significa que o fornecedor recebeu?',
      answer:
        'Não. Significa que a operação foi aceita. Acompanhe o transactionId até o estado final e baixe a obrigação apenas depois de COMPLETED.',
    },
  ],
  related: [
    {
      label: 'API Pix stablecoin',
      href: '/api-pix-stablecoin',
    },
    {
      label: 'Pagar Pix com USDT',
      href: '/pagar-pix-com-usdt',
    },
    {
      label: 'Recursos para desenvolvedores',
      href: '/desenvolvedores',
    },
    {
      label: 'Preços e taxas',
      href: '/precos',
    },
  ],
  ogImage: '/og-image-v2.png',
}
