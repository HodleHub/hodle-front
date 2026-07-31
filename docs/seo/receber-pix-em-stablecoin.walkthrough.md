# Walkthrough — `/receber-pix-em-stablecoin`

Rodada `/sitemap` de 2026-07-30. Origem: o feature flag `PIX2STABLE` do monorepo Hodler
virou página indexável. Este é o único documento da rodada: decisões, mapa de keyword,
verdicts e rodadas de correção.

## Phase 0 — escopo

```
Topic: Pix na chave vira stablecoin — primária "receber pix em stablecoin" — intent: comercial
```

O que o flag faz, lido do código e não do briefing:

- `resolvePix2StableAccount.ts` — só age com o flag ligado para aquele usuário (ou global).
- `wooviProcessTransactionReceived.ts` — o gatilho é um Pix que chega **sem cobrança local**.
  Ou seja: chave Pix e QR Code estático. Pix pago contra cobrança emitida **não** converte.
- `pix2StableTargets.ts` — o único par em produção é **USDC na Base**. A lista é
  deliberadamente curta: um par só entra depois de provado contra o provedor.
- `getPix2StableReceivingKey.ts` — a chave é a chave padrão da **conta do próprio cliente**,
  lida com o appId dela. O appId compartilhado nunca é fallback, porque um Pix enviado para lá
  não converteria para esse usuário.
- `featureFlagRegistry.ts` — sem carteira padrão cadastrada, o valor **fica retido** e o time é
  alertado. Isso é comportamento de produto, então entra na copy.

**Canibalização: limpa.** `grep -ril` em `src/` mostrou que nenhuma página cobre *receber*. As
vizinhas são `/pagar-pix-com-usdt` (off-ramp), `/comprar-usdt-com-pix` (on-ramp, uma chamada
por operação) e `/api-pix-stablecoin` (dev). Esta é a única com intenção "quero receber e já
cair em dólar", e as três viram links relacionados.

## Phase 1 — decision log

| Pergunta | Resposta | O que isso descarta |
|---|---|---|
| Audiência | **PJ que recebe muito Pix** (tesouraria/financeiro) | Vocabulário de cripto para iniciante e o ângulo "poupar em dólar" de pessoa física. O termo do PixGo (`receber pix em dólar`, PF) fica para uma página-filha. |
| Intenção | **Contratar**, CTA direto | Estrutura de glossário e tabela comparativa. A SERP também não tem intenção de comparação. |
| Prova | Mecanismo (chave própria + whitelist) · **USDC na Base nomeado** · print do produto | "Stablecoin" genérico. Nomear o par fecha a porta para outros pares antes de existirem, e isso é o desejado. |
| CTA + fronteira | WhatsApp do time + "sujeito a condições especiais" | Autoatendimento. Criar conta como CTA levaria a pessoa direto na tela "PIX2STABLE não habilitado". |
| Restrição extra do usuário | **Não mencionar Woovi** | Qualquer citação ao provedor. O sujeito da copy é "a sua conta". |

`ctaSecondary` é campo obrigatório do tipo `TopicPage`. Para não contrariar a escolha de CTA
único externo, o secundário aponta para `/precos` — link interno, não uma segunda oferta.

## Phase 2 — keyword map (ao vivo, 2026-07-30)

- **Primária:** `receber pix em stablecoin` — intent comercial. A SERP é **produto + notícia**,
  sem portal de autoridade dominando; página de produto entra.
- **Secundárias:** receber pix em dólar · chave pix customizada cripto · gateway de pagamento
  pix cripto · receber pagamento em USDC empresa · qr code estático pix · receber pix em usdt
- **Descartadas:**
  - **`pix automático`** — homônimo perigoso. É o débito recorrente que o BC lançou em
    16/jun/2026. Usar o termo atrai a busca errada. Entrou na lista de proibidos.
  - `pix internacional` — não existe pelo BC, assunto diferente.
  - `comprar usdc com pix` — é on-ramp, já é `/comprar-usdt-com-pix`.
- **PAA → FAQ:**
  1. Como receber Pix em stablecoin?
  2. Empresa pode receber pagamento em stablecoin no Brasil?
  3. Preciso emitir nota fiscal recebendo em stablecoin?
  4. Qual a diferença entre chave Pix estática e QR Code dinâmico?
  5. A stablecoin cai na minha carteira ou fica na plataforma?
