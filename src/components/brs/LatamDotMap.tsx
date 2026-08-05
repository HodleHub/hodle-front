import {
  LATAM_DOTS,
  LATAM_DOT_MAP_COLS,
  LATAM_DOT_MAP_ROWS,
} from './latamDotMapData'

const CELL_SIZE = 18 as const
const DOT_RADIUS_BASE = 2.1 as const
const DOT_RADIUS_HIGHLIGHT = 3.1 as const

const getAnimationDelay = (col: number, row: number): string => {
  const wave = (col * 0.7 + row) % 14

  return `${(wave * 0.32).toFixed(2)}s`
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
            style={
              dot.highlighted
                ? { animationDelay: getAnimationDelay(dot.col, dot.row) }
                : undefined
            }
          />
        ))}
      </svg>
      <style>{`
        .brs-dot-map {
          -webkit-mask-image: radial-gradient(ellipse 92% 92% at 50% 42%, #000 60%, transparent 100%);
          mask-image: radial-gradient(ellipse 92% 92% at 50% 42%, #000 60%, transparent 100%);
        }
        .brs-dot {
          fill: #94a3b8;
          opacity: 0.3;
        }
        .brs-dot--highlight {
          fill: #009c3b;
          opacity: 0.85;
          animation: brsDotShimmer 5.2s ease-in-out infinite;
        }
        @keyframes brsDotShimmer {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .brs-dot--highlight {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
