"use client";

import { motion } from "framer-motion";
import { Coffee, Moon, Users } from "lucide-react";

const insights = [
  {
    icon: Coffee,
    bg: "#e2f6d5",
    iconColor: "#054d28",
    eyebrow: "Pattern",
    title: "Mornings lift you",
    body: "Your check-ins between 7–10 AM trend 32% more positive than evenings.",
  },
  {
    icon: Users,
    bg: "#ffc091",
    iconColor: "#4a3b1c",
    eyebrow: "Trigger",
    title: "Sundays feel heavier",
    body: "Reflective and low moods cluster on Sunday afternoons. Worth noticing.",
  },
  {
    icon: Moon,
    bg: "#38c8ff",
    iconColor: "#0e0f0c",
    eyebrow: "Streak",
    title: "12 days of clarity",
    body: "You've shown up every day this fortnight. Consistency is the real win.",
  },
];

export function PatternInsights() {
  return (
    <>
      {insights.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: 0.2 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              backgroundColor: "var(--canvas)",
              borderRadius: 24,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 14,
                backgroundColor: item.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.iconColor,
              }}
            >
              <Icon size={20} strokeWidth={2} />
            </div>

            <div>
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
                {item.eyebrow}
              </p>
              <h4
                style={{
                  margin: "0 0 8px 0",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 900,
                  fontSize: 22,
                  lineHeight: 1.15,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "var(--body)",
                }}
              >
                {item.body}
              </p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
