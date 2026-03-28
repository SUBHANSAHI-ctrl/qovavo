const FutureTools = () => {
  return (
    <section id="future-tools" className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Future Tools
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exciting new tools and features we're working on for the future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-gray-800 rounded-md mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-700 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              AI Analytics Dashboard
            </h3>
            <p className="text-gray-400">
              Advanced artificial intelligence-powered analytics to help you make data-driven decisions with confidence.
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-gray-800 rounded-md mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-700 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Smart Automation Suite
            </h3>
            <p className="text-gray-400">
              Intelligent automation tools that streamline your workflow and boost productivity across all your tasks.
            </p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="w-12 h-12 bg-gray-800 rounded-md mb-4 flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-700 rounded"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Collaborative Workspace
            </h3>
            <p className="text-gray-400">
              A unified platform for teams to collaborate seamlessly and manage projects efficiently in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTools;