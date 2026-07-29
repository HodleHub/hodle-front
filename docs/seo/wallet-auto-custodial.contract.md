# Contrato — página de tópico `/wallet-auto-custodial`

Contexto, keyword map e decisões: [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md) §5.3.

**Leia o §5.3 antes de tudo.** A keyword primária desta página foi **trocada** na Phase 2 e
o motivo importa para a copy: a SERP pt-BR de "carteira auto-custodial" é 100% informacional
e retail, ocupada por Mercado Bitcoin, KuCoin, Crypto.com e Bitcoinheiros — autoridade fora
de alcance para uma página de produto. A primária adotada é **"carteira auto-custodial para
empresas"**, e a tese é o ângulo que ninguém em pt-BR cobre: carteira entregue por API em que
a chave fica com o **usuário final da empresa cliente**.

Você implementa **estrutura**; a copy é final e vai no código **palavra por palavra**.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`,
`any`, type assertion, `readonly` · RO-RO com múltiplos parâmetros · arquivos em camelCase ·
linha em branco entre statements · sem comentário no meio do código · sem emoji · pt-BR com
acentos completos.

Vocabulário visual da home e do FAQ: `max-w-[1200px] mx-auto px-6`,
`heading = 'font-[family-name:var(--font-space-grotesk)]'`, `text-foreground`,
`text-gray-500`, `border-gray-200`, `hero-grid` + `hero-spotlight`, `ButtonShadow`,
`<details>` no FAQ, `AnimatedSection`, `next/image` com dimensões explícitas. **Nenhuma cor
nova, nenhuma dependência nova.**

## Arquivos

**Criar:** `src/content/topics/walletAutoCustodial.ts`
**Editar:** `src/content/topics/topics.ts` (uma linha)

Nada mais. Se precisou editar `sitemap.ts`, pare e comente no card.

## Fronteiras desta página

Esta é a página com o maior risco de escrever algo falso. Leia com atenção.

- **Nunca diga que a Hodle custodia, guarda ou protege os ativos.** O disclaimer do §6 dos
  termos é explícito: a Hodle não custodia fundos ou ativos de clientes. A frase correta,
  já usada no site, é *"as chaves privadas permanecem sob controle exclusivo do usuário"*.
- **Nunca prometa segurança absoluta.** Não escreva "carteira segura", "à prova de
  invasão", "impossível perder". Descreva o modelo, não o resultado.
- **Não descreva o esquema criptográfico além do que a documentação publica.** O que é
  público: existe um `protectedSymmetricKey` que o cliente busca por API e que é necessário
  para assinar payouts e transfers (`/docs/wallet-keys`). Não invente MPC, não invente
  multisig, não invente shard, não invente HSM, não afirme derivação de chave, não cite
  algoritmo.
- **Nenhum concorrente nomeado**, nenhuma seção `COMPARISON`, nenhuma comparação com MPC de
  fornecedor específico (decisão 5). A pergunta de FAQ sobre MPC responde no genérico.
- **Nenhuma taxa, nenhum SLA numérico, nenhuma menção a DEPIX.**
- Tron só em texto — não existe `tron.svg`.

## Registro `TopicPage`

`src/content/topics/walletAutoCustodial.ts` exporta `walletAutoCustodial`.

```
slug:            'wallet-auto-custodial'
primaryKeyword:  'carteira auto-custodial para empresas'
title:           'Carteira auto-custodial para empresas'
h1:              'Carteiras em que a chave é do usuário'
updatedAt:       '2026-07-28'
changeFrequency: 'monthly'
priority:        0.8
ogImage:         '/og-image-v2.png'
kicker:          'WALLETS'
```

`description` (149 caracteres):

> Ofereça carteiras multi-rede no seu produto sem custodiar nada. As chaves privadas ficam com o usuário final, e a integração é por API REST.

`keywords`:

```
'carteira auto-custodial para empresas'
'wallet as a service'
'carteira cripto por api'
'api de carteira multi-rede'
'carteira auto-custodial api'
'custódia das chaves pelo usuário'
```

`subhead` (30 palavras):

> A Hodle entrega a carteira, as redes e a API. A chave privada fica com o usuário final do seu produto — nem você nem a Hodle acessam os fundos dele.

`heroIcons`:

```
{ src: '/usdt.svg',    label: 'USDT' }
{ src: '/usdc.svg',    label: 'USDC' }
{ src: '/btc.svg',     label: 'Bitcoin' }
{ src: '/polygon.svg', label: 'Polygon' }
{ src: '/base.png',    label: 'Base' }
```

`ctaPrimary`:
```
{ label: 'Falar com vendas', href: 'https://api.whatsapp.com/send?phone=5511960000445' }
```

`ctaSecondary`:
```
{ label: 'Ver a documentação', href: 'https://docs.hodle.com.br/docs/wallet-get' }
```

## Seções (5, nesta ordem)

### 1 — `id: 'o-que-e'` · `kind: 'PROSE'`

`heading`: **O que é uma carteira auto-custodial**

`body`:

> Numa carteira auto-custodial, a chave privada fica sob controle exclusivo de quem é dono dos ativos. Não existe um terceiro que possa mover o saldo, congelar a conta ou devolver o acesso — o controle é de quem tem a chave, e só.
>
> É o oposto do modelo custodial, em que a plataforma guarda a chave e o usuário tem um saldo registrado num banco de dados. Os dois modelos existem e resolvem problemas diferentes. O que a Hodle entrega é o primeiro.

`bullets`:

```
'A chave privada fica sob controle exclusivo do usuário final.'
'A Hodle não custodia fundos nem ativos de clientes.'
'A empresa que integra não ganha acesso aos fundos dos usuários dela.'
'O saldo é on-chain, verificável na rede, não um registro interno.'
```

`icons`: `[]` · `comparison`: `null`

### 2 — `id: 'o-que-muda'` · `kind: 'PROSE'`

`heading`: **O que muda para a empresa que integra**

`body`:

> Oferecer carteira sem custodiar muda a sua exposição. Você não passa a guardar ativo de terceiro, não precisa construir a operação de custódia e não vira o ponto único de falha do saldo dos seus usuários.
>
> Em troca, o desenho do produto tem que respeitar o modelo: operação que move fundo exige a chave do usuário. É por isso que a API expõe o `protectedSymmetricKey` — sem ele, não há payout nem transfer.

`bullets`:

```
'Você embute carteira no seu produto sem assumir custódia.'
'A operação de recuperação e de segurança da chave fica no desenho do seu fluxo.'
'Movimentação exige a chave do usuário, por construção.'
```

`icons`: `[]` · `comparison`: `null`

### 3 — `id: 'como-integrar'` · `kind: 'STEPS'`

`heading`: **Como integrar a carteira por API**

`body`:

> Três chamadas cobrem leitura, assinatura e movimentação.

`bullets`:

```
'Ler a carteira. Um GET devolve os endereços por rede e os saldos atuais do usuário da API key. Guia em docs.hodle.com.br/docs/wallet-get.'
'Buscar a chave. Um GET devolve o protectedSymmetricKey necessário para assinar payouts e transfers. Faça cache uma vez por usuário.'
'Movimentar. Um POST envia USDT para qualquer endereço em Polygon, Base ou Tron. O gas em redes EVM é patrocinado pela Hodle.'
'Acompanhar. O extrato devolve saldo por ativo e operações paginadas, e o webhook assinado com HMAC avisa cada mudança de estado.'
```

`icons`: `[]` · `comparison`: `null`

### 4 — `id: 'redes'` · `kind: 'ASSETS'`

`heading`: **Uma carteira, várias redes**

`body`:

> A mesma carteira endereça Bitcoin on-chain e Lightning, USDT em Polygon e Tron, USDC em Base, e as duas stablecoins em Arbitrum e Spark. O usuário não gerencia uma carteira por rede.

`bullets`: `[]`

`icons`:

```
{ src: '/btc.svg',      label: 'Bitcoin' }
{ src: '/ln.svg',       label: 'Lightning' }
{ src: '/usdt.svg',     label: 'USDT' }
{ src: '/usdc.svg',     label: 'USDC' }
{ src: '/polygon.svg',  label: 'Polygon' }
{ src: '/base.png',     label: 'Base' }
{ src: '/arbitrum.svg', label: 'Arbitrum' }
{ src: '/spark.svg',    label: 'Spark' }
```

`comparison`: `null`

### 5 — `id: 'com-pix'` · `kind: 'PROSE'`

`heading`: **A carteira que também paga Pix**

`body`:

> A diferença prática entre uma carteira auto-custodial genérica e a da Hodle é a saída em reais. O saldo em USDT ou USDC da carteira financia um Pix, sem etapa manual de venda: um POST dispara o pagamento e quem recebe cai em reais.
>
> É a mesma carteira, o mesmo saldo e a mesma chave. O trilho brasileiro fica do lado da Hodle.

`bullets`:

```
'Pagar Pix com o saldo da carteira, sem converter antes.'
'Receber por invoice Lightning e liquidar em Pix.'
'Converter reais em USDT, USDC, USDCE ou Lightning.'
```

`icons`: `[]` · `comparison`: `null`

## FAQ (5 pares)

```
Q: O que é uma carteira auto-custodial?
A: É uma carteira em que a chave privada fica sob controle exclusivo do dono dos ativos. Nenhum terceiro consegue mover, bloquear ou recuperar o saldo — quem tem a chave tem o controle.

