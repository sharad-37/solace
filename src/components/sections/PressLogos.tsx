"use client";

import { motion } from "framer-motion";

// SVG wordmarks — clean placeholder logos
// You can replace these with real ones when you get press
const publications = [
  {
    name: "Product Hunt",
    svg: (
      <svg viewBox="0 0 130 24" fill="currentColor">
        <text
          x="0"
          y="18"
          fontFamily="Manrope, sans-serif"
          fontWeight="900"
          fontSize="20"
          letterSpacing="-0.02em"
        >
          ProductHunt
        </text>
      </svg>
    ),
  },
  {
    name: "TechCrunch",
    svg: (
      <svg viewBox="0 0 130 24" fill="currentColor">
        <text
          x="0"
          y="18"
          fontFamily="Manrope, sans-serif"
          fontWeight="900"
          fontSize="20"
          letterSpacing="-0.02em"
        >
          TechCrunch
        </text>
      </svg>
    ),
  },
  {
    name: "The Verge",
    svg: (
      <svg viewBox="0 0 100 24" fill="currentColor">
        <text
          x="0"
          y="18"
          fontFamily="Manrope, sans-serif"
          fontWeight="900"
          fontSize="20"
          letterSpacing="-0.02em"
        >
          The Verge
        </text>
      </svg>
    ),
  },
  {
    name: "Fast Company",
    svg: (
      <svg viewBox="0 0 130 24" fill="currentColor">
        <text
          x="0"
          y="18"
          fontFamily="Manrope, sans-serif"
          fontWeight="900"
          fontSize="20"
          letterSpacing="-0.02em"
        >
          FastCompany
        </text>
      </svg>
    ),
  },
  {
    name: "Wired",
    svg: (
      <svg viewBox="0 0 70 24" fill="currentColor">
        <text
          x="0"
          y="18"
          fontFamily="Manrope, sans-serif"
          fontWeight="900"
          fontSize="20"
          letterSpacing="-0.02em"
        >
          WIRED
        </text>
      </svg>
    ),
  },
];

export function PressLogos() {
  return (
    <section
      aria-label="Featured in"
      style={{
        backgroundColor: "var(--canvas-soft)",
        paddingTop: 48,
        paddingBottom: 48,
        borderTop: "1px solid rgba(14,15,12,0.06)",
        borderBottom: "1px solid rgba(14,15,12,0.06)",
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
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--mute)",
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          Launching soon · Featured by
        </motion.p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
            opacity: 0.55,
          }}
        >
          {publications.map((pub, i) => (
            <motion.div
              key={pub.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              aria-label={pub.name}
              style={{
                height: 22,
                color: "var(--ink)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ height: 22, width: "auto" }}>{pub.svg}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
