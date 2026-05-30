"use client";

import { motion } from "framer-motion";
import { Send, Mic, TrendingUp, Plus } from "lucide-react";
import { Butterfly } from "@/components/illustrations/Butterfly";

/* ────────── Screen 1 — Aura Chat ────────── */
export function ScreenAuraChat() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 10,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          paddingBottom: 12,
          borderBottom: "1px solid rgba(14,15,12,0.06)",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 9999,
            backgroundColor: "#e2f6d5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Butterfly size={20} color="#054d28" animate />
        </div>
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 700,
              color: "#0e0f0c",
            }}
          >
            Aura
          </p>
          <p style={{ margin: 0, fontSize: 10, color: "#868685" }}>
            Always here
          </p>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}
      >
        <div style={{ alignSelf: "flex-start", maxWidth: "80%" }}>
          <div
            style={{
              padding: "8px 12px",
              borderRadius: 14,
              borderTopLeftRadius: 4,
              backgroundColor: "#f1f3ee",
              fontSize: 12,
              lineHeight: 1.4,
              color: "#0e0f0c",
            }}
          >
            How was today?
          </div>
        </div>
        <div style={{ alignSelf: "flex-end", maxWidth: "80%" }}>
          <div
            style={{
              padding: "8px 12px",
              borderRadius: 14,
              borderTopRightRadius: 4,
              backgroundColor: "#0e0f0c",
              fontSize: 12,
              lineHeight: 1.4,
              color: "#f4f6f1",
            }}
          >
            Calmer than yesterday.
          </div>
        </div>
        <div style={{ alignSelf: "flex-start", maxWidth: "85%" }}>
          <div
            style={{
              padding: "8px 12px",
              borderRadius: 14,
              borderTopLeftRadius: 4,
              backgroundColor: "#f1f3ee",
              fontSize: 12,
              lineHeight: 1.4,
              color: "#0e0f0c",
            }}
          >
            What made the difference?
          </div>
        </div>
        <div style={{ alignSelf: "flex-end", maxWidth: "85%" }}>
          <div
            style={{
              padding: "8px 12px",
              borderRadius: 14,
              borderTopRightRadius: 4,
              backgroundColor: "#0e0f0c",
              fontSize: 12,
              lineHeight: 1.4,
              color: "#f4f6f1",
            }}
          >
            A walk before work. No phone.
          </div>
        </div>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          style={{ alignSelf: "flex-start" }}
        >
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              borderTopLeftRadius: 4,
              backgroundColor: "#f1f3ee",
              display: "flex",
              gap: 3,
            }}
          >
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: 9999,
                  backgroundColor: "#868685",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Input */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 10px",
          borderRadius: 14,
          border: "1px solid rgba(14,15,12,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <span style={{ flex: 1, fontSize: 11, color: "#868685" }}>Reply…</span>
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: 9999,
            backgroundColor: "#9fe870",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Send size={12} color="#0e0f0c" />
        </div>
      </div>
    </div>
  );
}

/* ────────── Screen 2 — Mood Dashboard ────────── */
/* ────────── Screen 2 — Mood Dashboard ────────── */
export function ScreenMoodDashboard() {
  const bars = [40, 55, 38, 62, 70, 80, 88];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 10,
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            fontSize: 9,
            fontWeight: 600,
            color: "#868685",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          This week
        </p>
        <h4
          style={{
            margin: "2px 0 0 0",
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 900,
            fontSize: 20,
            color: "#0e0f0c",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Trending up
        </h4>
      </div>

      {/* Bar chart */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          padding: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginBottom: 10,
          }}
        >
          <TrendingUp size={11} color="#054d28" />
          <span style={{ fontSize: 9, fontWeight: 600, color: "#054d28" }}>
            +18% calm
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 5,
            height: 90,
          }}
        >
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                height: "100%",
                justifyContent: "flex-end",
              }}
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                style={{
                  width: "100%",
                  minHeight: 4,
                  borderRadius: 3,
                  backgroundColor:
                    i === bars.length - 1 ? "#9fe870" : "rgba(14,15,12,0.2)",
                }}
              />
              <span style={{ fontSize: 8, color: "#868685", lineHeight: 1 }}>
                {days[i]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mood mix */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          padding: 12,
          flex: 1,
        }}
      >
        <p
          style={{
            margin: "0 0 8px 0",
            fontSize: 10,
            fontWeight: 700,
            color: "#0e0f0c",
          }}
        >
          Mood mix
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {[
            { l: "Calm", c: "#9fe870", w: 80 },
            { l: "Content", c: "#cdffad", w: 60 },
            { l: "Reflective", c: "#ffc091", w: 35 },
          ].map((m, idx) => (
            <div key={m.l}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <span
                  style={{ fontSize: 9, fontWeight: 600, color: "#0e0f0c" }}
                >
                  {m.l}
                </span>
              </div>
              <div
                style={{
                  height: 5,
                  borderRadius: 9999,
                  backgroundColor: "rgba(14,15,12,0.06)",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.w}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                  style={{
                    height: "100%",
                    backgroundColor: m.c,
                    borderRadius: 9999,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
/* ────────── Screen 3 — Voice Journal ────────── */
export function ScreenVoiceJournal() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 12,
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            fontSize: 10,
            fontWeight: 600,
            color: "#868685",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Today
        </p>
        <h4
          style={{
            margin: "2px 0 0 0",
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 900,
            fontSize: 22,
            color: "#0e0f0c",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Voice entries
        </h4>
      </div>

      {/* Entry cards */}
      {[
        { time: "9:14 PM", dur: "1:42", topic: "End of day" },
        { time: "1:08 PM", dur: "0:38", topic: "Quick reset" },
        { time: "7:22 AM", dur: "2:10", topic: "Morning thoughts" },
      ].map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          style={{
            backgroundColor: "#fff",
            borderRadius: 14,
            padding: 12,
            display: "flex",
            alignItems: "center",
            gap: 10,
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
              flexShrink: 0,
            }}
          >
            <Mic size={14} color="#054d28" />
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 700,
                color: "#0e0f0c",
              }}
            >
              {e.topic}
            </p>
            <p style={{ margin: 0, fontSize: 10, color: "#868685" }}>
              {e.time} · {e.dur}
            </p>
          </div>
          {/* Mini waveform */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {[3, 5, 7, 4, 6].map((h, j) => (
              <span
                key={j}
                style={{
                  width: 2,
                  height: h * 2,
                  borderRadius: 9999,
                  backgroundColor: "rgba(14,15,12,0.4)",
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* New entry FAB */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 52,
            height: 52,
            borderRadius: 9999,
            backgroundColor: "#9fe870",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 16px rgba(159,232,112,0.4)",
          }}
        >
          <Plus size={22} color="#0e0f0c" strokeWidth={2.5} />
        </motion.div>
      </div>
    </div>
  );
}
