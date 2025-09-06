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
      "I build scalable and user-friendly web applications using React.js, Next.js, Tailwind CSS, Node.js, and Express.js. Passionate about UI Development and Full Stack Applications.",
  },
  about: {
    description:
      "B.Sc. IT Graduate from Mumbai University with 2 years of experience as a MERN Stack Developer. Skilled in React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and MySQL. Experienced in building HSNC Instafeez Portal and Solapur Instafeez Portal, Job Portal, Hostel Management, and Budget Finance systems.",
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
      title: "Job Portal Website",
      description:
        "A role-based job portal for Job Seekers, Employers, and Admins, designed to streamline the hiring process with dedicated dashboards and functionalities for each user type.",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "Mysql",
        "Tailwind CSS",
        "TypeScript"
      ],
      roles: {
        jobseeker: [
          "Create and manage profile with resume upload and skill highlighting.",
          "Search and apply for jobs with advanced filtering options.",
          "Track application status and receive notifications.",
        ],
        employer: [
          "Post, edit, and manage job listings with detailed descriptions.",
          "View and filter applicant profiles and resumes.",
          "Manage company profile and communicate with candidates.",
        ],
        admin: [
          "Oversee all users, including job seekers and employers.",
          "Monitor job postings, application reports, and site activity.",
          "Access system analytics for insights on platform usage.",
        ],
      },
      screenshots: [
        {
          src: "./job-seeker.png",
          hint: "dashboard jobseeker",
        },
        {
          src: "./job-admin.png",
          hint: "dashboard employer",
        },
        {
          src: "./job-employer.png",
          hint: "dashboard admin",
        },

      ],
      videoUrl: "https://vimeo.com/1115175907",
      links: {
        github: "https://github.com/rishabhprajapti150/jobfinder-ui",
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