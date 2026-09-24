/**
 * Markdown representation of the /usd page, served under
 * `Accept: text/markdown`.
 */
export const usdMarkdown = `# Conta USD: pague em Pix, chegue em dólar nos EUA

> Envie dólares para qualquer conta bancária nos Estados Unidos a partir de um Pix, por ACH ou wire, sem abrir conta lá fora. Cotação na tela antes de pagar.

Fonte canônica: https://hodle.com.br/usd

## Como funciona

1. Verifique a conta: KYC para pessoa física, KYB para empresa. A Conta USD é liberada depois da análise.
2. Cadastre quem recebe: banco, routing number e conta nos EUA. A sua, a de um fornecedor ou a de um prestador.
3. Veja a cotação e pague: a tela mostra quanto sai em reais, com a taxa incluída, antes de você gerar o Pix.
4. O dólar chega: sai por ACH ou wire, e o app mostra cada etapa até cair na conta.

## Trilhos

- ACH: 1 a 3 dias úteis. Pede routing number e conta.
- Wire: 1 a 2 dias úteis. Pede routing number, conta e endereço do banco.

## Para quem

- Empresas que pagam software, agência ou fornecedor nos Estados Unidos.
- Quem abastece a própria conta americana, pessoal ou da LLC.
- Plataformas que querem oferecer envio para os EUA aos seus clientes.

## API

Os endpoints de USD estão chegando à API da Hodle: cadastrar o destinatário, cotar, criar a transferência e acompanhar o status, com webhooks a cada etapa. Fale com o time para entrar no acesso antecipado.

## Perguntas frequentes

### Preciso ter conta fora do Brasil?

Não. Você paga um Pix na Hodle e o dólar é enviado para a conta do destinatário nos Estados Unidos. Quem recebe precisa de conta num banco americano.

### Quanto custa?

A cotação aparece antes de você gerar o Pix, com a taxa da Hodle já incluída. O valor em dólar que você vê é o que sai para o destinatário.

### ACH ou wire: qual escolher?

ACH chega em 1 a 3 dias úteis e pede routing number e conta. Wire chega em 1 a 2 dias úteis e também pede o endereço do banco. Use o que o destinatário indicar na fatura.

### O que preciso para começar?

Uma conta na Hodle com a verificação completa: identidade para pessoa física, dados da empresa para pessoa jurídica. A Conta USD é liberada depois da análise do time.

### Posso oferecer isso aos meus clientes pela API?

Os endpoints de USD estão chegando à API da Hodle. Fale com o time para entrar no acesso antecipado e desenhar a integração.

### E se a transferência não chegar?

Cada etapa aparece no app. Se o banco de destino recusar, por exemplo por dados de conta errados, o suporte da Hodle acompanha a devolução com você.
`
