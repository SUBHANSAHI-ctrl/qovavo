import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-xl font-bold">
              Qovavo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#products" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Products
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="#future-tools" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Future Tools
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="#get-started" className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;