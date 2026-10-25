// Single source of truth for all portfolio content.
// Keep this in sync with public/Resume/Resume.pdf.
// Wrap text in **double asterisks** to highlight it on the page.
import photo from "../Images/me.jpg";

export const profile = {
  name: "Harsh Saxena",
  initials: "HS",
  role: "Member of Research Staff",
  company: "Bharat Electronics Limited",
  companyShort: "BEL",
  location: "Udham Singh Nagar, Uttarakhand, India",
  email: "harshsaxenajii@gmail.com",
  phone: "+91 97209 55442",
  phoneHref: "tel:+919720955442",
  resume: "/Resume/Resume.pdf",
  photo,
  rotatingWords: [
    "real-time sensor pipelines",
    "scalable microservices",
    "cross-platform mobile apps",
    "full-stack web platforms",
  ],
  intro:
    "Member of Research Staff with **3+ years** of experience engineering high-performance sensor integration systems, scalable microservices and real-time messaging pipelines, along with production mobile and web apps.",
  about: [
    "I'm a **Member of Research Staff at Bharat Electronics Limited**, where I engineer high-performance sensor integration pipelines and microservices for high-security zones like border perimeters and ammunition depots, running at **99.9% uptime** with alert latency **under 50 ms**.",
    "Before BEL, I shipped **cross-platform mobile apps**, **CRMs** and **e-commerce platforms** for startups. That background lets me work across the whole stack, from Docker and message queues to React Native screens and Next.js storefronts.",
    "I'm looking for opportunities to apply my experience in **sensor integration** and **microservices architecture** to security and communication systems.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Harshsaxenajii", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harshsaxenajii", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/harsh.saxenajii/", icon: "instagram" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 10, suffix: "+", label: "Hardware modules integrated" },
  { value: 99.9, decimals: 1, suffix: "%", label: "System uptime" },
  { value: 50, from: 500, prefix: "<", suffix: "ms", label: "Alert dispatch latency" },
];

export const services = [
  {
    icon: "radar",
    title: "Real-time & IoT Systems",
    text: "Sensor integration pipelines for radars, PIDS, BIDS and PA systems, built on message queues, Redis and MQTT.",
  },
  {
    icon: "server",
    title: "Backend & Microservices",
    text: "Containerised Node.js services with Docker and event-driven architectures that stay up under load.",
  },
  {
    icon: "smartphone",
    title: "Cross-platform Mobile",
    text: "Production React Native apps for iOS and Android with payments, OTP flows, i18n and smooth UIs.",
  },
  {
    icon: "globe",
    title: "Full-stack Web",
    text: "React and Next.js platforms with Prisma, Supabase, CI/CD on AWS and Jenkins, and polished Tailwind UIs.",
  },
];

export const skillGroups = [
  {
    icon: "code",
    title: "Programming Languages",
    span: "md:col-span-2",
    items: ["C++", "JavaScript", "Python", "Java"],
  },
  {
    icon: "globe",
    title: "Web Technologies",
    span: "md:col-span-2",
    items: ["HTML", "CSS", "TypeScript"],
  },
  {
    icon: "database",
    title: "Databases",
    span: "md:col-span-2",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    icon: "layers",
    title: "Frameworks & Libraries",
    span: "md:col-span-3",
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "NativeWind",
      "shadcn/ui",
      "Bootstrap",
    ],
  },
  {
    icon: "cloud",
    title: "DevOps & Infrastructure",
    span: "md:col-span-3",
    items: ["Docker", "AWS", "Jenkins", "Redis", "MQTT", "Kafka", "Microservices", "Git", "GitHub"],
  },
];

export const marqueeTech = [
  "React Native",
  "Node.js",
  "Docker",
  "Redis",
  "Kafka",
  "MQTT",
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Microservices",
  "Supabase",
  "Tailwind CSS",
  "Express.js",
  "Jenkins",
];

