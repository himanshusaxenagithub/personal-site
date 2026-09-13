---
title: "How this example site is built"
description: "A second sample post describing the Astro content collections and Cloudflare Pages setup."
pubDate: 2026-04-02
updatedDate: 2026-04-18
tags: ["astro", "example"]
---

The site is a static Astro project:

1. Identity and socials live in `src/config.ts`.
2. Blog posts, papers, projects, and articles are **content collections** defined in `src/content.config.ts`.
3. `npm run build` writes HTML, CSS, sitemap, robots.txt, and RSS into `dist/`.
4. Cloudflare Pages serves that folder. No server adapter is required.

If you want a new post, add a Markdown file next to this one. The slug is the file name.
