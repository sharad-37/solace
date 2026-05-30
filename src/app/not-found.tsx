"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Butterfly } from "@/components/illustrations/Butterfly";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--canvas-soft)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating butterflies */}
      {[
        { top: "12%", left: "10%", size: 24, delay: 0 },
        { top: "22%", left: "82%", size: 30, delay: 0.4 },
        { top: "72%", left: "8%", size: 22, delay: 0.8 },
        { top: "78%", left: "88%", size: 28, delay: 1.2 },
      ].map((b, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.5,
            y: [0, -18, 0],
            x: [0, 8, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: b.delay },
            y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 7 + i, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            top: b.top,
            left: b.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Butterfly size={b.size} color="#0e0f0c" animate={false} />
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--mute)",
            marginBottom: 24,
          }}
        >
          Page not found
        </p>

        <h1
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(80px, 16vw, 200px)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            color: "var(--ink)",
            margin: "0 0 24px 0",
          }}
        >
          404
        </h1>

        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(24px, 4vw, 40px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            marginBottom: 16,
            maxWidth: 520,
          }}
        >
          This page wandered off.
        </p>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.5,
            color: "var(--body)",
            marginBottom: 40,
            maxWidth: 480,
            margin: "0 auto 40px",
          }}
        >
          Let&apos;s bring you back to something quieter.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 28px",
              borderRadius: 24,
              backgroundColor: "var(--primary)",
              color: "var(--on-primary)",
              fontSize: 16,
              fontWeight: 600,
              transition: "transform 0.2s ease",
            }}
          >
            Return home
          </Link>
          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 28px",
              borderRadius: 24,
              backgroundColor: "var(--canvas)",
              color: "var(--ink)",
              border: "1px solid var(--ink)",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            About Solace
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
