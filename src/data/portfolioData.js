// src/data/portfolioData.js

export const personalInfo = {
  name: "Shashank S",
  title: "Full Stack Developer",
  location: "Bengaluru, Karnataka",
  email: "203shashanks@gmail.com",
  phone: "+91-9606138748",
  bio: "A passionate Computer Science graduate from Dayananda Sagar University with expertise in Java, Android development, and Machine Learning. Currently working at Probeplus, I love building innovative solutions that make a difference.",
  avatar: "👨‍💻",
  roles: [
    'Full Stack Developer',
    'Android Developer',
    'Machine Learning Enthusiast',
    'Problem Solver'
  ],
  socialLinks: {
    github: "https://github.com/203SHASHANK",
    linkedin: "https://www.linkedin.com/in/shashank-s-3b8080203",
    leetcode: "https://leetcode.com/shashank-s"
  },
  resumeUrl: "/resume.pdf"
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
    description: "Currently contributing to core product development and delivering high-quality software solutions.",
    responsibilities: [
      "Contributing to scalable software architecture",
      "Collaborating with cross-functional teams",
      "Implementing efficient and robust code"
    ],
    technologies: ["Java", "Spring Boot", "React"],
    icon: "🚀",
    type: "full-time"
  }
];

export const projects = [
  {
    id: 1,
    title: "Credit Card Fraud Detection System",
    description: "Advanced ML system using ANN, RNN, and GRU algorithms achieving 99.9% accuracy in fraud detection. Performed comparative analysis of various detection methods with GRU emerging as the most accurate model.",
    longDescription: "Developed a comprehensive fraud detection system that leverages multiple machine learning algorithms including Artificial Neural Networks (ANN), Recurrent Neural Networks (RNN), and Gated Recurrent Units (GRU). The system processes credit card transaction data and identifies fraudulent patterns with exceptional accuracy.",
    technologies: ["Python", "TensorFlow", "Keras", "ANN", "RNN", "GRU", "Google Colab", "Pandas", "Scikit-learn"],
    image: "🤖",
    category: "Machine Learning",
    year: "2023",
    status: "Completed",
    features: [
      "99.9% accuracy in fraud detection",
      "Multiple ML algorithm comparison",
      "Real-time transaction processing",
      "Data visualization dashboard"
    ],
    githubUrl: "#",
    liveUrl: "#",
    screenshots: []
  },
  {
    id: 2,
    title: "Automated Irrigation System",
    description: "IoT-based system with NodeMCU, sensors, and Blynk app for smart farming and resource management. Connected multiple sensors to collect real-time environmental data for optimal irrigation.",
    longDescription: "An intelligent irrigation system that automatically controls water distribution based on environmental conditions. The system uses various sensors to monitor soil moisture, temperature, humidity, and light levels, making irrigation decisions to optimize water usage and crop health.",
    technologies: ["IoT", "NodeMCU", "Blynk", "Arduino IDE", "Sensors", "C++", "WiFi"],
    image: "🌱",
    category: "IoT",
    year: "2022",
    status: "Completed",
    features: [
      "Automated irrigation based on soil moisture",
      "Remote monitoring via Blynk app",
      "Multi-sensor environmental monitoring",
      "Water conservation optimization",
      "Real-time alerts and notifications"
    ],
    githubUrl: "#",
    liveUrl: "#",
    screenshots: []
  },
  {
    id: 3,
    title: "Breast Cancer Prediction - Federated Learning",
    description: "Privacy-preserving ML system using federated learning for medical diagnosis with data security. Optimized model aggregation and evaluation, improving prediction accuracy with collaborative learning.",
    longDescription: "A cutting-edge healthcare AI system that maintains patient data privacy while enabling collaborative machine learning across multiple medical institutions. The system uses federated learning to train models without centralizing sensitive medical data.",
    technologies: ["Python", "TensorFlow Federated", "Deep Learning", "Streamlit", "Healthcare AI", "Privacy Computing"],
    image: "🏥",
    category: "Healthcare AI",
    year: "2024",
    status: "Completed",
    features: [
      "Federated learning implementation",
      "Privacy-preserving data analysis",
      "Collaborative model training",
      "Streamlit web interface",
      "Medical data security compliance"
    ],
    githubUrl: "#",
    liveUrl: "#",
    screenshots: []
  },
  {
    id: 4,
    title: "AR Home Decorator",
    description: "Augmented Reality app for virtual furniture placement using Unity3D with real-time 3D tracking. Implemented intuitive UI for seamless virtual furniture interaction.",
    longDescription: "An innovative AR application that allows users to visualize and place virtual furniture in their real-world environment. Built with Unity3D and AR Foundation, the app provides realistic furniture placement with accurate scaling and lighting.",
    technologies: ["Unity", "C#", "AR Foundation", "3D Modeling", "ARCore", "ARKit"],
    image: "🏠",
    category: "Augmented Reality",
    year: "2023",
    status: "Completed",
    features: [
      "Real-time 3D object tracking",
      "Virtual furniture catalog",
      "Realistic lighting and shadows",
      "Cross-platform AR support",
      "Intuitive touch controls"
    ],
    githubUrl: "#",
    liveUrl: "#",
    screenshots: []
  }
];

