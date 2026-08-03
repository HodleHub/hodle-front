import {
  LATAM_DOTS,
  LATAM_DOT_MAP_COLS,
  LATAM_DOT_MAP_ROWS,
} from './latamDotMapData'

const CELL_SIZE = 18 as const
const DOT_RADIUS_BASE = 2.3 as const
const DOT_RADIUS_HIGHLIGHT = 3.8 as const

const getAnimationDelay = (col: number, row: number): string => {
  const wave = (col + row * 1.3) % 12

  return `${(wave * 0.18).toFixed(2)}s`
}

export const LatamDotMap = () => {
  const width = LATAM_DOT_MAP_COLS * CELL_SIZE
  const height = LATAM_DOT_MAP_ROWS * CELL_SIZE

  return (
    <div
      className="brs-dot-map pointer-events-none select-none absolute inset-0"
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {LATAM_DOTS.map((dot) => (
          <circle
            key={`${dot.col}-${dot.row}`}
            cx={dot.col * CELL_SIZE + CELL_SIZE / 2}
            cy={dot.row * CELL_SIZE + CELL_SIZE / 2}
            r={dot.highlighted ? DOT_RADIUS_HIGHLIGHT : DOT_RADIUS_BASE}
            className={
              dot.highlighted ? 'brs-dot brs-dot--highlight' : 'brs-dot'
            }
            style={{ animationDelay: getAnimationDelay(dot.col, dot.row) }}
          />
        ))}
      </svg>
      <style>{`
        .brs-dot-map {
          -webkit-mask-image: radial-gradient(ellipse 92% 92% at 50% 42%, #000 60%, transparent 100%);
          mask-image: radial-gradient(ellipse 92% 92% at 50% 42%, #000 60%, transparent 100%);
        }
        .brs-dot {
          fill: #32bcad;
          opacity: 0.4;
          animation: brsDotPulse 4.8s ease-in-out infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
        .brs-dot--highlight {
          fill: #009c3b;
          opacity: 0.68;
        }
        @keyframes brsDotPulse {
          0%, 100% { opacity: 0.32; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.35); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brs-dot {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
