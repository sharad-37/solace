"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { GrowthStage } from "./GrowthStage";

const stages = [
  {
    day: "Day 1",
    stage: "Tiny step",
    title: "A single reflection",
    body: "You answer one quiet question. It takes 90 seconds. Nothing changes overnight — but something has started.",
    stats: [
      { label: "Check-ins", value: "1" },
      { label: "Minutes", value: "2" },
    ],
    variant: "sage" as const,
    butterflySize: 56,
  },
  {
    day: "Day 30",
    stage: "Quiet rhythm",
    title: "Patterns appear",
    body: "Aura starts to notice things you missed — the days that drained you, the small acts that brought you back.",
    stats: [
      { label: "Check-ins", value: "26" },
      { label: "Insights", value: "8" },
    ],
    variant: "green" as const,
    butterflySize: 72,
  },
  {
    day: "Day 90",
    stage: "Lived change",
    title: "A different relationship with yourself",
    body: "Not transformed. Not fixed. Just more aware — and a little kinder to the person doing the noticing.",
    stats: [
      { label: "Check-ins", value: "82" },
      { label: "Mood lift", value: "+24%" },
    ],
    variant: "dark" as const,
    butterflySize: 88,
  },
];

export function GrowthStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="growth"
      style={{
        backgroundColor: "var(--canvas-soft)",
        paddingTop: 120,
        paddingBottom: 120,
        position: "relative",
        overflow: "hidden",
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
        <div
          style={{
            textAlign: "center",
            maxWidth: 880,
            margin: "0 auto 72px",
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
            Your growth story
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
            Small reflections become
            <br />
            <span style={{ color: "var(--ink-deep)" }}>meaningful change.</span>
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
            Growth isn&apos;t a destination — it&apos;s a quiet practice that
            compounds. Here&apos;s what the first three months tend to look
            like.
          </motion.p>
        </div>

        {/* ── 3-card timeline ── */}
        <div className="growth-grid">
          {stages.map((s, i) => (
            <GrowthStage
              key={s.day}
              index={i + 1}
              {...s}
              delay={0.2 + i * 0.15}
            />
          ))}
        </div>

        {/* ── Closing line ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            marginTop: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
          }}
        >
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(22px, 3vw, 32px)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              maxWidth: 720,
              margin: 0,
              textWrap: "balance",
            }}
          >
            The butterfly doesn&apos;t hurry.
            <br />
            <span style={{ color: "var(--mute)" }}>
              It becomes what it always was.
            </span>
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .growth-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .growth-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
