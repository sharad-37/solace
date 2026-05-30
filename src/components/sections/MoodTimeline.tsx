"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

// 14 days of mood data (1-5 scale)
const data = [
  { day: "M", mood: 3.2, label: "Mon" },
  { day: "T", mood: 2.8, label: "Tue" },
  { day: "W", mood: 3.5, label: "Wed" },
  { day: "T", mood: 3.9, label: "Thu" },
  { day: "F", mood: 4.2, label: "Fri" },
  { day: "S", mood: 4.4, label: "Sat" },
  { day: "S", mood: 3.8, label: "Sun" },
  { day: "M", mood: 3.6, label: "Mon" },
  { day: "T", mood: 4.0, label: "Tue" },
  { day: "W", mood: 4.3, label: "Wed" },
  { day: "T", mood: 4.1, label: "Thu" },
  { day: "F", mood: 4.5, label: "Fri" },
  { day: "S", mood: 4.7, label: "Sat" },
  { day: "S", mood: 4.6, label: "Sun" },
];

const W = 560; // viewBox width
const H = 200; // viewBox height
const PAD = 24;

export function MoodTimeline() {
  const maxMood = 5;
  const minMood = 1;
  const stepX = (W - PAD * 2) / (data.length - 1);

  const points = data.map((d, i) => {
    const x = PAD + i * stepX;
    const y =
      H - PAD - ((d.mood - minMood) / (maxMood - minMood)) * (H - PAD * 2);
    return { x, y, ...d };
  });

  // Smooth path using cubic bezier
  const path = points
    .map((p, i, arr) => {
      if (i === 0) return `M ${p.x},${p.y}`;
      const prev = arr[i - 1];
      const cx1 = prev.x + stepX / 2;
      const cx2 = p.x - stepX / 2;
      return `C ${cx1},${prev.y} ${cx2},${p.y} ${p.x},${p.y}`;
    })
    .join(" ");

  const areaPath = `${path} L ${points[points.length - 1].x},${H - PAD} L ${points[0].x},${H - PAD} Z`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: "var(--canvas)",
        borderRadius: 24,
        padding: 32,
        gridColumn: "span 2",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 28,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <p
            style={{
              margin: "0 0 6px 0",
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--mute)",
            }}
          >
            Mood Timeline
          </p>
          <h3
            style={{
              margin: 0,
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: 32,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
            }}
          >
            Last 14 days
          </h3>
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            borderRadius: 9999,
            backgroundColor: "var(--primary-pale)",
            color: "var(--positive-deep)",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <TrendingUp size={14} />
          +18% calmer
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          height="auto"
          style={{ display: "block" }}
        >
          {/* Horizontal grid lines */}
          {[0.25, 0.5, 0.75].map((t) => (
            <line
              key={t}
              x1={PAD}
              x2={W - PAD}
              y1={PAD + (H - PAD * 2) * t}
              y2={PAD + (H - PAD * 2) * t}
              stroke="rgba(14,15,12,0.06)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          ))}

          {/* Gradient area fill */}
          <defs>
            <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9fe870" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#9fe870" stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.path
            d={areaPath}
            fill="url(#moodGradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />

          {/* Line */}
          <motion.path
            d={path}
            fill="none"
            stroke="#0e0f0c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          {/* Dots */}
          {points.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i === points.length - 1 ? 6 : 3}
              fill={i === points.length - 1 ? "#9fe870" : "#0e0f0c"}
              stroke={i === points.length - 1 ? "#0e0f0c" : "transparent"}
              strokeWidth="2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.04 }}
            />
          ))}
        </svg>
      </div>

      {/* Day labels */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 16,
          paddingRight: 16,
          marginTop: 12,
        }}
      >
        {data.map((d, i) => (
          <span
            key={i}
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: i === data.length - 1 ? "var(--ink)" : "var(--mute)",
            }}
          >
            {d.day}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
