/*
  ─────────────────────────────────────────────────────────────
  RAUSHANPORTFOLIO — CONTENT (single source of truth)
  ─────────────────────────────────────────────────────────────
  All user-facing content lives here. This file now holds the
  owner's real resume information. Everything the site renders
  reads from this one file, so edits here update everywhere.

  No information below has been invented. Anything not provided
  (a resume PDF, per-project URLs, a deployment domain) is kept
  null or a placeholder rather than faked.
  ─────────────────────────────────────────────────────────────
*/

/**
 * Where the deployed site will live. No live domain supplied yet —
 * a placeholder base keeps canonical/OG URLs valid at build.
 */
export const SITE_URL = "https://raushankumar1503.github.io/portfolio";

/** Owner — real profile details. */
export const profile = {
  name: "Raushan Kumar",
  firstName: "Raushan",
  lastName: "Kumar",
  /** Honest, grounded positioning — no exaggerated titles. */
  role: "Computer Science Engineering student & developer",
  /** Editorial introduction — the owner's suggested framing. */
  intro:
    "Computer Science Engineering student and developer building modern web applications, AI-powered tools, and algorithmic solutions.",
  /** One-line summary for the meta description and structured data. */
  summary:
    "Portfolio of Raushan Kumar — Computer Science Engineering student and full-stack developer building modern web applications, AI-powered tools, and algorithmic solutions.",
  /** Based in India (studying at Lovely Professional University, Phagwara). */
  location: "India",
};

import { withBasePath } from "@/lib/basePath";

/** Professional contact links — all real. */
export const links = {
  email: "raushankumar85881@gmail.com",
  phone: "+91-8837426289",
  github: "https://github.com/raushankumar1503",
  linkedin: "https://www.linkedin.com/in/raushan-kumar13",
  /** Placeholder PDF until a real resume file is provided. */
  resume: withBasePath("/Raushan-Kumar-CV.pdf"),
};

/** Primary/secondary hero actions. */
export const heroCta = {
  primary: { label: "View projects", href: "#projects" },
  secondary: { label: "Download CV", href: links.resume, download: true },
};

export const about = {
  heading: "About",
  /** Concise, honest editorial paragraphs about the owner's work. */
  body: [
    "I'm a Computer Science Engineering student who likes turning hard problems into practical products — from web applications and AI-powered tools to algorithmic solutions. I care that software is fast, accessible, and considered.",
    "My work spans the full stack: responsive interfaces with React, Next.js, and Tailwind CSS, and the logic behind them in C++, JavaScript, Python, and SQL. Recent projects include an AI storytelling platform and a full-stack PDF toolkit.",
    "I grow by building and by competing — hackathons and hands-on projects keep sharpening my problem-solving, my teamwork, and how I approach real software.",
  ],
};

export const education = {
  heading: "Education",
  items: [
    {
      institution: "Lovely Professional University, Phagwara",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      period: "2024 — Present",
      focus: "CGPA: 6.50",
    },
    {
      institution: "Millat College, Darbhanga",
      degree: "Intermediate",
      field: "Higher Secondary",
      period: "2021 — 2023",
      focus: "Percentage: 67%",
    },
    {
      institution: "R.Y. High School, Budhnagra",
      degree: "Matriculation",
      field: "Secondary",
      period: "2019 — 2021",
      focus: "Percentage: 71%",
    },
  ],
};

