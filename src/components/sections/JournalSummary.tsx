"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Butterfly } from "@/components/illustrations/Butterfly";

const themes = [
  { label: "Work stress", color: "#ffc091" },
  { label: "Small wins", color: "#9fe870" },
  { label: "Self-compassion", color: "#38c8ff" },
];

export function JournalSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: "var(--canvas)",
        border: "1px solid rgba(14,15,12,0.08)",
        borderRadius: 24,
        padding: 24,
        width: "100%",
        maxWidth: 380,
        boxShadow: "0 12px 40px rgba(14,15,12,0.08)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 9999,
            backgroundColor: "#e2f6d5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Butterfly size={18} color="#054d28" animate />
        </div>
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 700,
              color: "var(--ink)",
              lineHeight: 1.2,
            }}
          >
            Aura summarised this for you
          </p>
          <p style={{ margin: 0, fontSize: 11, color: "var(--mute)" }}>
            Just now · 1:42 entry
          </p>
        </div>
      </div>

      {/* Summary text */}
      <p
        style={{
          margin: "0 0 16px 0",
          fontSize: 15,
          lineHeight: 1.55,
          color: "var(--ink)",
        }}
      >
        You started overwhelmed but found steadiness after a walk. You noticed
        you&rsquo;re kinder to yourself this week.
      </p>

      {/* Themes */}
      <div style={{ marginBottom: 16 }}>
        <p
          style={{
            margin: "0 0 8px 0",
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--mute)",
          }}
        >
          Themes
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {themes.map((t) => (
            <span
              key={t.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 11px",
                borderRadius: 9999,
                backgroundColor: t.color,
                color: "var(--ink)",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Reflection prompt */}
      <div
        style={{
          padding: 14,
          borderRadius: 14,
          backgroundColor: "var(--canvas-soft)",
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        }}
      >
        <Sparkles
          size={16}
          style={{ color: "#054d28", marginTop: 2, flexShrink: 0 }}
        />
        <p
          style={{
            margin: 0,
            fontSize: 13,
            lineHeight: 1.5,
            color: "var(--ink)",
          }}
        >
          <strong>A gentle question:</strong> what helped you reset today?
        </p>
      </div>
    </motion.div>
  );
}
