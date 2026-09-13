import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
export type Paper = CollectionEntry<"papers">;
export type Project = CollectionEntry<"projects">;
export type Article = CollectionEntry<"articles">;

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  const featured = projects.filter((project) => project.data.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
}

export async function getPapers(): Promise<Paper[]> {
  const papers = await getCollection("papers");
  return papers.sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
}

export async function getArticles(): Promise<Article[]> {
  const articles = await getCollection("articles");
  return articles.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatAuthors(authors: string[]): string {
  if (authors.length <= 2) return authors.join(" and ");
  return `${authors.slice(0, -1).join(", ")}, and ${authors.at(-1)}`;
}

export function articleHref(article: Article): string {
  return article.data.externalUrl ?? `/writing/${article.id}/`;
}

export function isExternalArticle(article: Article): boolean {
  return Boolean(article.data.externalUrl);
}
