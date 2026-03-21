import { skillsData } from '../../data/skills';
import type { Skill } from '../../data/skills';
import {
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const skillIcons: Record<string, React.ReactNode> = {
  react: <SiReact className="text-[30px] text-sky-400" aria-hidden="true" />,
  tailwind: <SiTailwindcss className="text-[30px] text-cyan-400" aria-hidden="true" />,
  htmlcss: <SiHtml5 className="text-[30px] text-orange-500" aria-hidden="true" />,
  javascript: <SiJavascript className="text-[30px] text-yellow-400" aria-hidden="true" />,
  node: <SiNodedotjs className="text-[30px] text-green-500" aria-hidden="true" />,
  mongodb: <SiMongodb className="text-[30px] text-emerald-500" aria-hidden="true" />,
  github: <SiGithub className="text-[30px] text-white" aria-hidden="true" />,
  vscode: <VscVscode className="text-[30px] text-blue-500" aria-hidden="true" />,
};

const skillTypeLabel: Record<string, string> = {
  vscode: 'Code Editor',
  react: 'Framework',
  tailwind: 'Framework',
  htmlcss: 'Language',
  javascript: 'Language',
  node: 'Javascript Runtime',
  mongodb: 'Database',
  github: 'Repository',
};

const fallbackTypeLabel: Record<Skill['category'], string> = {
  Frontend: 'Framework',
  'Backend & Databases': 'Backend',
  'Tools & Practices': 'Tooling',
  'Learning Next': 'Learning',
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tools & Technologies
        </h2>
        <p className="text-gray-300 mb-10">My Profesional Skills</p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-3 gap-4"
        >
          {skillsData.map((skill) => {
            const iconNode = skill.icon ? skillIcons[skill.icon] : undefined;
            const typeLabel =
              (skill.icon && skillTypeLabel[skill.icon]) || fallbackTypeLabel[skill.category];

            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.55 }}
                className="bg-[#12141f] border border-[#2a2d3b] hover:border-[#3a3f55] rounded-xl px-6 py-5 min-h-[108px] flex items-center gap-4 transition-colors duration-250"
              >
                {/* Icon / Logo */}
                <div className="w-16 h-16 p-3 shrink-0 rounded-md bg-[#1c1f2b] flex items-center justify-center">
                  {iconNode ? iconNode : (
                    <span className="text-xl text-gray-300">{skill.name[0]}</span>
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-xl leading-tight text-[#d9d9de] truncate">
                    {skill.name}
                  </h3>
                  <p className="text-[19px] text-[#8b90a4] leading-tight mt-1">{typeLabel}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;