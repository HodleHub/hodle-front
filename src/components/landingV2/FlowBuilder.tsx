'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, Pause, Play, Terminal } from 'lucide-react'
import {
  FLOW_BUILDER_URL,
  FLOW_SOURCES,
  ICONS,
  buildCurlLines,
  buildFlowSteps,
  type CodeLineTone,
  type FlowSource,
  type FlowStep,
} from './landingV2Data'
import { SectionHeader } from './SectionHeader'
import { SectionMarks } from './SectionMarks'

const mono = 'font-[family-name:var(--font-geist-mono)]'

const STEP_INTERVAL_MS = 2600
const KYC_STEP_INDEX = 1
const STATUS_STEP_INDEX = 6

const TONE_COLOR: Record<CodeLineTone, string> = {
  plain: '#FAFAFA',
  muted: '#737373',
  string: '#FCD34D',
  number: '#5EEAD4',
}

const usePrefersReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState<boolean>(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = (): void => setReduced(query.matches)

    update()
    query.addEventListener('change', update)

    return () => query.removeEventListener('change', update)
  }, [])

  return reduced
}

type SourceButtonProps = {
  source: FlowSource
  selected: boolean
  onSelect: () => void
}

const SourceButton = ({ source, selected, onSelect }: SourceButtonProps) => (
  <button
    type="button"
    role="radio"
    aria-checked={selected}
    onClick={onSelect}
    className={`lv2-node-btn flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[15px] font-medium text-left border ${selected ? 'bg-[#FEFCE8] border-[#EAB308] text-[#0A0A0A]' : 'bg-white border-[#E5E5E5] text-[#404040]'}`}
  >
    <span className="relative w-7 h-6 shrink-0">
      <Image src={source.icon} alt="" width={22} height={22} className="absolute left-0 top-0" />
      <Image src={source.networkIcon} alt="" width={13} height={13} className="absolute right-0 bottom-0 bg-white rounded p-px" />
    </span>
    {source.label}
  </button>
)

type StepNodeProps = {
  step: FlowStep
  index: number
  current: number
  playing: boolean
  onSelect: () => void
}

const dotClass = (index: number, current: number): string => {
  if (index === current) return 'bg-[#EAB308] text-[#0A0A0A]'

  if (index < current) return 'bg-[#0A0A0A] text-white'

  return 'bg-[#F5F5F5] text-[#525252]'
}

const StepNode = ({ step, index, current, playing, onSelect }: StepNodeProps) => {
  const active = index === current

  return (
    <button
      type="button"
      aria-current={active ? 'step' : undefined}
      onClick={onSelect}
      className={`lv2-node-btn relative overflow-hidden flex items-center gap-3 bg-white rounded-2xl px-3 py-2.5 text-[15px] font-medium text-left border ${active ? 'lv2-node-on border-[#EAB308] text-[#0A0A0A]' : 'border-[#E5E5E5] text-[#525252]'}`}
    >
      <span className={`${mono} w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-[13px] ${dotClass(index, current)}`}>
        {index + 1}
      </span>
      <span className="flex-1">{step.title}</span>
      <span className={`${mono} text-[11px] rounded px-1.5 py-0.5 ${active ? 'bg-[#0A0A0A] text-white' : 'bg-[#F5F5F5] text-[#525252]'}`}>
        {step.method}
      </span>
      {active && playing && <span key={`prog-${current}`} aria-hidden="true" className="lv2-prog absolute left-0 bottom-0 h-0.5 bg-[#EAB308]" />}
    </button>
  )
}

type WebhookChipProps = {
  label: string
  color: string
  lit: boolean
}

const WebhookChip = ({ label, color, lit }: WebhookChipProps) => (
  <span className={`${mono} text-xs border border-[#262626] rounded-md px-2 py-1 transition-colors`} style={{ color: lit ? color : '#737373' }}>
    {label}
  </span>
)

/**
 * Interactive Flow Builder: pick an off-ramp source and walk the seven real API calls.
 */
