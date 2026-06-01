> ⚠️ **PROPRIETARY DESIGN SYSTEM** — Not licensed for derivative use.
> The Solace brand, color palette, typography system, illustrations, and visual identity
> documented below are the exclusive intellectual property of the author and are protected
> under the project's source-available license. Reading is welcome. Copying is not.
> See [LICENSE](./LICENSE) for full terms.

---

# Solace · Design System

> The brand bible. Every visual decision lives here.
> Last updated: 2026

---

## Philosophy

Solace wears its identity in a single signature pairing: a vivid lime-green `{colors.primary}` (`#9fe870`) used as the CTA pill and brand accent, set against a sage-tinted canvas `{colors.canvas-soft}` (`#e8ebe6`) that runs across every hero band, paired with a near-black ink `{colors.ink}` (`#0e0f0c`) carrying a hint of olive warmth.

The brand reads less like a wellness app and more like a calm Scandinavian magazine — generous whitespace, large rounded cards, and an unusually heavy display sans set at weight 900 carrying every hero headline. The visual language is borrowed openly from financial technology (Wise, in particular) and applied to emotional wellbeing — because the same calm trustworthy aesthetic that works for moving money also works for noticing your own feelings.

Display typography is the second decisive voice. **Manrope at weight 900** carries hero displays from 48px on mobile up to 126px on the largest landing moments. The brand pairs Manrope 900 with Inter at weight 600 for sub-displays — the contrast between the geometric heaviness of Manrope and Inter's neutral utility creates a particular hierarchy: Manrope for the brand moment, Inter for everything else.

Cards are universally pill-rounded — `{rounded.xl}` 24px is the brand's signature card radius. Buttons take the same 24px pill-rectangle shape. The brand never uses sharp corners on UI elements. The visual softness is part of the gentle wellness voice, not a coincidence.

### Key Characteristics

- A single lime-green CTA accent `{colors.primary}` (`#9fe870`) — the brand's universal primary action color. **No second accent.**
- Two-face display typography — Manrope (weight 900, hero scale, substitute for proprietary Wise Sans) + Inter (weight 400/500/600, body and utility). The contrast is the brand's typographic story.
- `{rounded.xl}` 24px is the canonical card and button radius. Generous, friendly, intentional.
- Sage-tinted canvas `{colors.canvas-soft}` (`#e8ebe6`) is the brand's hero surface. White `{colors.canvas}` is reserved for cards within the sage band.
- Surface contrast IS the elevation system — no drop shadows on cards in light mode.
- A full semantic palette: positive green family, warning yellow family, negative red family — each documented for in-product use.
- Polarity-flipped dark sections (`{colors.ink}` background with `{colors.primary}` lime headlines) are the brand's most dramatic moments — used sparingly, deliberately.
- **Butterfly motif** as the only recurring illustration — never people, never stock photography, never clinical imagery.

### The Brand Emotion

The visual system is engineered to deliver one specific emotional outcome:

> _"I can understand myself better and grow one day at a time."_

Every choice — the gentle radius, the warm ink, the unhurried whitespace, the lime that punctuates rather than shouts — serves that single feeling.

---

## Colors

### Brand & Accent

| Token                                     | Hex       | Use                                                                                                        |
| ----------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------- |
| `{colors.primary}` — **Solace Lime**      | `#9fe870` | The brand's universal CTA color. Every primary button. The "Get Early Access" pill. The brand mark accent. |
| `{colors.primary-active}` — Lime Hover    | `#cdffad` | Lighter green for hover and active states.                                                                 |
| `{colors.primary-neutral}` — Lime Neutral | `#c5edab` | Mid-saturation green used as a neutral active fill.                                                        |
| `{colors.primary-pale}` — Lime Pale       | `#e2f6d5` | Lightest green for soft surface tints, badge backgrounds, Aura insight callouts.                           |
| `{colors.on-primary}` — Text on Lime      | `#0e0f0c` | Always near-black ink on top of any primary green surface.                                                 |

### Surface

