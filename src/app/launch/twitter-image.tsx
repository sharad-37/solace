import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Solace — Two quiet minutes. A calm AI companion for reflection.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function LaunchTwitterCard() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px 64px",
        backgroundColor: "#0e0f0c",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -180,
          width: 540,
          height: 540,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(159,232,112,0.25) 0%, rgba(159,232,112,0) 65%)",
          display: "flex",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="42" height="42" viewBox="0 0 64 64">
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
              fontSize: 32,
              fontWeight: 900,
              color: "#f4f6f1",
              letterSpacing: "-0.02em",
            }}
          >
            Solace
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            borderRadius: 9999,
            backgroundColor: "rgba(159,232,112,0.12)",
            border: "1px solid rgba(159,232,112,0.3)",
            color: "#9fe870",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: 9999,
              backgroundColor: "#9fe870",
              display: "flex",
            }}
          />
          Building in public
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          maxWidth: 1040,
        }}
      >
        <h1
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#9fe870",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            margin: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ color: "#f4f6f1" }}>Two quiet minutes.</span>
          <span>One companion.</span>
        </h1>
        <p
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "rgba(244,246,241,0.7)",
            lineHeight: 1.4,
            margin: "28px 0 0 0",
            maxWidth: 880,
          }}
        >
          A calm AI wellness companion. Designed for the version of you that
          never gets heard.
        </p>
      </div>

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
          🦋 &nbsp;Join the waitlist
        </div>
        <p
          style={{ fontSize: 18, fontWeight: 700, color: "#f4f6f1", margin: 0 }}
        >
          solace-gray-mu.vercel.app
        </p>
      </div>
    </div>,
    { ...size },
  );
}
