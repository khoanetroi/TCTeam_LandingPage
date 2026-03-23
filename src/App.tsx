import { useEffect, useState } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden">
      {/* Background glowing orbs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-neon-blue/20 blur-[120px]" />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-4 shadow-xl shadow-black/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-neon-blue flex items-center justify-center font-display font-bold text-lg shadow-lg shadow-primary-500/30">
              V
            </div>
            <span className="font-display font-bold text-xl tracking-tight">VIQTeam</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          </nav>

          <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer border border-white/5 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Get Started
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Welcome to the future of web design
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6">
            Build Faster, <br />
            <span className="bg-gradient-to-r from-primary-400 via-neon-cyan to-neon-blue text-gradient">
              Scale Better.
            </span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 font-light leading-relaxed">
            VIQTeam brings you the ultimate landing page experience, crafted with precision using React, TypeScript, and the power of Tailwind CSS v4.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="h-14 px-8 rounded-full bg-gradient-to-r from-primary-600 to-neon-blue text-white font-medium text-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer">
              Start Building Now
            </button>
            <button className="h-14 px-8 rounded-full glass hover:bg-white/10 text-white font-medium text-lg transition-all duration-300 cursor-pointer flex items-center gap-2">
              View Documentation
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Discover the amazing features that make our platform stand out from the rest. Built for modern teams and creators.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 hover:border-primary-500/30 group">
              <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Lightning Fast</h3>
              <p className="text-slate-400 leading-relaxed font-light">Experience blazing fast performance powered by Vite and optimized React rendering paths.</p>
            </div>

            {/* Feature 2 */}
            <div className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 hover:border-neon-cyan/30 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-[40px] -z-10 group-hover:bg-neon-cyan/20 transition-colors duration-500"></div>
              <div className="w-14 h-14 rounded-2xl bg-neon-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Highly Customizable</h3>
              <p className="text-slate-400 leading-relaxed font-light">Tailor every aspect of your application with flexible Tailwind utility classes and native CSS variables.</p>
            </div>

            {/* Feature 3 */}
            <div className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 hover:border-neon-blue/30 group">
              <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">Secure by Default</h3>
              <p className="text-slate-400 leading-relaxed font-light">Built with strict TypeScript rules and modern best practices to keep your data and users safe.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary-500 to-neon-blue flex items-center justify-center font-display font-bold text-xs">
              V
            </div>
            <span className="font-display font-semibold text-lg text-slate-300">VIQTeam</span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} VIQTeam Landing Page. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
