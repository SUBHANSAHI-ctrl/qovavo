import { TrendingUp, Target } from 'lucide-react';

const stats = [
  { label: 'Win Rate', value: '68.4%', accent: true },
  { label: 'Avg R:R',  value: '2.1:1',  accent: false },
  { label: 'Trades',   value: '142',    accent: false },
];

/*
  SVG equity curve path in viewBox "0 0 320 100".
  Generally upward-trending with realistic drawdowns — mimics a real
  trading journal equity curve. Path length ≈ 342 SVG units.
  chart-line uses stroke-dasharray: 430 (with buffer) in globals.css.
*/
const CURVE = 'M 0,80 L 25,72 L 50,78 L 75,65 L 100,70 L 125,55 L 150,62 L 175,48 L 200,52 L 225,38 L 250,42 L 275,30 L 320,22';
const FILL  = `${CURVE} L 320,100 L 0,100 Z`;

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center py-10 select-none pointer-events-none">

      {/* ── Main dashboard card ── */}
      <div className="hero-card relative w-full max-w-[360px] bg-[#0D1121] border border-[#1E2844] rounded-2xl p-6 shadow-[0_0_80px_rgba(67,97,238,0.07),0_32px_64px_rgba(0,0,0,0.55)]">

        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-[11px] font-semibold text-[#4A5880] uppercase tracking-widest mb-1.5">
              Portfolio Performance
            </p>
            <p className="text-[2rem] font-bold text-[#DDE4F0] leading-none tracking-tight">
              +24.6%
            </p>
            <p className="text-xs text-[#2DD4BF] mt-1.5 font-medium">↑ 4.2% this month</p>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 mt-1">
            <span className="live-dot w-1.5 h-1.5 rounded-full bg-[#2DD4BF]" />
            <span className="text-[11px] text-[#2DD4BF] font-semibold">Live</span>
          </div>
        </div>

        {/* Chart area */}
        <div className="relative h-28 mb-5">
          {/* Subtle horizontal grid */}
          <div className="absolute inset-0 flex flex-col justify-between py-1 pointer-events-none" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full border-t border-[#1A2540]/40" />
            ))}
          </div>

          <svg
            viewBox="0 0 320 100"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="hv-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#4361EE" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#4361EE" stopOpacity="0"    />
              </linearGradient>
            </defs>

            {/* Area fill — fades in after line draws */}
            <path d={FILL} fill="url(#hv-fill)" className="chart-fill" />

            {/* Animated equity curve */}
            <path
              d={CURVE}
              fill="none"
              stroke="#4361EE"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="chart-line"
            />

            {/* End-point dot */}
            <circle cx="320" cy="22" r="4"   fill="#4361EE" className="chart-dot"      />
            {/* Expanding pulse ring on dot */}
            <circle cx="320" cy="22" r="4"   fill="#4361EE" className="chart-dot-ring" />
          </svg>
        </div>

        {/* Metric pills */}
        <div className="grid grid-cols-3 gap-2.5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="stat-item bg-[#131826] rounded-xl p-3 border border-[#1A2540]"
              style={{ animationDelay: `${0.9 + i * 0.13}s` }}
            >
              <p className="text-[10px] text-[#4A5880] mb-1.5 uppercase tracking-wide font-semibold">
                {s.label}
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: s.accent ? '#2DD4BF' : '#DDE4F0' }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card — top right ── */}
      <div className="float-card-a absolute top-2 -right-4 bg-[#131826] border border-[#1E2844] rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#4361EE]/15 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-3.5 h-3.5 text-[#4361EE]" />
          </div>
          <div>
            <p className="text-[9px] text-[#4A5880] uppercase tracking-wide font-semibold">Best Month</p>
            <p className="text-xs font-bold text-[#DDE4F0]">+8.2%</p>
          </div>
        </div>
      </div>

      {/* ── Floating card — bottom left ── */}
      <div className="float-card-b absolute bottom-2 -left-4 bg-[#131826] border border-[#1E2844] rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#2DD4BF]/10 rounded-lg flex items-center justify-center">
            <Target className="w-3.5 h-3.5 text-[#2DD4BF]" />
          </div>
          <div>
            <p className="text-[9px] text-[#4A5880] uppercase tracking-wide font-semibold">Win Streak</p>
            <p className="text-xs font-bold text-[#DDE4F0]">7 wins</p>
          </div>
        </div>
      </div>

    </div>
  );
}
