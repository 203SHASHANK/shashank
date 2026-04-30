// src/data/portfolioData.js

export const personalInfo = {
  name: "Shashank S",
  title: "Backend Developer",
  location: "Bengaluru, Karnataka",
  email: "203shashanks@gmail.com",
  phone: "+91-9606138748",
  bio: "Passionate Backend Developer specializing in Go, focused on building scalable, efficient, and secure server-side applications. Expert in Go, Java, and Python, with deep experience in microservices architecture, real-time data processing, and enterprise-grade security, having developed and maintained 1000+ APIs with a focus on high performance and low latency.",
  avatar: "👨‍💻",
  roles: [
    'Go / Java Developer',
    'Python (FastAPI) Eng',
    'System Architect',
    'Microservices Expert'
  ],
  socialLinks: {
    github: "https://github.com/203SHASHANK",
    linkedin: "https://www.linkedin.com/in/shashank-s-3b8080203/",
    leetcode: "https://leetcode.com/u/shashanks203/"
  },
  resumeUrl: "Shashank_S.pdf"
};

export const education = {
  degree: "B.Tech - Computer Science and Engineering",
  university: "Dayananda Sagar University",
  location: "Bengaluru, Karnataka",
  duration: "2020 – 2024",
  cgpa: "7.63"
};

export const experience = [
  {
    id: 1,
    company: "Probeplus",
    position: "Engineer - I",
    duration: "Present",
    location: "Bengaluru, Karnataka",
    description: "Leading the architectural development of CareKonnect, an enterprise-grade Hospital Management System (HMS) certified for ABDM M1, M2, M3, and M4 milestones.",
    responsibilities: [
      "Architecting a 10+ microservices ecosystem for the CareKonnect OPD suite, ensuring high availability and scalability",
      "Implementing HL7 FHIR standards for seamless healthcare data interoperability and ABHA portal integration",
      "Successfully navigating M1-M4 ABDM certification processes, positioning the platform as a trusted national partner",
      "Designing complex queue management, appointment scheduling, and automated billing modules in Go (Fiber)",
      "Managing end-to-end patient lifecycle from facility registration to digital prescription and professional registry",
      "Integrating Keycloak, Kafka, and MongoDB for secure, event-driven medical records management"
    ],
    technologies: ["Go", "Fiber", "Java", "Python", "Kafka", "Keycloak", "MongoDB"],
    icon: "⚙️",
    type: "full-time"
  }
];

