# real-onchain — walkthrough

Rodada `/sitemap` de 2026-07-25. Primeira página do registry de tópicos.

## Phase 0 — Scope

`Topic: Real onchain — primary keyword "real tokenizado" — intent: informacional + comercial`

Canibalização: `grep -ril 'onchain|tokeniz|brla|yield' src/` em hodle-front não retornou
nada. Nenhuma página existente disputa o termo. Sem conflito.

## Phase 1 — Decision log

| Pergunta | Resposta | O que isso descarta |
|---|---|---|
| Ângulo | referência = página da Avenia; cobrir comparativos BRLA / BRZ / BRL1 | descarta glossário raso sem comparação |
| Yield | validar contra a implementação real da API Hodle (asset BRLA) | descarta escrever yield por suposição |
| Citar BRLA + Avenia | sim, nominalmente | descarta copy genérica sem emissor |
| Slug | `/real-onchain` com `<title>` otimizado para "real tokenizado" | descarta `/real-tokenizado` e `/stablecoin-real` |

## Phase 2 — Keyword map

- **Primária:** real tokenizado — intent misto (glossário + produto); a SERP mistura
  emissor e portal explicativo
- **Secundárias:** real onchain · stablecoin de real brasileiro · BRLA · BRZ · BRL1 ·
  Drex vs stablecoin · yield em real
- **Descartada:** "real digital" isolado — é o Drex/CBDC do Banco Central; termo dominado
  por imprensa e pelo próprio bcb.gov.br, e confunde a intenção da página
- **PAA → FAQ:**
  1. O que é real tokenizado?
  2. Qual a diferença entre real onchain e Drex (real digital)?
  3. Como comprar BRLA com Pix?
  4. Quem emite o BRLA e o que dá lastro ao token?
  5. Real onchain rende?
- **Incumbentes:** `foxbit.com.br/blog/brl1-o-que-e` (emissor, didático, sem API) ·
  `blocktrends.com.br` (levantamento "10+ stablecoins de real", raso em mecanismo) ·
  `bitso.com/business/products/brl1` (produto do consórcio) · `brlp.money`,
  `liqi.com.br` (emissores) · `fdr.com.br`, `contaazul.com` (Drex vs stablecoin)
- **Ângulo vazio (nossa tese):** ninguém explica o caminho completo **Pix → real onchain
  (BRLA na Polygon) → dólar/stablecoin → volta em Pix**, com API. Os emissores explicam o
  token; os portais explicam o conceito. Ninguém mostra a operação.
