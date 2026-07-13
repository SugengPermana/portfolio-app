import {
  Briefcase,
  GraduationCap,
  Code2,
  User2,
  Atom,
  Code,
  Triangle,
  Wind,
  Box,
  FileCode2,
  Server,
  Layers,
  Database,
  Leaf,
  Cloud,
  GitBranch,
  Container,
  Terminal,
} from "lucide-react";
import { FaFigma } from "react-icons/fa";
import { ReactIcon } from "../components/icons";
import { NextJsIcon } from "../components/icons/nextjs";
import { TypeIcon } from "../components/icons/typescript";
import { TailwindIcon } from "../components/icons/tailwind";
import { nodejsIcon } from "../components/icons/nodejs";
import { pythonIcon } from "../components/icons/python";
import { expressIcon } from "../components/icons/express";
import { LaravelIcon } from "../components/icons/laravel";
import { mongodbIcon } from "../components/icons/mongodb";
import { MysqlIcon } from "../components/icons/mysql";
import { PostgresqlIcon } from "../components/icons/postgresql";
import { dockerIcon } from "../components/icons/docker";
import { VscodeIcon } from "../components/icons/vscode";
import { GitIcon } from "../components/icons/git";
import { GravityIcon } from "../components/icons/antigravity";

export const categories = ["All", "Web App", "Design", "System Manajemen"];

export const workData = [
  {
    num: "01",
    title: "Bedakin",
    categories: ["Web App"],
    description:
      "Bedakin adalah website marketplace online yang memungkinkan pengguna untuk menjual dan membeli produk berbasis layanan. jadi setiap produk dilengkapi dengan informasi detail, serta fitur komentar dan review yang memungkinkan pengguna berbagi pengalaman mereka. Fitur ini membantu membangun kepercayaan dan transparansi antara pembeli dan penjual. Platform ini dirancang dengan fokus pada kemudahan penggunaan, sehingga pengguna dapat menjelajahi layanan, memberikan feedback, dan berinteraksi dengan mudah di dalam sistem marketplace.",
    tech: ["Tailwind", "NextJs", "Typescript", "Express", "Neon DB"],
    githubUrl: "https://github.com/SugengPermana/Bedakin",
    liveUrl: "https://bedakin.vercel.app/",
    imageUrl: "/bedakin.webp", // placeholder
  },
  {
    num: "02",
    title: "Belanja",
    categories: ["Web App"],
    description:
      "Belanja.com adalah website e-commerce yang memungkinkan pengguna untuk menjelajahi dan membeli produk melalui antarmuka frontend yang user-friendly. Pengguna dapat melihat daftar produk, membaca informasi detail, dan melakukan proses pembelian dengan lancar. Platform ini dirancang untuk memberikan pengalaman belanja yang responsif, cepat, dan nyaman bagi para pengguna. dan sistem ini cuma di buat dari sisi front end saja.",
    tech: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/SugengPermana/Belanja.com",
    liveUrl: "https://sugengpermana.github.io/Belanja.com/",
    imageUrl: "/belanja_com.webp",
  },
  {
    num: "03",
    title: "Villa Plus",
    categories: ["Web App"],
    description:
      "villaPlus adalah website villa pihak ketiga yang memungkinkan pengguna untuk menjelajahi website. villa ini punya pilihan dengan informasi detail untuk membantu pengguna menemukan akomodasi yang sesuai dengan kebutuhan dan preferensi mereka. Website ini dirancang dengan tampilan yang bersih, modern, dan mudah digunakan untuk memastikan pengalaman browsing yang nyaman.",
    tech: ["Tailwind", "NextJs", "Typescript"],
    githubUrl: "https://github.com/SugengPermana/villa-plus",
    liveUrl: "https://villa-plus.vercel.app/",
    imageUrl: "/villa_plus.webp",
  },
  {
    num: "04",
    title: "Task Manajemen",
    categories: ["Web App", "System Manajemen"],
    description:
      "Task Manajemen adalah sebuah sistem manajemen tugas yang memungkinkan pengguna untuk membuat dan mengelola tugas secara efisien. mirip aplikasi to do list, Pengguna dapat menambahkan tugas, memantau progres, memberi notifikasi dan mengatur pekerjaan mereka dalam satu platform terpusat. Sistem ini dirancang untuk membantu meningkatkan produktivitas dengan antarmuka yang sederhana, intuitif, dan mudah digunakan.",
    tech: ["HTML", "CSS", "Javascript", "Node.js"],
    githubUrl: "#",
    liveUrl: "https://task-manajemen.vercel.app/",
    imageUrl: "/Task_manajemen.webp",
  },
  {
    num: "05",
    title: "MUA",
    categories: ["Web App"],
    description:
      "MUA adalah website landing page yang di buat untuk jasa Make Up Artist yang langsung bisa konsultasi dan booking by whatsapp. Desain ini berfokus pada tampilan yang clean dan modern dan simple agar orang bisa gampang meggunakan dan memahami jasa apa yang ditawarkan.",
    tech: ["Next js", "Tailwind", "Typescript"],
    githubUrl: "\https://github.com/SugengPermana/MUA",
    liveUrl: "https://mua-iota.vercel.app/",
    imageUrl: "/MUA.webp",
  },
  {
    num: "06",
    title: "Portfolio-v1",
    categories: ["Web App"],
    description:
      "Portofolio ini adalah portfolio pribadi versi lama saya. yang di buat tahun 2025",
    tech: ["React", "Tailwind", "Vite", "Javascript"],
    githubUrl: "https://github.com/SugengPermana/Portofolio_SugengPermana",
    liveUrl: "https://sugengpermana.vercel.app/",
    imageUrl: "/portfolio-1.webp",
  },
  {
    num: "07",
    title: "Portfolio-v2",
    categories: ["Web App"],
    description:
      "Portofolio ini adalah portfolio yang di gunakan oleh saya saat ini. yang di buat tahun 2026.",
    tech: ["Next js", "Tailwind", "Typescript"],
    githubUrl: "https://github.com/SugengPermana/portfolio",
    liveUrl: "https://sugengpermanaid.vercel.app/",
    imageUrl: "/portfolio-v2.webp",
  },
  {
    num: "08",
    title: "Sepatu Sneakers",
    categories: ["Design"],
    description:
      "Saya membuat desain produk sepatu untuk kebutuhan promosi di media sosial. Desain ini berfokus pada tampilan yang clean dan modern, dengan produk sebagai fokus utama agar mudah menarik perhatian. Saya mengatur komposisi, tipografi, dan warna agar terlihat seimbang dan nyaman dilihat, serta menambahkan elemen seperti label, harga, dan call-to-action untuk mendukung kebutuhan promosi.",
    tech: ["Figma"],
    githubUrl: "#",
    liveUrl: "#",
    imageUrl: "/shoes.webp",
  },
];

