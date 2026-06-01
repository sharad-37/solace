/**
 * 🦋 Solace Butterfly — Brand Mark
 *
 * This component is the protected brand identity of Solace.
 * It is NOT licensed for derivative use.
 * Forking this file into a competing product is prohibited.
 *
 * See LICENSE at project root for complete terms.
 */
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButterflyProps {
  size?: number;
  className?: string;
  animate?: boolean;
  color?: string;
}

export function Butterfly({
  size = 32,
  className,
  animate = true,
  color = "#0e0f0c",
}: ButterflyProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block", className)}
      animate={animate ? { scale: [1, 1.04, 1] } : undefined}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: "center" }}
    >
      {/* Upper wings */}
      <path
        d="M32 30 C32 30 18 12 8 16 C2 19 4 30 14 32 C22 33 30 32 32 30Z"
        fill={color}
      />
      <path
        d="M32 30 C32 30 46 12 56 16 C62 19 60 30 50 32 C42 33 34 32 32 30Z"
        fill={color}
      />
      {/* Lower wings */}
      <path
        d="M32 34 C32 34 20 38 16 48 C13 55 22 56 28 50 C31 47 32 40 32 34Z"
        fill={color}
        opacity={0.75}
      />
      <path
        d="M32 34 C32 34 44 38 48 48 C51 55 42 56 36 50 C33 47 32 40 32 34Z"
        fill={color}
        opacity={0.75}
      />
      {/* Body */}
      <ellipse cx="32" cy="32" rx="2" ry="10" fill={color} />
    </motion.svg>
  );
}
