# AGENTS.md

> Guidance for AI coding agents (Cursor, Claude Code, Codex, Cline, Aider, Copilot, etc.) working inside the Solace codebase.
>
> Read this file before making any changes. It will save us both time.

---

## 🦋 What is Solace?

Solace is a **production-grade landing page** for a calm AI wellness companion concept. The marketing site is live; the actual product app is in private development (not in this repo).

- **Tagline:** _Small reflections. Meaningful growth._
- **Live URL:** https://solace-gray-mu.vercel.app
- **Stage:** Idea validation — collecting waitlist signups
- **Owner:** A solo builder (software + cybersecurity background)
- **Repo purpose:** Landing page + waitlist + brand world

---

## 🛠 Tech Stack (Authoritative)

When generating or modifying code, use **exactly these versions and patterns**:

| Layer     | Choice                                 | Notes                                                               |
| --------- | -------------------------------------- | ------------------------------------------------------------------- |
| Framework | **Next.js 16**                         | App Router only — never use Pages Router                            |
| Runtime   | **Turbopack** (default `next dev`)     |                                                                     |
| Language  | **TypeScript** (strict)                |                                                                     |
| Styling   | **Tailwind CSS v4**                    | NOT v3 — config lives in CSS via `@theme`, not `tailwind.config.ts` |
| Animation | **Framer Motion 11+**                  |                                                                     |
| Icons     | **Lucide React**                       | No other icon libraries                                             |
| Theme     | **next-themes**                        | Dark/light mode                                                     |
| Email     | **Resend** (via server actions)        | Sandbox sender — admin emails only                                  |
| Fonts     | **next/font/google** (Inter + Manrope) | Never `@import url(...)`                                            |
| Hosting   | **Vercel**                             | Edge runtime for OG images                                          |
| Node      | **18+**                                |                                                                     |

### Critical: Tailwind v4 syntax

Tailwind v4 is **not** v3. Do not generate `tailwind.config.ts` files. Configuration lives in `src/app/globals.css` inside `@theme { ... }`. Custom utilities use `@utility name { ... }`.

```css
/* Correct (v4) */
@import "tailwindcss";

@theme {
  --color-primary: #9fe870;
  --radius-xl: 1.5rem;
}

@utility container-wise {
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
```

---

## 🎨 Design System Rules (Strict)

Solace follows a **Wise-inspired design system** documented in `design.md`. **Never deviate from these rules.**

### Color (the only palette allowed)

| Token            | Hex       | Use                                     |
| ---------------- | --------- | --------------------------------------- |
| `--canvas-soft`  | `#e8ebe6` | Sage page background                    |
| `--canvas`       | `#ffffff` | White card surfaces                     |
| `--primary`      | `#9fe870` | **Lime CTA — ONLY for primary actions** |
| `--primary-pale` | `#e2f6d5` | Soft badge backgrounds                  |
| `--ink`          | `#0e0f0c` | Headings, dark surfaces (polarity flip) |
| `--ink-deep`     | `#163300` | Subheadline accent                      |
| `--body`         | `#454745` | Body text                               |
| `--mute`         | `#868685` | Captions, eyebrows                      |

**Do NOT introduce new brand colors.** Tertiary accents (`#ffc091` orange, `#38c8ff` cyan) only inside illustrative content (chips, charts), never as brand decoration.

**The lime green (`#9fe870`) is sacred.** It is the brand's universal CTA color. Never use it as decoration, background fill, or success indicator (use `#2ead4b` positive green for that).

### Typography

| Use                                  | Family  | Weight          | Notes                                |
| ------------------------------------ | ------- | --------------- | ------------------------------------ |
| Display (hero, h1, h2, h3 headlines) | Manrope | **900**         | Substitute for proprietary Wise Sans |
| Body, labels, buttons                | Inter   | 400 / 500 / 600 |                                      |
| Footer tagline                       | Manrope | 600 italic      |                                      |

