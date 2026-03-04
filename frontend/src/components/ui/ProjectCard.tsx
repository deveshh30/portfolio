import type { Project } from '../../data/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="
      group bg-gray-900/60 border border-gray-800 rounded-xl overflow-hidden
      hover:border-blue-600/50 hover:shadow-2xl hover:shadow-blue-900/20
      transition-all duration-300
    ">
      {/* Image area */}
      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-7xl font-bold text-gray-700 group-hover:text-blue-600/40 transition-colors">
            {project.title[0]}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="
              px-3 py-1 text-xs font-medium rounded-full
              bg-gray-800/80 text-blue-300 border border-blue-500/30
            ">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Live Demo →
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 font-medium transition-colors"
          >
            Source Code →
          </a>
        </div>
      </div>
    </div>
  );
}