import ProductCard from '@/src/components/ProductCard';

export default function Products() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our innovative solutions designed to enhance your workflow and drive success
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <ProductCard
                title="Traderos Lite"
                description="A powerful trading platform with advanced analytics and real-time market data. Experience the future of trading with our comprehensive tools."
                link="https://traderos.qovavo.com"
                isExternal={true}
              />
            </div>
          </div>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Questions or Collaborations?</h2>
              <p className="text-gray-300 mb-6">
                Interested in partnerships, custom solutions, or have specific requirements? 
                We'd love to hear from you and explore how we can work together.
              </p>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-md font-medium hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                Let's Talk Business
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}