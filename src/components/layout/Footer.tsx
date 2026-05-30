"use client";

import { motion } from "framer-motion";
import { Butterfly } from "@/components/illustrations/Butterfly";

const linkGroups = [
  {
    label: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Aura", href: "#aura" },
      { label: "Voice Journal", href: "#voice-journal" },
      { label: "Mood Tracking", href: "#features" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Stories", href: "#stories" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Help center", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0e0f0c",
        color: "rgba(244,246,241,0.75)",
        paddingTop: 80,
        paddingBottom: 40,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle butterfly accent */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 60,
          right: 60,
          opacity: 0.15,
        }}
      >
        <Butterfly size={80} color="#9fe870" animate={false} />
      </motion.div>

      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Top grid: brand + link groups ── */}
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <Butterfly size={32} color="#9fe870" animate />
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 900,
                  fontSize: 22,
                  color: "#f4f6f1",
                  letterSpacing: "-0.02em",
                }}
              >
                Solace
              </span>
            </div>

            <p
              style={{
                margin: "0 0 24px 0",
                fontSize: 14,
                lineHeight: 1.6,
                color: "rgba(244,246,241,0.6)",
                maxWidth: 280,
              }}
            >
              Small reflections. Meaningful growth. A gentle AI companion for
              the inner weather of everyday life.
            </p>

            {/* Social */}
            {/* Social */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { label: "X", name: "Twitter / X" },
                { label: "IG", name: "Instagram" },
                { label: "TT", name: "TikTok" },
                { label: "YT", name: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={`Follow Solace on ${s.name}`}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9999,
                    border: "1px solid rgba(244,246,241,0.15)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "rgba(244,246,241,0.7)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(159,232,112,0.1)";
                    e.currentTarget.style.borderColor = "rgba(159,232,112,0.4)";
                    e.currentTarget.style.color = "#9fe870";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor =
                      "rgba(244,246,241,0.15)";
                    e.currentTarget.style.color = "rgba(244,246,241,0.7)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.label}>
              <p
                style={{
                  margin: "0 0 16px 0",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(244,246,241,0.45)",
                }}
              >
                {group.label}
              </p>
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
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: 14,
                        color: "rgba(244,246,241,0.7)",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#9fe870")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(244,246,241,0.7)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom row ── */}
        <div
          style={{
            marginTop: 64,
            paddingTop: 32,
            borderTop: "1px solid rgba(244,246,241,0.08)",
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "rgba(244,246,241,0.45)",
            }}
          >
            © {new Date().getFullYear()} Solace Wellness, Inc. Made with care.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {["Privacy", "Terms", "Cookies", "Accessibility"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontSize: 13,
                  color: "rgba(244,246,241,0.45)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#9fe870")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(244,246,241,0.45)")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.6fr 1fr 1fr 1fr;
            gap: 64px;
          }
        }
      `}</style>
    </footer>
  );
}
