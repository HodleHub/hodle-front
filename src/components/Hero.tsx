import Image from "next/image";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-orange-50 to-orange-200 py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm text-orange-600 mb-4 font-mono">{"//hodle_api"}</div>
              <h2 className="text-5xl font-black mb-8 text-gray-900">Faça pagamentos locais utilizando stablecoins</h2>
              <p className="text-xl text-gray-700 mb-8 font-light">
                Simplifique usa experiência com pagamentos com a nossa api. Payouts para pix utilizando USDT ou a lightning network
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">API simplificada</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pagamentos via chave ou qrcode pix</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-orange-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Confirmação Instantânea</span>
                </div>
              </div>
              <HeroActions />
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-200 shadow-xl">
              <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <pre className="text-sm text-gray-800 overflow-hidden font-mono">
{`curl -X POST "https://api.hodle.com.br/api/v1/withdraw" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer token" \\
  -d '{
    "pixKey": "4e1f6919-e583-4783-9484-0990b045d8b3"
    "amount": 1000.00,
    "network": "lightning"
  }'`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}