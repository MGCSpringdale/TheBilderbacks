# The Bilderbacks — Design System

A brand & UI design system for **The Bilderbacks**, a Southern Gospel **family ministry** from Springdale, Arkansas. The system covers the warm-earth visual language, typography, reusable UI primitives, and a full marketing-website UI kit used for their landing page, event promotion, and social content.

> The Bilderbacks are a Southern Gospel family ministry — Euel & Marsha and their family (Blake, Quincie, Cortni & Caleb) — spreading the Gospel of Jesus through music for over 29 years (since 1997). Four albums incl. *Full Circle* and *Our Family Heritage*; on Apple Music, Spotify & Amazon Music. Booking for churches, revivals & festivals · 479-200-3599 · ebilderback@hotmail.com.

---

## Sources & provenance

Inputs used:

- A Google search-results screenshot for "The Bilderbacks" (band overview, family press photos in warm/rustic settings).
- One brand photograph: `assets/images/family-kids.jpg` — two of the children on a cream bouclé sofa against a warm walnut backdrop. This image defined the palette and mood (warm earth, soft natural light, modern-clean).
- **Their in-progress Webflow site** (`the-bilderbacks`, site id `69657c9de20566770051dc81`). Page metadata supplied the real facts now reflected throughout: Springdale AR; family ministry since 1997 (29 years); members Euel, Marsha, Blake, Quincie, Cortni & Caleb; albums *Full Circle* and *Our Family Heritage*; streaming on Apple Music / Spotify / Amazon Music; booking for church/revival/festival; contact 479-200-3599 / ebilderback@hotmail.com. **Visual tokens (colors, fonts, styles) were NOT yet readable** — the Webflow Designer MCP app was not connected. Reconcile palette & type with the real site once it's running.

Brand direction was confirmed with the client:
- **Visual direction:** Modern & clean contemporary worship aesthetic.
- **Color mood:** Warm earth — cream, rust, denim, walnut brown.
- **Scripture:** built-in scripture / verse styling.
- **Primary use:** website / landing page, concert & event flyers, social posts.
- **Logo & type:** designer's discretion (no existing logo file supplied).

Because there is no canonical brand kit, **everything here is an original proposal** meant to be iterated on with the family.

---

## Content fundamentals — voice & tone

The Bilderbacks speak like a **family inviting you in**, not an institution. Warm, sincere, plainspoken, gently faithful.

- **Person:** "we" and "our family" for the group; "you / y'all" for the audience. Inclusive and personal — *"We'd love to have you at a service this fall."*
- **Tone:** warm, humble, grateful, hopeful. Joy without hype. Faith is sincere, never preachy.
- **Casing:** Sentence case for body and most headings; Title Case for proper names, album/song titles, and event names. Reserve ALL-CAPS for small eyebrow labels (tracked), never for body copy.
- **Punctuation:** clean and gentle. Em dashes for warmth, not exclamation pile-ups. One exclamation point is plenty.
- **Scripture:** quoted in italic serif with the reference in a small tracked uppercase label, e.g. *"Make a joyful noise unto the Lord."* — **PSALM 100:1**. Use sparingly and intentionally; let a verse breathe.
- **Emoji:** avoid in primary brand copy. A single ♪ / note glyph or a small heart is acceptable in social captions only.
- **Vocabulary:** family, harmony, home, gathering, gospel, grace, joyful, journey. Avoid corporate words (leverage, solutions, engagement).

**Sample copy**

- Hero: *"One family. One harmony."* / sub: *"Spreading the Gospel of Jesus through music for over 29 years."*
- CTA: "See where we're singing" · "Listen to *Full Circle*" · "Bring us to your church"
- About: *"It started around a piano at home. It still does."*

---

## Visual foundations

**Overall feel.** Modern, clean, and unhurried — contemporary-worship polish wrapped around warm, family-Americana warmth. Lots of breathing room, generous radii, soft natural-light photography. Nothing harsh, glossy, or corporate.

**Color.** A warm-earth palette built on **cream/oat** backgrounds, **walnut brown** for text and dark surfaces, **rust/terracotta** as the primary accent, **denim blue** as a calm secondary, and a muted **gold/ochre** reserved for scripture and highlights. Pure black and pure gray are avoided — even neutrals lean warm. Dark sections use deep walnut (`--walnut-900`), never black.

**Typography.**
- **Display / headings + scripture:** *Newsreader* — a warm editorial serif. Used at medium weight (500) for elegance; its italic carries all scripture and pull-quotes.
- **Body / UI:** *Hanken Grotesk* — a clean, friendly humanist sans for paragraphs, navigation, buttons, labels.
- **Accent:** *Caveat* — a hand-script used rarely, for a signature flourish ("with love, the Bilderbacks") or a warm sticker-like tag. Never for body or headings.
- Headlines are tightly tracked (`-0.02em`); eyebrow labels are widely tracked uppercase (`0.16em`).

