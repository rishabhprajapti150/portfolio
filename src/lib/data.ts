import type { Icon } from "lucide-react";
import { Github, Database, GitBranch } from "lucide-react";
import { ReactIcon } from "@/components/icons/react-icon";
import { NextIcon } from "@/components/icons/next-icon";
import { TailwindIcon } from "@/components/icons/tailwind-icon";
import { NodeIcon } from "@/components/icons/node-icon";
import { TSIcon } from "@/components/icons/ts-icon";
import { JSIcon } from "@/components/icons/js-icon";

export const portfolioData = {
  hero: {
    name: "Rishabh Prajapati",
    title: "MERN Stack Developer || Full Stack Developer",
    intro:
      "I build scalable and user-friendly web applications using Next.js, React.js, TypeScript, Tailwind CSS, Node.js, and Express.js. Passionate about AI-powered platforms, secure API development, and building impactful Full Stack applications.",
  },
  about: {
    description:
      "B.Sc. IT Graduate from Patkar Varde College, Mumbai University with 3 years of experience as a Full Stack Developer. Skilled in Next.js, React.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, and MySQL. Experienced in building AI-powered news platforms, risk management systems, payment portals, and hostel management applications.",
  },
  skills: [
    { name: "React.js", icon: ReactIcon },
    { name: "Next.js", icon: NextIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "JavaScript", icon: JSIcon },
    { name: "TypeScript", icon: TSIcon },
    { name: "Node.js", icon: NodeIcon },
    { name: "Express.js", icon: NodeIcon }, // Using NodeIcon as a fallback
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
  ],
  projects: [
    {
      title: "Kanalyser — AI-Powered News Platform",
      description:
        "An AI-powered news platform where users can search and read news from sources like Hindustan Times, Times of India, and Bloomberg using LLM features. Users can ask queries and get AI-generated news updates and summaries. Implemented Notification system, Daily Update feature, and Grok-related news functionality.",
      techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      roles: {
        user: [
          "Search and read news from multiple sources (Hindustan Times, Times of India, Bloomberg, etc.)",
          "Ask AI queries like 'HDFC Bank chairman news' and get AI-generated summaries",
          "Receive personalized news notifications daily, weekly, monthly, or on custom schedules",
          "Create topics for automated Daily Updates without manual searches",
          "View and interact with Grok-related Twitter/X news insights",
        ],
        admin: [
          "Manage news sources, users, and system configurations",
          "Monitor system performance and manage role-based access control",
          "Ensure end-to-end encryption for API requests and responses",
        ],
      },
      screenshots: [
        {
          src: "./home-kanalyser.png",
          hint: "Kanalyser home page",
        },
        {
          src: "./news-kanalyser.png",
          hint: "news search and AI summaries",
        },
        {
          src: "./Grok-kanalyser.png",
          hint: "Grok-related news insights",
        },
      ],
      videoUrl: "",
      links: {
        github: "",
      },
    },
    {
      title: "Risk Management Platform",
      description:
        "An analysis platform for monitoring and analyzing events across India. Users can view events based on state, city, or district, tracking incidents like violence, protests, and critical situations. Includes risk scoring for finance and investment companies to make informed business decisions.",
      techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      roles: {
        analyst: [
          "View and filter events by state, city, or district across India",
          "Monitor different event types including violence, protests, and critical incidents",
          "Filter events based on risk levels to assess situation severity",
          "Access detailed risk scores for specific regions",
        ],
        enterprise: [
          "Analyze regional risk for investment decisions (e.g., for finance companies like Bajaj Finance)",
          "Generate risk scores based on ongoing events in target areas",
          "Take preventive actions and make data-driven business decisions",
        ],
      },
      screenshots: [
        {
          src: "./home-risk.png",
          hint: "risk management dashboard",
        },
        {
          src: "./event-risk.png",
          hint: "event risk analysis",
        },
      ],
      videoUrl: "",
      links: {
        github: "",
      },
    },
    {
      title: "HSNC & Solapur Instafeez Portals",
      description:
        "University fee payment portals with dedicated roles for students, university admins, and super admins, enabling seamless fee management and reporting.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      roles: {
        student: [
          "Pay academic fees securely online.",
          "Download payment receipts for their records.",
          "Request to switch or cancel enrolled courses.",
        ],
        university_admin: [
          "Track and verify student payments in real-time.",
          "Manage student enrollment and academic data.",
          "Administer and allocate scholarships to eligible students.",
        ],
        super_admin: [
          "Oversee multiple university platforms from a central dashboard.",
          "Generate comprehensive financial and enrollment reports.",
          "Manage administrator accounts and permissions.",
        ],
      },
      screenshots: [
        {
          src: "./HSNC-HOME.png",
          hint: "admin dashboard",
        },
        {
          src: "./Admin-Report.png",
          hint: "admin reports",
        },
        {
          src: "./student-home.png",
          hint: "student home",
        },
        {
          src: "./student-payment.png",
          hint: "student payment",
        },


      ],
      videoUrl: "https://vimeo.com/1115176220",
      links: {
        github: "https://github.com/worldfellow/instafeezFE",
      },
    },
    {
      title: "Hostel Management System",
      description:
        "A comprehensive system for managing hostel operations, including room allocation for students and tracking of fee payments and outstanding dues.",
      techStack: ["Nextjs", "TypeScript", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
      roles: {
        student: [
          "View room availability and select preferences.",
          "Pay hostel fees and view payment history.",
          "Receive notifications about pending dues.",
        ],
        admin: [
          "Allocate rooms to students based on availability and preferences.",
          "Manage hostel fee payments and track pending dues.",
          "Generate reports on room occupancy and fee collections.",
        ],
      },
      screenshots: [
        {
          src: "./Hostel-Home.png",
          hint: "Student Home",
        },
        {
          src: "./hostel-admin.png",
          hint: "hostel dashboard",
        },
        {
          src: "./hostelfees-tracking.png",
          hint: "fee tracking",
        },
        {
          src: "./room-assign.png",
          hint: "room allocation",
        }
      ],
      videoUrl: "https://vimeo.com/1115176957",
      links: {
        github: "https://github.com/rishabhprajapti150/hostel-management",
      },
    },
    {
      title: "Budget Finance Tracker",
      description:
        "A personal finance application to help users track their income and expenses, set budgets, and visualize their spending habits to improve financial management.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      roles: {
        user: [
          "Add and categorize income and expense transactions.",
          "Create and manage monthly or category-based budgets.",
          "View interactive charts and reports of financial activity.",
          "Set financial goals and track progress over time."
        ],
      },
      screenshots: [
        {
          src: "./budget-finance.png",
          hint: "finance dashboard",
        },
        {
          src: "./finance-add.png",
          hint: "transactions list",
        },
        {
          src: "./finance-report.png",
          hint: "spending report",
        },
      ],
      videoUrl: "https://vimeo.com/1115176623",
      links: {
        github: "https://github.com/rishabhprajapti150/budget-finance",
      },
    },
  ],
  contact: {
    email: "rishabhprajapti150@gmail.com",
    phone: "+91 9137146412",
    location: "Mumbai, India",
    responseTime: "Within 24 hours",
    social: {
      github: "https://github.com/rishabhprajapti150",
      naukri: "#",
      indeed: "#"
    },
  },
  availability: {
    status: "Available for new opportunities",
    preferredRoles: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Frontend Developer",
    ],
    workType: ["Full-time", "Contract", "Remote"],
    expectedSalary: "As per industry standards",
  }
};

export type PortfolioData = typeof portfolioData;