Q: Qual a diferença entre auto-custódia e MPC?
A: São respostas para perguntas diferentes. Auto-custódia trata de quem tem o controle da chave; MPC é uma técnica para dividir uma chave em partes, e pode ser usada tanto em arranjo custodial quanto não custodial. Nas carteiras da Hodle, o controle é do usuário final.

Q: A empresa que integra consegue acessar os fundos dos usuários?
A: Não. Operações que movem fundos exigem a chave do usuário, e é o usuário que a controla. A Hodle também não custodia fundos ou ativos de clientes.

Q: Quais redes e ativos a carteira suporta?
A: Bitcoin on-chain e por Lightning, USDT em Polygon e Tron, USDC em Base, e as duas stablecoins também em Arbitrum e Spark. É uma carteira única, não uma por rede.

Q: Como integro a carteira no meu produto?
A: Por API REST: um GET devolve endereços e saldos, outro devolve o protectedSymmetricKey usado para assinar, e um POST move os ativos. O gas em redes EVM é patrocinado. Os guias estão em docs.hodle.com.br.
```

## Relacionados (`related`)

```
{ label: 'Pagar Pix com USDT',         href: '/pagar-pix-com-usdt' }
{ label: 'API Pix stablecoin',         href: '/api-pix-stablecoin' }
{ label: 'Perguntas frequentes',       href: '/faq' }
{ label: 'Preços e taxas',             href: '/articles/precos' }
```

## Link de entrada (obrigatório)

Na coluna **Produtos** do `src/components/ui/Footer.tsx`, troque o item
`{ label: 'Wallets', href: '#wallets' }` — que hoje aponta para uma âncora da home — por:

```
{ label: 'Wallets', href: '/wallet-auto-custodial' }
```

A âncora `#wallets` continua existindo na home; ela deixa de ser o destino do rodapé, que
passa a apontar para a página indexável. Isso é intencional: âncora não é URL para o Google.

