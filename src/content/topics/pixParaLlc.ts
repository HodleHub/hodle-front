import type { TopicPage } from '../../types/topic'

export const pixParaLlc: TopicPage = {
  slug: 'pix-para-llc',
  primaryKeyword: 'pix para llc',
  title: 'Pix para LLC: conta para sua empresa no exterior',
  h1: 'Pix para LLC. Sua estrutura, conectada ao Brasil.',
  description:
    'Use sua LLC ou offshore para operar Pix com a Hodle. Conheça a conta para empresa no exterior, os documentos internacionais e as etapas de análise KYB.',
  keywords: [
    'pix para llc',
    'conta para llc',
    'pix para empresa estrangeira',
    'receber pix no exterior',
    'conta offshore',
    'documentos para conta llc',
    'llc americana',
  ],
  updatedAt: '2026-09-30T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  kicker: 'EMPRESAS GLOBAIS',
  subhead:
    'Pix para LLC, com a estrutura que você já tem. Conecte sua empresa no exterior aos pagamentos no Brasil, com documentação internacional e onboarding acompanhado pela Hodle.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/h-logo.svg', label: 'Hodle' },
  ],
  ctaSubhead:
    'Sua LLC ou offshore já está constituída? Conte onde ela opera e como precisa receber e pagar. O time confirma documentos, elegibilidade e produtos disponíveis para o seu caso.',
  ctaPrimary: {
    label: 'Conectar minha LLC',
    href: 'https://api.whatsapp.com/send?phone=5511960000445&text=Quero%20operar%20Pix%20com%20minha%20LLC%20ou%20offshore.',
  },
  ctaSecondary: { label: 'Conhecer a conta Hodle', href: 'https://app.hodle.com.br' },
  sections: [
    {
      id: 'sua-estrutura',
      kind: 'PROSE',
      heading: 'Use a LLC ou offshore que você já tem',
      body: 'Você já abriu a empresa, organizou os sócios e escolheu onde operar. O próximo passo é conectar essa estrutura aos clientes e fornecedores que usam Pix no Brasil.\n\nA Hodle tem um fluxo de cadastro para empresa estrangeira, com razão social e EIN ou Tax ID. Você apresenta o negócio existente para análise e define com o time os meios de recebimento e pagamento adequados à operação.',
      bullets: [
        'Para empresas de software, serviços, comércio e outras atividades elegíveis.',
        'Cadastro da pessoa jurídica com o documento fiscal do país de constituição.',
        'Análise da empresa, dos responsáveis e do fluxo de recursos antes da liberação.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [{ label: 'Ainda está estruturando a empresa? Conheça o guia de offshore e LLC', href: '/offshore' }],
    },
    {
      id: 'conta-para-llc',
      kind: 'PROSE',
      heading: 'Conta para LLC: a operação fica na empresa',
      body: 'O cadastro identifica a sua LLC como empresa estrangeira. Na análise, você informa se vai movimentar recursos próprios ou receber pagamentos de clientes, quais produtos precisa e o volume esperado. Isso permite avaliar o uso da conta a partir da atividade real do negócio.\n\nPix, stablecoins e API entram conforme a aprovação e a disponibilidade para a sua empresa. Os dados de recebimento, os limites e as condições são confirmados no onboarding.',
      bullets: [
        'Razão social e EIN / Tax ID da empresa no cadastro.',
        'Perfil de recebimento e finalidade dos pagamentos definidos na análise.',
        'Produtos e limites liberados de acordo com a operação aprovada.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [{ label: 'Veja como funciona a conta digital PJ da Hodle', href: '/conta-digital-pj' }],
    },
    {
      id: 'documentos-internacionais',
      kind: 'PROSE',
      heading: 'Documentos internacionais para uma operação global',
      body: 'Sua empresa tem documentos emitidos fora do Brasil. O onboarding considera a documentação da jurisdição de origem, com validação da empresa e de seus responsáveis. Para uma LLC americana, o EIN / Tax ID identifica a empresa no cadastro.\n\nSepare os documentos abaixo para conversar com o time. A lista final e a aceitação dependem do país, do tipo de empresa e da análise KYB; traduções ou comprovantes adicionais podem ser solicitados.',
      bullets: [
        'Constituição da empresa: Certificate of Formation, Articles of Organization ou documento equivalente.',
        'Identificação fiscal: EIN da LLC americana ou Tax ID da jurisdição de origem.',
        'Estrutura societária: Operating Agreement ou documento que identifique sócios e responsáveis.',
        'Identificação dos responsáveis: passaporte ou documento oficial, conforme a jurisdição.',
        'Comprovação da operação: endereço, atividade, origem dos recursos e documentos comerciais solicitados.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'receber-pix-no-exterior',
      kind: 'PROSE',
      heading: 'Receber Pix no exterior, cobrar como o cliente conhece',
      body: 'Seu cliente no Brasil paga em reais pelo aplicativo que já usa. Para uma empresa estrangeira elegível, a Hodle conecta esse pagamento ao fluxo aprovado de recebimento, com acompanhamento pelo painel ou integração por API.\n\nCobrança Pix, link de pagamento e recebimento em stablecoin têm configurações próprias. O time confirma qual modalidade atende à sua LLC, qual ativo será entregue e o destino dos recursos antes de você começar a cobrar.',
      bullets: [
        'Venda seus próprios produtos ou serviços a clientes no Brasil.',
        'Ofereça Pix na experiência de pagamento, conforme os recursos habilitados.',
        'Confirme moeda, rede, taxas e destino da liquidação durante o onboarding.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        { label: 'Conheça o link de pagamento Pix', href: '/link-de-pagamento-pix' },
        { label: 'Veja o fluxo de recebimento de Pix em stablecoin', href: '/receber-pix-em-stablecoin' },
      ],
    },
    {
      id: 'pagar-pix',
      kind: 'PROSE',
      heading: 'Pagar fornecedores no Brasil com stablecoins',
      body: 'Uma empresa no exterior também tem despesas em reais. Nos produtos habilitados, a Hodle permite usar stablecoins para realizar pagamentos via Pix a fornecedores no Brasil. O destinatário recebe reais, conforme a cotação e as condições da operação.\n\nVocê pode organizar pagamentos pelo painel ou avaliar a integração por API. Informe ao time quais ativos usa, quem recebe e o volume esperado para confirmar a disponibilidade para a sua estrutura.',
      bullets: [],
      icons: [],
      comparison: null,
      code: null,
      image: null,
      links: [
        { label: 'Veja como pagar Pix com USDT', href: '/pagar-pix-com-usdt' },
        { label: 'Conheça a API Pix e stablecoin', href: '/api-pix-stablecoin' },
      ],
    },
    {
      id: 'como-comecar',
      kind: 'STEPS',
      heading: 'Como abrir sua conta para LLC na Hodle',
      body: 'Comece pela empresa que você já tem. O time acompanha a avaliação da estrutura e confirma o que precisa estar pronto para operar. A abertura da conta e a movimentação real estão disponíveis só em produção, após aprovação cadastral e KYB.',
      bullets: [
        'Apresente a empresa. Informe país de constituição, razão social, EIN / Tax ID, atividade e como pretende usar Pix.',
        'Envie a documentação. Complete a análise KYB da empresa e a identificação dos responsáveis com os documentos solicitados.',
        'Configure a operação aprovada. Confirme produtos, limites, taxas e destino dos recursos antes de iniciar os recebimentos e pagamentos.',
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faqSubhead: 'O que saber antes de conectar sua LLC ou offshore ao Pix.',
  faq: [
    {
      question: 'Uma LLC americana pode receber Pix?',
      answer:
        'A Hodle recebe solicitações de empresas estrangeiras, incluindo LLCs, para análise de operação com Pix. A liberação depende da atividade, da documentação, do fluxo de recursos e dos produtos aprovados. Fale com o time antes de divulgar dados de recebimento aos seus clientes.',
    },
    {
      question: 'Preciso abrir outra empresa para usar minha LLC na Hodle?',
      answer:
        'O primeiro passo é apresentar a LLC ou offshore que você já tem. O cadastro prevê empresa estrangeira com EIN / Tax ID. A análise confirma se a estrutura é elegível e quais requisitos se aplicam ao seu caso.',
    },
    {
      question: 'Quais documentos são necessários para abrir uma conta para LLC?',
      answer:
        'Prepare o documento de constituição, o EIN / Tax ID, os documentos societários e a identificação dos responsáveis. O time confirma a lista final, incluindo comprovantes da atividade, endereço e origem dos recursos, conforme a jurisdição e a análise KYB.',
    },
    {
      question: 'Documentos de qualquer país são aceitos?',
      answer:
        'A documentação internacional é avaliada conforme o país de emissão, a estrutura da empresa e os requisitos dos parceiros. A aceitação não é automática nem universal. Informe a jurisdição ao time para confirmar a elegibilidade e os documentos aceitos antes do envio.',
    },
    {
      question: 'O EIN da LLC vira uma chave Pix?',
      answer:
        'Não. O EIN / Tax ID identifica a empresa no cadastro e na análise KYB. Os dados usados para receber Pix são definidos no fluxo habilitado para a conta; o documento fiscal estrangeiro não se transforma automaticamente em uma chave Pix.',
    },
    {
      question: 'A Hodle abre a LLC ou a offshore para mim?',
      answer:
        'A Hodle fornece a infraestrutura de pagamentos para empresas elegíveis. A constituição da LLC ou offshore é feita com profissionais especializados. O guia de offshore da Hodle apresenta essa etapa e o parceiro de estruturação jurídica.',
    },
  ],
  related: [
    { label: 'Offshore e LLC: estruturação jurídica', href: '/offshore' },
    { label: 'Conta digital PJ para sua empresa', href: '/conta-digital-pj' },
    { label: 'Pix para empresas', href: '/pix' },
    { label: 'Preços e taxas da Hodle', href: '/precos' },
  ],
  ogImage: '/og-image-v2.png',
}
