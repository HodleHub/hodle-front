import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-orange-50 to-orange-200 py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-sm text-orange-600 mb-4 font-mono">{"//use_api"}</div>
                <h2 className="text-5xl font-black mb-8 text-gray-900">Gerencia suas stablecoins com acesso global</h2>
                <p className="text-xl text-gray-700 mb-8 font-light">
                  Simplifique sua jornada cripto com uma API poderosa. Acesse facilmente todas as fontes de pagamento, otimize a execução de transações entre redes e ativos, e aproveite um conjunto de serviços de valor agregado.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">API única para todos os métodos de pagamento</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Otimização de transações cross-chain</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-orange-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Monitoramento em tempo real & analytics</span>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30">
                  Fale conosco
                </button>
              </div>
            
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-200 shadow-xl">
                <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <pre className="text-sm text-gray-800 overflow-hidden font-mono">
{`curl -X POST "https://api.hodle.com/v1/swap" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer token" \\
  -d '{
    "from": "BRL",
    "to": "USDT",
    "amount": 1000.00,
    "wallet": "0x..."
  }'`}
                  </pre>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}