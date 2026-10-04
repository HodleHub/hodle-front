# Contrato — página de tópico `/wallet-auto-custodial`

Revisado em **2026-10-04** contra as páginas públicas específicas da API. Esta revisão
substitui a copy e as afirmações técnicas do contrato de julho de 2026. O mapa de intenção
histórico está em [`ai-discoverability.walkthrough.md`](ai-discoverability.walkthrough.md) §5.3.

## Escopo e fonte do conteúdo

- Implementação: `src/content/topics/walletAutoCustodial.ts`, export `walletAutoCustodial`.
- Keyword primária: `carteira auto-custodial para empresas`; intenção comercial B2B.
- H1: `Carteiras por API, com autorização de assinatura`.
- `updatedAt`: `2026-10-04T00:00:00-03:00`, refletindo esta revisão editorial.
- A fonte TypeScript mantém a copy publicada. O contrato define limites factuais, sem
  ordenar a reprodução de promessas antigas de controle exclusivo.
- HTML, metadata, JSON-LD, Markdown e sitemap usam o registry e os componentes existentes.

## Assinatura e controle de credenciais

Descrever o fluxo efetivamente documentado. No fluxo por PIN, a aplicação fornece
`walletPin` e `protectedSymmetricKey` da origem. O servidor desbloqueia a chave
**temporariamente em memória para assinar**, e a descarta após o uso. A documentação
apresenta armazenamento de chaves criptografadas e responsabilidade da plataforma
integradora pela guarda e envio dos PINs das subcontas.

- Não afirmar que a assinatura ocorre apenas no dispositivo do usuário.
- Não afirmar que a aplicação integradora nunca pode movimentar os fundos: isso depende
  das credenciais, do escopo e das autorizações que ela controla.
- A API key sozinha não substitui PIN e chave protegida nesse fluxo.
- A descrição técnica não determina, por si, custódia jurídica ou propriedade dos ativos.
- Não prometer impossibilidade de bloqueio, recuperação, invasão ou perda.
- Não inventar MPC, multisig, HSM, algoritmos ou garantias criptográficas.
- O payout com assinatura do usuário para carteira própria é um fluxo separado; manter a
  distinção e remeter à documentação específica.

## Criação, seleção e cache

1. `POST /api/wallet/create` exige `walletPin` de seis dígitos. A criação documenta Polygon,
   Base e Solana; cada chamada bem-sucedida cria outra carteira. Salvar `data.id` como
   `walletId`, em vez de recriar para consultar.
2. Para carteira de cliente, fornecer `subAccountId` e as credenciais do titular correto.
3. `POST /api/wallet/get` permite selecionar a carteira pelo `walletId`.
4. **`POST /api/wallet/keys`** retorna `walletId`, `protectedSymmetricKey` e `email`.
   Fazer cache **por walletId, junto do email do proprietário**, e atualizar após mudança
   da chave protegida daquela carteira. Não ensinar GET ou cache permanente por usuário.
5. Transferências usam `fromSubAccountId` para a origem de subconta; consultas e payouts
   usam `subAccountId`. Carteira, credenciais, titular e escopo devem corresponder.

No sandbox, a criação EVM usa Base Sepolia; a criação Solana não está disponível.

## Matrizes por operação

`POST /api/wallet/transfer` envia na mesma rede, sem bridge:

| Rede | Ativos |
|---|---|
| Polygon | USDT, USDC, BRLA |
| Base | USDC, BRLA |
| Solana | USDT, USDC, BRS |
| BNB Chain | USDT BEP20 |

BRS exige `NORA_RAIL` além de `WALLET_PAYOUT_API`. BNB exige `BNB_ASSET` e conta habilitada,
tem mínimo de 1 USDT e não funciona no sandbox. Tron não pertence a esta matriz.

`POST /api/wallet/payout` é outra operação: Polygon (USDT/USDC/BRLA), Base (USDC/BRLA),
Tron (USDT), Solana (USDT/USDC/BRS). Exige `WALLET_PAYOUT_API`; Tron também exige
`TRON_PAYOUT` e BRS exige `NORA_RAIL`. A seleção do ativo considera saldo e preferências
do endpoint. A resposta inicial com `transactionId` não confirma liquidação.

Lightning → Pix usa `POST /api/lightning/invoice`, separadamente. Não generalizar redes
de outras superfícies para criação, transferência ou payout.

## Fontes e links obrigatórios

- [Wallet Keys: criação, seleção e cache](https://docs.hodle.com.br/docs/wallet-keys).
- [Wallet Get: endereços e saldos](https://docs.hodle.com.br/docs/wallet-get).
- [Wallet Transfer: redes, credenciais e assinatura](https://docs.hodle.com.br/docs/wallet-transfer).
- [Wallet Payout: ativos, autorização e status](https://docs.hodle.com.br/docs/wallet-payout).
- [Lightning Invoice](https://docs.hodle.com.br/docs/lightning-invoice).

Usar links descritivos e rastreáveis nas seções. Conferir o HTML público atual das páginas
específicas; buscas em cache e a introdução das docs podem ficar atrás desses contratos.

## Limites e aceite

- Nenhuma taxa, SLA numérico, promessa de segurança absoluta ou conclusão regulatória.
- Não modificar o slug nem introduzir dependências/componentes para esta revisão de copy.
- Manter o design system, um H1 e ícones que existam em `public/`.
- As FAQs precisam refletir o modelo de assinatura e as matrizes por operação.
- Verificar paridade do conteúdo/FAQ com Markdown e JSON-LD gerados pelo registry.
- Validar testes relevantes, TypeScript, lint e build no fluxo de revisão do repositório.
