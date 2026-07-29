# Walkthrough — descobribilidade por LLM (programa AI-SEO)

Artefato único do programa. Registra o diagnóstico, as decisões do dono, os mapas de
keyword derivados da SERP real e a fila de execução. Todo card do Hermes referencia este
documento.

Data do diagnóstico: 2026-07-28. Skills usadas: `seo-audit` (framework), `ai-seo`
(AEO/GEO), `sitemap` (Phase 0-7 das páginas de tópico).

Objetivo do dono, na íntegra: *"eu quero que qualquer LLM encontre facilmente a gente ao
procurar termos comuns, api, wallet.. etc"*.

---

## 1. Diagnóstico — o que estava impedindo

Ordem por impacto real, medido no ar (não no código).

### 1.1 Produção estava velha (bloqueador absoluto)

PRs #29, #30 e #31 mergeadas em `origin/main` (`fc04d4e`) e nunca deployadas. Medido em
2026-07-28:

| Sinal | Live | `origin/main` |
|---|---|---|
| `robots.txt` | zero regra de AI crawler | GPTBot, ClaudeBot, PerplexityBot, CCBot… allow |
| `llms.txt` | 968 bytes (versão antiga) | ~4,5 KB |
| blocos `application/ld+json` na home | 1 | 5 |
| `/real-onchain` (PR #29) | 404 | rota estática |

Consequência: nenhuma das mudanças de SEO das três últimas PRs existia para qualquer
crawler. Deploy é `vercel --prod --yes` a partir de `main` — ação humana.

### 1.2 `docs.hodle.com.br` bloqueava TODA LLM

O ativo mais citável para a query "api" — 13 páginas de referência com endpoints reais —
estava fechado para todos os motores de resposta. `curl https://docs.hodle.com.br/robots.txt`
retornava o bloco **Cloudflare Managed robots.txt**:

```
User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference

User-agent: ClaudeBot        Disallow: /
User-agent: GPTBot           Disallow: /
User-agent: CCBot            Disallow: /
User-agent: Google-Extended  Disallow: /
(+ Applebot-Extended, Bytespider, meta-externalagent, Amazonbot,
   CloudflareBrowserRenderingCrawler)
```

Idêntico em `app.hodle.com.br`. Além da declaração no robots, havia **bloqueio ativo**: um
fetcher de IA recebeu `403` em `https://docs.hodle.com.br/` enquanto `curl` recebeu `200`
— assinatura de Bot Fight Mode / regra de bot-score, não de robots.txt.

`docs.` também não tinha `sitemap.xml` (404) nem `llms.txt` (404).

Encaminhado a um agente dedicado com acesso ao dashboard do Cloudflare (fora do escopo de
código deste repo).

### 1.3 O investimento das duas últimas PRs foi no lever errado

As PRs #31 e o commit `9cdf9d5` colocaram **148 termos** em `<meta name="keywords">` e um
`regulatoryStatus` de VASP no JSON-LD.

`<meta name="keywords">` é ignorado pelo Google desde 2009 e não é lido por LLM — LLM lê
texto renderizado e JSON-LD. 148 termos numa única URL não ganham nenhum deles.

**Causa raiz identificada:** a skill `ai-seo` (`~/.hermes/skills/ai-seo/SKILL.md`) instrui
literalmente *"Add all terms to keywords array (aim for 100+ specific phrases)"* e traz o
`regulatoryStatus: "VASP - Regulated by [Authority]"` como template. A skill produziu o
anti-padrão. Corrigida junto com este programa (ver §6).

### 1.4 Superfície indexável: 7 URLs

O que decide query genérica é **uma URL por intenção**. Os incumbentes que a pesquisa ao
vivo levantou provam o padrão: `bipa.app/usdt`, `produtos.bipa.app/crypto-as-a-service`,
`woovi.com/stablecoins/`, `brasilbitcoin.com.br/api-pix-criptomoedas`,
`infra.foxbit.com.br`, `depixpay.com`, `dominipay.com`, `criptapix.com`.

Verificado ao vivo: para *"API pix stablecoin Brasil infraestrutura cripto"* a Hodle
aparece (3º, por match exato de `<title>`). Para *"wallet as a service API auto-custodial
Brasil"* — **invisível**; ganham Circle, Bridge, Cobo, BitGo.

A máquina para resolver isso já existe neste repo (`src/app/[slug]/page.tsx` + registry
tipado + guard de colisão de slug + `sitemap.ts` lendo `getAllTopics()`), entregue pela
PR #29. Tinha **1** tópico.

### 1.5 Bugs técnicos confirmados ao vivo

| # | Achado | Impacto | Onde |
|---|---|---|---|
| 1 | `/termos` canonicaliza para a home | Alto — auto-deindexa | `layout.tsx` tem `alternates.canonical` no root; `termos/page.tsx` não sobrescreve |
| 2 | `SearchAction` aponta para `/search?q=`, rota inexistente | Médio — schema inválido | `layout.tsx` `websiteJsonLd.potentialAction` |
| 3 | `significantLink` cita `/articles`, que a PR #30 marcou para sair | Médio | `layout.tsx` `WebPage` |
| 4 | `/articles/precos` tem 116 palavras | Alto — é a página que a LLM cita para preço | `src/content/articles/precos.mdx` |
| 5 | FAQ escreve `(/articles/precos)` como texto literal, não link | Médio — zero link interno | `faq/page.tsx` |
| 6 | `BreadcrumbList` de item único no root | Baixo — ruído | `layout.tsx` |
| 7 | Sem `hreflang`, sem `/en` | Alto para query em inglês | — |
| 8 | `app.hodle.com.br` indexável, `<html lang="en">`, `<title>Hodle</title>` | Médio — canibaliza brand | fora deste repo |
| 9 | `google-site-verification` vazio no HTML live | Médio — sem GSC | `NEXT_PUBLIC_GOOGLE_VERIFICATION` não setada na Vercel |
| 10 | `foundingDate: '2024'` sem fonte | Médio — fato errado legível por máquina | `layout.tsx` `organizationJsonLd` |
| 11 | `Organization.sameAs` sem X | Médio — grafo de entidade fraco | `layout.tsx` |
| 12 | OG image 354 KB / 2,5 s | Baixo | `public/og-image-v2.png` |

### 1.6 Lacuna de citação por terceiros (o mecanismo dominante)

LLM responde majoritariamente a partir de corpus de terceiros, não do seu site. A Hodle
não tem menção em nenhum agregador, e a marca colide com "HODL" / "Hodl Hodl", que roubam
a query.

**Prova de que isso já custa:** uma busca em 2026-07-28 devolveu, sobre a Hodle,
*"taxas de 1,5% para DEPIX e 3,5% para Bitcoin"* — número que a PR #25 normalizou para
**2%**. Já existe LLM afirmando preço errado da Hodle, com base em fonte de terceiro
desatualizada. É por isso que §3 (bloco de citação) e o item 4 da §1.5 (página de preço
real) são prioridade e não cosmético.

Comparativos ("Hodle vs X") foram **explicitamente descartados pelo dono** — fora do
escopo deste programa.

---

## 2. Decision log

| # | Pergunta | Resposta do dono | O que isso descarta |
|---|---|---|---|
| 1 | Quais entidades e endereços publicar como dados de citação? | **Priorizar a Hodle LLC** | Descarta BR como publisher primária. `Organization` = Hodle LLC (Wyoming) com endereço completo; HODLE TECNOLOGIA LTDA entra como `subOrganization` com CNPJ e apenas `addressCountry: BR` — endereço de rua brasileiro **não** publicado |
| 2 | O JSON-LD afirma "VASP regulado pelo BACEN", mas o CNAE é 6201-5/01 (software) | **Remover toda menção regulatória do JSON-LD** | Descarta manter os termos VASP/PSAV/BACEN e descarta a variante "reescrever com a redação do FAQ". Saem 33 keywords regulatórias, `regulatoryStatus`, `additionalType: FinancialService` e a seção "Regulatory & Compliance" do llms.txt |
| 3 | Quais páginas de tópico na primeira leva? | `/pagar-pix-com-usdt`, `/api-pix-stablecoin`, `/wallet-auto-custodial` | `/lightning-para-pix` fica para a segunda leva |
| 4 | Superfície em inglês? | **Leva separada, depois** | Nenhum card desta leva gera `/en` ou `hreflang` |
| 5 | Comparativos com concorrentes? | **Não quer** | Nenhuma seção `COMPARISON` contra concorrente nomeado; nenhuma página "vs" |
| 6 | DEPIX na landing? | **Não mencionar mais** | Sai a linha DEPIX do `llms.txt`; `public/depix.png` fica no repo mas sem referência |
| 7 | Redação do disclaimer legal | **Texto aprovado pelo dono** (ver abaixo) | Descarta a menção nominal ao Banco Central ao descrever os parceiros; descarta "não presta serviços de transmissão de valores" em favor de "não provê... transmissão de dinheiro"; acrescenta "não emite cartões diretamente" |

### Redação canônica (decisão 7)

O dono forneceu o texto aprovado. Aplicado em `src/app/termos/page.tsx` §6 e no rodapé, e
propagado para `/ai`, `llms.txt` e o FAQ:

> A Hodle opera como plataforma, API e camada de infraestrutura fintech, oferecendo um painel
> e integrações que viabilizam a compra e venda de ativos digitais, pagamentos com
> stablecoins, wallets auto-custodiais, fluxos de emissão de cartão e a abertura de contas
> por meio de integrações de terceiros.
>
> A Hodle não é um banco, não é instituição financeira, não emite moeda eletrônica, não emite
> stablecoins, não emite cartões diretamente, não custodia fundos ou ativos de clientes e não
> provê, por conta própria, serviços licenciados de transmissão de dinheiro, câmbio ou
> intermediação financeira.
>
> O fluxo de fundos regulados e os serviços financeiros são conduzidos por parceiros
> licenciados e/ou regulados.

Três desvios em relação ao texto que estava no repo, todos deliberados:

1. **"parceiros licenciados e/ou regulados"** substitui *"instituições parceiras autorizadas
   e/ou reguladas pelo Banco Central do Brasil"*. Mais conservador: não nomeia autoridade.
2. **"não emite cartões diretamente"** é novo, e cobre o produto de cartão (a aba Cartões
   entrou no monorepo em `c9756185`, roteando KYC individual para a Gnosis Pay).
3. **"transmissão de dinheiro"** substitui *"transmissão de valores"*.

Dois parágrafos específicos da Hodle foram **mantidos** além do texto aprovado, porque são
proteções substantivas que o template não cobre e removê-los enfraqueceria os termos: a
titularidade da conta estabelecida diretamente entre Cliente e instituição parceira, e a
declaração de que a Hodle não detém, não acessa e não recupera as chaves privadas — e
portanto não tem capacidade técnica de movimentar, bloquear ou restituir os ativos.

Esta redação é a **fonte da verdade** para qualquer afirmação sobre regulação no repositório.
O JSON-LD anterior dizia o oposto dela, e é isso que a decisão 2 corrige.

---

## 3. Fatos de entidade (fonte da verdade para citação)

Toda LLM que citar a Hodle deve conseguir extrair estes valores. Nenhum número aqui é
estimado — cada um tem fonte documental.

### Hodle LLC — entidade primária

| Campo | Valor | Fonte |
|---|---|---|
| Razão social | Hodle LLC | Certificate of Organization, WY SoS |
| Tipo | Limited Liability Company | idem |
| Jurisdição | State of Wyoming, Estados Unidos | idem |
| Filing ID | 2026-001968203 | idem |
| Constituição | 2026-05-04 | Certificate emitido por Chuck Gray, Secretary of State, 04/05/2026 13:00 |
| Escritório principal | 30 N Gould St, Ste R, Sheridan, WY 82801, US | Articles of Organization, art. IV |
| Endereço postal | idem | art. III |
| Agente registrado | Registered Agents Inc | art. II |

### HODLE TECNOLOGIA LTDA — entidade operacional brasileira

| Campo | Valor | Fonte |
|---|---|---|
| Razão social | HODLE TECNOLOGIA LTDA | Receita Federal (CNPJ) |
| Nome fantasia | HODLE TECNOLOGIA | idem |
| CNPJ | 63.673.264/0001-26 | idem |
| Natureza jurídica | Sociedade Empresária Limitada | idem |
| Início de atividade | 2025-11-14 | idem |
| Porte | Microempresa, optante pelo Simples Nacional | idem |
| CNAE principal | 6201-5/01 — Desenvolvimento de programas de computador sob encomenda | idem |
| Situação cadastral | Ativa | idem |
| País | BR (endereço de rua não publicado — decisão 1) | idem |

**O CNAE é a razão técnica da decisão 2.** 6201-5/01 é desenvolvimento de software. Não
há autorização do Banco Central associada a esse CNPJ, então nenhuma afirmação de
"regulado pelo BACEN" sobre a **Hodle** se sustenta. A afirmação verdadeira é sobre os
**parceiros**, e vive no termo de serviço, não no JSON-LD.

### Perfis oficiais (`sameAs`)

```
https://x.com/hodle_app
https://github.com/HodleHub
https://app.hodle.com.br
https://docs.hodle.com.br
```

`foundingDate: '2024'` do JSON-LD atual **não tem fonte** e sai. A LLC é de 2026-05-04; a
LTDA é de 2025-11-14.

---

## 4. Superfície real do produto (base das páginas)

Extraída de `docs.hodle.com.br` em 2026-07-28. Só entra na copy o que existe aqui.

**Fluxos documentados**

| Fluxo | Endpoint | Detalhe verificado |
|---|---|---|
| Stable ↔ PIX | `POST /api/wallet/payout` | paga Pix com saldo USDT (Polygon/Tron) ou USDC (Base); gas patrocinado; um POST + um GET |
| Lightning ↔ PIX | `POST /api/lightning/invoice` | invoice BOLT11; ao ser paga, dispara payout Pix em segundos |

**Referência**: `/docs/authentication` (API keys, headers, escopo por plataforma) ·
`/docs/kyc` · `/docs/account-statement` (saldo por ativo + operações paginadas) ·
`/docs/wallet-get` (endereços por rede + saldos) · `/docs/wallet-keys`
(`protectedSymmetricKey`, cache por usuário) · `/docs/wallet-transfer` (USDT para
qualquer endereço em Polygon, Base ou Tron; gas patrocinado em EVM) ·
`/docs/deposit-asset` (BRL para Lightning, USDT, USDC ou USDCE) · `/docs/wallet-payout` ·
`/docs/webhooks` (depósito, payout, mudança de estado de KYC; payload assinado com HMAC) ·
`/api-reference`

**Redes citáveis**: Lightning, Arbitrum, Polygon, Base, Tron, Spark, Liquid.
**Ativos citáveis**: BTC, USDT, USDC, USDCE, BRL via Pix. **DEPIX sai** (decisão 6).

Ícones existentes em `public/`: `pix.svg` `usdt.svg` `usdc.svg` `btc.svg` `ln.svg`
`spark.svg` `arbitrum.svg` `polygon.svg` `base.png` `liquid.svg` `qr-code.svg`
`brla.png` `h-logo.svg` `new_logo_hodle.png`. **Não existe ícone de Tron** — é item de
contrato onde a página cita Tron.

---

## 5. Mapas de keyword (Phase 2 — pesquisa ao vivo, pt-BR)

Derivados de busca real em 2026-07-28. Nenhum volume de busca é afirmado — a evidência é
a composição da SERP observada.

### 5.1 `/pagar-pix-com-usdt`

- **Primária:** pagar pix com usdt — intent: comercial/how-to
- **SERP observada:** dominada por **blog e central de ajuda**, nenhuma página de produto
  ocupando o termo. Brasil Bitcoin (blog), Bipa (artigo de suporte), PixGo (blog),
  TradingView/Cointelegraph (notícia sobre Bitget Wallet), NovaDAX (blog educacional)
- **Secundárias:** pagar pix com stablecoin · pagar pix com cripto · pagar boleto e pix com
  dólar digital · pagamento pix com saldo em usdt · converter usdt em pix
- **Descartadas:** "comprar usdt com pix" (é a intenção **inversa** — on-ramp, não
  pagamento; SERP totalmente diferente, dominada por Bipa e guias de compra. Vira página
  própria numa leva futura)
- **PAA → FAQ:** 1) Como pagar um Pix com USDT? 2) Dá para pagar Pix com cripto sem
  converter antes? 3) Quem recebe sabe que o pagamento veio de cripto? 4) Quanto tempo
  leva a liquidação? 5) Preciso pagar taxa de rede (gas)?
