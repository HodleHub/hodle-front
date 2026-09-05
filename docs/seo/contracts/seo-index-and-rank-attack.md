# SEO — indexação das páginas B2B + ataque de ranking

## Goal

Duas frentes, uma branch. **(1) Indexação:** as páginas B2B (`/caas`, `/neobank`,
`/brs`) estão fora do pipeline que faz uma página existir para buscador e para IA —
sem variante markdown, fora do `llms.txt`, sem JSON-LD — e a `main` está vermelha
porque `/caas` não foi registrada em `sitePaths.ts`. **(2) Ranking:** criar as duas
TopicPages que ocupam lacunas reais de SERP e reforçar `/pagar-pix-com-usdt`, hoje
em #4, para disputar #1.

O alvo de ranking foi derivado de dados reais, não de intuição: autocomplete do
Google pt-BR/BR e leitura das SERPs no navegador em 2026-09-05. Dois achados regem
todas as decisões abaixo:

- `caas` isolado no Brasil puxa **CAASP** (Caixa de Assistência dos Advogados de SP).
  O termo com volume é `crypto as a service` por extenso.
- `infraestrutura cripto`, `integrar cripto`, `sdk cripto` e `carteira cripto empresa`
  retornam **zero** sugestões de autocomplete. Não são alvos; não use como keyword.

Mecanismo comprovado na SERP: em `receber pix em stablecoin` a Hodle é #1 orgânico
**e** é nomeada na Visão Geral da IA do Google ("ex: Foxbit ou Hodle"). Em
`pagar pix com usdt` a Hodle é #4 e a Visão Geral da IA cita um post de Instagram no
lugar dela. Exact-match em #1 é o que compra a citação da IA.

## Acceptance

### A. Indexação

- [ ] `pnpm vitest run` verde na branch (hoje `sitePaths.spec.ts` falha na `main` com `missing: ["/caas"]`).
- [ ] A página CaaS responde em `/crypto-as-a-service`; `/caas` responde **301 permanente** para ela, via `redirects()` no `next.config.ts`, no mesmo padrão de `/articles/precos`.
- [ ] `metadata.alternates.canonical` e a constante `siteUrl` da página apontam para `/crypto-as-a-service`. Nenhuma URL `/caas` sobra em `sitemap.ts`, `Header.tsx`, `Footer.tsx` ou `pageUpdatedAt.ts`.
- [ ] `staticSitePaths` cobre `/crypto-as-a-service` (o `sitePaths.spec.ts` exige uma entrada por rota sob `src/app`).
- [ ] `/crypto-as-a-service`, `/neobank` e `/brs` respondem `Accept: text/markdown` com `text/markdown; charset=utf-8`. Hoje devolvem HTML.
- [ ] As três aparecem em `staticMarkdownPaths` e na seção "Markdown Representations" do `public/llms.txt`.
- [ ] `/crypto-as-a-service` e `/neobank` emitem JSON-LD. Hoje nenhuma das duas emite nada.
- [ ] `pnpm build` e `pnpm lint` verdes; `pnpm lint` sem warning novo além dos que já existem na `main`.

### B. Ranking

- [ ] Nova TopicPage `gateway-de-pagamento-cripto` no registry, com página, markdown e sitemap saindo automáticos pelo mecanismo de topic.
- [ ] Nova TopicPage `como-aceitar-criptomoedas`, idem.
- [ ] `/pagar-pix-com-usdt` ganha bloco de FAQ com `FAQPage` JSON-LD, respondendo as perguntas que o Google exibe hoje no "As pessoas também perguntam" dessa query.
- [ ] Cada TopicPage nova entra em `topics.ts` e em `topicMarkdownSlugs` (o `markdownPaths.spec.ts` exige que as duas listas batam exatamente).
- [ ] Specs vitest cobrindo: o 301 de `/caas`, a negociação markdown das três páginas B2B, e a presença das duas topics novas no registry.

## Security

