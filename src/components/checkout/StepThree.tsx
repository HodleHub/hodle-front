import { ArrowLeft, CheckCircle, Copy, QrCode } from 'lucide-react'
import { Button } from '../ui/Button'
import Link from 'next/link'

interface StepThreeProps {
  amount: string
  bitcoinAmount: string
  goToPrevStep: () => void
  copyToClipboard: (text: string) => void
}

export function StepThree({
  amount,
  bitcoinAmount,
  goToPrevStep,
  copyToClipboard,
}: StepThreeProps) {
  const pixCode =
    '00020126330014BR.GOV.BCB.PIX0111036491024680213Compra Bitcoin5204000053039865802BR5924João Silva6009SAO PAULO62120508Hodle1234630454C8'

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-6">
        Realize o pagamento
      </h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-orange-300">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center p-1 bg-orange-50 rounded-full mb-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold">Pedido Criado</h3>
          <p className="text-gray-500 text-sm">
            Escaneie o código QR para pagar
          </p>
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className="bg-white p-4 rounded-xl border border-gray-200 mb-4">
            <div
              className="bg-dot-grid border border-gray-200 rounded-lg p-4 flex items-center justify-center"
              style={{ width: '200px', height: '200px' }}
            >
              <QrCode size={160} className="text-gray-800" />
            </div>
          </div>

          <div className="w-full py-3 px-4 bg-gray-50 rounded-lg flex items-center justify-between mb-4">
            <div className="truncate max-w-xs">
              <div className="text-xs text-gray-500 mb-1">
                Chave PIX (copia e cola)
              </div>
              <div className="text-sm font-mono truncate">{pixCode}</div>
            </div>
            <Button
              variant="ghost"
              onClick={() => copyToClipboard(pixCode)}
              className="shrink-0"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Valor:</span>
              <span className="font-bold">R$ {amount}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700">Bitcoin:</span>
              <span className="font-medium">{bitcoinAmount} sats</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Status:</span>
              <span className="text-orange-500 font-medium">
                Aguardando pagamento
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={goToPrevStep}
            className="border-gray-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <Link href="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Ir para início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
