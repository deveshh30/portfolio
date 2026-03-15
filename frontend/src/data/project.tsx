import dash from "../assets/dash.png";
import task from "../assets/task.png";
import profile from "../assets/profile.png";

export interface Project {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Planned' | 'MVP Live - Adding Features';
  shortDescription: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  images?: string[];          
  highlights: string[];
}

export const projectsData: Project[] = [
  {
  id: 'cogniflow',
  title: 'CogniFlow - Real-time Collaborative Dashboard',
  status: 'Completed',
  shortDescription: 'A full-stack collaborative task dashboard with real-time updates, responsive task flows, and a clean MERN architecture built to learn production-style WebSocket features end to end.',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
  repoUrl: 'https://github.com/deveshh30/cogniflow',
  liveUrl: 'https://cogniflow-self.vercel.app/login',
  images: [dash, task, profile],
  highlights: [
    'Implemented WebSocket-based real-time task synchronization',
    'Built modular React components with custom hooks and Context API',
    'Created fully responsive dashboard using Tailwind CSS (mobile-first)',
    'Handled connection errors, optimistic UI updates, and CORS issues',
    'Learned full MERN deployment on Vercel + MongoDB Atlas'
  ]
},
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    status: 'MVP Live - Adding Features',
    shortDescription:
      'A personal developer portfolio built to present my projects, technical skills, and internship readiness through a polished single-page experience with strong visual hierarchy.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Styled Components'],
    liveUrl: 'https://portfolio-topaz-seven-38.vercel.app',
    highlights: [
      'Designed a polished single-page portfolio with distinct hero, about, skills, projects, and contact sections',
      'Built reusable React components and structured project data for easy content updates',
      'Focused on responsive layout, typography, and clear presentation of my work, strengths, and learning journey',
      'Deployed the site on Vercel and kept the structure flexible for ongoing content and project updates'
    ]
  },
  {
    id: 'chatforge',
    title: 'ChatForge - Real-time Live Chat App',
    status: 'In Progress',
    shortDescription:
      'A live chat platform in progress, built around instant messaging, responsive conversation views, and scalable real-time communication patterns for modern web apps.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    highlights: [
      'Built live one-to-one and group messaging with WebSocket-based updates',
      'Designed a responsive chat interface with message states and smooth conversation flow',
      'Handled real-time events such as user presence, instant delivery, and connection recovery',
      'Structured the app for future features like authentication, chat history, and production-ready separation of frontend and backend responsibilities'
    ]
  },
  
];