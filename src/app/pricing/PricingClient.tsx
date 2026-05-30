"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Butterfly } from "@/components/illustrations/Butterfly";

const plans = [
  {
    name: "Quiet",
    price: "Free",
    sub: "Forever, no card required",
    description: "Everything you need to start a reflection practice.",
    cta: "Start free",
    variant: "sage" as const,
    features: [
      { text: "Daily mood check-ins", included: true },
      { text: "7-day mood history", included: true },
      { text: "Basic Aura conversations", included: true },
      { text: "1 voice journal per week", included: true },
      { text: "Unlimited voice journaling", included: false },
      { text: "Full mood pattern insights", included: false },
      { text: "Aura conversation memory", included: false },
    ],
  },
  {
    name: "Grow",
    price: "$6.99",
    priceSuffix: "/ month",
    sub: "or $59/year — save 30%",
    description: "For the practice that's becoming a rhythm.",
    cta: "Get Grow",
    variant: "dark" as const,
    badge: "Most popular",
    features: [
      { text: "Everything in Quiet", included: true },
      { text: "Unlimited voice journals", included: true },
      { text: "Full historical mood patterns", included: true },
      { text: "Aura remembers your themes", included: true },
      { text: "Weekly insight summaries", included: true },
      { text: "Export your journal anytime", included: true },
      { text: "Priority support", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Is my data private?",
    a: "Yes. Your reflections never train external AI models. All voice journals are end-to-end encrypted. You can export or delete everything at any time.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Of course. Cancel in one tap, no questions, no retention emails. If you cancel Grow, you keep access until the end of your billing period.",
  },
  {
    q: "Is Solace a therapy app?",
    a: "No. Solace is a reflection companion. Aura is gentle and warm but not a clinician, and we never claim to diagnose or treat anything. If you need professional support, please talk to a licensed therapist.",
  },
  {
    q: "What languages does Aura speak?",
    a: "English at launch. Spanish, French, German, and Hindi are in private testing for early 2026.",
  },
  {
    q: "Do you have a student discount?",
    a: "Yes — 50% off Grow with a valid .edu email. Just write to us after signing up.",
  },
];

export function PricingClient() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section
        style={{
          backgroundColor: "var(--canvas-soft)",
          paddingTop: 160,
          paddingBottom: 96,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--mute)",
              marginBottom: 24,
            }}
          >
            Pricing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(48px, 8vw, 104px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: 28,
              textWrap: "balance",
            }}
          >
            Start free.
            <br />
            <span style={{ color: "var(--ink-deep)" }}>Grow when ready.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: 20,
              lineHeight: 1.55,
              color: "var(--body)",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            One simple paid tier. The free plan is genuinely useful — not a
            teaser.
          </motion.p>
        </div>
      </section>

      {/* ═══════════ PLANS ═══════════ */}
      <section
        style={{
          backgroundColor: "var(--canvas)",
          paddingTop: 32,
          paddingBottom: 96,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1000,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div className="pricing-grid">
            {plans.map((plan, i) => {
              const isDark = plan.variant === "dark";
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{
                    backgroundColor: isDark ? "#0e0f0c" : "var(--canvas-soft)",
                    color: isDark ? "#f4f6f1" : "var(--ink)",
                    borderRadius: 24,
                    padding: 36,
                    position: "relative",
                  }}
                >
                  {plan.badge && (
                    <span
                      style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        padding: "5px 12px",
                        borderRadius: 9999,
                        backgroundColor: "var(--primary)",
                        color: "var(--on-primary)",
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}

                  <h2
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 900,
                      fontSize: 28,
                      letterSpacing: "-0.01em",
                      margin: "0 0 8px 0",
                      color: isDark ? "#9fe870" : "var(--ink)",
                    }}
                  >
                    {plan.name}
                  </h2>

                  <p
                    style={{
                      margin: "0 0 24px 0",
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: isDark ? "rgba(244,246,241,0.7)" : "var(--body)",
                    }}
                  >
                    {plan.description}
                  </p>

                  <div style={{ marginBottom: 24 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 6,
                        marginBottom: 4,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 900,
                          fontSize: 56,
                          lineHeight: 1,
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {plan.price}
                      </span>
                      {plan.priceSuffix && (
                        <span
                          style={{
                            fontSize: 16,
                            color: isDark
                              ? "rgba(244,246,241,0.6)"
                              : "var(--mute)",
                          }}
                        >
                          {plan.priceSuffix}
                        </span>
                      )}
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: isDark ? "rgba(244,246,241,0.6)" : "var(--mute)",
                      }}
                    >
                      {plan.sub}
                    </p>
                  </div>

                  <a
                    href="/#early-access"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "14px 24px",
                      borderRadius: 24,
                      backgroundColor: "var(--primary)",
                      color: "var(--on-primary)",
                      fontSize: 16,
                      fontWeight: 600,
                      marginBottom: 28,
                    }}
                  >
                    {plan.cta}
                  </a>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {plan.features.map((f) => (
                      <div
                        key={f.text}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          opacity: f.included ? 1 : 0.4,
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            width: 20,
                            height: 20,
                            borderRadius: 9999,
                            backgroundColor: f.included
                              ? isDark
                                ? "rgba(159,232,112,0.15)"
                                : "var(--primary-pale)"
                              : isDark
                                ? "rgba(244,246,241,0.08)"
                                : "rgba(14,15,12,0.06)",
                            color: f.included
                              ? isDark
                                ? "#9fe870"
                                : "#054d28"
                              : isDark
                                ? "rgba(244,246,241,0.4)"
                                : "var(--mute)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {f.included ? (
                            <Check size={12} strokeWidth={3} />
                          ) : (
                            <X size={12} />
                          )}
                        </span>
                        <span style={{ fontSize: 14, lineHeight: 1.4 }}>
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .pricing-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
          }
          @media (min-width: 768px) {
            .pricing-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
        `}</style>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section
        style={{
          backgroundColor: "var(--canvas-soft)",
          paddingTop: 96,
          paddingBottom: 120,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <Butterfly size={48} color="#0e0f0c" animate />
            <h2
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(32px, 5vw, 56px)",
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                margin: "20px 0 0 0",
              }}
            >
              Questions, gently answered.
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  backgroundColor: "var(--canvas)",
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <summary
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "var(--ink)",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {faq.q}
                  <span style={{ fontSize: 22, color: "var(--mute)" }}>+</span>
                </summary>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--body)",
                    margin: "12px 0 0 0",
                  }}
                >
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
