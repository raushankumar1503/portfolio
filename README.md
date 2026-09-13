# RaushanPortfolio

A premium, sophisticated 3D personal portfolio for **Raushan Kumar** — built with Next.js (App
Router), TypeScript, Tailwind CSS v4, React Three Fiber, and Framer Motion.

Editorial-technical identity: warm paper + deep ink, one refined steel-blue accent, restrained
motion, and a single subtle 3D hero that enhances rather than dominates.

> **Heads-up on the environment:** this project was authored in a sandbox with no network
> access, so it could **not** be built/tested there. It is pinned to compatible stable
> versions and intended to be installed and built on your own machine. Please run the steps
> below (especially `npm run build`) once.

---

## Getting started

```bash
# 1. Install dependencies (run on your machine, not the sandbox)
npm install

# 2. Run locally
npm run dev

# 3. Production build + type-check + lint
npm run build      # runs next build (includes TS type-check)
npm run lint       # ESLint

# 4. Serve the production build
npm run start
```

> `npm run build` is the gate. If it passes, the site is healthy. If you hit an issue, run it
> again with `NODE_OPTIONS=--max-old-space-size=4096` if memory is a concern.

---

## Adding your real information (the only file you need to edit)

Everything user-facing is driven by **`src/content/portfolio.ts`** — one typed file. Replace
every `[YOUR ...]` value:

| Field | Where |
|------|-------|
| Name / role / intro / location | `profile` |
| Email, GitHub, LinkedIn, resume path | `links` |
| About paragraphs | `about.body` |
| Education | `education.items` |
| Skills | `skills.categories` |
| Projects | `projects.items` |
| Experience / journey | `experience.items` |
| Achievements | `achievements.items` |
| Certifications | `certifications.items` |
| Resume path | `resume.file` |
| Contact intro | `contact` |
| Footer text | `footer` |
| Nav links | `nav` |

**Resume:** put your real PDF at `public/resume-placeholder.pdf` (replace the file) or set
`links.resume` / `resume.file` to a new path and add that file under `public/`.

**Deployment URL:** set `SITE_URL` in `src/content/portfolio.ts` to your live domain once
deployed. The `opengraph-image` and `sitemap`/`robots` use it.

**Contact form:** it is a **UI placeholder** and does not send anything. Wire it to a real
backend or mail service before going live — it currently shows a notice when submitted.

---

## Tech stack & versions

- Next.js **15** (App Router), React **19**, TypeScript **5.8**
- Tailwind CSS **v4** (CSS-first config, tokens in `src/app/globals.css`)
- `@react-three/fiber` **9** + `@react-three/drei` **10** + `three`
- `framer-motion` **12**
- No icon library and no other runtime deps — small, hand-drawn SVG icons.

---

## Project structure

```
public/                        static assets (placeholder resume, etc.)
src/
  app/
    layout.tsx                 fonts, metadata, JSON-LD, nav/footer shell
    page.tsx                   composes all sections in order
    globals.css                design-system tokens (Tailwind v4 @theme)
    sitemap.ts  robots.ts      SEO
    icon.tsx  opengraph-image.tsx
  components/
    site/                      shared UI: Container, Button, Nav, Footer, icons
    motion/Reveal.tsx          the single, reduced-motion-aware reveal primitive
    hero/                      Hero + HeroCanvas (client, lazy-loaded 3D)
    sections/                  one component per page section
    seo/JsonLd.tsx             structured data
  content/portfolio.ts         ← ALL placeholder content lives here
  lib/cn.ts                    tiny class-merge helper
```

---

## Design system (one source, used everywhere)

Defined in `src/app/globals.css` (`@theme`):

- **Type** — Bricolage Grotesque (display/headings) + Inter (body), via `next/font`.
- **Palette** — `paper` `#f7f5f0`, `paper-raised`, `ink` `#16181d`, `ink-soft`, `ink-faint`,
  one accent `accent` `#2c4f86`, structural hairlines `line`/`line-strong`, `focus`.
- **Motion language** — a single restrained reveal (`Reveal`), a one-time hero entrance,
  subtle pointer parallax on the 3D. All motion is disabled under `prefers-reduced-motion`.

Every section consumes these tokens; nothing is styled ad-hoc.

---

## Accessibility & performance

- Semantic `<section>`/`<nav>`/`<footer>` with `aria-labelledby`, a skip link, labelled form
  fields, and visible `:focus-visible` rings in the accent/`focus` color (never removed).
- The 3D is fully decorative (`aria-hidden`), lazy-loaded (`next/dynamic`, `ssr: false`), and
  degrades to nothing — typography is never blocked. It respects `prefers-reduced-motion`.
- Only the hero uses client-side 3D; all other sections are server components.
- Fonts are self-hosted via `next/font` (no layout shift).

---

## Anti-AI-slop notes (intent)

This site deliberately avoids: excessive gradients/glassmorphism, neon glow, huge glowing type,
repetitive rounded-card kits, floating/random objects, particles, numbered markers where the
content isn't a real sequence, ALL-CAPS eyebrow labels, and em-dash label fragments. Projects
are **not** numbered (no implied ranking); only education and the learning journey are, because
those are genuinely chronological.