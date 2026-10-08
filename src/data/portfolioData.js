// ═══════════════════════════════════════════════════════════════
//  Portfolio Dataset — Single source of truth for AI Assistant
// ═══════════════════════════════════════════════════════════════

export const portfolioData = {
  owner: {
    name: "Muhammad Hassan",
    title: "Full Stack Developer",
    specialty: "MERN Stack & Frontend Expert",
    location: "Saudi arabia",
    availability: "Open to Freelance & Full-time Opportunities",
    email: "hassantheDev945@gmail.com",
    github: "https://github.com/HadssanK",
    linkedin: "https://www.linkedin.com/in/hassan-merndev/",
    bio: "A passionate Full Stack Developer with hands-on experience in real-world projects, building scalable, efficient, high-performing applications. Combines technical expertise with strategic thinking to deliver impactful digital solutions that bridge technology and business, turning complex problems into clean, user-friendly experiences.",
    stats: {
      yearsExperience: 1,
      projectsDelivered: 5,
      technicalSkills: 15,
      liveProjects: 4,
    },
  },

  education: [
    {
      degree: "Advance Diploma in Software Engineering (ADSE)",
      institution: "APTECH",
      status: "Completed 3-Year Program",
    },
  ],

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "REST API Integration",
    "Responsive Design",
  ],

  services: [
    {
      id: "1",
      title: "Frontend Development",
      description:
        "Building modern, responsive web interfaces using React.js and Next.js with clean and maintainable code.",
    },
    {
      id: "2",
      title: "Responsive Design",
      description:
        "Creating mobile-first, fully responsive layouts that adapt smoothly across all screen sizes using Tailwind CSS.",
    },
    {
      id: "3",
      title: "UI Implementation",
      description:
        "Converting Figma and design mockups into pixel-perfect, interactive user interfaces with attention to detail.",
    },
    {
      id: "4",
      title: "Performance Optimization",
      description:
        "Optimizing frontend performance with efficient rendering, lazy loading, and fast-loading UI components.",
    },
    {
      id: "5",
      title: "API Integration",
      description:
        "Connecting frontend applications with REST APIs, handling data efficiently with proper state management.",
    },
    {
      id: "6",
      title: "Bug Fixing & Improvements",
      description:
        "Fixing UI issues, improving design consistency, and enhancing user experience in existing projects.",
    },
  ],

  projects: [
    
    {
      id: "2",
      title: "Way To Haramain",
      category: "Transportation / Booking System",
      shortDescription:
        "A multi-language transportation booking platform for Hajj & Umrah travelers with vendor integration, ride booking, and package management.",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Zustand",
        "Axios",
        "Framer Motion",
        "React i18next",
        "Docker",
        "Laravel (API)",
      ],
      status: "Ongoing",
      liveUrl: "https://waytoharamain.com",
      highlights: [
        "Multi-language support (English & Arabic with RTL layout)",
        "User authentication with OTP, email/password",
        "3-step ride booking flow",
        "Route-based taxi booking with dynamic pricing",
        "Travel packages browsing, booking, and management",
        "Docker-based deployment",
      ],
    },
   
    {
      id: "4",
      title: "POB Trust",
      category: "Healthcare / Charity Platform",
      shortDescription:
        "A full-featured charity and healthcare platform for Prevention of Blindness Trust with online donations, service management, and awareness programs.",
      techStack: [
        "React 18",
        "Vite",
        "React Router DOM v6",
        "Tailwind CSS",
        "Axios",
        "TanStack React Query",
        "Framer Motion",
        "jsPDF",
        "html2canvas",
      ],
      status: "Completed",
      completedDate: "2026",
      liveUrl: "https://pob-new.vercel.app/",
      highlights: [
        "Online donation system with multiple currencies",
        "Zakat, Sadaqah, Waqf, and Kaffara donation modules",
        "Secure payment integration using Click2Pay (PayPro)",
        "Medical training and academic program information system",
        "Blog and media publication system",
        "PDF generation for reports and donation receipts",
      ],
    },
    
    {
      id: "6",
      title: "Muhammad Hassan Portfolio",
      category: "Personal Portfolio",
      shortDescription:
        "A modern developer portfolio built with Next.js 16 and React 19 featuring animated UI, project showcase, dark/light mode, and responsive design.",
      techStack: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS v4",
        "Framer Motion",
        "next-themes",
        "Lucide React",
        "Sonner",
      ],
      status: "Completed",
      completedDate: "2026",
      liveUrl: "https://your-portfolio-link.com",
      highlights: [
        "Modern Next.js App Router architecture",
        "Dark/Light mode with smooth theme switching",
        "Animated UI using Framer Motion",
        "Dynamic projects showcase with structured data",
        "Dedicated pages for About, Projects, Services, and Contact",
        "Glassmorphism and gradient-based modern UI design",
      ],
    },
  ],
};
