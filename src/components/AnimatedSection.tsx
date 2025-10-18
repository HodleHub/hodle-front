"use client"

import { motion } from "framer-motion"
import React from "react"

const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  return <motion.div {...sectionAnimation}>{children}</motion.div>
}
