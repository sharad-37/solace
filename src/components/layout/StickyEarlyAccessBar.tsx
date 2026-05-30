"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Butterfly } from "@/components/illustrations/Butterfly";

export function StickyEarlyAccessBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check sessionStorage so dismissal persists per browsing session
    if (typeof window !== "undefined") {
      const wasDismissed = sessionStorage.getItem("solace_bar_dismissed");
      if (wasDismissed) setDismissed(true);
    }

    const onScroll = () => {
      // Show after user scrolls past 80% of viewport height
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("solace_bar_dismissed", "1");
  };

  const shouldShow = visible && !dismissed;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          style={{
            position: "fixed",
            bottom: 16,
            left: 16,
            right: 16,
            zIndex: 40,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              pointerEvents: "auto",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 14px 12px 20px",
              borderRadius: 9999,
              backgroundColor: "#0e0f0c",
              color: "#f4f6f1",
              boxShadow: "0 12px 40px rgba(14,15,12,0.25)",
              maxWidth: "100%",
            }}
            className="sticky-bar-inner"
          >
            {/* Butterfly + message */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                minWidth: 0,
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <Butterfly size={22} color="#9fe870" animate />
              </div>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(244,246,241,0.85)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                className="sticky-bar-message"
              >
                Like what you see?
              </span>
            </div>

            {/* CTA */}
            <a
              href="/#early-access"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 18px",
                borderRadius: 9999,
                backgroundColor: "#9fe870",
                color: "#0e0f0c",
                fontSize: 14,
                fontWeight: 600,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Get Early Access
              <ArrowRight size={14} />
            </a>

            {/* Dismiss */}
            <button
              onClick={handleDismiss}
              aria-label="Dismiss"
              style={{
                width: 32,
                height: 32,
                borderRadius: 9999,
                border: "none",
                backgroundColor: "transparent",
                color: "rgba(244,246,241,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#f4f6f1";
                e.currentTarget.style.backgroundColor =
                  "rgba(244,246,241,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(244,246,241,0.5)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <X size={16} />
            </button>
          </div>

          <style jsx>{`
            @media (max-width: 480px) {
              .sticky-bar-message {
                display: none;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
