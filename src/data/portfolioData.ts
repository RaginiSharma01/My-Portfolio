export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack & Web' | 'Backend & Cloud' | 'Distributed Systems & Open Source' | 'Enterprise Systems';
  image?: string;
  techStack: string[];
  year: string;
  metrics: string[];
  problem: string;
  solution: string;
  architectureDetails: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    category: string;
    featured?: boolean;
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Ragini Sharma',
    pronouns: 'she/her',
    title: 'Software Engineer',
    subtitle: 'Specializing in Go, Distributed Systems, REST APIs & High-Performance Backends',
    tagline: 'Engineering robust distributed systems, high-throughput Go backends, and reliable web platforms.',
    bio: 'I am a Software Engineer based in Bengaluru, India, focused on Go, distributed systems, backend architectures, and secure web services. Currently at Diamante, I build high-concurrency RESTful APIs for content management platforms, design OTP-verified transactional onboarding workflows, and optimize database queries to deliver sub-millisecond reliability.\n\nIn the open-source ecosystem, I am actively contributing to Hyperledger Fabric by designing a production-grade Byzantine Fault Tolerant (BFT) consensus library (BiniBFT) to solve transaction censorship and leader bottleneck vulnerabilities. I combine rigorous computer science fundamentals—Operating Systems, DBMS, Networks, and Distributed Consensus—with pragmatic software engineering to ship resilient, tested, and secure systems.',
    location: 'Bengaluru, India',
    email: 'raginisharma.r07@gmail.com',
    phone: '+91-7411602133',
    github: 'https://github.com/RaginiSharma01',
    linkedin: 'https://www.linkedin.com/in/ragini-sharma01/',
    twitter: 'https://x.com/raginis_kafila',
    status: 'Available for Software Engineering & Backend opportunities',
    portrait: '/images/ragini_real_photo.jpeg',
  },

  stats: [
    { label: 'API Latency Cut', value: '~30%', caption: 'PostgreSQL query indexing & optimization' },
    { label: 'Test Coverage', value: '>80%', caption: 'Maintained via Go testing suite' },
    { label: 'Engineering GPA', value: '8.0 / 10', caption: 'Rajarajeswari College of Engg, Bengaluru' },
    { label: 'Consensus Protocols', value: 'BFT', caption: 'Benchmarked Raft, BFT-SMaRt & Mir-BFT' },
  ],

  principles: [
    {
      title: 'High-Concurrency Reliability',
      description: 'Writing idiomatic Go with lightweight goroutines, non-blocking channels, and memory-efficient concurrency models that operate cleanly under high load.',
    },
    {
      title: 'Zero-Trust Security Posture',
      description: 'Enforcing granular role-based access control, cryptographic JWT middleware, Redis rate-limiting, and cooldown attempt-locks on all sensitive endpoints.',
    },
    {
      title: 'Data Integrity & ACID Guarantees',
      description: 'Eliminating N+1 queries, writing atomic database transactions with rollback protection, and indexing relational tables for predictable sub-millisecond retrieval.',
    },
    {
      title: 'Distributed Fault Tolerance',
      description: 'Designing modular consensus engines and stateless microservices that gracefully handle network partitions, latency spikes, and peer node failures.',
    },
  ],

  experiences: [
    {
      id: 'diamante',
      role: 'Software Engineer',
      company: 'Diamante',
      period: 'Feb 2026 – Present',
      location: 'Bengaluru, India',
      summary: 'Building core backend microservices for CMS, payment admin tooling, and secure customer onboarding workflows.',
      achievements: [
        'Built RESTful APIs for a CMS platform (Shine Lane), covering versioned page/section content management, draft-publish-rollback workflows, atomic publish-archive transactions, and S3/CDN-integrated multipart file-upload endpoints.',
        'Designed and implemented a Redis-backed OTP-verified step-wise trade-buyer onboarding flow, including OTP send/verify with cooldown, attempt-locking, and temporary verified-session tokens for a secure multi-step public form.',
        'Contributed to backend feature development for Nitro Pay admin, for internal management for the Nitro Pay payment applications.',
        'Developed JWT-based authentication middleware in Golang to enforce role-level access control across protected API routes, strengthening overall API security posture.',
        'Improved API response time by ~30% by optimizing PostgreSQL queries with selective indexing and eliminating N+1 query patterns; maintained >80% test coverage using Go\'s testing package.',
      ],
      technologies: ['Go', 'Linux', 'PostgreSQL', 'Redis', 'REST API', 'Docker', 'JWT'],
    },
    {
      id: 'hyperledger',
      role: 'Open Source Developer',
      company: 'Hyperledger Fabric (BiniBFT)',
      period: 'Jun 2026 – Present',
      location: 'Remote / Open Source',
      summary: 'Architecting a production-grade Byzantine Fault Tolerant consensus engine for the Hyperledger Fabric blockchain network.',
      achievements: [
        'Designing a production-grade BFT consensus library for Hyperledger Fabric, resolving transaction censorship, malicious-leader vulnerabilities, and scalability bottlenecks in the existing Raft-based consensus mechanism.',
        'Evaluated and benchmarked BFT consensus protocols (Raft, BFT-SMaRt, Mir-BFT) across throughput, latency, and fault-tolerance dimensions to inform protocol selection.',
        'Architected the library to plug into Fabric\'s consensus abstraction layer, ensuring backward compatibility with existing orderer services and minimal configuration overhead.',
        'Authored technical documentation and integration guides to facilitate smooth adoption of BiniBFT within the Hyperledger Fabric ecosystem.',
      ],
      technologies: ['Go', 'Hyperledger Fabric', 'BFT Consensus Protocols', 'Distributed Systems'],
    },
    {
      id: 'toyota',
      role: 'Software Developer Intern',
      company: 'Toyota Kirloskar Auto Parts',
      period: 'Nov 2025 – Jan 2026',
      location: 'Bengaluru, India',
      summary: 'Developed backend modules and REST APIs to automate manufacturing asset tracking and plant operations.',
      achievements: [
        'Contributed in development of backend modules for internal manufacturing automation systems, reducing manual data-entry effort by streamlining workflows.',
        'Developed and exposed REST APIs to manage manufacturing asset data, integrating with Oracle Database for reliable data persistence and audit trails.',
        'Collaborated with cross-functional teams to gather requirements, translate business logic into technical specifications, and deliver modules on schedule.',
      ],
      technologies: ['C#', '.NET', 'Oracle Database', 'SQL Server', 'REST API'],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: 'edu-portal',
      title: 'Edu Portal – Student Management Portal',
      tagline: 'Full-stack academic platform with role-based access control, Redis OTP onboarding, and course scheduling',
      category: 'Full-Stack & Web',
      image: '/images/project_edu_portal.jpg',
      techStack: ['Go', 'Fiber', 'React', 'PostgreSQL', 'Redis', 'SendGrid', 'JWT'],
      year: '2025',
      featured: true,
      metrics: [
        'Full RBAC for Admins, Teachers & Students',
        'Redis-backed OTP verification with rate limits',
        'Automated SendGrid transactional emails',
      ],
      problem: 'Educational institutions struggle with fragmented systems for academic record-keeping, student attendance, class timetables, and teacher assignments, often resulting in security vulnerabilities and manual administrative bottlenecks.',
      solution: 'Architected an end-to-end management portal powered by Go (Fiber) and React. Implemented secure multi-step onboarding with Redis OTP verification, forgot/reset password workflows, and strict role-based access control (RBAC).',
      architectureDetails: [
        'Go Fiber microservice architecture with structured middleware layering for authentication and CORS.',
        'Redis in-memory caching for OTP generation, expiration TTLs, and attempt cooldowns.',
        'PostgreSQL relational schema with normalized tables for classrooms, departments, grades, and enrollments.',
      ],
      githubUrl: 'https://github.com/RaginiSharma01/Edu-Portal',
      liveUrl: 'https://github.com/RaginiSharma01/Edu-Portal',
    },
    {
      id: 'gopay-lite',
      title: 'GoPay-Lite – Payment Processing Backend',
      tagline: 'High-reliability transaction processing backend with structured service architecture and ACID guarantees',
      category: 'Backend & Cloud',
      image: '/images/project_gopay.jpg',
      techStack: ['Go', 'REST APIs', 'PostgreSQL', 'Docker', 'JWT'],
      year: '2025',
      featured: true,
      metrics: [
        'Idempotent transaction workflows',
        'Containerized Docker microservice deployment',
        'ACID ledger balance consistency',
      ],
      problem: 'Handling payment transactions requires strict idempotency, audit trails, and concurrency isolation to prevent double-spending and ledger inconsistencies during network drops.',
      solution: 'Engineered a Go backend implementing RESTful APIs for payment workflows, customer wallet management, and transaction reconciliation with transaction rollbacks on failure.',
      architectureDetails: [
        'Idiomatic Go service layout adhering to Clean Architecture principles.',
        'PostgreSQL transactions with repeatable read isolation levels ensuring zero balance drift.',
        'Containerized with multi-stage Dockerfiles for minimal production binary images.',
      ],
      githubUrl: 'https://github.com/RaginiSharma01/GoPay-Lite',
      liveUrl: 'https://github.com/RaginiSharma01/GoPay-Lite',
    },
    {
      id: 'binibft-consensus',
      title: 'BiniBFT – Consensus Engine for Hyperledger Fabric',
      tagline: 'Production-grade Byzantine Fault Tolerant library resolving transaction censorship and leader bottlenecks',
      category: 'Distributed Systems & Open Source',
      image: '/images/project_binibft.jpg',
      techStack: ['Go', 'Hyperledger Fabric', 'BFT Protocols', 'Distributed Systems'],
      year: '2026',
      featured: true,
      metrics: [
        'Benchmarked Raft, BFT-SMaRt & Mir-BFT',
        'Backward-compatible orderer plug-in layer',
        'Zero single-point-of-failure censorship protection',
      ],
      problem: 'Traditional crash fault tolerant (CFT) orderers like Raft in Hyperledger Fabric cannot tolerate malicious nodes or leader censorship, creating security bottlenecks in untrusted enterprise consortiums.',
      solution: 'Designed an open-source BFT library that plugs directly into Fabric\'s consensus abstraction layer, maintaining backward compatibility while offering Byzantine fault tolerance.',
      architectureDetails: [
        'Abstract orderer interface conforming to Fabric orderer service specifications.',
        'Comprehensive benchmark suite analyzing throughput under varying adversarial network conditions.',
        'Deterministic message serialization and cryptographic state validation.',
      ],
      githubUrl: 'https://github.com/RaginiSharma01/Hyperledger-BiniBFT',
      liveUrl: 'https://github.com/RaginiSharma01/Hyperledger-BiniBFT',
    },
    {
      id: 'shine-lane-cms',
      title: 'Shine Lane CMS Backend (Diamante)',
      tagline: 'Versioned content management APIs with atomic rollback, draft staging, and S3 multipart uploads',
      category: 'Backend & Cloud',
      techStack: ['Go', 'PostgreSQL', 'Redis', 'AWS S3', 'Docker', 'REST API'],
      year: '2026',
      featured: false,
      metrics: [
        '~30% API latency cut through query indexing',
        'Atomic draft-publish-rollback workflows',
        'Multipart S3 upload with presigned URLs',
      ],
      problem: 'Enterprise CMS platforms require seamless previewing, draft approvals, and instantaneous atomic publishing without corrupting live customer pages.',
      solution: 'Built high-throughput Go RESTful APIs supporting versioned page and section content, draft-publish-rollback states, and CDN/S3-integrated multipart asset uploads.',
      architectureDetails: [
        'PostgreSQL schema with composite index optimization eliminating N+1 query overhead.',
        'Presigned S3 multipart streaming uploads offloading heavy media I/O from backend servers.',
        '>80% automated unit and integration test coverage using Go standard testing package.',
      ],
      githubUrl: 'https://github.com/RaginiSharma01',
      liveUrl: 'https://github.com/RaginiSharma01',
    },
    {
      id: 'trade-buyer-onboarding',
      title: 'Redis-Backed Trade-Buyer Onboarding System',
      tagline: 'Secure multi-step onboarding engine with OTP attempt-locking, cooldown timers, and verified tokens',
      category: 'Backend & Cloud',
      techStack: ['Go', 'Redis', 'PostgreSQL', 'JWT', 'REST API'],
      year: '2026',
      featured: false,
      metrics: [
        'Brute-force protection via attempt-locking',
        'Strict OTP cooldown timers in Redis',
        'Temporary signed session tokens for multi-step flows',
      ],
      problem: 'Public multi-step trade buyer onboarding forms are prime targets for automated SMS pump fraud, bot spam, and abandoned incomplete states.',
      solution: 'Designed and deployed a stateful, Redis-backed verification pipeline in Go with enforced cooldown windows, max-attempt lockouts, and signed verification claim tokens.',
      architectureDetails: [
        'Atomic Redis INCR and TTL key expires for rate-limiting and temporary state management.',
        'Encrypted session tokens validating intermediate form progression.',
        'Audit-logged verification events for compliance and anomaly detection.',
      ],
      githubUrl: 'https://github.com/RaginiSharma01',
      liveUrl: 'https://github.com/RaginiSharma01',
    },
    {
      id: 'toyota-asset-automation',
      title: 'Plant Manufacturing Asset Automation API (Toyota Kirloskar)',
      tagline: 'Internal plant automation backend integrating Oracle Database for asset tracking and audit logs',
      category: 'Enterprise Systems',
      techStack: ['C#', '.NET', 'Oracle Database', 'SQL Server', 'REST API'],
      year: '2025',
      featured: false,
      metrics: [
        'Replaced manual manufacturing paper logs',
        'Integrated with enterprise Oracle Database',
        'Delivered on-schedule with cross-functional teams',
      ],
      problem: 'Plant floor technicians spent hours manually recording manufacturing asset metrics and maintenance records into legacy spreadsheets, causing audit gaps.',
      solution: 'Built REST APIs in C# and .NET that digitized asset tracking, streamlined manufacturing workflows, and connected directly to Oracle Database.',
      architectureDetails: [
        'Layered service architecture with repository pattern for clean database abstraction.',
        'Normalized schema in Oracle Database with automated audit triggers.',
        'Comprehensive input validation safeguarding against industrial equipment data corruption.',
      ],
      githubUrl: 'https://github.com/RaginiSharma01',
      liveUrl: 'https://github.com/RaginiSharma01',
    },
  ] as Project[],

  skillCategories: [
    {
      title: 'Programming Languages',
      description: 'Core languages utilized for backend microservices, systems programming, and full-stack development.',
      skills: [
        { name: 'Go (Golang)', level: 'Advanced', category: 'Backend & Systems', featured: true },
        { name: 'Java', level: 'Intermediate', category: 'Backend & OOP', featured: true },
        { name: 'JavaScript', level: 'Intermediate', category: 'Full-Stack', featured: true },
        { name: 'C# (.NET)', level: 'Intermediate', category: 'Enterprise Systems', featured: true },
        { name: 'HTML5 & CSS3', level: 'Proficient', category: 'Frontend' },
        { name: 'SQL', level: 'Advanced', category: 'Databases' },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      description: 'Production toolchains for web APIs, distributed caching, databases, and containerization.',
      skills: [
        { name: 'Fiber (Go)', level: 'Advanced', category: 'Web Framework', featured: true },
        { name: 'React.js', level: 'Intermediate', category: 'Frontend', featured: true },
        { name: 'PostgreSQL', level: 'Advanced', category: 'Relational DB', featured: true },
        { name: 'Redis', level: 'Advanced', category: 'In-Memory Cache & OTP', featured: true },
        { name: 'Docker', level: 'Proficient', category: 'Containerization', featured: true },
        { name: 'Git & GitHub', level: 'Advanced', category: 'Version Control', featured: true },
        { name: 'REST APIs & JWT', level: 'Advanced', category: 'API Security', featured: true },
        { name: 'Oracle Database', level: 'Intermediate', category: 'Enterprise DB' },
      ],
    },
    {
      title: 'Computer Science Fundamentals',
      description: 'Core principles governing efficient algorithms, operating systems, and network communication.',
      skills: [
        { name: 'Object-Oriented Programming (OOPs)', level: 'Solid', category: 'Design Patterns', featured: true },
        { name: 'Database Management Systems (DBMS)', level: 'Solid', category: 'Indexing & ACID', featured: true },
        { name: 'Operating Systems (OS)', level: 'Solid', category: 'Concurrency & Memory', featured: true },
        { name: 'Computer Networks', level: 'Solid', category: 'TCP/IP, HTTP, DNS', featured: true },
        { name: 'Distributed Systems', level: 'Solid', category: 'Consensus & Latency', featured: true },
        { name: 'BFT Consensus Protocols', level: 'Specialized', category: 'Blockchain & Fault Tolerance', featured: true },
      ],
    },
    {
      title: 'Practices & Methodologies',
      description: 'Engineering standards that guarantee uptime, code maintainability, and clean delivery.',
      skills: [
        { name: 'Query Optimization & Indexing', level: 'Demonstrated (~30% latency cut)', category: 'Performance', featured: true },
        { name: 'Unit & Integration Testing (>80%)', level: 'Practiced (Go testing)', category: 'Quality', featured: true },
        { name: 'Role-Based Access Control (RBAC)', level: 'Implemented', category: 'Security' },
        { name: 'API Versioning & Rollback Workflows', level: 'Implemented', category: 'Reliability' },
        { name: 'Technical Documentation & Guides', level: 'Authored (BiniBFT)', category: 'Communication' },
        { name: 'Cross-Functional Collaboration', level: 'Experienced (Toyota, Diamante)', category: 'Teamwork' },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      degree: 'B.E. in Electrical and Electronics Engineering',
      institution: 'Rajarajeswari College of Engineering, Bengaluru',
      period: 'Dec 2022 – Aug 2026',
      grade: 'GPA: 8.0 / 10.0',
      focus: 'Distributed Systems, Microprocessors, Database Systems & Core Software Engineering',
    },
    {
      degree: 'Pre-University Course (PCMC)',
      institution: 'Maharani Lakshmi Ammani College for Women, Bengaluru',
      period: 'Sept 2020 – Apr 2022',
      grade: 'Score: 80%',
      focus: 'Physics, Chemistry, Mathematics, and Computer Science',
    },
  ],
};
