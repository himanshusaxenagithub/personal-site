import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { site } from "../config";
import { getPublishedPosts } from "../lib/content";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${site.name} — Blog`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
