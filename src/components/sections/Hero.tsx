"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { MoodCheckInCard } from "./MoodCheckInCard";
import { FloatingButterflies } from "@/components/illustrations/FloatingButterflies";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "var(--canvas-soft)",
        paddingTop: 140,
        paddingBottom: 96,
        overflow: "hidden",
      }}
    >
      {/* Soft gradient wash */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(159,232,112,0.18) 0%, rgba(159,232,112,0) 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(22,51,0,0.10) 0%, rgba(22,51,0,0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating butterflies */}
      <FloatingButterflies />

      {/* Content container */}
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
        <div className="hero-grid">
          {/* ─────────── LEFT ─────────── */}
          <div>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 9999,
                backgroundColor: "var(--primary-pale)",
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 9999,
                  backgroundColor: "#054d28",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#054d28",
                }}
              >
                Now in private beta
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(48px, 8.5vw, 112px)",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                marginBottom: 28,
                textWrap: "balance",
              }}
            >
              Understand
              <br />
              yourself.
              <br />
              <span style={{ color: "var(--ink-deep)" }}>Grow every day.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              style={{
                fontSize: 20,
                lineHeight: 1.5,
                color: "var(--body)",
                maxWidth: 520,
                marginBottom: 36,
              }}
            >
              Solace helps you reflect, track your emotions, and build healthier
              habits with <strong style={{ color: "var(--ink)" }}>Aura</strong>,
              your AI wellness companion.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 40,
              }}
            >
              {/* Primary CTA */}
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#early-access"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 24,
                  backgroundColor: "var(--primary)",
                  color: "var(--on-primary)",
                  fontSize: 16,
                  fontWeight: 600,
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--primary-active)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "var(--primary)")
                }
              >
                Get Early Access
                <ArrowRight size={18} />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#demo"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 28px",
                  borderRadius: 24,
                  backgroundColor: "var(--canvas)",
                  border: "1px solid var(--ink)",
                  color: "var(--ink)",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                <Play size={16} />
                Watch Demo
              </motion.a>
            </motion.div>

            {/* Social proof row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              {/* Avatar stack */}
              <div style={{ display: "flex" }}>
                {["#9fe870", "#ffc091", "#38c8ff", "#cdffad"].map(
                  (color, i) => (
                    <div
                      key={i}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 9999,
                        backgroundColor: color,
                        border: "2px solid var(--canvas-soft)",
                        marginLeft: i === 0 ? 0 : -10,
                      }}
                    />
                  ),
                )}
              </div>
              <p style={{ fontSize: 14, color: "var(--body)", margin: 0 }}>
                <strong style={{ color: "var(--ink)" }}>2,400+ people</strong>{" "}
                already reflecting daily
              </p>
            </motion.div>
          </div>

          {/* ─────────── RIGHT ─────────── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            <MoodCheckInCard />

            {/* Floating insight chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                position: "absolute",
                top: -16,
                right: -8,
                zIndex: 2,
                padding: "8px 14px",
                borderRadius: 9999,
                backgroundColor: "var(--ink)",
                color: "var(--primary)",
                fontSize: 13,
                fontWeight: 600,
                boxShadow: "0 4px 16px rgba(14,15,12,0.15)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
              className="hero-float-chip"
            >
              <span style={{ fontSize: 14 }}>✨</span>
              7-day streak
            </motion.div>

            {/* Floating mini-stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              style={{
                position: "absolute",
                bottom: -28,
                left: -28,
                padding: 14,
                zIndex: 2,
                borderRadius: 16,
                backgroundColor: "var(--canvas)",
                border: "1px solid rgba(14,15,12,0.08)",
                boxShadow: "0 8px 24px rgba(14,15,12,0.08)",
                minWidth: 160,
              }}
              className="hero-float-stat"
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--mute)",
                  margin: "0 0 4px 0",
                }}
              >
                This week
              </p>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 900,
                  fontSize: 22,
                  color: "var(--ink)",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                +18% calm
              </p>
              <div style={{ display: "flex", gap: 3, marginTop: 8 }}>
                {[20, 35, 28, 50, 42, 60, 70].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: 8,
                      height: h * 0.5,
                      borderRadius: 2,
                      backgroundColor:
                        i === 6 ? "#9fe870" : "rgba(14,15,12,0.15)",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive grid styles */}
      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 80px;
          }
        }
        /* Hide decorative floating elements on mobile to prevent overflow */
        @media (max-width: 640px) {
          :global(.hero-float-chip),
          :global(.hero-float-stat) {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
