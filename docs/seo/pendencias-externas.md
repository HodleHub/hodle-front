# O que não é possível fazer deste repositório

Companion de [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md).
Lista honesta do que o programa de descobribilidade por LLM **não** consegue entregar por
código neste repo, dividido em três classes: bloqueado em acesso, fora do repo, e
deliberadamente fora de escopo. Cada item diz o custo de deixar como está.

Data: 2026-07-28.

---

## Classe 1 — Bloqueado em acesso (precisa de você)

### 1.1 Cloudflare: desbloquear os AI crawlers em `docs.` e `app.`

**Status: bloqueado. É o item de maior impacto do programa inteiro.**

Um agente dedicado entrou pelo gstack, abriu o Chromium controlado, importou 18 cookies de
sessão do seu Chrome (`cf_clearance`, `vses2`, `curr-account` e outros) e chegou a fazer uma
chamada autenticada com sucesso (`GET /api/v4/user/iam/dash-authz-eval-roles` → 200). A
chamada seguinte, `GET /api/v4/organizations`, voltou **403** e disparou um desafio
Turnstile; o frontend caiu de volta na tela de login. **Nenhuma configuração foi alterada.**

A ironia é o diagnóstico: o bot-management do Cloudflare barrou o agente que ia relaxar o
bloqueio de bots. Cookie exportado não basta — precisa da sua sessão viva, possivelmente com
2FA. Habilitar `--remote-debugging-port` no seu Chrome principal exigiria fechar o navegador
com todas as abas abertas, o que está fora do que foi autorizado.

Evidência do problema, inalterada:

```
$ curl -s https://docs.hodle.com.br/robots.txt | grep -A1 ClaudeBot
User-agent: ClaudeBot
Disallow: /

$ curl -s -A "GPTBot/1.0"        -o /dev/null -w '%{http_code}\n' https://docs.hodle.com.br/docs/wallet-payout    → 403
$ curl -s -A "ClaudeBot/1.0"     -o /dev/null -w '%{http_code}\n' https://docs.hodle.com.br/docs/authentication   → 403
$ curl -s -A "PerplexityBot/1.0" -o /dev/null -w '%{http_code}\n' https://docs.hodle.com.br/                      → 403
```

Não é só declaração no `robots.txt` — é **403 ativo**. As duas coisas precisam cair.

No zone `hodle.com.br` do `dash.cloudflare.com`:

1. **AI Crawl Control** (pode aparecer como "AI Audit") → **Managed robots.txt** → **OFF**.
   É o que injeta o bloco `# BEGIN Cloudflare Managed content` com `Disallow: /` para
   ClaudeBot, GPTBot, CCBot, Google-Extended, Applebot-Extended, Bytespider,
   meta-externalagent e Amazonbot, além de `Content-Signal: ai-train=no`.
2. **AI Crawl Control** → aba Bots/Crawlers → **Allow** para GPTBot, ChatGPT-User,
   ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, CCBot,
   meta-externalagent. Se houver um toggle mestre "Block all AI bots", desligue esse.
3. **Security → Settings → Bots** → **Bot Fight Mode** / **Super Bot Fight Mode**. É quase
   certamente a origem dos 403. Desligue o block para bots verificados, ou crie uma **WAF
   custom rule** de skip por User-Agent em `docs.hodle.com.br` e `hodle.com.br`.
4. **Security → WAF → Custom rules / Managed rules** → procure regra referenciando
   `cf.bot_management.score` ou User-Agent de IA e ajuste do mesmo jeito.

**Custo de não fazer:** os 13 documentos de API — o ativo mais citável que a Hodle tem para
a query "api" — permanecem invisíveis para todo motor de resposta. Nenhuma outra ação deste
programa compensa isso.

Depois de mexer, me avise: rodo as curls de verificação na hora (propagação costuma ser
menos de um minuto).

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
