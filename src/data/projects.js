import SpendWiseImg from "../assets/images/projects/SpendWisePCDemo1.png";
import GoFImg from "../assets/images/projects/GOFPhoneDemo.png";
import RapsyreImg from "../assets/images/projects/RapSyreDemo.png";
import DeskflowImg from "../assets/images/projects/DeskflowPCDemo.png";
// import FitlogImg from "../assets/images/projects/FitlogDemo.png";
// import GiftJarImg from "../assets/images/projects/GiftJarDemo.png";
// import MatatuImg from "../assets/images/projects/MatatuDemo.png";

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
      "Node.js",
      "Express",
      "MongoDB Atlas",
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
    title: "Matatu Intelligence Engine",
    description:
      "A smart route reasoning engine that optimizes informal public transport navigation by suggesting the fastest matatu combinations between locations in Nairobi.",
    image: "",
    category: "Transport Tech",
    technologies: ["Node.js", "Graph Algorithms", "MongoDB", "REST APIs"],
    metrics:
      "Implemented graph-based route reasoning to optimize matatu combinations across Nairobi transport networks.",
    demoUrl: "",
    github: "",
  },
  {
    id: 4,
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
    github: "https://github.com/Suerine/ExpenseTracker",
  },
  {
    id: 5,
    title: "GiftJar - Crypto Tipping Platform",
    description:
      "A creator-support platform that enables fans to send cryptocurrency tips to their favorite creators. Users can generate a personalized tipping page where supporters contribute crypto donations securely, allowing creators to monetize their audience directly without traditional payment barriers.",
    image: "",
    category: "Web3 / FinTech",
    technologies: ["React", "Node.js", "Blockchain API", "MongoDB"],
    metrics:
      "Enabled direct fan-to-creator crypto tipping through personalized donation pages.",
    demoUrl: "",
    github: "",
  },
  {
    id: 6,
    title: "FitLog - Fitness Tracker",
    description:
      "A workout tracking application that allows users to log exercises, sets, reps, equipment, and weights while monitoring workout duration and progress. The app stores workout data locally and provides an intuitive interface for managing and reviewing fitness routines.",
    image: "",
    category: "Mobile Development",
    technologies: [
      "Java",
      "Kotlin",
      "Android Studio",
      "SQLite",
      "RecyclerView",
    ],
    metrics:
      "Implemented structured workout logging with SQLite persistence and dynamic RecyclerView-based exercise lists.",
    demoUrl: "",
    github: "",
  },
];

export const categories = [
  "All",
  "Full-Stack Web Application",
  "Productivity Tool",
  "Transport Tech",
  "Finance Application",
  "Web3 / FinTech",
  "Mobile Development",
];
