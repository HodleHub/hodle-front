# Contrato — página de tópico `/para-agentes-de-ia`

Revisado em **2026-10-04** contra as páginas públicas específicas da API. Esta revisão
substitui a copy e as restrições técnicas do contrato de julho de 2026. O diagnóstico
histórico permanece em [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md).

## Escopo e fonte do conteúdo

- Implementação: `src/content/topics/paraAgentesDeIa.ts`, export `paraAgentesDeIa`.
- Keyword primária: `api para agentes de IA pagamento`; intenção comercial para dev/produto.
- H1: `Pagamentos por API e MCP para agentes de IA`.
- `updatedAt`: `2026-10-04T00:00:00-03:00`, refletindo esta revisão editorial.
- O registry e os componentes de tópico geram HTML, metadata, JSON-LD, Markdown e sitemap.
- A fonte TypeScript mantém a copy publicada. Este contrato registra limites factuais;
  não exige restaurar textos históricos palavra por palavra.

## REST, MCP e skill

A Hodle documenta **`@hodle/mcp`**, um servidor local **stdio** para Claude Code, Cursor,
Codex e Hermes. Em 2026-10-04, `npm view @hodle/mcp version --json` retornou E404 no
registro público, embora o guia instrua `npx -y @hodle/mcp`. Não prometer publicação no
npm nem instalação funcional por esse comando. Indicar a confirmação de acesso ao pacote
com a equipe, sem inventar repositório ou instruções de build. REST continua disponível
sem MCP. A skill `hodle-api` é documentada separadamente do servidor. O repositório
`HodleHub/skills` indicado para instalação retornou 404 sem autenticação na mesma data;
confirmar acesso antes de prometer instalação pública.

- O host padrão é `https://sandbox-api.hodle.com.br`.
- `HODLE_API_KEY` é obrigatório; `HODLE_API_URL` seleciona o ambiente.
- Apenas consultas são registradas por padrão. Escrita exige `HODLE_MCP_ALLOW_WRITES=true`
  e `confirm: true` em cada chamada.
- `confirm: true` pode ser preenchido pelo agente e **não é aprovação humana**. A aprovação
  depende do cliente MCP. Não prometer pagamentos autônomos seguros por construção.
- PIN e chave protegida vêm de `HODLE_WALLET_PIN` e
  `HODLE_PROTECTED_SYMMETRIC_KEY`, fora dos argumentos escritos pelo modelo.
- O MCP mantém um par de credenciais e recusa payout com `subAccountId`. Integrações de
  payouts por subconta precisam selecionar as credenciais corretas por titular.
- Em timeout ou `outcomeUnknown`, consultar estado antes de repetir uma escrita.
- Não apresentar este pacote local como conector remoto já disponível em ChatGPT/Claude web.

## Chaves e autorização

No fluxo por PIN, a API key autentica a conta; `walletPin` e `protectedSymmetricKey` da
origem permitem desbloquear a chave temporariamente no servidor para assinatura.
Descrever quem guarda e fornece essas credenciais, sem inferir custódia jurídica ou
controle exclusivamente no dispositivo do usuário.

**`POST /api/wallet/keys`** retorna `walletId`, `protectedSymmetricKey` e `email`.
Cachear **por walletId, junto do email do proprietário**; atualizar após mudança da chave
protegida daquela carteira. O endpoint exige `WALLET_PAYOUT_API` e permite uma consulta
por minuto por API key. Não ensinar GET, cache por usuário ou cache permanente.

Para origem de subconta, usar `fromSubAccountId` em transferências e `subAccountId` nas
consultas/payouts. O `walletId`, a chave e o escopo precisam corresponder.

## Redes por operação

`POST /api/wallet/transfer` envia o token na mesma rede, sem bridge:

| Rede | Ativos |
|---|---|
| Polygon | USDT, USDC, BRLA |
| Base | USDC, BRLA |
| Solana | USDT, USDC, BRS |
| BNB Chain | USDT BEP20 |

BRS exige `NORA_RAIL` além de `WALLET_PAYOUT_API`. BNB exige `BNB_ASSET` e conta habilitada,
tem mínimo de 1 USDT e não funciona no sandbox. Não incluir Tron na matriz de transfer.

`POST /api/wallet/payout` paga BRL via Pix e possui outra matriz: Polygon
(USDT/USDC/BRLA), Base (USDC/BRLA), Tron (USDT) e Solana (USDT/USDC/BRS). Exige
`WALLET_PAYOUT_API`, com `TRON_PAYOUT` para Tron e `NORA_RAIL` para BRS. A seleção segue
as regras de saldo e preferência da documentação. A resposta inicial não confirma a
liquidação; acompanhar `transactionId` até o resultado terminal.

Lightning → Pix usa `POST /api/lightning/invoice` em um fluxo separado.

## Fontes e links obrigatórios

A página deve oferecer links rastreáveis e descritivos para:

- [Guia para agentes](https://docs.hodle.com.br/docs/ai).
- [MCP: configuração documentada, controles e limites](https://docs.hodle.com.br/docs/ai/mcp).
- [Skill hodle-api](https://docs.hodle.com.br/docs/ai/skills).
- [Wallet Keys](https://docs.hodle.com.br/docs/wallet-keys).
- [Wallet Transfer](https://docs.hodle.com.br/docs/wallet-transfer).
- [Wallet Payout](https://docs.hodle.com.br/docs/wallet-payout).
- [Sandbox](https://docs.hodle.com.br/docs/sandbox).

Verificar o HTML público atual das páginas específicas antes de alterar contratos;
resultados de busca em cache e a introdução da documentação podem estar desatualizados.

## Limites e aceite

- Não inventar taxas, SLA, licença/regulação da Hodle, SDK, bridge ou disponibilidade remota.
- Não negar o MCP documentado nem prometer ausência de aprovação humana.
- Manter o design system e os componentes de tópico existentes, sem dependências novas.
- FAQ e conteúdo visível devem concordar com Markdown e JSON-LD gerados.
- Preservar slug, canonical, links internos e um único H1.
- Validar testes relevantes, TypeScript, lint e build no fluxo de revisão do repositório.

## Linguagem pública

Nomes internos de feature flags são referências de implementação neste contrato.
Não devem aparecer na landing, tópicos públicos ou Markdown: descreva a disponibilidade
da operação na conta em linguagem de produto, preservando os requisitos relevantes.
