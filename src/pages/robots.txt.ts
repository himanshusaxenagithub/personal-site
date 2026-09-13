import type { APIRoute } from "astro";
import { site } from "../config";

const getRobotsTxt = (sitemapURL: URL) =>
  `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site: contextSite }) => {
  const sitemapURL = new URL("sitemap-index.xml", contextSite ?? site.url);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
