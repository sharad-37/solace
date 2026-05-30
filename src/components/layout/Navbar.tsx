"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Butterfly } from "@/components/illustrations/Butterfly";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Aura", href: "/#aura" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const checkSize = () => setIsDesktop(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const iconColor = mounted && theme === "dark" ? "#f4f6f1" : "#0e0f0c";

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? "12px 0" : "20px 0",
          backgroundColor: "var(--canvas-soft)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-light, rgba(14,15,12,0.08))"
            : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* ── Logo ── */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <Butterfly size={32} animate color={iconColor} />
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 900,
                fontSize: "22px",
                letterSpacing: "-0.02em",
                color: "var(--ink)",
              }}
            >
              Solace
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          {isDesktop && (
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--ink)",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(14,15,12,0.06)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* ── Right Actions ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "9999px",
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ink)",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(14,15,12,0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            )}

            {/* Primary CTA */}
            {isDesktop && (
              <a
                href="#early-access"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "12px 24px",
                  borderRadius: "24px",
                  fontSize: "16px",
                  fontWeight: 600,
                  backgroundColor: "#9fe870",
                  color: "#0e0f0c",
                  transition: "transform 0.2s ease, background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#cdffad";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#9fe870";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get Early Access
              </a>
            )}

            {/* Mobile Toggle */}
            {!isDesktop && (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "9999px",
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--ink)",
                }}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backgroundColor: "var(--canvas-soft)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              paddingTop: 80,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  width: "100%",
                  maxWidth: 320,
                  textAlign: "center",
                  padding: "16px 24px",
                  borderRadius: 24,
                  fontSize: 22,
                  fontWeight: 600,
                  color: "var(--ink)",
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#early-access"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                marginTop: 16,
                width: "100%",
                maxWidth: 320,
                textAlign: "center",
                padding: "16px 24px",
                borderRadius: 24,
                fontSize: 16,
                fontWeight: 600,
                backgroundColor: "#9fe870",
                color: "#0e0f0c",
              }}
            >
              Get Early Access
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
