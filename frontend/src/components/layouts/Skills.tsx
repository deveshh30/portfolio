import { skillsData } from '../../data/skills';
import type { Skill } from '../../data/skills';

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="
      group flex items-start gap-4 p-4 rounded-lg
      bg-gray-900/40 border border-gray-800
      hover:border-gray-700 hover:bg-gray-900/60
      transition-all duration-200
    ">
      {/* Optional icon – you can use heroicons or lucide later */}
      <div className={`w-10 h-10 rounded-md flex items-center justify-center bg-gradient-to-br from-${skill.color}/20 to-transparent`}>
        {/* Placeholder icon */}
        <span 
          className="text-xl font-bold text-gray-400 group-hover:text-white/80 transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {skill.name[0]}
        </span>
      </div>

      <div className="flex-1 space-y-1">
        <h4 
          className="font-medium text-white group-hover:text-[#004643] transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {skill.name}
        </h4>
        <p 
          className="text-sm text-gray-400"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {skill.evidence}
        </p>
        {skill.level && (
          <span className={`
            inline-block px-2.5 py-0.5 text-xs font-medium rounded-full
            ${skill.level === 'Strong' ? 'bg-green-900/40 text-green-400 border border-green-500/30' :
              skill.level === 'Intermediate' ? 'bg-[#002826]/40 text-[#2ea19b] border border-[#004643]/45' :
              'bg-gray-800 text-gray-400 border border-gray-600'}
          `}>
            {skill.level}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  // Group skills by category
  const categories = ['Frontend', 'Backend & Databases', 'Tools & Practices', 'Learning Next'] as const;

  return (
    <section id="skills" className="py-20 px-6 bg-gray-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Technical <span className="text-[#004643]">Skills</span>
        </h2>

        <div className="space-y-16">
          {categories.map(category => {
            const categorySkills = skillsData.filter(s => s.category === category);

            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <h3 
                  className="text-2xl font-semibold mb-6 text-gray-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categorySkills.map(skill => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}