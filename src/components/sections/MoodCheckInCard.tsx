"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface Mood {
  emoji: string;
  label: string;
  color: string;
}

const moods: Mood[] = [
  { emoji: "😌", label: "Calm", color: "#e2f6d5" },
  { emoji: "😊", label: "Content", color: "#cdffad" },
  { emoji: "🤔", label: "Reflective", color: "#ffc091" },
  { emoji: "😔", label: "Low", color: "#c0c2bd" },
  { emoji: "✨", label: "Inspired", color: "#9fe870" },
];

export function MoodCheckInCard() {
  const [selected, setSelected] = useState<number | null>(1);
  const [note, setNote] = useState("Today felt steady. A small win at work.");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: "var(--canvas)",
        color: "var(--ink)",
        border: "1px solid var(--ink)",
        borderRadius: 24,
        padding: 24,
        width: "100%",
        maxWidth: 440,
        boxShadow: "0 1px 0 rgba(14,15,12,1)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
            <Sparkles size={16} style={{ color: "#054d28" }} />
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>
            Daily Check-in
          </span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 500, color: "var(--mute)" }}>
          2 min
        </span>
      </div>

      {/* Question */}
      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 900,
          fontSize: 28,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--ink)",
          marginBottom: 20,
        }}
      >
        How are you
        <br />
        feeling today?
      </p>

      {/* Mood chips */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}
      >
        {moods.map((mood, i) => {
          const isActive = selected === i;
          return (
            <motion.button
              key={mood.label}
              onClick={() => setSelected(i)}
              aria-pressed={isActive}
              aria-label={`Select mood: ${mood.label}`}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 14px",
                borderRadius: 9999,
                border: `1px solid ${isActive ? "var(--ink)" : "rgba(14,15,12,0.12)"}`,
                backgroundColor: isActive ? mood.color : "var(--canvas)",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--ink)",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: 16 }}>{mood.emoji}</span>
              {mood.label}
            </motion.button>
          );
        })}
      </div>

      {/* Reflection input */}
      <div style={{ marginBottom: 20 }}>
        <label
          style={{
            display: "block",
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--mute)",
            marginBottom: 8,
          }}
        >
          One small reflection
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={2}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid rgba(14,15,12,0.16)",
            backgroundColor: "var(--canvas)",
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            lineHeight: 1.5,
            color: "var(--ink)",
            resize: "none",
            outline: "none",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--ink)")}
          onBlur={(e) =>
            (e.currentTarget.style.borderColor = "rgba(14,15,12,0.16)")
          }
        />
      </div>

      {/* Aura insight badge */}
      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: 12,
              borderRadius: 12,
              backgroundColor: "#e2f6d5",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                marginTop: 8,
                borderRadius: 9999,
                backgroundColor: "#054d28",
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.5,
                color: "#054d28",
                margin: 0,
              }}
            >
              <strong>Aura noticed: </strong>
              You've felt {moods[selected].label.toLowerCase()} 3 of the past 7
              days.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Save button */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        style={{
          width: "100%",
          padding: "14px 24px",
          borderRadius: 24,
          border: "none",
          backgroundColor: "var(--primary)",
          color: "var(--on-primary)",
          fontSize: 16,
          fontWeight: 600,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          cursor: "pointer",
          transition: "background-color 0.2s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--primary-active)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--primary)")
        }
      >
        Save reflection
        <ArrowRight size={18} />
      </motion.button>
    </motion.div>
  );
}