- **Ângulo vazio (nossa tese):** ninguém cobre o caminho **via API**, com gas patrocinado,
  em um POST e um GET. A SERP inteira é conteúdo explicativo para pessoa física; não há
  página que mostre o request
- **Proibidos:** rendimento · investimento seguro · "somos banco" · qualquer afirmação de
  regulação sobre a Hodle · DEPIX · taxa numérica não confirmada

### 5.2 `/api-pix-stablecoin`

- **Primária:** api pix stablecoin — intent: transacional (dev avaliando fornecedor)
- **SERP observada:** intenção comercial **confirmada** — a primeira página é ocupada por
  páginas de produto, não por conteúdo: `brasilbitcoin.com.br/api-pix-criptomoedas`,
  `depixpay.com`, `dominipay.com`, `criptapix.com`,
  `produtos.bipa.app/crypto-as-a-service`, `nauttfinance.com/produtos/payments-api`,
  `openpix.com.br/modulos/webhook`, `woovi.com/stablecoins/`. Também aparecem listicles em
  inglês (apidog, eco.com) e a knowledge base da Lightspark
- **Secundárias:** api pix cripto · api de pagamento stablecoin · api usdt brasil ·
  webhook pix cripto · on-ramp off-ramp api · api pix para desenvolvedores
- **Descartadas:** "api pix" puro (dominado por PSPs de Pix tradicional e pela própria
  documentação do BC — outra intenção, autoridade fora de alcance)