## Aceite

- [ ] `pnpm build` verde e `/wallet-auto-custodial` como rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro
- [ ] `pnpm eslint` sem erro novo
- [ ] copy **idêntica** a este contrato
- [ ] um único `<h1>`
- [ ] todo `src` de ícone existe em `public/` (nenhum `tron.svg`)
- [ ] `/sitemap.xml` contém `https://hodle.com.br/wallet-auto-custodial` com `lastmod` 2026-07-28
- [ ] `WebPage` + `FAQPage` + `BreadcrumbList` parseiam; `FAQPage` casa com as 5 perguntas visíveis
- [ ] rodapé (coluna Produtos, item "Wallets") aponta para `/wallet-auto-custodial`
- [ ] a página aponta para ≥2 destinos internos
- [ ] **nenhuma** frase afirmando que a Hodle custodia, guarda ou protege ativos; **nenhuma** promessa de segurança absoluta; **nenhum** detalhe criptográfico além do `protectedSymmetricKey`
- [ ] nenhuma taxa, nenhum SLA numérico, nenhum concorrente nomeado, nenhum "DEPIX"
- [ ] `/faq`, `/termos`, `/privacidade`, `/cookies`, `/articles`, `/checkout`, `/real-onchain` continuam abrindo
- [ ] zero erro de console, zero 404 de asset, sem overflow horizontal em 390px

## Review Block

```markdown
## Review Block
LABEL: wallet-auto-custodial
BASE_URL: http://localhost:3000
STEPS:
  - build
  - goto: /wallet-auto-custodial
  - expectVisible: "Carteiras em que a chave é do usuário"
  - expectOne: h1
  - shot: "wallet-auto-custodial-desktop"
  - viewport: 390x844
  - shot: "wallet-auto-custodial-mobile"
  - assertSitemap: /wallet-auto-custodial
  - assertJsonLd: WebPage,FAQPage,BreadcrumbList
  - assertHead: title,description,canonical,og:image
  - assertNoText: "DEPIX"
  - goto: /faq
  - expectVisible: "Perguntas Frequentes"
```

Não faça merge. Não rode deploy.
