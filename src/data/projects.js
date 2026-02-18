import SpendWiseImg from "../assets/images/projects/SpendWisePCDemo1.png";
import GoFImg from "../assets/images/projects/GOFPhoneDemo.png";
import RapsyreImg from "../assets/images/projects/RapSyreDemo.png";
import DeskflowImg from "../assets/images/projects/DeskflowPCDemo.png";

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "",
    image: GoFImg,
    category: "",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    metrics: "40% increase in conversion",
    demoUrl: "",
    github: "",
  },
  {
    id: 2,
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
    id: 3,
    title: "DeskFlow – Productivity Automation App",
    description:
      "A desktop automation application that tracks active and idle time, detects inactivity (AFK), manages tasks, and improves workflow efficiency for students and remote professionals.",
    image: DeskflowImg,
    category: "Productivity Tool",
    technologies: [
      "Electron.js",
      "SQLite",
      "Node.js",
      "System Notifications API",
    ],
    metrics: "Improved user productivity tracking accuracy by 45%",
    demoUrl: "",
    github: "",
  },
  {
    id: 4,
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
  {
    id: 5,
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
      "Helped users track and analyze 100% of daily spending in real-time",
    demoUrl: "",
    githubUrl: "https://github.com/Suerine/ExpenseTracker",
  },
];

export const categories = ["All", "Web Apps", "UI Components", "Full Stack"];
