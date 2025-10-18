import React from "react";
import Image from "next/image"

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "On-ramp, off-ramp e swap",
      description: "Converta Fiat para Stablecoin, Stablecoin para Fiat e Stablecoin para Stablecoin"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Payouts com stablecoin",
      description: "Utilize seu saldo em USDT para fazer pagamentos PIX"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fluxos de pagamento simplificados",
      description: "Integre stablecoins em um fluxo de fundos existente para acelerar os pagamentos em moeda fiduciária"
    }
  ];

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white to-orange-50" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
           <div className="text-sm text-orange-600 mb-4 font-mono">{"//payouts"}</div>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Uma nova forma de usar o seu dinheiro
            </h2>
            
            <p className="text-xl text-gray-600 mb-12">
              Integre stablecoins nos fluxos de pagamento, permitindo liquidações instantâneas, baixos custos e acesso em tempo real à liquidez global.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-orange-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-purple-300/20 to-orange-600 rounded-3xl blur-3xl opacity-25"></div>

      {/* Main Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-sm font-semibold text-gray-700">Payment</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
            <span>Sent</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Amount */}
        <div className="text-5xl font-black text-gray-900 mb-10 tracking-tight">
          USDC 145,56
        </div>

        {/* Transaction Path */}
        <div className="relative mb-10">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>
          <div className="relative flex justify-between items-center">
            {/* Sender */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-200 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <Image src="/usdt.svg" alt="USDT" width={22} height={22} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    John Wallet
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    0xF1b7...0c521B
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="bg-gray-50 p-3 rounded-full border border-gray-200 shadow-sm">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>

            {/* Receiver */}
            <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-2xl border border-green-200 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <Image src="/pix.svg" alt="PIX" width={22} height={22} />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Evelyn</div>
                  <div className="text-xs text-gray-500">
                    Pix • 000.001.002-03
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="pt-6 border-t border-gray-100">
          <div className="text-sm text-gray-400 text-center">
            Transação concluída com sucesso
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
}