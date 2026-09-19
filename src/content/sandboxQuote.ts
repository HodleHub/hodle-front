import type { TopicCode } from '../types/topic'

export const sandboxQuote: TopicCode = {
  label: 'cURL · cotação no sandbox · sem executar pagamento',
  language: 'bash',
  snippet: `curl --request POST \\
  --url https://sandbox-api.hodle.com.br/api/quote \\
  --header "Authorization: Bearer $HODLE_SANDBOX_API_KEY" \\
  --header "Content-Type: application/json" \\
  --data '{
    "inputCurrency": "BRL",
    "inputPaymentMethod": "PIX",
    "outputCurrency": "USDC",
    "outputPaymentMethod": "BASE",
    "inputAmount": "100.00"
  }'`,
}
