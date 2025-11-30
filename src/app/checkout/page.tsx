'use client'

import { useState, useCallback, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import { StepIndicator } from '../../components/checkout/StepIndicator'
import { StepOne } from '../../components/checkout/StepOne'
import { StepTwo } from '../../components/checkout/StepTwo'
import { StepThree } from '../../components/checkout/StepThree'
import Image from 'next/image'

import { toast } from 'sonner'
import { baseUrl } from '../../utils/baseUrl'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [pixCopiaCola, setPixCopiaCola] = useState<string>('')
  const [lightningInvoice, setLightningInvoice] = useState<string>('')
  const [paymentAmount, setPaymentAmount] = useState<string>('0.00')

  useEffect(() => {
    const pixFromUrl = searchParams.get('pix')
    const amountFromUrl = searchParams.get('amount')

    if (pixFromUrl) {
      setPixCopiaCola(decodeURIComponent(pixFromUrl))
    }
    if (amountFromUrl) {
      setPaymentAmount(amountFromUrl)
    }
  }, [searchParams])

  const goToNextStep = useCallback(() => {
    if (currentStep < 3) {
      if (currentStep === 1 && pixCopiaCola) {
        const mockLightningInvoice = 'lnbc1500n1pd7jf8cpp5l8ljq6...' // Mock invoice
        setLightningInvoice(mockLightningInvoice)
        setCurrentStep(currentStep + 1)
      } else if (currentStep === 2) {
        setCurrentStep(currentStep + 1)
      }
    }
  }, [currentStep, pixCopiaCola])

  const goToPrevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep])

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Copiado para a área de transferência')
      })
      .catch(() => {
        toast.error('Erro ao copiar')
      })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow py-12 px-4 md:py-16 max-w-4xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Pagar PIX com Lightning
          </h1>
          <StepIndicator currentStep={currentStep} />
        </div>

        <div className="max-w-xl mx-auto mb-16">
          {currentStep === 1 && (
            <StepOne
              pixCopiaCola={pixCopiaCola}
              setPixCopiaCola={setPixCopiaCola}
              paymentAmount={paymentAmount}
              setPaymentAmount={setPaymentAmount}
              goToNextStep={goToNextStep}
            />
          )}

          {currentStep === 2 && (
            <StepTwo
              pixCopiaCola={pixCopiaCola}
              lightningInvoice={lightningInvoice}
              paymentAmount={paymentAmount}
              goToNextStep={goToNextStep}
              goToPrevStep={goToPrevStep}
              copyToClipboard={copyToClipboard}
            />
          )}

          {currentStep === 3 && (
            <StepThree
              amount={paymentAmount}
              bitcoinAmount="1500"
              goToPrevStep={goToPrevStep}
              copyToClipboard={copyToClipboard}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-grow py-12 px-4 md:py-16 max-w-4xl mx-auto w-full">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
              Pagar PIX com Lightning
            </h1>
            <div className="text-gray-600">Carregando...</div>
          </div>
        </main>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  )
}