| Token                         | Hex       | Use                                                                    |
| ----------------------------- | --------- | ---------------------------------------------------------------------- |
| `{colors.canvas}` — White     | `#ffffff` | Pure white for card interiors.                                         |
| `{colors.canvas-soft}` — Sage | `#e8ebe6` | The sage-tinted page background. The mood-defining color of the brand. |

### Text

| Token                          | Hex       | Use                                                                                  |
| ------------------------------ | --------- | ------------------------------------------------------------------------------------ |
| `{colors.ink}` — Ink           | `#0e0f0c` | Near-black with a hint of olive warmth. The brand's default text and headings color. |
| `{colors.ink-deep}` — Ink Deep | `#163300` | A deep forest-green ink used on positive-state surfaces and for subhead accents.     |
| `{colors.body}` — Body         | `#454745` | Secondary body text.                                                                 |
| `{colors.mute}` — Mute         | `#868685` | Lowest-priority text — captions, placeholders, fine print, eyebrow labels.           |

### Semantic

| Token                       | Hex       | Use                                                                            |
| --------------------------- | --------- | ------------------------------------------------------------------------------ |
| `{colors.positive}`         | `#2ead4b` | Success indicator (in-app status). **Never used as a brand decoration.**       |
| `{colors.positive-deep}`    | `#054d28` | Pressed positive state. Also used as text on `{colors.primary-pale}` surfaces. |
| `{colors.warning}`          | `#ffd11a` | Caution indicator.                                                             |
| `{colors.warning-deep}`     | `#b86700` | Pressed warning.                                                               |
| `{colors.warning-content}`  | `#4a3b1c` | Text on warning surfaces.                                                      |
| `{colors.negative}`         | `#d03238` | Destructive / error red.                                                       |
| `{colors.negative-deep}`    | `#a72027` | Pressed destructive.                                                           |
| `{colors.negative-darkest}` | `#a7000d` | Highest-emphasis destructive text.                                             |
| `{colors.negative-bg}`      | `#320707` | Dark maroon for destructive callout backgrounds.                               |

### Tertiary Accents (Illustrative Only)

These appear **only** inside illustrative content — mood chips, theme tags, decorative chart elements. **They are never used for primary brand decoration, CTAs, or large surfaces.**

| Token                    | Hex       | Use                                                             |
| ------------------------ | --------- | --------------------------------------------------------------- |
| `{colors.accent-orange}` | `#ffc091` | Reflective / warm mood chip; theme tag for "Work stress" etc.   |
| `{colors.accent-cyan}`   | `#38c8ff` | Inspired / cool mood chip; theme tag for "Self-compassion" etc. |

### Dark Mode

| Token                         | Hex       | Notes                                |
| ----------------------------- | --------- | ------------------------------------ |
| `{colors.canvas-soft}` (dark) | `#0B0C0E` | Inverts to near-pure black           |
| `{colors.canvas}` (dark)      | `#14161A` | Card surface in dark mode            |
| `{colors.ink}` (dark)         | `#F4F6F1` | Headings invert to off-white         |
| `{colors.body}` (dark)        | `#B8BCC0` | Body text in dark mode               |
| `{colors.primary}` (dark)     | `#9fe870` | **Lime stays unchanged. Brand law.** |
| `{colors.on-primary}` (dark)  | `#0e0f0c` | Text on lime stays dark.             |

The polarity-flip sections (`MeetAura`, `FinalCTA`, `Footer`) intentionally remain dark in both themes — they use hardcoded `#0e0f0c` rather than the swappable token.

---

## Typography

### Font Families

Two faces ladder the system:

1. **Manrope** — geometric sans with an unusually heavy weight 900. The brand's typographic signature, used for every display headline. **Always at weight 900 in marketing surfaces, never lighter.** This is a substitute for the proprietary Wise Sans (whose feel we're emulating).

2. **Inter** — used for sub-displays (weight 600), all body, all form labels, all UI chrome. Loaded with `font-feature-settings: "calt"` for contextual alternates.

Both are loaded via `next/font/google` for optimal performance (no FOIT, no layout shift, no external `@import url(...)`).

### Hierarchy