**Rules:**

- Hero/section headlines: `font-weight: 900`, never lighter
- Use `clamp(min, vw, max)` for fluid scaling
- `letter-spacing: -0.02em` to `-0.03em` on display sizes
- `line-height: 0.85–0.95` on display sizes (tight, editorial)

### Border Radius

| Token           | Value    | Use                                    |
| --------------- | -------- | -------------------------------------- |
| `sm`            | 8px      | Small pills                            |
| `md`            | 12px     | Inputs                                 |
| `lg`            | 16px     | Mid cards                              |
| **`xl`**        | **24px** | **Canonical — buttons AND main cards** |
| `pill` / `full` | 9999px   | Status pills, circles                  |

**24px is the brand's friendliness signature. Never use sharp corners on UI elements.**

### Layout

- **Max container width:** 1200px
- **Section padding:** 96–120px top/bottom on desktop, 64–80px on mobile
- **Card interior padding:** 24–32px
- **Surface contrast carries elevation** — sage canvas → white cards. **Avoid drop shadows on cards.** Surface tone difference IS the elevation cue.

### Motion

- Use Framer Motion only
- Standard easing: `[0.22, 1, 0.36, 1]` (cubic out-expo)
- Scroll-triggered animations use `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- Floating decorative elements use infinite y/x/rotate loops at 6-10s duration
- **All animations must respect `prefers-reduced-motion`** (handled globally in `globals.css`)

---

## 📂 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root — fonts, theme, navbar, structured data
│   ├── page.tsx                # Homepage composed of section components
│   ├── globals.css             # Tailwind v4 @theme + reset + utilities
│   ├── icon.svg                # Favicon (lime butterfly on dark)
│   ├── apple-icon.svg          # iOS home-screen icon
│   ├── opengraph-image.tsx     # Homepage OG (edge runtime)
│   ├── twitter-image.tsx       # Homepage Twitter card
│   ├── robots.ts               # robots.txt
│   ├── sitemap.ts              # sitemap.xml
│   ├── not-found.tsx           # Custom 404
│   ├── about/                  # /about + own OG
│   ├── pricing/                # /pricing + own OG
│   ├── privacy/                # /privacy + own OG
│   ├── launch/                 # /launch + LinkedIn OG + Twitter card
│   └── actions/
│       └── early-access.ts     # Server action — save signup + admin email
│
├── components/
│   ├── layout/                 # Navbar, Footer, StickyEarlyAccessBar
│   ├── sections/               # 11 homepage section components
│   ├── forms/                  # Server-action wired forms
│   ├── illustrations/          # Butterfly, FloatingButterflies, IPhoneFrame
│   ├── providers/              # ThemeProvider (next-themes wrapper)
│   └── ui/                     # AnimatedCounter and primitive UI
│
├── hooks/                      # useScrollAnimation, etc.
├── lib/                        # utils.ts (cn helper), animations.ts (variants)
└── styles/                     # design-tokens.ts (TS mirror of CSS tokens)
```

---

## 🧭 Code Conventions

### Component patterns

1. **Section components** live in `src/components/sections/`. They are self-contained — own headlines, own copy, own animations.
2. **All section components are `"use client"`** because they use Framer Motion.
3. **Inline styles are intentional** — many components use `style={{ ... }}` instead of Tailwind classes because:
   - Tailwind v4 is still maturing and some arbitrary values break in production builds
   - Inline styles directly bind to CSS variables (`var(--canvas-soft)`) for clean dark-mode switching
   - **Do not refactor inline styles to Tailwind classes** unless explicitly asked
4. **Server actions** live in `src/app/actions/` and use `"use server"`.
5. **No barrel exports** (`index.ts` re-exports). Import components directly.

### Naming

