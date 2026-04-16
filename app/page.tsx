import Image from "next/image";
import { Sparkles, ShieldCheck, TrendingUp, Target, Zap } from "lucide-react";
import Link from 'next/link';
import HeroVisual from '@/src/components/HeroVisual';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090F] text-[#DDE4F0]">

      {/* Hero */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-125 h-125 bg-[#4361EE]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-[#2DD4BF]/4 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4361EE]/10 border border-[#4361EE]/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF]"></span>
                <span className="text-[#6681F4] text-xs font-medium">Tools for traders who want to improve</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 tracking-tight">
                The Operating<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4361EE] to-[#2DD4BF]">
                  System for Traders
                </span>
              </h1>
              <p className="text-lg text-[#7B8BB0] mb-10 leading-relaxed">
                Qovavo creates tools that help traders understand their performance, fix their mistakes, and make smarter decisions — with real data.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#4361EE] text-white font-semibold rounded-lg hover:bg-[#3451D1] transition-colors text-sm"
                  data-track="explore-tools"
                >
                  Explore Tools →
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-[#1E2844] text-[#7B8BB0] font-semibold rounded-lg hover:border-[#4361EE]/40 hover:text-[#DDE4F0] transition-all text-sm"
                  data-track="start-trakvex"
                >
                  Start With Trakvex
                </Link>
              </div>
            </div>

            {/* Right: animated dashboard visual — hidden on mobile */}
            <div className="hidden lg:block">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1220]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-[#2DD4BF] uppercase tracking-widest mb-3">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#DDE4F0] mb-6 tracking-tight">What We Do</h2>
              <div className="space-y-4">
                <p className="text-[#7B8BB0] leading-relaxed">
                  We build digital tools for traders who want more than guesses and opinions. Our focus is simple: give you clarity on your performance, help you understand your behavior, and improve how you trade over time.
                </p>
                <p className="text-[#7B8BB0] leading-relaxed">
                  Instead of selling strategies, we build systems. Tools that show you what&apos;s working, what&apos;s not, and where you&apos;re losing money.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-5 hover:border-[#4361EE]/30 transition-colors">
                <TrendingUp className="w-5 h-5 text-[#4361EE] mb-3" />
                <h3 className="font-semibold text-[#DDE4F0] mb-1 text-sm">Performance Clarity</h3>
                <p className="text-[#7B8BB0] text-sm">See exactly how your trades are performing.</p>
              </div>
              <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-5 hover:border-[#4361EE]/30 transition-colors">
                <Target className="w-5 h-5 text-[#2DD4BF] mb-3" />
                <h3 className="font-semibold text-[#DDE4F0] mb-1 text-sm">Behavior Insights</h3>
                <p className="text-[#7B8BB0] text-sm">Understand the decisions driving your results.</p>
              </div>
              <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-5 sm:col-span-2 hover:border-[#4361EE]/30 transition-colors">
                <Zap className="w-5 h-5 text-[#4361EE] mb-3" />
                <h3 className="font-semibold text-[#DDE4F0] mb-1 text-sm">Built to Improve</h3>
                <p className="text-[#7B8BB0] text-sm">Every tool is designed to help you grow — not just track data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#08090F]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold text-[#4361EE] uppercase tracking-widest mb-3">Our Tools</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#DDE4F0] mb-3 tracking-tight">Products Built for Traders</h2>
          <p className="text-[#7B8BB0] mb-12 max-w-xl">Each product solves a specific problem traders face.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Trakvex */}
            <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6 hover:border-[#4361EE]/40 transition-all flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/traderos-logo.png" alt="Trakvex" width={36} height={36} className="rounded-lg" />
                <h3 className="text-lg font-bold text-[#DDE4F0]">Trakvex</h3>
              </div>
              <p className="text-[#7B8BB0] mb-5 leading-relaxed text-sm">
                A performance-driven trading journal that helps you understand your results, behavior, and edge. Track every trade, measure your performance, and uncover the patterns behind your wins and losses.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  'Track every trade with precision',
                  'See your real win rate and metrics',
                  'Identify your best and worst setups',
                  'Detect patterns in your behavior',
                  'Visualize performance with charts',
                ].map((item) => (
                  <li key={item} className="flex items-center text-sm text-[#7B8BB0]">
                    <span className="w-1.5 h-1.5 bg-[#4361EE] rounded-full mr-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://traderos.qovavo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#4361EE] text-white text-sm font-semibold rounded-lg hover:bg-[#3451D1] transition-colors"
                data-track="open-trakvex"
              >
                Open Dashboard →
              </a>
            </div>

            {/* Fluxivo */}
            <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6 hover:border-[#4361EE]/40 transition-all flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/FLUXIVO.png" alt="Fluxivo" width={36} height={36} className="rounded-lg" />
                <h3 className="text-lg font-bold text-[#DDE4F0]">Fluxivo</h3>
              </div>
              <p className="text-[#7B8BB0] mb-5 leading-relaxed text-sm">
                A market intelligence tool that helps you understand news, its impact, and what it means for your trades. Cut through the noise, see what truly matters, and react with clarity and confidence.
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  'Stay updated with relevant market news',
                  'Understand how events affect your pairs',
                  'Get clear summaries without noise',
                  'Identify market direction and volatility',
                  'Learn the reasoning behind price moves',
                ].map((item) => (
                  <li key={item} className="flex items-center text-sm text-[#7B8BB0]">
                    <span className="w-1.5 h-1.5 bg-[#4361EE] rounded-full mr-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://fluxivo.qovavo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#4361EE] text-white text-sm font-semibold rounded-lg hover:bg-[#3451D1] transition-colors"
                data-track="open-fluxivo"
              >
                Open Dashboard →
              </a>
            </div>

            {/* More Tools Coming */}
            <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#2DD4BF]/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#2DD4BF]" />
                </div>
                <h3 className="text-lg font-bold text-[#DDE4F0]">More Tools Coming</h3>
              </div>
              <p className="text-[#7B8BB0] mb-5 leading-relaxed text-sm flex-1">
                We&apos;re building a full ecosystem of tools for traders — from analytics to automation. Stay tuned for what&apos;s next.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Advanced analytics tools',
                  'Automation features',
                  'Performance optimization',
                ].map((item) => (
                  <li key={item} className="flex items-center text-sm text-[#7B8BB0]">
                    <span className="w-1.5 h-1.5 bg-[#2DD4BF]/50 rounded-full mr-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-[#4361EE]/40 text-[#4361EE] text-sm font-semibold rounded-lg hover:bg-[#4361EE]/10 transition-colors"
                data-track="early-access"
              >
                Get Early Access →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Why Qovavo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1220]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold text-[#2DD4BF] uppercase tracking-widest mb-3">Why Qovavo</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#DDE4F0] mb-3 tracking-tight">Built for Traders Who Want to Improve</h2>
          <p className="text-[#7B8BB0] mb-12">Not hype. Not signals. Just tools that help you get better.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6 hover:border-[#4361EE]/30 transition-colors">
              <div className="w-9 h-9 bg-[#4361EE]/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-4 h-4 text-[#4361EE]" />
              </div>
              <h3 className="font-bold text-[#DDE4F0] mb-2">Understand Your Performance</h3>
              <p className="text-[#7B8BB0] text-sm">See what&apos;s actually working in your trading.</p>
            </div>
            <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6 hover:border-[#4361EE]/30 transition-colors">
              <div className="w-9 h-9 bg-[#4361EE]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-4 h-4 text-[#4361EE]" />
              </div>
              <h3 className="font-bold text-[#DDE4F0] mb-2">Fix Costly Mistakes</h3>
              <p className="text-[#7B8BB0] text-sm">Identify patterns that lead to losses.</p>
            </div>
            <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6 hover:border-[#2DD4BF]/30 transition-colors">
              <div className="w-9 h-9 bg-[#2DD4BF]/10 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-4 h-4 text-[#2DD4BF]" />
              </div>
              <h3 className="font-bold text-[#DDE4F0] mb-2">Grow With Data</h3>
              <p className="text-[#7B8BB0] text-sm">Make decisions based on real insights, not emotions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#08090F]">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#131826] border border-[#1E2844] rounded-2xl px-10 py-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#4361EE]/6 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-[#2DD4BF]/4 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold text-[#4361EE] uppercase tracking-widest mb-4">Ready to Start</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#DDE4F0] mb-5 tracking-tight">
                Start Improving Your Trading
              </h2>
              <p className="text-[#7B8BB0] mb-8 leading-relaxed">
                You don&apos;t need another strategy. You need to understand your current one.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center px-7 py-3.5 bg-[#4361EE] text-white font-semibold rounded-lg hover:bg-[#3451D1] transition-colors text-sm"
                data-track="start-trakvex"
              >
                Start With Trakvex →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
