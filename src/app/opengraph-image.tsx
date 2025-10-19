import { ImageResponse } from 'next/og';

interface ImageParams {
  title?: string;
  brandUrl?: string;
  brandText?: string;
}

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  try {
    const { searchParams } = new URL(params.slug);
    const title = searchParams.get('title') || 'Hodle';
    const brandText = searchParams.get('brandText') || 'hodle.com.br';
    const brandUrl = searchParams.get('brandUrl');

    // Preload font
    const fontData = await fetch(
      new URL('../../public/fonts/Inter-Bold.ttf', import.meta.url)
    )
      .then((res) => res.arrayBuffer())
      .catch(() => null);

    return new ImageResponse(
      (
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            fontFamily: "Inter-Bold",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              width: brandUrl ? "30%" : "15%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {brandUrl && (
              <img
                alt="Brand Logo"
                src={brandUrl}
                style={{
                  width: 250,
                  height: 250,
                }}
              />
            )}
          </div>

          <div
            style={{
              display: "flex",
              width: "70%",
              alignItems: "center",
              fontFamily: "Inter-Bold",
              fontSize: "64px",
              fontWeight: "900",
              gap: "24px"
            }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h-logo-CMkhJWyguDYjevRj87Z5SlRFBmmPHI.png"
              alt="Hodle Logo"
              style={{
                width: "80px",
                height: "80px",
                marginRight: "32px"
              }}
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '800px',
              padding: '40px 0'
            }}>
              <h1 style={{
                margin: 0,
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#18181B',
                fontFamily: fontData ? 'Inter, sans-serif' : 'sans-serif',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(90deg, #000000 0%, #2D3748 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '16px'
              }}>
                {title}
              </h1>
              <p style={{
                margin: 0,
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#4B5563',
                fontFamily: fontData ? 'Inter, sans-serif' : 'sans-serif',
                maxWidth: '90%',
                opacity: 0.9
              }}>
                A forma mais prática de fazer pagamentos. Sem conta bancária, sem frição, direto da sua wallet
              </p>
            </div>
          </div>
          {brandText && (
            <div
              style={{
                position: "absolute",
                bottom: 50,
                right: 50,
                color: "#ff6a00",
                fontSize: "24px",
              }}
            >
              {brandText}
            </div>
          )}
        </div>
      ),
      {
        ...size,
        fonts: fontData ? [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
            weight: 700,
          },
        ] : [],
      }
    );
  } catch (e) {
    console.error('Failed to generate image', e);
    return new Response('Failed to generate image', { status: 500 });
  }