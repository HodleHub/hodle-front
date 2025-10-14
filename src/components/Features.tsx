import React from "react";

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
      description: "Converta instantaneamente o saldo em fiat para pagar em stablecoins em todo o mundo"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Liquidez profunda",
      description: "Não se preocupe com transações grandes causando flutuações de preço significativas"
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
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              Orchestration
            </div>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Transfira dinheiro entre fronteiras na velocidade da internet
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-sm font-semibold text-gray-700">Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Sent</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <div className="text-4xl font-bold text-gray-900 mb-8">USDC 145,56</div>

              <div className="relative mb-8">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>
                <div className="relative flex justify-between items-center">
                  <div className="bg-white p-4 rounded-xl border-2 border-blue-500 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        USDC
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">John Wallet</div>
                        <div className="text-xs text-gray-500 font-mono">0xF1b7...0c521B</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  <div className="bg-white p-4 rounded-xl border-2 border-green-500 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        BRL
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Evelyn</div>
                        <div className="text-xs text-gray-500">Pix • 496.234.201-02</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500 italic">
                  "Hodle revolutionized our cross-border payments. Transparent and reliable!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}