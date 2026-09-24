'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowDown, Pause, Play, Terminal } from 'lucide-react'
import { ICONS, WHATSAPP_URL } from '../landingV2/landingV2Data'
import { SectionHeader } from '../landingV2/SectionHeader'
import { SectionMarks } from '../landingV2/SectionMarks'
import { USD_FLOW_STEPS, USD_WEBHOOKS, type UsdCodeTone, type UsdFlowStep } from './usdData'

const mono = 'font-[family-name:var(--font-geist-mono)]'

const STEP_INTERVAL_MS = 2600

const TONE_COLOR: Record<UsdCodeTone, string> = {
  plain: '#FAFAFA',
  muted: '#737373',
  string: '#FCD34D',
}

type Destination = {
  label: string
  rail: string
}

const DESTINATIONS: Destination[] = [
  { label: 'USD · ACH', rail: 'ACH' },
  { label: 'USD · WIRE', rail: 'WIRE' },
]

const DEFAULT_RAIL_TOKEN = '"ACH"'

const withRail = (text: string, rail: string): string => text.replace(DEFAULT_RAIL_TOKEN, `"${rail}"`)

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

const dotClass = (index: number, current: number): string => {
  if (index === current) return 'bg-[#EAB308] text-[#0A0A0A]'

  if (index < current) return 'bg-[#0A0A0A] text-white'

  return 'bg-[#F5F5F5] text-[#525252]'
}

