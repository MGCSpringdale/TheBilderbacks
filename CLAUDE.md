# Project Context

## Design System — The Bilderbacks

When creating any HTML designs, mockups, prototypes, or visual assets for this project, **always read and apply the Bilderbacks design system** located at `bilderbacks-ds/`.

### Key files to reference:
- `bilderbacks-ds/readme.md` — full brand guidelines: voice/tone, visual foundations, typography, colors, layout rules
- `bilderbacks-ds/SKILL.md` — quick reference cheat sheet
- `bilderbacks-ds/_ds_manifest.json` — all design tokens with exact values (colors, spacing, radii, shadows, fonts)
- `bilderbacks-ds/_ds_bundle.js` — bundled CSS and component code; inline into HTML `<style>` tags when creating self-contained HTML files
- `bilderbacks-ds/styles.css` — entry point (references token files)

### Quick summary:
- **Client:** The Bilderbacks — Southern Gospel family ministry, Springdale AR, since 1997
- **Palette:** cream/oat backgrounds, walnut text, rust (terracotta) primary, denim secondary, gold for scripture
- **Fonts (Google Fonts CDN):** Newsreader (display/headings/scripture), Hanken Grotesk (body/UI), Caveat (rare script flourish)
- **Feel:** modern-clean contemporary worship, generous radii (cards: 24px, media: 34px), warm diffuse shadows, no pure black
- **Voice:** warm, sincere, family-first; "we/our family" + "you/y'all"; sentence case; scripture in italic serif
- **Components:** Button, Badge, Card, Input, Avatar, ScriptureBlock, SectionHeading

When building HTML, inline the design tokens from `_ds_manifest.json` as CSS custom properties in `:root` and load fonts from Google Fonts CDN.
