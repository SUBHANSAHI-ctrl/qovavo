export default function FutureTools() {
  const futureTools = [
    {
      title: "AI Analytics Dashboard",
      description: "Advanced analytics to help you make data-driven decisions with confidence. Real-time insights and predictive modeling."
    },
    {
      title: "Smart Automation Suite",
      description: "Intelligent automation tools that streamline your workflow and boost productivity across all your tasks."
    },
    {
      title: "Collaborative Workspace",
      description: "A unified platform for teams to collaborate seamlessly and manage projects efficiently in real-time."
    },
    {
      title: "Data Visualization Hub",
      description: "Transform complex data into clear, interactive visualizations that drive informed decision-making."
    },
    {
      title: "Cloud Integration Platform",
      description: "Seamlessly connect and manage all your cloud services from one centralized platform."
    },
    {
      title: "Intelligent Assistant",
      description: "AI-powered assistant that learns your preferences and automates routine tasks to save you time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#08090F] text-[#DDE4F0]">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold text-[#4361EE] uppercase tracking-widest mb-3">Coming Soon</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#DDE4F0] mb-3 tracking-tight">Future Tools</h1>
            <p className="text-[#7B8BB0] max-w-xl">
              New tools and features we&apos;re working on for the future of digital innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {futureTools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#131826] border border-[#1A2540] rounded-xl p-6 hover:border-[#4361EE]/30 transition-colors"
              >
                <div className="w-8 h-8 bg-[#4361EE]/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#4361EE] rounded-sm opacity-70"></div>
                </div>
                <h3 className="font-bold text-[#DDE4F0] mb-2 text-sm">{tool.title}</h3>
                <p className="text-[#7B8BB0] text-sm leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-8 max-w-lg">
            <h2 className="text-xl font-bold text-[#DDE4F0] mb-2">Stay Updated</h2>
            <p className="text-[#7B8BB0] text-sm mb-5">
              Be the first to know when we launch new tools and features.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3.5 py-2.5 bg-[#0A0C16] border border-[#1E2844] rounded-lg text-sm text-[#DDE4F0] placeholder-[#3A4A6A] focus:outline-none focus:border-[#4361EE] focus:ring-1 focus:ring-[#4361EE]/30 transition-colors"
              />
              <button className="bg-[#4361EE] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#3451D1] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
