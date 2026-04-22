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

- Keep it dependency-free. No build tools, no JS frameworks, no package.json.
- Preserve the existing visual style (see CSS custom properties at the top of
  `style.css`: `--accent` is habanero orange `#e14d2a`).
- The site is intentionally a single page. New sections go into `index.html`.
- Any structured data (JSON-LD) goes inline in `<script type="application/ld+json">`
  blocks — we already have `SoftwareApplication` and `FAQPage`.
- App Store URL: `https://apps.apple.com/app/kanbanero/id1645553955`
- Price: **$8.99**, one-time purchase.

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
