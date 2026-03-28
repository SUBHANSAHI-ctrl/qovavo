export default function FutureTools() {
  const futureTools = [
    {
      title: "AI Analytics Dashboard",
      description: "Advanced artificial intelligence-powered analytics to help you make data-driven decisions with confidence. Real-time insights and predictive modeling."
    },
    {
      title: "Smart Automation Suite",
      description: "Intelligent automation tools that streamline your workflow and boost productivity across all your tasks. Machine learning-powered process optimization."
    },
    {
      title: "Collaborative Workspace",
      description: "A unified platform for teams to collaborate seamlessly and manage projects efficiently in real-time. Integrated communication and file sharing."
    },
    {
      title: "Data Visualization Hub",
      description: "Transform complex data into beautiful, interactive visualizations that tell compelling stories and drive informed decision-making."
    },
    {
      title: "Cloud Integration Platform",
      description: "Seamlessly connect and manage all your cloud services from one centralized platform with enterprise-grade security."
    },
    {
      title: "Intelligent Assistant",
      description: "AI-powered virtual assistant that learns your preferences and automates routine tasks to save you time and effort."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0f172a]">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Future Tools
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Exciting new tools and features we're working on for the future of digital innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureTools.map((tool, index) => (
              <div key={index} className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-400">{tool.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6">
                Be the first to know when we launch new tools and features
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-md font-medium hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}