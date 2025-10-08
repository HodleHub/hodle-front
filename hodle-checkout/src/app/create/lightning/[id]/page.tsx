'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Copy, QrCode, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/Header'
import { Footer } from '@/components/ui/Footer'
import { toast } from 'sonner'

interface LightningInvoice {
  id: string
  amount: string
  bitcoinAmount: string
  lightningInvoice: string
  status: 'pending' | 'paid' | 'expired'
  expiresAt: string
}

export default function LightningPage() {
  const params = useParams()
  const [invoice, setInvoice] = useState<LightningInvoice | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      // Simular carregamento da invoice
      setTimeout(() => {
        setInvoice({
          id: params.id as string,
          amount: '10.50',
          bitcoinAmount: '1500',
          lightningInvoice: 'lnbc1500n1pd7jf8cpp5l8ljq6...',
          status: 'pending',
          expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString()
        })
        setLoading(false)
      }, 1000)
    }
  }, [params.id])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Copiado para a área de transferência")
      })
      .catch(() => {
        toast.error("Erro ao copiar")
      })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando invoice...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!invoice) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600">Invoice não encontrada</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow py-12 px-4 md:py-16 max-w-4xl mx-auto w-full">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/hodlelogo.png"
              alt="Hodle"
              width={100}
              height={80}
              className="mx-auto"
            />
          </div>
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Pagamento Lightning</h1>
        </div>
        
        <div className="max-w-xl mx-auto">
          <Card className="p-6 border-2 border-orange-300">
            <div className="mb-6 text-center">
              <div className="inline-flex items-center justify-center p-1 bg-orange-50 rounded-full mb-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold">Invoice Criada</h3>
              <p className="text-gray-500 text-sm">Escaneie o código QR para pagar</p>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <div className="bg-white p-4 rounded-xl border border-gray-200 mb-4">
                <div className="bg-dot-grid border border-gray-200 rounded-lg p-4 flex items-center justify-center" style={{ width: "200px", height: "200px" }}>
                  <QrCode size={160} className="text-gray-800" />
                </div>
              </div>
              
              <div className="w-full py-3 px-4 bg-gray-50 rounded-lg flex items-center justify-between mb-4">
                <div className="truncate max-w-xs">
                  <div className="text-xs text-gray-500 mb-1">Invoice Lightning</div>
                  <div className="text-sm font-mono truncate">
                    {invoice.lightningInvoice}
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  onClick={() => copyToClipboard(invoice.lightningInvoice)}
                  className="shrink-0"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Valor:</span>
                  <span className="font-bold">R$ {invoice.amount}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Bitcoin:</span>
                  <span className="font-medium">{invoice.bitcoinAmount} sats</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Status:</span>
                  <span className="text-orange-500 font-medium">Aguardando pagamento</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Voltar ao início
              </Button>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 