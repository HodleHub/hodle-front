import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Hodle - Pagamentos sem limites"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #FFF7ED, #FFFFFF, #FED7AA, #FDBA74)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0) 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-200px",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.25) 0%, rgba(251, 146, 60, 0) 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      {/* Content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          zIndex: 1,
          padding: "0 80px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "12px 24px",
            borderRadius: "999px",
            border: "2px solid rgba(249, 115, 22, 0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/h-logo-CMkhJWyguDYjevRj87Z5SlRFBmmPHI.png"
            alt="Hodle"
            width="40"
            height="40"
            style={{
              borderRadius: "8px",
            }}
          />
          <span
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#18181B",
            }}
          >
            uma nova forma de pagamentos
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#18181B",
              textAlign: "center",
              lineHeight: 1.1,
              margin: 0,
              maxWidth: "900px",
            }}
          >
            Pagamentos sem limites
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#52525B",
              textAlign: "center",
              margin: 0,
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            Integre stablecoins nos fluxos de pagamento com liquidações instantâneas
          </p>
        </div>

        {/* CTA Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "linear-gradient(to right, #EA580C, #F97316)",
            padding: "20px 48px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(249, 115, 22, 0.4)",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            Integrar
          </span>
          <span
            style={{
              fontSize: "28px",
              color: "#FFFFFF",
            }}
          >
            →
          </span>
        </div>
      </div>

      {/* Stablecoin icons at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          display: "flex",
          gap: "16px",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: i === 3 ? "#FFFFFF" : `rgba(0, 0, 0, ${0.8 - i * 0.15})`,
              border: i === 3 ? "2px solid #E5E5E5" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 700,
              color: i === 3 ? "#18181B" : "#FFFFFF",
            }}
          >
            ₮
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  )
}
