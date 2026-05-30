import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Solace — Building in public · A calm AI companion for daily reflection";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function LinkedInLaunchOG() {
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
      {/* ─── Soft lime glow accent (top right) ─── */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 420,
          height: 420,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(159,232,112,0.35) 0%, rgba(159,232,112,0) 70%)",
          display: "flex",
        }}
      />

      {/* ─── Floating decorative butterflies ─── */}
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 80,
          opacity: 0.4,
          display: "flex",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 64 64">
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
            opacity="0.6"
          />
          <path
            d="M32 34 C32 34 44 38 48 48 C51 55 42 56 36 50 C33 47 32 40 32 34Z"
            fill="#0e0f0c"
            opacity="0.6"
          />
          <ellipse cx="32" cy="32" rx="2" ry="10" fill="#0e0f0c" />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 100,
          right: 140,
          opacity: 0.25,
          display: "flex",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 64 64">
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
            opacity="0.6"
          />
          <path
            d="M32 34 C32 34 44 38 48 48 C51 55 42 56 36 50 C33 47 32 40 32 34Z"
            fill="#0e0f0c"
            opacity="0.6"
          />
          <ellipse cx="32" cy="32" rx="2" ry="10" fill="#0e0f0c" />
        </svg>
      </div>

      {/* ═══════════ TOP ═══════════ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
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
              fontSize: 34,
              fontWeight: 900,
              color: "#0e0f0c",
              letterSpacing: "-0.02em",
            }}
          >
            Solace
          </span>
        </div>

        {/* "Building in public" pill — top right */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 18px",
            borderRadius: 9999,
            backgroundColor: "#0e0f0c",
            color: "#9fe870",
            fontSize: 16,
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

      {/* ═══════════ MIDDLE — Main headline + Story ═══════════ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          maxWidth: 920,
        }}
      >
        {/* Eyebrow */}
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
          A calm AI wellness companion · Concept
        </p>

        {/* Hero headline — LinkedIn-thumb readable */}
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
            gap: 4,
          }}
        >
          <span>Two minutes a day.</span>
          <span style={{ color: "#163300" }}>One quiet question.</span>
        </h1>

        {/* Supporting line */}
        <p
          style={{
            fontSize: 26,
            fontWeight: 500,
            color: "#454745",
            lineHeight: 1.4,
            margin: "28px 0 0 0",
            maxWidth: 820,
          }}
        >
          Designed for the version of you that never gets heard.
        </p>
      </div>

      {/* ═══════════ BOTTOM — CTA + Domain ═══════════ */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* CTA Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "18px 32px",
            borderRadius: 24,
            backgroundColor: "#9fe870",
            color: "#0e0f0c",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          🦋 &nbsp; Join the early-access waitlist
        </div>

        {/* Domain */}
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
            solace-gray-mu.vercel.app
          </p>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
