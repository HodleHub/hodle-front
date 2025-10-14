"use client"

const data = [120000, 135000, 148000, 142000, 155000, 168000, 162000, 145000, 158000, 172000, 165000, 151000, 143827]

export function VolumeChart() {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - ((value - min) / range) * 100
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-500">Gross volume (USD)</p>
        <p className="text-3xl font-bold">$143,827.12</p>
      </div>
      <div className="relative w-full h-[200px]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <polygon
            points={`0,100 ${points} 100,100`}
            fill="url(#orangeGradient)"
          />
          <polyline
            points={points}
            fill="none"
            stroke="rgb(249, 115, 22)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  )
}
