import type { FaqItem } from '../landingV2/landingV2Data'

export const USD_PAGE_URL = 'https://hodle.com.br/usd'

export const USD_PAGE_TITLE = 'Enviar dinheiro para os EUA com Pix | Conta USD'

export const USD_PAGE_DESCRIPTION =
  'Envie dólares para uma conta nos Estados Unidos pagando Pix. Pague fornecedores ou transfira para sua conta por ACH ou wire, com cotação antes de confirmar.'

export type UsdRail = {
  key: string
  label: string
  eta: string
  description: string
  requirement: string
}

export const USD_RAILS: UsdRail[] = [
  {
    key: 'ach',
    label: 'ACH',
    eta: '1 A 3 DIAS ÚTEIS',
    description: 'A rede doméstica dos bancos americanos. Para o dia a dia, fornecedores e a sua própria conta.',
    requirement: 'Pede routing number e conta',
  },
  {
    key: 'wire',
    label: 'Wire',
    eta: '1 A 2 DIAS ÚTEIS',
    description: 'Transferência direta. Para valores maiores ou quando a fatura pede wire.',
    requirement: 'Pede routing number, conta e endereço do banco',
  },
]

export type UsdStep = {
  title: string
  description: string
  delay: string
}

export const USD_STEPS: UsdStep[] = [
  { title: 'Verifique a conta', description: 'KYC para pessoa física, KYB para empresa. A Conta USD é liberada depois da análise.', delay: '0s' },
  { title: 'Cadastre quem recebe', description: 'Banco, routing number e conta nos EUA. A sua, a de um fornecedor ou a de um prestador.', delay: '1.2s' },
  { title: 'Veja a cotação e pague', description: 'A tela mostra quanto sai em reais, com a taxa incluída, antes de você gerar o Pix.', delay: '2.4s' },
  { title: 'O dólar chega', description: 'Sai por ACH ou wire. O app mostra cada etapa até cair na conta.', delay: '3.6s' },
]

export type UsdAudience = {
  tag: string
  title: string
  description: string
}

export const USD_AUDIENCES: UsdAudience[] = [
  {
    tag: '01 · EMPRESAS',
    title: 'Pagar fornecedor nos EUA.',
    description: 'Cadastre o fornecedor como destinatário, confira os dados bancários da fatura e escolha ACH ou wire conforme a instrução de recebimento. Depois de aprovada a conta da sua empresa, consulte a cotação, pague o Pix e acompanhe a transferência pelo painel.',
  },
  {
    tag: '02 · CONTA PRÓPRIA',
    title: 'Enviar para sua conta americana.',
    description: 'Cadastre sua conta nos Estados Unidos como destinatária, com o nome do titular, routing number e número da conta. O fluxo atende conta pessoal ou da sua LLC, sujeito à análise cadastral. Você paga em reais por Pix e acompanha o envio em dólares.',
  },
  {
    tag: '03 · PLATAFORMAS',
    title: 'Integrar envios por API.',
    description: 'Os endpoints de USD estão em preparação. O envio pelo painel e a futura integração por API têm disponibilidades diferentes. Fale com o time sobre acesso antecipado, requisitos dos seus clientes e o fluxo que deseja incorporar ao produto.',
  },
]

export const USD_FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como enviar dinheiro para os Estados Unidos com Pix?',
    answer:
      'Na Conta USD da Hodle, você verifica seu cadastro, cadastra a conta bancária americana do destinatário e consulta a cotação. Depois, paga em reais por Pix e acompanha o envio em dólares por ACH ou wire. A disponibilidade depende da aprovação da conta e da operação.',
  },
  {
    question: 'Preciso ter conta fora do Brasil?',
    answer:
      'Não. Você paga um Pix na Hodle e o dólar é enviado para a conta do destinatário nos Estados Unidos. Quem recebe precisa de conta num banco americano.',
  },
  {
    question: 'Quanto custa enviar dólares com Pix?',
    answer:
      'A cotação aparece antes de você gerar o Pix, com a taxa da Hodle já incluída. O valor em dólar que você vê é o que sai para o destinatário.',
  },
  {
    question: 'Qual a diferença entre ACH e wire na Conta USD?',
    answer:
      'ACH chega em 1 a 3 dias úteis e pede routing number e conta. Wire chega em 1 a 2 dias úteis e também pede o endereço do banco. Use o que o destinatário indicar na fatura.',
  },
  {
    question: 'Como pagar um fornecedor americano a partir do Brasil?',
    answer:
      'Com a conta da empresa aprovada, cadastre os dados bancários do fornecedor nos EUA e confira se a fatura pede ACH ou wire. Consulte a cotação, pague o Pix gerado e acompanhe a transferência no painel. Confirme os dados do beneficiário antes de pagar.',
  },
  {
    question: 'Posso transferir para minha própria conta nos EUA?',
    answer:
      'Sim. Cadastre sua conta americana, pessoal ou da sua LLC, como destinatária. Informe a titularidade e os dados exigidos para ACH ou wire, conclua a análise cadastral e confira a cotação antes de gerar o Pix.',
  },
  {
    question: 'Enviar USD para um banco é igual a comprar USDT?',
    answer:
      'Não. Na transferência por ACH ou wire, o destino é uma conta bancária nos Estados Unidos e o recebimento é em dólares. Na compra de USDT, o destino é uma carteira de ativos digitais em uma rede compatível. Escolha o fluxo pelo que o destinatário precisa receber.',
  },
  {
    question: 'O que preciso para começar?',
    answer:
      'Uma conta na Hodle com a verificação completa: identidade para pessoa física, dados da empresa para pessoa jurídica. A Conta USD é liberada depois da análise do time.',
  },
  {
    question: 'Posso oferecer isso aos meus clientes pela API?',
    answer:
      'Os endpoints de USD estão chegando à API da Hodle. Fale com o time para entrar no acesso antecipado e desenhar a integração.',
  },
  {
    question: 'E se a transferência não chegar?',
    answer:
      'Cada etapa aparece no app. Se o banco de destino recusar, por exemplo por dados de conta errados, o suporte da Hodle acompanha a devolução com você.',
  },
]

