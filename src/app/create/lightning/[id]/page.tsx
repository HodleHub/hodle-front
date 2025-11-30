'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Card } from '../../../../components/ui/Card'
import Image from 'next/image'
import Link from 'next/link'
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
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando invoice...</p>
          </div>
        </main>
      </div>
    )
  }

  if (!invoice) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600">Invoice não encontrada</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow py-12 px-4 md:py-16 max-w-4xl mx-auto w-full">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <Link href="/">
              <Image
                src="/hodlelogo.png"
                alt="Hodle"
                width={100}
                height={80}
                className="mx-auto cursor-pointer"
              />
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Pagamento Lightning</h1>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="p-6 border-2 border-orange-300 rounded-xl border bg-card text-card-foreground shadow">
            <div className="mb-6 text-center">
              <div className="inline-flex items-center justify-center p-1 bg-orange-50 rounded-full mb-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Invoice Criada</h3>
              <p className="text-gray-500 text-sm">Escaneie o código QR para pagar</p>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <div className="bg-white p-4 rounded-xl border border-gray-200 mb-4">
                <div className="bg-dot-grid border border-gray-200 rounded-lg p-4 flex items-center justify-center" style={{ width: "200px", height: "200px" }}>
                  <svg width={160} height={160} className="text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h7v7H3V3zm1 1v5h5V4H4zm9-1h7v7h-7V3zm1 1v5h5V4h-5zM3 14h7v7H3v-7zm1 1v5h5v-5H4zm9-1h7v7h-7v-7zm1 1v5h5v-5h-5z"/>
                  </svg>
                </div>
              </div>
              
              <div className="w-full py-3 px-4 bg-gray-50 rounded-lg flex items-center justify-between mb-4">
                <div className="truncate max-w-xs">
                  <div className="text-xs text-gray-500 mb-1">Invoice Lightning</div>
                  <div className="text-sm font-mono truncate">
                    {invoice.lightningInvoice}
                  </div>
                </div>
                <button 
                  onClick={() => copyToClipboard(invoice.lightningInvoice)}
                  className="shrink-0 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"/>
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/>
                  </svg>
                </button>
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
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Voltar ao início
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 