- **Incumbentes e o que cada um não cobre:**
  1. `pixgo.org/blog/receber-pix-em-dolar` — PF, DePix→USDT na Liquid, D+1. Sem PJ, sem
     USDC/Base, sem chave da própria empresa. (O fetch direto responde 403; a leitura veio do
     resultado de busca.)
  2. `finchain.com.br/receba-em-criptomoedas-e-stablecoin` — gateway com API, mas o ativo cai
     na wallet **da exchange**. Custodial.
  3. `br.beincrypto.com/chave-pix-customizada-facilita-o-recebimento-de-cripto` (SmartPay /
     Truther) — chave Pix personalizada → USDT **na carteira do app**. Custodial e PF.
  4. `pixbitcoin` — gateway "sem KYC" na Liquid. Posicionamento oposto ao nosso.
- **Ângulo vazio (nossa tese):** todos são carteira-de-app ou saldo custodial na exchange.
  Ninguém entrega, para PJ, **a chave Pix que a empresa já divulga** com o valor caindo em USDC
  numa **carteira externa que a própria empresa cadastra** — sem saldo intermediário e sem uma
  chamada de API por transação.
- **Proibidos:** Woovi · "pix automático" · rendimento/retorno · "conta bancária"/"somos banco"
  · "sem IOF"/economia fiscal · percentual de taxa · "em segundos"/"instantâneo" · qualquer
  ativo ou rede além de USDC/Base.
- **Achado regulatório que molda a copy:** a Resolução BCB 521 (fev/2026) trata operações com
  ativo referenciado em moeda estrangeira como **operação de câmbio**, com IOF-câmbio. A página
  não opina sobre enquadramento e a seção `condicoes` diz explicitamente que nota fiscal e
  apuração continuam com a empresa. Sem isso a página seria conselho fiscal implícito.
- **Filha candidata:** `/receber-pix-em-dolar` (ângulo PF, para atacar o termo do PixGo).

## Phase 3 — copy e ícones

Copy final vive no contrato, palavra por palavra. Seis seções: `o-que-e` (PROSE) ·
`como-funciona` (STEPS) · `a-tela` (SCREENSHOT) · `ativos` (ASSETS) · `autocustodia` (PROSE) ·
`condicoes` (PROSE).

**Ícones: nada precisou ser gerado.** `pix.svg`, `qr-code.svg`, `usdc.svg` e `base.png` já
existem em `public/`.

**O print.** A tela real só renderiza para conta com o flag ligado, e um print de produção
exporia CNPJ e chave Pix reais numa página pública. Decisão do usuário: **mock no design
system**. O mock foi montado a partir dos componentes reais (`Pix2StablePage.tsx`,
`Pix2StablePixKeyCard.tsx`, `Pix2StableWalletForm.tsx`, `Pix2StableDeliveryList.tsx`),
respeitando a paleta `dune` e Space Grotesk, e renderizado em 1920×3002 com Playwright. Dados
ilustrativos (CNPJ 12.345.678/0001-90, endereços e hashes fictícios) e legenda explícita "Tela
do produto com dados ilustrativos." — a legenda existe porque os valores de taxa no print
sugerem um percentual, e a página não publica taxa.

## Phase 4 — contrato

[`receber-pix-em-stablecoin.contract.md`](receber-pix-em-stablecoin.contract.md).

Duas mudanças estruturais que este tópico exige:

1. **`TopicSection` ganha `image: TopicImage | null` e o kind `SCREENSHOT`.** Não existia slot
   de imagem no tipo. Segue a convenção do arquivo (`null` explícito, não opcional), então os 8
   tópicos existentes recebem `image: null` em cada seção — varredura mecânica, texto intacto.
2. **`body` passa a renderizar parágrafos.** Hoje o `body` inteiro cai num único `<p>`, então os
   `\n\n` que os 8 tópicos já usam colapsam num parágrafo corrido. É bug pré-existente que
   afeta todas as páginas de tópico; a correção é um helper que quebra em `\n\n`.

## Achado fora de escopo — OG image do site inteiro

`/og-image-v2.png` **não existe no repositório**: não está em `git ls-files public/`, não está
em `public/`, e não é gerado por rota. Ainda assim `https://hodle.com.br/og-image-v2.png`
responde 200 `image/png` com `x-vercel-cache: HIT` — é artefato de um deploy antigo.

Os 8 tópicos, o `layout.tsx` e as páginas `/faq`, `/precos`, `/termos`, `/privacidade`, `/ai`
todos apontam para ele. **O próximo `vercel --prod` quebra o OG de todo o site.** Esta página
usa o mesmo caminho por consistência: o conserto é restaurar um asset para o site inteiro, não
um desvio por página. Vira card próprio no board `hodle-front`.

## Phase 5 — dispatch

Board `hodle-front`, assignee `hodle-seo`, skill `sitemap-build`, branch
`feat/seo-receber-pix-em-stablecoin` (criado de `origin/main`, já com `public/pix2stable-tela.png`
e estes dois documentos commitados).

