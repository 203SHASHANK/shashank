// src/data/portfolioData.js

export const personalInfo = {
  name: "Shashank S",
  title: "Backend Developer",
  location: "Bengaluru, Karnataka",
  email: "203shashanks@gmail.com",
  phone: "+91-9606138748",
  bio: "Passionate Backend Developer focused on building scalable, efficient, and secure server-side applications. Expert in Go, Java, and Python, with deep experience in microservices architecture, real-time data processing, and enterprise-grade security.",
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
  resumeUrl: "/Shashank_S.pdf"
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
  },
  {
    id: 5,
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
  { label: "API Endpoints", value: "50+" },
  { label: "Logic Purity", value: "98%" },
  { label: "System Uptime", value: "99.9%" }
];

export const hobbies = [
  { name: "Travelling", icon: "✈️" },
  { name: "Cricket", icon: "🏏" },
  { name: "Volleyball", icon: "🏐" },
  { name: "Kannada Literature", icon: "📚" }
];