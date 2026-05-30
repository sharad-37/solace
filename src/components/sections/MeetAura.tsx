"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Heart, Sparkles, Leaf } from "lucide-react";
import { AuraConversation } from "./AuraConversation";
import { Butterfly } from "@/components/illustrations/Butterfly";

const traits = [
  {
    icon: Heart,
    title: "Warm, not clinical",
    body: "Aura speaks like a thoughtful friend — never a therapist, never a textbook.",
  },
  {
    icon: Sparkles,
    title: "Reflective, not judgmental",
    body: "No advice you didn't ask for. Just the right question at the right time.",
  },
  {
    icon: Leaf,
    title: "Patient, always",
    body: "Some days you'll write paragraphs. Some days, a single word. Both are enough.",
  },
];

export function MeetAura() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="aura"
      style={{
        position: "relative",
        backgroundColor: "#0e0f0c",
        color: "#f4f6f1",
        paddingTop: 80,
        paddingBottom: 80,
        overflow: "hidden",
      }}
    >
      {/* Background floating butterflies */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <motion.div
          animate={{ y: [0, -16, 0], x: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "12%", left: "5%", opacity: 0.4 }}
        >
          <Butterfly size={32} color="#9fe870" animate={false} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -8, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            position: "absolute",
            bottom: "15%",
            left: "8%",
            opacity: 0.3,
          }}
        >
          <Butterfly size={26} color="#9fe870" animate={false} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            position: "absolute",
            top: "20%",
            right: "6%",
            opacity: 0.35,
          }}
        >
          <Butterfly size={28} color="#9fe870" animate={false} />
        </motion.div>
      </div>

      {/* Soft glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(159,232,112,0.10) 0%, rgba(159,232,112,0) 70%)",
          pointerEvents: "none",
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
        <div className="aura-grid">
          {/* ── LEFT ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 9999,
                backgroundColor: "rgba(159,232,112,0.12)",
                border: "1px solid rgba(159,232,112,0.25)",
                marginBottom: 28,
              }}
            >
              <Butterfly size={14} color="#9fe870" animate />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#9fe870" }}>
                Meet your companion
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(48px, 8vw, 104px)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: "var(--primary)",
                marginBottom: 28,
                textWrap: "balance",
              }}
            >
              Meet Aura.
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{
                fontSize: 20,
                lineHeight: 1.55,
                color: "rgba(244,246,241,0.75)",
                maxWidth: 520,
                marginBottom: 48,
              }}
            >
              A wellness companion designed to help you reflect — not judge, not
              diagnose, not fix. Just listen, and ask the questions that matter.
            </motion.p>

            {/* Traits */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {traits.map((trait, i) => {
                const Icon = trait.icon;
                return (
                  <motion.div
                    key={trait.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.1,
                    }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 44,
                        height: 44,
                        borderRadius: 14,
                        backgroundColor: "rgba(159,232,112,0.12)",
                        border: "1px solid rgba(159,232,112,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#9fe870",
                      }}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <p
                        style={{
                          margin: "0 0 4px 0",
                          fontSize: 17,
                          fontWeight: 700,
                          color: "#f4f6f1",
                        }}
                      >
                        {trait.title}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 15,
                          lineHeight: 1.55,
                          color: "rgba(244,246,241,0.65)",
                        }}
                      >
                        {trait.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AuraConversation />
          </div>
        </div>
      </div>

      <style jsx>{`
        .aura-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .aura-grid {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
          }
        }
        @media (max-width: 640px) {
          .aura-grid {
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
