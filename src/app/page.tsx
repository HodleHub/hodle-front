"use client"

import { useState, useCallback, useEffect } from "react"
import { Plus, Minus, ScanQrCode, ArrowRight } from "lucide-react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { AnimatedCodeIcon } from "../components/ui/AnimatedCodeIcon"
import { AnimatedArrowLeftRightIcon } from "../components/ui/AnimatedArrowLeftRightIcon"
import { AnimatedServerIcon } from "../components/ui/AnimatedServerIcon"
import { AnimatedShieldIcon } from "../components/ui/AnimatedShieldIcon"
import Image from "next/image"
import Link from "next/link"
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

interface Article {
  slug: string
  title: string
  description: string
  date: string
  imageUrl: string
}

export default function BitcoinLightningPayment() {
  const [pixCopiaCola, setPixCopiaCola] = useState("")
  const [paymentAmount, setPaymentAmount] = useState("")
  const [decodedData, setDecodedData] = useState<DecodedPixQRCode | null>(null)
  const [isDecoding, setIsDecoding] = useState(false)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)
  const [articles, setArticles] = useState<Article[]>([])

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

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles')
        if (response.ok) {
          const data = await response.json()
          setArticles(data)
        }
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }
    fetchArticles()
  }, [])

  const faqItems = [
    {
      question: "O que é a Hodle?",
      answer:
        "A Hodle é uma plataforma brasileira que permite comprar Bitcoin de forma simples, rápida e com low-KYC. ou seja, sem necessidade de enviar documentos. Toda a verificação é feita automaticamente utilizando os dados do próprio PIX, garantindo segurança e privacidade.",
    },
    {
      question: "O que é DePix?",
      answer:
        "DePix é uma stablecoin lastreada 1:1 no real, emitida na Liquid Network. O token tem o objetivo de ser a porta entrada entre o mundo fiat e a blockchain, um token transiente com o objetivo de ser trocado por BTC",
    },
    {
      question: "É seguro usar a Hodle?",
      answer:
        "Sim, não guardamos quaisquer dados pessoais, todos os dados são cifrados, ou seja, nem a hodle tem acesso a quem fez as operações"
    },
    {
      question: "Quanto tempo demora para receber o Bitcoin?",
      answer:
        "Após o pagamento, é praticamente instantâneo, caso seja selecionado, DePix, LBTC ou lightning, recebimentos on-chain demora o tempo que o bloco demora para ser minerado, cerca de 10 minutos."  
    },
  ]


  return (
    <div className="min-h-screen relative flex flex-col text-gray-900" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #fff7ed 100%)' }}>
      <main className="flex-1 flex flex-col items-center px-4 max-w-7xl mx-auto">

        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-6 mb-32 px-4">

          <div className="max-w-xl flex flex-col text-left w-full pl-0">
          <Link href="/" className="flex ml-[-16] items-center mb-2 pl-0 cursor-pointer">
            <Image
              width={160}
              height={160}
              src="/h-logo.svg"
              alt="Hodle logo"
              className="h-24 md:h-28 w-auto mr-[-6px]"
            />
            <span className={`${poppins.className} text-6xl md:text-7xl font-bold tracking-tight text-gray-900 -ml-2`}>
              ODLE
            </span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-normal leading-tight text-gray-700 pl-0">
            Compre Bitcoin de forma rápida e segura
          </h1>

            <p className="mt-6 text-lg text-gray-600">
              A maneira mais fácil de comprar <span className="text-orange-600">BITCOIN</span> diretamente via Pix, em qualquer rede, ligtning, liquid ou onchain
            </p>

              {/* <div className="mt-10">
                <Link href="https://hodle.com.br" target="_blank">
                  <Button
                    className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 text-lg"
                  >
                    Comece agora
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div> */}
          </div>

          <div className="mt-16 md:mt-0 md:ml-8">
            <Image
              src="/people-buy_without_bg.png" 
              alt="Lightning"
              width={520}
              height={520}
              className="drop-shadow-xl"
            />
          </div>
        </div>
        <section className="w-full max-w-6xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="flex flex-col items-center text-center">
              <AnimatedShieldIcon className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Seguro</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-bold">
                Compre direto para a sua carteira, não guardamos informações sensíveis. Sem bloqueios imprevisíveis
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <AnimatedServerIcon className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Infraestrutura</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-bold">
                Liquidez lightning para você utilizar nas suas próprias carteiras
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <AnimatedCodeIcon className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">API</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-bold">
                Utilize nossas apis para fazer swaps ou compras de forma recorrente
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <AnimatedArrowLeftRightIcon className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SWAPS</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-bold">
                Transite entre onchain, lightning e liquid de forma extremamente simples
              </p>
            </div>
          </div>
        </section>
        <section className="w-full max-w-2xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600">
              Esclarecemos suas principais dúvidas sobre nossa plataforma
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  {openAccordion === index ? (
                    <Minus className="h-5 w-5 text-orange-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-orange-500" />
                  )}
                </button>

                {openAccordion === index && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =============================
            ARTIGOS
        ============================== */}
        <section className="w-full max-w-5xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Últimos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                Artigos
              </span>
            </h2>
            <p className="text-gray-600">
              Fique por dentro do universo Bitcoin e todas as novidades da Hodle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link key={index} href={`/articles/${article.slug}`}>
                <Card className="h-full overflow-hidden border bg-white hover:shadow-xl transition-all duration-300 rounded-2xl">
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
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
