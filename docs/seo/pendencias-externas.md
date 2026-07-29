# O que não é possível fazer deste repositório

Companion de [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md).
Lista honesta do que o programa de descobribilidade por LLM **não** consegue entregar por
código neste repo, dividido em três classes: bloqueado em acesso, fora do repo, e
deliberadamente fora de escopo. Cada item diz o custo de deixar como está.

Data: 2026-07-28.

---

## Classe 1 — Bloqueado em acesso (precisa de você)

### 1.1 Cloudflare: desbloquear os AI crawlers em `docs.` e `app.`

**Status: RESOLVIDO em 2026-07-29.** Feito pelo dashboard, com o dono autenticado e o
GStack Browser dirigindo. Zone `hodle.com.br` (`004d8cfdcd6ec0eddc68967da48675ae`, plano Free).

Quatro mudancas, todas reversiveis:

| Setting | Antes | Depois | Onde reverter |
|---|---|---|---|
| Managed robots.txt | ON (`is_robots_txt_managed=true`) | OFF (`cf_robots_variant=off`) | AI Crawl Control > Signals |
| Block AI bots scope | `block` / "Block on all pages" | `disabled` / "Do not block (allow crawlers)" | Security > Settings > filtro "AI bots" > lapis |
| Mixed purpose crawlers | bloqueados em 15/set | continuam permitidos (`ai_bots_migration_opt_out=true`) | mesmo modal |
| AI Labyrinth | ON | OFF (levou `crawler_protection` de `enabled` para `disabled`) | Security > Settings > filtro "Labyrinth" |

**A causa real era `ai_bots_protection: "block"`, nao Bot Fight Mode.** O diagnostico
anterior (deste doc e do agente que tentou antes) apontava Bot Fight Mode; a leitura da API
mostrou `fight_mode: false` desde sempre. Registrado para nao repetir a hipotese errada.

Nao tocado: DNS, SSL/TLS, caching, Access, Page Rules, as 4 WAF custom rules existentes
(GraphQL origins, GraphQL CSRF, obsidian, e2e bypass), `security_level=medium`,
`browser_check=on`, e as zones `cryptouse.com.br` e `touri.ai`.

Verificacao na rede, 13 user agents x 6 URLs, **todos 200**:

```
GPTBot/1.0  ChatGPT-User/1.0  ClaudeBot/1.0  anthropic-ai  Claude-User/1.0
PerplexityBot/1.0  CCBot/2.0  Google-Extended/1.0  meta-externalagent/1.0
Applebot-Extended/1.0  Bytespider  Amazonbot/0.1  Mozilla/5.0
x  docs/ | docs/wallet-payout | docs/authentication | hodle/ | llms.txt | app/
```

Antes: `403` para GPTBot, ClaudeBot, PerplexityBot e CCBot em todo o `docs.`.

**Pendencia nova que isso criou:** `docs.hodle.com.br/robots.txt` agora devolve **HTTP 404**
(a pagina 404 do Next). O robots.txt do Cloudflare era o unico que existia; o app de docs nao
tem rota propria. Sem robots.txt o crawler trata como "allow all", entao nao piorou o acesso
— mas o certo e publicar um de verdade, com o sitemap. Ver 2.1.

### 1.2 Deploy em produção

**Status: bloqueado por design.** `vercel --prod --yes` a partir de `main` publica direto em
`hodle.com.br`. Não rodo deploy sem confirmação explícita, e o `deploy.md` do repo trata isso
como ação humana.

**Custo de não fazer:** as PRs #29, #30 e #31 seguem mergeadas e não publicadas. Medido em
2026-07-28: `/real-onchain` responde **404** no ar, o `llms.txt` no ar tem 968 bytes contra
~4,5 KB no código, a home serve **1** bloco JSON-LD contra 5, e o `robots.txt` no ar não tem
nenhuma regra de AI crawler. Enquanto isso não roda, nada do que já foi mergeado existe para
crawler nenhum — e nada do que esta leva entregar vai existir também.

### 1.3 Google Search Console e Bing Webmaster Tools

**Status: bloqueado.** Não tenho acesso às contas, e a verificação depende de
`NEXT_PUBLIC_GOOGLE_VERIFICATION`, que não está setada na Vercel (confirmado: o HTML no ar
não tem a meta `google-site-verification`).

