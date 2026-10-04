import { TopicPage } from '../../types/topic'

export const paraAgentesDeIa: TopicPage = {
  slug: 'para-agentes-de-ia',
  primaryKeyword: 'api para agentes de IA pagamento',
  title: 'API de pagamento para agentes de IA',
  h1: 'Pagamentos por API e MCP para agentes de IA',
  description:
    'Integre agentes à API REST da Hodle e conheça o MCP documentado: consultas, pagamentos Pix com stablecoins e controles de autorização.',
  keywords: [
    'api para agentes de IA pagamento',
    'pagamentos agênticos',
    'agente de IA pix',
    'api pix para agentes',
    'automatizar pagamento com IA',
    'agente autônomo stablecoin',
  ],
  updatedAt: '2026-10-04T00:00:00-03:00',
  changeFrequency: 'monthly',
  priority: 0.8,
  ogImage: '/og-image-v2.png',
  kicker: 'AGENTES DE IA',
  subhead:
    'Integre pela API REST e conheça o servidor local @hodle/mcp descrito na documentação. Comece no sandbox com consultas e defina permissões e aprovações antes de habilitar pagamentos.',
  heroIcons: [
    { src: '/pix.svg', label: 'Pix' },
    { src: '/usdt.svg', label: 'USDT' },
    { src: '/usdc.svg', label: 'USDC' },
    { src: '/ln.svg', label: 'Lightning' },
    { src: '/polygon.svg', label: 'Polygon' },
    { src: '/tron.svg', label: 'Tron' },
  ],
  ctaSubhead:
    'Comece pela documentação ou fale com o time da Hodle.',
  ctaPrimary: {
    label: 'Ver a documentação',
    href: 'https://docs.hodle.com.br/docs/ai',
  },
  ctaSecondary: {
    label: 'Falar com vendas',
    href: 'https://api.whatsapp.com/send?phone=5511960000445',
  },
  sections: [
    {
      id: 'o-que-muda',
      kind: 'PROSE',
      heading: 'REST, MCP e skill: três formas de integrar',
      body: 'A API REST expõe as operações de pagamento e consulta. A documentação descreve @hodle/mcp como um servidor local via stdio, com ferramentas para Claude Code, Cursor, Codex e Hermes. A skill hodle-api reúne instruções sobre fluxos, KYC e webhooks. Na revisão de 04/10/2026, @hodle/mcp não foi localizado no registro público npm; confirme com a equipe o acesso ao pacote antes de instalar. O repositório indicado para instalar a skill também não estava acessível publicamente nessa revisão; consulte o guia e confirme o acesso.\n\nNa configuração documentada, o MCP usa sandbox por padrão e registra apenas ferramentas de consulta até que HODLE_MCP_ALLOW_WRITES=true seja configurado. Cada chamada de escrita também exige confirm: true. Esse campo é preenchido pelo agente; a aprovação humana depende do controle de ferramentas do cliente MCP.',
      bullets: [
        'HODLE_API_KEY autentica o servidor MCP; HODLE_API_URL seleciona o ambiente.',
        'PIN e chave protegida são lidos de variáveis de ambiente, fora dos argumentos enviados pelo modelo.',
        'Mantenha a aprovação do cliente MCP para ferramentas de escrita. Agentes sem supervisão devem permanecer no sandbox com escrita desabilitada.',
        'O MCP documentado é local via stdio; a integração REST continua disponível sem MCP.',
      ],
      links: [
        { label: 'Configuração e controles documentados do MCP', href: 'https://docs.hodle.com.br/docs/ai/mcp' },
        { label: 'Guia da skill hodle-api', href: 'https://docs.hodle.com.br/docs/ai/skills' },
        { label: 'Testar no sandbox', href: 'https://docs.hodle.com.br/docs/sandbox' },
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'o-que-o-agente-faz',
      kind: 'STEPS',
      heading: 'O que o agente consegue fazer pela API',
      body: 'Cada operação tem requisitos, ativos e redes próprios. Acesso em produção depende da conta, do KYC e das funcionalidades habilitadas.',
      bullets: [
        'Pagar Pix com stablecoin. POST /api/wallet/payout inicia a operação; acompanhe o transactionId até COMPLETED ou FAILED.',
        'Receber Bitcoin pela Lightning. POST /api/lightning/invoice emite uma BOLT11 para o fluxo Lightning → Pix.',
        'Converter reais em ativo. POST /api/deposit/asset usa os pares e destinos documentados para on-ramp.',
        'Transferir tokens na rede selecionada. POST /api/wallet/transfer envia para uma subconta ou endereço externo na mesma rede; não realiza bridge entre redes.',
        'Ler estado. Endereços por rede, saldo por ativo e extrato paginado de operações.',
        'Reconciliar. Webhook assinado com HMAC em depósito, payout e mudança de KYC.',
      ],
      links: [
        { label: 'Payout de stablecoin para Pix', href: 'https://docs.hodle.com.br/docs/wallet-payout' },
        { label: 'Invoice Lightning para Pix', href: 'https://docs.hodle.com.br/docs/lightning-invoice' },
        { label: 'On-ramp por Deposit Asset', href: 'https://docs.hodle.com.br/docs/deposit-asset' },
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'autorizacao',
      kind: 'PROSE',
      heading: 'Quem autoriza o que',
      body: 'A API key identifica a conta e seu escopo. No fluxo por PIN, transferências e payouts exigem walletPin e protectedSymmetricKey da carteira de origem. O servidor usa essas credenciais para desbloquear a chave temporariamente em memória e assinar a operação. A aplicação que integra é responsável por guardar e fornecer as credenciais corretas das subcontas.\n\nNo MCP, HODLE_WALLET_PIN e HODLE_PROTECTED_SYMMETRIC_KEY ficam no ambiente do processo. O servidor mantém um par de credenciais e recusa payout com subAccountId; payouts de subcontas devem usar uma integração que selecione as credenciais de cada titular.',
      bullets: [
        'Defina usuários, valores, destinatários e operações permitidos antes de expor ferramentas de escrita.',
        'Não inclua PIN ou chave protegida nos prompts do agente.',
        'Se houver timeout ou outcomeUnknown, consulte o estado antes de repetir uma escrita: a operação pode já ter sido aceita.',
      ],
      links: [
        { label: 'Credenciais e seleção da carteira', href: 'https://docs.hodle.com.br/docs/wallet-keys' },
        { label: 'Controles e limites do MCP', href: 'https://docs.hodle.com.br/docs/ai/mcp#what-the-gates-do-and-do-not-do' },
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'exemplo',
      kind: 'CODE',
      heading: 'Como selecionar e autorizar uma carteira',
      body: 'Use o walletId da carteira de origem. POST /api/wallet/keys retorna walletId, protectedSymmetricKey e email do proprietário; faça cache por walletId junto do email. Atualize esse registro quando a chave protegida daquela carteira mudar, inclusive após uma alteração de PIN que a renove.',
      bullets: [
        'POST /api/wallet/keys — selecione walletId e, para carteira de cliente, subAccountId. O endpoint exige acesso às operações de wallet pela API e limita a consulta a uma por minuto por API key.',
        'POST /api/wallet/transfer — envie walletId, walletPin e a chave protegida correspondente; use fromSubAccountId quando a origem for uma subconta.',
        'POST /api/wallet/payout — no fluxo por PIN, envie as credenciais da carteira selecionada e subAccountId quando aplicável.',
        'Consulte o status do payout por transactionId e processe os webhooks assinados. A resposta inicial não confirma liquidação.',
      ],
      links: [
        { label: 'Contrato de Wallet Keys e invalidação do cache', href: 'https://docs.hodle.com.br/docs/wallet-keys' },
        { label: 'Contrato de Wallet Transfer', href: 'https://docs.hodle.com.br/docs/wallet-transfer' },
      ],
      icons: [],
      comparison: null,
      code: null,
      image: null,
    },
    {
      id: 'redes',
      kind: 'ASSETS',
      heading: 'Ativos e redes por operação',
      body: 'Wallet Transfer envia o token na rede escolhida. Wallet Payout converte o saldo elegível para pagar o destinatário em reais via Pix. A disponibilidade de uma rede em um desses endpoints não implica suporte no outro.',
      bullets: [
        'Transfer: Polygon — USDT, USDC e BRLA; Base — USDC e BRLA; Solana — USDT, USDC e BRS; BNB Chain — USDT BEP20.',
        'Transfer em BNB Chain depende de disponibilidade na conta, tem mínimo de 1 USDT e não está disponível no sandbox. Para BRS em Solana, confirme o acesso às operações desse ativo pela API.',
        'Payout: Polygon — USDT, USDC e BRLA; Base — USDC e BRLA; Tron — USDT; Solana — USDT, USDC e BRS. O acesso ao payout deve estar disponível na conta; confirme também a disponibilidade de Tron e BRS.',
        'No payout, a seleção do ativo considera as regras e o saldo disponível; consulte a ordem de preferência e os fallbacks na documentação.',
        'Lightning → Pix usa /api/lightning/invoice, em um fluxo separado do payout de stablecoins.',
      ],
      links: [
        { label: 'Matriz de transferência por rede', href: 'https://docs.hodle.com.br/docs/wallet-transfer' },
        { label: 'Matriz e seleção de ativos no payout', href: 'https://docs.hodle.com.br/docs/wallet-payout' },
      ],
      icons: [
        { src: '/usdt.svg', label: 'USDT' },
        { src: '/usdc.svg', label: 'USDC' },
        { src: '/btc.svg', label: 'Bitcoin' },
        { src: '/ln.svg', label: 'Lightning' },
        { src: '/polygon.svg', label: 'Polygon' },
        { src: '/tron.svg', label: 'Tron' },
        { src: '/base.png', label: 'Base' },
      ],
      comparison: null,
      code: null,
      image: null,
    },
  ],
  faqSubhead:
    'Tire suas dúvidas sobre agentes de IA operando pagamentos pela API.',
  faq: [
    {
      question: 'Um agente de IA pode pagar um Pix?',
      answer:
        'Sim, com conta e funcionalidades habilitadas, saldo elegível e autorização para a carteira. A API inicia o payout e permite acompanhar seu status e webhooks. No @hodle/mcp, escrita fica desabilitada por padrão; habilitá-la e enviar confirm: true não substitui a aprovação humana no cliente MCP.',
    },
    {
      question: 'Como o agente é autorizado a movimentar fundos?',
      answer:
        'A API key identifica a conta. No fluxo por PIN, a integração fornece walletPin e protectedSymmetricKey da carteira selecionada. POST /api/wallet/keys retorna a chave protegida, walletId e email; o cache é por walletId, junto do email, e deve ser atualizado quando essa chave mudar. No MCP, as credenciais de assinatura ficam em variáveis de ambiente.',
    },
    {
      question: 'O que impede o agente de gastar além do previsto?',
      answer:
        'A integração deve impor os limites de valor, destinatário e escopo e manter as aprovações adequadas. No MCP, HODLE_MCP_ALLOW_WRITES controla a exposição de ferramentas de escrita; confirm: true é um campo que o próprio agente pode preencher, não uma aprovação humana.',
    },
    {
      question: 'A Hodle tem servidor MCP? Preciso dele para integrar?',
      answer:
        'A Hodle documenta @hodle/mcp como um servidor local via stdio para Claude Code, Cursor, Codex e Hermes, com sandbox e consultas por padrão. O pacote não foi localizado no npm público na revisão de 04/10/2026; confirme o acesso com a equipe. O guia está em /docs/ai/mcp. O MCP é opcional: a integração REST pode ser feita diretamente.',
    },
    {
      question: 'Quais operações o agente consegue fazer?',
      answer:
        'Consultar carteiras, saldos, extrato e cotações; iniciar payout de stablecoin para Pix, invoices Lightning, depósitos e transferências quando autorizados. Wallet Transfer envia tokens na mesma rede, conforme a matriz do endpoint; não faz bridge. O MCP atual recusa payout de subcontas porque mantém um único par de credenciais de assinatura.',
    },
  ],
  related: [
    { label: 'API Pix stablecoin', href: '/api-pix-stablecoin' },
    { label: 'Carteiras auto-custodiais', href: '/wallet-auto-custodial' },
    { label: 'Glossário', href: '/glossario' },
    { label: 'MCP documentado pela Hodle', href: 'https://docs.hodle.com.br/docs/ai/mcp' },
    { label: 'Skill hodle-api', href: 'https://docs.hodle.com.br/docs/ai/skills' },
  ],
}