export const projects = [
  {
    id: 1,
    title: "CareKonnect HMS",
    description: "ABDM-Certified (M1-M4) Hospital Management System featuring an integrated OPD suite and FHIR-based interoperability.",
    longDescription: "A comprehensive healthcare platform providing a full OPD suite including facility registration, appointment scheduling, queue management, and electronic prescriptions. Successfully integrated with the national ABHA portal across all four milestones, ensuring high standards of data security and interoperability using HL7 FHIR standards.",
    technologies: ["Go", "Fiber", "Microservices", "FHIR", "Kafka", "ABDM APIs", "MongoDB"],
    image: "🏥",
    category: "HealthTech / Backend",
    year: "2024",
    status: "Active / Certified",
    features: [
      "ABDM M1-M4 National Certification",
      "HL7 FHIR Data Interoperability",
      "10+ Microservices Architecture",
      "Automated OPD/IPD Billing Suite",
      "Professional & Facility Registries",
      "Patient Lifecycle Management"
    ],
    githubUrl: "#",
    liveUrl: "https://carekonnect.in/",
    screenshots: []
  },
  {
    id: 2,
    title: "ImageCompressor-DCT",
    description: "DCT-based image compression from scratch in Go achieving 48.3× compression ratio at PSNR 33.77 dB / SSIM 0.9924, producing files 4% smaller than Go stdlib JPEG.",
    longDescription: "Implemented a full DCT-based image compression pipeline from scratch in Go: separable 2D transform, JPEG quantization, and Huffman coding. Applied a custom 20% tighter DC quantization step and per-image adaptive Huffman encoding over JPEG's static tables. Parallelised block-level DCT/quantization across all CPU cores via a goroutine worker pool and precomputed cosine lookup table, reducing encode time from 800 ms to 40 ms on 1080p images.",
    technologies: ["Go", "DCT", "Huffman Coding", "REST API", "Docker"],
    image: "🗜️",
    category: "Systems / Algorithms",
    year: "2026",
    status: "Completed",
    features: [
      "48.3× compression ratio at PSNR 33.77 dB / SSIM 0.9924",
      "4% smaller output than Go stdlib JPEG at identical quality",
      "2.4× speedup via precomputed cosine lookup table",
      "Goroutine worker pool for parallel block processing",
      "REST benchmark endpoint vs Go stdlib, Python PIL, OpenCV"
    ],
    githubUrl: "https://github.com/203SHASHANK/ImageCompressor-DCT",
    liveUrl: "#",
    screenshots: []
  },
  {
    id: 3,
    title: "Yogavana Ayurpharmacy",
    description: "Full-stack e-commerce backend for an Ayurvedic pharmacy with product catalog, disease-specific remedy mapping, Razorpay payments, and live CI/CD deployment.",
    longDescription: "Engineered a production-grade e-commerce backend using FastAPI and MongoDB covering product catalog, disease-specific Ayurvedic remedy mapping, cart management, Razorpay payment gateway, appointment booking, and inventory tracking. Integrated AWS S3 for scalable product media storage and designed RESTful APIs consumed by a Next.js frontend. Automated CI/CD pipeline with Docker and Jenkins for containerised build, test, and deployment workflows.",
    technologies: ["FastAPI", "MongoDB", "AWS S3", "Razorpay", "Next.js", "Docker", "Jenkins"],
    image: "🌿",
    category: "E-Commerce / Backend",
    year: "2026",
    status: "Live",
    features: [
      "Disease-specific Ayurvedic remedy mapping",
      "Razorpay payment gateway integration",
      "AWS S3 for scalable product media storage",
      "Appointment booking & inventory tracking",
      "CI/CD pipeline with Docker & Jenkins"
    ],
    githubUrl: "#",
    liveUrl: "https://yogavanaayurpharmacy.com/products",
    screenshots: []
  },
  {
    id: 4,
    title: "Kafka-Learning",
    description: "Production-ready Kafka client in Go covering 11 patterns end-to-end: consumer groups, idempotent producer, Dead Letter Queue, exactly-once semantics, and high-throughput async benchmarking.",
    longDescription: "Built a production-ready Kafka client in Go using IBM/sarama: sync/async producers with snappy compression and batching, consumer groups with auto-rebalance, manual offset commits, and graceful shutdown. Covered 11 patterns end-to-end including consumer groups, idempotent producer, Dead Letter Queue with exponential-backoff retry, exactly-once semantics via Kafka transactions, and high-throughput async benchmarking. Deployed a 3-broker KRaft cluster with Prometheus + Grafana monitoring for consumer lag, throughput, and produce-error alerting.",
    technologies: ["Go", "Apache Kafka", "sarama", "Docker", "Prometheus", "Grafana", "KRaft"],
    image: "📨",
    category: "Systems / Streaming",
    year: "2025",
    status: "Completed",
    features: [
      "11 Kafka patterns end-to-end",
      "Exactly-once semantics via Kafka transactions",
      "Dead Letter Queue with exponential-backoff retry",
      "3-broker KRaft cluster deployment",
      "Prometheus + Grafana monitoring for lag & throughput"
    ],
    githubUrl: "https://github.com/203SHASHANK/Kafka-Learning",
    liveUrl: "#",
    screenshots: []
  },
  {
    id: 5,
    title: "GoPacketSniffer",
    description: "Network traffic analyzer built from scratch using Linux AF_PACKET raw sockets with <0.1% packet loss at 1 Gbps and 335 ns/packet full-decode latency.",
    longDescription: "Built a packet capture tool from scratch using Linux AF_PACKET raw sockets, decoding Ethernet/IPv4/TCP/UDP headers with less than 0.1% packet loss at 1 Gbps. Displays real-time protocol distribution, bandwidth metrics, and top talkers. Implemented concurrent packet processing with goroutine worker pools: dedicated capture goroutine, parallel parsers, and async display — tracks active TCP flows and detects HTTP traffic patterns. Achieved 335 ns/packet full-decode latency via sync.Pool (22% faster, 31% fewer allocations) and zero-alloc ring buffer; 2.9M pps theoretical throughput gives 35× headroom over a saturated 1 Gbps link.",
    technologies: ["Go", "AF_PACKET", "Raw Sockets", "TCP/IP", "Linux Networking"],
    image: "🕵️",
    category: "Systems / Networking",
    year: "2026",
    status: "Completed",
    features: [
      "<0.1% packet loss at 1 Gbps",
      "335 ns/packet full-decode latency",
      "2.9M pps theoretical throughput (35× headroom)",
      "sync.Pool: 22% faster, 31% fewer allocations",
      "Real-time protocol distribution & top talkers"
    ],
    githubUrl: "https://github.com/203SHASHANK/gopacketsniffer",
    liveUrl: "#",
    screenshots: []
  },
  {
    id: 6,
    title: "Credit Card Fraud Detection System",
    description: "Advanced ML system using ANN, RNN, and GRU algorithms achieving 99.9% accuracy in fraud detection.",
    longDescription: "Developed and compared multiple deep learning models (ANN, RNN, GRU) to identify fraudulent transactions. Applied data mining and machine learning techniques on large datasets to minimize false positives and maximize detection rates.",
    technologies: ["Python", "TensorFlow", "ANN", "RNN", "GRU", "Pandas", "Google Colab"],
    image: "🛡️",
    category: "Machine Learning / Security",
    year: "2023",
    status: "Completed",
    features: [
      "99.9% detection accuracy",
      "Comparative algorithm analysis",
      "Efficient data preprocessing",
      "High scalability for transaction data"
    ],
    githubUrl: "https://github.com/203SHASHANK/Credit-Card-Fraud-Detection-System",
    liveUrl: "#",
    screenshots: []
  },
  {
    id: 7,
    title: "Automated Irrigation System",
    description: "IoT-based system with NodeMCU, sensors, and Blynk app for smart farming and resource management.",
    longDescription: "Utilized NodeMCU as a central control unit to automate irrigation. Integrated soil moisture, temperature, humidity, and light sensors to collect real-time data and optimize water usage via the Blynk app.",
    technologies: ["IoT", "NodeMCU", "Blynk", "Sensors", "C++"],
    image: "🌿",
    category: "IoT / Automation",
    year: "2022",
    status: "Completed",
    features: [
      "Real-time sensor monitoring",
      "Automated water management",
      "Remote control via mobile app",
      "Energy-efficient IoT architecture"
    ],
    githubUrl: "https://github.com/203SHASHANK/Automated-Irrigation-System",
    liveUrl: "#",
    screenshots: []
  },
  {
    id: 8,
    title: "Breast Cancer Prediction - Federated Learning",
    description: "Privacy-preserving ML system using federated learning for medical diagnosis with data security.",
    longDescription: "Developed a decentralized machine learning system that trains models on local data sources without sharing raw sensitive medical information, ensuring HIPAA-level privacy and security.",
    technologies: ["Python", "Deep Learning", "Streamlit", "Federated Learning"],
    image: "🧬",
    category: "HealthTech / ML",
    year: "2024",
    status: "Completed",
    features: [
      "Decentralized model training",
      "Data privacy compliance",
      "Collaborative learning nodes",
      "Streamlit interface"
    ],
    githubUrl: "https://github.com/203SHASHANK/BreastCancer-Prediction-FederatedLearning",
    liveUrl: "#",
    screenshots: []
  },
  {
    id: 9,
    title: "AR Home Decorator",
    description: "Augmented Reality app for virtual furniture placement using Unity3D with real-time tracking.",
    longDescription: "Developed an immersive AR application using Unity3D and AR Foundation. Implemented real-time 3D model placement, lighting estimation, and an intuitive UI for home design visualization.",
    technologies: ["Unity", "C#", "AR Foundation", "3D Modeling"],
    image: "🛋️",
    category: "AR / Computer Vision",
    year: "2023",
    status: "Completed",
    features: [
      "Real-time object tracking",
      "Interactive 3D UI",
      "Environment lighting estimation",
      "Cross-platform support"
    ],
    githubUrl: "https://github.com/203SHASHANK/Augmented-Reality---Home-Decorator",
    liveUrl: "#",
    screenshots: []
  }
];

