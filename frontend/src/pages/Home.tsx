import Hero from "../components/layouts/Hero";

const Home = () => {
    return (
        <div className="pt-24">
            {/* /* herosection *} */}
            <Hero/>
            

            <section id="about" className="py-20 px-6 bg-gray-900/50">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-300">
                add my details later heree
                Aspiring full-stack developer passionate about clean code, real-time apps, and learning SQL next.
                </p>
            </section>
        </div>
    )
};

export default Home;