N/A — site estático de marketing, sem autenticação, sem dado de usuário, sem
movimentação de dinheiro. Nenhuma rota de API tocada. O único risco é de SEO:
trocar a URL de uma página. Mitigado porque `/caas` foi mergeada há minutos e
**nunca foi publicada em produção** (o deploy no ar é de 2026-09-01), então não há
link externo nem indexação a preservar — e mesmo assim entra o 301.

## Conteúdo — dados de busca já apurados

Use exatamente estes termos. Eles vieram do autocomplete do Google e das SERPs, não
de estimativa.

**`gateway-de-pagamento-cripto`** — `primaryKeyword: 'gateway de pagamento cripto'`.
Autocomplete: `gateway pagamento cripto`, `gateway de pagamento criptomoeda`,
`gateway pix cripto`, `gateway saque cripto`, `gateway de pagamento com saque em crypto`.
Top-10 atual é 100% estrangeiro — CoinGate, Cryptomus, NOWPayments, Banxa, Passimpay,
Volet — e nenhum deles liquida em Pix nativo. **O ângulo da página é exatamente esse:**
gateway que liquida em Pix, não em transferência internacional. Nada de "infraestrutura
cripto" no title.

**`como-aceitar-criptomoedas`** — `primaryKeyword: 'como aceitar criptomoedas'`.
Autocomplete: `como aceitar criptomoedas`, `como aceitar pagamento em criptomoedas`,
`aceitar pagamento em cripto`, `receber pagamento em cripto`. Quem ranqueia hoje é
Stripe, Mercado Pago, Kraken e Fecomercio — genéricos, nenhum resolve Pix com
stablecoin. Intenção é B2B vestida de tutorial: a página ensina de verdade e só então
apresenta a Hodle.

**`/pagar-pix-com-usdt`** — PAA capturado na SERP em 2026-09-05, responda estas quatro,
nesta ordem, texto curto e direto:
1. Como posso pagar com USDT?
2. Como posso pagar boletos com USDT?
3. Como usar USDT no Brasil?
4. A USDT é confiável?

## Regras de conteúdo

- pt-BR, voz da Hodle: frase curta, afirmativa, técnica, zero marketing vazio. Leia
  `src/content/topics/apiPixStablecoin.ts` e siga o mesmo registro.
- Nunca nomear o provedor/parceiro por razão social — sempre pelo papel regulatório.
  É a convenção de `/termos` e da home.
- Não prometer trilho que não existe. A Hodle não é banco, não emite moeda eletrônica,
  não emite stablecoin e não custodia ativo de cliente.
- Não inventar número: taxa, volume e prazo só se já estiverem publicados no site.
- Title de topic page **não** leva sufixo `| Hodle` — o layout já aplica
  `template: '%s | Hodle'` e duplicaria.

## Regras de código (CLAUDE.md do repo)

Um export por arquivo, arrow function, sem `let`, sem `else`, sem classe, sem type
assertion, RO-RO, `as const` em literal fixo, padding de linha em branco entre
statements (`padding-line-between-statements`), tipagem explícita de parâmetro e
retorno, sem comentário no meio do código.

## Validation Block

```
COMANDOS:
  - pnpm vitest run          # 63+ testes, zero falha
  - pnpm build               # verde
  - pnpm lint                # sem warning novo

VERIFICAR NO BUILD LOCAL (next start na porta 3107):
  - curl -sI /caas                                   -> 308 ou 301, location /crypto-as-a-service
  - curl -s -H 'Accept: text/markdown' /crypto-as-a-service -> content-type text/markdown
  - curl -s -H 'Accept: text/markdown' /neobank            -> content-type text/markdown
  - curl -s -H 'Accept: text/markdown' /brs                -> content-type text/markdown
  - curl -s /sitemap.xml | grep -c gateway-de-pagamento-cripto   -> 1
  - curl -s /sitemap.xml | grep -c como-aceitar-criptomoedas     -> 1
  - curl -s /sitemap.xml | grep -c '/caas'                       -> 0

SHOTS (Playwright, viewport a viewport — as seções usam whileInView
       e print full-page sai em branco):
  - /crypto-as-a-service
  - /gateway-de-pagamento-cripto
  - /como-aceitar-criptomoedas
  - /pagar-pix-com-usdt   (o bloco de FAQ novo)
```