- Components: `PascalCase` (e.g. `MoodCheckInCard.tsx`)
- Hooks: `camelCase` starting with `use` (e.g. `useScrollAnimation.ts`)
- Server actions: `camelCase` verbs (e.g. `joinEarlyAccess`)
- CSS variables: `--kebab-case` (e.g. `--canvas-soft`)

### TypeScript

- Always type component props with `interface ComponentNameProps { ... }`
- Always use `Metadata` type for page metadata exports
- Server actions return typed result objects (e.g. `interface SignupResult { ok: boolean; message: string }`)

### Imports

Use the `@/` alias (configured in `tsconfig.json`):

```ts
// ✅ Correct
import { Butterfly } from "@/components/illustrations/Butterfly";

// ❌ Wrong
import { Butterfly } from "../../../components/illustrations/Butterfly";
```

---

## 🦋 Brand Voice

When generating copy (microcopy, headlines, emails, error messages):

### Do

- Speak gently — like a thoughtful friend, not a coach or therapist
- Use short editorial phrases — favor weight over length
- Hope-oriented, never fear-based
- Phrases like "noticing," "patterns," "quiet practice," "small reflections," "two minutes" are on-brand
- Use the butterfly emoji 🦋 sparingly — once per moment, never twice in the same sentence

### Don't

- Never use clinical or therapy language ("diagnose," "treat," "symptoms," "disorder")
- Never use streak shame ("Don't break your streak!", "You're falling behind")
- Never use generic SaaS phrases ("Unlock your potential," "Boost productivity")
- Never use exclamation marks in body copy
- Avoid words: "transform," "fix," "optimize," "hack," "wellness journey"

### Sample on-brand copy

> "How are you feeling today?"
> "What's one small thing that grounded you?"
> "Notice patterns you never saw before."
> "The butterfly doesn't hurry. It becomes what it always was."

---

## 📧 Email System

- **Service:** Resend
- **Sender constraint:** Free tier uses `onboarding@resend.dev` which can ONLY send to the verified admin email
- **What works:** Admin notifications to owner when someone signs up
- **What doesn't:** Welcome emails to users (would require custom domain + DNS verification)
- **Storage:** Signups are saved to `data/signups.json` in development. On Vercel's read-only serverless filesystem, the file write is a no-op — the admin email is the source of truth.

When asked to add user-facing emails, **flag this constraint first** and suggest either:

1. Buying a domain + verifying it (proper fix)
2. Keeping current admin-only flow (no domain needed)

---

## 🖼 OG Image Conventions

All OG images use Next.js's `ImageResponse` with `export const runtime = "edge"`.

| File                                              | Purpose                              |
| ------------------------------------------------- | ------------------------------------ |
| `app/opengraph-image.tsx`                         | Homepage universal OG                |
| `app/twitter-image.tsx`                           | Homepage Twitter-specific            |
| `app/launch/opengraph-image.tsx`                  | LinkedIn / WhatsApp / Discord launch |
| `app/launch/twitter-image.tsx`                    | Dark X/Twitter card                  |
| `app/{pricing,about,privacy}/opengraph-image.tsx` | Per-page cards                       |

**Constraints for OG image components:**

- Always `1200 × 630` pixels
- Use only `system-ui` font (no Google fonts — they slow edge rendering)
- Use **inline SVG** for the butterfly (never `<img>` or external URLs)
- Headline `<h1>` must use `display: flex; flex-direction: column` to avoid overflow when wrapping multiline
- Maximum visual elements: 1 brand mark, 1 headline, 1 subhead, 1 CTA, 1 domain. No more.
- Headline font size: `80–100px` (anything larger overflows; anything smaller fails WhatsApp thumbnail readability)

---

## ✅ Common Tasks — How to Do Them Right

### Adding a new section to the homepage

1. Create `src/components/sections/NewSection.tsx`
2. Mark as `"use client"`
3. Use `useRef` + `useInView` from Framer Motion for scroll triggers
4. Follow surface cycling: if previous section is sage (`--canvas-soft`), this one should be white (`--canvas`) or ink (`#0e0f0c`)
5. Import in `src/app/page.tsx` and place in correct order
6. Test mobile responsive at 375px width

