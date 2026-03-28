import Image from "next/image";
import { BarChart3, Sparkles, ShieldCheck } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      {/* Premium Hero Section - ECOSYSTEM POSITIONING */}
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Background depth with animated glows */}
        <div className="absolute inset-0 -z-10">
          {/* Large blue orb - top left */}
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-blue-500 to-blue-600 opacity-15 rounded-full blur-3xl animate-pulse"></div>
          
          {/* Medium purple orb - top right */}
          <div className="absolute top-[-50px] right-[-50px] w-[250px] h-[250px] bg-gradient-to-br from-purple-500 to-purple-600 opacity-15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Small cyan orb - bottom left */}
          <div className="absolute bottom-[-80px] left-[-80px] w-[200px] h-[200px] bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
          
          {/* Medium blue orb - bottom right */}
          <div className="absolute bottom-[-60px] right-[-60px] w-[220px] h-[220px] bg-gradient-to-br from-blue-400 to-purple-500 opacity-10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Subtle animated gradient overlay */}
        <div 
          className="absolute inset-0 -z-10 animate-pulse"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradient-shift 8s ease infinite',
            opacity: 0.1
          }}
        ></div>

        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] -z-10"></div>

        {/* Hero Content - ECOSYSTEM POSITIONING */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          
          {/* Badge - ECOSYSTEM POSITIONING */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Tools for traders who want to improve
            </span>
          </div>

          {/* Main heading - ECOSYSTEM POSITIONING */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
              The Operating System for Traders
            </span>
          </h1>

          {/* Subheading - ECOSYSTEM POSITIONING */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Qovavo creates tools that help traders understand their performance, fix their mistakes, and make smarter decisions — with real data.
          </p>

          {/* CTA Buttons - ECOSYSTEM POSITIONING */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Button - ECOSYSTEM POSITIONING */}
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-md hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-105"
            >
              Explore Tools →
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Secondary Button - ECOSYSTEM POSITIONING */}
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-medium rounded-md hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all duration-200"
            >
              Start With Traderos →
            </Link>
          </div>

          {/* Trust indicators - ECOSYSTEM POSITIONING */}
          <div className="mt-12 flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Used by traders to track performance, improve discipline, and grow consistency</span>
            </div>
          </div>
        </div>

        {/* Bottom fade for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
      </section>

      {/* About Qovavo Section - NEW ECOSYSTEM POSITIONING */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            What We Do
          </h2>
          <div className="space-y-6">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We build digital tools for traders who want more than guesses and opinions. Our focus is simple: give you clarity on your performance, help you understand your behavior, and improve how you trade over time.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Instead of selling strategies, we build systems. Tools that show you what’s working, what’s not, and where you’re losing money.
            </p>
          </div>
        </div>
      </section>

      {/* Product Philosophy Section - ECOSYSTEM POSITIONING */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            Why Our Tools Exist
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Clarity Over Guessing</h3>
              <p className="text-gray-300">
                Most traders don’t know their real performance. We make it visible.
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Behavior Matters</h3>
              <p className="text-gray-300">
                Your results are driven by your decisions. We help you understand them.
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Built to Improve</h3>
              <p className="text-gray-300">
                Every tool is designed to help you grow — not just track data.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Products Section - ECOSYSTEM POSITIONING */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-100">
            Our Tools
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Each product solves a specific problem traders face.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Traderos Lite - ECOSYSTEM FLAGSHIP */}
            <div className="bg-[#111827] rounded-xl p-8 border border-gray-800 hover:border-gray-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Traderos Lite</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                A performance-driven trading journal that helps you understand your results, behavior, and edge. Track every trade, measure your performance, and uncover the patterns behind your wins and losses.
              </p>
              
              {/* Features - ECOSYSTEM FOCUSED */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Track every trade with precision
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  See your real win rate and performance metrics
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Identify your best and worst setups
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Detect patterns in your behavior
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  Visualize your performance with charts
                </div>
              </div>
              
              <a
                href="https://traderos.qovavo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-md hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02]"
              >
                Open Dashboard →
              </a>
            </div>

            {/* Future Tools - ECOSYSTEM SCALING */}
            <div className="bg-[#111827] rounded-xl p-8 border border-gray-800 hover:border-gray-700 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">More Tools Coming</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                We’re building a full ecosystem of tools for traders — from analytics to automation. Stay tuned for what’s next.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                  Advanced analytics tools
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                  Automation features
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                  Performance optimization
                </div>
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-500 text-purple-400 font-medium rounded-md hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-200"
              >
                Get Early Access →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Why Qovavo Section - ECOSYSTEM POSITIONING */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Built for Traders Who Want to Improve</h2>
          <p className="text-gray-400 mb-12">
            Not hype. Not signals. Just tools that help you get better.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 hover:scale-[1.02] transition-transform duration-200">
              <BarChart3 className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Understand Your Performance</h3>
              <p className="text-gray-400">See what’s actually working in your trading.</p>
            </div>

            <div className="p-6 hover:scale-[1.02] transition-transform duration-200">
              <Sparkles className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fix Costly Mistakes</h3>
              <p className="text-gray-400">Identify patterns that lead to losses.</p>
            </div>

            <div className="p-6 hover:scale-[1.02] transition-transform duration-200">
              <ShieldCheck className="w-10 h-10 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Grow With Data</h3>
              <p className="text-gray-400">Make decisions based on real insights, not emotions.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section - ECOSYSTEM POSITIONING */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-100">
            Start Improving Your Trading
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            You don’t need another strategy. You need to understand your current one.
          </p>
          <Link
            href="/products"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-md font-medium hover:opacity-90 transition hover:scale-[1.02] text-lg"
          >
            Start With Traderos →
          </Link>
        </div>
      </section>

    </main>
  );
}