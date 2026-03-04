// src/components/sections/Hero.tsx

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        min-h-screen flex items-center justify-center
        px-6 py-20 md:py-0
        bg-gradient-to-b from-gray-950 to-gray-900
      "
    >
      <div className="max-w-5xl w-full text-center space-y-8 md:space-y-10">
        {/* Optional photo/avatar */}
        <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
          {/* Replace with your photo later */}
          <div className="w-full h-full bg-gray-700 flex items-center justify-center text-5xl font-bold text-gray-400">
            D
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-blue-500">Devesh</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          1st-year Engineering Student • Building with React & TypeScript
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="#projects"
            className="
              inline-block bg-blue-600 hover:bg-blue-700
              text-white font-medium text-lg
              px-8 py-4 rounded-lg
              transition-all duration-300 transform hover:scale-105
              focus:outline-none focus:ring-4 focus:ring-blue-500/50
            "
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="
              inline-block border-2 border-gray-600 hover:border-gray-400
              text-white font-medium text-lg
              px-8 py-4 rounded-lg
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-gray-500/50
            "
          >
            Get in Touch
          </a>
        </div>

        {/* Optional tech badges row */}
        <div className="flex flex-wrap justify-center gap-3 pt-8">
          <span className="px-4 py-2 bg-gray-800/80 rounded-full text-sm font-medium text-blue-400 border border-blue-500/30">
            React
          </span>
          <span className="px-4 py-2 bg-gray-800/80 rounded-full text-sm font-medium text-cyan-400 border border-cyan-500/30">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-gray-800/80 rounded-full text-sm font-medium text-green-400 border border-green-500/30">
            Tailwind CSS
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;