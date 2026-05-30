"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, Pause, X } from "lucide-react";

export function VoiceRecorder() {
  const [seconds, setSeconds] = useState(47);
  const [bars, setBars] = useState<number[]>(
    Array.from({ length: 40 }, () => Math.random() * 0.6 + 0.2),
  );

  // Simulate live recording — bars regenerate
  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) => {
        const next = [...prev.slice(1), Math.random() * 0.8 + 0.2];
        return next;
      });
      setSeconds((s) => s + 1);
    }, 220);
    return () => clearInterval(interval);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        backgroundColor: "var(--canvas-soft)",
        borderRadius: 24,
        padding: 32,
        width: "100%",
        maxWidth: 460,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 32,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <motion.span
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: "#d03238",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--ink)",
              letterSpacing: "0.02em",
            }}
          >
            Recording
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: "var(--ink)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {mm}:{ss}
        </span>
      </div>

      {/* Waveform */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          height: 100,
          marginBottom: 36,
        }}
      >
        {bars.map((h, i) => (
          <motion.div
            key={`${i}-${h}`}
            initial={{ scaleY: 0.3 }}
            animate={{ scaleY: h }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              width: 4,
              height: "100%",
              borderRadius: 9999,
              backgroundColor:
                i > bars.length - 12 ? "#0e0f0c" : "rgba(14,15,12,0.35)",
              transformOrigin: "center",
            }}
          />
        ))}
      </div>

      {/* Live transcription preview */}
      <div
        style={{
          padding: 16,
          borderRadius: 16,
          backgroundColor: "var(--canvas)",
          marginBottom: 24,
          minHeight: 72,
        }}
      >
        <p
          style={{
            margin: "0 0 6px 0",
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--mute)",
          }}
        >
          Live transcript
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.5,
            color: "var(--ink)",
          }}
        >
          &ldquo;Today actually went better than I expected. The morning was
          rough but&nbsp;
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{
              display: "inline-block",
              width: 8,
              height: 16,
              backgroundColor: "var(--ink)",
              verticalAlign: "text-bottom",
            }}
          />
        </p>
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <motion.button
          whileTap={{ scale: 0.94 }}
          style={{
            width: 48,
            height: 48,
            borderRadius: 9999,
            border: "1px solid rgba(14,15,12,0.15)",
            backgroundColor: "var(--canvas)",
            color: "var(--ink)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          aria-label="Cancel"
        >
          <X size={18} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.04 }}
          style={{
            width: 72,
            height: 72,
            borderRadius: 9999,
            border: "none",
            backgroundColor: "var(--primary)",
            color: "var(--on-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(159,232,112,0.4)",
          }}
          aria-label="Pause"
        >
          <Pause size={28} fill="currentColor" />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.94 }}
          style={{
            width: 48,
            height: 48,
            borderRadius: 9999,
            border: "1px solid rgba(14,15,12,0.15)",
            backgroundColor: "var(--canvas)",
            color: "var(--ink)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          aria-label="Mic settings"
        >
          <Mic size={18} />
        </motion.button>
      </div>
    </motion.div>
  );
}
