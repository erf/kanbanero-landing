#!/usr/bin/env node
// Renders scripts/og-template.html to images/og.png at exactly 1200x630.
// Uses puppeteer's bundled Chromium so it Just Works.
//
// Usage: node scripts/render-og.mjs

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');

const templateUrl = 'file://' + resolve(__dirname, 'og-template.html');
const outPath = resolve(root, 'images', 'og.png');

const browser = await puppeteer.launch();
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.goto(templateUrl, { waitUntil: 'networkidle0' });

  const el = await page.$('.card');
  if (!el) throw new Error('.card element not found');

  await el.screenshot({ path: outPath, type: 'png', omitBackground: false });
  console.log(`wrote ${outPath}`);
} finally {
  await browser.close();
}
