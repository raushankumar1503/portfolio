# RaushanPortfolio — Static QC Report & Handoff

**Deliverable:** `raushan-kumar-portfolio/` — a premium 3D portfolio for Raushan Kumar,
authored as a Next.js 15 + TypeScript + Tailwind v4 + React Three Fiber + Framer Motion project.

**Important:** this project was built in a **network-isolated sandbox**, so it could NOT be
`npm install`-ed or `next build`-ed here. The QC below is therefore a *static review by
inspection*, not a compile/lighthouse run. You must run the build commands on your own machine.
I have been deliberately rigorous because of this.

---

## 1. Build steps (you must run these)

```bash
cd raushan-kumar-portfolio
npm install
npm run build      # full production build + TypeScript type-check
npm run lint       # ESLint
npm run dev        # local preview
npm run start      # serve the production build
```

`SITE_URL`, fonts (Google Fonts via `next/font`), and dependencies all resolve from the npm
registry on your machine. If anything fails, the output should be a normal, actionable Next.js
error — report it and I'll fix it.

---

## 2. What was statically verified

| Check | Result |
|-------|--------|
| Project structure / file tree | 27 TS/TSX source files, correct layout |
| `@/` import paths all resolve | ✅ (scripted scan) |
| Every `target="_blank"` has `rel="noopener noreferrer"` | ✅ |
| No `console.log` / `TODO` / `@ts-ignore` / eslint-disable | ✅ |
| Design tokens present in `@theme` (paper, ink, accent, line, focus + shades) | ✅ |
| Tailwind color/arbitrary-value class names map to defined tokens | ✅ |
| Framer Motion easing typed as the 4-tuple (`EASE`) to satisfy strict TS | ✅ |
| Single `<main>`, skip link, one `<h1>`, sections `aria-labelledby` | ✅ |
| 3D isolated to a lazy, decorative, `ssr:false`, reduced-motion-aware Canvas | ✅ |
| No fabricated personal data — all unknown fields are `[YOUR …]` placeholder or filtered out | ✅ |
| JSON-LD emits `sameAs` only for real (http) links | ✅ |

**Version-pinning risk (the main residual):** `^` ranges let npm pick the newest compatible
patch. These major/minor versions are mutually compatible by release pairing (Next 15 ↔ React 19
↔ Tailwind 4 ↔ R3F 9 ↔ Drei 10 ↔ Framer Motion 12). The one thing I cannot verify without a
build is whether the *latest* patches each npm resolves are still compatible — this is the
standard and expected trade-off of not being able to install here.

---

## 3. Where your real info goes

Edit **one file: `src/content/portfolio.ts`** (see README table). Replace every `[YOUR …]`:

- `profile` — name, role, intro, summary, location
- `links` — email, github, linkedin, resume path
- `about.body`, `education.items`, `skills.categories`, `projects.items`,
  `experience.items`, `achievements.items`, `certifications.items`, `contact`, `footer`, `nav`
- Replace `public/resume-placeholder.pdf` with a real PDF (or repoint `links.resume`)
- Set `SITE_URL` to your real domain when deployed (drives the OG image, sitemap, robots, canonical)

---

## 4. Notes / caveats

- **Contact form is a UI placeholder** and does not send messages until a backend is wired in;
  submission currently shows an explicit notice.
- **Socials**: GitHub/LinkedIn only render in the footer and contact when their URL starts with
  `http` — placeholders stay hidden so there are no broken fake links.
- **OG social card** is auto-generated (`next/og`) on the paper/ink identity; no image asset to
  maintain.