import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "About Solace — Built on a quiet hypothesis.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function AboutOG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        backgroundColor: "#0e0f0c",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <svg width="48" height="48" viewBox="0 0 64 64">
          <path
            d="M32 30 C32 30 18 12 8 16 C2 19 4 30 14 32 C22 33 30 32 32 30Z"
            fill="#9fe870"
          />
          <path
            d="M32 30 C32 30 46 12 56 16 C62 19 60 30 50 32 C42 33 34 32 32 30Z"
            fill="#9fe870"
          />
          <path
            d="M32 34 C32 34 20 38 16 48 C13 55 22 56 28 50 C31 47 32 40 32 34Z"
            fill="#9fe870"
            opacity="0.75"
          />
          <path
            d="M32 34 C32 34 44 38 48 48 C51 55 42 56 36 50 C33 47 32 40 32 34Z"
            fill="#9fe870"
            opacity="0.75"
          />
          <ellipse cx="32" cy="32" rx="2" ry="10" fill="#9fe870" />
        </svg>
        <span
          style={{
            fontSize: 36,
            fontWeight: 900,
            color: "#f4f6f1",
            letterSpacing: "-0.02em",
          }}
        >
          Solace
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "rgba(244,246,241,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            margin: "0 0 20px 0",
          }}
        >
          About Solace
        </p>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#9fe870",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            margin: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ color: "#f4f6f1" }}>We built Solace because</span>
          <span>nobody was listening.</span>
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: 20,
            color: "rgba(244,246,241,0.6)",
            margin: 0,
            maxWidth: 600,
          }}
        >
          Small reflections. Meaningful growth.
        </p>
        <p style={{ fontSize: 18, color: "rgba(244,246,241,0.5)", margin: 0 }}>
          solace.app/about
        </p>
      </div>
    </div>,
    { ...size },
  );
}
