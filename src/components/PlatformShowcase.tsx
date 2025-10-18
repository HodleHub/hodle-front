import { Card } from "@/components/ui/Card"
import { VolumeChart } from "@/components/VolumeChart"
import Image from "next/image"

export default function PlatformShowcase() {
  return (
    <section className="bg-gradient-to-b from-orange-50 via-purple-50/30 to-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-orange-100/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 text-gray-900">
            Plataforma completa para gestão de stablecoins
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dashboard simplificado para realização da gestão de pagamentos com segurança
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Main Dashboard Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <Image src="/h-logo.png" alt="Logo" width={48} height={48} className="h-12 w-12" />
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-white border-orange-200">
                <VolumeChart />
              </Card>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Inflow</p>
                    <p className="text-2xl font-bold text-gray-900">$1,256,832</p>
                    <p className="text-sm text-green-600">↑ 8.30%</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <p className="text-sm text-gray-500 mb-1">Outflow</p>
                    <p className="text-2xl font-bold text-gray-900">$318,467</p>
                    <p className="text-sm text-red-600">↓ 2%</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-200 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Transaction Screening</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Inbound</p>
                      <p className="text-xl font-bold text-gray-900">630,560</p>
                      <p className="text-xs text-green-600">3.2%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Outbound</p>
                      <p className="text-xl font-bold text-gray-900">18,268</p>
                      <p className="text-xs text-red-600">1.2%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -left-8 top-20 group">
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200 w-72 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-700">Payment Approved</span>
              </div>
            </div>
          </div>
          <div className="absolute -left-8 bottom-20 group">
            <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200 w-72 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Virtual Account</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Account Number</span>
                  <span className="font-mono text-gray-900">890210...139715</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Routing Number</span>
                  <span className="font-mono text-gray-900">121145307</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Wallet Address</span>
                  <span className="font-mono text-gray-900">0xF1b7...0c521B</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-8 bottom-32 group">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 w-80 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
                  <Image src="/usdt.svg" alt="USDT" width={24} height={24} />
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
                  <Image src="/pix.svg" alt="PIX" width={24} height={24} />
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-1">Recent Transaction</p>
              <p className="text-xl font-bold text-gray-900">USDT → BRL</p>
              <p className="text-sm text-green-600 mt-1">Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
