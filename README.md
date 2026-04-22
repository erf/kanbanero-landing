# Kanbanero landing page

Minimal static landing page for [Kanbanero](https://apps.apple.com/app/kanbanero/id1645553955). No build step — just plain HTML + CSS.

## Local preview

Open `index.html` directly in a browser, or serve it:

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Assets

Place these files in `images/`:

- `icon.png` — 512×512 app icon (or larger, square)
- `screenshot-1.png` … `screenshot-4.png` — the 4 App Store screenshots
- `preview.mp4` — the App Store preview video
- `og.png` — 1200×630 social share image

Filenames are referenced in `index.html`.

## Hosting (GitHub Pages)

1. Push this repo to GitHub as a public repo.
2. Settings → Pages → Source: `Deploy from a branch` → Branch: `main`, folder: `/ (root)`.
3. Site goes live at `https://<user>.github.io/kanbanero-landing/`.

## Custom domain

1. Add a `CNAME` file at the repo root containing just your domain:

   ```
   kanbanero.app
   ```

2. At your registrar, add DNS records:

   - Apex (`kanbanero.app`): 4 `A` records pointing to GitHub Pages IPs
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: `CNAME` to `<user>.github.io`

3. In Pages settings, set the custom domain and enable "Enforce HTTPS".
