import {
  ProjectItem,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  AchievementItem,
  CertificationItem,
  DeveloperStage,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Jayasri Muthukumaran',
  roleHeadline: 'Software Developer | Python Developer | AI/ML Enthusiast',
  alternativeHeadline: 'Aspiring Software Developer specializing in Python, Web Development & AI/ML',
  location: 'Puducherry, India',
  targetLocations: 'Chennai, Bengaluru, Hyderabad, Puducherry, or Remote',
  email: 'jayasri200508j@gmail.com',
  phone: '+91 93424 68213',
  github: 'https://github.com/JAYASRI-MUTHUKUMARAN',
  linkedin: 'https://www.linkedin.com/in/jayasri-m-1a64b5305',
  leetcode: 'https://leetcode.com/u/2bfUUy84vA/',
  resumeFileName: '/Jayasri_Muthukumaran_Resume.pdf',
  graduationYear: '2026',
  cgpa: '8.98 / 10',
  degree: 'B.Tech / B.E. Information Technology',
  college: 'Rajiv Gandhi College of Engineering and Technology, Puducherry',
  distinction: 'First Class with Distinction',
  aboutIntro1:
    'I am an Information Technology graduate with a strong interest in software development, Python, web technologies and artificial intelligence. I enjoy building applications that combine clean backend logic with practical user experiences.',
  aboutIntro2:
    'During my academic and internship experience, I have worked with Python, SQL, Flask, React, APIs, Git/GitHub and AI/ML technologies. My major project focused on an AI-powered sign language translation system, where I worked extensively on backend development, machine-learning integration and application functionality.',
  aboutIntro3:
    'I am currently looking for an entry-level Software Developer, Python Developer, Web Developer or AI/ML opportunity where I can contribute, learn from experienced engineers and grow into a strong software professional.',
};

export const QUICK_STATS = [
  { label: 'CGPA', value: '8.98', note: 'First Class with Distinction', highlight: 'Academic' },
  { label: 'Graduate', value: '2026', note: 'B.Tech Information Technology', highlight: 'Degree' },
  { label: 'Primary Language', value: 'Python', note: 'FastAPI, Flask, Data Structures', highlight: 'Backend' },
  { label: 'Project Experience', value: 'AI / ML', note: 'Computer Vision & Deep Learning', highlight: 'Applied AI' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    categoryKey: 'programming',
    skills: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'C'],
  },
  {
    title: 'Backend',
    categoryKey: 'backend',
    skills: ['Flask', 'FastAPI', 'REST APIs', 'Node.js Basics'],
  },
  {
    title: 'Frontend',
    categoryKey: 'frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'AI / Machine Learning',
    categoryKey: 'aiml',
    skills: [
      'TensorFlow',
      'Keras',
      'MediaPipe',
      'Computer Vision',
      'Machine Learning',
      'OpenCV',
      'Gemini API',
    ],
  },
  {
    title: 'Databases',
    categoryKey: 'databases',
    skills: ['SQL', 'Relational Database Concepts', 'SQLite', 'DBMS'],
  },
  {
    title: 'Developer Tools',
    categoryKey: 'tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Docker', 'Linux'],
  },
];

