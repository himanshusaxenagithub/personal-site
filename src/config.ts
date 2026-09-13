/**
 * Site-wide editable settings.
 * Update name, bio, socials, and nav here — content collections live in src/content/.
 */
export const site = {
  name: "Himanshu Saxena",
  tagline: "Software Senior Engineer at Dell Technologies",
  title: "Himanshu Saxena — Private cloud, STIG automation, and applied AI",
  description:
    "Software Senior Engineer at Dell Technologies. Escalation engineer focused on enterprise private cloud, DISA STIG security compliance automation, and applied AI.",
  /** Canonical origin used for sitemap, RSS, Open Graph, and robots.txt. */
  url: "https://hsaxena.com",
  locale: "en_US",
  location: "Shrewsbury, Massachusetts",
  email: "1992.hsaxena@gmail.com",
  bio: "Escalation engineer focused on enterprise private cloud, DISA STIG security compliance automation, and applied AI. Author and maintainer of open-source tooling that turns DISA STIGs into risk-ranked, actionable remediation.",
  about: [
    "I am a Software Senior Engineer at Dell Technologies, where I work as an escalation engineer on enterprise private cloud. My day-to-day focus is DISA STIG security compliance automation and the customer problems that show up when hardening is hard to operationalize.",
    "I have more than seven years of post-graduate experience. At Dell I authored STIG enforcement for VxRail Manager and own STIG customer escalations and testing across VxRail and Dell Private Cloud. Independently, I build vendor-neutral, MIT-licensed STIG tooling that converts DISA checklists into structured, severity-ranked remediation.",
    "I hold an M.S. in Operations Research from Northeastern University (2019) and a B.Tech. in Production and Industrial Engineering from Delhi Technological University (2015). Earlier undergraduate publications from that B.Tech program are listed under Papers; they are historical, not current research.",
  ],
} as const;

export const socials = {
  github: "https://github.com/himanshusaxenagithub",
  linkedin: "https://www.linkedin.com/in/himanshusaxena92",
  scholar: "https://scholar.google.com/citations?user=jidhZI0AAAAJ&hl=en",
  email: `mailto:${site.email}`,
} as const;

export type SocialKey = keyof typeof socials;

export const socialLabels: Record<SocialKey, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  scholar: "Google Scholar",
  email: "Email",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/blog", label: "Blog" },
  { href: "/writing", label: "Writing" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
] as const;
