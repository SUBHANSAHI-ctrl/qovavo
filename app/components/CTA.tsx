const CTA = () => {
  return (
    <section id="get-started" className="bg-black py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already experiencing the power of Qovavo's innovative solutions.
        </p>
        <a
          href="https://traderos.qovavo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CTA;