import type * as MatterNamespace from 'matter-js'

export type MatterModule = typeof MatterNamespace

export type TilePileWorldArgs = {
  matter: MatterModule
  width: number
  height: number
  tileCount: number
}

export type TilePileWorld = {
  engine: MatterNamespace.Engine
  tiles: MatterNamespace.Body[]
  tileSize: number
}

export const FLOOR_ANGLE = -0.06
export const FLOOR_INSET = 28

const WALL_THICKNESS = 200
const TILE_MIN = 52
const TILE_MAX = 76
const TILE_WIDTH_RATIO = 0.15
const TILE_RADIUS_RATIO = 0.24
const DIAMOND_EVERY = 5
const SPAWN_ROWS_GAP = 0.9
const MAX_START_TILT = 0.5

const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value))

const buildBounds = ({ matter, width, height }: TilePileWorldArgs): MatterNamespace.Body[] => {
  const { Bodies } = matter
  const wallHeight = height * 6
  const options = { isStatic: true, friction: 0.8 }

  return [
    Bodies.rectangle(width / 2, height - FLOOR_INSET + WALL_THICKNESS / 2, width * 2, WALL_THICKNESS, {
      ...options,
      angle: FLOOR_ANGLE,
    }),
    Bodies.rectangle(-WALL_THICKNESS / 2, height - wallHeight / 2, WALL_THICKNESS, wallHeight, options),
    Bodies.rectangle(width + WALL_THICKNESS / 2, height - wallHeight / 2, WALL_THICKNESS, wallHeight, options),
  ]
}

const buildTile = (args: TilePileWorldArgs, tileSize: number, index: number): MatterNamespace.Body => {
  const columns = Math.max(1, Math.floor(args.width / tileSize) - 1)
  const column = index % columns
  const row = Math.floor(index / columns)
  const x = tileSize + column * ((args.width - tileSize * 2) / Math.max(1, columns - 1)) + (Math.random() - 0.5) * tileSize * 0.4
  const y = -tileSize - row * tileSize * (1 + SPAWN_ROWS_GAP) - Math.random() * tileSize
  const angle = index % DIAMOND_EVERY === 2 ? Math.PI / 4 : (Math.random() - 0.5) * MAX_START_TILT

  return args.matter.Bodies.rectangle(x, y, tileSize, tileSize, {
    angle,
    chamfer: { radius: tileSize * TILE_RADIUS_RATIO },
    friction: 0.5,
    frictionAir: 0.012,
    restitution: 0.25,
    density: 0.002,
  })
}

/**
 * Builds the physics world for the asset pile: a tilted floor, two walls and one body per tile spawned above the view.
 */
export const createTilePileWorld = (args: TilePileWorldArgs): TilePileWorld => {
  const { Engine, Composite } = args.matter
  const tileSize = Math.round(clamp(args.width * TILE_WIDTH_RATIO, TILE_MIN, TILE_MAX))
  const engine = Engine.create({ enableSleeping: true })
  const tiles = Array.from({ length: args.tileCount }, (_, index) => buildTile(args, tileSize, index))

  Composite.add(engine.world, [...buildBounds(args), ...tiles])

  return { engine, tiles, tileSize }
}
