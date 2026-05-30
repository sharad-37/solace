"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Clock, Brain, Waves, CalendarDays } from "lucide-react";

const observations = [
  {
    icon: Clock,
    title: "We move fast",
    body: "Days blur into weeks. We answer messages, hit deadlines, and barely pause to ask how we actually feel.",
  },
  {
    icon: Brain,
    title: "We overthink",
    body: "The same thoughts loop quietly in the background — without a place to land, they only grow louder.",
  },
  {
    icon: Waves,
    title: "Emotions stack up",
    body: "Small frustrations, small wins, small worries — they accumulate unnoticed until they shape entire weeks.",
  },
  {
    icon: CalendarDays,
    title: "Patterns stay hidden",
    body: "Without reflection, we lose the through-line: what energises us, what drains us, what we keep avoiding.",
  },
];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="problem"
      style={{
        backgroundColor: "var(--canvas)",
        paddingTop: 96,
        paddingBottom: 96,
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
        {/* ── Eyebrow ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
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
          The quiet problem
        </motion.p>

        {/* ── Headline ── */}
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
            maxWidth: 980,
            marginBottom: 32,
            textWrap: "balance",
          }}
        >
          We move through life
          <br />
          <span style={{ color: "var(--mute)" }}>without noticing</span> how we
          feel.
        </motion.h2>

        {/* ── Lead paragraph ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontSize: 20,
            lineHeight: 1.55,
            color: "var(--body)",
            maxWidth: 720,
            marginBottom: 80,
          }}
        >
          Reflection isn&apos;t a luxury — it&apos;s the difference between
          reacting to life and{" "}
          <strong style={{ color: "var(--ink)" }}>
            actually understanding it
          </strong>
          . But most days, we just don&apos;t have the space.
        </motion.p>

        {/* ── 2x2 grid of observations ── */}
        <div className="problem-grid">
          {observations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.35 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  backgroundColor: "var(--canvas-soft)",
                  borderRadius: 24,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 16,
                    backgroundColor: "var(--canvas)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--ink)",
                  }}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

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
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: "var(--body)",
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Closing line ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            marginTop: 96,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              backgroundColor: "var(--ink)",
              opacity: 0.2,
            }}
          />
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(24px, 3vw, 36px)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              maxWidth: 720,
              margin: 0,
              textWrap: "balance",
            }}
          >
            What if a few quiet minutes a day
            <br />
            <span style={{ color: "var(--ink-deep)" }}>
              could change everything?
            </span>
          </p>
        </motion.div>
      </div>

      {/* ── Responsive grid ── */}
      <style jsx>{`
        .problem-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .problem-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}
