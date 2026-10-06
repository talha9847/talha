// Centralized content — edit facts here, not inside components.

export const profile = {
  name: "Talha Malek",
  role: "Full-Stack Software Engineer",
  location: "Surat, Gujarat, India",
  email: "mtmalek47@gmail.com",
  phone: "+91 91067 04675",
  github: "https://github.com/talha9847",
  linkedin: "https://www.linkedin.com/in/talha-malek-902042282/",
  leetcode: "https://leetcode.com/u/t_malek98",
  resumeUrl: "/Talha_SWE.pdf",
};

export const stats = [
  { value: "350+", label: "LeetCode problems solved" },
  { value: "4", label: "production systems live" },
  { value: "46", label: "DB tables in BhSquare's schema" },
  { value: "187", label: "API endpoints in BhSquare alone" },
];

export const heroFlow = [
  { x: 30, y: 90, label: "Lead" },
  { x: 120, y: 50, label: "Survey" },
  { x: 210, y: 130, label: "Registration" },
  { x: 300, y: 90, label: "Documents" },
  { x: 430, y: 90, label: "Live" },
];

export const experience = [
  {
    date: "Aug 2025 — Present",
    role: "Software Engineer",
    org: "BHSquare",
    location: "Surat, Gujarat",
    bullets: [
      "Solo-architected and built BhSquare from the ground up — a production Solar Installation CRM spanning 187 REST API endpoints, a 46-table schema, and 5 role-based dashboards.",
      "Designed a lead lifecycle pipeline (pending → delayed → converted → cancelled) with ACID-compliant transactions enforcing business-state rules across the full customer journey.",
      "Wrote a Jest unit-test suite covering commit/rollback behavior, and validated the row-locked stock-deduction logic under 120 concurrent requests with zero overselling.",
      "Integrated the Google Drive API (OAuth2) for automated per-customer document folders and Docxtemplater for legal agreement generation.",
    ],
  },
  {
    date: "Jan 2025 — May 2025",
    role: "Software Engineer Intern",
    org: "Casepoint LLC",
    location: "Surat, Gujarat",
    bullets: [
      "Built backend modules and RESTful APIs for a car rental fleet management platform on a layered architecture.",
      "Reduced API latency by 25% by refactoring data access layers and optimizing stored procedures.",
      "Built admin dashboards with Kendo UI, working in two-week Agile/Scrum sprints.",
    ],
  },
];

export const projects = [
  {
    name: "BhSquare",
    url: "https://bhsquare.in",
    urlLabel: "bhsquare.in",
    desc: "A solar installation ERP built solo, end to end, for a business running real installations across Gujarat — from the first lead call to the signed agreement to the day the system goes live on the roof.",
    diagram: ["Lead", "Registration", "Dispatch", "Installed"],
    highlights: [
      "46-table PostgreSQL schema modeling a 14-stage installation pipeline, with delay/convert/cancel/restore all as ACID transactions",
      "187 API endpoints and 88 React components across 5 role-based dashboards",
      "Google Drive integration auto-creates a per-customer folder and renames it as the job moves through stages",
      "Legal agreements generated automatically from Word templates via Docxtemplater",
    ],
    stack: ["Node.js / Express 5", "React 19", "PostgreSQL · Sequelize", "Vite 7 · Tailwind 4"],
  },
  {
    name: "Academy CRM",
    url: "https://academy-crm-frontend.vercel.app",
    urlLabel: "academy-crm",
    desc: "A management system for a coaching academy — attendance, fee collection, certificate generation, and separate live dashboards for admins, teachers, and students.",
    diagram: ["Enroll", "Fees & attendance", "Certificate", "QR verify"],
    highlights: [
      "Four-layer backend (routes → controllers → repository → Postgres) serving 74 components across three dashboards",
      "Razorpay fee collection with printable receipts, amounts spelled out in words",
      "Certificates rendered with the Canvas API, each one publicly verifiable by QR code",
      "Live updates over Socket.io, with analytics charted in Recharts",
    ],
    stack: ["Node.js / Express", "React · Framer Motion", "PostgreSQL", "Razorpay · Socket.io"],
  },
  {
    name: "MakesEasy",
    url: "https://makeseasy.in",
    urlLabel: "makeseasy.in",
    desc: "A community platform where trust in who you're talking to actually matters — login is scoped to a real place, not just an account.",
    diagram: ["OTP request", "SHA-256 verify", "Scoped JWT"],
    highlights: [
      "Two-stage login issues a JWT scoped to village, taluka, and district — not just a user ID",
      "OTPs are single-use, time-boxed, and rate-limited server-side, not just hidden on the client",
      "Password reset uses a single-use GUID token inside an atomic transaction, so a reset can't half-complete",
    ],
    stack: ["ASP.NET Core / .NET 9", "React · Redux", "PostgreSQL", "JWT"],
  },
  {
    name: "Smart Ride",
    url: "https://smart-ride-glit.vercel.app",
    urlLabel: "smart-ride-glit",
    badge: "In progress",
    desc: "A community-based ride platform taking shape: posting and discovering rides, owner/driver/rider profiles, live trip tracking, and find-a-ride matching — built on top of a pipeline that already turns messy, multilingual listings into structured bookings.",
    diagram: ["Raw listing", "LLM parse", "Standardized", "Dispatched"],
    highlights: [
      "A domain-tuned LLM prompt normalizes free-text, multilingual listings into Vehicle → Origin → Destination → Time → Contact",
      "Handles text, images, and video captions as input formats",
      "Built-in automatic recovery keeps the pipeline running continuously without manual restarts",
    ],
    stack: ["Node.js", "LLM via OpenRouter", "PostgreSQL · Sequelize"],
  },
];

export const engineeringProof = [
  {
    title: "Transaction correctness",
    detail:
      "11 Jest unit tests against BhSquare's actual lead-lifecycle transactions (delay, convert, cancel, restore), mocking the Sequelize layer and asserting commit/rollback behavior on every path.",
    proof: "Verified by deliberately removing a rollback call — 2 tests failed immediately, pointing at the exact missing line.",
  },
  {
    title: "Concurrency under real load",
    detail:
      "A live-Postgres test firing 120 simultaneous requests at the row-locked stock-deduction logic BhSquare uses in production.",
    proof: "Naive read-then-write: 120/120 \"succeeded\", final stock wrong — a real lost-update bug. Guarded version: exactly 50 succeeded, 70 correctly rejected, final stock 0.",
  },
];

export const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "C#", "SQL"] },
  { category: "Frontend", items: ["React", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "PrimeReact", "Recharts", "react-hook-form", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express.js", "ASP.NET Core", ".NET 9", "ADO.NET", "REST API Design"] },
  { category: "Databases", items: ["PostgreSQL", "SQL Server", "Sequelize", "Transactions & Concurrency Control"] },
  { category: "Testing", items: ["Jest", "Unit Testing", "Concurrency / Race-Condition Testing"] },
  { category: "Auth & Security", items: ["JWT", "OAuth2", "RBAC", "OTP", "SHA-256", "Rate Limiting"] },
  { category: "Integrations", items: ["Google Drive API", "Razorpay", "Socket.io", "Canvas API", "Docxtemplater", "OpenRouter"] },
  { category: "Tools", items: ["Git", "Vercel", "Render", "Swagger/OpenAPI", "Agile/Scrum"] },
];

export const education = {
  degree: "B.E., Computer Science",
  school: "Gujarat Technological University",
  date: "2025",
  gpa: "CGPA 8.44 / 10.0",
};