export const skills = {
  languages: [
    { name: "Go", level: 92, icon: "🐹", category: "Core" },
    { name: "Java", level: 95, icon: "☕", category: "Core" },
    { name: "Python", level: 90, icon: "🐍", category: "Core" },
    { name: "Oracle SQL", level: 85, icon: "🗃️", category: "Database" }
  ],
  frameworks: [
    { name: "Go Fiber", level: 90, icon: "🚀", category: "Backend" },
    { name: "Spring Boot", level: 90, icon: "🍃", category: "Backend" },
    { name: "FastAPI", level: 85, icon: "⚡", category: "Backend" },
    { name: "Keycloak", level: 85, icon: "🔑", category: "Security" },
    { name: "KrakenD", level: 88, icon: "🐙", category: "Gateway" },
    { name: "Kafka", level: 80, icon: "📨", category: "Streaming" },
    { name: "MongoDB", level: 88, icon: "🍃", category: "Database" }
  ],
  tools: [
    { name: "Jira / Zoho", level: 90, icon: "📋", category: "Management" },
    { name: "Bitbucket", level: 85, icon: "📥", category: "DevOps" },
    { name: "GitHub", level: 90, icon: "🐙", category: "DevOps" },
    { name: "IntelliJ", level: 95, icon: "🧠", category: "IDE" },
    { name: "VS Code", level: 90, icon: "💻", category: "Tools" }
  ]
};