export const experience = [
  {
    role: "Member of Research Staff",
    company: "Bharat Electronics Limited",
    badge: "BEL",
    period: "Jul 2025 – Present",
    location: "Ghaziabad",
    current: true,
    points: [
      "Engineered **high-performance sensor integration pipelines** connecting **10+ critical hardware modules** (Radars, Public Address Systems, PIDS, BIDS, DIDS, step sensors, ESFP), processing **5,000+ daily telemetry events** with **99.9% uptime**.",
      "Architected **scalable microservices and containerized workflows using Docker**, reducing alert dispatch and event transmission latency to **under 50 milliseconds** for high-security zones like border perimeters and ammunition depots.",
      "Optimized **real-time messaging pipelines** utilizing **Message Queues and Redis**, boosting concurrent data handling capacity by **40%** to ensure immediate threat notification for field operators.",
      "Built **robust backend communication layers** for multi-vendor security hardware, enabling seamless transmission of live sensor alerts and instant automated triggering of public address systems.",
    ],
    tags: ["Docker", "Microservices", "Redis", "Message Queues", "Sensor Integration"],
  },
  {
    role: "App Developer",
    company: "SiteGuide",
    badge: "SG",
    period: "Feb 2025 – Jun 2025",
    location: "Remote",
    points: [
      "Engineered **cross-platform mobile applications** using React Native for iOS and Android, optimizing UI rendering threads and boosting overall app responsiveness by **20%**.",
      "Built a **secure mobile notification and authentication pipeline** integrating automated OTP detection via Express.js and React Native to streamline user onboarding.",
      "Implemented comprehensive **localization and internationalization architectures** in React Native, dynamically managing multi-region content and location-based adaptations.",
      "Integrated robust **third-party payment gateways** into production mobile builds, ensuring encrypted end-to-end transactions and cutting average checkout latency by **30%**.",
    ],
    tags: ["React Native", "Express.js", "i18n", "Payments", "iOS", "Android"],
  },
  {
    role: "Freelance Developer",
    company: "Steploops Pvt. Ltd.",
    badge: "SL",
    period: "Jan 2024 – Jan 2025",
    location: "Dehradun (Hybrid)",
    points: [
      "Crafted a robust **CRM system** to streamline internal business discussions and task management, empowering **30+ employees** to efficiently oversee customer data and operations.",
      "Engineered a scalable **e-commerce platform** from scratch, managing **10,000+ product listings** and facilitating **real-time order processing** with **Next.js, Node.js, and Prisma ORM**, resulting in a **30% faster deployment** compared to traditional methods.",
      "Optimized workflows and improved operational efficiency by implementing **AWS, Jenkins, and Git** for continuous integration and delivery in a cross-functional team, leveraging modern DevOps practices.",
      "Integrated **MSG-91** for notifications and **PhonePe** for payments, delivering customized solutions with **Supabase**, **Tailwind CSS**, and agile methodologies to streamline client communication and align with business goals.",
    ],
    tags: ["Next.js", "Node.js", "Prisma", "Supabase", "AWS", "Jenkins"],
  },
  {
    role: "Full Stack Developer",
    company: "Qviq.io",
    badge: "QV",
    period: "Sep 2023 – Dec 2024",
    location: "Remote",
    points: [
      "Boosted team workflow efficiency in a **10+ member team**, enhancing communication and task coordination through **Gather**.",
      "Automated plan expiration data management with a **cron scheduler**, leveraging **React.js, Node.js, Tailwind CSS, MongoDB, AWS S3**, and **GPay integration** for scalable and maintainable solutions.",
      "Participated in daily strategy meetings to outline feature requirements and troubleshoot technical challenges, ensuring objectives aligned with project timelines using React.js and Node.js.",
    ],
    tags: ["React.js", "Node.js", "MongoDB", "AWS S3", "Tailwind CSS"],
  },
];

export const featuredProjects = [
  {
    title: "MOM-1 Childcare & Nanny Platform",
    org: "Mom Minus One Pvt. Ltd.",
    status: "Live on iOS & Android",
    live: true,
    visual: "mobile",
    points: [
      "Architected and deployed **production-ready cross-platform mobile applications** on iOS and Android connecting parents with verified nannies across Bengaluru, featuring task-based childcare schedules and **real-time location tracking**.",
      "Engineered **secure backend workflows and automated notification systems** to manage child activity tracking and daily nanny task lists, ensuring reliable real-time coordination under strict performance constraints.",
    ],
    tags: ["iOS", "Android", "Cross-platform", "Real-time Tracking", "Notifications"],
  },
  {
    title: "Finance-Driven CRM System",
    org: "Steploops Pvt. Ltd.",
    status: "Feb 2025 – Apr 2025",
    visual: "dashboard",
    points: [
      "Enhanced CRM operational efficiency by incorporating **automated payment tracking**, enhancing user interface design with **Supabase** back-end integration for increased system reliability.",
      "Streamlined **lead management, order tracking, and milestone-based billing** with profit margin calculations, additional item handling, internal notifications, and **role-based user authentication** (Admin, Store Manager, Manager).",
    ],
    tags: ["Supabase", "Role-based Auth", "Payment Tracking", "Milestone Billing"],
  },
];

export const education = {
  degree: "Bachelor of Technology",
  field: "Computer Science & Engineering",
  school: "Govind Ballabh Pant Institute of Engineering and Technology",
  period: "2021 – 2025",
};