| Token                         | Size (clamp)               | Weight | Line Height | Letter Spacing | Use                                                                           |
| ----------------------------- | -------------------------- | ------ | ----------- | -------------- | ----------------------------------------------------------------------------- |
| `{typography.display-mega}`   | `clamp(80px, 12vw, 126px)` | 900    | 0.85        | 0              | The "Solace" wordmark moment. Used once per page maximum.                     |
| `{typography.display-xxl}`    | `clamp(64px, 10vw, 104px)` | 900    | 0.88        | -0.02em        | Final CTA, Hero, Meet Aura.                                                   |
| `{typography.display-xl}`     | `clamp(48px, 8vw, 96px)`   | 900    | 0.9         | -0.02em        | Section headlines (Problem, Mood Tracking, Voice Journal).                    |
| `{typography.display-lg}`     | `clamp(40px, 6vw, 80px)`   | 900    | 0.95        | -0.02em        | Sub-hero section displays.                                                    |
| `{typography.display-md}`     | `clamp(32px, 5vw, 56px)`   | 900    | 1.0         | -0.02em        | Card titles, mid-section displays.                                            |
| `{typography.display-sm}`     | `32px`                     | 600    | 1.2         | -0.96px        | Inter-rendered section headings.                                              |
| `{typography.display-xs}`     | `24px`                     | 600    | 1.3         | -0.48px        | Sub-section displays.                                                         |
| `{typography.body-lg}`        | `20px`                     | 400    | 1.55        | 0              | Lead paragraphs under headlines.                                              |
| `{typography.body-md}`        | `16px`                     | 400    | 1.5         | 0              | Default body text.                                                            |
| `{typography.body-md-strong}` | `16px`                     | 600    | 1.5         | 0              | Bold inline body.                                                             |
| `{typography.body-sm}`        | `14px`                     | 400    | 1.43        | 0              | Secondary body, captions.                                                     |
| `{typography.body-sm-strong}` | `14px`                     | 600    | 1.43        | 0              | Bold caption, nav-link, eyebrow labels.                                       |
| `{typography.caption}`        | `12px`                     | 400    | 1.33        | 0              | Fine print, footer legal.                                                     |
| `{typography.eyebrow}`        | `13px`                     | 600    | 1.2         | 0.1em          | Uppercase eyebrow labels above headlines. Always `text-transform: uppercase`. |
| `{typography.button-md}`      | `16px`                     | 600    | 1.5         | 0              | Button label.                                                                 |

### Principles

- **Weight 900 for hero, weight 600 for everything else.** The brand's display ceiling is full-black weight; everything below is semibold.
- **Manrope for the brand voice, Inter for utility.** Strict role separation.
- **Tight line heights on displays (0.85–1.0).** Editorial, magazine-like.
- **Negative letter spacing on displays (-0.02em to -0.03em).** Premium feel.
- **Use `clamp()` for fluid scaling** — never hardcoded pixel sizes on displays.
- **Headlines use `display: flex; flex-direction: column`** when split across multiple visual lines — prevents `<br />` rendering issues in `ImageResponse` (OG cards) and improves balance.

### Italics

Italic Manrope at weight 600 is reserved for **one specific use:** the closing tagline at the bottom of cards, emails, and the footer.

> _Small reflections. Meaningful growth._
> _The butterfly doesn't hurry._

Never use italics for emphasis in body text. Use **bold inline** instead.

---

## Layout

### Spacing System

Base unit: **4px**.

| Token           | Value | Common use                               |
| --------------- | ----- | ---------------------------------------- |
| `{spacing.xxs}` | 2px   | Pixel-level adjustments                  |
| `{spacing.xs}`  | 4px   | Tight inline gaps                        |
| `{spacing.sm}`  | 8px   | Icon + label gaps                        |
| `{spacing.md}`  | 12px  | Form padding, button vertical            |
| `{spacing.lg}`  | 16px  | Card item gaps                           |
| `{spacing.xl}`  | 24px  | Card interior padding, button horizontal |
| `{spacing.2xl}` | 32px  | Section component gaps                   |
| `{spacing.3xl}` | 48px  | Section padding mobile                   |
| `{spacing.4xl}` | 64px  | Section padding tablet                   |
| `{spacing.5xl}` | 96px  | Section padding desktop                  |
| `{spacing.6xl}` | 120px | Hero section padding desktop             |