export const certifications = [
  {
    id: 1,
    title: "Java Spring Framework 6 with Spring Boot 3",
    issuer: "Udemy",
    date: "2024",
    skills: ["Spring Boot 3", "Spring Framework 6", "Enterprise Java"]
  },
  {
    id: 2,
    title: "The Complete Java Development BootCamp",
    issuer: "Udemy",
    date: "2023",
    skills: ["Java", "OOP", "Best Practices"]
  },
  {
    id: 3,
    title: "Salesforce Developer Virtual Internship",
    issuer: "SmartBridge, Salesforce",
    date: "2024",
    skills: ["Salesforce Development", "Apex", "CRM"]
  },
  {
    id: 4,
    title: "Java Programming and Software Engineering Fundamentals Specialization",
    issuer: "Coursera, Duke University",
    date: "2024",
    skills: ["Java Foundations", "Software Engineering"]
  }
];

export const achievements = [
  { id: 1, description: "Secured high accuracy (99.9%) in Credit Card Fraud Detection using Deep Learning models." },
  { id: 2, description: "Successfully implemented a decentralized Federated Learning system for medical data privacy." },
  { id: 3, description: "Developed and deployed an automated IoT irrigation system for resource optimization." },
  { id: 4, description: "Completed rigorous Java and Spring Boot certification tracks from industry leaders." }
];

export const stats = [
  { label: "Architecture Scale", value: "High" },
  { label: "API Endpoints", value: "1000+" },
  { label: "Security Protocol", value: "AES-256" },
  { label: "Data Integrity", value: "SHA-3" }
];

export const hobbies = [
  { name: "Travelling" },
  { name: "Cricket" },
  { name: "Volleyball" },
  { name: "Kannada Literature" }
];