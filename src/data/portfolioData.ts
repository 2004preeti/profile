export interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Mobile App" | "AI / ML" | "Web App";
  subtitle: string;
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  projectHighlight: string;
  bullets: string[];
  techStack: string[];
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon?: string }[];
}

export const PERSONAL_INFO = {
  name: "Preeti Pal",
  title: "Software Engineer",
  headline: "React Native & MERN Stack Developer",
  bio: "React Native and MERN stack developer with experience building mobile apps for live products, including a multi-vendor e-commerce app and a cross-platform cybersecurity platform. Strong foundation in data structures and algorithms with 150+ problems solved.",
  location: "Ayodhya, Uttar Pradesh, India",
  phone: "(+91) 6395748319",
  email: "preeti2072004@gmail.com",
  links: {
    github: "https://github.com/preetipal2004", // user's GitHub
    linkedin: "https://www.linkedin.com/in/preeti-pal-bb262825b/", // user's LinkedIn
    leetcode: "https://leetcode.com/u/preeti_pal", // user's LeetCode
    codeninja: "https://www.naukri.com/code360/profile/preetipal",
    scamguardLive: "https://scamguard-website.vercel.app/",
  },
  stats: [
    { label: "Production Experience", value: "1+ Year", detail: "Kushmanda Cosmetics & Samra Infotech" },
    { label: "DSA Problems Solved", value: "150+", detail: "Coding Ninjas, CodeChef, LeetCode" },
    { label: "Live Products", value: "2+", detail: "Goldgini E-Commerce & ScamGuard" },
    { label: "Performance Optimization", value: "~30%", detail: "Perceived load time reduction via React Query" },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Kushmanda Cosmetics Pvt Ltd",
    role: "Software Engineer",
    location: "Mohali, India",
    period: "February 2026 - Present",
    type: "Full-Time",
    projectHighlight: "Multi-Vendor E-commerce App Website (React Native + Next.js) (Goldgini)",
    bullets: [
      "Built a shopping app with product list, details, variants, cart, wishlist, and reviews.",
      "Connected app with backend APIs using Axios and used React Query to load data faster.",
      "Made product variant feature with image slider and price change option.",
    ],
    techStack: ["React Native", "Nest.js", "Node.js", "MySQL", "Next.js"],
    accentColor: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
  },
  {
    company: "Samra Infotech Pvt Ltd",
    role: "App Developer",
    location: "Noida, India",
    period: "June 2025 - January 2026",
    type: "Full-Time",
    projectHighlight: "Service-Booking Mobile App (Car Services, AC Repair, Towing)",
    bullets: [
      "Working on a live service-based mobile app for booking car services like AC repair, towing, and engine maintenance..",
      "Handling the frontend development using React Native to build responsive and user-friendly mobile interfaces.",
      "Collaborating with the backend team to integrate APIs built with Node.js and Express.js, ensuring smooth data flow and synchronization.",
    ],
    techStack: ["React Native", "Express.js", "Node.js", "MongoDB"],
    accentColor: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30",
  },
];

export const SCAMGUARD_FEATURED: Project = {
  id: "scamguard",
  title: "ScamGuard — AI Threat & Fraud Detection Platform",
  category: "Full-Stack",
  subtitle: "Cyber Threat, Phishing & Deepfake Scam Detection Suite",
  description:
    "AI cybersecurity platform built to protect users from modern financial fraud, deepfake audio, and phishing threats with real-time heuristic scoring.",
  longDescription:
    "ScamGuard provides real-time URL inspection, SMS analysis, incident reporting, and interactive threat awareness quizzes.",
  highlights: [
    "11 real-time fraud scanners for spam calls, KYC/SMS, and phishing URLs",
    "Emergency response tools with 1930 helpline integration and incident playbooks",
  ],
  techStack: ["Next.js", "Node.js", "React Native", "Tailwind CSS"],
  image: "/projects/scamguard.jpg",
  liveUrl: "https://scamguard-website.vercel.app/",
  githubUrl: "https://github.com/preetipal2004/scamguard",
  featured: true,
  metrics: "Live on Vercel • <150ms Response",
};