### Section Padding (Vertical)

| Breakpoint          | Padding (top + bottom) |
| ------------------- | ---------------------- |
| Mobile (< 768px)    | 64–80px                |
| Tablet (768–1023px) | 80–96px                |
| Desktop (≥ 1024px)  | 96–120px               |
| Hero / Final CTA    | 120–160px on desktop   |

### Grid & Container

- **Max container width:** 1200px (cited as `{spacing.container-max}`)
- **Container horizontal padding:** 24px mobile, 32px tablet, 64px desktop (rare — usually 24/32 is enough)
- **Hero layout:** Split (1.1fr / 0.9fr) on desktop, stacked on mobile
- **Feature grids:** 2-up (tablet), 3-up (desktop), 4-up only when content is truly equal weight

### Responsive Breakpoints

| Name    | Width      | Key changes                                                                                                   |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| Mobile  | < 768px    | All grids 1-up. Floating decorative elements (chips, mini-stats) `display: none`. Section padding compresses. |
| Tablet  | 768–1023px | 2-up grids. Most layouts still stacked.                                                                       |
| Desktop | ≥ 1024px   | Full split layouts. 3-up grids. Floating decorations enabled.                                                 |

### Touch Targets

All interactive elements render minimum **44px tall** on mobile (12px vertical padding + 24px line). WCAG AA compliant across all widths.

### Imagery Strategy

- **No stock photography. Ever.**
- **No people photos.** Especially no "smiling person looking at phone" — the visual cliché of wellness apps.
- **No medical imagery.** No stethoscopes, lotus poses, or zen rocks.
- **Custom SVG illustrations only** — primarily the **butterfly motif** which symbolizes growth, transformation, and hope.
- Decorative butterflies appear in: navbar, hero corners, dark sections, final CTA. Always opacity 0.3–0.5, always animated (slow y/x/rotate loops at 6–10s duration).
- iPhone mockups built as pure CSS/SVG components — never real device photography.

---

## Elevation & Depth

The brand uses **surface contrast** as its primary elevation cue. Drop shadows are minimal.

| Level                   | Treatment                                                                             | Use                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Level 0 — Flat**      | No shadow, no border.                                                                 | Default for content blocks within a single surface.                                           |
| **Level 1 — Hairline**  | 1px solid `{colors.ink}` border.                                                      | Tertiary outline buttons, form inputs, the Mood Check-in card.                                |
| **Level 2 — Soft Card** | Implicit. A white card sitting on sage canvas. The surface contrast IS the elevation. | Standard card on the homepage.                                                                |
| **Level 3 — Floating**  | `box-shadow: 0 20px 60px rgba(0,0,0,0.25)`                                            | The Aura conversation card on the dark hero band. The voice recorder's floating summary card. |

