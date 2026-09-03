export interface Project {
  id: string;
  title: string;
  category: 'python-ai' | 'wordpress' | 'fullstack';
  description: string;
  longDescription?: string;
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  clientUrls?: { name: string; url: string }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  category: 'python-ai' | 'wordpress' | 'fullstack' | 'general';
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; tag?: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "SELVAM S",
    handle: "CodeBySelvam",
    location: "Tirunelveli, Tamil Nadu, India",
    email: "selvamsde33@gmail.com",
    phonePrimary: "+91 8248552197",
    phoneSecondary: "+91 9489228575",
    portfolioUrl: "https://selvam-sde.onrender.com/",
    githubUrl: "https://github.com/Selva-DevEyes",
    linkedinUrl: "https://linkedin.com/in/selvam-s-2b201b252",
    availability: "Available for WordPress, Full-Stack & Python Roles",
  },

  roles: {
    'python-ai': {
      title: "Python Developer & Data Analyst",
      badge: "Python, FastAPI & Data Analytics Specialist",
      tagline: "Developing REST APIs, Data Processing Workflows & Extracting Insights from Structured Datasets",
      summary: "Python Developer & Data Analyst with 1 year of hands-on experience in Python, SQL, FastAPI, Pandas, and data analysis through the Masai School & IIT Patna SDE program. Experienced in developing REST APIs, database-driven applications, CRUD operations, and data processing workflows using Python. Skilled in SQL, data cleaning, exploratory data analysis, data visualization, and extracting insights from structured datasets. Brings 6+ years of professional web development experience with PHP, MySQL, JavaScript, and 450+ total production web projects (including 410+ for GoDaddy portfolio). Currently seeking opportunities as a Python Developer, Backend Developer, or Data Analyst to apply strong programming, database, and analytical skills.",
      heroPoints: [
        "1 Year Hands-on Experience in Python, SQL, FastAPI & Pandas",
        "REST APIs, Database Applications, CRUD & Data Workflows",
        "SQL, Data Cleaning, Exploratory Data Analysis & Visualization",
        "6+ Years Web Engineering Foundation with 450+ Shipped Builds"
      ]
    },
    'wordpress-fullstack': {
      title: "WordPress Developer & Full-Stack Engineer",
      badge: "6+ Years Enterprise CMS & Web Engineering",
      tagline: "Building High-Performance Websites, Custom Themes & WooCommerce Architecture Shipped for 450+ International Clients",
      summary: "WordPress Developer and Full Stack Specialist with 6+ years of experience engineering 450+ high-performance WordPress, HTML, and backend projects for international clients across the US, UK, Australia, and Canada — including 410+ production websites delivered for GoDaddy's portfolio at vSplash Techlab, and 40+ custom projects delivered across prior engineering roles. Consistently shipped 8–10 pixel-perfect pages daily while boosting Google PageSpeed scores from 70 → 95+. Deep expertise in theme development, WooCommerce, ACF, Beaver Builder, Elementor, performance optimization, and Figma-to-WordPress conversion.",
      heroPoints: [
        "450+ Total Shipped Web Projects (410+ GoDaddy + 40+ Client Builds)",
        "Google PageSpeed Optimization Boost (70 → 95+ Average)",
        "Custom WP Themes, WooCommerce & ACF Dynamic Templates",
        "Sustained 8–10 Pixel-Perfect Pages Daily Throughput"
      ]
    }
  },

  stats: [
    { value: "6+", label: "Years Web Experience", description: "PHP, MySQL, JavaScript, Custom CMS" },
    { value: "450+", label: "Total Shipped Projects", description: "410+ GoDaddy + 40+ Client Builds" },
    { value: "1 Year", label: "Python & Data Analysis", description: "Masai & IIT Patna SDE Program" },
    { value: "95+", label: "PageSpeed Score", description: "Boosted from ~70 via Core Web Vitals" }
  ],

  skills: {
    backend: [
      { name: "Python 3", level: 90, tag: "1 Yr Hands-on" },
      { name: "FastAPI", level: 88, tag: "REST APIs" },
      { name: "SQL & Relational DBs", level: 90, tag: "Core Data" },
      { name: "Pandas & Data Analysis", level: 85, tag: "EDA & Cleaning" },
      { name: "Pydantic & SQLAlchemy", level: 85, tag: "Schemas & ORM" },
      { name: "PHP", level: 85, tag: "Backend" },
    ],
    ai: [
      { name: "Exploratory Data Analysis (EDA)", level: 88, tag: "Data Analysis" },
      { name: "Data Visualization", level: 85, tag: "Insights" },
      { name: "GenAI & LLM Integration", level: 85, tag: "Masai & IIT Patna" },
      { name: "API Integrations & Workflows", level: 92, tag: "Automation" },
    ],
    cms: [
      { name: "WordPress (6+ Yrs)", level: 95, tag: "Expert" },
      { name: "WooCommerce Overhaul", level: 92, tag: "E-Commerce" },
      { name: "ACF Custom Fields", level: 95, tag: "CMS Architecture" },
      { name: "Elementor / Beaver Builder", level: 95, tag: "Visual Builders" },
      { name: "Oxygen Builder", level: 90, tag: "Theme Engine" },
      { name: "Wix & Webflow", level: 75, tag: "Learning" },
    ],
    frontend: [
      { name: "HTML5 / CSS3", level: 95, tag: "Foundational" },
      { name: "JavaScript (ES6+)", level: 90, tag: "IBM Certified" },
      { name: "React & Next.js", level: 85, tag: "Modern Web" },
      { name: "Vue.js", level: 82, tag: "Component Dev" },
      { name: "Tailwind CSS", level: 92, tag: "Styling" },
      { name: "Bootstrap", level: 90, tag: "UI Framework" },
    ],
    database: [
      { name: "SQL (PostgreSQL / SQLite / MySQL)", level: 92, tag: "Query & Schema" },
      { name: "Data Processing & ETL", level: 88, tag: "Workflows" },
      { name: "Data Cleaning & Structuring", level: 88, tag: "Analytics" },
      { name: "CRUD Operations", level: 92, tag: "Backend DB" },
    ],
    tools: [
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Core Web Vitals / PageSpeed", level: 95, tag: "Performance" },
      { name: "Figma to Code 1:1", level: 95, tag: "Design Sync" },
      { name: "CI/CD & Deployment", level: 82, tag: "DevOps" },
      { name: "Photoshop & Canva", level: 85, tag: "Assets" },
    ]
  },

  experiences: [
    {
      id: "exp-vsplash",
      company: "vSplash Techlab [GoDaddy Projects]",
      role: "WordPress Integrator 2",
      period: "Dec 2023 – Aug 2025",
      location: "Tirunelveli, India",
      category: "wordpress",
      highlights: [
        "Engineered 410+ production-ready websites for GoDaddy's US, UK, AU & CA client portfolio (part of 450+ total career web builds), using PHP and MySQL to extend backend logic.",
        "Integrated and maintained REST API-based plugin and third-party service connections, shipping 8–10 pixel-perfect pages daily using Beaver Builder and Elementor.",
        "Optimized application performance (server-side caching, image compression, lazy loading, CDN configuration), boosting Google PageSpeed scores from ~70 to 95+.",
        "Overhauled WooCommerce product, cart, and checkout logic with conversion-focused UX improvements, directly supporting client revenue and retention goals.",
        "Partnered with QA and design teams to enforce timely, error-free project delivery across international accounts, consistently meeting daily SLA targets."
      ]
    },
    {
      id: "exp-boostability",
      company: "Boostability Pvt. Ltd.",
      role: "Front-End Developer",
      period: "Aug 2021 – Jul 2023",
      location: "India",
      category: "fullstack",
      highlights: [
        "Built responsive, cross-browser HTML/CSS websites using Bootstrap and Tailwind CSS, delivering 25+ custom client builds.",
        "Engineered interactive Vue.js components with JavaScript-based logic, standardizing UI patterns and reducing front-end rework cycles.",
        "Customized backend WordPress theme functions and plugin logic using PHP and MySQL, extending site functionality beyond standard builder capabilities."
      ]
    },
    {
      id: "exp-digital-seo",
      company: "Digital SEO",
      role: "Web Designer",
      period: "Jun 2020 – Jul 2021",
      location: "India",
      category: "wordpress",
      highlights: [
        "Designed and launched 15+ client WordPress websites end-to-end using Oxygen Builder, owning the full cycle from design brief to live deployment.",
        "Optimized websites for Core Web Vitals, mobile responsiveness, and on-page SEO, improving organic visibility and performance scores for all clients."
      ]
    },
    {
      id: "exp-masai",
      company: "Masai School & IIT Patna SDE Program",
      role: "Python Developer & Data Analyst Trainee",
      period: "Feb 2026 – Ongoing",
      location: "Remote / Intensive Track",
      category: "python-ai",
      highlights: [
        "Completing an intensive program with 1 year of hands-on experience in Python, SQL, FastAPI, Pandas, and data analysis.",
        "Developing REST APIs, database-driven applications, CRUD operations, and data processing workflows using Python.",
        "Performing SQL queries, data cleaning, exploratory data analysis (EDA), and data visualization to extract insights from structured datasets."
      ]
    },
    {
      id: "exp-datacore",
      company: "DCG Data-Core Systems India Pvt Ltd",
      role: "Computer Operator",
      period: "Apr 2016 – Mar 2020",
      location: "India",
      category: "general",
      highlights: [
        "Maintained accurate data records and generated operational reports using MS Office.",
        "Developed structured workflow discipline and data entry accuracy foundational to career transition."
      ]
    }
  ] as Experience[],

  projects: [
    {
      id: "proj-godaddy-corporate-wordpress",
      title: "Enterprise WordPress Web Production (450+ Total Builds / 410+ GoDaddy)",
      category: "wordpress",
      description: "End-to-end WordPress web development delivering 450+ total web builds across GoDaddy's US, UK, AU & CA client accounts and prior agency roles.",
      longDescription: "Handled complete end-to-end WordPress production: building from client requirement briefs, design files & copy docs, custom PHP backend settings, dynamic templates, WooCommerce setups, SEO tags, caching mechanisms, CRM webhooks, and manual QA across all screen sizes.",
      tags: ["WordPress", "PHP", "MySQL", "Beaver Builder", "Elementor", "JavaScript", "CSS3", "WooCommerce"],
      metrics: "450+ Total Builds | 410+ GoDaddy Sites | PageSpeed 95+",
      liveUrl: "https://woodward.consulting/",
      featured: true,
      clientUrls: [
        { name: "Woodward Consulting", url: "https://woodward.consulting/" },
        { name: "What To Find", url: "https://whatoofind.com/" },
        { name: "Caramba Mex", url: "https://carambamex.com/" },
        { name: "Travel Tastic Holidays UK", url: "https://traveltasticholidays.co.uk/" },
        { name: "Brilliant Cup", url: "https://brilliantcup.com/" },
        { name: "Phillips Slaughter Law", url: "https://phillipslaughter.com/" },
        { name: "Aloha Interior Design", url: "https://alohainteriordesign.com/" },
        { name: "RFC Parts", url: "https://rfcparts.com/" },
        { name: "Avia Flight Academy", url: "https://aviaflightacademy.com/" },
        { name: "AZ Watch Depot", url: "https://azwatchdepot.com/" },
        { name: "Tyler Riggan Law", url: "https://tylerrigganlaw.com/" },
        { name: "Royal Ortho Labs", url: "https://royalortholabs.com/" },
        { name: "Remain Silent Law", url: "https://remainsilent.law/" },
        { name: "IDS Nevada", url: "https://idsnv.com/" },
        { name: "GS Cabinet Shop", url: "https://gscabinetshop.com/" },
        { name: "Verge IT Solutions", url: "https://vergeit.com/" },
        { name: "Eclectic Counseling", url: "https://eclecticcounseling.org/" },
        { name: "Silvertree Woodworks", url: "https://silvertreewoodworks.com/" },
        { name: "Community Home Care", url: "https://communityhomecare.org/" },
        { name: "Uni Products Zambia", url: "https://uniproductszambia.com/" },
        { name: "Patricia Fletcher", url: "https://patriciafletcher.com/" }
      ]
    },
    {
      id: "proj-wowcodes-lms",
      title: "WoWCodes LMS & SDE Evaluation Engine",
      category: "python-ai",
      description: "Modern full-stack web application designed for software developers to master technical skills and take employer-grade assessments.",
      longDescription: "Features 14 learning paths, randomized quiz engine with Fisher-Yates option shuffling, study velocity analytics, JWT authentication, and cloud PostgreSQL integration.",
      tags: ["React 19", "Redux Toolkit", "FastAPI", "SQLAlchemy", "Pydantic v2", "PostgreSQL", "Tailwind CSS", "Vite"],
      metrics: "14 Learning Paths | Fisher-Yates Quiz Engine | Velocity Analytics",
      liveUrl: "https://wowcodes-frontend.onrender.com/",
      githubUrl: "https://github.com/Selva-DevEyes/WoWCodes_LMS",
      featured: true
    },
    {
      id: "proj-woocommerce-custom",
      title: "High-Conversion WooCommerce Overhaul Engine",
      category: "wordpress",
      description: "Custom WooCommerce overhaul featuring custom checkout steps, dynamic ACF product fields, and payment gateway REST API integrations.",
      longDescription: "Rebuilt standard WooCommerce single-product layout and multi-step checkout workflow with AJAX cart updating, custom hooks in PHP, and high-converting mobile UI.",
      tags: ["WooCommerce", "PHP", "JavaScript", "ACF Pro", "REST API"],
      metrics: "Increased Conversion & Zero-Defect Delivery",
      featured: true
    },
    {
      id: "proj-fastapi-ai",
      title: "FastAPI REST Service & Data Analysis Engine",
      category: "python-ai",
      description: "Asynchronous REST API service built with Python, FastAPI, SQL, Pydantic, and Pandas for structured data processing and CRUD workflows.",
      longDescription: "Full-stack Python backend & data processing suite featuring Pydantic schemas, SQL query execution, Pandas data cleaning, and exploratory data visualization pipelines.",
      tags: ["Python", "FastAPI", "SQL", "Pandas", "Data Analysis", "PostgreSQL"],
      metrics: "Sub-50ms API Latency | Automated Data Processing",
      githubUrl: "https://github.com/Selva-DevEyes",
      featured: true
    },
    {
      id: "proj-python-sql-analytics",
      title: "Python SQL Data Cleaning & EDA Pipeline",
      category: "python-ai",
      description: "Data analysis utility leveraging Python, SQL, and Pandas for exploratory data analysis (EDA), data cleaning, and automated report generation.",
      longDescription: "Built as part of Masai School & IIT Patna SDE program to clean raw structured datasets, execute analytical SQL queries, and generate visual summaries.",
      tags: ["Python", "SQL", "Pandas", "EDA", "Data Visualization"],
      metrics: "Exploratory Analysis & Clean Dataset Ingestion",
      featured: false
    }
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.) — Electrical & Electronics Engineering",
      institution: "PSN Institute of Technology & Science",
      period: "2010 – 2014",
      location: "Tirunelveli, Tamil Nadu"
    }
  ],

  certifications: [
    {
      title: "Software Development Engineering with Applied AI",
      issuer: "Masai School & IIT Patna",
      period: "Feb 2026 – Ongoing",
      skills: "Python, SQL, FastAPI, Pandas, Data Analysis, REST APIs"
    },
    {
      title: "Full Stack JavaScript Developer Certification",
      issuer: "IBM",
      period: "Oct 2025 – Nov 2025",
      skills: "Full-Stack JS, React, Node, Web APIs"
    }
  ]
};
