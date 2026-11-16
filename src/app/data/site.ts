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
  category: string;
  description: string;
  problem: string;
  features: string[];
  impact: string;
  image: string;
  href: string;
  stack: string[];
  status: ProjectStatus;
  github?: string;
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
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "about", label: "Approach" },
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
    value: "Websites",
    label: "For businesses",
    detail: "Clear, responsive sites that explain your offer and invite enquiries.",
  },
  {
    value: "Full stack",
    label: "From idea to product",
    detail: "Frontend, backend, integrations, and practical admin tools.",
  },
  {
    value: "Based in Abuja",
    label: "Collaboration",
    detail: "Available for freelance projects and remote collaboration.",
  },
];

export const services = [
  { title: "Business websites", description: "Build credibility, explain your services, and give customers a clear way to get in touch.", solves: "Outdated sites, unclear offers, and missed enquiries.", stack: "Next.js, React, responsive design" },
  { title: "Custom web applications", description: "Turn a product idea or customer need into a useful web application shaped around real workflows.", solves: "Manual processes and disconnected customer experiences.", stack: "React, Next.js, Node.js, APIs" },
  { title: "Business management systems", description: "Bring inventory, sales, reporting, and day-to-day operations into one place.", solves: "Scattered records and limited operational visibility.", stack: "Dashboards, databases, REST APIs" },
  { title: "MVP and startup development", description: "Plan and build a functional first version so founders can put their product idea into use.", solves: "A product idea that needs a clear, buildable first release.", stack: "Frontend, backend, product workflows" },
  { title: "API and payment integrations", description: "Connect your application to payment providers and the external services your workflow depends on.", solves: "Manual handoffs between tools and payment steps.", stack: "REST APIs, Paystack, third-party services" },
  { title: "Agency development support", description: "Add dependable frontend or full-stack implementation capacity to an agency project.", solves: "A delivery team that needs extra engineering support.", stack: "React, Next.js, TypeScript" },
];

export const projects: ProjectItem[] = [
  {
    name: "Spectra Invents",
    category: "Business product / personal project",
    description:
      "An inventory and sales management application for keeping products, purchasing, and business activity organised.",
    problem: "Businesses need a clearer view of stock and the activity that moves it.",
    features: ["Product and inventory management", "Sales and purchase tracking", "Business reporting", "Stock monitoring"],
    impact:
      "Built to help SMEs move from manual record keeping to a faster, more reliable workflow.",
    image: "/inventory.png",
    href: "https://spectra-invents.vercel.app/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Express"],
    status: "Live",
    featured: true,
  },
  {
    name: "Swiftbucks",
    category: "Payments product / personal project",
    description: "A VTU and digital payments application designed around wallet and transaction workflows.",
    problem: "Users need straightforward flows for wallet activity and digital service payments.",
    features: ["Wallet and payment experiences", "User-facing transaction workflows", "Integration-oriented architecture"],
    impact: "Built around payment flows and reliable transaction handling.",
    image: "/swiftbucks-1.png",
    href: "https://swiftbucks.vercel.app/",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Paystack", "VTpass"],
    status: "Live",
  },
  {
    name: "RecappEdu",
    category: "Education product / personal project",
    description: "An educational product that turns past exam papers into course-focused quizzes and flashcards.",
    problem: "Students need a more structured way to practise with course-relevant learning materials.",
    features: ["Course-focused quizzes and flashcards", "University and course profiles", "Shared moderated paper library", "Admin dashboard"],
    impact: "Designed to support focused study and shared educational resources.",
    image: "/recapp-1.png",
    href: "https://recapp-pi.vercel.app/",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Supabase Storage"],
    status: "Live",
  },
  {
    name: "Dev Connect",
    category: "Experiment",
    description:
      "A social and product marketplace experience that helps developers connect, collaborate, and discover opportunities.",
    problem: "A concept exploring how developers might connect and discover products.",
    features: ["Developer profiles", "Community connections", "Product discovery"],
    impact:
      "Designed as a community-focused platform with both networking and product discovery in mind.",
    image: "/devconnect.png",
    href: "https://dev-connect-three-ebon.vercel.app",
    stack: ["React", "TypeScript", "Node.js"],
    status: "Live",
  },
  {
    name: "Virtual R Landing Page",
    category: "Design experiment",
    description:
      "A visual-first landing page concept for a virtual reality brand with bold presentation and conversion-focused storytelling.",
    problem: "A concept exploring a more visual product landing page.",
    features: ["Brand-led presentation", "Responsive landing page"],
    impact:
      "Showcases UI craft, visual hierarchy, and presentation design for product marketing.",
    image: "/virtualr.png",
    href: "#",
    stack: ["React", "Tailwind CSS"],
    status: "In Progress",
  },
  {
    name: "Coca-Cola Landing Page",
    category: "Frontend experiment",
    description:
      "A branded landing page redesign focused on polish, rhythm, and an energetic visual system.",
    problem: "A visual exercise in presenting a familiar brand through a focused landing page.",
    features: ["Branded layout", "Responsive visual hierarchy"],
    impact:
      "A focused design exercise that highlights layout, interaction, and front-end presentation quality.",
    image: "/cocacola.png",
    href: "https://coca-cola-three.vercel.app",
    stack: ["React", "Tailwind CSS"],
    status: "Live",
  },
  {
    name: "Campus Connect",
    category: "Product experiment",
    description:
      "A student-focused platform for discovering departments, faculties, study groups, and trusted school resources.",
    problem: "Students need easier access to campus information and peer resources.",
    features: ["Campus information", "Study groups", "Student resources"],
    impact:
      "Created to make campus information and peer collaboration easier to access in one place.",
    image: "/campus.png",
    href: "#",
    stack: ["Next.js", "Tailwind CSS", "MongoDB"],
    status: "In Progress",
  },
  {
    name: "GitPulse",
    category: "Personal project",
    description:
      "A mobile Git productivity tracker built to help developers stay consistent and committed to their contribution streaks.",
    problem: "A mobile concept for making contribution activity easier to follow.",
    features: ["Git activity tracking", "Daily progress view"],
    impact:
      "Turns Git activity into a simple daily progress view that makes it easier to build lasting coding habits.",
    image: "/gitpulse.png",
    href: "https://github.com/ernestfakokunde/Git-Pulse",
    stack: ["Mobile", "Git", "Productivity"],
    status: "Live",
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