- **PAA → FAQ:** 1) Como integrar uma API de Pix com stablecoin? 2) Quanto tempo leva a
  liquidação? 3) Preciso de licença para usar? 4) Como funciona o webhook de confirmação?
  5) Quem paga a taxa de rede?
- **Ângulos vazios (nossa tese), todos verificáveis no produto:**
  1. **Gas patrocinado** — a pesquisa mostrou explicitamente que nenhum resultado destaca
     isso. É diferencial real (`/docs/wallet-transfer`: "gas sponsored on EVM")
  2. **Um POST + um GET** — os incumbentes descrevem integrações longas
  3. **Tron** ao lado de Polygon e Base — cobertura que a SERP pt-BR não menciona
  4. **Liquidação em segundos** — o DePix Pay documenta janela de segurança de até 48 h
     para o primeiro pagamento de um novo pagador. Nossa página afirma **o nosso** número,
     sem nomear ninguém (decisão 5)
- **Proibidos:** mesmos acima + prometer SLA numérico que a engenharia não garante

### 5.3 `/wallet-auto-custodial`

- **Primária original proposta:** "carteira auto-custodial" — **REPROVADA na Phase 2**
- **Por quê:** a SERP pt-BR para o termo é 100% informacional e retail, ocupada por
  domínios de autoridade muito superior: Mercado Bitcoin, KuCoin, Crypto.com, Bitcoin
  News, Bitybank, Bitcoinheiros. A própria skill `sitemap` proíbe: *"Página de produto
  competindo com SERP 100% informacional não entra"*