**Backgrounds.** Predominantly flat warm cream. Photography is used full-bleed for heroes and as soft-cornered cards elsewhere. No noisy gradients, no purple/blue tech gradients. The only "gradient" is a soft walnut scrim over photos to keep text legible. No repeating patterns or heavy textures — cleanliness is the point.

**Imagery vibe.** Warm, slightly desaturated, natural daylight. Earth tones in wardrobe and sets (cream, tan, denim, brown). Family-forward, candid, soft. When placing text on a photo, use a bottom-up walnut protection gradient (`rgba(43,32,24,...)`).

**Corner radii.** Generous and soft, echoing the bouclé sofa: cards `--radius-lg` (24px), large media `--radius-xl` (34px), pills/buttons `--radius-pill`. Inputs `--radius-md`.

**Cards.** White (`--surface-card`) on cream, soft warm shadow (`--shadow-md`), 1px hairline warm border (`rgba(43,32,24,.12)`), large radius. They feel like matte photo prints, not glossy panels. Avoid colored left-border accent cards.

**Shadows.** Warm walnut-tinted and diffuse — never pure-black, never tight/hard. Scale from `--shadow-xs` (hairline lift) to `--shadow-xl` (floating hero media). Inset highlight (`--shadow-inset`) for a subtle top sheen on light surfaces.

**Borders.** Hairline, warm, low-contrast (`--border`). Used to define cards and dividers, not to box everything. On dark surfaces use `--border-on-dark`.

**Motion.** Gentle and earthy. Fades and short rises (8–16px) on entrance; `--ease-out` for most, `--ease-soft` (slight overshoot) for playful elements like the script flourish. Durations 140–420ms. No bounce-heavy or spring-loaded UI. Respect `prefers-reduced-motion`.

**Hover states.** Buttons darken toward `--primary-hover`; cards lift (raise shadow + translateY(-2px)); links shift to `--primary-hover`. Subtle, never neon.

**Press states.** Slight scale-down (~0.98) and a deeper color (`--primary-press`). Quick (`--dur-fast`).

**Transparency & blur.** Used sparingly: the sticky site header uses a cream backdrop with `--blur-md` once scrolled. Photo scrims use solid-color alpha rather than blur.

**Layout.** Centered `--container` (1200px) with a fluid `--gutter`. Prose capped at ~68ch. Sections use a fluid vertical rhythm (`--section-y`). Sticky header; everything else flows.

---

## Iconography

The Bilderbacks have **no proprietary icon set**. The system standardizes on **[Lucide](https://lucide.dev)** — an open-source line-icon family with a friendly, even **1.5–2px stroke**, rounded joins, and an unfussy humanist feel that matches the clean-but-warm tone. *(Substitution flagged: Lucide is a substitute chosen to fit the brand; no original icon set existed.)*

- **Load:** via CDN — `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or per-icon SVG.
- **Style rules:** stroke icons only (no filled/duotone), inherit `currentColor`, default 20–24px, stroke-width 1.75. Walnut for default, rust for active/accent.
- **Music & faith glyphs:** `music`, `disc-3`, `play`, `calendar`, `map-pin`, `heart`, `church`, `mail`, `instagram`, `facebook`, `youtube`.
- **Emoji:** not used in brand UI. A single ♪ unicode note may appear as a small decorative mark in social only.
- **No hand-drawn SVG illustration** — keep iconography to the Lucide system; use real photography for everything pictorial.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import` manifest only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

**Tokens** (`tokens/`)
- `fonts.css` — webfont loading (Google Fonts CDN; see font note below).
- `colors.css` — color scales + semantic aliases.
- `typography.css` — families, weights, scale, roles.
- `spacing.css` — 4px spacing scale + layout sizes.
- `effects.css` — radii, shadows, borders, motion, blur.
- `base.css` — element defaults + brand utility classes (`.tbb-eyebrow`, `.tbb-scripture`, `.tbb-script`, `.tbb-container`).

**Assets** (`assets/`)
- `logo/wordmark.svg` — TB monogram + "The Bilderbacks" wordmark.
- `images/family-kids.jpg` — primary brand photograph.

**Foundation cards** (`guidelines/`) — specimen cards shown in the Design System tab (Type, Colors, Spacing, Brand).

**Components** (`components/core/`) — Button, IconButton, Badge, Tag, Card, Input, ScriptureBlock, SectionHeading, Avatar. See each `*.prompt.md`.

**UI kit** (`ui_kits/website/`) — interactive marketing-site recreation: Home, Music, Tour Dates, About.

---

### ⚠️ Font hosting note
Fonts are currently loaded from the **Google Fonts CDN** (Newsreader, Hanken Grotesk, Caveat) rather than self-hosted `.ttf`/`.woff2` files — the build environment couldn't download the binaries. For fully offline/portable use, drop self-hosted font files into `assets/fonts/` and replace the `@import` in `tokens/fonts.css` with `@font-face` rules. **Flagging for the client to confirm font licensing/hosting preference.**
