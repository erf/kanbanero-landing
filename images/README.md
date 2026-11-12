# Place these files here

Replace the filenames referenced in `../index.html`:

- `icon.png` — app icon (already copied from `assets/icon/icon.png`; replace with a higher-res version if you have one)
- `screenshot-1.jpg` … `screenshot-5.jpg` — the en-US Mac App Store screenshots
  from the app repo (`store/app-store/screenshots/mac/en-US/`), converted with
  `sips -s format jpeg -s formatOptions 85` to keep the page light
- `preview.mp4` — the en-US Mac App Store preview video from the app repo
  (`store/app-store/previews/mac/en-US/preview.mp4`, made by
  `screenshot_test/generate_preview.sh`), re-encoded to keep the page light:
  `ffmpeg -i <video> -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k -movflags +faststart preview.mp4`
- `preview-poster.jpg` — the video's first frame, shown before it plays:
  `ffmpeg -i preview.mp4 -frames:v 1 -q:v 3 preview-poster.jpg`
- `og.png` — 1200×630 social share image

Until you drop them in, broken image icons will show on the page.
