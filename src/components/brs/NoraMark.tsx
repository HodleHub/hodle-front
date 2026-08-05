const RAY_ANGLES = [
  0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300,
  320, 340,
] as const

type NoraMarkProps = {
  className?: string
}

export const NoraMark = ({ className }: NoraMarkProps) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {RAY_ANGLES.map((angle) => (
        <rect
          key={angle}
          x="13.1"
          y="1.2"
          width="1.8"
          height="5.2"
          rx="0.2"
          fill="currentColor"
          transform={`rotate(${angle} 14 14)`}
        />
      ))}
    </svg>
  )
}
