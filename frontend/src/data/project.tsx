export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  tech: string[];
  role?: string;               
  liveUrl?: string;
  repoUrl: string;
  image?: string;
  keyAchievements?: string[];  
}

export const projects: Project[] = [
  {
    id: "cogniflow",
    title: "CogniFlow",
    shortDescription: "Real-time collaborative dashboard built with MERN + Socket.io",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB", "Socket.io"],
    role: "Full-stack",
    liveUrl: "https://...",     // ← deployed link of the project
    repoUrl: "https://github.com/yourusername/cogniflow",
    image: "/projects/cogniflow-screenshot.png", // 
    keyAchievements: [
      "Implemented real-time updates using WebSockets",
      "Modular component architecture with custom hooks",
      "Responsive dashboard for mobile & desktop",
      "Learned to debug CORS and connection issues"
    ]
  },
  
];