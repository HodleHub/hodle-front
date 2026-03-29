'use client'

import { useState, useCallback } from 'react'
import { toast } from 'sonner'
import { baseUrl } from '../utils/baseUrl'

interface DecodedPixQRCode {
  value?: number
  merchantName?: string
  merchantCity?: string
  pixKey?: string
  description?: string
}

interface DecodeResult {
  success: boolean
  decodedPixQRCode?: DecodedPixQRCode
}

export default function PixDecoder() {
  const [pixCopiaCola, setPixCopiaCola] = useState('')
  const [paymentAmount, setPaymentAmount] = useState('')
  const [decodedData, setDecodedData] = useState<DecodedPixQRCode | null>(null)
  const [isDecoding, setIsDecoding] = useState(false)

  const decodePixQRCode = useCallback(async (qrCodeValue: string) => {
    if (!qrCodeValue.trim()) {
      setDecodedData(null)
      setPaymentAmount('')
      return
    }

    setIsDecoding(true)
    try {
      const response = await fetch(`${baseUrl}/api/qrcode/decode`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ qrCode: qrCodeValue }),
      })

      const data: DecodeResult = await response.json()

      if (response.ok && data?.success && data?.decodedPixQRCode) {
        setDecodedData(data.decodedPixQRCode)
        if (data.decodedPixQRCode.value && data.decodedPixQRCode.value > 0) {
          const formattedValue = data.decodedPixQRCode.value
            .toFixed(2)
            .replace('.', ',')
          setPaymentAmount(`R$ ${formattedValue}`)
        }
      } else {
        setDecodedData(null)
        if (!qrCodeValue.trim()) setPaymentAmount('')
        toast.error('Erro ao decodificar QR Code PIX')
      }
    } catch (error) {
      console.error('Erro ao decodificar QR Code:', error)
      setDecodedData(null)
      toast.error('Erro ao processar QR Code PIX')
    } finally {
      setIsDecoding(false)
    }
  }, [])

  const handlePixInput = (value: string) => {
    setPixCopiaCola(value)
    decodePixQRCode(value)
  }

  const handleProcessPix = () => {
    window.location.href = `/checkout`
  }

  const handleScanQRCode = () => {
    toast.info('Funcionalidade de scanner em desenvolvimento')
  }

  // This component currently doesn't render anything since it's not used in the page
  // Return null or implement the UI as needed
  return null
}












