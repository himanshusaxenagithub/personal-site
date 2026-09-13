import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/config.ts";

// Static output (`dist/`) is the default and is what Cloudflare Pages expects.
// No @astrojs/cloudflare adapter is needed for a fully prerendered site.
export default defineConfig({
  site: site.url,
  output: "static",
  integrations: [sitemap()],
});
