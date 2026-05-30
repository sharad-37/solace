"use client";

import { motion } from "framer-motion";
import { Butterfly } from "@/components/illustrations/Butterfly";

const values = [
  {
    title: "Gentle by default",
    body: "We never use streaks that shame, push notifications that interrupt, or copy that pressures. Reflection should feel like an offering, not an obligation.",
  },
  {
    title: "Patterns over performance",
    body: "Wellness apps love metrics. We're more interested in helping you notice — what energises you, what drains you, what you keep avoiding.",
  },
  {
    title: "Your data is yours",
    body: "Your reflections never train external AI models. Voice journals are encrypted. You can export or delete everything in one tap.",
  },
  {
    title: "Not a therapist",
    body: "Aura is a companion, not a clinician. We're explicit about this. Real therapy is real work, and we don't pretend to replace it.",
  },
];

export function AboutClient() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundColor: "var(--canvas-soft)",
          paddingTop: 160,
          paddingBottom: 96,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 880,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
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
            About Solace
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 7vw, 88px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: 32,
              textWrap: "balance",
            }}
          >
            We built Solace because
            <br />
            <span style={{ color: "var(--mute)" }}>nobody was listening.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: "var(--body)",
              marginBottom: 24,
            }}
          >
            Not in a dramatic way. In a quiet, everyday way.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "var(--body)",
            }}
          >
            We talk to our friends, our partners, our coworkers — but the
            version of us that gets shared is curated. Edited. Optimised for the
            room. The version that actually feels things, that gets tired, that
            has small worries on Sunday evenings — that version rarely gets
            heard, even by ourselves.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section
        style={{
          backgroundColor: "var(--canvas)",
          paddingTop: 96,
          paddingBottom: 96,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(28px, 4vw, 44px)",
                letterSpacing: "-0.01em",
                color: "var(--ink)",
                marginBottom: 24,
              }}
            >
              The quiet hypothesis
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                "Most journaling apps fail because they ask too much. Long entries. Empty boxes. Pressure to be insightful.",
                "Most therapy apps fail because they treat wellness like a deficit — something broken to fix.",
                "We started with a different bet: what if the practice could be smaller than anyone expected — and still work?",
                "Two minutes. One question. A mood tag. Sometimes a 30-second voice note. That's it.",
                "Over weeks, those tiny signals reveal something that no quarterly review or wellness retreat ever could: your actual inner weather.",
              ].map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 18,
                    lineHeight: 1.65,
                    color: "var(--body)",
                    margin: 0,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section
        style={{
          backgroundColor: "var(--canvas-soft)",
          paddingTop: 96,
          paddingBottom: 96,
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
          <h2
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: 56,
              textAlign: "center",
            }}
          >
            What we believe.
          </h2>

          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  backgroundColor: "var(--canvas)",
                  borderRadius: 24,
                  padding: 32,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 900,
                    fontSize: 22,
                    letterSpacing: "-0.01em",
                    color: "var(--ink)",
                    margin: "0 0 12px 0",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--body)",
                    margin: 0,
                  }}
                >
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>

          <style jsx>{`
            .values-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 20px;
            }
            @media (min-width: 768px) {
              .values-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
              }
            }
          `}</style>
        </div>
      </section>

      {/* CLOSING */}
      <section
        style={{
          backgroundColor: "#0e0f0c",
          color: "#f4f6f1",
          paddingTop: 120,
          paddingBottom: 120,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 720,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <Butterfly size={72} color="#9fe870" animate />

          <h2
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 5vw, 56px)",
              letterSpacing: "-0.02em",
              color: "#9fe870",
              margin: "32px 0 24px 0",
              lineHeight: 1.05,
            }}
          >
            The butterfly doesn't hurry.
          </h2>

          <p
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: "rgba(244,246,241,0.7)",
              marginBottom: 40,
            }}
          >
            It becomes what it always was — through small, patient steps.
            <br />
            We hope Solace can be part of yours.
          </p>

          <a
            href="/#early-access"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 28px",
              borderRadius: 24,
              backgroundColor: "#9fe870",
              color: "#0e0f0c",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Get Early Access
          </a>
        </div>
      </section>
    </>
  );
}
