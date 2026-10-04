'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowRightLeft, Pause, Play } from 'lucide-react'
import {
  FLOW_BUILDER_URL,
  FLOW_SOURCES,
  ICONS,
  buildFlowRecipe,
  type FlowSource,
  type FlowStep,
} from './landingV2Data'
import { SectionHeader } from './SectionHeader'
import { SectionMarks } from './SectionMarks'

const mono = 'font-[family-name:var(--font-geist-mono)]'

const STEP_INTERVAL_MS = 2600

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
      {active && playing && <span key={`prog-${current}`} aria-hidden="true" className="lv2-prog absolute left-0 bottom-0 h-0.5 bg-[#EAB308]" />}
    </button>
  )
}

export const FlowBuilder = () => {
  const [sourceIndex, setSourceIndex] = useState<number>(0)
  const [stepIndex, setStepIndex] = useState<number>(0)
  const [userPaused, setUserPaused] = useState<boolean>(false)
  const reducedMotion = usePrefersReducedMotion()
  const source = FLOW_SOURCES[sourceIndex]
  const recipe = useMemo(() => buildFlowRecipe(source), [source])
  const steps = recipe.steps
  const step = steps[stepIndex] ?? steps[0]
  const playing = !userPaused && !reducedMotion && steps.length > 0

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

  const selectSource = (index: number): void => {
    setSourceIndex(index)
    setStepIndex(0)
  }

  return (
    <section id="flow" aria-labelledby="lv2-flow-h" className="lv2-sec">
      <SectionMarks />
      <div className="lv2-rail">
        <SectionHeader
          id="lv2-flow-h"
          eyebrow={
            <>
              <ArrowRightLeft className="w-3.5 h-3.5" aria-hidden="true" />
              PAGAMENTOS
            </>
          }
          title="Escolha a origem. Veja o caminho até o Pix."
          aside={
            <>
              <p className="text-lg leading-relaxed text-[#525252]">
                Use stablecoins ou Bitcoin via Lightning para pagar em reais. Você escolhe a origem; quem recebe usa o Pix de sempre.
              </p>
              <a
                href={FLOW_BUILDER_URL}
                target="_blank"
                rel="noreferrer"
                className="lv2-btn self-start border border-[#D4D4D4] bg-white font-medium text-[15px] px-4 py-3 rounded-xl"
              >
                Ver documentação da integração
              </a>
            </>
          }
        />

        <div className="lv2-cells grid-cols-1 lg:grid-cols-[290px_400px_1fr] lg:min-h-[480px]">
          <div className="p-6 flex flex-col gap-3.5">
            <div className={`${mono} text-xs tracking-[0.12em] text-gray-500`}>ORIGEM</div>
            <div role="radiogroup" aria-label="Origem" className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {FLOW_SOURCES.map((item, index) => (
                <SourceButton key={item.label} source={item} selected={index === sourceIndex} onSelect={() => selectSource(index)} />
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
              {recipe.description}
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
              {steps.length > 0 && <div aria-hidden="true" className="absolute left-[25px] top-5 bottom-5 w-px bg-[#E5E5E5]">
                <span className="lv2-vdot" />
                <span className="lv2-vdot lv2-vd2" />
              </div>}
              {steps.map((item, index) => (
                <StepNode key={item.title} step={item} index={index} current={stepIndex} playing={playing} onSelect={() => selectStep(index)} />
              ))}
            </div>
          </div>

          <div className="!bg-[#0A0A0A] text-[#FAFAFA] p-6 lg:p-7 flex flex-col gap-6 min-w-0" aria-live="polite">
            <div className="flex items-center gap-4" aria-hidden="true">
              <Image src={source.icon} alt="" width={36} height={36} />
              <ArrowRight className="w-5 h-5 text-[#737373]" />
              <Image src={ICONS.pix} alt="" width={36} height={36} />
            </div>
            <div className="flex flex-col gap-4">
              <span className={`${mono} self-start text-xs bg-[#EAB308] text-[#0A0A0A] rounded px-2 py-1`}>
                PASSO {stepIndex + 1}/{steps.length}
              </span>
              <h3 className="text-2xl font-medium tracking-tight">{step.title}</h3>
              <p className="text-[16px] leading-relaxed text-[#D4D4D4]">{step.description}</p>
            </div>
            <div className="mt-auto pt-6 border-t border-[#262626]">
              <p className="text-lg font-medium">Quem recebe, recebe em reais.</p>
              <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">O destinatário recebe um Pix na conta que já usa.</p>
              <a href={recipe.docsUrl} target="_blank" rel="noreferrer" className="inline-block mt-5 text-sm underline underline-offset-4">
                Conhecer a integração
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