export const skills = {
  heading: "Technical Skills",
  /** Grouped skills from the owner's resume. No fake proficiency levels. */
  categories: [
    {
      name: "Languages",
      items: ["C++", "JavaScript", "C", "Java", "Python"],
    },
    {
      name: "Frontend & Frameworks",
      items: ["HTML", "CSS", "Bootstrap", "React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      name: "Databases & Platforms",
      items: ["MySQL", "MongoDB", "Firebase", "Supabase", "Vercel"],
    },
    {
      name: "Tools",
      items: ["Git", "GitHub"],
    },
    {
      name: "Soft Skills",
      items: ["Problem-Solving", "Team Player", "Quick Learner", "Adaptability"],
    },
  ],
};

export type ProjectItem = {
  title: string;
  date: string;
  blurb: string;
  problem: string;
  stack: string[];
  features: string[];
  github: string | null;
  demo: string | null;
};

export const projects: { heading: string; intro: string; items: ProjectItem[] } = {
  heading: "Featured Projects",
  intro:
    "Selected work — each project documented with its purpose, what it does, and the stack behind it.",
  /**
   * No repository or live URLs were provided for these projects, so
   * github/demo are left null. The Projects section only renders a
   * link when a real URL exists — nothing is invented here.
   */
  items: [
    {
      title: "Navigation Route Planner",
      date: "July — August 2026",
      blurb: "Finds optimal paths between a source and destination across a weighted network.",
      problem:
        "To explore how graph traversal and shortest-path algorithms solve a real routing problem.",
      stack: ["C++", "Data Structures", "Graphs", "BFS / DFS", "STL"],
      features: [
        "Implements BFS and DFS traversal to explore routes efficiently",
        "Models locations, connections, and distances as a weighted graph",
        "Android app built with MIT App Inventor for mobile access",
      ],
      github: null,
      demo: null,
    },
    {
      title: "Story Teller Bot",
      date: "April — May 2026",
      blurb: "An AI-powered storytelling platform that turns a title and genre into a story.",
      problem: "To make personalized story creation simple from just a title and a category.",
      stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
      features: [
        "Integrates an AI/LLM API for story generation",
        "Supports genres such as moral, sci-fi, and historical stories",
        "Role-based access control for dashboard visibility and data security",
      ],
      github: null,
      demo: null,
    },
    {
      title: "PDF Tools",
      date: "April — May 2026",
      blurb: "A full-featured PDF utility platform for converting, compressing, merging, and splitting documents.",
      problem: "To bring everyday PDF tasks together in one fast, accessible tool.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
      features: [
        "Offers multiple PDF processing tools — convert, compress, merge, and split",
        "Responsive and user-friendly interface",
        "Role-based access control for dashboard visibility and data security",
      ],
      github: null,
      demo: null,
    },
  ],
};

export const experience = {
  heading: "Learning Journey",
  intro:
    "A honest, chronological look at the milestones, project work, and learning phases along the way.",
  items: [
    {
      title: "Foundations in geo-data and security",
      org: "Indian Space Research Organisation (ISRO)",
      period: "March 2025",
      points: ["Completed the ISRO course 'Geo-data Sharing and Cyber Security'."],
    },
    {
      title: "Applied full-stack & AI development",
      org: "Personal projects",
      period: "April — August 2026",
      points: [
        "Built an AI storytelling platform and a full-stack PDF toolkit — integrating LLM APIs, managing data, and enforcing access control.",
      ],
    },
    {
      title: "Learning through competition",
      org: "Hackathons & technical events",
      period: "Ongoing",
      points: [
        "Taking part in hackathons and technical competitions, strengthening problem-solving, teamwork, and software development.",
      ],
    },
  ],
};

export const achievements = {
  heading: "Achievements",
  /** Genuine items only — as stated by the owner. */
  items: [
    "Completed the ISRO course 'Geo-data Sharing and Cyber Security', conducted by the Indian Space Research Organisation.",
    "Completed 'Database Management System – Part 1' through Infosys Springboard.",
    "Participated in hackathons and technical competitions, gaining practical experience in problem-solving, teamwork, and software development.",
  ],
};

export const certifications = {
  heading: "Certifications",
  items: [
    {
      title: "Full Stack Web Bootcamp",
      org: "Udemy",
      date: "January 2026",
      credential: null,
    },
    {
      title: "Geo-data Sharing and Cyber Security",
      org: "Indian Space Research Organisation (ISRO)",
      date: "March 2025",
      credential: null,
    },
    {
      title: "Database Management System – Part 1",
      org: "Infosys",
      date: "August 2026",
      credential: null,
    },
  ],
};

export const resume = {
  heading: "Resume / CV",
  /** No real CV PDF supplied yet — points at the placeholder file. */
  file: withBasePath("/Raushan-Kumar-CV.pdf"),
  previewNote:
    "A placeholder CV is shown here. Add your real CV to replace the preview and download buttons.",
};

export const contact = {
  heading: "Contact",
  intro:
    "Have a role, a project, or a question? Reach me directly below — or use the form.",
  note: "This form is a UI placeholder and does not yet send messages. Use the direct links in the meantime.",
};

export const footer = {
  closing:
    "Built with care — thoughtful code, measured design, and an eye for the details.",
  copyright: "Raushan Kumar. All rights reserved.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
