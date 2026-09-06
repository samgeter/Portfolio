export const profile = {
  name: "SAMUEL GETACHEW",
  displayName: "Samuel Getachew",
  location: "Addis Ababa, Ethiopia",
  email: "samgatemul@gmail.com",
  phone: "+251 988 490 096",
  linkedin: "https://www.linkedin.com/in/samuel--getachew/",
};

export const projects = [
  {
    name: "Yuba",
    description:
      "An AI-powered, multi-tenant SaaS platform for founder workflows, cohort and portfolio management, role-based access, and structured venture validation.",
    focus: "AI SaaS · Product lead · Full-stack",
    accent: "from-[#7c9cff] to-[#9d7cff]",
    url: "https://yubanow.com/",
  },
  {
    name: "Apptus",
    description:
      "An AI-powered platform helping entrepreneurship support organizations discover founders, tailor applications, and run rubric-based selection workflows.",
    focus: "Internal tools · AI automation",
    accent: "from-[#5fd6c8] to-[#77a8ff]",
    url: "https://app.useapptus.com/",
  },
  {
    name: "DossieScholar",
    description:
      "An AI knowledge platform that turns university research papers into structured, searchable records through OCR, RAG, and vector search.",
    focus: "OCR · RAG · Vector search",
    accent: "from-[#d4a6ff] to-[#7c9cff]",
  },
  {
    name: "Mentel",
    description:
      "A private product currently kept intentionally under wraps. Product context and technical decisions are available in a direct conversation.",
    focus: "Private product · Zero to one",
    accent: "from-[#ffb36b] to-[#d67cff]",
  },
  {
    name: "Zeb",
    description:
      "A confidential build spanning product definition, interface design, and production engineering. More details are available on request.",
    focus: "Private product · Software engineering",
    accent: "from-[#76e7b5] to-[#7c9cff]",
  },
];

export const skillGroups = [
  {
    label: "Product engineering",
    skills: ["TypeScript", "JavaScript", "React", "FastAPI"],
  },
  {
    label: "Backend and data",
    skills: ["Python", "PostgreSQL", "Supabase", "REST APIs", "RBAC"],
  },
  {
    label: "AI systems",
    skills: ["LangChain", "LangGraph", "RAG", "Qdrant", "Azure OpenAI", "OCR"],
  },
  {
    label: "Cloud and operations",
    skills: ["Microsoft Azure", "Redis", "Celery", "Locust", "Git and GitHub"],
  },
];

export const experience = [
  {
    period: "AUG 2024 — PRESENT",
    title: "Product Lead & Software Engineer",
    company: "Yuba Labs Ltd · Kigali, Rwanda",
    highlights: [
      "Designed and led Yuba, an AI-powered multi-tenant SaaS platform for venture workflows, cohorts, portfolios, and operational programs.",
      "Built Supabase and PostgreSQL data models, tenant isolation, authentication, RBAC, dashboards, booking, usage controls, and structured AI workflows across Yuba and Apptus.",
    ],
  },
  {
    period: "DEC 2024 — AUG 2025",
    title: "Product Lead & Software Engineer",
    company: "Dossie Technologies · Addis Ababa, Ethiopia",
    highlights: [
      "Validated an AI medical-record digitization workflow across 147 hospitals and health centers with 167 healthcare professionals.",
      "Built DossieScholar with OCR, RAG, vector search, Python and FastAPI, then tested concurrent API performance and deployed services on Microsoft Azure.",
    ],
  },
  {
    period: "DEC 2022 — JUN 2023",
    title: "Software Engineer",
    company: "AgriStar · Addis Ababa, Ethiopia",
    highlights: [
      "Developed a digital market-linkage and scientific consultation platform for smallholder farmers around the AASTU community.",
      "Helped the product place third in the Agriculture, Youth and Technology Africa Challenge.",
    ],
  },
  {
    period: "OCT 2022 — FEB 2023",
    title: "Software Engineering Intern",
    company: "Safe Transport Technology · Addis Ababa, Ethiopia",
    highlights: [
      "Built a marketing-outreach data collection tool using Telepathy, an OSINT framework for Telegram discovery.",
      "Streamlined the organization of outreach data to support targeting and campaign execution.",
    ],
  },
];
