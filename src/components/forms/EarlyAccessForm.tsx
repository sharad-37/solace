"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { joinEarlyAccess } from "@/app/actions/early-access";

interface EarlyAccessFormProps {
  variant?: "dark" | "light";
}

export function EarlyAccessForm({ variant = "dark" }: EarlyAccessFormProps) {
  const [state, formAction, isPending] = useActionState(joinEarlyAccess, null);

  const isDark = variant === "dark";

  return (
    <div style={{ width: "100%", maxWidth: 520, margin: "0 auto" }}>
      <form
        action={formAction}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          aria-label="Your email address"
          required
          disabled={isPending || state?.ok}
          style={{
            flex: "1 1 240px",
            padding: "14px 20px",
            borderRadius: 24,
            border: isDark
              ? "1px solid rgba(244,246,241,0.18)"
              : "1px solid rgba(14,15,12,0.16)",
            backgroundColor: isDark
              ? "rgba(244,246,241,0.06)"
              : "var(--canvas)",
            color: isDark ? "#f4f6f1" : "var(--ink)",
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            outline: "none",
            minWidth: 0,
            opacity: isPending || state?.ok ? 0.6 : 1,
          }}
        />
        <motion.button
          type="submit"
          disabled={isPending || state?.ok}
          whileHover={!isPending && !state?.ok ? { y: -2 } : {}}
          whileTap={!isPending && !state?.ok ? { scale: 0.97 } : {}}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 28px",
            borderRadius: 24,
            border: "none",
            backgroundColor: state?.ok ? "#054d28" : "var(--primary)",
            color: state?.ok ? "#9fe870" : "var(--on-primary)",
            fontSize: 16,
            fontWeight: 600,
            cursor: isPending || state?.ok ? "default" : "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {state?.ok ? (
            <>
              <Check size={18} />
              You're in
            </>
          ) : isPending ? (
            <>
              <Loader2 size={18} className="spin" />
              Sending…
            </>
          ) : (
            <>
              Get Early Access
              <ArrowRight size={18} />
            </>
          )}
        </motion.button>
      </form>

      {/* Status message */}
      <AnimatePresence mode="wait">
        {state && (
          <motion.p
            key={state.message}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            style={{
              marginTop: 16,
              fontSize: 14,
              textAlign: "center",
              color: state.ok ? (isDark ? "#9fe870" : "#054d28") : "#d03238",
            }}
          >
            {state.message}
          </motion.p>
        )}
      </AnimatePresence>

      <style jsx>{`
        .spin {
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
