import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Solace — A calm AI companion for daily reflection";
// WhatsApp prefers square or 1.91:1; we use 1200x630 (1.91:1)
// This compresses well under 300KB
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function WhatsAppCard() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        backgroundColor: "#e8ebe6",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Strong lime glow — WhatsApp shrinks images, so color contrast matters more than nuance */}
      <div
        style={{
          position: "absolute",
          top: -150,
          right: -150,
          width: 500,
          height: 500,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(159,232,112,0.45) 0%, rgba(159,232,112,0) 70%)",
          display: "flex",
        }}
      />

      {/* Single bold butterfly accent */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 90,
          opacity: 0.5,
          display: "flex",
        }}
      >
        <svg width="48" height="48" viewBox="0 0 64 64">
          <path
            d="M32 30 C32 30 18 12 8 16 C2 19 4 30 14 32 C22 33 30 32 32 30Z"
            fill="#0e0f0c"
          />
          <path
            d="M32 30 C32 30 46 12 56 16 C62 19 60 30 50 32 C42 33 34 32 32 30Z"
            fill="#0e0f0c"
          />
          <path
            d="M32 34 C32 34 20 38 16 48 C13 55 22 56 28 50 C31 47 32 40 32 34Z"
            fill="#0e0f0c"
            opacity="0.65"
          />
          <path
            d="M32 34 C32 34 44 38 48 48 C51 55 42 56 36 50 C33 47 32 40 32 34Z"
            fill="#0e0f0c"
            opacity="0.65"
          />
          <ellipse cx="32" cy="32" rx="2" ry="10" fill="#0e0f0c" />
        </svg>
      </div>

      {/* ═══════════ TOP — Brand (chunky for thumbnail readability) ═══════════ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          position: "relative",
          zIndex: 1,
        }}
      >
        <svg width="52" height="52" viewBox="0 0 64 64">
          <path
            d="M32 30 C32 30 18 12 8 16 C2 19 4 30 14 32 C22 33 30 32 32 30Z"
            fill="#0e0f0c"
          />
          <path
            d="M32 30 C32 30 46 12 56 16 C62 19 60 30 50 32 C42 33 34 32 32 30Z"
            fill="#0e0f0c"
          />
          <path
            d="M32 34 C32 34 20 38 16 48 C13 55 22 56 28 50 C31 47 32 40 32 34Z"
            fill="#0e0f0c"
            opacity="0.75"
          />
          <path
            d="M32 34 C32 34 44 38 48 48 C51 55 42 56 36 50 C33 47 32 40 32 34Z"
            fill="#0e0f0c"
            opacity="0.75"
          />
          <ellipse cx="32" cy="32" rx="2" ry="10" fill="#0e0f0c" />
        </svg>
        <span
          style={{
            fontSize: 42,
            fontWeight: 900,
            color: "#0e0f0c",
            letterSpacing: "-0.02em",
          }}
        >
          Solace
        </span>
      </div>

      {/* ═══════════ MIDDLE — Punchy headline (WhatsApp shrinks heavily, big text essential) ═══════════ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          maxWidth: 1000,
        }}
      >
        <h1
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#0e0f0c",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            margin: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Two minutes.</span>
          <span style={{ color: "#163300" }}>One companion.</span>
        </h1>
        <p
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#454745",
            lineHeight: 1.35,
            margin: "24px 0 0 0",
            maxWidth: 880,
          }}
        >
          A calm AI wellness companion. Now in private beta.
        </p>
      </div>

      {/* ═══════════ BOTTOM — Clear CTA + domain ═══════════ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "18px 32px",
            borderRadius: 24,
            backgroundColor: "#9fe870",
            color: "#0e0f0c",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          🦋 &nbsp;Join the waitlist
        </div>
        <p
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#0e0f0c",
            margin: 0,
          }}
        >
          solace.app
        </p>
      </div>
    </div>,
    { ...size },
  );
}
