# Contrato — página de tópico `/comprar-bitcoin-com-pix`

Leva B. Contexto: [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md) §10.

Você implementa **estrutura**; a copy é final e vai no código **palavra por palavra**.

## Convenções obrigatórias

Um export por arquivo · `export const` + arrow function · sem `class`, `let`, `else`, `any`,
type assertion, `readonly` · arquivos em camelCase · linha em branco entre statements · sem
comentário no meio do código · sem emoji · pt-BR com acentos completos.

Vocabulário visual da home e do FAQ. **Nenhuma cor nova, nenhuma dependência nova.**

## Arquivos

**Criar:** `src/content/topics/comprarBitcoinComPix.ts`
**Editar:** `src/content/topics/topics.ts` (uma linha)

## Phase 2 — mapa de keyword (ao vivo, 2026-07-29)

- **Primária adotada:** `comprar bitcoin com pix por api`
- **Por que não a genérica.** `comprar bitcoin com pix` é o termo de maior demanda e está
  **dominado por autoridade muito acima da nossa**: `bipa.app` tem literalmente esse título na
  home, mais Paybis, criptofacil e brasilbitcoin. A skill manda, nesse caso, propor a variante
  de cauda longa em vez de disputar a página 3 do termo genérico. A genérica entra como
  **secundária**, no `<h2>` e no corpo, não como alvo do `<title>`
- **SERP observada:** `brasilbitcoin.com.br/api-pix-criptomoedas` (API B2B),
  **`pixbitcoin.org`** (gateway B2B por API, trilho Liquid, posicionado em "sem KYC"),
  `bipa.app` (home retail), Paybis, criptofacil (guia), Livecoins (notícia Transfero+Lightspark)
- **Secundárias:** comprar bitcoin com pix · api para comprar bitcoin · comprar bitcoin lightning ·
  comprar bitcoin liquid · bitcoin via pix para empresas
- **Descartadas:** "comprar bitcoin sem KYC" e variantes de privacidade — é o posicionamento do
  `pixbitcoin.org` e é o **oposto** do nosso: a Hodle tem KYC integrado nos trilhos, e vender o
  contrário seria falso
- **PAA → FAQ:** 1) Como comprar Bitcoin com Pix por API? 2) Em qual rede o Bitcoin é
  entregue? 3) Dá para entregar no endereço do meu usuário? 4) Qual a taxa? 5) Precisa de KYC?
- **Ângulo vazio (nossa tese):** ninguém cobre **os três trilhos de entrega juntos — Lightning,
  on-chain e Liquid — por API, entregando no endereço que você indicar**. A pixbitcoin faz
  Liquid e vende privacidade; a Bipa faz Lightning e é retail; a Brasil Bitcoin tem API mas não
  esse enquadramento. Entregar no endereço do usuário final, e não num saldo interno, é o
  diferencial B2B
- **Proibidos:** competir em preço (a SERP tem 0,45% anunciado para USDT; a nossa taxa
  publicada é 2% e a página **não** discute quem é mais barato) · "sem KYC" · "anônimo" ·
  "sem burocracia" · promessa de câmbio · afirmar que a Hodle é regulada, é banco ou custodia
  ativos · DEPIX · `tron.svg`

## Fronteiras

- **A única taxa citável é 2%**, e a página **não** a repete: ela **linka** `/precos`. Motivo:
  preço tem uma fonte de verdade só, e é aquela página. Se você citar 2% aqui, cria dois
  lugares para manter.
- **Nenhum prazo numérico.** Permitido: "24/7", "sem depender de horário bancário". Não use
  "em segundos" nesta página — a documentação só publica isso para o fluxo Lightning ↔ PIX de
  **entrada** de pagamento, não para compra.
- **Não afirme custódia.** A entrega é num endereço indicado; as chaves são do usuário.

## Registro `TopicPage`

`src/content/topics/comprarBitcoinComPix.ts` exporta `comprarBitcoinComPix`.

```
slug:            'comprar-bitcoin-com-pix'
primaryKeyword:  'comprar bitcoin com pix por api'
title:           'Comprar Bitcoin com Pix por API'
h1:              'Reais entram por Pix, sai bitcoin'
updatedAt:       '2026-07-29'
changeFrequency: 'monthly'
priority:        0.8
ogImage:         '/og-image-v2.png'
kicker:          'BITCOIN'
```

`description` (150 caracteres):

> Converta reais em bitcoin por API e entregue em Lightning, on-chain ou Liquid, no endereço que você indicar. Disponível 24 horas por dia.

