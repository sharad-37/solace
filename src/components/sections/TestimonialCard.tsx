"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  initial: string;
  bg: string;
  variant?: "default" | "feature" | "dark";
  delay?: number;
}

export function TestimonialCard({
  quote,
  name,
  role,
  initial,
  bg,
  variant = "default",
  delay = 0,
}: TestimonialCardProps) {
  const styles = {
    default: {
      cardBg: "var(--canvas-soft)",
      text: "var(--ink)",
      sub: "var(--body)",
      quoteColor: "rgba(14,15,12,0.12)",
    },
    feature: {
      cardBg: "var(--primary-pale)",
      text: "var(--ink)",
      sub: "var(--body)",
      quoteColor: "rgba(5,77,40,0.18)",
    },
    dark: {
      cardBg: "#0e0f0c",
      text: "#9fe870",
      sub: "rgba(244,246,241,0.75)",
      quoteColor: "rgba(159,232,112,0.25)",
    },
  }[variant];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: styles.cardBg,
        borderRadius: 24,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        margin: 0,
        position: "relative",
      }}
    >
      {/* Quote icon */}
      <Quote
        size={28}
        style={{
          color: styles.quoteColor,
          marginBottom: 16,
          flexShrink: 0,
        }}
        strokeWidth={2}
      />

      {/* Quote text */}
      <blockquote
        style={{
          margin: "0 0 28px 0",
          fontFamily: "'Manrope', sans-serif",
          fontWeight: variant === "dark" ? 700 : 600,
          fontSize: variant === "dark" ? 22 : 18,
          lineHeight: 1.45,
          letterSpacing: "-0.01em",
          color: styles.text,
          flex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <figcaption
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: "auto",
        }}
      >
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 9999,
            backgroundColor: bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 900,
            fontSize: 15,
            color: "#0e0f0c",
            flexShrink: 0,
          }}
        >
          {initial}
        </div>
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              fontWeight: 700,
              color: styles.text,
              lineHeight: 1.2,
            }}
          >
            {name}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: styles.sub,
              lineHeight: 1.3,
            }}
          >
            {role}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
