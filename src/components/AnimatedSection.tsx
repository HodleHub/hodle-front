'use client'

import { motion } from 'framer-motion'
import React, { useEffect } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export default function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  className,
}: AnimatedSectionProps) {
  useEffect(() => {
    console.log(`[Hodle] Section mounted, delay=${delay}, direction=${direction}`)
  }, [delay, direction])

  const directionOffset = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  const offset = directionOffset[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px 0px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
