import { USD_AUDIENCES, USD_FAQ_ITEMS, USD_PAGE_DESCRIPTION, USD_PAGE_TITLE, USD_PAGE_URL, USD_RAILS, USD_STEPS, type UsdAudience, type UsdRail, type UsdStep } from '../../components/usd/usdData'
import type { FaqItem } from '../../components/landingV2/landingV2Data'
import { pageUpdatedAt } from '../pageUpdatedAt'

const steps: string = USD_STEPS.map((step: UsdStep, index: number): string => `${index + 1}. ${step.title}: ${step.description}`).join('\n')
const rails: string = USD_RAILS.map((rail: UsdRail): string => `- **${rail.label} (${rail.eta.toLowerCase()})**: ${rail.description} ${rail.requirement}.`).join('\n')
const audiences: string = USD_AUDIENCES.map((audience: UsdAudience): string => `## ${audience.title}\n\n${audience.description}`).join('\n\n')
const faq: string = USD_FAQ_ITEMS.map((item: FaqItem): string => `### ${item.question}\n\n${item.answer}`).join('\n\n')

/** Serves the same USD facts and FAQ answers as the public page under Accept: text/markdown. */
export const usdMarkdown: string = `# ${USD_PAGE_TITLE}

> ${USD_PAGE_DESCRIPTION}

Fonte canônica: ${USD_PAGE_URL}
Atualizado em: ${pageUpdatedAt.usd}

## Como enviar dólares com Pix

${steps}

## ACH ou wire: como escolher?

Use o trilho indicado pelo destinatário. Confira os dados bancários, o prazo informado e a cotação antes de gerar o Pix. A transferência termina em dólares na conta bancária, sem exigir uma carteira cripto de quem recebe.

${rails}

${audiences}

## Perguntas frequentes

${faq}

## Continue explorando

- [Comprar USDT com Pix](https://hodle.com.br/comprar-usdt-com-pix): entrega em carteira de ativos digitais.
- [Receber Pix em stablecoin](https://hodle.com.br/receber-pix-em-stablecoin): recebimento automático sujeito a habilitação.
- [Termos da Hodle](https://hodle.com.br/termos): papel da plataforma e dos parceiros financeiros.
`
