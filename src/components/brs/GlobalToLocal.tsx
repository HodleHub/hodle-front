'use client'

import { motion, useReducedMotion } from 'framer-motion'

export const GlobalToLocal = () => {
  const reduceMotion = useReducedMotion()

  return (
    <span className="inline-flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2">
      <span className="relative inline-block text-gray-400">
        global
        <motion.span
          className="absolute left-0 top-1/2 h-[3px] md:h-[4px] w-full origin-left -translate-y-1/2 bg-gray-400/80 rounded-full"
          initial={{ scaleX: reduceMotion ? 1 : 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
        />
      </span>
      <span className="text-[#009c3b]">local</span>
    </span>
  )
}