- **Proibidos na copy:** rendimento garantido · investimento seguro · "somos banco" ·
  percentual de retorno · alegar regulação própria (o padrão da casa é "parceiros
  regulados pelo Banco Central")
- **Páginas-filhas candidatas:** `/como-comprar-brla-com-pix` · `/api-stablecoin-brl` ·
  `/real-onchain-vs-drex` (só se a página mãe ranquear e a seção de comparação puxar
  tráfego próprio)

## Validação contra a implementação (Hodler monorepo)

Feita antes de escrever a copy — cada afirmação da página tem uma linha de código atrás.

| Afirmação | Evidência | Veredito |
|---|---|---|
| Hodle compra BRLA | `apps/admin/src/components/buy/buyAssetV2.tsx:125` (asset `BRLA`, `networks: ['polygon']`) | verdadeiro, **só Polygon** |
| Hodle recebe BRLA | `apps/admin/src/components/receive/receiveAssetConfig.ts:161` ("Envie apenas BRLA na rede Polygon") | verdadeiro, só Polygon |
| BRLA por API | `apps/server/src/swagger.yml:668` `POST /api/wallet/transfer` (USDT/USDC/BRLA na Polygon, ERC-4337 com gas patrocinado) | verdadeiro; exige flag por conta |
| BRLA para qualquer conta | `buyAssetV2.tsx:390` — `getKycAdjustedAssets` remove `BRLA` e `USDC` quando `!isFullKyc` | **falso**: BRLA exige KYC completo |
| Avenia é a emissora | `apps/server/src/providers/avenia/**` (swap para BRLA, cashout, webhooks) + imprensa | verdadeiro |
| Hodle oferece rendimento em real | `providers/evm/yield/brlaYield.ts` (stake BRLA → stBRLA) só é usado por `scripts/pocBrlaYield.ts` e `scripts/analyzeBrlaYieldHistory.ts`; `discoverDeframeBrlaStrategy` registra que a chave atual **não expõe estratégia BRLA**; nenhuma rota, nenhuma UI | **falso hoje** — é POC |

Consequência para a copy: a seção de rendimento **descreve o mercado** (stablecoins de
real com lastro em títulos públicos distribuem rendimento; o contrato stBRLA existe na
Polygon) e diz explicitamente que a Hodle **não oferece rendimento em real hoje**.
Nenhuma promessa, nenhum percentual. Quando o produto existir, a seção vira oferta.

Ícone: `public/brla.png` copiado de `apps/admin/public/brla.png` (o admin já usa esse
ícone para o asset) — nada gerado, nada inventado.

## Phase 6 — REVIEW: PASS

Rodado no Claude Code contra o build de produção da branch (`pnpm start`, :3111), não no
relato do worker.

| Asserção | Resultado |
|---|---|
| `pnpm build` | verde; `/[slug]` sai `●` SSG com filho `/real-onchain` |
| `npx tsc --noEmit` | zero erro nos arquivos da página; restam 2 erros **pré-existentes** em `.next/types/app/articles/[slug]` (a página de artigo usa `params` síncrono, forma legada do Next 15), mascarados por `typescript.ignoreBuildErrors` |
| copy vs. contrato | **byte-idêntica** (diff programático do bloco do contrato contra `realOnchain.ts`) |
| `<h1>` | exatamente 1 — "Receba em Pix, guarde em real onchain" |
| `<h2>` | 10 — as 7 seções do contrato + FAQ + relacionados + CTA final |
| `<title>` | "Real tokenizado: stablecoin de real com Pix \| Hodle" (51 chars) |
| meta description | 151 caracteres |
| canonical | `https://hodle.com.br/real-onchain` |
| OG | `og:type=article`, `og:image` absoluto 1200x630 |
| JSON-LD | `WebPage` + `FAQPage` + `BreadcrumbList` parseiam; as 5 perguntas do schema estão visíveis no HTML |
| `/sitemap.xml` | contém a URL com `lastmod 2026-07-25`, `changefreq monthly`, `priority 0.8` |
| assets | `pix.svg`, `brla.png`, `polygon.svg`, `usdt.svg`, `usdc.svg` → todos 200, zero imagem quebrada |
| rotas vizinhas | `/`, `/faq`, `/termos`, `/privacidade`, `/cookies`, `/articles`, `/articles/precos`, `/checkout` → 200 |
| links internos | footer → `/real-onchain`; página → `/faq`, `/articles/precos`, `/articles` |
| mobile (384 CSS px) | sem overflow horizontal; a tabela comparativa rola dentro de um pai `overflow-x: auto` |
| console | 1 erro, idêntico ao da home: `/_vercel/insights/script.js` 404 (só existe no ambiente Vercel) — baseline, não regressão |

Evidência: `docs/seo/evidence/real-onchain/` (hero desktop, full page desktop, full page mobile).

Ajuste feito no review: `avenia.png` saiu da fileira de ícones do hero (é wordmark, não
ícone de moeda — ficava visualmente estranho ao lado das coins) e entrou `usdc.svg`. A
menção à Avenia continua no texto e na tabela comparativa, que é onde ela agrega
credibilidade.

Nota de captura: o harness Playwright desta máquina reporta `innerHeight` 1350 para uma
viewport pedida de 900 (descompasso de DPR) e por isso prints de viewport/elemento saem
brancos ou cortados. Só full-page + asserção de DOM valem como evidência aqui.

## Phase 7 — ciclo de melhoria SEO

| Melhoria | Impacto | Facilidade | Destino |
|---|---|---|---|
| `layout.tsx` injeta `WebPage` + `BreadcrumbList` globais em TODA página, então `/real-onchain` declara dois `WebPage` e dois `BreadcrumbList` conflitantes (o global aponta para a home) | alto | média | card `hodle-front` — mover o schema global para a home |
| ~~`<CodeBlock />` genérico do `@hodle/sdk` na seção de API~~ | — | — | **corrigido neste PR** (ver abaixo) |
| `articles/[slug]/page.tsx` usa `params` síncrono (Next 15 quer `Promise`) — 2 erros de tipo escondidos por `ignoreBuildErrors` | médio | trivial | card `hodle-front` |
| `next.config.ts` com `ignoreBuildErrors` + `ignoreDuringBuilds` deixa o CI passar com type/lint quebrados | médio | média | card `hodle-front` |
| OG image igual para todas as páginas (`/og-image-v2.png` → rewrite para `/api/og`) | médio | média | card `hodle-front` — `/api/og?title=` com o h1 do tópico |
| Página `/como-comprar-brla-com-pix` (cauda longa comercial que sobrou da Phase 2) | médio | média | card `hodle-front` |
| Página `/api-stablecoin-brl` | médio | média | card `hodle-front` |

Depois do merge: `vercel --prod --yes` a partir de `main` (ver `deploy.md`), e então
validar no ar (`curl -s https://hodle.com.br/sitemap.xml | grep real-onchain` e
`curl -sI https://hodle.com.br/real-onchain`). Submeter a URL no Search Console é ação
humana — indexação não acontece porque o PR mergeou.

## Fix do P2 do autoreview (rodada 2)

O autoreview (`glm-5.2`) apontou um único finding: `SectionCode` renderizava o
`<CodeBlock />` da home — snippet genérico do `@hodle/sdk` com `client.payments.create`,
que não tem nada de BRLA. Numa página cuja tese é "o caminho Pix → real onchain por API",
o bloco de código genérico derrubava justamente o diferencial. Procede.

Corrigido de verdade, não silenciado:

- `TopicCode = { label, language, snippet }` no tipo, `code: TopicCode | null` em
  `TopicSection` (as outras 6 seções levam `code: null`).
- Novo `src/components/topic/topicCodeBlock.tsx` — bloco escuro com `overflow-x-auto`,
  fonte mono do site. O `CodeBlock` da home fica intocado (é hardcoded span-por-span e
  serve a home; parametrizá-lo seria risco sem ganho).
- Snippet real, conferido contra `apps/server/src/swagger.yml` e
  `apps/server/src/app.ts:236` do monorepo Hodler: `POST /api/wallet/transfer`,
  `Authorization: Bearer` (o `apiKeyAuth` aceita `Authorization` ou `X-API-Key`), corpo
  com `asset: "BRLA"`, `amount`, `recipientAddress`, `reference` (chave de idempotência),
  `walletPin`, `protectedSymmetricKey`, e a resposta 200 com `txHash`.
- Limpeza de lint no caminho: parâmetro `topic` não usado em `SectionProse` e import
  `Image` não usado em `topicHero`. `eslint` nos arquivos do tópico: 0 erro, 0 warning.

Evidência: `docs/seo/evidence/real-onchain/api-section-brla-snippet.png`.

Nota de captura (repetida porque custou tempo duas vezes): além do descompasso de DPR,
o `pnpm start` serve HTML com cache — depois de rebuildar, navegue com cache-bust
(`?v=2`) ou o browser mostra a versão anterior e você "valida" o build velho. E como as
seções revelam por `whileInView`, um full-page recém-carregado sai com lacunas brancas:
role a página inteira em passos antes de capturar.
