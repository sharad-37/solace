import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Solace — Small reflections. Meaningful growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function HomeTwitterCard() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 64px",
        backgroundColor: "#e8ebe6",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* Lime glow accent */}
      <div
        style={{
          position: "absolute",
          top: -160,
          right: -160,
          width: 480,
          height: 480,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(159,232,112,0.35) 0%, rgba(159,232,112,0) 70%)",
          display: "flex",
        }}
      />

      {/* Floating butterfly */}
      <div
        style={{
          position: "absolute",
          top: 100,
          right: 110,
          opacity: 0.4,
          display: "flex",
        }}
      >
        <svg width="36" height="36" viewBox="0 0 64 64">
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

      {/* Brand */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          position: "relative",
          zIndex: 1,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 64 64">
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
            fontSize: 32,
            fontWeight: 900,
            color: "#0e0f0c",
            letterSpacing: "-0.02em",
          }}
        >
          Solace
        </span>
      </div>

      {/* Headline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          maxWidth: 1000,
        }}
      >
        <p
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#454745",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            margin: "0 0 24px 0",
          }}
        >
          Meet Aura · Your AI wellness companion
        </p>
        <h1
          style={{
            fontSize: 100,
            fontWeight: 900,
            color: "#0e0f0c",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            margin: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Small reflections.</span>
          <span style={{ color: "#163300" }}>Meaningful growth.</span>
        </h1>
      </div>

      {/* CTA + domain */}
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
            padding: "16px 28px",
            borderRadius: 24,
            backgroundColor: "#9fe870",
            color: "#0e0f0c",
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          🦋 &nbsp;Get Early Access
        </div>

        <p
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#868685",
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
