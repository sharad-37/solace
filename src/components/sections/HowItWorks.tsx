"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Open the app",
    body: "Two quiet minutes is all you need. No setup. No streaks.",
  },
  {
    n: "02",
    title: "Answer one question",
    body: "Aura asks something thoughtful. You reply — typed, tapped, or spoken.",
  },
  {
    n: "03",
    title: "Notice the patterns",
    body: "Days become weeks. Patterns appear. You meet yourself again.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "var(--canvas-soft)",
        paddingTop: 96,
        paddingBottom: 96,
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Eyebrow */}
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
            marginBottom: 16,
            textAlign: "center",
          }}
        >
          How it works
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 64,
            textAlign: "center",
          }}
        >
          Three steps. Two minutes.
        </motion.h2>

        {/* Steps */}
        <div className="how-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                position: "relative",
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 900,
                  fontSize: 64,
                  lineHeight: 0.85,
                  letterSpacing: "-0.04em",
                  color: "var(--mute)",
                  opacity: 0.4,
                }}
              >
                {step.n}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 900,
                  fontSize: 26,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                {step.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.55,
                  color: "var(--body)",
                  margin: 0,
                  maxWidth: 320,
                }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .how-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        @media (min-width: 768px) {
          .how-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
