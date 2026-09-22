'use client'

import { useEffect } from 'react'
import { track } from '@vercel/analytics'
import { getAcquisition } from '../../utils/analytics/getAcquisition'
import { getConversionTarget } from '../../utils/analytics/getConversionTarget'
import { buildAppAttributionUrl } from '../../utils/analytics/buildAppAttributionUrl'

/** Tracks intent clicks; a click is not a qualified lead, signup or activated integration. */
export const ConversionAnalytics = (): null => {
  useEffect((): (() => void) | undefined => {
    const acquisition: ReturnType<typeof getAcquisition> = getAcquisition({ url: window.location.href, referrer: document.referrer })

    if (!acquisition.success) return

    const onClick = (event: MouseEvent): void => {
      if (event.button !== 0 && event.button !== 1) return

      const element: Element | null = event.target instanceof Element ? event.target : null
      const link: HTMLAnchorElement | null = element?.closest<HTMLAnchorElement>('a[href]') ?? null

      if (!link || event.defaultPrevented) return

      const target: ReturnType<typeof getConversionTarget> = getConversionTarget({ href: link.href, origin: window.location.origin })
      const current: ReturnType<typeof getAcquisition> = getAcquisition({ url: window.location.href, referrer: '' })

      if (!target.success || !current.success) return

      const placement: string = link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'content'

      if (process.env.NEXT_PUBLIC_VERCEL_CUSTOM_EVENTS === 'true') {
        track('conversion_click', { destination: target.destination, page: current.landing, landing: acquisition.landing, source: acquisition.source, medium: acquisition.medium, campaign: acquisition.campaign, placement })
      }

      if (target.destination !== 'app' && target.destination !== 'sandbox') return

      const attributed: ReturnType<typeof buildAppAttributionUrl> = buildAppAttributionUrl({ url: target.url, ...acquisition })

      if (attributed.success) link.href = attributed.href
    }

    document.addEventListener('click', onClick, true)
    document.addEventListener('auxclick', onClick, true)

    return (): void => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('auxclick', onClick, true)
    }
  }, [])

  return null
}