`keywords`:

```
'comprar bitcoin com pix por api'
'comprar bitcoin com pix'
'api para comprar bitcoin'
'comprar bitcoin lightning'
'comprar bitcoin liquid'
'bitcoin via pix para empresas'
```

`subhead` (30 palavras):

> Uma chamada converte reais em bitcoin e entrega na rede que você escolher. Lightning para pagamento imediato, on-chain para liquidação, Liquid para transferência de ativo. Sem saldo interno no meio.

`faqSubhead`:

> Tire suas dúvidas sobre comprar bitcoin com Pix por API.

`ctaSubhead`:

> Comece pela documentação ou fale com o time da Hodle.

`heroIcons`:

```
{ src: '/pix.svg',    label: 'Pix' }
{ src: '/btc.svg',    label: 'Bitcoin' }
{ src: '/ln.svg',     label: 'Lightning' }
{ src: '/liquid.svg', label: 'Liquid' }
```

`ctaPrimary`:
```
{ label: 'Ver a documentação', href: 'https://docs.hodle.com.br/docs/deposit-asset' }
```

`ctaSecondary`:
```
{ label: 'Falar com vendas', href: 'https://api.whatsapp.com/send?phone=5511960000445' }
```

## Seções (5)

### 1 — `id: 'o-que-e'` · `kind: 'PROSE'`

`heading`: **Comprar bitcoin com Pix, por API**

`body`:

> É converter reais em bitcoin numa chamada e entregar o ativo direto num endereço. O Pix entra, a conversão acontece, e o bitcoin sai na rede que você escolheu para o destino que você indicou.
>
> A diferença em relação a comprar numa exchange é o destino. Aqui não existe saldo interno intermediário esperando saque: a entrega é o próprio passo final da operação.

`bullets`:

```
'Entrada em reais por Pix, disponível 24 horas por dia.'
'Entrega em Lightning, on-chain ou Liquid.'
'Destino é um endereço que você indica, não um saldo interno.'
'Sem depender de horário bancário.'
```

`icons`: `[]` · `comparison`: `null`

### 2 — `id: 'como-funciona'` · `kind: 'STEPS'`

`heading`: **Do Pix ao bitcoin entregue**

`body`:

> Três etapas, e a única decisão sua é a rede de entrega.

`bullets`:

```
'Escolher a rede. Lightning para pagamento imediato, on-chain para liquidação em bloco, Liquid para transferência de ativo.'
'Disparar a operação. O deposit-asset recebe o valor em reais e o endereço de destino.'
'Entrega e confirmação. O bitcoin chega no endereço indicado, e o webhook assinado com HMAC avisa a mudança de estado.'
```

`icons`: `[]` · `comparison`: `null`

### 3 — `id: 'tres-trilhos'` · `kind: 'ASSETS'`

`heading`: **Três trilhos, uma integração**

`body`:

> Cada rede resolve um problema diferente, e a escolha é por operação, não por contrato. Lightning entrega em pagamento instantâneo e de baixo custo. On-chain entrega liquidação na rede base do Bitcoin. Liquid entrega transferência de ativo em sidechain.

`bullets`: `[]`

`icons`:

```
{ src: '/btc.svg',    label: 'Bitcoin on-chain' }
{ src: '/ln.svg',     label: 'Lightning' }
{ src: '/liquid.svg', label: 'Liquid' }
{ src: '/pix.svg',    label: 'Pix' }
```

`comparison`: `null`

### 4 — `id: 'pela-api'` · `kind: 'CODE'`

`heading`: **A chamada de entrada**

`body`:

> O mesmo endpoint que converte reais em bitcoin converte em USDT, USDC e USDCE. A rede e o ativo de destino são parâmetro, não integração separada.

`bullets`:

```
'deposit-asset — converte reais e entrega no endereço indicado.'
'Ativos de destino: Lightning, USDT, USDC e USDCE.'
'Webhook assinado com HMAC em cada mudança de estado.'
'Guia em docs.hodle.com.br/docs/deposit-asset.'
```

`icons`: `[]` · `comparison`: `null`

Renderize com o `<CodeBlock />` existente via `topicCodeBlock.tsx`, sem props novas.

### 5 — `id: 'kyc'` · `kind: 'PROSE'`

`heading`: **KYC faz parte do trilho**

`body`:

> A verificação de identidade do usuário final é uma chamada da própria API, não um processo paralelo. Submeter e consultar o estado do KYC são operações documentadas, e a entrada e saída de valores dependem dele.
>
> Isso é escolha de produto. Um trilho que converte reais em ativo digital carrega obrigação de identificação, e resolver isso dentro da API é mais simples do que costurar um fornecedor separado.