In dark mode, surface contrast inverts: dark elevated cards (#14161A) sit on near-pure-black (#0B0C0E). No shadows added; the tonal difference does the work.

---

## Shapes

### Border Radius Scale

| Token              | Value    | Use                                             |
| ------------------ | -------- | ----------------------------------------------- |
| `{rounded.none}`   | 0        | Full-bleed bands only                           |
| `{rounded.sm}`     | 8px      | Inline pills, small badges, eyebrow chips       |
| `{rounded.md}`     | 12px     | Form inputs, small chrome elements              |
| `{rounded.lg}`     | 16px     | Mid-size cards, secondary feature blocks        |
| **`{rounded.xl}`** | **24px** | **The brand's canonical button + card radius.** |
| `{rounded.pill}`   | 9999px   | Status pills, mood chips, full-radius accents   |
| `{rounded.full}`   | 9999px   | Circular icon containers, avatars               |

**24px is non-negotiable for primary cards and buttons.** The generous radius is the brand's friendliness signature. It is what separates Solace from clinical health apps.

---

## Components

### Buttons

#### `button-primary` — The Lime CTA Pill

The brand's most important component. Used for every primary action.

- Background: `{colors.primary}` (`#9fe870`)
- Text: `{colors.on-primary}` (`#0e0f0c`)
- Label: `{typography.button-md}` (Inter 600, 16px)
- Padding: `14px 28px`
- Shape: `{rounded.xl}` (24px)
- Hover: background → `{colors.primary-active}`, `translateY(-2px)`
- Focus: 2px lime outline, 3px offset

#### `button-secondary` — Sage / White Outline

- Background: `{colors.canvas}` (`#ffffff`)
- Text: `{colors.ink}` (`#0e0f0c`)
- Border: 1px solid `{colors.ink}`
- Same typography, padding, shape as primary

#### `button-icon-circular`

- 36–40px circle, `{colors.canvas}` background, ink icon
- Shape: `{rounded.full}`
- Used for: dark mode toggle, mobile menu, conversation send button

### Cards & Containers

#### `card-content` — White Card on Sage

The default card pattern. White card surface sitting on the sage canvas band.

- Background: `{colors.canvas}`
- Padding: `{spacing.xl}` to `{spacing.2xl}` (24–32px)
- Shape: `{rounded.xl}` (24px)
- No border, no shadow on light mode

#### `card-feature-sage` — Sage-Tinted Feature Card

Used when a card sits on a white section and needs subtle differentiation.

- Background: `{colors.canvas-soft}`
- Same padding/shape as `card-content`

#### `card-feature-green` — Lime-Pale Feature Card

A warmer feature variant for highlighted content (e.g. Day 30 in the Growth Story).

- Background: `{colors.primary-pale}` (`#e2f6d5`)
- Text: `{colors.ink}` (with `{colors.positive-deep}` accents)
- Same padding/shape

#### `card-feature-dark` — Polarity-Flipped Dark Card

The boldest brand moment. Near-black background with lime headlines.

- Background: `#0e0f0c` (hardcoded — stays dark in both themes)
- Text: `{colors.primary}` (lime headlines), `rgba(244,246,241,0.75)` (body)
- Used sparingly: 1× in Growth Story, 1× in Testimonials, full sections (Meet Aura, Final CTA)

#### `card-interactive-signature` — Mood Check-in / Daily Reflection

The brand's signature interactive component (the equivalent of Wise's currency-converter card).

- Background: `{colors.canvas}`
- Border: 1px solid `{colors.ink}`
- Padding: `{spacing.xl}` (24px)
- Shape: `{rounded.xl}` (24px)
- Hosts: mood chip selector, reflection textarea, Aura insight callout, lime save CTA

### Inputs & Forms

#### `text-input`

- Background: `{colors.canvas}`
- Text: `{colors.ink}`
- Border: 1px solid `rgba(14,15,12,0.12)` resting, `{colors.ink}` on focus
- Body in `{typography.body-md}`
- Padding: `12px 16px`
- Shape: `{rounded.md}` (12px)

#### `email-input-dark` (used on dark bands)

- Background: `rgba(244,246,241,0.06)`
- Border: 1px solid `rgba(244,246,241,0.18)` resting, `rgba(159,232,112,0.6)` on focus
- Shape: `{rounded.xl}` (24px) — matches the adjacent CTA

### Navigation

#### `nav-bar`

- Background: transparent (top of page), `var(--canvas-soft)` with `backdrop-blur(20px)` when scrolled past 20px
- Padding: `12–20px 24px`
- Sticky positioned at top with `z-index: 50`

#### `nav-link`

- Text: `{colors.ink}`
- Typography: `{typography.body-sm-strong}` (Inter 600, 14px)
- Padding: `8px 16px`
- Hover: `background: rgba(0,0,0,0.05)`, `{rounded.md}` radius

#### `footer`

- Background: `#0e0f0c` (hardcoded ink, dark in both themes)
- Text: `rgba(244,246,241,0.7)`
- Padding: `80px 24px 40px`
- Body in `{typography.body-sm}`

### Signature Components

#### `hero-band` — The Sage Hero

