"use client";

import { motion } from "framer-motion";
import { Butterfly } from "@/components/illustrations/Butterfly";

interface GrowthStageProps {
  index: number;
  day: string;
  stage: string;
  title: string;
  body: string;
  stats: { label: string; value: string }[];
  variant: "sage" | "green" | "dark";
  butterflySize: number;
  delay?: number;
}

export function GrowthStage({
  index,
  day,
  stage,
  title,
  body,
  stats,
  variant,
  butterflySize,
  delay = 0,
}: GrowthStageProps) {
  const styles = {
    sage: {
      bg: "var(--canvas-soft)",
      text: "var(--ink)",
      subText: "var(--body)",
      eyebrow: "var(--mute)",
      statBg: "var(--canvas)",
      butterfly: "#454745",
    },
    green: {
      bg: "var(--primary-pale)",
      text: "var(--ink)",
      subText: "var(--body)",
      eyebrow: "var(--positive-deep)",
      statBg: "var(--canvas)",
      butterfly: "#054d28",
    },
    dark: {
      bg: "#0e0f0c",
      text: "#9fe870",
      subText: "rgba(244,246,241,0.75)",
      eyebrow: "rgba(159,232,112,0.8)",
      statBg: "rgba(159,232,112,0.08)",
      butterfly: "#9fe870",
    },
  }[variant];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        backgroundColor: styles.bg,
        borderRadius: 24,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Stage number */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 32,
        }}
      >
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 900,
            fontSize: 14,
            color: styles.eyebrow,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          0{index} · {day}
        </span>
      </div>

      {/* Butterfly visual */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 120,
          marginBottom: 28,
        }}
      >
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: variant === "dark" ? [0, 4, -2, 0] : [0, 2, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Butterfly size={butterflySize} color={styles.butterfly} animate />
        </motion.div>
      </div>

      {/* Stage label */}
      <p
        style={{
          margin: "0 0 8px 0",
          fontSize: 13,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: styles.eyebrow,
        }}
      >
        {stage}
      </p>

      {/* Title */}
      <h3
        style={{
          margin: "0 0 16px 0",
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 900,
          fontSize: 32,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: styles.text,
        }}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        style={{
          margin: "0 0 28px 0",
          fontSize: 15,
          lineHeight: 1.6,
          color: styles.subText,
          flex: 1,
        }}
      >
        {body}
      </p>

      {/* Mini stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              padding: "12px 14px",
              borderRadius: 14,
              backgroundColor: styles.statBg,
            }}
          >
            <p
              style={{
                margin: "0 0 2px 0",
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 900,
                fontSize: 22,
                lineHeight: 1,
                color: styles.text,
                letterSpacing: "-0.01em",
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 11,
                fontWeight: 500,
                color:
                  variant === "dark" ? "rgba(244,246,241,0.6)" : styles.subText,
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
