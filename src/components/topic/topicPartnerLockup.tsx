import Image from 'next/image'
import Link from 'next/link'
import { TopicPartner } from '../../types/topic'

export default function TopicPartnerLockup({
  partner,
  align = 'center',
  showKicker = true,
  size = 'sm',
}: {
  partner: TopicPartner
  align?: 'center' | 'left'
  showKicker?: boolean
  size?: 'sm' | 'md'
}) {
  const logoClass = size === 'md' ? 'h-10 w-auto' : 'h-8 w-auto'

  return (
    <Link
      href={partner.href}
      target="_blank"
      rel="noreferrer"
      aria-label={partner.name}
      className={`inline-flex flex-col gap-2 group ${align === 'center' ? 'items-center' : 'items-start'}`}
    >
      {showKicker && (
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
          {partner.kicker}
        </span>
      )}
      <Image
        src={partner.logoSrc}
        alt={partner.name}
        width={partner.logoWidth}
        height={partner.logoHeight}
        className={`${logoClass} opacity-90 transition-opacity group-hover:opacity-100`}
      />
    </Link>
  )
}
