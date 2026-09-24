import Image from 'next/image'
import type { ReactNode } from 'react'
import { Code2, Landmark, Zap } from 'lucide-react'
import { ICONS } from '../landingV2/landingV2Data'
import { SectionHeader } from '../landingV2/SectionHeader'
import { SectionMarks } from '../landingV2/SectionMarks'

const IN_PATHS: string[] = [
  'M220 90 C 360 90, 360 230, 456 230',
  'M220 230 L 456 230',
  'M220 370 C 360 370, 360 230, 456 230',
]

const OUT_PATHS: string[] = [
  'M616 230 C 720 230, 720 90, 852 90',
  'M616 230 L 852 230',
  'M616 230 C 720 230, 720 370, 852 370',
]

const PULSE_DELAYS: string[] = ['0s', '-0.9s', '-1.8s']

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
  { key: 'ach', label: 'USD · ACH', tag: '1-3 dias', top: 63, visual: <Landmark className="w-5 h-5" aria-hidden="true" /> },
  { key: 'wire', label: 'USD · Wire', tag: '1-2 dias', top: 203, visual: <Zap className="w-5 h-5" aria-hidden="true" /> },
  { key: 'usdt', label: 'USDT', tag: 'no saldo', top: 343, visual: <Image src={ICONS.usdt} alt="" width={24} height={24} /> },
]

const FLOATS: string[] = ['', 'lv2-f2', 'lv2-f3']

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

const NodePills = ({ nodes }: { nodes: Node[] }) => (
  <div className="flex flex-wrap justify-center gap-2">
    {nodes.map((node) => (
      <span key={node.key} className="flex items-center gap-2 bg-white border border-[#E5E5E5] rounded-xl px-3 py-2 font-medium text-sm">
        {node.visual}
        {node.label}
      </span>
    ))}
  </div>
)

const MobileDiagram = () => (
  <div className="flex flex-col items-center gap-4 px-6">
    <NodePills nodes={IN_NODES} />
    <svg width="2" height="40" aria-hidden="true">
      <path className="lv2-flow" d="M1 0 L1 40" stroke="#EAB308" strokeWidth="2" />
    </svg>
    <Core />
    <svg width="2" height="40" aria-hidden="true">
      <path className="lv2-flow" d="M1 0 L1 40" stroke="#14B8A6" strokeWidth="2" />
    </svg>
    <NodePills nodes={OUT_NODES} />
  </div>
)

/**
 * "A camada do meio" for USD: real in through Pix, dollars out through ACH or wire.
 */
export const UsdMiddleLayer = () => (
  <section aria-labelledby="usd-camada-h" className="lv2-sec">
    <SectionMarks />
    <div className="lv2-rail">
      <SectionHeader
        id="usd-camada-h"
        eyebrow="A CAMADA DO MEIO"
        title="Entre o seu Pix e o banco americano, a Hodle."
        aside={
          <p className="text-lg leading-relaxed text-[#525252]">
            O real entra por Pix, conta PJ ou API. A Hodle faz o câmbio e entrega em dólar por ACH ou wire, ou guarda em USDT no seu saldo.
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
