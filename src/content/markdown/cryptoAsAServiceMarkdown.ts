/**
 * Markdown representation of the Crypto as a Service page, served under
 * `Accept: text/markdown`.
 */
export const cryptoAsAServiceMarkdown = `# Crypto as a Service para empresas

> Hodle CaaS: rampas de Pix para stablecoin, wallets auto-custodiais multi-rede, swaps entre ativos e redes e front whitelabel. Uma API para ligar cripto ao seu produto.

Fonte canônica: https://hodle.com.br/crypto-as-a-service

A Hodle entrega infraestrutura cripto para fintechs, PSPs, marketplaces, exchanges, neobanks e plataformas SaaS que querem oferecer rampas, wallets, swaps e checkout cripto sem construir cada trilho do zero. Uma integração cobre os quatro pilares abaixo.

## Rampas

- On-ramp: cobrança Pix dinâmica com cotação travada.
- Off-ramp: payout em Pix a partir de saldo em stablecoin.
- Entrega em Polygon, Base, Arbitrum, Solana, Tron ou Spark.
- Webhooks assinados em cada transição de estado.

## Wallets

- Chaves sempre sob controle do usuário, nunca da Hodle.
- Multi-rede: um usuário, endereços em todas as redes.
- Gas patrocinado nas redes EVM.
- Recuperação por passkey ou senha, sem seed na tela.

## Swaps

- Swap entre ativos: BRL, USDT, USDC, BTC.
- Swap entre redes, com roteamento automático.
- Ponte para Lightning: on-chain vira instantâneo.
- Cotação com validade explícita antes de executar.

## Whitelabel

- Logo, cor de marca e domínio próprio.
- KYC e KYB embutidos no seu fluxo.
- Modo headless para quem quer desenhar a tela.
- Sandbox para testar antes de qualquer contrato.

## API para desenvolvedores e agentes de IA

- REST + SDK TypeScript.
- Webhooks e callbacks em tempo real.
- Sandbox com as mesmas rotas da produção.
- Feita também para agentes de IA integrarem sozinhos.

## Quem é responsável por cada parte

| Escopo | Responsável |
| --- | --- |
| Conta PJ e Pix | Instituição de pagamento autorizada pelo Banco Central do Brasil |
| Câmbio e liquidação em real | Parceiro autorizado a operar câmbio |
| Custódia dos ativos | Ninguém: a chave é derivada no dispositivo do seu usuário |
| Integração, API e suporte | Hodle |

A Hodle é uma empresa de software: não é banco, não é instituição financeira, não emite moeda eletrônica, não emite stablecoin e não custodia fundos ou ativos de clientes. Os fluxos regulados são conduzidos por parceiros licenciados e/ou regulados.

## Onde ir a seguir

- [Documentação da API](https://docs.hodle.com.br)
- [API Pix stablecoin](https://hodle.com.br/api-pix-stablecoin)
- [Gateway de pagamento cripto](https://hodle.com.br/gateway-de-pagamento-cripto)
- [Preços e taxas](https://hodle.com.br/precos)
- [Perguntas frequentes](https://hodle.com.br/faq)
`
