import { NoraMark } from './NoraMark'
import { brsCopy } from './brsCopy'

type NoraBadgeProps = {
  className?: string
  label?: string
}

export const NoraBadge = ({
  className,
  label = brsCopy.pt.hero.issuer,
}: NoraBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-medium text-gray-600 ${className ?? ''}`}
    >
      <NoraMark className="h-3.5 w-3.5 text-[#009c3b]" />
      {label}
    </span>
  )
}
