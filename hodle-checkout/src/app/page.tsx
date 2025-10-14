"use client"

import { useState, useCallback } from "react"
import { Plus, Minus, ScanQrCode } from "lucide-react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "../components/ui/Footer"
import Header from "../components/Header"
import { toast } from "sonner"
import { baseUrl } from "../utils/baseUrl"

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
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ qrCode: qrCodeValue }),
      })

      const data: DecodeResult = await response.json()

      if (response.ok && data?.success && data?.decodedPixQRCode) {
        setDecodedData(data.decodedPixQRCode)
        if (data.decodedPixQRCode.value && data.decodedPixQRCode.value > 0) {
          const formattedValue = data.decodedPixQRCode.value
            .toFixed(2)
            .replace(".", ",")
          setPaymentAmount(`R$ ${formattedValue}`)
        }
      } else {
        setDecodedData(null)
        if (!qrCodeValue.trim()) setPaymentAmount("")
        toast.error("Erro ao decodificar QR Code PIX")
      }
    } catch (error) {
      console.error("Erro ao decodificar QR Code:", error)
      setDecodedData(null)
      toast.error("Erro ao processar QR Code PIX")
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
    toast.info("Funcionalidade de scanner em desenvolvimento")
  }

  const faqItems = [
    {
      question: "O que é Bitcoin Lightning?",
      answer:
        "Bitcoin Lightning é uma solução de segunda camada que permite transações Bitcoin mais rápidas e com taxas menores.",
    },
    {
      question: "Como funciona o PIX para Lightning?",
      answer:
        "Cole o código PIX que você recebeu e nós convertemos instantaneamente para Lightning Network, permitindo pagamentos globais.",
    },
    {
      question: "É seguro usar a Hodle?",
      answer:
        "Sim, utilizamos medidas de segurança avançadas para proteger suas transações e dados pessoais.",
    },
    {
      question: "Quanto tempo demora a conversão?",
      answer:
        "A conversão de PIX para Lightning é quase instantânea, levando apenas alguns segundos.",
    },
  ]

  const articles = [
    {
      title: "Como começar a investir em Bitcoin",
      description: "Um guia completo para iniciantes no mundo das criptomoedas",
      imageUrl: "/cube.png",
      slug: "comecando-com-bitcoin",
    },
    {
      title: "O que é a rede Lightning e como funciona",
      description:
        "Entenda como a rede Lightning revoluciona transações Bitcoin",
      imageUrl: "/hodlelogo.png",
      slug: "rede-lightning",
    },
    {
      title: "Segurança em carteiras Bitcoin",
      description: "Dicas essenciais para manter seus Bitcoins seguros",
      imageUrl: "/cube.png",
      slug: "seguranca-carteiras",
    },
  ]

  return (
    <div className="min-h-screen relative flex flex-col text-gray-900">
      {/* Fundo com gradiente vibrante */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-800 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] -z-10" />

      {/* Efeitos de brilho */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-6 max-w-5xl mx-auto w-full">
        {/* HERO */}
        <div className="text-center mb-20 mt-10">
          <Image
            src="/hodlelogo.png"
            alt="Hodle Logo"
            width={400}
            height={200}
            className="mx-auto mb-10 drop-shadow-xl"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Conecte o futuro com{" "}
            <span className="bg-gradient-to-r from-orange-100 via-yellow-50 to-white bg-clip-text text-transparent">
              inovação financeira
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-orange-100/90 max-w-2xl mx-auto">
            Uma forma rápida, segura e moderna de pagar com Bitcoin Lightning e
            PIX, com tecnologia brasileira de ponta.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              onClick={handleScanQRCode}
              className="bg-white text-orange-600 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Fale conosco
              <ScanQrCode className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Seção de botão principal */}
        <div className="w-full max-w-2xl mb-24 text-center">
          <Button
            onClick={handleProcessPix}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-6 font-inter text-xl font-bold rounded-3xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            Pagar QR Code com Lightning
            <ScanQrCode className="w-6 h-6" />
          </Button>
        </div>

        {/* FAQ */}
        <section className="w-full max-w-2xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-orange-100/80">
              Esclarecemos suas principais dúvidas sobre nossa plataforma
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-orange-300/30 rounded-xl overflow-hidden backdrop-blur-md bg-white/10"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium text-white">
                    {item.question}
                  </span>
                  {openAccordion === index ? (
                    <Minus className="h-5 w-5 text-orange-200" />
                  ) : (
                    <Plus className="h-5 w-5 text-orange-200" />
                  )}
                </button>
                {openAccordion === index && (
                  <div className="px-6 py-4 border-t border-orange-300/20 bg-white/10">
                    <p className="text-orange-50">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Artigos */}
        <section className="w-full max-w-4xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Últimos{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Artigos
              </span>
            </h2>
            <p className="text-orange-100/80">
              Fique por dentro do universo Bitcoin e Lightning Network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link key={index} href={`/articles/${article.slug}`}>
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl">
                  <div className="h-48 overflow-hidden relative">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {article.title}
                    </h3>
                    <p className="text-orange-100/80 line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
