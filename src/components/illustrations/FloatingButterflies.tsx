"use client";

import { motion } from "framer-motion";
import { Butterfly } from "./Butterfly";

export function FloatingButterflies() {
  const items = [
    { top: "8%", left: "6%", size: 28, delay: 0, color: "#9fe870" },
    { top: "70%", left: "4%", size: 22, delay: 1.2, color: "#163300" },
    { top: "18%", left: "92%", size: 24, delay: 0.6, color: "#9fe870" },
    { top: "78%", left: "94%", size: 30, delay: 2, color: "#163300" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {items.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 0.6,
            y: [0, -18, 0],
            x: [0, 8, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: b.delay },
            y: {
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: b.delay,
            },
            x: {
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: b.delay,
            },
            rotate: {
              duration: 8 + i,
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
          <Butterfly size={b.size} color={b.color} animate={false} />
        </motion.div>
      ))}
    </div>
  );
}
