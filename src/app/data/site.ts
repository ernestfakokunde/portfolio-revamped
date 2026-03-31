export type SocialIconName = "email" | "github" | "linkedin" | "x";

export type ProjectStatus = "Live" | "In Progress";

export interface NavigationItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  impact: string;
  image: string;
  href: string;
  stack: string[];
  status: ProjectStatus;
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  summary: string;
  skills: string[];
}

export interface AboutCard {
  label: string;
  value: string;
}

export const navigationItems: NavigationItem[] = [
  { id: "projects", label: "Products" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/ernestfakokunde",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ernest-fakokunde-53713a336a",
    icon: "linkedin",
  },
  {
    label: "X",
    href: "https://x.com/CODE_WITH_AYO",
    icon: "x",
  },
  {
    label: "Email",
    href: "mailto:ernestfakokunde9@gmail.com",
    icon: "email",
  },
];

export const heroStats: StatItem[] = [
  {
    value: "12+",
    label: "Products launched",
    detail: "Platforms, interfaces, and polished digital experiences.",
  },
  {
    value: "Full stack",
    label: "Build range",
    detail: "Interfaces, APIs, dashboards, and product polish.",
  },
  {
    value: "Based in Abuja",
    label: "Collaboration",
    detail: "Open to remote product work, freelance delivery, and teams.",
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Spectra Invents",
    description:
      "A modern inventory platform for small businesses to track products, sales, and stock movement from one clean dashboard.",
    impact:
      "Built to help SMEs move from manual record keeping to a faster, more reliable workflow.",
    image: "/inventory.png",
    href: "https://spectra-invents.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Express"],
    status: "Live",
    featured: true,
  },
  {
    name: "Dev Connect",
    description:
      "A social and product marketplace experience that helps developers connect, collaborate, and discover opportunities.",
    impact:
      "Designed as a community-focused platform with both networking and product discovery in mind.",
    image: "/devconnect.png",
    href: "https://dev-connect-three-ebon.vercel.app",
    stack: ["React", "TypeScript", "Node.js"],
    status: "Live",
  },
  {
    name: "Virtual R Landing Page",
    description:
      "A visual-first landing page concept for a virtual reality brand with bold presentation and conversion-focused storytelling.",
    impact:
      "Showcases UI craft, visual hierarchy, and presentation design for product marketing.",
    image: "/virtualr.png",
    href: "#",
    stack: ["React", "Tailwind CSS"],
    status: "In Progress",
  },
  {
    name: "Coca-Cola Landing Page",
    description:
      "A branded landing page redesign focused on polish, rhythm, and an energetic visual system.",
    impact:
      "A focused design exercise that highlights layout, interaction, and front-end presentation quality.",
    image: "/cocacola.png",
    href: "https://coca-cola-three.vercel.app",
    stack: ["React", "Tailwind CSS"],
    status: "Live",
  },
  {
    name: "Campus Connect",
    description:
      "A student-focused platform for discovering departments, faculties, study groups, and trusted school resources.",
    impact:
      "Created to make campus information and peer collaboration easier to access in one place.",
    image: "/campus.png",
    href: "#",
    stack: ["Next.js", "Tailwind CSS", "MongoDB"],
    status: "In Progress",
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend systems",
    summary:
      "Interfaces that feel fast, clear, and thoughtfully structured across devices.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend delivery",
    summary:
      "Application logic and APIs built to support real product flows and dashboards.",
    skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Python"],
  },
  {
    title: "Workflow and product",
    summary:
      "A practical setup for shipping, debugging, and polishing product experiences.",
    skills: ["Git", "Figma", "Postman", "Docker", "Vercel"],
  },
];

export const workflowPoints = [
  "Clean UI structure",
  "Responsive layouts",
  "Component architecture",
  "API integration",
  "Interaction polish",
  "Performance-minded builds",
];

export const aboutParagraphs = [
  "I am Ernest Fakokunde, a full-stack developer focused on building modern web experiences that feel polished, useful, and easy to navigate.",
  "I study Computer Science at the Federal University of Technology, Minna, and I enjoy turning ideas into products that look sharp and work reliably.",
  "My work usually sits at the intersection of design sensitivity and engineering execution, so I care about both the experience people see and the systems that make it work.",
];

export const aboutCards: AboutCard[] = [
  { label: "Location", value: "Abuja, Nigeria" },
  { label: "Education", value: "B.Tech in Computer Science, in progress" },
  { label: "Focus", value: "Full-stack products, UI systems, and landing pages" },
  {
    label: "Style",
    value: "Clean structure, thoughtful motion, and strong visual polish",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "ernestfakokunde9@gmail.com",
    href: "mailto:ernestfakokunde9@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/ernestfakokunde",
    href: "https://github.com/ernestfakokunde",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ernest-fakokunde-53713a336a",
    href: "https://linkedin.com/in/ernest-fakokunde-53713a336a",
  },
];
