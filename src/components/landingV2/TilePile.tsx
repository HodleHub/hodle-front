'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { Body, Constraint } from 'matter-js'
import { PILE_TILES } from './landingV2Data'
import { createTilePileWorld, FLOOR_ANGLE, FLOOR_INSET, type MatterModule, type TilePileWorld } from './tilePileWorld'

const STEP_MS = 1000 / 60
const SETTLE_STEPS = 480
const DRAG_STIFFNESS = 0.2
const DRAG_DAMPING = 0.1
const ICON_RATIO = 0.46

type Point = {
  x: number
  y: number
}

type Drag = {
  constraint: Constraint
  pointerId: number
}

type Simulation = {
  matter: MatterModule
  world: TilePileWorld
}

const loadMatter = async (): Promise<MatterModule> => {
  const imported = await import('matter-js')

  return imported.default ?? imported
}

const settle = (matter: MatterModule, world: TilePileWorld): void => {
  Array.from({ length: SETTLE_STEPS }).forEach(() => matter.Engine.update(world.engine, STEP_MS))
}

const prefersReducedMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const paintTiles = (tiles: Body[], nodes: (HTMLDivElement | null)[], tileSize: number): void => {
  tiles.forEach((tile, index) => {
    const node = nodes[index]

    if (!node) return

    node.style.transform = `translate3d(${tile.position.x - tileSize / 2}px, ${tile.position.y - tileSize / 2}px, 0) rotate(${tile.angle}rad)`
  })
}

const localPoint = (container: HTMLDivElement, event: PointerEvent | React.PointerEvent): Point => {
  const rect = container.getBoundingClientRect()

  return { x: event.clientX - rect.left, y: event.clientY - rect.top }
}

/**
 * Pile of asset and network tiles that drop in when the section enters the viewport and can be grabbed and thrown.
 */
export const TilePile = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const tileRefs = useRef<(HTMLDivElement | null)[]>([])
  const simulationRef = useRef<Simulation | null>(null)
  const dragRef = useRef<Drag | null>(null)
  const [tileSize, setTileSize] = useState<number>(0)

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    const state = { frame: 0, width: 0, visible: false, started: false, disposed: false }

    const tick = (): void => {
      const simulation = simulationRef.current

      if (!simulation || !state.visible || state.disposed) return

      simulation.matter.Engine.update(simulation.world.engine, STEP_MS)
      paintTiles(simulation.world.tiles, tileRefs.current, simulation.world.tileSize)
      state.frame = requestAnimationFrame(tick)
    }

    const build = (matter: MatterModule, settled: boolean): void => {
      const world = createTilePileWorld({
        matter,
        width: container.clientWidth,
        height: container.clientHeight,
        tileCount: PILE_TILES.length,
      })

      if (settled) settle(matter, world)

      dragRef.current = null
      state.width = container.clientWidth
      simulationRef.current = { matter, world }
      setTileSize(world.tileSize)
      paintTiles(world.tiles, tileRefs.current, world.tileSize)
    }

    const start = async (): Promise<void> => {
      const matter = await loadMatter()

      if (state.disposed) return

      build(matter, prefersReducedMotion())
      state.frame = requestAnimationFrame(tick)
    }

    const resizeObserver = new ResizeObserver(() => {
      const simulation = simulationRef.current

      if (!simulation || container.clientWidth === state.width) return

      build(simulation.matter, true)
    })

    const observer = new IntersectionObserver(([entry]) => {
      state.visible = entry.isIntersecting
      cancelAnimationFrame(state.frame)

      if (!state.visible) return

      if (state.started) {
        state.frame = requestAnimationFrame(tick)

        return
      }

      state.started = true
      void start()
    })

    observer.observe(container)
    resizeObserver.observe(container)

    return () => {
      state.disposed = true
      cancelAnimationFrame(state.frame)
      observer.disconnect()
      resizeObserver.disconnect()
      simulationRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!tileSize) return

    const simulation = simulationRef.current

    if (simulation) paintTiles(simulation.world.tiles, tileRefs.current, tileSize)
  }, [tileSize])

  const onPointerDown = (index: number) => (event: React.PointerEvent<HTMLDivElement>): void => {
    const simulation = simulationRef.current
    const container = containerRef.current

    if (!simulation || !container || dragRef.current) return

    const { Constraint: MatterConstraint, Composite, Sleeping, Vector } = simulation.matter
    const body = simulation.world.tiles[index]
    const point = localPoint(container, event)
    const offset = Vector.rotate(Vector.sub(point, body.position), -body.angle)
    const constraint = MatterConstraint.create({
      pointA: point,
      bodyB: body,
      pointB: offset,
      length: 0,
      stiffness: DRAG_STIFFNESS,
      damping: DRAG_DAMPING,
    })

    event.currentTarget.setPointerCapture(event.pointerId)
    Sleeping.set(body, false)
    Composite.add(simulation.world.engine.world, constraint)
    dragRef.current = { constraint, pointerId: event.pointerId }
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>): void => {
    const drag = dragRef.current
    const container = containerRef.current

    if (!drag || !container || drag.pointerId !== event.pointerId) return

    drag.constraint.pointA = localPoint(container, event)
  }

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>): void => {
    const drag = dragRef.current
    const simulation = simulationRef.current

    if (!drag || drag.pointerId !== event.pointerId) return

    simulation?.matter.Composite.remove(simulation.world.engine.world, drag.constraint)
    dragRef.current = null
  }

  return (
    <div ref={containerRef} aria-hidden="true" className="absolute inset-0 overflow-hidden select-none">
      <div className="absolute left-6 top-6 font-[family-name:var(--font-geist-mono)] text-[11px] tracking-[0.14em] text-[#A3A3A3] pointer-events-none">
        ARRASTE E ARREMESSE
      </div>
      <div
        className="absolute left-[-10%] w-[120%] h-px bg-[#D4D4D4] pointer-events-none"
        style={{ bottom: FLOOR_INSET, transform: `rotate(${FLOOR_ANGLE}rad)` }}
      />
      {PILE_TILES.map((tile, index) => (
        <div
          key={tile.name}
          ref={(node) => {
            tileRefs.current[index] = node
          }}
          title={tile.name}
          onPointerDown={onPointerDown(index)}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="absolute left-0 top-0 touch-none cursor-grab active:cursor-grabbing rounded-[24%] bg-white border border-[#E5E5E5] border-b-[3px] border-b-[#D4D4D4] shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex items-center justify-center will-change-transform"
          style={{ width: tileSize, height: tileSize, visibility: tileSize ? 'visible' : 'hidden' }}
        >
          <div className="absolute inset-[9%] rounded-[20%] border border-[#F0F0F0] pointer-events-none" />
          <Image
            src={tile.icon}
            alt=""
            width={40}
            height={40}
            draggable={false}
            className="relative object-contain pointer-events-none"
            style={{ width: tileSize * ICON_RATIO, height: tileSize * ICON_RATIO }}
          />
        </div>
      ))}
    </div>
  )
}