O que você faz: setar a env var, verificar as duas propriedades, submeter
`https://hodle.com.br/sitemap.xml`, e submeter individualmente as URLs novas.

**Custo de não fazer:** sem GSC não há submissão de URL, não há relatório de cobertura de
indexação, não há dado de campo de Core Web Vitals e não há como saber por qual query o site
aparece. Indexação não acontece porque a PR mergeou.

---

## Classe 2 — Fora deste repositório

### 2.1 `docs.hodle.com.br` — sem `sitemap.xml` e sem `llms.txt`

Confirmado: as duas URLs retornam **404**. O site tem 13 páginas indexáveis
(`/docs/authentication`, `/docs/kyc`, `/docs/wallet-payout`, `/docs/wallet-transfer`,
`/docs/wallet-get`, `/docs/wallet-keys`, `/docs/deposit-asset`, `/docs/lightning-invoice`,
`/docs/account-statement`, `/docs/flow-stable-pix`, `/docs/flow-lightning-pix`,
`/docs/webhooks`, `/api-reference`) e nenhum mapa que as declare.

É outro codebase (Next.js servido por Cloudflare). Nada aqui alcança.

**Custo de não fazer:** as páginas existem mas não se anunciam. Combinado com 1.1, é uma
biblioteca trancada e sem catálogo.

### 2.2 `app.hodle.com.br` — indexável, `lang="en"` e `robots.txt` malformado

Três problemas, todos no repo do app (SPA React), não aqui:

- O shell é servido com **200** e `<title>Hodle</title>` puro, competindo com a home em query
  de marca. Precisa de `noindex`.
- `<html lang="en">` num produto pt-BR. Sinal de idioma errado para LLM e para o Google.
- `app.hodle.com.br/robots.txt` devolve o bloco managed do Cloudflare **concatenado com o
  `index.html` do SPA** no mesmo corpo — o app não tem rota `/robots.txt`, então o catch-all
  responde junto. Achado do agente de Cloudflare, fora do escopo dele.

### 2.3 Merge das PRs

**Status: bloqueado por design.** Nem eu nem os workers do Hermes fazem merge. O review é
fail-closed e para na PR; o gate final é humano.

---

## Classe 3 — Deliberadamente fora de escopo

### 3.1 Citação por terceiros — descartado pelo dono

O ponto 12 do plano original (páginas de comparação, presença em agregadores) foi
**explicitamente descartado**: *"sem comparativos por favor, o ponto 12 não quero"*. Decisão
5 do walkthrough. Nenhuma seção `COMPARISON` contra concorrente nomeado, nenhuma página "vs",
nenhum cadastro em agregador.

**Custo de não fazer, e é o item mais caro desta classe:** LLM responde majoritariamente a
partir de corpus de terceiros, não do seu site. Hoje a Hodle não tem menção em nenhum
agregador e a marca colide com "HODL" e "Hodl Hodl", que roubam a query.

Isso já custa dinheiro de forma verificável: uma busca em 2026-07-28 devolveu, sobre a Hodle,
*"taxas de 1,5% para DEPIX e 3,5% para Bitcoin"* — número que a PR #25 normalizou para
**2%**, e um ativo que a decisão 6 tirou do site. Já existe LLM afirmando preço errado da
Hodle a partir de fonte de terceiro desatualizada, e **não há como corrigir isso só pelo
nosso lado**: o `llms.txt` novo ganha um bloco de instrução pedindo para não citar taxa fora
do site, e a página de preço passa a ter data de atualização visível, mas o corpus antigo
continua lá. Reduzir esse dano exige superfície de terceiro, que está fora de escopo.

### 3.2 Termos regulatórios — removidos por decisão

Decisão 2: remover toda menção regulatória do JSON-LD. Saem 33 keywords (`VASP`, `PSAV`,
`licença cripto Brasil`, `regulação cripto Brasil`, `BACEN cripto`, `marco regulatório`,
`compliance BACEN`, `LAV`, `RCT` e o resto), o `regulatoryStatus` e o
`additionalType: FinancialService`.

**Custo:** queries como "exchange regulada Brasil" e "empresa regulada cripto" têm busca
real e são sinal de confiança em cripto. A Hodle deixa de disputá-las.