export const certificatesData = [
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2025",
    credentialId: "JMZVVLDJ3ZN9",
    link: "https://www.dicoding.com/certificates/JMZVVLDJ3ZN9",
  },
  {
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    year: "2025",
    credentialId: "0LZ053L23X65",
    link: "https://www.dicoding.com/certificates/0LZ053L23X65",
  },
  {
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2025",
    credentialId: "ERZR24742PYV",
    link: "https://www.dicoding.com/certificates/ERZR24742PYV",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2025",
    credentialId: "0LZ05DRW3X65",
    link: "https://www.dicoding.com/certificates/0LZ05DRW3X65",
  },
  {
    title: "AI Praktis untuk Produktivitas",
    issuer: "Dicoding Indonesia",
    year: "2025",
    credentialId: "NVP7JYE1OXR0",
    link: "https://www.dicoding.com/certificates/NVP7JYE1OXR0",
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2025",
    credentialId: "QLZ935J07Z5D",
    link: "https://www.dicoding.com/certificates/QLZ935J07Z5D",
  },
  {
    title: "Spec-Driven Development dengan Kiro",
    issuer: "Dicoding Indonesia",
    year: "2026",
    credentialId: "1RXYWGEL3ZVM",
    link: "https://www.dicoding.com/certificates/1RXYWGEL3ZVM",
  },
  {
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2026",
    credentialId: "GRX5W73ORZ0M",
    link: "https://www.dicoding.com/certificates/QLZ935J07Z5D",
  },
  {
    title: "Machine Learning Operations (MLOps) For Generative AI",
    issuer: "Google Skill Boost",
    year: "2025",
    credentialId: "19846128",
    link: "https://www.skills.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/19846128",
  },
  {
    title: "Introduction to Security Principles in Cloud Computing",
    issuer: "Google Skill Boost",
    year: "2025",
    credentialId: "18212641",
    link: "https://www.skills.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/18212641",
  },
  {
    title: "Get Started with Google Workspace Tools",
    issuer: "Google Skill Boost",
    year: "2025",
    credentialId: "17981862",
    link: "https://www.skills.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/17981862",
  },
  {
    title: "Gemini For Application Developers",
    issuer: "Google Skill Boost",
    year: "2025",
    credentialId: "17980465",
    link: "https://www.skills.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/17980465",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Skill Boost",
    year: "2025",
    credentialId: "17102920",
    link: "https://www.skills.google/public_profiles/83950568-42ba-48b6-bfdb-e53cc3af5965/badges/17102920",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
    credentialId: "a3a5b2c6-0dbb-4c95-a401-b53b17916fe4",
    link: "https://www.credly.com/badges/a3a5b2c6-0dbb-4c95-a401-b53b17916fe4",
  },
];