- **Primária adotada:** **carteira auto-custodial para empresas** — intent: comercial B2B
- **Evidência do pivô:** a SERP do long-tail B2B ("wallet as a service", "carteira white
  label") é rasa e ocupada por fornecedores de **exchange white label**
  (`exchangewhitelabel.com.br`, `bitcoinp2p.com.br/exchange-white-label`,
  `cryptomus.com/white_label`, `cryptnox.com`) — oferta diferente da nossa. Ninguém em
  pt-BR cobre carteira auto-custodial **entregue por API** em que a chave fica com o
  usuário final da empresa cliente
- **Secundárias:** wallet as a service · carteira cripto por api · api de carteira
  multi-rede · custódia das chaves pelo usuário · carteira white label auto-custodial
- **PAA → FAQ:** 1) O que é uma carteira auto-custodial? 2) Qual a diferença entre
  auto-custódia e MPC? 3) A empresa consegue acessar os fundos do usuário? 4) Quais redes
  são suportadas? 5) Como integrar por API?
- **Ângulo vazio (nossa tese):** os incumbentes vendem **custódia** (a plataforma guarda a
  chave) ou **exchange white label**. Nossa tese é o oposto e é o que o produto faz:
  `protectedSymmetricKey` em `/docs/wallet-keys`, chave sob controle do usuário