export type UsdCodeTone = 'plain' | 'muted' | 'string'

export type UsdCodeLine = {
  text: string
  tone: UsdCodeTone
}

export type UsdFlowStep = {
  title: string
  method: 'GET' | 'POST'
  description: string
  lines: UsdCodeLine[]
}

const AUTH_LINES: UsdCodeLine[] = [
  { text: "  -H 'Authorization: Bearer $HODLE_API_KEY' \\", tone: 'muted' },
  { text: "  -H 'Content-Type: application/json' \\", tone: 'muted' },
]

export const USD_FLOW_STEPS: UsdFlowStep[] = [
  {
    title: 'Cadastrar o destinatário',
    method: 'POST',
    description: 'Conta bancária nos EUA que vai receber. Retorna beneficiaryId.',
    lines: [
      { text: 'curl -X POST https://api.hodle.com.br/api/usd/beneficiary \\', tone: 'plain' },
      ...AUTH_LINES,
      { text: "  -d '{", tone: 'plain' },
      { text: '    "rail": "ACH",', tone: 'string' },
      { text: '    "holderName": "Sam Chen",', tone: 'string' },
      { text: '    "routingNumber": "123456789",', tone: 'string' },
      { text: '    "accountNumber": "000123456789",', tone: 'string' },
      { text: '    "accountType": "checking"', tone: 'string' },
      { text: "  }'", tone: 'plain' },
    ],
  },
  {
    title: 'Pré-visualizar a cotação',
    method: 'POST',
    description: 'Quanto sai em reais para entregar o valor em dólar, com a taxa incluída.',
    lines: [
      { text: 'curl -X POST https://api.hodle.com.br/api/usd/quote \\', tone: 'plain' },
      ...AUTH_LINES,
      { text: "  -d '{", tone: 'plain' },
      { text: '    "beneficiaryId": "ben_8f2k",', tone: 'string' },
      { text: '    "amountUsd": "1000.00"', tone: 'string' },
      { text: "  }'", tone: 'plain' },
    ],
  },
  {
    title: 'Criar a transferência',
    method: 'POST',
    description: 'Trava a cotação e devolve o Pix copia e cola para o pagador.',
    lines: [
      { text: 'curl -X POST https://api.hodle.com.br/api/usd/transfer \\', tone: 'plain' },
      ...AUTH_LINES,
      { text: "  -d '{", tone: 'plain' },
      { text: '    "quoteId": "qt_3m9x",', tone: 'string' },
      { text: '    "externalId": "invoice-2291"', tone: 'string' },
      { text: "  }'", tone: 'plain' },
    ],
  },
  {
    title: 'Acompanhar o status',
    method: 'GET',
    description: 'Do Pix recebido ao dólar na conta. Cada mudança também chega por webhook.',
    lines: [
      { text: 'curl https://api.hodle.com.br/api/usd/transfer/tr_7q1c \\', tone: 'plain' },
      { text: "  -H 'Authorization: Bearer $HODLE_API_KEY'", tone: 'muted' },
    ],
  },
]

export type UsdWebhook = {
  label: string
  color: string
  stepIndex: number
}

export const USD_WEBHOOKS: UsdWebhook[] = [
  { label: 'USD_PIX_RECEIVED', color: '#EAB308', stepIndex: 2 },
  { label: 'USD_TRANSFER_COMPLETED', color: '#5EEAD4', stepIndex: 3 },
  { label: 'USD_TRANSFER_FAILED', color: '#FCA5A5', stepIndex: 3 },
]
