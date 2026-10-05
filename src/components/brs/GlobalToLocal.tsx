export const GlobalToLocal = () => {
  return (
    <span className="inline-flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2">
      <span className="relative inline-block text-gray-400">
        global
        <span
          className="brs-global-strike absolute left-0 top-1/2 h-[3px] md:h-[4px] w-full origin-left -translate-y-1/2 bg-gray-400/80 rounded-full"
        />
      </span>
      <span className="text-[#009c3b]">local</span>
    </span>
  )
}
