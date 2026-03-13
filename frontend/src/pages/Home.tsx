import Hero from "../components/layouts/Hero";
import ProjectCard from "../components/ui/ProjectCard";
import { projectsData as projects } from '../data/project';
import Skills from "../components/layouts/Skills";
import Contact from "../components/layouts/Contact";

const Home = () => {
    return (
        <div className="pt-16">
            <Hero />

        <section id="about" className="py-20 px-6 bg-gray-950">
            <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-12 items-center">
                
                {/* Left: Text */}
                <div className="space-y-6">
                <h2 className="text-4xl font-bold">About Me</h2>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                    I'm Devesh, a 1st-year Engineering student from Delhi passionate about building 
                    modern, scalable web applications. What started as simple HTML/CSS experiments 
                    quickly turned into a full-stack journey when I discovered the power of the MERN stack.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    My first major project, <span className="text-[#2ea19b] font-medium">CogniFlow</span>, 
                    taught me how to build real-time collaborative features using Socket.io, 
                    design clean component architecture, and deploy a complete MERN application. 
                    I'm currently deepening my skills in TypeScript and planning to learn SQL and 
                    relational databases next.
                </p>

                <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-4">What drives me</h3>
                    <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                        <span className="text-[#004643] mt-1">→</span>
                        Writing clean, maintainable code that actually solves problems
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[#004643] mt-1">→</span>
                        Turning ideas into live, working products (like CogniFlow)
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-[#004643] mt-1">→</span>
                        Learning something new every week and applying it immediately
                    </li>
                    </ul>
                </div>

                <p className="text-gray-400 pt-6">
                    I'm actively looking for frontend or full-stack internships where I can 
                    contribute, learn from experienced developers, and grow into a strong engineer.
                </p>
                </div>

                {/* Right: Optional photo or visual (recommended)
                <div className="hidden md:block">
                <div className="aspect-square rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
                    <img 
                    src="/about-photo.jpg" 
                    alt="Devesh working" 
                    className="w-full h-full object-cover"
                    />
                </div>
                </div> */}
            </div>
            </section>


            <section id="projects" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Featured <span className="text-[#004643]">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    </div>
            </div>
            </section>
            <section>
                <Skills/>
            </section>

            <section>
                <Contact/>
            </section>
        </div>
    )
};

export default Home;