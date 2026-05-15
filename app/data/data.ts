import { Briefcase, GraduationCap, Code2, User2, Atom, Code, Triangle, Wind, Box, FileCode2, Server, Layers, Database, Leaf, Cloud, GitBranch, Container, Terminal } from "lucide-react";
import { FaFigma } from "react-icons/fa";

export const categories = ["All", "Web App", "AI/ML", "Mobile"];

export const workData = [
  {
    num: "01",
    title: "Design Anything",
    categories: ["AI/ML", "Web App"],
    description: "A platform for editing photos with AI features like background removal, style changes, and background replacement. Integrated AI models via API.",
    tech: ["Python", "AI API", "Backend"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://placehold.co/1200x800/1a1a1a/ffffff?text=Design+Anything" // placeholder
  },
  {
    num: "02",
    title: "NutriBot",
    categories: ["AI/ML", "Mobile"],
    description: "An intelligent nutritional assistant mobile application powered by machine learning to track macro and micronutrients daily based on users' dietary goals.",
    tech: ["Flutter", "TensorFlow", "Firebase"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://placehold.co/1200x800/1a1a1a/ffffff?text=NutriBot"
  },
  {
    num: "03",
    title: "Meet & Fight",
    categories: ["Web App"],
    description: "A real-time multiplayer platform allowing users to organize community events and virtual tournaments seamlessly.",
    tech: ["React.js", "Node.js", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://placehold.co/1200x800/1a1a1a/ffffff?text=Meet+%26+Fight"
  },
  {
    num: "04",
    title: "E-Learning",
    categories: ["Web App"],
    description: "A comprehensive learning management system with course progression tracking, interactive quizzes, and content delivery.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://placehold.co/1200x800/1a1a1a/ffffff?text=E-Learning"
  },
  {
    num: "05",
    title: "Roadmap-AI",
    categories: ["AI/ML", "Web App"],
    description: "An AI-powered application that generates personalized career or learning roadmaps based on user input and goals.",
    tech: ["OpenAI API", "React", "Express"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://placehold.co/1200x800/1a1a1a/ffffff?text=Roadmap-AI"
  },
  {
    num: "06",
    title: "Relity999",
    categories: ["Web App"],
    description: "A modern real estate platform that connects buyers with properties using advanced filters, map integration, and virtual tours.",
    tech: ["Vue.js", "Tailwind", "Supabase"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "https://placehold.co/1200x800/1a1a1a/ffffff?text=Relity999"
  }
];

export const certificatesData = [
  {
    title: "Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    year: "2026",
    credentialId: "2VX3Q542JXYQ",
    link: "#"
  },
  {
    title: "AI Praktis untuk Produktivitas",
    issuer: "Dicoding Indonesia",
    year: "2026",
    credentialId: "-",
    link: "#"
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM",
    year: "2026",
    credentialId: "d4ce8aae-6e70-4376-bf70-d464a4d70953",
    link: "#"
  },
  {
    title: "Data Literacy",
    issuer: "IBM",
    year: "2026",
    credentialId: "253bb31a-e9e3-4776-8162-eca9c7969b72",
    link: "#"
  },
  {
    title: "AI Literacy",
    issuer: "IBM",
    year: "2026",
    credentialId: "fba5b44b-1bc4-4ec3-b554-43417ab0dbac",
    link: "#"
  },
  {
    title: "AI Ethics",
    issuer: "IBM",
    year: "2026",
    credentialId: "ALM-COURSE_4058927",
    link: "#"
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google",
    year: "2025",
    credentialId: "123456789",
    link: "#"
  },
  {
    title: "Machine Learning Concepts",
    issuer: "Coursera",
    year: "2025",
    credentialId: "987654321",
    link: "#"
  }
];

export const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "about", label: "About Me", icon: User2 },
];

export const experienceData = [
  {
    role: "Artificial Intelligence / Machine Learning Engineer Intern",
    company: "Syntecxhub",
    date: "05/2026 — Present",
    description: "Working on AI Agent, building intelligent automation tools to streamline workflows and enhance user interactions."
  },
  {
    role: "Web Developer Intern",
    company: "Syntecxhub",
    date: "03/2026 — 04/2026",
    description: "Build website by order from office. Remote, India."
  },
  {
    role: "Web Developer Intern",
    company: "Ministry of Communication and Digital INDONESIA",
    date: "11/2025 — 03/2026",
    description: "Maintained and built features for web applications."
  }
];

export const educationData = [
  {
    role: "Candidate for Bachelor of Computer Science",
    company: "President University",
    date: "09/2024 — Present",
    description: "GPA 3.57 / 4.00. Majoring in Informatics. Honors: Jababeka Scholarship Awardee (Rank-2) 2024 (Aug 2024 - Aug 2026)."
  },
  {
    role: "Vocational High School",
    company: "SMK Daarut Tauhiid",
    date: "08/2021 — 05/2024",
    description: "Majoring in network engineering. Bandung."
  }
];

export const skillsData = [
  { name: "Backend Development", progress: 90 },
  { name: "Web Development", progress: 95 },
  { name: "Mobile Apps (Flutter)", progress: 85 },
  { name: "AI / Machine Learning", progress: 80 },
  { name: "Software Development", progress: 85 },
  { name: "Python", progress: 85 },
  { name: "Hardware Maintenance", progress: 75 },
  { name: "Prompt Engineering", progress: 80 },
];

export const stack = [
  {
    title: "FRONTEND",
    items: [
      { name: "React", icon: Atom, color: "text-cyan-400" },
      { name: "Next.js", icon: Triangle, color: "text-foreground" },
      { name: "TypeScript", icon: Code, color: "text-blue-500" },
      { name: "Tailwind", icon: Wind, color: "text-sky-400" },
    ]
  },
  {
    title: "BACKEND",
    items: [
      { name: "Node.js", icon: Box, color: "text-green-500" },
      { name: "Python", icon: FileCode2, color: "text-blue-600" },
      { name: "Express", icon: Server, color: "text-gray-500" },
      { name: "Laravel", icon: Layers, color: "text-red-500" },
    ]
  },
  {
    title: "DATABASE",
    items: [
      { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
      { name: "MongoDB", icon: Leaf, color: "text-green-500" },
      { name: "MySQL", icon: Database, color: "text-blue-500" },
      { name: "Appwrite", icon: Cloud, color: "text-pink-500" },
    ]
  },
  {
    title: "TOOLS & DEVOPS",
    items: [
      { name: "Git", icon: GitBranch, color: "text-orange-500" },
      { name: "Docker", icon: Container, color: "text-blue-500" },
      { name: "VS Code", icon: Terminal, color: "text-blue-500" },
      { name: "Figma", icon: FaFigma, color: "text-purple-500" },
    ]
  }
];

export const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading the frontend team in building scalable enterprise web applications. Improved rendering performance by 40% and established a comprehensive design system."
  },
  {
    role: "Fullstack Developer",
    company: "Creative Digital Agency",
    period: "2020 - 2022",
    description: "Developed and maintained interactive web experiences for global brands. Collaborated closely with designers to ensure pixel-perfect and accessible implementations."
  },
  {
    role: "Frontend Developer",
    company: "Startup Co.",
    period: "2018 - 2020",
    description: "Built the initial MVP of the company's core product. Implemented responsive designs and integrated with various third-party APIs."
  }
];

export const skills = [
  "TypeScript", "JavaScript", "React", "Next.js", "Node.js",
  "Tailwind CSS", "Framer Motion", "GraphQL", "REST APIs",
  "Git", "Supabase", "Firebase", "PostgreSQL", "Figma"
];

export const selectedProjects = [
  {
    title: "E-Commerce Platform",
    category: "Fullstack Development",
    year: "2023",
    slug: "ecommerce",
  },
  {
    title: "Financial Dashboard",
    category: "Frontend & UI/UX",
    year: "2023",
    slug: "dashboard",
  },
  {
    title: "Social Networking App",
    category: "Mobile & Backend",
    year: "2024",
    slug: "social",
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const allProjects = [
  {
    title: "Ecoomerce Storefront",
    category: "Fullstack",
    description: "A high-performance e-commerce storefront built with Next.js App Router and Shopify. Features dynamic routing, cart management, and seamless checkout.",
    year: "2024",
    link: "https://example.com",
    github: "https://github.com",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shopify"],
  },
  {
    title: "FinTech Dashboard",
    category: "Frontend UI",
    description: "A comprehensive financial dashboard interface with real-time data visualization, dark mode support, and accessibility-first components.",
    year: "2023",
    link: "https://example.com",
    github: "https://github.com",
    tags: ["React", "Vite", "D3.js", "Framer Motion"],
  },
  {
    title: "AI Writing Assistant",
    category: "Web Application",
    description: "An AI-powered writing tool that helps users generate and refine content. Integrates directly with OpenAI's API and features a custom rich text editor.",
    year: "2023",
    link: "https://example.com",
    github: "https://github.com",
    tags: ["Next.js", "OpenAI", "TipTap", "Clerk"],
  },
  {
    title: "Creative Agency Portfolio",
    category: "Web Design",
    description: "A showcase website for a creative agency featuring WebGL experiences, smooth page transitions, and complex scroll animations.",
    year: "2022",
    link: "https://example.com",
    github: "https://github.com",
    tags: ["Three.js", "GSAP", "React", "Styled Components"],
  },
  {
    title: "Real-time Chat Platform",
    category: "Fullstack",
    description: "A highly scalable chat application supporting channels, direct messages, and file sharing with a serverless architecture.",
    year: "2022",
    link: "https://example.com",
    github: "https://github.com",
    tags: ["React", "Firebase", "Node.js", "WebSockets"],
  },
];