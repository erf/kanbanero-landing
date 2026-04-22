# AGENT.md

Notes for AI coding agents (and humans) working on this repo.

## What this is

The static landing page for **Kanbanero**, a macOS kanban app.
Plain HTML + CSS, no build step, no framework, no JS dependencies.

- `index.html` — the single page
- `style.css` — styles (light + dark via `prefers-color-scheme`)
- `images/` — icon, screenshots, OG image, preview video
- `CNAME` — GitHub Pages custom-domain config (contains `kanbanero.app`)

## Hosting

- **Hosted on GitHub Pages** from the `main` branch of
  `github.com/erf/kanbanero-landing`.
- Pushing to `main` deploys automatically. There is no CI, no build.
- Custom domain: **kanbanero.app** (configured via `CNAME` file + Pages settings).

## Domain / DNS

- Registrar: **Namecheap**
- DNS records needed for `kanbanero.app` apex + `www` on GitHub Pages:
  - `A` @ → `185.199.108.153`
  - `A` @ → `185.199.109.153`
  - `A` @ → `185.199.110.153`
  - `A` @ → `185.199.111.153`
  - `CNAME` www → `erf.github.io.`
- Enable "Enforce HTTPS" in the GitHub Pages settings once the cert is issued.

## Editing guidance

- Keep the site itself dependency-free. No build tools, no JS frameworks, no
  runtime dependencies — `index.html` + `style.css` render as-is.
- There is **one exception**: `scripts/render-og.mjs` is an offline helper that
  regenerates `images/og.png` from `scripts/og-template.html` using puppeteer.
  It is never run in CI, never shipped, and never required to view the site —
  it exists only so a human can reproducibly rebuild the social-share image.
  See "Regenerating the OG image" below.
- Preserve the existing visual style (see CSS custom properties at the top of
  `style.css`: `--accent` is habanero orange `#e14d2a`).
- The site is intentionally a single page. New sections go into `index.html`.
- Any structured data (JSON-LD) goes inline in `<script type="application/ld+json">`
  blocks — we already have `SoftwareApplication` and `FAQPage`.
- App Store URL: `https://apps.apple.com/app/kanbanero/id1645553955`
- Price: **$8.99**, one-time purchase.

## Regenerating the OG image

`images/og.png` is the 1200×630 social-share card (Open Graph / Twitter).
It is committed to the repo and shipped as-is; regeneration is only needed
when the wording, branding, or screenshot changes.

```
npm install   # one-time; installs puppeteer into node_modules/ (gitignored)
npm run og    # renders scripts/og-template.html to images/og.png at 2x
```

- Template: `scripts/og-template.html` — hand-edit text, layout, crop, colors.
- Renderer: `scripts/render-og.mjs` — headless Chromium via puppeteer.
- Output: `images/og.png` (2400×1260, downscales cleanly to 1200×630).
- After regenerating, commit the updated PNG alongside the template change.

`node_modules/` is gitignored. `package-lock.json` is committed for
reproducibility.

## Deploying changes

```
git add -A
git commit -m "…"
git push origin main
```

GitHub Pages will rebuild in a minute or two.

## Useful links

- Live site: https://kanbanero.app/
- Repo: https://github.com/erf/kanbanero-landing
- Rich-results test: https://search.google.com/test/rich-results
- OG preview test: https://www.opengraph.xyz/
