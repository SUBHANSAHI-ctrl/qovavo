import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  link?: string;
  isExternal?: boolean;
  comingSoon?: boolean;
}

const ProductCard = ({
  title,
  description,
  link,
  isExternal,
  comingSoon,
}: ProductCardProps) => {
  if (comingSoon) {
    return (
      <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
        <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-600 rounded"></div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button
          className="bg-gray-700 text-gray-400 px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed w-full"
          disabled
        >
          Coming Soon
        </button>
      </div>
    );
  }

  if (isExternal && link) {
    return (
<div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-1">
        
        <Image
          src="/traderos-logo.png"
          alt="Traderos Lite"
          width={48}
          height={48}
          className="mb-4 rounded-md"
        />

        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 w-full text-center hover:scale-[1.02]"
      
        >
          Start Trading Now →
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200">
      <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
        <div className="w-6 h-6 bg-gray-600 rounded"></div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-600 transition-colors w-full">
        Learn More
      </button>
    </div>
  );
};

export default ProductCard;