### Adding a new sub-page

1. Create `src/app/your-page/page.tsx` with `export const metadata: Metadata`
2. Create `src/app/your-page/YourPageClient.tsx` for interactive content (`"use client"`)
3. Create `src/app/your-page/opengraph-image.tsx` for unique OG card
4. Update `src/components/layout/Navbar.tsx` `navLinks` if it should appear in nav
5. Update `src/components/layout/Footer.tsx` link groups if needed
6. Update `src/app/sitemap.ts` to include the new URL

### Modifying brand colors

**Don't.** The palette is locked. If asked to change brand colors, push back gently:

> "The Solace design system is intentionally constrained to one accent color (lime `#9fe870`). Adding a second brand color would break the design system's coherence. Are you sure?"

If the user confirms, update tokens in:

- `src/app/globals.css` (CSS variables)
- `src/styles/design-tokens.ts` (TS mirror)

### Adding new animations

- Reuse variants from `src/lib/animations.ts` when possible
- New variants go in that file
- Always include `transition: { duration, ease: [0.22, 1, 0.36, 1] }`
- Never autoplay anything that could trigger motion sensitivity without a `prefers-reduced-motion` guard

---

## 🚫 Anti-Patterns (Don't Do This)

| ❌ Don't                                              | ✅ Do instead                                |
| ----------------------------------------------------- | -------------------------------------------- |
| Add a second brand accent color                       | Stick to lime + sage + ink palette           |
| Use sharp-cornered cards or buttons                   | 24px radius (`rounded-xl`) on all cards/CTAs |
| Use Manrope at weight <900 for displays               | Always 900 for hero/section headlines        |
| Use Tailwind v3 config syntax                         | Tailwind v4 — config in CSS via `@theme`     |
| Use Next.js Pages Router                              | App Router only                              |
| Add stock photos                                      | Custom SVG / illustration only               |
| Use generic SaaS marketing copy                       | Editorial, gentle, observational             |
| Add drop shadows to cards                             | Surface contrast carries elevation           |
| Hardcode colors like `#9fe870` everywhere             | Use CSS variables: `var(--primary)`          |
| Suggest libraries like styled-components, MUI, Chakra | Stack is locked — Tailwind v4 only           |
| Add cookies or tracking pixels                        | Vercel Analytics only (cookieless)           |

---

## 🧪 Testing Changes Before Suggesting

When proposing code changes, ensure:

1. **Mobile-safe:** test at 375px width (no horizontal scroll, no clipped text)
2. **Dark-mode-safe:** test that CSS variables swap correctly (some `var(--ink)` usages break in dark mode if not careful — see `MeetAura`, `FinalCTA`, `Footer` for hardcoded `#0e0f0c` examples that intentionally stay dark in both themes)
3. **Tailwind v4 compatible:** classes like `bg-primary`, `text-ink`, `rounded-xl` work because they're defined in `@theme`
4. **Reduced motion safe:** animations should degrade gracefully

---

## 📦 Deployment

- **Platform:** Vercel
- **Trigger:** Push to `main` branch auto-deploys
- **Env vars:** Set in Vercel dashboard (`RESEND_API_KEY`, `ADMIN_EMAIL`)
- **Build command:** `next build`
- **Output:** `.next`

Before pushing, agents should run:

```bash
npm run build
```

to catch type errors locally. If `build` fails, **fix the errors before suggesting the push.**

---

## 🦋 Final Notes

- This is a **solo project** in **active development**. The owner reads every commit.
- Tone matters as much as code. When in doubt, lean toward **understated, intentional, and gentle**.
- If a request would break the design system's coherence, **flag it politely** before implementing.
- The butterfly doesn't hurry. Neither should you.

---

_Last updated: 2026_
