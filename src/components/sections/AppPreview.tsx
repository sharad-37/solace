"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { IPhoneFrame } from "@/components/illustrations/IPhoneFrame";
import {
  ScreenAuraChat,
  ScreenMoodDashboard,
  ScreenVoiceJournal,
} from "./PhoneScreens";

const screens = [
  {
    label: "Aura Chat",
    caption: "A gentle conversation, every day.",
    component: <ScreenAuraChat />,
  },
  {
    label: "Mood Dashboard",
    caption: "Patterns become visible.",
    component: <ScreenMoodDashboard />,
  },
  {
    label: "Voice Journal",
    caption: "Speak. Aura listens.",
    component: <ScreenVoiceJournal />,
  },
];

export function AppPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="app"
      style={{
        backgroundColor: "var(--canvas)",
        paddingTop: 120,
        paddingBottom: 160,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background sage band behind phones */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          height: 320,
          backgroundColor: "var(--canvas-soft)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          zIndex: 1,
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 880,
            margin: "0 auto 80px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--mute)",
              marginBottom: 24,
            }}
          >
            Inside Solace
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 6vw, 80px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: 28,
              textWrap: "balance",
            }}
          >
            Three quiet tools.
            <br />
            <span style={{ color: "var(--ink-deep)" }}>One companion.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: 20,
              lineHeight: 1.55,
              color: "var(--body)",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Built to be picked up in a moment and put down without guilt.
          </motion.p>
        </div>

        {/* ── Phone trio ── */}
        <div className="phone-row">
          {screens.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
                transform: i === 1 ? "translateY(-32px)" : "translateY(0)",
              }}
              className="phone-item"
            >
              <div className="phone-scale-wrapper">
                <IPhoneFrame scale={0.95}>{s.component}</IPhoneFrame>
              </div>

              <div style={{ textAlign: "center", maxWidth: 240 }}>
                <p
                  style={{
                    margin: "0 0 6px 0",
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 900,
                    fontSize: 20,
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "var(--body)",
                  }}
                >
                  {s.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .phone-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 64px;
          flex-wrap: wrap;
        }
        @media (min-width: 768px) {
          .phone-row {
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap: 32px;
          }
        }
        @media (min-width: 1024px) {
          .phone-row {
            gap: 56px;
          }
        }
        @media (max-width: 767px) {
          .phone-item {
            transform: none !important;
          }
          .phone-scale-wrapper {
            transform: scale(0.85);
            transform-origin: center top;
          }
        }
      `}</style>
    </section>
  );
}
