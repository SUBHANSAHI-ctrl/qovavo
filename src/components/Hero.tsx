const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] to-[#111827] text-white py-32 px-4 sm:px-6 lg:px-8">
      {/* Animated gradient background mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20 animate-pulse"></div>
      
      {/* Floating orbs with glow effects - simplified */}
      <div className="absolute inset-0">
        {/* Large blue orb - top left */}
        <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse top-1/4 left-1/4"></div>
        
        {/* Medium purple orb - top right */}
        <div className="absolute w-48 h-48 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse top-1/3 right-1/4" style={{animationDelay: '2s'}}></div>
        
        {/* Small blue orb - bottom left */}
        <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full blur-2xl opacity-25 animate-pulse bottom-1/4 left-1/3" style={{animationDelay: '4s'}}></div>
        
        {/* Medium cyan orb - bottom right */}
        <div className="absolute w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse bottom-1/3 right-1/3" style={{animationDelay: '6s'}}></div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-white/10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Main content - above all animations */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Company Logo */}
        <div className="mb-8">
          <img 
            src="/logo-full.svg" 
            alt="Qovavo" 
            className="h-16 w-auto mx-auto mb-4"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 hidden">Qovavo</span>
        </div>
        
        {/* Animated gradient text effect */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Qovavo
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Empowering your digital journey with innovative tools and solutions
        </p>
        
        <a
          href="/contact"
          className="relative inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-105"
        >
          Get In Touch With Us
        </a>
      </div>
      
      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
    </section>
  );
};

export default Hero;