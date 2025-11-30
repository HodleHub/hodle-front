export const AnimatedArrowLeftRightIcon = ({ className = "h-8 w-8 text-orange-600" }: { className?: string }) => {
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
          .arrow-left {
            animation: slideLeft 1.6s ease-in-out infinite;
          }
          .arrow-right {
            animation: slideRight 1.6s ease-in-out infinite;
          }
          @keyframes slideLeft {
            0% { transform: translateX(0); }
            50% { transform: translateX(-3px); }
            100% { transform: translateX(0); }
          }
          @keyframes slideRight {
            0% { transform: translateX(0); }
            50% { transform: translateX(3px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
      <path className="arrow-left" d="M8 3 4 7l4 4"></path>
      <path className="arrow-left" d="M4 7h16"></path>
      <path className="arrow-right" d="m16 21 4-4-4-4"></path>
      <path className="arrow-right" d="M20 17H4"></path>
    </svg>
  )
}

