"use client";

import { motion } from "framer-motion";

const moods = [
  { label: "Calm", count: 12, color: "#9fe870" },
  { label: "Content", count: 9, color: "#cdffad" },
  { label: "Reflective", count: 6, color: "#ffc091" },
  { label: "Inspired", count: 4, color: "#38c8ff" },
  { label: "Low", count: 3, color: "#c0c2bd" },
];

export function MoodDistribution() {
  const max = Math.max(...moods.map((m) => m.count));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{
        backgroundColor: "var(--canvas)",
        borderRadius: 24,
        padding: 32,
      }}
    >
      <p
        style={{
          margin: "0 0 6px 0",
          fontSize: 12,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--mute)",
        }}
      >
        Mood Mix
      </p>
      <h3
        style={{
          margin: "0 0 24px 0",
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 900,
          fontSize: 32,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: "var(--ink)",
        }}
      >
        This month
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {moods.map((m, i) => (
          <div key={m.label}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 6,
              }}
            >
              <span
                style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}
              >
                {m.label}
              </span>
              <span style={{ fontSize: 13, color: "var(--mute)" }}>
                {m.count} days
              </span>
            </div>
            <div
              style={{
                height: 8,
                width: "100%",
                backgroundColor: "rgba(14,15,12,0.06)",
                borderRadius: 9999,
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(m.count / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  height: "100%",
                  backgroundColor: m.color,
                  borderRadius: 9999,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