- Background: `{colors.canvas-soft}`
- Padding: `120–160px 24px`
- Headline: `{typography.display-xxl}` or `{typography.display-mega}` (Manrope 900)

#### `hero-band-dark` — The Polarity-Flipped Dark Hero

The brand's most cinematic moment. Used for Meet Aura and Final CTA sections.

- Background: `#0e0f0c`
- Text: `{colors.primary}` (lime headline) + `rgba(244,246,241,0.75)` (body)
- Decorative floating butterflies (4–8) in lime at 0.3–0.5 opacity
- Soft radial lime glow `rgba(159,232,112,0.10–0.25)` for depth

#### `content-band` — The White Content Band

Used between hero bands to provide surface contrast. Houses sections like Problem, Voice Journal, Testimonials.

- Background: `{colors.canvas}`
- Padding: `96–120px 24px`

#### `badge-positive` — Lime Status Pill

- Background: `{colors.primary-pale}`
- Text: `{colors.positive-deep}`
- Typography: `{typography.body-sm-strong}`
- Padding: `4px 12px`
- Shape: `{rounded.pill}`

#### `pill-eyebrow` — Brand Status Pill

Used for "Now in private beta", "Building in public", etc.

- Background: `{colors.primary-pale}` (on light bg) OR `rgba(159,232,112,0.12)` + 1px border `rgba(159,232,112,0.25)` (on dark bg)
- Text: `{colors.positive-deep}` (on light) OR `{colors.primary}` (on dark)
- Padding: `6px 14px`
- Shape: `{rounded.pill}`
- Optional: small pulsing 6px dot in `{colors.primary}` or `{colors.positive-deep}`

---

## Motion

Solace uses **medium animation** — present but never showy.

### Principles

- All animations use Framer Motion exclusively
- Standard easing: `[0.22, 1, 0.36, 1]` (cubic out-expo) — gives the brand its characteristic "settling" feel
- Scroll-triggered animations: `whileInView` with `viewport={{ once: true, margin: "-80px" }}`
- Floating decorative loops: y/x/rotate at 6–10s duration, infinite
- Hover micro-interactions: `translateY(-2px)` on primary CTAs, `scale(1.02)` on cards

### Animation Tokens

| Token                 | Duration | Use                             |
| --------------------- | -------- | ------------------------------- |
| `{motion.fast}`       | 0.2s     | Micro-interactions (hover, tap) |
| `{motion.normal}`     | 0.4s     | Standard component animations   |
| `{motion.slow}`       | 0.6s     | Section reveals                 |
| `{motion.deliberate}` | 0.7–0.8s | Hero entry animations           |

### Reduced Motion (Critical)

Solace is a wellness product. **All animations must honor `prefers-reduced-motion: reduce`.**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This rule lives globally in `globals.css` and is non-negotiable.

---

## Illustration System

### The Butterfly

The **only** recurring illustration in the brand. Custom-built SVG, used in:

- Navbar logo (animated wing scale)
- Hero corners (floating decoration)
- Meet Aura background (lime on dark)
- Growth Story (the size grows with stages — Day 1 → 30 → 90)
- Final CTA (8 scattered butterflies)
- Footer (subtle accent)
- Favicon (lime on dark square)
- Apple touch icon (dark on lime square — polarity flip)
- Email headers
- Every OG card

The butterfly symbolizes growth, transformation, hope, and patient becoming. It's the single visual symbol of the brand.

### What's Forbidden

- ❌ Stock photography
- ❌ "Person looking thoughtful" imagery
- ❌ Brain illustrations
- ❌ Medical iconography (stethoscopes, pills, etc.)
- ❌ Therapy clichés (couches, journals, candles, zen rocks)
- ❌ Generic mental health graphics (heads with gears, gradient brains)
- ❌ Cute mascots beyond the butterfly

### What's Allowed

- ✅ The butterfly (in all its forms)
- ✅ Organic blob shapes for soft background accents
- ✅ Radial lime/sage glows
- ✅ Editorial line illustrations (chart lines, waveforms)
- ✅ Custom-drawn iPhone mockups (CSS/SVG only)

