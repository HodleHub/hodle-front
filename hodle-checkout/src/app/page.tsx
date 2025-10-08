"use client"

import { useState, useCallback } from "react"
import { Bitcoin, Camera, Plus, Minus, QrCode, Copy, ScanQrCode, Zap } from "lucide-react"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from "@/components/ui/Footer"
import Header from "@/components/Header"
import { toast } from "sonner"
import { baseUrl } from "@/utils/baseUrl"

interface DecodedPixQRCode {
  value?: number;
  merchantName?: string;
  merchantCity?: string;
  pixKey?: string;
  description?: string;
}

interface DecodeResult {
  success: boolean;
  decodedPixQRCode?: DecodedPixQRCode;
}

export default function BitcoinLightningPayment() {
  const [pixCopiaCola, setPixCopiaCola] = useState("")
  const [paymentAmount, setPaymentAmount] = useState("")
  const [decodedData, setDecodedData] = useState<DecodedPixQRCode | null>(null)
  const [isDecoding, setIsDecoding] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const decodePixQRCode = useCallback(async (qrCodeValue: string) => {
    if (!qrCodeValue.trim()) {
      setDecodedData(null)
      setPaymentAmount("")
      return
    }

    setIsDecoding(true)
    try {
      const response = await fetch(`${baseUrl}/api/qrcode/decode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
        if (!qrCodeValue.trim()) {
          setPaymentAmount('')
        }
        toast.error("Erro ao decodificar QR Code PIX")
      }
    } catch (error) {
      console.error('Erro ao decodificar QR Code:', error)
      setDecodedData(null)
      toast.error("Erro ao processar QR Code PIX")
    } finally {
      setIsDecoding(false)
    }
  }, [])

  const handlePixInput = (value: string) => {
    setPixCopiaCola(value);
    // Decode PIX QR Code when user inputs data
    decodePixQRCode(value);
  };

  const handleProcessPix = () => {
    // Redirect to checkout page where user can input PIX code
    window.location.href = `/checkout`;
  };

  const handleScanQRCode = () => {
    // In a real app, this would open camera/QR scanner
    toast.info("Funcionalidade de scanner em desenvolvimento");
  };

  const faqItems = [
    {
      question: "O que é Bitcoin Lightning?",
      answer: "Bitcoin Lightning é uma solução de segunda camada que permite transações Bitcoin mais rápidas e com taxas menores."
    },
    {
      question: "Como funciona o PIX para Lightning?",
      answer: "Cole o código PIX que você recebeu e nós convertemos instantaneamente para Lightning Network, permitindo pagamentos globais."
    },
    {
      question: "É seguro usar a Crypto Use?",
      answer: "Sim, utilizamos medidas de segurança avançadas para proteger suas transações e dados pessoais."
    },
    {
      question: "Quanto tempo demora a conversão?",
      answer: "A conversão de PIX para Lightning é quase instantânea, levando apenas alguns segundos."
    }
  ]

  const articles = [
    {
      title: "Como começar a investir em Bitcoin",
      description: "Um guia completo para iniciantes no mundo das criptomoedas",
      imageUrl: "/cube.png",
      slug: "comecando-com-bitcoin"
    },
    {
      title: "O que é a rede Lightning e como funciona",
      description: "Entenda como a rede Lightning revoluciona transações Bitcoin",
      imageUrl: "/cryptologo.png",
      slug: "rede-lightning"
    },
    {
      title: "Segurança em carteiras Bitcoin",
      description: "Dicas essenciais para manter seus Bitcoins seguros",
      imageUrl: "/cube.png",
      slug: "seguranca-carteiras"
    }
  ]

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background with dot grid and gradient */}
      <div className="absolute inset-0 bg-dot-grid -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-transparent to-orange-50/30 -z-10"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-4xl mx-auto w-full">
        {/* Price display */}
       
      
        

                 {/* Logo and Buttons Section */}
         <div className="w-full max-w-2xl mb-16 text-center">
           {/* Logo HODLE */}
           <div className="mb-16">
             <Image 
               src="/hodlelogo.png" 
               alt="Hodle Logo" 
               width={400} 
               height={200} 
               className="mx-auto"
             />
           </div>

           <div className="flex flex-col gap-6">
             <Button 
               onClick={handleProcessPix}
               className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-6 font-inter text-xl font-bold rounded-3xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
             >
               Pagar qrcode com lightning
               <ScanQrCode className="w-6 h-6" />
             </Button>
             
             {/* <Button 
               className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-6 font-inter text-xl font-bold rounded-3xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
             >
               comprar BTC lightning
               <Zap className="w-6 h-6" />
             </Button> */}
           </div>
         </div>
        {/* FAQ Section */}
        <div className="w-full max-w-2xl mb-4">
          <div className="text-center mb-12">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Esclarecemos suas principais dúvidas sobre nossa plataforma
            </p>
          </div>
          
          <div className="space-y-4 mb-16">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-yellow-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left bg-yellow-50 hover:bg-yellow-100 focus:outline-none flex justify-between items-center"
                >
                  <span className="font-medium text-gray-800">{item.question}</span>
                  {openAccordion === index ? (
                    <Minus className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-yellow-500" />
                  )}
                </button>
                {openAccordion === index && (
                  <div className="px-6 py-4 bg-white border-t border-yellow-200">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Articles Section */}
        <div className="w-full max-w-4xl mb-16">
          <div className="text-center mb-12">
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Últimos
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> Artigos</span>
            </h2>
            <p className="font-inter text-lg text-gray-600">
              Mantenha-se atualizado sobre Bitcoin, Lightning Network e o futuro das finanças
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {articles.map((article, index) => (
              <Link 
                key={index} 
                href={`/articles/${article.slug}`} 
                target="_blank"
                className="block h-full"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-300 hover:ring-2 hover:ring-yellow-200 transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden relative">
                    <Image 
                      src={article.imageUrl} 
                      alt={article.title} 
                      width={400} 
                      height={200} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-yellow-600 transition-colors">{article.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{article.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

