// src/components/sections/ProjectCard.tsx
import type { Project } from '../../data/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="
      bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden
      hover:border-[#004643]/60 transition-all duration-300
      flex flex-col h-full
    ">
      {/* Status badge */}
      <div 
        className="px-4 py-2 bg-gray-800/80 text-sm font-medium text-center"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {project.status === 'Completed' ? 'Completed' : project.status}
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-4">
        <h3 
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>

        <p 
          className="text-gray-300 flex-grow"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-[#2ea19b] border border-[#004643]/45"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 pt-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" className="text-[#2ea19b] hover:text-[#59c7c1]">
              Live Demo →
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" className="text-gray-300 hover:text-gray-100">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}