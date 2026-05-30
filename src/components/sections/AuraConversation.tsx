"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { Butterfly } from "@/components/illustrations/Butterfly";

interface Message {
  from: "aura" | "user";
  text: string;
}

const script: Message[] = [
  { from: "aura", text: "Hi — how was today?" },
  { from: "user", text: "Honestly, a bit overwhelming." },
  { from: "aura", text: "I hear you. What part of the day felt heaviest?" },
  { from: "user", text: "Back-to-back meetings. No space to think." },
  {
    from: "aura",
    text: "That's a lot to hold. What's one small thing that grounded you?",
  },
];

export function AuraConversation() {
  const [visible, setVisible] = useState<number>(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (visible >= script.length) return;
    const next = script[visible];
    if (next.from === "aura") {
      setTyping(true);
      const t1 = setTimeout(() => {
        setTyping(false);
        setVisible((v) => v + 1);
      }, 1600);
      return () => clearTimeout(t1);
    } else {
      const t2 = setTimeout(() => setVisible((v) => v + 1), 1400);
      return () => clearTimeout(t2);
    }
  }, [visible]);

  // Reset loop every 12s
  useEffect(() => {
    if (visible >= script.length) {
      const t = setTimeout(() => setVisible(1), 4000);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 460,
      }}
    >
      {/* Glow behind card */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -30,
          background:
            "radial-gradient(circle at 50% 50%, rgba(159,232,112,0.18) 0%, rgba(159,232,112,0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          // ⬇ Pinned to a real surface color — works in both themes
          //    (in light mode this is white; in dark mode it sits as a slightly elevated dark card)
          backgroundColor: "var(--canvas)",
          color: "var(--ink)",
          borderRadius: 24,
          padding: 24,
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 16,
            marginBottom: 16,
            // ⬇ Theme-aware divider via CSS variable
            borderBottom: "1px solid var(--border-light, rgba(14,15,12,0.08))",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 9999,
                // Lime-pale stays as a brand token — looks intentional in both themes
                backgroundColor: "#e2f6d5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Butterfly size={22} color="#054d28" animate />
            </div>
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                }}
              >
                Aura
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: "var(--mute)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 9999,
                    backgroundColor: "#2ead4b",
                    display: "inline-block",
                  }}
                />
                Listening
              </p>
            </div>
          </div>
          <span style={{ fontSize: 12, color: "var(--mute)" }}>
            Today · 9:14 PM
          </span>
        </div>

        {/* Messages */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minHeight: 280,
            maxHeight: 320,
            overflow: "hidden",
            paddingBottom: 8,
          }}
        >
          <AnimatePresence initial={false}>
            {script.slice(0, visible).map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.from === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius: 16,
                    fontSize: 14,
                    lineHeight: 1.45,
                    // ⬇ Aura bubbles: subtle surface that reads in both themes
                    //    User bubbles: always brand near-black with light text (consistent chat pattern)
                    backgroundColor:
                      msg.from === "user"
                        ? "#0e0f0c"
                        : "var(--bubble-aura, rgba(14,15,12,0.06))",
                    color: msg.from === "user" ? "#f4f6f1" : "var(--ink)",
                    borderTopRightRadius: msg.from === "user" ? 4 : 16,
                    borderTopLeftRadius: msg.from === "user" ? 16 : 4,
                  }}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: 16,
                    borderTopLeftRadius: 4,
                    backgroundColor: "var(--bubble-aura, rgba(14,15,12,0.06))",
                    display: "flex",
                    gap: 4,
                  }}
                >
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: d * 0.15,
                      }}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 9999,
                        backgroundColor: "var(--mute)",
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            borderRadius: 16,
            // ⬇ Theme-aware input border
            border: "1px solid var(--border-light, rgba(14,15,12,0.12))",
            marginTop: 8,
          }}
        >
          <span style={{ flex: 1, fontSize: 14, color: "var(--mute)" }}>
            Type or tap mic to speak…
          </span>
          <button
            style={{
              width: 36,
              height: 36,
              borderRadius: 9999,
              border: "none",
              backgroundColor: "var(--primary)",
              color: "var(--on-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Send"
          >
            <Send size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