export const skills = {
  languages: [
    { name: "Java", level: 90, icon: "☕", category: "Backend" },
    { name: "JavaScript", level: 85, icon: "🟨", category: "Frontend" },
    { name: "Python", level: 75, icon: "🐍", category: "ML/AI" },
    { name: "C#", level: 70, icon: "#️⃣", category: "Game Dev" },
    { name: "SQL", level: 80, icon: "🗃️", category: "Database" }
  ],
  frameworks: [
    { name: "Spring Boot", level: 85, icon: "🍃", category: "Backend" },
    { name: "React", level: 80, icon: "⚛️", category: "Frontend" },
    { name: "Android Studio", level: 90, icon: "📱", category: "Mobile" },
    { name: "Firebase", level: 85, icon: "🔥", category: "Cloud" },
    { name: "Unity", level: 75, icon: "🎮", category: "Game Engine" }
  ],
  tools: [
    { name: "Git/GitHub", level: 90, icon: "🐙", category: "Version Control" },
    { name: "VS Code", level: 95, icon: "💻", category: "IDE" },
    { name: "IntelliJ", level: 85, icon: "🧠", category: "IDE" },
    { name: "Salesforce", level: 70, icon: "☁️", category: "CRM" },
    { name: "Docker", level: 65, icon: "🐳", category: "DevOps" }
  ]
};

export const certifications = [
  {
    id: 1,
    title: "Java Spring Framework 6 with Spring Boot 3",
    issuer: "Udemy",
    date: "Jul 2024",
    skills: ["Spring Boot", "REST APIs", "Java"]
  },
  {
    id: 2,
    title: "Introduction to Back-End Development",
    issuer: "Meta",
    date: "Jan 2024",
    skills: ["Backend Development", "Web APIs", "Databases"]
  },
  {
    id: 3,
    title: "Java Programming and Software Engineering Fundamentals",
    issuer: "Coursera, Duke University",
    date: "Jan 2024",
    skills: ["Java", "Software Engineering", "Algorithms"]
  },
  {
    id: 4,
    title: "Programming Foundations with JavaScript, HTML and CSS",
    issuer: "Coursera, Duke University",
    date: "Jan 2024",
    skills: ["JavaScript", "HTML5", "CSS3"]
  },
  {
    id: 5,
    title: "Salesforce Developer Virtual Internship",
    issuer: "SmartInternz",
    date: "Jan 2024",
    skills: ["Salesforce", "CRM", "Apex"]
  },
  {
    id: 6,
    title: "Java Programming: Build a Recommendation System",
    issuer: "Coursera, Duke University",
    date: "Jan 2024",
    skills: ["Java", "Recommendation Algorithms"]
  },
  {
    id: 7,
    title: "The Complete Java Development Bootcamp",
    issuer: "Udemy",
    date: "Mar 2023",
    skills: ["Java", "Object-Oriented Programming"]
  }
];


export const hobbies = [
  { name: "Cricket", icon: "🏏" },
  { name: "Volleyball", icon: "🏐" },
  { name: "Chess", icon: "♟️" },
  { name: "Travelling", icon: "✈️" }
];

export const achievements = [
  {
    title: "Second Prize in ProExpo 2025",
    description: "Secured Second Prize in Project Presentation Competition at Acharya Institute of Technology",
    year: "2025"
  },
  {
    title: "99.9% Accuracy in Fraud Detection",
    description: "Achieved exceptional accuracy in credit card fraud detection using advanced ML algorithms",
    year: "2023"
  },
  {
    title: "Smart Irrigation Innovation",
    description: "Developed IoT solution for optimizing water usage in agriculture",
    year: "2022"
  }
];


export const stats = [
  { label: "Projects Completed", value: "15+" },
  { label: "Certifications", value: "10+" },
  { label: "Technologies Mastered", value: "20+" },
  { label: "Years of Learning", value: "4+" }
];