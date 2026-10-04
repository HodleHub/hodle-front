# Correções de consistência para descoberta por IA — 2026-10-04

A auditoria de buscas sem citar a marca encontrou respostas divergentes sobre MCP,
acesso à documentação e tarifas. A revisão das páginas públicas também identificou
contratos incorretos nos exemplos de wallet e no Flow Builder. Este PR parte de
`ed86ee5` (PR #87); não atribui os resultados da auditoria a estas correções.

## Alterações

1. **Recursos para agentes:** links diretos para os guias por fluxo, MCP e skill;
   limites de configuração, ambiente, escrita e autorização humana explícitos.
2. **Credenciais de wallet:** POST para consulta de chaves, cache por walletId com
   titular e invalidação, assinatura temporária no servidor no fluxo por PIN.
   As explicações técnicas não determinam o enquadramento jurídico de custódia.
3. **Ativos e redes:** separar as matrizes de transferência, payout e Lightning;
   não apresentar uma transferência na mesma rede como bridge.
4. **Flow Builder:** receitas distintas por origem, criação com PIN, wallet
   selecionada, saldo, beneficiário/cotação, autorização e confirmação. Lightning
   usa invoice BOLT11; Bitcoin on-chain sem receita validada não gera cURL.
5. **Preços:** tabela comercial por volume com escopo contratual, referências a
   tarifas específicas de payout e Lightning. Paridade de HTML, Markdown e schema;
   nenhuma alteração de cobrança ou configuração do backend.
6. **Medição:** 32 observações estruturadas e redigidas em `measurementPlan.json`,
   com prompts, configurações e limitações para uma repetição comparável.

## Linha de base

São 16 prompts por motor, em conversas novas, sem citar Hodle: quatro termos
amplos e 12 perguntas comerciais pedindo busca web. ChatGPT citou Hodle em 5/12
perguntas comerciais e Claude em 1/12; termos amplos tiveram 0/8. Uma resposta
por combinação não estabelece ranking nem efeito causal. As capturas originais
permanecem fora do repositório; os registros públicos omitem dados de conta.

## Verificações externas e pendências

- `@hodle/mcp` é documentado, mas o npm público retornou E404 na consulta de
  versão. A instalação descrita ainda precisa de um pacote acessível.
- A instalação da skill aponta para `HodleHub/skills`, que retornou HTTP 404 sem
  autenticação. Isso não demonstra ausência de um repositório privado. O texto
  orienta confirmar acesso em vez de prometer instalação pública.
- A consulta somente leitura ao backend (`Hodler`, revisão `24a474dd1`) encontrou
  regras distintas por endpoint/conta. Não foi comprovada a configuração em
  produção; os valores do backend não foram promovidos a uma tabela universal.
- `/termos` ainda declara controle exclusivo e ausência de acesso técnico às
  chaves. Essas cláusulas precisam de revisão contratual à luz do fluxo por PIN
  documentado. O PR corrige a descrição técnica nas páginas comerciais, mas não
  altera o contrato nem conclui um enquadramento regulatório.
- Não há evidência de melhoria de citações após este PR. Repetir os mesmos prompts
  após publicação e novo rastreamento, preservando as configurações dos motores.

## Validação

- `pnpm test`: 24 arquivos / 131 testes Vitest e 13 testes Node passaram (144 no total).
- `pnpm exec tsc --noEmit` e ESLint de todos os arquivos TS/TSX alterados passaram.
- `pnpm build`: 110 páginas estáticas geradas. Avisos preexistentes de múltiplos
  lockfiles e classe Tailwind ambígua; lint e tipos verificados separadamente.
- Verificador SEO no build de produção local: 49 URLs e 8 imagens; canonical,
  H1, idioma, indexabilidade, JSON-LD, navegação, hreflang, Markdown, sandbox e 404.
- Browser Chrome: criação de wallet, troca do passo 6 para Lightning (3 passos),
  Bitcoin sem receita e retorno para stablecoin, links/MCP e escopo de preços.
- Linha de base: 32 pares únicos prompt/motor e denominadores conferidos.

Capturas nativas do build final:
[stablecoin, copy revisada sem flags](evidence/2026-10-04-ai-discovery/stablecoin.jpg),
[Bitcoin sem receita](evidence/2026-10-04-ai-discovery/bitcoin.jpg),
[recursos para agentes](evidence/2026-10-04-ai-discovery/agentes.jpg).
O ambiente não possui gravação de vídeo configurada nem credenciais R2; as imagens
ficam no repositório para revisão. Nenhuma mensagem externa foi enviada.
Nenhuma chamada de exemplo foi executada contra uma API financeira. Os testes
executam o shell com `curl` substituído por uma função local para validar payloads.

Risco principal: documentação pública ainda pode mudar fora deste repositório.
Rollback: reverter o commit deste PR; não há migração ou novo feature flag.

## Revisão de linguagem da landing

Após a revisão do PR #88, os identificadores internos de feature flags foram
retirados da home e dos tópicos de wallets e agentes (HTML e Markdown). A copy
agora descreve disponibilidade da operação na conta e mantém os requisitos de
verificação, PIN, rede e ambiente. Os contratos internos explicitam essa regra
para evitar reintroduzir os nomes na copy pública.

Validação da revisão: 32 testes focados passaram; ESLint dos três arquivos e
`git diff --check` passaram. O novo build gera 110 páginas estáticas.

A revisão também foi conferida em Chrome (Polygon e Tron) e em seis respostas
HTTP (HTML/Markdown da home e dos dois tópicos), sem identificadores internos.
