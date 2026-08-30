'use client'

import { useEffect, useState } from 'react'

type SectionNavItem = {
  id: string
  label: string
}

type SectionNavProps = {
  items: readonly SectionNavItem[]
}

// The global Header is `sticky top-0` and 64px tall, so this rail sits at
// top-16 and the two together occupy ~117px. Section anchors carry a 128px
// scroll-margin so a jump never lands under the chrome.
//
// The active line must sit BELOW that scroll-margin: clicking a link parks the
// section at exactly 128px, and a `<= 128` test lands on the wrong side of the
// boundary on subpixel scroll positions — lighting up the previous section for
// the one link the reader just clicked.
const ACTIVE_LINE_PX = 136

const useActiveSection = (ids: readonly string[]): string => {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (sections.length === 0) {
      return
    }

    const syncActiveSection = (): void => {
      const passed = sections.filter(
        (section) => section.getBoundingClientRect().top <= ACTIVE_LINE_PX,
      )
      const current = passed[passed.length - 1] ?? sections[0]

      setActiveId(current.id)
    }

    syncActiveSection()
    window.addEventListener('scroll', syncActiveSection, { passive: true })
    window.addEventListener('resize', syncActiveSection)

    return () => {
      window.removeEventListener('scroll', syncActiveSection)
      window.removeEventListener('resize', syncActiveSection)
    }
  }, [ids])

  return activeId
}

const SectionNav = ({ items }: SectionNavProps) => {
  const ids = items.map((item) => item.id)
  const activeId = useActiveSection(ids)

  return (
    <div className="sticky top-16 z-40 border-b border-gray-200 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-6">
        <span className="hidden shrink-0 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gray-400 lg:inline">
          Nesta página
        </span>
        <nav
          aria-label="Seções da página"
          className="-mx-1 flex min-w-0 flex-1 items-center gap-5 overflow-x-auto px-1"
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={item.id === activeId ? 'true' : undefined}
              className={`relative shrink-0 py-4 text-[12.5px] transition-colors ${
                item.id === activeId
                  ? 'font-semibold text-foreground'
                  : 'text-gray-500 hover:text-foreground'
              }`}
            >
              {item.label}
              {item.id === activeId && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-t-sm bg-[#009c3b]" />
              )}
            </a>
          ))}
        </nav>

      </div>
    </div>
  )
}

export default SectionNav
