// src/components/sections/Hero.tsx

import Profile from "../ui/Profile";

const Hero = () => {
  return (
    <section id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20 overflow-hidden bg-[#050508]"
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#004643]/30 via-[#050508] to-[#00312f]/20" />
      
      {/* Top spotlight */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-[#004643]/[0.09] rounded-full blur-[120px]" />
      
      {/* Right side glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#004643]/[0.08] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00635e]/[0.06] rounded-full blur-[80px]" />
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#004643]/25 via-transparent to-transparent" />
      
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl w-full">
        <div className="max-w-2xl space-y-8">
          {/* Status badge */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-zinc-500 font-medium">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Devesh
              <span className="text-[#004643]">.</span>
            </h1>
            <p 
              className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Full-Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-lg">
            1st-year Engineering student crafting modern web experiences. 
            I build performant applications with clean code and thoughtful design.
          </p>

          {/* Quick stats */}
          <div className="flex items-center gap-8 py-2">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>5+</p>
              <p className="text-xs text-zinc-600 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Projects</p>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>10+</p>
              <p className="text-xs text-zinc-600 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Technologies</p>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>2029</p>
              <p className="text-xs text-zinc-600 uppercase tracking-wider">Grad Year</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 bg-white text-black font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200 hover:bg-zinc-200"
            >
              View Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white font-medium text-sm px-8 py-4 rounded-lg transition-all duration-200"
            >
              Contact Me
            </a>
          </div>

          {/* Tech stack */}
          <div className="pt-6 border-t border-zinc-900">
            <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 text-sm font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800/50 rounded-lg hover:text-white hover:border-zinc-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          
        </div>

        
      </div>

      <Profile/>
    </section>
  );
};

export default Hero;