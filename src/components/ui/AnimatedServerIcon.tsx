export const AnimatedServerIcon = ({ className = "h-8 w-8 text-orange-600" }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <style>
        {`
          .led {
            animation: blink 2s ease-in-out infinite;
          }
          @keyframes blink {
            0% { opacity: 0.25; }
            50% { opacity: 1; }
            100% { opacity: 0.25; }
          }
        `}
      </style>
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
      <line className="led" x1="6" x2="6.01" y1="6" y2="6"></line>
      <line className="led" x1="6" x2="6.01" y1="18" y2="18"></line>
    </svg>
  )
}

