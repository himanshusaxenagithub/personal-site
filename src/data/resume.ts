export type Role = {
  title: string;
  org: string;
  location: string;
  dates: string;
  highlights: string[];
};

export type Education = {
  credential: string;
  school: string;
  dates: string;
  notes?: string;
};

export const roles: Role[] = [
  {
    title: "Software Senior Engineer",
    org: "Dell Technologies (EMC)",
    location: "Hopkinton, MA",
    dates: "July 2023 – Present",
    highlights: [
      "Own DISA STIG customer escalations, STIG software testing, and defect reporting across VxRail and Dell Private Cloud.",
      "Authored and continue to own STIG enforcement for VxRail Manager (Python and Bash).",
      "Built AI-powered log analysis with Flask, RAG over Chroma, and MCP connectors for Jira, GitHub, and Confluence.",
      "Developed an agentic AI framework of reusable skills for multi-step root-cause analysis.",
      "Reliability and telemetry work, including First-Try Upgrade Success Rate improvements and a DNS workaround that reduced upgrade escalations.",
      "Lifecycle engineering across vSphere, vSAN, ESXi, Linux, PowerShell, and REST APIs.",
    ],
  },
  {
    title: "Software Engineer II",
    org: "Dell Technologies (EMC)",
    location: "Hopkinton, MA",
    dates: "July 2019 – July 2023",
    highlights: [
      "Developed the STIG enforcement implementation for VxRail Manager.",
      "Infrastructure automation: Python modules and Ansible playbooks and guides for Day-1 and Day-2 VxRail operations; contributor to the public dell/ansible-vxrail collection.",
      "API quality, data analytics and reporting, and triage with VMware and support organizations.",
      "Dell Technologies Inspire Game Changer 1 Award (October 2021) for the first Ansible playbook shipped with VxRail.",
    ],
  },
  {
    title: "IT Business Analyst",
    org: "John Hancock",
    location: "Boston, MA",
    dates: "January 2018 – August 2018",
    highlights: [
      "ETL in Informatica and an Azure data warehouse, plus Power BI reporting (55 reports and 12 dashboards).",
      "Workflow automation with Microsoft Flow and Adobe Sign; Salesforce, Dynamics, and SQL data work.",
    ],
  },
  {
    title: "Graduate Engineering Trainee",
    org: "Royal Enfield",
    location: "Delhi, India",
    dates: "August 2015 – July 2016",
    highlights: [
      "Sales and supply-chain analytics, Power BI, forecasting, and inventory.",
    ],
  },
];

export const education: Education[] = [
  {
    credential: "M.S. Operations Research",
    school: "Northeastern University, College of Engineering, Boston, MA",
    dates: "May 2019",
  },
  {
    credential: "B.Tech. Production and Industrial Engineering",
    school: "Delhi Technological University",
    dates: "June 2015",
  },
];

export const teaching = [
  "Deterministic Operations Research (Fall 2017)",
  "Engineering Probability and Statistics (Fall 2018)",
];

export const certifications = [
  "Nutanix Certified Associate 6 (January 2026)",
  "Dell GenAI Foundations (July 2024)",
  "Dell Secure Development Blue Belt",
];

export const skillGroups = [
  {
    label: "Security & compliance",
    tags: ["DISA STIG", "XCCDF", "hardening"],
  },
  {
    label: "AI",
    tags: ["LLMs", "RAG", "vector databases", "agentic systems", "MCP"],
  },
  {
    label: "Languages",
    tags: ["Python", "Bash", "PowerShell", "YAML", "SQL"],
  },
  {
    label: "Platforms",
    tags: ["VxRail", "Dell Private Cloud", "VMware", "Ansible", "Linux"],
  },
  {
    label: "Containers",
    tags: ["Docker", "Kubernetes"],
  },
];
