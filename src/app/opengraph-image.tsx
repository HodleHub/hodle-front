import { ImageResponse } from 'next/og';

interface ImageParams {
  title?: string;
  brandUrl?: string;
  brandText?: string;
}

export const runtime = 'edge';

const generateImage = async ({
  title = '',
  brandUrl,
  brandText = 'hodle.com.br'
}: ImageParams = {}) => {
  // Load font from CDN
  const fontData = await fetch(
    'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.15/files/inter-latin-400-normal.woff'
  ).then((res) => res.arrayBuffer());

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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px' }}>
            <h1 style={{
              margin: 0,
              fontSize: '64px',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#18181B',
              fontFamily: 'Inter, sans-serif'
            }}>
              {title}
            </h1>
            <p style={{
              margin: 0,
              fontSize: '36px',
              fontWeight: 'bold',
              lineHeight: 1.5,
              color: '#4B5563',
              fontFamily: 'Inter',
              maxWidth: '90%'
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
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
          weight: 600,
        },
      ],
    },
  );
};

export default generateImage