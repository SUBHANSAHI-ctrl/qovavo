const Products = () => {
  return (
    <section id="products" className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our innovative solutions designed to enhance your workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">
              Traderos Lite
            </h3>
            <p className="text-gray-400 mb-4">
              A powerful trading platform with advanced analytics and real-time market data.
            </p>
            <a
              href="https://traderos.qovavo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="bg-black rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">
              Coming Soon
            </h3>
            <p className="text-gray-400 mb-4">
              Stay tuned for our next innovative product launch.
            </p>
            <button className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed" disabled>
              Coming Soon
            </button>
          </div>
          <div className="bg-black rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">
              Coming Soon
            </h3>
            <p className="text-gray-400 mb-4">
              Another exciting product in development.
            </p>
            <button className="bg-gray-800 text-gray-400 px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed" disabled>
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;