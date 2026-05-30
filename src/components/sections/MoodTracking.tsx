"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { MoodTimeline } from "./MoodTimeline";
import { MoodDistribution } from "./MoodDistribution";
import { PatternInsights } from "./PatternInsights";

export function MoodTracking() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="features"
      style={{
        backgroundColor: "var(--canvas-soft)",
        paddingTop: 120,
        paddingBottom: 120,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ marginBottom: 64, maxWidth: 880 }}>
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
            Mood tracking
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
            Notice patterns you
            <br />
            <span style={{ color: "var(--mute)" }}>never saw</span> before.
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
            }}
          >
            One tap to check in. Weeks later, Solace shows you the through-line
            — the rhythms, triggers, and tiny wins shaping your inner weather.
          </motion.p>
        </div>

        {/* ── Top: timeline + distribution ── */}
        <div className="tracking-grid-top">
          <MoodTimeline />
          <MoodDistribution />
        </div>

        {/* ── Bottom: 3 insight cards ── */}
        <div className="tracking-grid-bottom" style={{ marginTop: 24 }}>
          <PatternInsights />
        </div>
      </div>

      <style jsx>{`
        .tracking-grid-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .tracking-grid-bottom {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .tracking-grid-bottom {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .tracking-grid-top {
            grid-template-columns: 2fr 1fr;
          }
          .tracking-grid-bottom {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
