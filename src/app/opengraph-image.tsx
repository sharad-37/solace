import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Solace — Small reflections. Meaningful growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: "#e8ebe6",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Top: logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
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
            fontSize: 40,
            fontWeight: 900,
            color: "#0e0f0c",
            letterSpacing: "-0.02em",
          }}
        >
          Solace
        </span>
      </div>

      {/* Middle: headline */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#454745",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: 0,
            marginBottom: 20,
          }}
        >
          Meet Aura · Your AI wellness companion
        </p>
        <h1
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#0e0f0c",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            margin: 0,
            maxWidth: 1040,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Small reflections.</span>
          <span style={{ color: "#163300" }}>Meaningful growth.</span>
        </h1>
      </div>

      {/* Bottom: CTA pill */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 32px",
            borderRadius: 24,
            backgroundColor: "#9fe870",
            color: "#0e0f0c",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Get Early Access →
        </div>
        <p
          style={{
            fontSize: 18,
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
