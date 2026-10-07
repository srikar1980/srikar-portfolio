export const portfolioData = {
  name: "Srikar Ravoori",

  role: "Frontend Developer",

  tagline: "React.js | Next.js | Javascript",

  summary:
    "Frontend Developer with 4.5+ years of experience building scalable fintech and SaaS applications. Specialized in React.js, Next.js with a strong focus on performance optimization, reusable architecture, and delivering business-driven solutions.",

  socialLinks: {
    github: "https://github.com/srikar1980",
    linkedin: "https://www.linkedin.com/in/srikar-ravoori/",
    email: "mailto:srikar.ravoori@gmail.com",
  },

  cta: {
    projects: "#projects",
  },
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "Kakatiya University",
      year: "2001 - 2003",
    },
  ],

  projects: [
    {
      title: "Mutual Fund Platform (React 17)",
      category: "Fintech Product",
      technologies: ["React.js", "Redux Toolkit", "REST APIs"],
      link: "https://online.licmf.com/",

      description:
        "Developed transaction-heavy modules including SIP, STP, SWP, purchase flows, portfolio management, and statement generation.",
    },

    {
      title: "SchoolRefine App (MERN)",
      category: "Independent Project",
      description:
        "A full-stack school management platform built with React.js, Node.js, Express.js, and MongoDB, covering student management, academics, fees, report cards, role-based access, and school-wise data isolation.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "REST APIs",
        "JWT",
      ],
      link: "https://eschool-frontend.vercel.app/app/login",
    },

    {
      title: "Car & General (Next v12)",
      category: "Dealer Management System",
      technologies: ["Next.js", "SSR", "i18n"],
      description:
        "Developed spare parts ordering, billing, order tracking, and multilingual dealer management features.",
    },
  ],

  experience: [
    {
      company: "Webile Apps (India) Pvt Ltd",
      duration: "Aug 2024 - May 2026",
      project: "Mutual Fund Platform (Fintech)",
      points: [
        "Developed transaction-heavy modules including SIP, STP, SWP and purchase flows.",
        "Built reusable React components improving development speed and consistency.",
        "Implemented Redux Toolkit for efficient state management.",
        "Integrated REST APIs for portfolios, transactions and statements.",
        "Collaborated with backend and product teams to deliver scalable financial workflows.",
      ],
    },

    {
      company: "GAC Digital Pvt Ltd",
      duration: "Apr 2021 - Jan 2024",
      project: "GAC Portal & BYT SaaS Platform",
      points: [
        "Developed modules for timesheets, payslips and employee operations.",
        "Migrated legacy class components to React Hooks.",
        "Built onboarding, project tracking and billing automation features.",
        "Implemented invoice generation and time tracking workflows.",
      ],
    },

    {
      company: "Car & General (TVS Nigeria)",
      duration: "Dec 2022 - Mar 2023",
      project: "Dealer Management System",
      points: [
        "Built application using Next.js with SSR.",
        "Implemented multilingual support using i18n.",
        "Developed order tracking and invoice generation modules.",
        "Integrated backend APIs for seamless data flow.",
      ],
    },
  ],
};
