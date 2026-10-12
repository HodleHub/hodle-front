'use client'

import Image from 'next/image'

const heading = 'font-[family-name:var(--font-space-grotesk)]'

const RAILS = [
  { icon: '/pix.svg', name: 'Pix' },
  { icon: '/usdt.svg', name: 'USDT' },
  { icon: '/usdc.svg', name: 'USDC' },
  { icon: '/btc.svg', name: 'Bitcoin' },
  { icon: '/ln.svg', name: 'Lightning' },
  { icon: '/polygon.svg', name: 'Polygon' },
  { icon: '/base.png', name: 'Base' },
  { icon: '/arbitrum.svg', name: 'Arbitrum' },
  { icon: '/solana.svg', name: 'Solana' },
  { icon: '/spark.svg', name: 'Spark' },
] as const

/**
 * Looping logo marquee of the supported networks and rails.
 *
 * A client island on purpose: the loop repeats every logo four times, and as a
 * server component each copy was serialized into the page's RSC payload on top
 * of the HTML. Server rendering still emits the full markup, so the first copy
 * stays readable without JavaScript.
 */
export const CaasRailsMarquee = () => (
  <div className="marquee-track marquee-mask overflow-hidden">
    <div className="animate-marquee flex w-max items-center gap-12 pr-12">
      {[...RAILS, ...RAILS, ...RAILS, ...RAILS].map((rail, i) => (
        <div
          key={`${rail.name}-${i}`}
          className="flex items-center gap-2.5 shrink-0"
          aria-hidden={i >= RAILS.length}
        >
          <Image
            src={rail.icon}
            alt={rail.name}
            width={28}
            height={28}
            className="w-7 h-7 rounded-full"
          />
          <span className={`${heading} text-base font-medium text-gray-500`}>
            {rail.name}
          </span>
        </div>
      ))}
    </div>
  </div>
)
