import Image from 'next/image'
import type { ReactNode } from 'react'
import { Code2, Landmark } from 'lucide-react'
import { ICONS } from './landingV2Data'
import { SectionHeader } from './SectionHeader'
import { SectionMarks } from './SectionMarks'

const IN_PATHS: string[] = [
  'M220 90 C 360 90, 360 230, 456 230',
  'M220 230 L 456 230',
  'M220 370 C 360 370, 360 230, 456 230',
]

const OUT_PATHS: string[] = [
  'M616 230 C 720 230, 720 55, 852 55',
  'M616 230 C 720 230, 720 172, 852 172',
  'M616 230 C 720 230, 720 288, 852 288',
  'M616 230 C 720 230, 720 405, 852 405',
]

const PULSE_DELAYS: string[] = ['0s', '-0.9s', '-1.8s', '-0.9s']

type Node = {
  key: string
  label: string
  visual: ReactNode
  top: number
  tag?: string
}

const IN_NODES: Node[] = [
  { key: 'pix', label: 'Pix', top: 60, visual: <Image src={ICONS.pix} alt="" width={26} height={26} /> },
  { key: 'pj', label: 'Conta PJ', top: 200, visual: <Landmark className="w-6 h-6" aria-hidden="true" /> },
  { key: 'api', label: 'API', top: 340, visual: <Code2 className="w-6 h-6" aria-hidden="true" /> },
]

const OUT_NODES: Node[] = [
  { key: 'usdt', label: 'USDT', tag: '6 redes', top: 28, visual: <Image src={ICONS.usdt} alt="" width={24} height={24} /> },
  { key: 'usdc', label: 'USDC', tag: '5 redes', top: 145, visual: <Image src={ICONS.usdc} alt="" width={24} height={24} /> },
  { key: 'btc', label: 'Bitcoin', tag: 'Lightning', top: 261, visual: <Image src={ICONS.btc} alt="" width={24} height={24} /> },
  { key: 'brl', label: 'Pix', tag: 'BRL', top: 378, visual: <Image src={ICONS.pix} alt="" width={24} height={24} /> },
]

const FLOATS: string[] = ['', 'lv2-f2', 'lv2-f3', 'lv2-f2']

const NodeCard = ({ node, index, left, height }: { node: Node; index: number; left: number; height: number }) => (
  <div
    className={`lv2-float ${FLOATS[index]} absolute w-[220px] bg-white border border-[#E5E5E5] rounded-xl flex items-center gap-3 px-4 font-medium`}
    style={{ left, top: node.top, height }}
  >
    {node.visual}
    {node.label}
    {node.tag && <span className="ml-auto font-[family-name:var(--font-geist-mono)] text-[11px] text-gray-500">{node.tag}</span>}
  </div>
)

const Core = () => (
  <div className="lv2-core w-40 h-40 rounded-[36px] bg-white border border-[#E5E5E5] flex items-center justify-center px-5">
    <Image src={ICONS.hodleWordmark} alt="Hodle" width={226} height={88} className="w-full h-auto" />
  </div>
)

const Diagram = () => (
  <div className="relative w-[1072px] h-[460px] mx-auto">
    <svg width="1072" height="460" viewBox="0 0 1072 460" aria-hidden="true" className="absolute inset-0">
      {[...IN_PATHS, ...OUT_PATHS].map((path) => (
        <path key={`base-${path}`} d={path} fill="none" stroke="#E5E5E5" strokeWidth="2" />
      ))}
      {IN_PATHS.map((path) => (
        <path key={`in-${path}`} className="lv2-flow" d={path} fill="none" stroke="#EAB308" strokeWidth="2" />
      ))}
      {OUT_PATHS.map((path) => (
        <path key={`out-${path}`} className="lv2-flow" d={path} fill="none" stroke="#14B8A6" strokeWidth="2" />
      ))}
    </svg>
    {IN_PATHS.map((path, index) => (
      <span key={`p-in-${path}`} aria-hidden="true" className="lv2-pulse bg-[#EAB308]" style={{ offsetPath: `path('${path}')`, animationDelay: PULSE_DELAYS[index] }} />
    ))}
    {OUT_PATHS.map((path, index) => (
      <span key={`p-out-${path}`} aria-hidden="true" className="lv2-pulse bg-[#14B8A6]" style={{ offsetPath: `path('${path}')`, animationDelay: PULSE_DELAYS[index] }} />
    ))}
    {IN_NODES.map((node, index) => (
      <NodeCard key={node.key} node={node} index={index} left={0} height={60} />
    ))}
    <div className="absolute left-[456px] top-[150px]">
      <Core />
    </div>
    {OUT_NODES.map((node, index) => (
      <NodeCard key={node.key} node={node} index={index} left={852} height={54} />
    ))}
  </div>
)

const MobileDiagram = () => (
  <div className="flex flex-col items-center gap-4 px-6">
    <div className="flex flex-wrap justify-center gap-2">
      {IN_NODES.map((node) => (
        <span key={node.key} className="flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-xl px-3 py-2 font-medium text-sm">
          {node.visual}
          {node.label}
        </span>
      ))}
    </div>
    <svg width="2" height="40" aria-hidden="true">
      <path className="lv2-flow" d="M1 0 L1 40" stroke="#EAB308" strokeWidth="2" />
    </svg>
    <Core />
    <svg width="2" height="40" aria-hidden="true">
      <path className="lv2-flow" d="M1 0 L1 40" stroke="#14B8A6" strokeWidth="2" />
    </svg>
    <div className="flex flex-wrap justify-center gap-2">
      {OUT_NODES.map((node) => (
        <span key={node.key} className="flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-xl px-3 py-2 font-medium text-sm">
          {node.visual}
          {node.label}
        </span>
      ))}
    </div>
  </div>
)

/**
 * "A camada do meio": animated diagram of money entering and leaving through Hodle.
 */
export const MiddleLayer = () => (
  <section aria-labelledby="lv2-camada-h" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail">
      <SectionHeader
        id="lv2-camada-h"
        eyebrow="A CAMADA DO MEIO"
        title="Entre o Pix e as redes, a Hodle."
        aside={
          <p className="text-lg leading-relaxed text-[#525252]">
            Dinheiro entra por Pix, conta PJ ou API. Sai em qualquer rede, com um saldo só e a mesma conciliação.
          </p>
        }
      />
      <div className="lv2-dots py-12 lg:py-16 overflow-hidden">
        <div className="hidden lg:block">
          <Diagram />
        </div>
        <div className="lg:hidden">
          <MobileDiagram />
        </div>
      </div>
    </div>
  </section>
)
