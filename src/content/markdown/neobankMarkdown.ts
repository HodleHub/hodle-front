/**
 * Markdown representation of the neobank infrastructure page, served under
 * `Accept: text/markdown`.
 */
export const neobankMarkdown = `# Infraestrutura para neobanks

> A infraestrutura da Hodle para neobanks: conta nominal, Pix liquidado em real tokenizado, wallets, USDT e USDC, swaps, Bitcoin, USD fiat, disputes e KYB em uma única camada.

Fonte canônica: https://hodle.com.br/neobank

A Hodle funciona como uma camada de infraestrutura financeira e cripto para quem constrói um neobank. Você mantém a experiência do seu produto e conecta os módulos necessários por API ou painel, começando só com Pix e conta nominal se preferir.

## Contas e dinheiro

- Conta nominal: conta empresarial no nome do seu cliente, pronta para receber e movimentar BRL.
- Pix: entrada, saída e pagamentos Pix 24/7, por API, painel ou experiência white-label.
- USD fiat: operações em dólar e treasury para empresas que atuam além do Brasil.

## Ativos digitais

- Wallets: carteiras multi-rede auto-custodiais, com chaves sob controle do usuário final.
- Real tokenizado: BRLA e BRS representam o real on-chain. O Pix liquida direto aqui, sem conversão cambial.
- Swaps: converta entre real tokenizado, USDT, USDC, BTC e USD dentro do mesmo fluxo.
- Bitcoin: BTC on-chain, Liquid e Lightning como pagamento e reserva de valor.

## Confiança e operação

- KYB: onboarding empresarial e verificações de compliance integrados ao ciclo da conta.
- Disputes: fluxos para investigar, contestar e resolver movimentações com rastreabilidade.

## Redes disponíveis

Bitcoin, Lightning, Liquid, Polygon, Base, Arbitrum, Solana, Tron e Spark. A disponibilidade por ativo e operação pode variar por fluxo.

## Perguntas frequentes

### A Hodle substitui o core banking?

A Hodle funciona como uma camada de infraestrutura financeira e cripto. Você mantém a experiência do seu produto e conecta os módulos necessários por API ou painel.

### Posso começar só com Pix e conta nominal?

Sim. A arquitetura é modular: comece com o fluxo de BRL e adicione wallets, real tokenizado, swaps, BTC, USD fiat e operações conforme o produto evolui.

### O Pix recebido vira BRL ou stablecoin?

Ele já nasce tokenizado. Receber um Pix e liquidá-lo em real on-chain não passa por conversão cambial: o valor é entregue como BRLA na Polygon ou como BRS na Solana.

### Quais redes estão disponíveis?

Bitcoin, Lightning, Liquid, Polygon, Base, Arbitrum, Solana, Tron e Spark. A disponibilidade por ativo e operação pode variar por fluxo.

### A integração é por API?

Sim. A Hodle oferece API, webhooks assinados e documentação para times de produto e engenharia orquestrarem os fluxos dentro da própria experiência.

## Onde ir a seguir

- [Página completa](https://hodle.com.br/neobank)
- [Crypto as a Service](https://hodle.com.br/crypto-as-a-service)
- [Documentação da API](https://docs.hodle.com.br)
- [Preços e taxas](https://hodle.com.br/precos)
- [Perguntas frequentes](https://hodle.com.br/faq)
`
