export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend & Databases' | 'Tools & Practices' | 'Learning Next';
  icon?: string;          // icon key resolved in Skills component
  evidence: string;       // 1 short sentence – proof you used it
  level?: 'Strong' | 'Intermediate' | 'Beginner'; // optional – be brutally honest
  color?: string;         // tailwind color accent e.g. 'teal-500'
}

export const skillsData: Skill[] = [
  {
    name: 'React + TypeScript',
    category: 'Frontend',
    icon: 'react',
    evidence: 'Built modular components, custom hooks, and real-time dashboard in CogniFlow',
    level: 'Intermediate',
    color: 'teal-500'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'tailwind',
    evidence: 'Responsive mobile-first layouts, dark mode, custom config for this portfolio',
    level: 'Intermediate',
    color: 'cyan-500'
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    icon: 'htmlcss',
    evidence: 'Semantic markup, accessibility (ARIA), flex/grid layouts',
    level: 'Strong',
    color: 'gray-400'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    icon: 'javascript',
    evidence: 'Async/await, destructuring, modules, closures – foundation of all my work',
    level: 'Intermediate',
    color: 'yellow-500'
  },
  {
    name: 'Node.js + Express',
    category: 'Backend & Databases',
    icon: 'node',
    evidence: 'REST APIs, middleware, error handling in CogniFlow backend',
    level: 'Intermediate',
    color: 'green-600'
  },
  {
    name: 'MongoDB',
    category: 'Backend & Databases',
    icon: 'mongodb',
    evidence: 'Schemas, CRUD operations, basic aggregation in MERN projects',
    level: 'Intermediate',
    color: 'emerald-500'
  },
  {
    name: 'Git & GitHub',
    category: 'Tools & Practices',
    icon: 'github',
    evidence: 'Clean commit messages, branching, PRs, version control discipline',
    level: 'Intermediate',
    color: 'orange-500'
  },
  {
    name: 'VS Code',
    category: 'Tools & Practices',
    icon: 'vscode',
    evidence: 'Extensions (Prettier, ESLint, Tailwind IntelliSense), debugging, tasks',
    level: 'Strong',
    color: 'indigo-500'
  },
  
];