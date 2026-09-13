/**
 * Site-wide editable settings.
 * Update name, bio, socials, and nav here — content collections live in src/content/.
 */
export const site = {
  name: "H S",
  tagline: "Research, software, and writing.",
  title: "H S — Research, software, and writing",
  description:
    "Personal site for projects, publications, and notes. Replace this description in src/config.ts.",
  /** Canonical origin used for sitemap, RSS, Open Graph, and robots.txt. */
  url: "https://personal-site-5tg.pages.dev",
  locale: "en_US",
  email: "hello@example.com",
  bio: "I work at the intersection of research and software. This site is a placeholder portfolio — swap in your own projects, papers, and posts.",
  about: [
    "Hello — I’m H S. Use this page for a longer bio: education, current work, research interests, and how to reach you.",
    "Everything on this site is example content. Edit src/config.ts for identity and socials, then replace the Markdown files under src/content/.",
    "If you publish papers, keep PDFs in public/papers/ and link them from the papers collection. Blog posts are Markdown (or MDX) with an RSS feed at /rss.xml.",
  ],
} as const;

export const socials = {
  github: "https://github.com/your-username",
  scholar: "https://scholar.google.com/citations?user=PLACEHOLDER",
  linkedin: "https://www.linkedin.com/in/your-profile",
  email: `mailto:${site.email}`,
} as const;

export type SocialKey = keyof typeof socials;

export const socialLabels: Record<SocialKey, string> = {
  github: "GitHub",
  scholar: "Google Scholar",
  linkedin: "LinkedIn",
  email: "Email",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/blog", label: "Blog" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
] as const;
