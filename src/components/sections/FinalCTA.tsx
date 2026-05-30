"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Butterfly } from "@/components/illustrations/Butterfly";
import { EarlyAccessForm } from "@/components/forms/EarlyAccessForm";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // 12 floating butterflies, scattered organically
  const butterflies = [
    { top: "12%", left: "8%", size: 22, delay: 0.0, dur: 7 },
    { top: "20%", left: "88%", size: 28, delay: 0.4, dur: 9 },
    { top: "35%", left: "4%", size: 18, delay: 0.8, dur: 8 },
    { top: "48%", left: "94%", size: 24, delay: 1.2, dur: 10 },
    { top: "62%", left: "10%", size: 30, delay: 1.6, dur: 7 },
    { top: "75%", left: "86%", size: 20, delay: 2.0, dur: 9 },
    { top: "84%", left: "6%", size: 26, delay: 0.6, dur: 8 },
    { top: "8%", left: "48%", size: 16, delay: 1.4, dur: 11 },
  ];

  return (
    <section
      ref={ref}
      id="early-access"
      style={{
        position: "relative",
        backgroundColor: "#0e0f0c",
        color: "#f4f6f1",
        paddingTop: 100,
        paddingBottom: 100,
        overflow: "hidden",
      }}
    >
      {/* Soft lime glow center */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(159,232,112,0.10) 0%, rgba(159,232,112,0) 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating butterflies */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        {butterflies.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={
              inView
                ? {
                    opacity: 0.45,
                    y: [0, -22, -10, -28, 0],
                    x: [0, 10, -6, 12, 0],
                    rotate: [0, 6, -3, 4, 0],
                  }
                : { opacity: 0 }
            }
            transition={{
              opacity: { duration: 1, delay: b.delay },
              y: {
                duration: b.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: b.delay,
              },
              x: {
                duration: b.dur + 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: b.delay,
              },
              rotate: {
                duration: b.dur + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: b.delay,
              },
            }}
            style={{
              position: "absolute",
              top: b.top,
              left: b.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Butterfly size={b.size} color="#9fe870" animate={false} />
          </motion.div>
        ))}
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        {/* Big animated butterfly flying upward */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <motion.div
            animate={{
              y: [0, -14, 0],
              rotate: [0, 3, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Butterfly size={88} color="#9fe870" animate />
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 9999,
            backgroundColor: "rgba(159,232,112,0.12)",
            border: "1px solid rgba(159,232,112,0.25)",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 9999,
              backgroundColor: "#9fe870",
            }}
          />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#9fe870" }}>
            Private beta · limited spots
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(44px, 8vw, 104px)",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            color: "var(--primary)",
            maxWidth: 1000,
            margin: "0 auto 32px",
            textWrap: "balance",
          }}
        >
          Your next chapter
          <br />
          <span style={{ color: "#f4f6f1" }}>starts with a single</span>
          <br />
          reflection.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: 20,
            lineHeight: 1.55,
            color: "rgba(244,246,241,0.7)",
            maxWidth: 580,
            margin: "0 auto 48px",
          }}
        >
          Join the people quietly building a kinder relationship with themselves
          — two minutes at a time.
        </motion.p>

        {/* Email + CTA form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{ marginBottom: 32 }}
        >
          <EarlyAccessForm variant="dark" />
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
          style={{
            fontSize: 13,
            color: "rgba(244,246,241,0.5)",
            margin: 0,
          }}
        >
          No credit card · No spam · Unsubscribe in one tap
        </motion.p>
      </div>
    </section>
  );
}
