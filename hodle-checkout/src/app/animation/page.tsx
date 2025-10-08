'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Component() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => setIsAnimating(true), 300)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const connections = [
    {
      // Coordenadas originais da linha (Centro -> Tether)
      from: { x: 400, y: 300 },
      to: { x: 570, y: 170 },
      logo: '/tether-without-bg.png',
      logoPos: { x: 630, y: 150 },
      type: 'incoming', // Mantido para a cor verde
      delay: 1,
    },
    {
      // Coordenadas originais da linha (Centro -> Bitcoin)
      from: { x: 400, y: 300 },
      to: { x: 590, y: 300 },
      logo: '/btc-without-bg.png',
      logoPos: { x: 650, y: 300 },
      type: 'incoming', // Mantido para a cor verde
      delay: 1.2,
    },
    {
      // Coordenadas originais da linha (Pix -> Centro)
      from: { x: 250, y: 300 },
      to: { x: 350, y: 300 },
      logo: '/pix-without-bg.png',
      logoPos: { x: 200, y: 300 },
      type: 'incoming', // Mantido para a cor azul
      delay: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="relative w-full max-w-4xl h-[600px]">
        {/* Central Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            className="relative w-32 h-32 rounded-full bg-white shadow-lg border-2 border-gray-100 overflow-hidden"
            animate={{
              boxShadow: isAnimating
                ? [
                    '0 0 0 0 rgba(16, 185, 129, 0.3)',
                    '0 0 20px 5px rgba(16, 185, 129, 0.6)',
                    '0 0 0 0 rgba(16, 185, 129, 0.3)',
                  ]
                : ['0 0 0 0 rgba(16, 185, 129, 0.1)'],
            }}
            transition={{ duration: 3.5, ease: 'easeInOut' }}
          >
            <Image
              src="/use-without-bg.png"
              alt="CryptoUse"
              fill
              className="object-contain p-3"
              priority
            />
          </motion.div>
        </div>

        {/* Service Logos */}
        {connections.map((connection, index) => (
          <div
            key={index}
            className="absolute"
            style={{ left: connection.logoPos.x, top: connection.logoPos.y }}
          >
            <motion.div
              className="transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                filter: isAnimating
                  ? connection.type === 'incoming'
                    ? [
                        'drop-shadow(0 0 0px rgba(59, 130, 246, 0.4))',
                        'drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))',
                        'drop-shadow(0 0 0px rgba(59, 130, 246, 0.4))',
                      ]
                    : [
                        'drop-shadow(0 0 0px rgba(16, 185, 129, 0.4))',
                        'drop-shadow(0 0 15px rgba(16, 185, 129, 0.8))',
                        'drop-shadow(0 0 0px rgba(16, 185, 129, 0.4))',
                      ]
                  : ['drop-shadow(0 0 0px rgba(16, 185, 129, 0.2))'],
              }}
              transition={{
                duration: 2.5,
                ease: 'easeInOut',
                delay: connection.delay + 0.5,
              }}
            >
              <div className="relative w-20 h-20">
                <Image
                  src={connection.logo}
                  alt={`Service ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        ))}

        {/* SVG Animation */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 800 600"
        >
          {connections.map((connection, index) => (
            <path
              key={`static-${index}`}
              d={`M ${connection.from.x} ${connection.from.y} L ${connection.to.x} ${connection.to.y}`}
              stroke={
                connection.type === 'incoming'
                  ? 'rgba(59, 130, 246, 0.15)'
                  : 'rgba(16, 185, 129, 0.15)'
              }
              strokeWidth="1"
              strokeDasharray="6,6"
              fill="none"
            />
          ))}
        </svg>

        {/* Enhanced moving energy dots */}
        {isAnimating &&
          connections.map((connection, index) => {
            // Lógica para garantir que a animação seja sempre de fora para dentro
            const isOutgoing = connection.type === 'outgoing'
            const startPos = isOutgoing ? connection.to : connection.from
            const endPos = isOutgoing ? connection.from : connection.to

            return (
              <motion.div
                key={`energy-${index}`}
                className={`absolute w-3 h-3 rounded-full shadow-lg ${connection.type === 'incoming' ? 'bg-blue-400' : 'bg-emerald-400'}`}
                style={{
                  boxShadow:
                    connection.type === 'incoming'
                      ? '0 0 12px rgba(59, 130, 246, 0.8)'
                      : '0 0 12px rgba(16, 185, 129, 0.8)',
                }}
                initial={{
                  left: startPos.x - 6,
                  top: startPos.y - 6,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  left: endPos.x - 6,
                  top: endPos.y - 6,
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.2, 1, 0.8],
                }}
                transition={{
                  duration: 2.5,
                  ease: 'easeInOut',
                  delay: connection.delay,
                }}
              />
            )
          })}

        {/* Trailing sparkles */}
        {isAnimating &&
          connections.map((connection, index) => {
            // Lógica para garantir que a animação seja sempre de fora para dentro
            const isOutgoing = connection.type === 'outgoing'
            const startPos = isOutgoing ? connection.to : connection.from
            const endPos = isOutgoing ? connection.from : connection.to

            return [...Array(3)].map((_, sparkleIndex) => (
              <motion.div
                key={`sparkle-${index}-${sparkleIndex}`}
                className={`absolute w-1 h-1 rounded-full ${connection.type === 'incoming' ? 'bg-blue-300' : 'bg-emerald-300'}`}
                initial={{
                  left: startPos.x,
                  top: startPos.y,
                  opacity: 0,
                }}
                animate={{
                  left: endPos.x + (Math.random() - 0.5) * 20,
                  top: endPos.y + (Math.random() - 0.5) * 20,
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2.5,
                  ease: 'easeOut',
                  delay: connection.delay + sparkleIndex * 0.2,
                }}
              />
            ))
          })}
      </div>
    </div>
  )
}