---

## Dark Mode

Solace ships a complete dark theme that:

- **Preserves the premium feeling** — every section reads as intentional, not auto-inverted
- **Keeps the lime CTA unchanged** — `#9fe870` is brand law and never shifts
- **Maintains WCAG AA contrast** at minimum, AAA where possible
- **Uses deep charcoal-sage backgrounds** (#0B0C0E / #14161A) — not pure black, which would feel cold

### Dark Mode Rules

1. **CSS variables swap.** `var(--canvas)` becomes `#14161A` instead of `#ffffff`. All theme-aware components inherit automatically.
2. **Polarity-flip sections stay dark.** The Meet Aura, Final CTA, and Footer use hardcoded `#0e0f0c` — they're intentionally dark in both themes.
3. **Hardcoded brand values stay.** Lime (`#9fe870`), pale lime (`#e2f6d5`), and the dark ink (`#0e0f0c`) are used as literals in many places. This is correct, not a bug.
4. **Borders fade.** `rgba(14,15,12,0.08)` becomes `rgba(244,246,241,0.08)` in dark mode (via the `--border-soft` variable).

---

## Voice & Microcopy

The brand voice is as much part of the design system as the colors.

### The Rules

#### ✅ Do

- Speak gently — like a thoughtful friend, not a coach
- Use short editorial phrases — favor weight over length
- Hope-oriented, never fear-based
- Observational, not prescriptive
- Phrases like _"noticing,"_ _"patterns,"_ _"quiet practice,"_ _"small reflections,"_ _"two minutes"_ are on-brand
- Use the butterfly emoji 🦋 sparingly — once per moment, never twice in the same sentence

#### ❌ Don't

- Never use clinical or therapy language: _"diagnose," "treat," "symptoms," "disorder," "intervention"_
- Never use streak shame: _"Don't break your streak!", "You're falling behind"_
- Never use generic SaaS language: _"Unlock your potential," "Boost productivity," "Transform your life"_
- Never use exclamation marks in body copy (allowed sparingly in success states)
- Avoid words: _"transform," "fix," "optimize," "hack," "journey," "rewire"_

### On-Brand Examples

**Headlines**

> Understand yourself. Grow every day.
> Small reflections. Meaningful growth.
> Notice patterns you never saw before.
> Just speak.
> Two quiet minutes. One companion.
> The butterfly doesn't hurry.

**Body copy**

> Solace helps you reflect, track your emotions, and build healthier habits with Aura, your AI wellness companion.
> A wellness companion designed to help you reflect, not judge.
> Capture thoughts in seconds. No typing, no editing — just your voice and a quiet moment.

**Microcopy**

> Save reflection
> You're on the list 🦋
> How are you feeling today?
> What made you smile?
> What challenged you today?

**Forbidden phrases (real examples to never use)**

> ~~Unlock a better you!~~
> ~~Don't break your 7-day streak!~~
> ~~Transform your mental wellness journey today!~~
> ~~Our proprietary AI analyzes your emotions to provide personalized interventions.~~

---

## Aura — The AI Companion

Aura is the brand's AI assistant. **Aura is not a therapist.**

### Aura's Role

- A reflective guide
- A journaling companion
- A growth partner
- A daily check-in assistant

### Aura's Personality (also Aura's Brand)

| Trait           | What it means in copy                                |
| --------------- | ---------------------------------------------------- |
| **Warm**        | Speaks like a thoughtful friend, never a textbook    |
| **Thoughtful**  | Asks one good question instead of five mediocre ones |
| **Encouraging** | Notices progress without performing celebration      |
| **Gentle**      | Never rushes, never judges, never prescribes         |
| **Optimistic**  | Hope-oriented but never naive about hard days        |

### Aura's Visual Identity

When Aura speaks in a UI mockup (conversation card, email signature), Aura is represented by:

- A small (32–40px) circle in `{colors.primary-pale}` (`#e2f6d5`)
- The butterfly icon centered inside, in `{colors.positive-deep}` (`#054d28`)
- Animated wing scale at 3s loop

Aura messages in chat use a soft sage-tinted bubble (`#f1f3ee` light / `rgba(244,246,241,0.06)` dark) with rounded corners (16px main, 4px top-left to indicate "from" direction).

---

## Surface Cycling

The visual rhythm of the homepage follows a deliberate pattern:

```
Hero            → canvas-soft (sage)
Problem         → canvas (white)
Meet Aura       → ink (#0e0f0c — POLARITY FLIP, dark)
Mood Tracking   → canvas-soft (sage)
Voice Journal   → canvas (white)
Growth Story    → canvas-soft (sage)
App Preview     → canvas (white) → bleeds into canvas-soft
Testimonials    → canvas (white)
Final CTA       → ink (#0e0f0c — POLARITY FLIP, dark)
Footer          → ink (continuous from Final CTA)
```

**Rule:** Never put two consecutive sections of the same surface tone. The rhythm is the brand's most underrated design feature.

---

## Do's and Don'ts (Quick Reference)

### Do

- ✅ Reserve `{colors.primary}` for every primary CTA. The lime-green pill IS the brand's conversion signature.
- ✅ Set hero headlines in Manrope weight 900. Never lighter.
- ✅ Use `{rounded.xl}` 24px for buttons and cards. The generous radius is the brand's friendliness signature.
- ✅ Cycle page surfaces — sage canvas → white cards. Surface contrast carries elevation.
- ✅ Use the full semantic palette (positive / warning / negative) for in-product status — never repurpose lime as success.
- ✅ Honor `prefers-reduced-motion`. Always.
- ✅ Use custom SVG butterflies. They are the brand's visual signature.
- ✅ Speak gently. Editorial, observational, never clinical.

### Don't

- ❌ Don't introduce a second brand accent. Lime is the sole identity color.
- ❌ Don't render hero displays in weight 700 or lighter.
- ❌ Don't render CTAs as sharp rectangles. 24px pill geometry is non-negotiable.
- ❌ Don't pair the lime CTA with a green background. Lime always sits on neutral surfaces (sage / white / ink).
- ❌ Don't replace Manrope with a generic geometric sans for hero typography.
- ❌ Don't use stock photography or therapy-clichéd imagery.
- ❌ Don't use streak language, exclamation marks in body, or clinical jargon.
- ❌ Don't add drop shadows to primary cards in light mode. Surface contrast does the work.

---

## Implementation Notes

### Tailwind v4

The system is implemented in Tailwind v4 via the `@theme` block in `src/app/globals.css`. Tokens map directly:

```css
@theme {
  --color-primary: #9fe870;
  --color-canvas-soft: #e8ebe6;
  --color-ink: #0e0f0c;
  --radius-xl: 1.5rem;
  /* ...etc */
}
```

### Why Inline Styles Are Used

Many components in `src/components/sections/` use inline `style={{ ... }}` props rather than Tailwind class names. This is **intentional**:

1. Direct binding to CSS variables (`var(--canvas-soft)`) for clean dark-mode switching
2. Avoids Tailwind v4 arbitrary-value edge cases in production builds
3. More portable when copy-pasting between projects

Do not refactor inline styles to Tailwind classes unless there's a specific need.

### File Authority

| File                          | Authority over                                           |
| ----------------------------- | -------------------------------------------------------- |
| `design.md` (this file)       | All design decisions, brand voice                        |
| `AGENTS.md`                   | How AI agents should work in the codebase                |
| `README.md`                   | Public-facing project description                        |
| `src/app/globals.css`         | Implementation of design tokens (Tailwind v4 `@theme`)   |
| `src/styles/design-tokens.ts` | TypeScript mirror of design tokens for component imports |

When in conflict, **`design.md` wins** for design decisions. Implementation files must conform to it.

---

## Closing Note

This design system is intentionally constrained.

The constraint is the point.

A brand with one accent color, one display font weight, one card radius, and one illustration motif is not a limitation — it's a position. It says: _we chose this, deliberately, and we trust you to recognize it._

That trust is what makes Solace feel like Solace.

---

🦋

_The butterfly doesn't hurry. It becomes what it always was._
