"use client";

import { ReactNode } from "react";

interface IPhoneFrameProps {
  children: ReactNode;
  scale?: number;
}

export function IPhoneFrame({ children, scale = 1 }: IPhoneFrameProps) {
  const W = 300;
  const H = 600;

  return (
    <div
      style={{
        width: W * scale,
        height: H * scale,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Phone body */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 46 * scale,
          backgroundColor: "#0e0f0c",
          padding: 8 * scale,
          boxShadow:
            "0 28px 60px rgba(14,15,12,0.18), 0 2px 6px rgba(14,15,12,0.08), inset 0 0 0 1px rgba(255,255,255,0.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 38 * scale,
            overflow: "hidden",
            position: "relative",
            backgroundColor: "var(--canvas-soft)",
          }}
        >
          {/* Dynamic island */}
          <div
            style={{
              position: "absolute",
              top: 12 * scale,
              left: "50%",
              transform: "translateX(-50%)",
              width: 92 * scale,
              height: 26 * scale,
              borderRadius: 9999,
              backgroundColor: "#0e0f0c",
              zIndex: 10,
            }}
          />

          {/* Status bar spacing */}
          <div style={{ height: 48 * scale }} />

          {/* Screen content */}
          <div
            style={{
              padding: 16 * scale,
              height: `calc(100% - ${48 * scale}px)`,
              overflow: "hidden",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