export const FEATURED_PROJECT: ProjectItem = {
  id: 'sign-sense-pro',
  title: 'SignSense Pro — AI Sign Language Translator',
  category: 'AI / Machine Learning / Computer Vision / Full-Stack Application',
  shortDescription:
    'An AI-powered sign language translation system designed to recognize American Sign Language (ASL) gestures and convert them into text and speech. The project uses computer vision and deep learning techniques to process hand, pose and facial landmark information from video input.',
  problemStatement:
    'Bridge the communication barrier between deaf or hard-of-hearing individuals and hearing communities using automated, low-latency, word-level American Sign Language recognition on edge devices without specialized sensor hardware.',
  whatIBuilt:
    'Built an end-to-end sequence recognition pipeline processing multi-point landmarks (hand, pose, and face) across 30-frame temporal sequences using a CNN-LSTM deep learning architecture. Trained and validated on the WLASL dataset across a 700-word vocabulary, achieving ~95% validation accuracy with multi-threaded edge processing and 40+ language speech output.',
  technologies: [
    'Python',
    'MediaPipe',
    'TensorFlow / Keras',
    'Computer Vision',
    'OpenCV',
    'WLASL Dataset',
    'Text-to-Speech',
  ],
  metrics: [
    '700-word ASL vocabulary recognition',
    '30-frame temporal sequence analysis',
    '~95% validation accuracy',
    '40% edge execution latency reduction',
  ],
  features: [
    {
      title: 'Real-Time Recognition',
      description: 'Processes live webcam video stream to identify continuous sign language gestures in real time.',
    },
    {
      title: 'Video Analysis',
      description: 'Supports pre-recorded video-based gesture recognition with temporal sequence reconstruction.',
    },
    {
      title: 'Landmark-Based Processing',
      description: 'Uses MediaPipe to extract multi-point hand coordinates, skeletal pose, and facial landmark motion.',
    },
    {
      title: 'AI Prediction',
      description: 'Employs a trained deep-learning CNN-LSTM model for sequence-based word-level classification across 700 words.',
    },
    {
      title: 'Text Output',
      description: 'Converts recognized dynamic signs into readable, natural language text on screen.',
    },
    {
      title: 'Speech Output',
      description: 'Converts recognized sign words into synthesized audible speech for seamless two-way dialogue.',
    },
  ],
  githubUrl: 'https://github.com/JAYASRI-MUTHUKUMARAN',
  isFeatured: true,
};

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: 'smart-email-classifier',
    title: 'Smart Email Classifier & Auto-Reply',
    category: 'Full-Stack Web App / LLM Integration',
    shortDescription:
      'An end-to-end web application that fetches incoming messages via Gmail API and automatically categorizes them using LLM integration.',
    problemStatement:
      'High-volume inboxes require manual sorting, prioritization, and repetitive drafting for common routine queries.',
    whatIBuilt:
      'Built a FastAPI backend paired with SQLite persistence to maintain classification history and context-aware reply drafts. Designed a responsive React.js and Tailwind CSS dashboard for real-time draft review and automated sending.',
    technologies: ['FastAPI', 'React.js', 'Tailwind CSS', 'Gemini API', 'Gmail API', 'SQLite'],
    metrics: ['Automated email triage', 'Context-aware reply generation', 'Persistent draft review'],
    githubUrl: 'https://github.com/JAYASRI-MUTHUKUMARAN',
  },
  {
    id: 'geospatial-weather-dashboard',
    title: 'Geospatial Weather Analytics Dashboard',
    category: 'Frontend / Data Visualization / APIs',
    shortDescription:
      'A single-page interactive dashboard leveraging Google Maps API and OpenWeather API to display real-time weather analytics.',
    problemStatement:
      'Surfacing dense geospatial meteorological data without overwhelming users or exceeding API quotas during frequent queries.',
    whatIBuilt:
      'Designed a clear information hierarchy prioritizing scannability over raw visual clutter. Implemented client-side caching via LocalStorage, reducing redundant external API requests by 30%.',
    technologies: ['JavaScript', 'React.js', 'Google Maps API', 'OpenWeather API', 'LocalStorage'],
    metrics: ['30% API request reduction via caching', 'Interactive map visualization', 'Responsive layout'],
    githubUrl: 'https://github.com/JAYASRI-MUTHUKUMARAN',
  },
  {
    id: 'handwritten-digit-recognition',
    title: 'Handwritten Digit Recognition',
    category: 'Machine Learning / Web Application',
    shortDescription:
      'A web app for classifying handwritten digits with an interactive canvas and optimized image preprocessing.',
    problemStatement:
      'User-drawn canvas inputs often suffer from off-center bounding boxes and variable stroke widths, degrading model accuracy.',
    whatIBuilt:
      'Implemented custom bounding-box centering and normalization algorithms in Python, followed by training an MLPClassifier in scikit-learn and serving predictions via a lightweight Flask service.',
    technologies: ['Python', 'Flask', 'scikit-learn', 'MLPClassifier', 'HTML5 Canvas'],
    metrics: ['Bounding-box normalization', 'Real-time canvas drawing', 'Sub-50ms inference time'],
    githubUrl: 'https://github.com/JAYASRI-MUTHUKUMARAN',
  },
  {
    id: 'placement-dsa-master',
    title: 'PlacementMaster & DSA Master',
    category: 'Educational Web Tools / Algorithms',
    shortDescription:
      'Self-contained, low-friction study and placement preparation tools designed to master Data Structures and Algorithms.',
    problemStatement:
      'Students need fast, offline-accessible revision tools that favor conceptual mental models over rote memorization.',
    whatIBuilt:
      'Created modular, offline-first study applications incorporating algorithmic pattern walkthroughs, time/space complexity visualizations, and curated problem roadmaps.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Data Structures & Algorithms'],
    metrics: ['Offline-ready architecture', 'Zero dependencies', 'Structured placement prep'],
    githubUrl: 'https://github.com/JAYASRI-MUTHUKUMARAN',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: 'Software Intern',
    company: 'Global Remote Virtual Software Internship (Launched Global)',
    period: 'Feb 2025 – May 2025',
    type: 'Virtual Internship',
    highlights: [
      'Developed and debugged core application modules using Python and React.',
      'Participated in production testing and systematic debugging across feature releases.',
      'Resolved 20+ high-priority defects during production testing cycles.',
      'Utilized Git and GitHub for version control, collaborative code reviews, and issue tracking.',
      'Followed Agile development practices including sprint planning and retrospectives.',
      'Contributed to backend/API-related development and endpoint architecture.',
      'Optimized backend API endpoint response times, reducing latency by approximately 28% and improving local execution efficiency.',
    ],
    metrics: [
      '20+ High-Priority Defects Resolved',
      '28% API Latency Reduction',
      'Agile / Git Code Reviews',
    ],
    technologies: ['Python', 'React.js', 'REST APIs', 'Git', 'GitHub', 'Agile Methodology'],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'Rajiv Gandhi College of Engineering and Technology',
    degree: 'B.Tech / B.E. — Information Technology',
    period: '2022 – 2026',
    score: 'CGPA: 8.98 / 10',
    gradeBadge: 'First Class with Distinction',
    location: 'Puducherry, India',
  },
  {
    institution: 'Thiruvalluvar Girls Government Higher Secondary School',
    degree: 'Higher Secondary (HSC) — Computer Science',
    period: '2022',
    score: '73%',
    gradeBadge: 'Higher Secondary',
    location: 'Puducherry, India',
  },
  {
    institution: "St. Anne's English High School",
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2020',
    score: '77%',
    gradeBadge: 'Secondary School',
    location: 'Puducherry, India',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Academic Performance',
    detail: '8.98 CGPA — First Class with Distinction in B.Tech Information Technology.',
    iconName: 'GraduationCap',
    tag: 'Academic Excellence',
  },
  {
    title: 'Published Research',
    detail: 'Project work on AI-based sequence sign language translation published as a research paper.',
    iconName: 'FileText',
    tag: 'Research & Publications',
  },
  {
    title: 'International Conference',
    detail: 'Presented/attended an international conference related to the AI sign language recognition project.',
    iconName: 'Award',
    tag: 'Conference Presentation',
  },
  {
    title: 'AI Project Innovation',
    detail: 'Built an AI-powered word-level ASL recognition system on the WLASL dataset using MediaPipe & CNN-LSTM.',
    iconName: 'Brain',
    tag: 'Computer Vision',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'AI: Concepts and Techniques',
    issuer: 'NPTEL, IISc Bangalore',
    year: '2025',
    badge: 'Elite (75%)',
  },
  {
    title: 'Solutions Architecture Job Simulation',
    issuer: 'AWS / Forage',
    year: '2025',
    badge: 'Verified Simulation',
  },
  {
    title: 'The Full Stack Web Development',
    issuer: 'Meta, Coursera',
    year: '2025',
    badge: 'Professional Specialization',
  },
  {
    title: 'Build a Computer Vision App with Azure Cognitive Services',
    issuer: 'Microsoft, Coursera',
    badge: 'Computer Vision',
  },
  {
    title: 'Generative AI for Beginners',
    issuer: 'Great Learning Academy',
    badge: 'GenAI Foundations',
  },
  {
    title: 'HTML, CSS & JavaScript for Web Developers',
    issuer: 'Johns Hopkins, Coursera',
    year: '2024',
    badge: 'Web Fundamentals',
  },
  {
    title: 'Artificial Intelligence with Machine Learning Workshop',
    issuer: 'IIT Madras',
    year: '2025',
    badge: 'Workshop Certificate',
  },
  {
    title: 'AI Fluency for Students',
    issuer: 'Anthropic',
    year: '2024',
    badge: 'AI Safety & Prompting',
  },
];

export const DEVELOPER_STAGES: DeveloperStage[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the problem and user requirements.',
    practices: [
      'Analyze edge cases and functional constraints before writing code.',
      'Map user workflows and latency budgets.',
      'Define clear input/output data schemas.',
    ],
  },
  {
    step: '02',
    title: 'Design',
    description: 'Plan architecture, data flow and application structure.',
    practices: [
      'Structure modular component hierarchies and backend endpoints.',
      'Select suitable algorithms, datasets, and representation models.',
      'Design clean REST contracts and state persistence strategies.',
    ],
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop clean, maintainable and testable software.',
    practices: [
      'Write type-safe, readable code with descriptive naming.',
      'Keep modules decoupled with single responsibilities.',
      'Adhere to Git version control and progressive commits.',
    ],
  },
  {
    step: '04',
    title: 'Improve',
    description: 'Debug, optimize, test and continuously improve the application.',
    practices: [
      'Profile execution bottlenecks (e.g., 28% API latency reduction in internship).',
      'Optimize edge inference and multi-threaded frame processing.',
      'Gather feedback and iterate on usability and accessibility.',
    ],
  },
];
