import { GlossaryTerm } from '../../types/glossary'

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'AML',
    definition:
      'Conjunto de normas e procedimentos de prevenção à lavagem de dinheiro. Em pagamentos com criptoativos, se traduz em verificação de identidade, monitoramento de transação e comunicação de operações suspeitas.',
  },
  {
    term: 'API key',
    definition:
      'Credencial que identifica uma plataforma nas chamadas à API e define o escopo do que ela alcança. Vai nos headers da requisição.',
  },
  {
    term: 'Arbitrum',
    definition:
      'Rede de camada 2 do Ethereum. Na plataforma da Hodle, USDT e USDC circulam nela.',
  },
  {
    term: 'Auto-custódia',
    definition:
      'Arranjo em que a chave privada fica sob controle exclusivo do dono dos ativos. Nenhum terceiro consegue mover, bloquear ou recuperar o saldo.',
  },
  {
    term: 'Base',
    definition:
      'Rede de camada 2 do Ethereum mantida pela Coinbase. É a rede em que a Hodle opera USDC.',
  },
  {
    term: 'BOLT11',
    definition:
      'Formato padrão de invoice da Lightning Network. É a cobrança que o pagador escaneia ou cola para pagar.',
  },
  {
    term: 'BRL',
    definition:
      'Código da moeda real brasileiro. Nos trilhos da Hodle, entra e sai por Pix.',
  },
  {
    term: 'BRLA',
    definition:
      'Stablecoin lastreada em real, de emissão privada. É o real onchain que circula em redes públicas.',
  },
  {
    term: 'Carteira custodial',
    definition:
      'Carteira em que a plataforma guarda a chave privada e o saldo do usuário é um registro interno. É o modelo oposto à auto-custódia.',
  },
  {
    term: 'Chave Pix',
    definition:
      'Identificador que aponta para uma conta no arranjo Pix: CPF, CNPJ, e-mail, telefone ou chave aleatória.',
  },
  {
    term: 'Compliance',
    definition:
      'Aderência a leis, normas e políticas internas aplicáveis à operação. Em pagamentos, concentra-se em identificação de cliente, monitoramento e reporte.',
  },
  {
    term: 'COAF',
    definition:
      'Conselho de Controle de Atividades Financeiras, órgão brasileiro que recebe comunicações de operações suspeitas.',
  },
  {
    term: 'Deposit asset',
    definition:
      'Operação de entrada: converte reais em Lightning, USDT, USDC ou USDCE e entrega num endereço.',
  },
  {
    term: 'Extrato',
    definition:
      'Consulta que devolve saldo por ativo e a lista paginada de operações num intervalo.',
  },
  {
    term: 'Finalidade de liquidação',
    definition:
      'Momento em que a transferência se torna irreversível e o valor está disponível para quem recebe.',
  },
  {
    term: 'Gas',
    definition:
      'Taxa paga à rede blockchain para processar uma transação. Em redes EVM é cobrada na moeda nativa da rede.',
  },
  {
    term: 'Gas patrocinado',
    definition:
      'Arranjo em que quem opera a infraestrutura paga o gas da transação, e não o usuário. Nas redes EVM da Hodle, transfers e payouts têm o gas patrocinado, então o usuário só precisa ter a stablecoin.',
  },
  {
    term: 'HMAC',
    definition:
      'Código de autenticação de mensagem baseado em hash. É como o recebedor de um webhook confirma que o payload veio de quem diz ter vindo e não foi alterado.',
  },
  {
    term: 'Invoice Lightning',
    definition:
      'Cobrança emitida na Lightning Network, no formato BOLT11, com valor e prazo de validade.',
  },
  {
    term: 'KYB',
    definition:
      'Verificação de identidade de pessoa jurídica: quem é a empresa, quem a controla e quem responde por ela.',
  },
  {
    term: 'KYC',
    definition:
      'Verificação de identidade de pessoa física, exigida para operações de entrada e saída de valores.',
  },
  {
    term: 'Lei 14.478/2022',
    definition:
      'Lei brasileira que estabelece diretrizes para prestação de serviços com ativos virtuais e define o que é ativo virtual. Conhecida como marco legal dos criptoativos.',
  },
  {
    term: 'Lightning Network',
    definition:
      'Rede de pagamentos construída sobre o Bitcoin, desenhada para transferências instantâneas e de baixo custo.',
  },
  {
    term: 'Liquid',
    definition:
      'Sidechain do Bitcoin usada para emissão e transferência de ativos.',
  },
  {
    term: 'Marco legal dos criptoativos',
    definition:
      'Conjunto formado pela Lei 14.478/2022 e pela regulamentação infralegal que a detalha, incluindo as resoluções do Banco Central sobre prestadores de serviço de ativos virtuais.',
  },
  {
    term: 'Off-ramp',
    definition:
      'Caminho de saída: converter criptoativo em moeda fiduciária. No Brasil, tipicamente termina num Pix.',
  },
  {
    term: 'On-ramp',
    definition:
      'Caminho de entrada: converter moeda fiduciária em criptoativo. No Brasil, tipicamente começa num Pix.',
  },
  {
    term: 'Payout',
    definition:
      'Operação de saída que envia valor para um destino. Na Hodle, um payout Pix é financiado por saldo em stablecoin.',
  },
  {
    term: 'Pix',
    definition:
      'Arranjo de pagamentos instantâneos brasileiro, criado pelo Banco Central, disponível 24 horas por dia todos os dias.',
  },
  {
    term: 'Polygon',
    definition:
      'Rede compatível com EVM. É uma das redes em que a Hodle opera USDT.',
  },
  {
    term: 'protectedSymmetricKey',
    definition:
      'Chave do usuário final, obtida pela API, necessária para assinar payouts e transfers. Sem ela não há movimentação de fundos.',
  },
  {
    term: 'PSAV',
    definition:
      'Prestador de Serviços de Ativos Virtuais. É o termo em português para a categoria que a Lei 14.478/2022 regula.',
  },
  {
    term: 'Resolução BCB 519',
    definition:
      'Resolução do Banco Central que designa o próprio BCB como autoridade responsável por regular e supervisionar prestadores de serviço de ativos virtuais no âmbito da Lei 14.478/2022.',
  },
  {
    term: 'Resolução BCB 520',
    definition:
      'Resolução do Banco Central que estabelece requisitos de autorização, governança e obrigações operacionais para prestadores de serviço de ativos virtuais no Brasil.',
  },
  {
    term: 'Resolução BCB 521',
    definition:
      'Resolução do Banco Central que define padrões de gestão de risco, controles internos e conformidade para prestadores de serviço de ativos virtuais.',
  },
  {
    term: 'Spark',
    definition:
      'Rede de pagamentos construída sobre o Bitcoin, usada para transferência de ativos.',
  },
  {
    term: 'Stablecoin',
    definition:
      'Criptoativo desenhado para manter valor estável em relação a uma referência, em geral uma moeda fiduciária, por meio de lastro ou de mecanismo de ajuste.',
  },
  {
    term: 'Tron',
    definition:
      'Rede blockchain em que a Hodle opera USDT, ao lado de Polygon.',
  },
  {
    term: 'USDC',
    definition:
      'Stablecoin lastreada em dólar emitida pela Circle.',
  },
  {
    term: 'USDCE',
    definition:
      'Versão ponte da USDC em determinadas redes, distinta da emissão nativa.',
  },
  {
    term: 'USDT',
    definition:
      'Stablecoin lastreada em dólar emitida pela Tether. É a de maior circulação no Brasil.',
  },
  {
    term: 'VASP',
    definition:
      'Virtual Asset Service Provider, termo internacional para prestador de serviços de ativos virtuais. O equivalente em português é PSAV.',
  },
  {
    term: 'Webhook',
    definition:
      'Chamada HTTP que a plataforma envia ao seu servidor quando um evento acontece. Na Hodle, cobre depósito, payout e mudança de estado de KYC, com payload assinado.',
  },
]