import { Briefcase, BrainCircuit, Award, GraduationCap, Lightbulb, Star, Zap, UserCheck } from 'lucide-react';

export const resumeData = {
  professionalSummary: "Backend Developer with strong foundations in Java and Spring Boot, focused on secure, scalable backend systems. Experienced in building microservices, event-driven systems, and real-time servers, with hands-on use of Kafka, Redis, Elasticsearch, and relational databases. Strong interest in how systems work internally, security, and performance. Comfortable working in Linux/Docker environments, with additional experience in Python (Flask, NumPy, Pandas) and basic React/Next.js. Effective communicator with proven leadership skills.",
  technicalSkills: [
    {
      category: "Backend & APIs",
      icon: Zap,
      skills: ["Java", "Spring Boot", "Spring Security", "REST APIs", "GraphQL", "Microservices architecture", "Role-based access control (RBAC)", "JWT authentication"]
    },
    {
      category: "Distributed Systems & Messaging",
      icon: BrainCircuit,
      skills: ["Apache Kafka", "Redis (caching, sessions)", "WebSockets & socket programming"]
    },
    {
      category: "Databases & Search",
      icon: Briefcase,
      skills: ["Relational Databases (MySQL / PostgreSQL concepts)", "Elasticsearch", "Data modeling & query optimization"]
    },
    {
      category: "Security",
      icon: Lightbulb,
      skills: ["Backend security fundamentals", "Authentication & authorization", "Secure API design", "Intermediate cybersecurity concepts"]
    },
    {
      category: "DevOps & Systems",
      icon: Briefcase,
      skills: ["Linux (daily usage)", "Docker & containerized services", "Environment configuration & deployment basics"]
    },
    {
      category: "Other Technologies",
      icon: Star,
      skills: ["Python (Flask, NumPy, Pandas)", "Basic React & Next.js", "Git & GitHub", "JetBrains IDEs (IntelliJ IDEA, PyCharm) — advanced productivity usage"]
    }
  ],
  projects: [
    {
      title: "E-Commerce Backend System",
      technologies: "Spring Boot, Spring Security, MySQL, Redis",
      description: [
        "Built a full-featured e-commerce backend with secure authentication and role-based access control.",
        "Implemented user management, product catalog, order processing, and protected admin endpoints.",
        "Designed scalable REST APIs with proper validation and error handling.",
        "Applied backend security best practices to prevent unauthorized access."
      ]
    },
    {
      title: "Real-Time Chat Application Server",
      technologies: "Java, Spring Boot, Sockets, WebSockets",
      description: [
        "Developed a real-time chat server using socket programming concepts.",
        "Managed concurrent client connections and message routing.",
        "Focused on performance, reliability, and low-latency communication."
      ]
    },
    {
      title: "Issue Tracker System",
      technologies: "Spring Boot, REST APIs, Relational Database",
      description: [
        "Built an issue tracking backend supporting ticket creation, updates, and status workflows.",
        "Designed clean API contracts and database schemas.",
        "Emphasized maintainability and extensibility."
      ]
    },
    {
        title: "Additional Technical Work",
        technologies: "Kafka, Redis, Elasticsearch, Python, Flask, NumPy, Pandas",
        description: [
            "Event-driven backend experiments using Kafka",
            "Caching and session handling using Redis",
            "Search indexing and querying with Elasticsearch",
            "Python backend utilities and data processing using Flask, NumPy, Pandas"
        ]
    }
  ],
  education: {
    degree: "Bachelor of Engineering — Mechatronics Engineering",
    university: "Murang’a University of Technology",
    status: "Currently in Second Year",
    icon: GraduationCap,
  },
  certifications: [
    {
      title: "Basic IT Skills Certificate — Software Development",
      institution: "Modcom Institute",
      icon: Award,
    }
  ],
  softSkills: [
    "Strong leadership and communication skills",
    "Excellent problem-solving ability",
    "High curiosity for how systems work behind the scenes",
    "Fast learner, comfortable with new languages and technologies",
    "Highly productive with modern development tools"
  ],
  interests: [
    "Backend architecture & system design",
    "Security engineering",
    "Distributed systems",
    "Performance optimization",
    "Operating systems & networking fundamentals"
  ]
};
