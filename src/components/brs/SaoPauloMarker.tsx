import {
  LATAM_DOT_MAP_COLS,
  LATAM_DOT_MAP_ROWS,
  SAO_PAULO_MARKER,
} from './latamDotMapData'

const leftPct = ((SAO_PAULO_MARKER.col + 0.5) / LATAM_DOT_MAP_COLS) * 100
const topPct = ((SAO_PAULO_MARKER.row + 0.5) / LATAM_DOT_MAP_ROWS) * 100

export const SaoPauloMarker = () => {
  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{ left: `${leftPct}%`, top: `${topPct}%` }}
      aria-hidden="true"
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <span className="brs-sp-ring absolute inset-0 -m-2 rounded-full border-[1.6px] border-[#009c3b]" />
        <span className="block h-2 w-2 rounded-full bg-[#009c3b]" />
      </div>
      <span className="brs-sp-label hidden sm:block absolute left-full top-1/2 ml-1.5 -translate-y-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-[#009c3b]">
        São Paulo
      </span>
      <style>{`
        .brs-sp-label {
          text-shadow:
            0 0 6px #fff,
            0 0 6px #fff,
            0 0 10px #fff;
        }
        .brs-sp-ring {
          animation: brsSpPing 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes brsSpPing {
          0% { transform: scale(0.7); opacity: 0.9; }
          75%, 100% { transform: scale(2.6); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .brs-sp-ring {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
