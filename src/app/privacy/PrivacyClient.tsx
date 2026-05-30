"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "1. What we collect",
    body: [
      "Your email address (when you sign up for early access).",
      "Your daily check-ins, mood tags, written and voice reflections (only when you create them).",
      "Basic device + browser metadata for security and improving the product (e.g., crash logs, region, browser type).",
      "We do not collect: precise location, contacts, social media, advertising IDs, or anything else you didn't explicitly share with us.",
    ],
  },
  {
    title: "2. How we use it",
    body: [
      "To deliver Solace to you — show your history, generate insights, run Aura conversations.",
      "To send you product updates and beta-access invites (you can unsubscribe in one tap).",
      "To investigate bugs and improve performance.",
      "We do not sell your data. We do not show ads. We do not share with third-party marketers.",
    ],
  },
  {
    title: "3. AI and your reflections",
    body: [
      "Your reflections are processed by our AI partners (currently OpenAI) to power Aura.",
      "Per our agreement, these providers do not train their models on your data.",
      "When you delete a reflection, it is removed from our active systems within 30 days and from backups within 90 days.",
      "Voice journals are transcribed and then the raw audio is discarded within 7 days unless you specifically save it.",
    ],
  },
  {
    title: "4. Security",
    body: [
      "All data in transit is encrypted via TLS 1.3.",
      "All data at rest is encrypted with AES-256.",
      "Voice journal audio is additionally end-to-end encrypted using keys we cannot read.",
      "We follow OWASP best practices and run regular third-party security reviews.",
    ],
  },
  {
    title: "5. Your rights",
    body: [
      "Export everything in one tap (JSON + audio files).",
      "Delete your account and all associated data in one tap. Confirmation only — no win-back emails.",
      "Request a list of all data we hold about you — we'll send it within 30 days.",
      "If you're in the EU/UK, you have full GDPR rights. If you're in California, you have full CCPA rights. Email privacy@solace.app to exercise them.",
    ],
  },
  {
    title: "6. Children",
    body: [
      "Solace is not for users under 13. If we learn we've collected data from someone under 13, we will delete it.",
    ],
  },
  {
    title: "7. Changes",
    body: [
      "If we make material changes to this policy, we'll email you at least 14 days before they take effect.",
      "For minor edits (typo fixes, clarifications), we'll update the 'last updated' date at the bottom of this page.",
    ],
  },
  {
    title: "8. Contact",
    body: [
      "For privacy questions: privacy@solace.app",
      "For everything else: hello@solace.app",
      "We respond within 2 business days.",
    ],
  },
];

export function PrivacyClient() {
  return (
    <>
      <section
        style={{
          backgroundColor: "var(--canvas-soft)",
          paddingTop: 160,
          paddingBottom: 80,
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
            Privacy Policy
          </p>

          <h1
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: 24,
            }}
          >
            Plain language.
            <br />
            No tricks.
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--body)",
            }}
          >
            Most privacy policies are designed to confuse. Ours is designed to
            be read. If anything below isn't clear, email us — we'll fix it.
          </p>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "var(--canvas)",
          paddingTop: 64,
          paddingBottom: 96,
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
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{ marginBottom: 48 }}
            >
              <h2
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 900,
                  fontSize: 24,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  margin: "0 0 16px 0",
                }}
              >
                {s.title}
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {s.body.map((line, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "var(--body)",
                      paddingLeft: 20,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 11,
                        width: 6,
                        height: 6,
                        borderRadius: 9999,
                        backgroundColor: "#9fe870",
                      }}
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <p
            style={{
              fontSize: 13,
              color: "var(--mute)",
              marginTop: 56,
              paddingTop: 24,
              borderTop: "1px solid rgba(14,15,12,0.08)",
            }}
          >
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>
    </>
  );
}
