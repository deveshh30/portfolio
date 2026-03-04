import Hero from "../components/layouts/Hero";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from '../data/project';

const Home = () => {
    return (
        <div className="pt-16">
            <Hero />

            <section id="about" className="py-20 px-6 bg-gray-900/50">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-300">
                    Aspiring full-stack developer passionate about clean code, real-time apps, and learning new technologies.
                </p>
            </section>
            <section id="projects" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Featured <span className="text-blue-500">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    </div>
            </div>
            </section>
        </div>
    )
};

export default Home;