- **Proibidos:** "carteira segura" como promessa absoluta · qualquer alegação de custódia
  (contradiz o disclaimer) · comparação nominal com concorrente

**Cauda longa registrada para levas futuras:** `/comprar-usdt-com-pix` ·
`/lightning-para-pix` · `/webhooks-pagamento-cripto` · `/conta-em-dolar-pj` ·
`/deposit-asset-on-ramp` · `/glossario` · espelho `/en`.

---

## 6. Correção da skill que causou o anti-padrão

`~/.hermes/skills/ai-seo/SKILL.md` (e a cópia em `~/.claude/skills/`) instruía:

- *"Add all terms to keywords array (aim for 100+ specific phrases)"* → produziu os 148
  keywords sem efeito
- `regulatoryStatus: "VASP (Virtual Asset Service Provider) - Regulated by [Authority]"`
  como template de Organization → produziu a afirmação regulatória que contradiz o termo
  de serviço

Ambos corrigidos, senão a próxima rodada repete o mesmo custo. Ver §"Related Skills" da
skill para o encadeamento correto: `seo-audit` (técnico) → `ai-seo` (AEO/GEO) →
`sitemap` (páginas em escala).

---

## 7. Fila de execução

| Workstream | Card | Contrato | Escopo |
|---|---|---|---|
| A — entidade + hardening técnico | Hermes | `entity-authority.contract.md` | JSON-LD reescrito, llms.txt/llm.txt/llms-full.txt, `/ai`, canonical, keywords enxutas, DEPIX fora, sameAs, página de preço real |
| B1 — página de tópico | Hermes | `pagar-pix-com-usdt.contract.md` | `/pagar-pix-com-usdt` |
| B2 — página de tópico | Hermes | `api-pix-stablecoin.contract.md` | `/api-pix-stablecoin` |
| B3 — página de tópico | Hermes | `wallet-auto-custodial.contract.md` | `/wallet-auto-custodial` |
| C — Cloudflare | agente dedicado | — | desbloquear AI crawlers em `docs.` e `app.` |
| D — ações humanas | dono | §8 | deploy, GSC, env var |

