'use client'

import { useState } from 'react'

const tabs = ['TypeScript', 'cURL'] as const
type Tab = (typeof tabs)[number]

function TypeScriptCode() {
  return (
    <>
      <div>
        <span className="text-purple-400">import</span>
        <span className="text-gray-300">{' { '}</span>
        <span className="text-emerald-400">Hodle</span>
        <span className="text-gray-300">{' } '}</span>
        <span className="text-purple-400">from</span>
        <span className="text-amber-300">{" '@hodle/sdk'"}</span>
      </div>
      <div className="mt-3">
        <span className="text-purple-400">const</span>
        <span className="text-blue-300"> client</span>
        <span className="text-gray-500"> = </span>
        <span className="text-purple-400">new</span>
        <span className="text-emerald-400"> Hodle</span>
        <span className="text-gray-400">{'({'}</span>
      </div>
      <div className="pl-6">
        <span className="text-gray-300">{'apiKey'}</span>
        <span className="text-gray-500">{': '}</span>
        <span className="text-amber-300">{"'hk_live_...'"}</span>
      </div>
      <div>
        <span className="text-gray-400">{'});'}</span>
      </div>
      <div className="mt-3">
        <span className="text-gray-600">{'// Pagamento crossborder'}</span>
      </div>
      <div>
        <span className="text-purple-400">const</span>
        <span className="text-blue-300"> payment</span>
        <span className="text-gray-500"> = </span>
        <span className="text-purple-400">await</span>
        <span className="text-blue-300"> client</span>
        <span className="text-gray-400">.payments.</span>
        <span className="text-yellow-300">create</span>
        <span className="text-gray-400">{'({'}</span>
      </div>
      <div className="pl-6">
        <span className="text-gray-300">{'amount'}</span>
        <span className="text-gray-500">{': '}</span>
        <span className="text-amber-300">1000.00</span>
        <span className="text-gray-600">,</span>
      </div>
      <div className="pl-6">
        <span className="text-gray-300">{'currency'}</span>
        <span className="text-gray-500">{': '}</span>
        <span className="text-amber-300">{"'BRL'"}</span>
        <span className="text-gray-600">,</span>
      </div>
      <div className="pl-6">
        <span className="text-gray-300">{'destination'}</span>
        <span className="text-gray-500">{': '}</span>
        <span className="text-amber-300">{"'USDT'"}</span>
        <span className="text-gray-600">,</span>
      </div>
      <div className="pl-6">
        <span className="text-gray-300">{'method'}</span>
        <span className="text-gray-500">{': '}</span>
        <span className="text-amber-300">{"'pix'"}</span>
      </div>
      <div>
        <span className="text-gray-400">{'});'}</span>
      </div>
    </>
  )
}

function CurlCode() {
  return (
    <>
      <div>
        <span className="text-emerald-400">curl</span>
        <span className="text-gray-300"> -X POST \</span>
      </div>
      <div className="pl-6">
        <span className="text-amber-300">
          {'https://api.hodle.com.br/v1/payments'}
        </span>
        <span className="text-gray-300"> \</span>
      </div>
      <div className="pl-6">
        <span className="text-blue-300">-H</span>
        <span className="text-amber-300">
          {' "Authorization: Bearer hk_live_..."'}
        </span>
        <span className="text-gray-300"> \</span>
      </div>
      <div className="pl-6">
        <span className="text-blue-300">-H</span>
        <span className="text-amber-300">
          {' "Content-Type: application/json"'}
        </span>
        <span className="text-gray-300"> \</span>
      </div>
      <div className="pl-6">
        <span className="text-blue-300">-d</span>
        <span className="text-amber-300">{" '"}</span>
        <span className="text-gray-400">{'{'}</span>
      </div>
      <div className="pl-12">
        <span className="text-blue-300">{'"amount"'}</span>
        <span className="text-gray-500">{': '}</span>
        <span className="text-amber-300">1000.00</span>
        <span className="text-gray-600">,</span>
      </div>
      <div className="pl-12">
        <span className="text-blue-300">{'"currency"'}</span>
        <span className="text-gray-500">{': '}</span>
        <span className="text-amber-300">{'"BRL"'}</span>
        <span className="text-gray-600">,</span>
      </div>
      <div className="pl-12">
        <span className="text-blue-300">{'"destination"'}</span>
        <span className="text-gray-500">{': '}</span>
        <span className="text-amber-300">{'"USDT"'}</span>
        <span className="text-gray-600">,</span>
      </div>
      <div className="pl-12">
        <span className="text-blue-300">{'"method"'}</span>
        <span className="text-gray-500">{': '}</span>
        <span className="text-amber-300">{'"pix"'}</span>
      </div>
      <div className="pl-6">
        <span className="text-gray-400">{"}"}</span>
        <span className="text-amber-300">{"'"}</span>
      </div>
    </>
  )
}

export default function CodeBlock() {
  const [active, setActive] = useState<Tab>('TypeScript')

  return (
    <div className="bg-[#111] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-800/40">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="flex gap-4 ml-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`text-[10px] pb-1 font-medium transition-colors ${
                active === tab
                  ? 'text-white/70 border-b border-base'
                  : 'text-white/25 hover:text-white/40'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="p-5 font-mono text-[12px] leading-6 overflow-x-auto min-h-[280px]">
        <div
          key={active}
          className="animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          {active === 'TypeScript' ? <TypeScriptCode /> : <CurlCode />}
        </div>
      </div>
    </div>
  )
}
