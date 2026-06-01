<div align="center">

<img src="https://solace-gray-mu.vercel.app/icon.svg" alt="Solace" width="72" height="72" />

# Solace

### Small reflections. Meaningful growth.

A calm AI wellness companion built around two-minute daily reflection.
Meet **Aura** — gentle, patient, never clinical.

[**Visit the site →**](https://solace-gray-mu.vercel.app) &nbsp; · &nbsp; [**Join the waitlist →**](https://solace-gray-mu.vercel.app/launch)

![Next.js](https://img.shields.io/badge/Next.js-16-000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000?style=flat&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-9fe870?style=flat)

</div>

---

## 🦋 What is Solace?

Most wellness apps fail for the same reason — they ask too much.

Long entries. Streaks that shame. Therapy-speak that doesn't fit how you actually feel.

**Solace is built on the opposite bet.** Two quiet minutes a day. One gentle question. Over weeks, the patterns reveal themselves — and you meet yourself again.

> "We move through life without noticing how we feel.
> Solace is a quiet practice to start."

This repository contains the **landing page** for the product. The application itself is in private development.

---

## ✨ What's inside

A production-grade landing experience with:

- 🎨 **Custom design system** inspired by Wise + Headspace — sage canvas, lime CTA, Manrope 900 display type
- 🦋 **10-section landing page** with editorial layout, fade-up scroll animations, and full polarity cycling
- 🌗 **Full dark mode** that preserves brand polarity (the lime CTA never changes)
- 📱 **Mobile-first responsive** — built for iPhone SE upward, no horizontal overflow
- ♿ **Accessibility-first** — keyboard nav, focus rings, `prefers-reduced-motion`, skip links
- 📬 **Working early-access waitlist** with branded admin notifications via Resend
- 🖼 **8 platform-specific OG cards** — LinkedIn, X/Twitter, WhatsApp, Discord, Slack all auto-detect the right one
- 🔍 **Full SEO** — sitemap.xml, robots.txt, structured data (JSON-LD), per-page metadata
- 📊 **Vercel Analytics** for privacy-friendly visitor insights (no cookies, no banner needed)
- ⚡ **Edge-runtime OG image generation** — every social share renders a unique branded card

---

## 🛠 Tech Stack

| Layer     | Choice                                                    |
| --------- | --------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack)  |
| Language  | TypeScript                                                |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com)                |
| Animation | [Framer Motion](https://www.framer.com/motion)            |
| Icons     | [Lucide React](https://lucide.dev)                        |
| Theme     | [next-themes](https://github.com/pacocoursey/next-themes) |
| Email     | [Resend](https://resend.com)                              |
| Fonts     | Inter + Manrope (via `next/font/google`)                  |
| Hosting   | [Vercel](https://vercel.com)                              |
| Analytics | Vercel Analytics (privacy-first)                          |

---

## 🎨 Design System

Solace runs on a custom Wise-inspired design system. Every visual choice is intentional.

### Color tokens

```css
/* Surface */
--canvas-soft: #e8ebe6; /* Sage page background */
--canvas: #ffffff; /* White card */
--ink-surface: #0e0f0c; /* Polarity-flip dark sections */

/* Brand */
--primary: #9fe870; /* Lime CTA — the universal action color */
--primary-pale: #e2f6d5; /* Badges + soft surfaces */
--on-primary: #0e0f0c; /* Text on lime */

/* Text */
--ink: #0e0f0c; /* Headings */
--ink-deep: #163300; /* Subhead accents */
--body: #454745; /* Body text */
--mute: #868685; /* Captions, eyebrows */
```

### Typography

- **Display:** Manrope 900 (substitute for proprietary Wise Sans)
- **Body:** Inter 400 / 500 / 600
- **Scale:** `clamp(48px, 8vw, 96px)` for hero, fluid responsive throughout

### Radius

| Token    | Value    | Use                                          |
| -------- | -------- | -------------------------------------------- |
| `sm`     | 8px      | Pills, badges                                |
| `md`     | 12px     | Inputs                                       |
| `lg`     | 16px     | Mid-size cards                               |
| **`xl`** | **24px** | **Canonical brand radius — buttons + cards** |
| `pill`   | 9999px   | Stat pills, CTAs                             |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** 9+ (or `pnpm` / `yarn`)
- (Optional) A free [Resend](https://resend.com) account for early-access email notifications

### Install

```bash
git clone https://github.com/sharad-37/solace.git
cd solace
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Resend — for admin notifications when someone joins early access
RESEND_API_KEY=re_your_resend_key
ADMIN_EMAIL=you@example.com
```

> 💡 **Without these**, the form still works — it just won't send you an email when someone signs up. The user always sees the success confirmation.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see Solace.

### Build for production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (theme, fonts, metadata, structured data)
│   ├── page.tsx                # Homepage — 10 sections composed
│   ├── globals.css             # Tailwind v4 + design tokens
│   ├── icon.svg                # Favicon (lime butterfly)
│   ├── apple-icon.svg          # iOS home-screen icon
│   ├── opengraph-image.tsx     # Homepage OG card (edge runtime)
│   ├── twitter-image.tsx       # Homepage Twitter card
│   ├── robots.ts               # robots.txt generator
│   ├── sitemap.ts              # sitemap.xml generator
│   ├── not-found.tsx           # Custom 404 page
│   │
│   ├── about/                  # /about page + own OG card
│   ├── pricing/                # /pricing page + own OG card
│   ├── privacy/                # /privacy page + own OG card
│   ├── launch/                 # /launch page + LinkedIn-optimized OG + Twitter card
│   │
│   └── actions/
│       └── early-access.ts     # Server action — save signups + send branded email
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with theme toggle + CTA
│   │   ├── Footer.tsx          # Ink-band footer with social pills
│   │   └── StickyEarlyAccessBar.tsx  # Scroll-triggered floating CTA
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Hero + Mood Check-in card
│   │   ├── PressLogos.tsx      # "Launching soon · Featured by" row
│   │   ├── HowItWorks.tsx      # 3-step intro
│   │   ├── Problem.tsx         # Relatable observations (no fear)
│   │   ├── MeetAura.tsx        # Dark band with live chat mockup
│   │   ├── MoodTracking.tsx    # Editorial analytics
│   │   ├── VoiceJournal.tsx    # Recorder + AI summary
│   │   ├── GrowthStory.tsx     # Day 1 → 30 → 90 transformation
│   │   ├── AppPreview.tsx      # 3 iPhone mockups
│   │   ├── Testimonials.tsx    # 6-card editorial grid
│   │   └── FinalCTA.tsx        # Dark band with email form
│   │
│   ├── forms/
│   │   └── EarlyAccessForm.tsx # Server-action wired form
│   │
│   ├── illustrations/
│   │   ├── Butterfly.tsx       # Brand butterfly (animated)
│   │   ├── FloatingButterflies.tsx
│   │   └── IPhoneFrame.tsx     # iOS device mockup
│   │
│   ├── providers/
│   │   └── ThemeProvider.tsx   # Light / dark mode wrapper
│   │
│   └── ui/
│       └── AnimatedCounter.tsx # Tabular-numeric counter
│
├── hooks/
│   └── useScrollAnimation.ts
│
├── lib/
│   ├── utils.ts                # cn() helper
│   └── animations.ts           # Reusable framer-motion variants
│
└── styles/
    └── design-tokens.ts        # TS-side mirror of CSS tokens
```

---

## 🧭 Design Principles

These guided every decision:

1. **Gentle by default** — no streaks that shame, no notifications that interrupt, no copy that pressures
2. **Patterns over performance** — help people _notice_, not optimize
3. **Surface contrast = elevation** — sage canvas → white cards. No drop shadows on cards
4. **Lime is sacred** — only used for primary CTAs. Never as decoration. Never on green backgrounds
5. **Display weight 900, body weight 600** — typographic story told through weight contrast
6. **24px radius always** — the brand's friendliness signature
7. **No stock photography** — everything is custom SVG or illustrative

---

## 🦋 The Brand Story

> Working in software and security, I notice anomalies in systems all day.
> I rarely notice what's happening inside my own head.
>
> Most wellness apps don't help — they either guilt-trip you into journaling
> or push therapy-speak you didn't ask for.
>
> So I started designing something gentler.

Solace is a **concept** validated through this landing page. The actual application is in private development. If the idea resonates, the app gets built. If not, the brief lives on as a study in calm fintech-inspired design applied to mental wellness.

---

## 📈 Roadmap

### ✅ Phase 1 — Validation (current)

- [x] Landing page (10 sections)
- [x] Pricing, About, Privacy pages
- [x] Working waitlist + admin notifications
- [x] Multi-platform OG cards (LinkedIn, X, WhatsApp, etc.)
- [x] LinkedIn + X launch campaign
- [x] Vercel Analytics
- [ ] Reach 500 waitlist signups

### 🚧 Phase 2 — MVP (Q1 2026)

- [ ] Email magic-link auth
- [ ] Daily mood check-in (mood + text reflection)
- [ ] 7-day mood history view
- [ ] Weekly summary email
- [ ] Web-only, mobile-responsive

### 🌱 Phase 3 — Aura (Q2 2026)

- [ ] AI conversation flow with safety guardrails
- [ ] Voice journaling with auto-transcription
- [ ] Pattern detection across 30+ day windows
- [ ] iOS app (React Native)

### 🦋 Phase 4 — Scale (Q3+ 2026)

- [ ] Android app
- [ ] Group reflection circles (opt-in)
- [ ] Export to therapist / coach (user-controlled)
- [ ] Localization (Spanish, French, Hindi)

---

## 🤝 Contributing

Solace is currently a solo project in private development.

If you have feedback, ideas, or just want to talk wellness tech / calm UX / Wise-inspired design systems, feel free to:

- ⭐ Star this repo if the design or approach resonates
- 🐛 [Open an issue](https://github.com/sharad-37/solace/issues) if you spot a bug on the landing page
- 💌 Reach out via the [waitlist form](https://solace-gray-mu.vercel.app/launch) or LinkedIn

I read every message personally.

---

## 🙏 Acknowledgments

Built on the shoulders of builders smarter than me:

- **[Wise](https://wise.com)** — for the design system that shaped every visual choice
- **[Linear](https://linear.app)** — for the typography rhythm
- **[Headspace](https://headspace.com)** — for the brand voice
- **[Refactoring UI](https://refactoringui.com)** — for the card layering patterns
- **[Pieter Levels](https://levels.io)** — for the "ship the landing page first" philosophy
- **[Marc Lou](https://marclou.com)** — for indie hacker pacing
- **[Vercel](https://vercel.com)** — for making deployment feel like nothing
- The countless open-source contributors whose work powers every line here

---

## 📝 License

MIT © 2025 Solace Wellness

The code in this repository is open source.
The Solace brand, name, and "Aura" companion concept are not.
If you're inspired to build something gentle for mental wellness — please do. The world needs more of it.

---

<div align="center">

### 🦋

**The butterfly doesn't hurry. It becomes what it always was.**

[**solace-gray-mu.vercel.app**](https://solace-gray-mu.vercel.app)

</div>