export const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "about", label: "About Me", icon: User2 },
];

export const experienceData = [
  {
    role: "Web Developer",
    company: "Freelancer - Remote",
    date: "2025 — Present",
    description:
      "Saya aktif sebagai freelance web developer di berbagai platform seperti facebook, Group Whastapp, telegram, dan instagram, menawarkan jasa pembuatan website untuk user dan membantu mereka dengan kebutuhan web development, jasa website yang saya jual seperti personal websites, company profile, landing pages, manajemen system, and e-commerce websites ",
  },
  {
    role: "Tour Guide",
    company: "Museum Fatahillah Jakarta",
    date: "Februari 2023 — April 2023",
    description:
      "Dalam masa magang saya berinteraksi langsung dengan wisatawan lokal dari berbagai rombongan sekolah serta wisatawan asing. Tugas saya mencakup memberikan informasi terkait ruangan dan koleksi museum, menjawab pertanyaan pengunjung, serta memastikan area museum tetap tertib, aman, dan terjaga dengan baik untuk mendukung pengalaman kunjungan yang nyaman.",
  },
];

export const educationData = [
  {
    role: "Computer Science",
    company: "Universitas Pamulang",
    date: "Agustus 2024 — Present",
    description: "GPA 3.55 / 4.00. Majoring in Informatics.",
  },
  {
    role: "Tourism",
    company: "SMK Laboratorium Indonesia",
    date: "Juli 2021 — Juni 2024",
    description: "Majoring in Tourism. Bogor.",
  },
];

export const skillsData = [
  { name: "Backend Development", progress: 70 },
  { name: "Frontend Development", progress: 95 },
  { name: "AI / Machine Learning", progress: 40 },
  { name: "Software Development", progress: 60 },
  { name: "Python", progress: 60 },
  { name: "Hardware Maintenance", progress: 50 },
  { name: "Prompt Engineering", progress: 75 },
];

export const stack = [
  {
    title: "FRONTEND",
    items: [
      {
        name: "React",
        icon: ReactIcon,
        color: "text-[#61dafb]",
      },
      { name: "Next.js", icon: NextJsIcon, color: "text-foreground" },
      { name: "TypeScript", icon: TypeIcon, color: "text-blue-500" },
      { name: "Tailwind", icon: TailwindIcon, color: "text-sky-400" },
    ],
  },
  {
    title: "BACKEND",
    items: [
      { name: "Node.js", icon: nodejsIcon, color: "text-green-500" },
      { name: "Python", icon: pythonIcon, color: "text-blue-600" },
      { name: "Express", icon: expressIcon, color: "text-gray-500" },
      { name: "Laravel", icon: LaravelIcon, color: "text-red-500" },
    ],
  },
  {
    title: "DATABASE",
    items: [
      { name: "PostgreSQL", icon: PostgresqlIcon, color: "text-blue-400" },
      { name: "MongoDB", icon: mongodbIcon, color: "text-green-500" },
      { name: "MySQL", icon: MysqlIcon, color: "text-blue-500" },
    ],
  },
  {
    title: "TOOLS & DEVOPS",
    items: [
      { name: "Git", icon: GitIcon, color: "text-orange-500" },
      { name: "Docker", icon: dockerIcon, color: "text-blue-500" },
      { name: "VS Code", icon: VscodeIcon, color: "text-blue-500" },
      { name: "AntiGravity", icon: GravityIcon, color: "text-purple-500" },
    ],
  },
];

export const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Leading the frontend team in building scalable enterprise web applications. Improved rendering performance by 40% and established a comprehensive design system.",
  },
  {
    role: "Fullstack Developer",
    company: "Creative Digital Agency",
    period: "2020 - 2022",
    description:
      "Developed and maintained interactive web experiences for global brands. Collaborated closely with designers to ensure pixel-perfect and accessible implementations.",
  },
  {
    role: "Frontend Developer",
    company: "Startup Co.",
    period: "2018 - 2020",
    description:
      "Built the initial MVP of the company's core product. Implemented responsive designs and integrated with various third-party APIs.",
  },
];

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Framer Motion",
  "GraphQL",
  "REST APIs",
  "Git",
  "Supabase",
  "Firebase",
  "PostgreSQL",
  "Figma",
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
