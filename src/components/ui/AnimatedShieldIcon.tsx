'use client'

import { useState, useEffect, useRef } from 'react'

export const AnimatedShieldIcon = ({
  className = 'h-8 w-8 text-orange-600',
}: {
  className?: string
}) => {
  const [hasAnimatedOnScroll, setHasAnimatedOnScroll] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimatedOnScroll) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimatedOnScroll(true)
            setAnimationKey((prev) => prev + 1)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 },
    )

    if (iconRef.current) {
      observer.observe(iconRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [hasAnimatedOnScroll])

  useEffect(() => {
    if (animationKey > 0) {
      const timer = setTimeout(() => {
        setAnimationKey(0)
      }, 900)
      return () => clearTimeout(timer)
    }
  }, [animationKey])

  const handleMouseEnter = () => {
    setIsHovered(true)
    setAnimationKey((prev) => prev + 1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const shouldShowFinalState = hasAnimatedOnScroll || isHovered
  const shouldAnimate = animationKey > 0

  return (
    <div
      ref={iconRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <style>
          {`
            .lock-top {
              transform-origin: center;
              ${
                shouldAnimate
                  ? `
                animation: lockClose 0.6s ease-out forwards;
              `
                  : shouldShowFinalState
                    ? `
                transform: translateY(0);
                opacity: 1;
              `
                    : `
                transform: translateY(-6px);
                opacity: 0;
              `
              }
            }
            .lock-body {
              ${
                shouldAnimate
                  ? `
                animation: fadeIn 0.3s ease-out forwards;
                animation-delay: 0.2s;
              `
                  : shouldShowFinalState
                    ? `
                opacity: 1;
              `
                    : `
                opacity: 0;
              `
              }
            }
            @keyframes lockClose {
              0%   { transform: translateY(-6px); opacity: 0; }
              40%  { opacity: 1; }
              100% { transform: translateY(0); opacity: 1; }
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
          `}
        </style>
        <path d="M12 22C6 20 4 17 4 12V6a1 1 0 0 1 1-1c2.2 0 4.7-1.3 6.3-2.8a1 1 0 0 1 1.4 0C14.3 3.7 16.8 5 19 5a1 1 0 0 1 1 1v6c0 5-2 8-8 10z" />
        <rect className="lock-body" x="9" y="11" width="6" height="5" rx="1" />
        <path className="lock-top" d="M10.5 11V9.5a1.5 1.5 0 0 1 3 0V11" />
      </svg>
    </div>
  )
}
