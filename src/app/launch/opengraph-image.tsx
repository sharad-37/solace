import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Solace — A calm AI companion for daily reflection";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function LaunchOG() {
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
      {/* Strong lime glow — readable on WhatsApp thumbnails */}
      <div
        style={{
          position: "absolute",
          top: -150,
          right: -150,
          width: 500,
          height: 500,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(159,232,112,0.42) 0%, rgba(159,232,112,0) 70%)",
          display: "flex",
        }}
      />

      {/* Floating butterfly accent */}
      <div
        style={{
          position: "absolute",
          top: 90,
          right: 100,
          opacity: 0.45,
          display: "flex",
        }}
      >
        <svg width="44" height="44" viewBox="0 0 64 64">
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

      {/* ═══════════ TOP — Brand mark + "Building in public" pill ═══════════ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
              fontSize: 38,
              fontWeight: 900,
              color: "#0e0f0c",
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
            gap: 10,
            padding: "10px 18px",
            borderRadius: 9999,
            backgroundColor: "#0e0f0c",
            color: "#9fe870",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 9999,
              backgroundColor: "#9fe870",
              display: "flex",
            }}
          />
          Building in public
        </div>
      </div>

      {/* ═══════════ MIDDLE — Big headline (readable on WhatsApp thumbnail) ═══════════ */}
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
          <span>Two quiet minutes.</span>
          <span style={{ color: "#163300" }}>One companion.</span>
        </h1>
        <p
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "#454745",
            lineHeight: 1.4,
            margin: "26px 0 0 0",
            maxWidth: 880,
          }}
        >
          A calm AI wellness companion. Designed for the version of you that
          never gets heard.
        </p>
      </div>

      {/* ═══════════ BOTTOM — CTA + domain ═══════════ */}
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#868685",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              margin: 0,
            }}
          >
            Now live
          </p>
          <p
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#0e0f0c",
              margin: "4px 0 0 0",
            }}
          >
            solace.app
          </p>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
