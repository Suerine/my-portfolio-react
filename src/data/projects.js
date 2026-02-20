import SpendWiseImg from "../assets/images/projects/SpendWisePCDemo1.png";
import GoFImg from "../assets/images/projects/GOFPhoneDemo.png";
import RapsyreImg from "../assets/images/projects/RapSyreDemo.png";
import DeskflowImg from "../assets/images/projects/DeskflowPCDemo.png";

export const projects = [
  {
    id: 1,
    title: "GOF Store – Full-Stack Football E-Commerce Platform",
    description:
      "A full-stack e-commerce web application for a football collectibles store featuring a responsive React frontend and a Node.js/Express backend powered by MongoDB Atlas. Includes JWT-based authentication, role-protected admin routes, product search with text indexing, category filtering, cart management, and order processing with embedded MongoDB document optimization.",
    image: GoFImg,
    category: "Full-Stack Web Application",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Mongoose",
      "JWT",
      "REST API",
    ],
    metrics:
      "Built secure authentication, optimized MongoDB schema design, and implemented searchable product catalog with cart and order workflow.",
    demoUrl: "",
    github: "",
  },
  {
    id: 2,
    title: "DeskFlow – Productivity Automation App",
    description:
      "A desktop automation application that tracks active and idle time, detects inactivity (AFK), manages tasks, and improves workflow efficiency for students and remote professionals.",
    image: DeskflowImg,
    category: "Productivity Tool",
    technologies: [
      "Electron.js",
      "SQLite",
      "Node.js",
      "Python",
      "System Notifications API",
    ],
    metrics:
      "Automated active and idle time tracking with real-time AFK detection, eliminating manual time logging and providing accurate task-level productivity analytics.",
    demoUrl: "",
    github: "",
  },
  {
    id: 3,
    title: "Personal Expense Tracker",
    description:
      "A full-stack expense tracking application that allows users to record transactions, categorize expenses, visualize spending patterns, and download financial reports for better budgeting decisions.",
    image: SpendWiseImg,
    category: "Finance Application",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
    ],
    metrics:
      "Reduced manual expense tracking time by 70% and generated real-time spending analytics with 95% data accuracy.",
    demoUrl: "",
    githubUrl: "https://github.com/Suerine/ExpenseTracker",
  },
  {
    id: 4,
    title: "AI Email Assistant",
    description:
      "An intelligent email automation system that summarizes long threads, prioritizes inbox messages by urgency and tone, auto-replies to support emails, and extracts invoice attachments automatically.",
    image: RapsyreImg,
    category: "AI Automation",
    technologies: ["Node.js", "OpenAI API", "Gmail API", "MongoDB"],
    metrics: "Reduced email handling time by 60%",
    demoUrl: "",
    github: "",
  },
  {
    id: 5,
    title: "Matatu Intelligence Engine",
    description:
      "A smart route reasoning engine that optimizes informal public transport navigation by suggesting the fastest matatu combinations between locations in Nairobi.",
    image: "",
    category: "Transport Tech",
    technologies: ["Node.js", "Graph Algorithms", "MongoDB", "REST APIs"],
    metrics: "Improved route decision efficiency by 35%",
    demoUrl: "",
    github: "",
  },
];

export const categories = ["All", "Web Apps", "UI Components", "Full Stack"];