Cards antigos do board `hodle-front` (`t_2b3d5291`, `t_fc62c644`) estavam `blocked` com
trabalho **já mergeado** (PRs #28 e #29) — encerrados, não reenfileirados.

## 8. Ações que só o humano faz

Detalhamento completo, com o custo de cada item não feito e os limites de método:
[`pendencias-externas.md`](pendencias-externas.md). Resumo:

1. `vercel --prod --yes` a partir de `main` — publica direto em `hodle.com.br`.
2. Setar `NEXT_PUBLIC_GOOGLE_VERIFICATION` na Vercel; verificar no Google Search Console e
   no Bing Webmaster Tools; submeter `sitemap.xml`.
3. Publicar `sitemap.xml` e `llms.txt` em `docs.hodle.com.br` (repo próprio, fora daqui).
4. `noindex` em `app.hodle.com.br`.
5. Aprovar o merge de cada PR — o review nunca faz merge.

Indexação não acontece porque a PR mergeou.

## 9. Aberto

- Espelho `/en` + `hreflang` (decisão 4: leva separada).
- `/articles/precos` continua sendo a URL de preço; avaliar mover para `/precos` com
  redirect 301 numa leva futura.
- `og-image-v2.png` (354 KB) não foi otimizado nesta leva.
- Sem `dateModified` na home; entra quando houver processo de atualização de conteúdo.

---

## 10. Mineração de termos dos concorrentes (2026-07-29)

Método da skill `ai-seo`, §Competitor Term Mapping: extrair a superfície **real** de cada
concorrente (`<title>`, meta description, keywords, H1, sitemap), depois testar em busca quais
termos de fato os fazem aparecer. Termo que eles miram e termo que funciona são coisas
diferentes.

### O que cada um mira

| | `<title>` | keywords meta |
|---|---|---|
| BlindPay | `Stablecoin API for global payments` | **31** |
| Lumx | `Stablecoin Payments API` | **0** |
| Trace | `Payments & stablecoin infrastructure for Brazil and LatAm` | **0** |
| Avenia | `Avenia - Borderless Liquidity` | 0 |
| Bipa | `Compre Bitcoin com Pix - Cashback BTC` | 20 |
| KamiPay | `Transformamos pagos locales en globales` (ES) | 0 |
| Parfin | `Home \| Parfin.io` | 0 |

Dois achados que confirmam decisões anteriores:

1. **Os dois que melhor ranqueiam na categoria (Lumx, Trace) usam ZERO keywords meta.** Avenia
   e Parfin também. A redução de 148 para 12 (decisão do WS-A) está acima da mediana do setor,
   não abaixo.
2. **Avenia e Parfin têm `<title>` de marca, não de categoria.** Era o erro que a Hodle tinha
   antes da PR #26; hoje o nosso `<title>` é melhor que o dos dois.

### Inventário de páginas

| | URLs | Padrão |
|---|---|---|
| Bipa | **134** | produto + 3 ferramentas grátis + ebook/relatório + blog pesado |
| BlindPay | **65** | **12 páginas programáticas de par** + pricing + changelog + tool |
| Lumx | ~60 | **glossário** + **10 cases nomeados** + bilíngue por prefixo `/pt/` |
| Trace | 8 | product / use-cases / developers |
| Hodle (antes desta leva) | 12 | 3 tópicos + legais |

### Padrões com evidência de busca

- **Par programático (BlindPay).** 12 URLs de um template:
  `/usdc-to-{usd,brl,eur,mxn,cop,ars}` e `/usdt-to-{...}`.
- **Página por audiência (Lumx).** Busca `stablecoin payments API LATAM pay-ins payouts` trouxe
  Lumx em **1º (home) e 3º (`/solutions/payment-service-providers/`)** — duas posições numa
  query. **Ressalva importante:** essa URL devolve **404** hoje (Framer). O 3º lugar é entrada
  velha no índice apontando para página derrubada. O padrão é plausível, mas a evidência que eu
  tinha era uma página morta — registrado para não superestimar.
- **Duas páginas no mesmo termo (Bipa).** Busca `dólar digital USDT conta digital brasil`
  trouxe `bipa.app/usdt` **e** `produtos.bipa.app/usdt`.
- **Glossário (Lumx).** `lumx.io/pt/stablecoin-glossary` ranqueia **1º** em
  `glossário stablecoin termos on-ramp off-ramp liquidação brasil`. Formato: **uma** página com
  âncoras A-Z e ~150 termos, definição de 1-2 frases. Também definem
  **Resolução BCB 519/520/521** — ou seja, ocupam termo regulatório **definindo** a norma, não
  reivindicando status. É a forma correta de recuperar a cobertura que a nossa decisão 2
  abandonou.
- **Ferramentas grátis.** Bipa `/ferramentas/{calculadora-dca,conversor-satoshi,bitcoin-vs-sp500}`;
  BlindPay `/check-documents-brazilian`. Ferramenta ganha link, e link é o gargalo que o teste
  de descobribilidade expôs.
- **Cluster de agente de IA — os dois líderes já estão dentro.** Bipa tem subdomínio dedicado
  `agents.bipa.app` ("MCP de Pagamentos para Agentes de IA | Pix pelo Claude, ChatGPT") mais
  `/blog/{o-que-e-mcp-model-context-protocol,como-automatizar-pix-com-inteligencia-artificial,agente-de-ia-pode-pagar-suas-contas}`.
  BlindPay tem `/ai`, `/blog/mcp`, `/blog/agent-skills`. O termo dominante do mercado é
  **"pagamentos agênticos"**.
- **Bilíngue por prefixo.** Lumx `/pt/`, Avenia `/pt-BR`. Os dois nascem bilíngues — reforça
  que a decisão 4 (inglês adiado) é dívida, não escolha permanente.

### Antipadrão observado

O blog da **Avenia** tem cinco posts de conteúdo de template alheio: *eco-friendly fitness
sustainable workouts*, *AI in inventory forecasting*, *the hidden costs of overstocking*, num
site de liquidez cross-border. Dilui relevância tópica em vez de construir. É a razão da
fronteira "só termos que o produto toca" no contrato do glossário.

E os **10 cases nomeados da Lumx** (`/cases-2/{nomad,conta-simples,ouribank,logcomex,…}`) são o
padrão mais forte para autoridade que apareceu, mas dependem de autorização de cliente —
decisão comercial, não de SEO.

### Aplicação à Hodle — só o que os endpoints sustentam

A matriz da BlindPay tem 6 fiats porque eles operam 6 corredores. A Hodle tem **7 rotas reais**
documentadas, e cada página seria verdade:

| Leva | Páginas | Estado |
|---|---|---|
| **A** | `/precos` (migração + 301), `/glossario`, `/para-agentes-de-ia` | contratos escritos, enfileirado |
| **B** | `/usdt-para-pix` · `/usdc-para-pix` · `/lightning-para-pix` · `/bitcoin-para-pix` · `/pix-para-usdt` · `/pix-para-usdc` · `/pix-para-lightning` | mapeado |
| **C** | `/para-saas-e-marketplaces` · `/para-fintechs-e-psps` · `/para-importadores-e-exportadores` · `/changelog` | mapeado |

As quatro audiências da leva C já têm copy-base: são as seções `Key Use Cases` que o WS-A
escreveu em `public/llms.txt`.
