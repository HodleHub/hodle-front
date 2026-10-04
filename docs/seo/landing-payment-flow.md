# Fluxo de pagamento da landing

Revisão de 2026-10-04, após #89. A home explica o produto; a documentação externa
contém os detalhes de integração.

- Retirados o painel Node/cURL, payloads, eventos de webhook e pré-requisitos técnicos.
- Retirado o texto sobre criação de wallet Tron. Tron continua como origem de USDT.
- Stablecoins e Lightning têm três etapas simples, com seleção, confirmação e
  acompanhamento. A opção Bitcoin on-chain que só exibia um aviso técnico saiu
  deste demonstrador; não se inventa um fluxo de payout para ela.
- O destaque do hero e a metadata descrevem o pagamento, sem prometer chamadas API
  na landing. O card de API usa uma descrição do produto em vez de um endpoint.
- O gerador de exemplos e seus testes exclusivos foram removidos por não fazerem
  mais parte da landing. Os testes existentes da página e do restante do site
  continuam aplicáveis.

As receitas de integração e screenshots em documentos de auditoria anteriores
registram a implementação histórica; não são a especificação atual desta seção.
Não reintroduzir exemplos executáveis ou ressalvas internas no texto de produto.

## Validação

107 testes Vitest e 13 testes Node passaram; TypeScript, lint e build passaram.
Verificador SEO: 49 páginas e 8 imagens. Chrome confirmou troca do último passo
para Lightning e retorno a Tron; a descrição permanece legível no painel escuro.
A resposta HTML da home não contém mais o código ou o aviso removido.

![Fluxo de Tron em linguagem de produto](evidence/2026-10-04-product-flow/tron.jpg)
