"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Mic, Zap, Brain } from "lucide-react";
import { VoiceRecorder } from "./VoiceRecorder";
import { JournalSummary } from "./JournalSummary";

const features = [
  {
    icon: Mic,
    title: "One tap to start",
    body: "No setup, no prompts to answer. Press, speak, done.",
  },
  {
    icon: Zap,
    title: "Transcribed instantly",
    body: "Your words become searchable text the moment you stop.",
  },
  {
    icon: Brain,
    title: "Themed by Aura",
    body: "Recurring topics surface gently — never forced, always optional.",
  },
];

export function VoiceJournal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="voice-journal"
      className="voice-section"
      style={{
        backgroundColor: "var(--canvas)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div className="voice-grid">
          {/* ── LEFT — Visual ── */}
          <div className="voice-visual-wrap">
            {/* Soft lime glow */}
            <div aria-hidden="true" className="voice-glow" />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: 460,
                margin: "0 auto",
              }}
            >
              <VoiceRecorder />
            </div>

            {/* Floating summary card */}
            <div className="summary-float">
              <JournalSummary />
            </div>
          </div>

          {/* ── RIGHT — Copy ── */}
          <div className="voice-copy">
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
              Voice journal
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 7vw, 96px)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                marginBottom: 28,
                wordBreak: "break-word",
              }}
            >
              Just
              <br />
              <span style={{ color: "var(--ink-deep)" }}>speak.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                color: "var(--body)",
                maxWidth: 480,
                marginBottom: 40,
              }}
            >
              Capture thoughts in seconds. No typing, no editing — just your
              voice and a quiet moment.
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 42,
                        height: 42,
                        borderRadius: 14,
                        backgroundColor: "var(--canvas-soft)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--ink)",
                      }}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <p
                        style={{
                          margin: "0 0 4px 0",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "var(--ink)",
                        }}
                      >
                        {feature.title}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 14,
                          lineHeight: 1.55,
                          color: "var(--body)",
                        }}
                      >
                        {feature.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .voice-section {
          padding-top: 80px;
          padding-bottom: 80px;
        }
        .voice-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        .voice-visual-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 100%;
          gap: 24px;
        }
        .voice-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 320px;
          height: 320px;
          max-width: 100%;
          border-radius: 9999px;
          background: radial-gradient(
            circle,
            rgba(159, 232, 112, 0.18) 0%,
            rgba(159, 232, 112, 0) 70%
          );
          pointer-events: none;
          z-index: 0;
        }
        .summary-float {
          position: relative;
          width: 100%;
          max-width: 360px;
          z-index: 2;
        }
        .voice-copy {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        @media (min-width: 768px) {
          .voice-section {
            padding-top: 100px;
            padding-bottom: 100px;
          }
        }

        @media (min-width: 1024px) {
          .voice-section {
            padding-top: 120px;
            padding-bottom: 120px;
          }
          .voice-grid {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
          }
          .voice-visual-wrap {
            min-height: 620px;
            justify-content: flex-start;
            padding-bottom: 40px;
          }
          .voice-glow {
            top: 10%;
            left: 10%;
            transform: none;
            width: 380px;
            height: 380px;
          }
          .summary-float {
            position: absolute;
            bottom: -40px;
            right: -10px;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
}