**Por que ainda é a decisão certa:** o CNAE principal do CNPJ 63.673.264/0001-26 é
**6201-5/01 — desenvolvimento de programas de computador sob encomenda**. Não há autorização
do Banco Central nesse CNPJ. E o §6 dos próprios termos declara que a Hodle não é instituição
financeira e que os serviços licenciados são conduzidos por parceiros. Afirmar status
regulatório em JSON-LD — formato feito para máquina ler e repetir — contra o seu próprio termo
de serviço é exposição jurídica, não ganho de SEO.

### 3.3 Superfície em inglês — adiada

Decisão 4: leva separada. Nenhum card desta leva gera `/en` nem `hreflang`.

**Custo:** "stablecoin api" e "wallet as a service" são queries em inglês, e o teste ao vivo
mostrou a Hodle **invisível** nelas (ganham Circle, Bridge, Cobo, BitGo). O `llms.txt`, o
`llm.txt` e os docs já são em inglês, então a superfície que a LLM lê está coberta; a SERP
orgânica em inglês, não.

### 3.4 Endereço brasileiro não publicado

Decisão 1 priorizou a Hodle LLC. O `subOrganization` da HODLE TECNOLOGIA LTDA leva CNPJ e
`addressCountry: BR`, sem rua.

**Custo:** sinal de entidade local mais fraco em query pt-BR. O endereço é um dos campos que
a LLM procura para validar se a empresa é real.

Reverter é uma mudança de quatro linhas em `organizationJsonLd.subOrganization.address` —
está documentada no Passo 2.1 do contrato. Só você decide.

---

## Limites de método (o que eu não consegui medir)

Registrado para ninguém confundir ausência de dado com dado ruim.

| Item | Limite | Consequência |
|---|---|---|
| Volume de busca das keywords | Sem Ahrefs/Semrush. A evidência de cada mapa é a **composição da SERP observada** (quantos resultados de glossário, de produto, de notícia), nunca um número de volume | Nenhum número de volume é afirmado em lugar nenhum. A skill `sitemap` proíbe inventar |
| Dados da Serasa | A página do link é renderizada por JS e expõe só razão social e CNPJ | Puxei o registro completo (endereço, CNAE, natureza jurídica, porte, capital, início de atividade) da base pública da Receita |
| `x.com/hodle_app` | Retornou 402/paywall de autenticação; não consegui confirmar o perfil programaticamente | O handle entra em `sameAs` com base no que você informou. Se estiver errado, é um `sameAs` apontando para o nada — confirme |
| Validação de rich result | O Rich Results Test do Google exige URL pública | Só valido JSON-LD por `JSON.parse` local. A validação oficial só depois do deploy |
| Core Web Vitals de campo | Depende do GSC (item 1.3) | O review cobre só o que é observável local: rota estática no build, `next/image` com dimensões, zero animação bloqueando o primeiro paint |
| Taxas além dos 2% de compra | Não há fonte no repo para payout Pix, transfer entre redes ou conversão | O Passo 11 do contrato **proíbe** o worker de preencher e manda perguntar no card. Página de preço vai dizer que essas taxas são negociadas por volume |
| SLA de liquidação do payout | A documentação publica "sub-second" para emissão de invoice Lightning, e nada para `POST /api/wallet/payout` ponta a ponta | Os contratos proíbem número de prazo nas páginas. Só "24/7" e "sem depender de horário bancário" |
| Ícone da rede Tron | Não existe `tron.svg` em `public/` | Tron aparece só em texto nas três páginas. Gerar o ícone é card futuro |

---

## Itens pequenos não feitos nesta leva

- `og-image-v2.png` tem 354 KB e leva ~2,5 s. Não otimizado.
- `/articles/precos` continua nesse caminho. Mover para `/precos` com 301 é melhor, mas exige
  decidir a estratégia de redirect — card futuro.
- Sem `dateModified` na home; entra quando existir processo de atualização de conteúdo.
- `public/depix.png` fica no repo, sem referência (decisão 6 removeu as menções, não o asset).
- Segunda leva de tópicos já mapeada e não enfileirada: `/lightning-para-pix`,
  `/comprar-usdt-com-pix`, `/webhooks-pagamento-cripto`, `/conta-em-dolar-pj`, `/glossario`.
