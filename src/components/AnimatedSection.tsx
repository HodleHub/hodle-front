'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '../utils/cn'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const directionOffset = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  className,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!element || reducedMotion.matches) return

    // Do not hide content that was already painted before hydration (or an anchor jump).
    if (element.getBoundingClientRect().top < window.innerHeight) return

    let animation: Animation | undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || reducedMotion.matches) return

      observer.disconnect()
      // Fast scrolling/anchor navigation can jump straight past the entrance zone.
      if (entry.boundingClientRect.top < 0) return

      const offset = directionOffset[direction]

      // Progressive enhancement: the server HTML and the final state stay visible.
      // Only the brief entrance needs JavaScript; no animation library is shipped.
      animation = element.animate([
        { opacity: 0, transform: `translate(${offset.x}px, ${offset.y}px)` },
        { opacity: 1, transform: 'translate(0, 0)' },
      ], {
        duration: 600,
        delay: delay * 1000,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        fill: 'backwards',
      })
    }, { rootMargin: '0px 0px 80px 0px' })

    const stopForReducedMotion = () => {
      if (!reducedMotion.matches) return

      animation?.cancel()
      observer.disconnect()
    }

    observer.observe(element)
    reducedMotion.addEventListener('change', stopForReducedMotion)

    return () => {
      animation?.cancel()
      observer.disconnect()
      reducedMotion.removeEventListener('change', stopForReducedMotion)
    }
  }, [delay, direction])

  return (
    <div ref={ref} className={cn('animated-section', className)}>
      {children}
    </div>
  )
}
