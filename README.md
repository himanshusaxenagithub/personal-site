# Personal site

Static [Astro](https://astro.build) portfolio for **Himanshu Saxena**: projects, papers, blog, and writing. Built as HTML/CSS in `dist/` and meant for [Cloudflare Pages](https://developers.cloudflare.com/pages/).

Live site: [https://personal-site-5tg.pages.dev](https://personal-site-5tg.pages.dev).

## Edit content

| What | Where |
| --- | --- |
| Name, tagline, bio, email, socials, nav | [`src/config.ts`](src/config.ts) |
| Canonical site URL (sitemap, RSS, Open Graph) | `site.url` in [`src/config.ts`](src/config.ts) |
| Blog posts | [`src/content/blog/`](src/content/blog/) |
| Papers | [`src/content/papers/`](src/content/papers/) |
| Projects | [`src/content/projects/`](src/content/projects/) |
| Articles / writing | [`src/content/articles/`](src/content/articles/) |
| PDFs | [`public/papers/`](public/papers/) |

Content collections are defined in [`src/content.config.ts`](src/content.config.ts). Frontmatter is validated at build time.

- **Blog:** Markdown or MDX. Slug = file name. Set `draft: true` to hide a post from the index and RSS.
- **Papers:** `pdf` can be a local path (`/papers/your-file.pdf`) or a remote URL. Add `doi`, `arxiv`, `scholar`, and/or `url` as needed.
- **Projects:** require a `github` URL; `demo` is optional.
- **Articles:** set `externalUrl` for an outbound card, or omit it to publish on-site at `/writing/[slug]/`.

## Local development

Requires Node 22 (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

```bash
npm run build      # writes static files to dist/
npm run preview    # serve dist/ locally
```

Success check: `npm install && npm run build` completes and `dist/` contains HTML plus `rss.xml`, `robots.txt`, and `sitemap-index.xml`.

## Deploy on Cloudflare Pages

This project is **fully static**. Do not add the `@astrojs/cloudflare` adapter unless you later need SSR or Workers bindings.

Build settings (either path):

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** `22` (set `NODE_VERSION=22` in the dashboard if the build image is older)

[`wrangler.toml`](wrangler.toml) sets `pages_build_output_dir = "./dist"` so Wrangler treats this as a Pages project.

### 1. Dashboard: connect a Git repo

1. Push this repository to GitHub or GitLab.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Import a repository**.
3. Select the repo and configure:
   - Framework preset: Astro (or None)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (unless the app lives in a subdirectory)
   - Environment variable: `NODE_VERSION` = `22`
4. Deploy. Later pushes to the production branch rebuild automatically. Preview deployments are created for other branches and pull requests.

`site.url` in `src/config.ts` is set to the live Pages origin. Update it if the domain changes, then redeploy so sitemap, robots, RSS, and Open Graph URLs stay canonical.

### 2. CLI: `wrangler pages deploy`

```bash
npm install
npm run build
npx wrangler login
npx wrangler pages deploy dist
```

On the first run, Wrangler asks for a project name (this repo’s default is `personal-site` in `wrangler.toml`). Subsequent deploys reuse that project.

`npx wrangler pages deploy` without a path also works because `pages_build_output_dir` is set.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Bio, featured projects, recent posts, papers, writing |
| `/projects` | Project cards (GitHub + optional demo) |
| `/papers` | Publication list |
| `/papers/[slug]` | Paper abstract and links |
| `/blog` | Blog index |
| `/blog/[slug]` | Markdown post |
| `/writing` | External and on-site articles |
| `/writing/[slug]` | On-site article |
| `/about` | Longer bio and social links |
| `/rss.xml` | Blog RSS |
| `/robots.txt` | Allow-all + sitemap |
| `/sitemap-index.xml` | Generated sitemap |

## Design

Light editorial theme by default, with an optional dark mode (button in the header, or `prefers-color-scheme`). Styles are plain CSS in `src/styles/global.css` — no Tailwind or client UI framework.

## Optional: Cloudflare Workers static assets

Cloudflare now also recommends [Workers static assets](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/) for new sites. This repo targets **Pages** as requested. If you switch later, point Wrangler `assets.directory` at `./dist` and deploy with `npx wrangler deploy` instead of `pages deploy`. You still do **not** need the Astro Cloudflare adapter for a prerendered site.