`bullets`:

```
'Submissão e consulta de KYC pela mesma API.'
'Comprovante de endereço e de capacidade financeira documentados.'
'Entrada e saída de valores dependem do KYC do usuário.'
```

`icons`: `[]` · `comparison`: `null`

## FAQ (5 pares)

```
Q: Como comprar Bitcoin com Pix por API?
A: Você dispara a operação de deposit-asset informando o valor em reais e o endereço de destino, e escolhe se a entrega é em Lightning, on-chain ou Liquid. O bitcoin chega no endereço indicado e o webhook assinado avisa a conclusão.

Q: Em qual rede o Bitcoin é entregue?
A: Na que você escolher: Lightning, on-chain ou Liquid. A rede é parâmetro da operação, então dá para variar por caso de uso sem mudar a integração.

Q: Dá para entregar no endereço do meu usuário final?
A: Sim, e é o desenho pretendido. A entrega é num endereço que você indica, sem saldo interno intermediário esperando saque. As chaves do endereço de destino não ficam com a Hodle.

Q: Qual a taxa?
A: A taxa de serviço está publicada na página de preços, que é a única fonte oficial. Qualquer valor citado fora dela deve ser conferido antes de ser considerado válido.

Q: Precisa de KYC?
A: Sim. A verificação de identidade do usuário final é exigida para operações de entrada e saída, e é feita pela própria API, com submissão e consulta de estado documentadas.
```

A resposta 4 **linka** `/precos` na expressão "página de preços". Não repita o número aqui.

## Relacionados (`related`)

```
{ label: 'Lightning para Pix',   href: '/lightning-para-pix' }
{ label: 'Preços e taxas',       href: '/precos' }
{ label: 'Glossário',            href: '/glossario' }
{ label: 'API Pix stablecoin',   href: '/api-pix-stablecoin' }
```

## Link de entrada (obrigatório)

Na coluna **Produtos** do `src/components/ui/Footer.tsx`, o item existente
`{ label: 'Compra e Venda', href: '#compra-venda' }` **passa a apontar** para
`/comprar-bitcoin-com-pix`:

```
{ label: 'Compra e Venda', href: '/comprar-bitcoin-com-pix' }
```

Mesmo raciocínio do item `Wallets` na leva anterior: âncora não é URL para o Google. A âncora
`#compra-venda` continua existindo na home, só deixa de ser o destino do rodapé.

## Aceite

- [ ] `pnpm build` verde; rota **estática** no output
- [ ] `npx tsc --noEmit` sem erro novo; `pnpm eslint` sem erro novo
- [ ] copy **idêntica** ao contrato; `faqSubhead` e `ctaSubhead` preenchidos
- [ ] um único `<h1>`; todo ícone existe em `public/` (confirme `liquid.svg`)
- [ ] `/sitemap.xml` contém `/comprar-bitcoin-com-pix` com `lastmod` 2026-07-29
- [ ] `WebPage` + `FAQPage` + `BreadcrumbList` parseiam; FAQPage casa com as 5 visíveis
- [ ] rodapé: `Compra e Venda` aponta para `/comprar-bitcoin-com-pix`
- [ ] **nenhum percentual na página** — confirme com `grep -oE '[0-9]+[,.]?[0-9]*\s?%'` no
      arquivo de conteúdo, retornando vazio
- [ ] nenhum "sem KYC", nenhum "anônimo", nenhuma comparação de preço, nenhum prazo numérico,
      nenhum "em segundos", nenhum concorrente nomeado, nenhum DEPIX
- [ ] a FAQ 4 linka `/precos`
- [ ] rotas existentes seguem abrindo; zero 404 de asset; sem overflow em 390px

## Review Block

```markdown
## Review Block
LABEL: comprar-bitcoin-com-pix
BASE_URL: http://localhost:3000
STEPS:
  - build
  - goto: /comprar-bitcoin-com-pix
  - expectVisible: "Reais entram por Pix, sai bitcoin"
  - expectOne: h1
  - shot: "comprar-bitcoin-com-pix-desktop"
  - viewport: 390x844
  - shot: "comprar-bitcoin-com-pix-mobile"
  - assertSitemap: /comprar-bitcoin-com-pix
  - assertJsonLd: WebPage,FAQPage,BreadcrumbList
  - assertHead: title,description,canonical,og:image
  - assertNoText: "DEPIX"
```

Não faça merge. Não rode deploy.