type StepNodeProps = {
  step: UsdFlowStep
  index: number
  current: number
  playing: boolean
  onSelect: () => void
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

type DestinationButtonProps = {
  destination: Destination
  selected: boolean
  onSelect: () => void
}

const DestinationButton = ({ destination, selected, onSelect }: DestinationButtonProps) => (
  <button
    type="button"
    role="radio"
    aria-checked={selected}
    onClick={onSelect}
    className={`lv2-node-btn rounded-xl px-3 py-2.5 text-[15px] font-medium text-left border ${selected ? 'bg-[#F0FDFA] border-[#14B8A6] text-[#0A0A0A]' : 'bg-white border-[#E5E5E5] text-[#404040]'}`}
  >
    {destination.label}
  </button>
)

type CodePanelProps = {
  step: UsdFlowStep
  stepIndex: number
  rail: string
}

const CodePanel = ({ step, stepIndex, rail }: CodePanelProps) => (
  <div className="!bg-[#0A0A0A] text-[#FAFAFA] p-6 lg:p-7 flex flex-col gap-4 min-w-0" aria-live="polite">
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className={`${mono} text-xs bg-[#EAB308] text-[#0A0A0A] rounded px-1.5 py-0.5`}>
          PASSO {stepIndex + 1}/{USD_FLOW_STEPS.length}
        </span>
        <span className="font-medium text-[17px]">{step.title}</span>
      </div>
      <span className={`${mono} text-xs text-gray-500`}>cURL</span>
    </div>
    <p className="text-[15px] leading-relaxed text-[#D4D4D4]">{step.description}</p>
    <div key={`${rail}-${stepIndex}`} className="flex-1 border border-[#262626] rounded-2xl bg-[#111111] px-5 py-4 overflow-x-auto">
      {step.lines.map((line, index) => (
        <div key={index} className={`${mono} lv2-cl flex gap-4 text-[13.5px] leading-[1.75]`} style={{ animationDelay: `${index * 0.05}s` }}>
          <span className="text-[#525252] w-4 text-right shrink-0">{index + 1}</span>
          <span className="whitespace-pre" style={{ color: TONE_COLOR[line.tone] }}>
            {withRail(line.text, rail)}
          </span>
        </div>
      ))}
      <span className="lv2-caret ml-8 mt-1" />
    </div>
    <div className="flex gap-2 flex-wrap items-center">
      <span className={`${mono} text-xs text-gray-500`}>WEBHOOKS</span>
      {USD_WEBHOOKS.map((webhook) => (
        <span
          key={webhook.label}
          className={`${mono} text-xs border border-[#262626] rounded-md px-2 py-1 transition-colors`}
          style={{ color: webhook.stepIndex === stepIndex ? webhook.color : '#737373' }}
        >
          {webhook.label}
        </span>
      ))}
    </div>
  </div>
)

/**
 * Flow Builder preview for the upcoming USD endpoints: four calls from BRL to a US bank account.
 */
export const UsdFlowBuilder = () => {
  const [destinationIndex, setDestinationIndex] = useState<number>(0)
  const [stepIndex, setStepIndex] = useState<number>(0)
  const [userPaused, setUserPaused] = useState<boolean>(false)
  const reducedMotion = usePrefersReducedMotion()
  const playing = !userPaused && !reducedMotion
  const step = USD_FLOW_STEPS[stepIndex]

  useEffect(() => {
    if (!playing) return

    const timer = window.setInterval(() => {
      setStepIndex((index) => (index + 1) % USD_FLOW_STEPS.length)
    }, STEP_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [playing])

  const selectStep = (index: number): void => {
    setStepIndex(index)
    setUserPaused(true)
  }

  return (
    <section id="flow" aria-labelledby="usd-flow-h" className="lv2-sec">
      <SectionMarks />
      <div className="lv2-rail">
        <SectionHeader
          id="usd-flow-h"
          eyebrow={
            <>
              <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
              FLOW BUILDER
              <span className="ml-1 bg-[#FEF9C3] text-[#854D0E] rounded px-1.5 py-0.5 text-[11px] tracking-[0.08em]">EM BREVE</span>
            </>
          }
          title="Do BRL ao USD em quatro chamadas."
          aside={
            <>
              <p className="text-lg leading-relaxed text-[#525252]">
                Cadastre o destinatário, cote, crie a transferência e receba o Pix para o seu cliente pagar. Cada etapa volta por webhook. Os endpoints de USD estão chegando à API.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="lv2-btn self-start border border-[#D4D4D4] bg-white font-medium text-[15px] px-4 py-3 rounded-xl"
              >
                Pedir acesso antecipado
              </a>
            </>
          }
        />

        <div className="lv2-cells grid-cols-1 lg:grid-cols-[290px_400px_1fr] lg:h-[620px]">
          <div className="p-6 flex flex-col gap-3.5">
            <div className={`${mono} text-xs tracking-[0.12em] text-gray-500`}>ORIGEM</div>
            <div className="flex items-center gap-2.5 bg-[#FEFCE8] border border-[#EAB308] rounded-xl px-3 py-2.5 text-[15px] font-medium">
              <Image src={ICONS.pix} alt="" width={22} height={22} />
              BRL · PIX
            </div>
            <div className="flex justify-center text-gray-400">
              <ArrowDown className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className={`${mono} text-xs tracking-[0.12em] text-gray-500`}>DESTINO</div>
            <div role="radiogroup" aria-label="Destino" className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {DESTINATIONS.map((destination, index) => (
                <DestinationButton
                  key={destination.label}
                  destination={destination}
                  selected={index === destinationIndex}
                  onSelect={() => setDestinationIndex(index)}
                />
              ))}
            </div>
            <div className="mt-auto text-[13px] text-[#525252] leading-normal border-t border-dashed border-[#E5E5E5] pt-3.5">
              <span className={`${mono} bg-[#F5F5F5] rounded px-1.5 py-0.5 text-xs`}>OFF-RAMP USD</span> O real entra por Pix e sai em dólar numa conta bancária nos EUA.
            </div>
          </div>

          <div className="lv2-dots !bg-[#FCFCFC] p-6 flex flex-col gap-2.5">
            <div className="flex items-center justify-between mb-1">
              <div className={`${mono} text-xs tracking-[0.12em] text-gray-500 uppercase`}>BRL · PIX → {DESTINATIONS[destinationIndex].label}</div>
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
              {USD_FLOW_STEPS.map((item, index) => (
                <StepNode key={item.title} step={item} index={index} current={stepIndex} playing={playing} onSelect={() => selectStep(index)} />
              ))}
            </div>
          </div>

          <CodePanel step={step} stepIndex={stepIndex} rail={DESTINATIONS[destinationIndex].rail} />
        </div>
      </div>
    </section>
  )
}