export const FlowBuilder = () => {
  const [sourceIndex, setSourceIndex] = useState<number>(0)
  const [stepIndex, setStepIndex] = useState<number>(0)
  const [userPaused, setUserPaused] = useState<boolean>(false)
  const reducedMotion = usePrefersReducedMotion()
  const playing = !userPaused && !reducedMotion

  const source = FLOW_SOURCES[sourceIndex]
  const steps = useMemo<FlowStep[]>(() => buildFlowSteps(source), [source])
  const step = steps[stepIndex]
  const lines = useMemo(() => buildCurlLines(step), [step])

  useEffect(() => {
    if (!playing) return

    const timer = window.setInterval(() => {
      setStepIndex((index) => (index + 1) % steps.length)
    }, STEP_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [playing, steps.length])

  const selectStep = (index: number): void => {
    setStepIndex(index)
    setUserPaused(true)
  }

  return (
    <section id="flow" aria-labelledby="lv2-flow-h" className="lv2-sec">
      <SectionMarks />
      <div className="lv2-rail">
        <SectionHeader
          id="lv2-flow-h"
          eyebrow={
            <>
              <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
              FLOW BUILDER
            </>
          }
          title="Escolha a origem e o destino. Receba as chamadas exatas."
          aside={
            <>
              <p className="text-lg leading-relaxed text-[#525252]">
                Cada passo do fluxo é uma chamada REST de verdade, na ordem certa. Clique num passo para ver o código, ou deixe o fluxo rodar sozinho.
              </p>
              <a
                href={FLOW_BUILDER_URL}
                target="_blank"
                rel="noreferrer"
                className="lv2-btn self-start border border-[#D4D4D4] bg-white font-medium text-[15px] px-4 py-3 rounded-xl"
              >
                Abrir o Flow Builder na documentação
              </a>
            </>
          }
        />

        <div className="lv2-cells grid-cols-1 lg:grid-cols-[290px_400px_1fr] lg:h-[720px]">
          <div className="p-6 flex flex-col gap-3.5">
            <div className={`${mono} text-xs tracking-[0.12em] text-gray-500`}>ORIGEM</div>
            <div role="radiogroup" aria-label="Origem" className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {FLOW_SOURCES.map((item, index) => (
                <SourceButton key={item.label} source={item} selected={index === sourceIndex} onSelect={() => setSourceIndex(index)} />
              ))}
            </div>
            <div className="flex justify-center text-gray-400">
              <ArrowDown className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className={`${mono} text-xs tracking-[0.12em] text-gray-500`}>DESTINO</div>
            <div className="flex items-center gap-2.5 bg-[#F0FDFA] border border-[#14B8A6] rounded-xl px-3 py-2.5 text-[15px] font-medium">
              <Image src={ICONS.pix} alt="" width={22} height={22} />
              BRL · PIX
            </div>
            <div className="mt-auto text-[13px] text-[#525252] leading-normal border-t border-dashed border-[#E5E5E5] pt-3.5">
              <span className={`${mono} bg-[#F5F5F5] rounded px-1.5 py-0.5 text-xs`}>OFF-RAMP</span> Stablecoin sai de uma wallet Hodle e liquida em reais via Pix.
            </div>
          </div>

          <div className="lv2-dots !bg-[#FCFCFC] p-6 flex flex-col gap-2.5">
            <div className="flex items-center justify-between mb-1">
              <div className={`${mono} text-xs tracking-[0.12em] text-gray-500 uppercase`}>{source.label} → BRL · PIX</div>
              <button
                type="button"
                onClick={() => setUserPaused(playing)}
                aria-label={playing ? 'Pausar a animação do fluxo' : 'Rodar a animação do fluxo'}
                className="flex items-center gap-1.5 bg-white border border-[#E5E5E5] rounded-lg px-2.5 py-1.5 text-[13px] font-medium"
              >
                {playing ? <Pause className="w-3 h-3" aria-hidden="true" /> : <Play className="w-3 h-3" aria-hidden="true" />}
                {playing ? 'Pausar' : 'Rodar'}
              </button>
            </div>
            <div className="relative flex flex-col gap-2.5">
              <div aria-hidden="true" className="absolute left-[25px] top-5 bottom-5 w-px bg-[#E5E5E5]">
                <span className="lv2-vdot" />
                <span className="lv2-vdot lv2-vd2" />
              </div>
              {steps.map((item, index) => (
                <StepNode key={item.title} step={item} index={index} current={stepIndex} playing={playing} onSelect={() => selectStep(index)} />
              ))}
            </div>
          </div>

          <div className="!bg-[#0A0A0A] text-[#FAFAFA] p-6 lg:p-7 flex flex-col gap-4 min-w-0" aria-live="polite">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className={`${mono} text-xs bg-[#EAB308] text-[#0A0A0A] rounded px-1.5 py-0.5`}>
                  PASSO {stepIndex + 1}/{steps.length}
                </span>
                <span className="font-medium text-[17px]">{step.title}</span>
              </div>
              <span className={`${mono} text-xs text-gray-500`}>cURL</span>
            </div>
            <p className="text-[15px] leading-relaxed text-[#D4D4D4]">{step.description}</p>
            <div key={`${sourceIndex}-${stepIndex}`} className="flex-1 border border-[#262626] rounded-2xl bg-[#111111] px-5 py-4 overflow-x-auto">
              {lines.map((line, index) => (
                <div key={index} className={`${mono} lv2-cl flex gap-4 text-[13.5px] leading-[1.75]`} style={{ animationDelay: `${index * 0.05}s` }}>
                  <span className="text-[#525252] w-4 text-right shrink-0">{index + 1}</span>
                  <span className="whitespace-pre" style={{ color: TONE_COLOR[line.tone] }}>
                    {line.text}
                  </span>
                </div>
              ))}
              <span className="lv2-caret ml-8 mt-1" />
            </div>
            <div className="flex gap-2 flex-wrap items-center">
              <span className={`${mono} text-xs text-gray-500`}>WEBHOOKS</span>
              <WebhookChip label="KYC_APPROVED" color="#EAB308" lit={stepIndex === KYC_STEP_INDEX} />
              <WebhookChip label="PAYOUT_SUCCESSFUL" color="#5EEAD4" lit={stepIndex === STATUS_STEP_INDEX} />
              <WebhookChip label="PAYOUT_FAILED" color="#FCA5A5" lit={stepIndex === STATUS_STEP_INDEX} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