export const PROJECTS: Project[] = [
  SCAMGUARD_FEATURED,
  {
    id: "goldgini",
    title: "Goldgini — Multi-Vendor E-Commerce Suite",
    category: "Full-Stack",
    subtitle: "Mobile Shopping App & Web Storefront (Kushmanda Cosmetics)",
    description:
      "Production e-commerce ecosystem featuring a React Native mobile shopping app with AR Virtual Try-On and a Next.js storefront managing 150+ product listings.",
    longDescription:
      "Engineered React Query caching (~30% perceived load time cut) and built a native Android Kotlin bridge for Snapchat Camera Kit AR try-on.",
    highlights: [
      "AI-powered AR Virtual Try-On via custom Kotlin bridge and Snapchat Camera Kit",
      "React Query caching cutting perceived load latency by ~30% with 150+ listings",
    ],
    techStack: ["React Native", "Next.js", "Express.js", "Node.js", "MongoDB", "Kotlin"],
    image: "/projects/goldgini.jpg",
    featured: true,
    metrics: "Production Live • 150+ Listings",
  },
  {
    id: "motion-park",
    title: "MotionPark — Vision Gesture & Parking System",
    category: "AI / ML",
    subtitle: "Dual-Function Computer Vision Capstone",
    description:
      "Computer vision system combining MediaPipe touchless hand gesture presentation control with real-time Canny edge parking slot detection.",
    longDescription:
      "Presented and certified at a technical conference, demonstrating real-time camera tracking and parking vacancy detection.",
    highlights: [
      "Touchless slide presentation control using MediaPipe hand tracking",
      "Automated parking vacancy detection using OpenCV & Canny Edge filters",
    ],
    techStack: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    image: "/projects/motionpark.jpg",
    githubUrl: "https://github.com/preetipal2004",
    featured: false,
    metrics: "Conference Paper • Real-Time Tracking",
  },
  {
    id: "kanban-board",
    title: "Interactive Kanban Board",
    category: "Web App",
    subtitle: "Dynamic Task Management Application",
    description:
      "Responsive task organizer engineered in React.js featuring custom state workflows, multi-parameter grouping, and sorting by priority.",
    longDescription:
      "Engineered with 8+ reusable custom React Hooks, delivering fluid state persistence and clean UI.",
    highlights: [
      "Multi-dimensional grouping by status, user, and urgency priority",
      "Component architecture with 8+ custom React hooks",
    ],
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3"],
    image: "/projects/kanban.jpg",
    githubUrl: "https://github.com/preetipal2004",
    featured: false,
    metrics: "8+ Custom Hooks • Responsive UI",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "C++", level: 88 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "React.js", level: 95 },
      { name: "React Native", level: 92 },
      { name: "Next.js (App Router)", level: 90 },
      { name: "Redux Toolkit", level: 88 },
      { name: "React Query (TanStack)", level: 90 },
      { name: "Tailwind CSS & CSS3", level: 95 },
      { name: "DOM Manipulation", level: 92 },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "RESTful API Design", level: 92 },
      { name: "Flask (Python)", level: 80 },
      { name: "MongoDB & Mongoose", level: 86 },
      { name: "MySQL", level: 82 },
      { name: "Authentication (JWT)", level: 88 },
    ],
  },
  {
    title: "Tools, Architecture & DSA",
    skills: [
      { name: "Data Structures & Algorithms", level: 92 },
      { name: "Git & GitHub", level: 94 },
      { name: "Postman & API Testing", level: 90 },
      { name: "VS Code & Debugging", level: 95 },
      { name: "Agile / Scrum Methodologies", level: 88 },
      { name: "Object-Oriented Design (OOD)", level: 90 },
      { name: "Performance Optimization", level: 88 },
    ],
  },
];

export const DSA_TOPICS = [
  { name: "Arrays, Strings & Two Pointers", count: "50+ solved", rating: "Advanced" },
  { name: "Trees & Binary Search Trees", count: "30+ solved", rating: "Advanced" },
  { name: "Graphs & BFS/DFS Algorithms", count: "25+ solved", rating: "Proficient" },
  { name: "Dynamic Programming & Recursion", count: "25+ solved", rating: "Proficient" },
  { name: "Sliding Window & Hashing", count: "20+ solved", rating: "Advanced" },
  { name: "Object-Oriented Design & Complexity", count: "15+ solved", rating: "Core Master" },
];

export const CERTIFICATIONS = [
  {
    name: "Certified MERN Stack Development",
    issuer: "Udemy",
    icon: "Code",
    description: "Comprehensive full-stack architecture, React, Node, Express, MongoDB, and REST API development.",
  },
  {
    name: "Certified React.js Specialist",
    issuer: "Infosys Springboard",
    icon: "CheckCircle",
    description: "Component lifecycle, state management with hooks, performance tuning, and modern SPA design.",
  },
  {
    name: "Certified Front End Development",
    issuer: "IBM SkillsBuild",
    icon: "Award",
    description: "Modern web standards, responsive UI design, accessible markup, and JavaScript interactivity.",
  },
  {
    name: "Conference Research Presenter",
    issuer: "Technical Conference",
    icon: "Presentation",
    description: "Presented MotionPark dual-function computer vision research paper to industry and academic panels.",
  },
];

export const EDUCATION = {
  institution: "ABES Engineering College, Ghaziabad",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Information Technology",
  period: "Nov 2021 – 2025",
  location: "Ghaziabad, Uttar Pradesh, India",
  highlights: [
    "Core Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Object-Oriented Programming.",
    "Led technical teams for academic projects and conference presentations.",
    "Active participant in competitive coding and hackathons.",
  ],
};
