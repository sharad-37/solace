// Design tokens mapped from your design.md
// This file is the single source of truth for all design decisions

export const tokens = {
  colors: {
    // Backgrounds
    background: {
      light: "#F2F5F0", // Sage canvas
      dark: "#111411", // Deep charcoal-sage
    },
    surface: {
      light: "#FFFFFF",
      dark: "#1C1E1B",
    },
    surfaceElevated: {
      light: "#FAFAF7",
      dark: "#242624",
    },

    // Brand
    primary: "#5c8a5c", // Sage green
    accent: "#C8F65A", // Lime CTA
    accentHover: "#b8e84a",

    // Text
    textPrimary: {
      light: "#1a1a1a",
      dark: "#F0F2EE",
    },
    textSecondary: {
      light: "#6b7280",
      dark: "#9CA3AF",
    },
    textMuted: {
      light: "#9ca3af",
      dark: "#6B7280",
    },
  },

  typography: {
    fontDisplay: "var(--font-display)",
    fontBody: "var(--font-body)",

    scale: {
      hero: "clamp(3rem, 8vw, 7rem)",
      h1: "clamp(2.5rem, 6vw, 5.5rem)",
      h2: "clamp(2rem, 4vw, 4rem)",
      h3: "clamp(1.5rem, 3vw, 2.75rem)",
      h4: "1.5rem",
      body: "1rem",
      small: "0.875rem",
      xs: "0.75rem",
    },
  },

  spacing: {
    sectionY: "8rem",
    containerX: "1.5rem",
    cardPadding: "2rem",
  },

  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "1.75rem",
    card: "1.5rem", // 24px — your spec
    pill: "9999px",
  },

  motion: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
    spring: { type: "spring", stiffness: 100, damping: 20 },
  },
} as const;
