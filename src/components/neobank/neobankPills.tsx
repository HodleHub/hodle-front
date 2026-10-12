import type { ReactNode } from 'react'
import { Info } from 'lucide-react'

// Brand green is reserved for Hodle itself. Status colour never appears as a
// bare fill — it always carries a border and a label (see StatusPill).
export const StatusPill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-green-700">
    <span className="h-1.5 w-1.5 rounded-full bg-[#009c3b]" />
    {children}
  </span>
)

export const NeutralPill = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-600">
    {children}
  </span>
)

// Every fabricated figure on the page carries this marker, so no mock reads as
// a live platform metric.
export const IllustrativeNote = ({ children }: { children?: ReactNode }) => (
  <div className="flex items-center justify-between gap-3 border-t border-gray-200 bg-gray-50 px-5 py-2.5 text-[10.5px] text-gray-400 sm:px-7">
    <span className="inline-flex items-center gap-1.5">
      <Info className="h-3 w-3" aria-hidden="true" /> Dados ilustrativos
    </span>
    {children}
  </div>
)
