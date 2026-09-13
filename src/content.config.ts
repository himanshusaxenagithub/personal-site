import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  loader: glob({ base: "./src/content/papers", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number().int(),
    venue: z.string(),
    abstract: z.string(),
    pdf: z.string().optional(),
    doi: z.string().url().optional(),
    arxiv: z.string().url().optional(),
    scholar: z.string().url().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    github: z.string().url(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
  }),
});

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    source: z.string().optional(),
    /** External publication URL. Omit for an on-site article at /writing/[slug]. */
    externalUrl: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, papers, projects, articles };
