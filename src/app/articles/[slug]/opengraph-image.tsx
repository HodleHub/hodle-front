import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getArticleBySlug } from '../../../utils/getArticleBySlug'
import { buildOgGridLines } from '../../../utils/buildOgGridLines'
import { getOgKickerFontSize } from '../../../utils/getOgKickerFontSize'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Hodle'

const PANEL = '#0a0a0a'

/**
 * The share card of an article, drawn as the same near-black panel the page
 * shows above the headline: dark grid fading from the centre, kicker set in
 * Space Grotesk Light. The font is vendored because `next/font` only ships a
 * stylesheet and `ImageResponse` needs the binary.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug({ slug })

  const kicker = article?.coverKicker || 'Hodle'

  const font = await readFile(
    join(process.cwd(), 'src/assets/fonts/SpaceGrotesk-Light.woff'),
  )

  const lines = buildOgGridLines({ width: size.width, height: size.height })

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: PANEL,
        }}
      >
        {lines.map((line) => (
          <div
            key={line.key}
            style={{
              position: 'absolute',
              left: line.left,
              top: line.top,
              width: line.width,
              height: line.height,
              backgroundColor: `rgba(255,255,255,${line.opacity})`,
            }}
          />
        ))}

        <div
          style={{
            display: 'flex',
            position: 'relative',
            maxWidth: 940,
            padding: '0 80px',
            fontFamily: 'Space Grotesk',
            fontWeight: 300,
            fontSize: getOgKickerFontSize({ kicker }),
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            color: '#ffffff',
            textAlign: 'center',
          }}
        >
          {kicker}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Space Grotesk', data: font, weight: 300, style: 'normal' }],
    },
  )
}