## Phase 6 — review

`REVIEW: PASS` — rodado no Claude Code em 2026-07-30, na branch, contra `PORT=3111 pnpm start`
(build de produção, não dev server).

| Item | Verdict | Evidência |
|---|---|---|
| 1. `pnpm build` verde, página estática | PASS | `.next/server/app/receber-pix-em-stablecoin.html` gerado |
| 2. Print desktop 1440 e mobile 390, sem overflow | PASS | `scrollWidth > innerWidth` = `false` nos dois; prints em `evidence/` |
| 3. `/sitemap.xml` com a URL e `lastmod` | PASS | `<loc>https://hodle.com.br/receber-pix-em-stablecoin</loc>` + `<lastmod>2026-07-30T00:00:00.000Z</lastmod>` |
| 4. title, description, canonical, OG, um só `<h1>` | PASS | canonical self-referente absoluto; `<h1>` count = 1; 9 `<h2>` |
| 5. JSON-LD `WebPage` + `FAQPage` + `BreadcrumbList` | PASS | 7 blocos `ld+json`, todos parseiam; FAQPage com as 5 perguntas do PAA |
| 6. Zero erro de console, zero 404, rotas vizinhas abrem | PASS | 8 rotas em 200; único 404 é `/_vercel/insights/script.js` |
| 7. Links internos nos dois sentidos | PASS | footer → página; página → `/precos`, `/pagar-pix-com-usdt`, `/comprar-usdt-com-pix`, `/api-pix-stablecoin` |
| 8. Prints renderizados no corpo do PR | PASS | seção `## Evidência` do PR #45, raw URL fixada no SHA |
| Extra: `tsc --noEmit` | PASS para esta PR | zero erro nos arquivos tocados |
| Extra: `eslint` nos arquivos tocados | PASS | exit 0 |
| Extra: copy = contrato, palavra por palavra | PASS | sem drift; zero "Woovi" e zero "pix automático" em `src/`+`public/` |

### Falsos positivos investigados, e por que não são falha

1. **404 de `/_vercel/insights/script.js`.** O `@vercel/analytics` já está no `layout.tsx` do
   `main`; o script só existe quando servido pela Vercel. Afeta toda página, local, e não é
   desta PR.
2. **Header sobre o hero no print mobile de página inteira.** Artefato de `fullPage` com header
   `position: sticky`. Medido no DOM: header `0→65px`, `<h1>` em `204px`, `overlap: false`. O
   print de viewport (`mobile-hero.jpeg`) mostra o hero correto.
3. **`tsc --noEmit` com 4 erros.** Todos em `.next/types/app/articles/[slug]/page.ts`, gerados
   de `src/app/articles/[slug]/page.tsx`, que declara `params: { slug: string }` em vez de
   `Promise<{ slug: string }>` — migração Next 15 pendente num route que esta PR não toca.
4. **`pnpm lint` falhando.** Conflito de config do eslint por rodar dentro de `.worktrees/`
   (o `.eslintrc.js` do repo pai colide). Com `--resolve-plugins-relative-to .` nos arquivos
   da PR: exit 0.

## Phase 7 — ciclo SEO

### Aberto, ranqueado por (impacto × facilidade)

1. **`/og-image-v2.png` não existe no repositório** — alto impacto, fácil. Ver §Achado fora de
   escopo. Quebra o OG do site inteiro no próximo `vercel --prod`. Card próprio.
2. **`public/base.png` é um quadrado azul sem marca alguma** — médio impacto, fácil. Aparece no
   hero e na seção `ativos` desta página, cuja prova é justamente "USDC na Base", e também no
   `/comprar-usdt-com-pix` que já está no ar. Trocar pelo símbolo real da Base a partir do brand
   kit oficial, sem redesenhar de cabeça.
3. **`src/app/articles/[slug]/page.tsx` com `params` não-Promise** — baixo impacto para SEO,
   fácil. É o que suja o `tsc --noEmit` do repo e esconde erro real de tipo nas próximas
   rodadas. `next.config.ts` tem `ignoreBuildErrors`, então o build não pega.
4. **Página-filha `/receber-pix-em-dolar`** — ângulo pessoa física, para atacar o termo que o
   PixGo ocupa hoje. É a única secundária da Phase 2 que não cabe nesta página.

### Aprendizado desta rodada, para a skill

Commitar o asset antes do dispatch usando um worktree próprio **no mesmo branch** faz o Hermes
falhar com `git worktree add failed ... already checked out` e o card vira `blocked` em 1s. O
asset tem que ir para o branch e o branch tem que ficar livre antes do dispatch.
