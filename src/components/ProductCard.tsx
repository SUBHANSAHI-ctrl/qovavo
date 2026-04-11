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
      <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6">
        <div className="w-10 h-10 bg-[#1A2540] rounded-lg mb-4 flex items-center justify-center">
          <div className="w-4 h-4 bg-[#2A3555] rounded-sm"></div>
        </div>
        <h3 className="text-base font-semibold text-[#DDE4F0] mb-2">{title}</h3>
        <p className="text-[#7B8BB0] text-sm mb-4">{description}</p>
        <button
          className="border border-[#1A2540] text-[#4A5880] px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed w-full"
          disabled
        >
          Coming Soon
        </button>
      </div>
    );
  }

  if (isExternal && link) {
    return (
      <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6 hover:border-[#4361EE]/40 transition-all">
        <Image
          src="/traderos-logo.png"
          alt="Traderos Lite"
          width={40}
          height={40}
          className="mb-4 rounded-lg"
        />
        <h3 className="text-base font-semibold text-[#DDE4F0] mb-2">{title}</h3>
        <p className="text-[#7B8BB0] text-sm mb-5">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#4361EE] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#3451D1] transition-colors w-full text-center"
        >
          Start Trading Now →
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-6 hover:border-[#1E2844] transition-colors">
      <div className="w-10 h-10 bg-[#4361EE]/10 rounded-lg mb-4 flex items-center justify-center">
        <div className="w-4 h-4 bg-[#4361EE] rounded-sm opacity-60"></div>
      </div>
      <h3 className="text-base font-semibold text-[#DDE4F0] mb-2">{title}</h3>
      <p className="text-[#7B8BB0] text-sm mb-4">{description}</p>
      <button className="border border-[#1A2540] text-[#7B8BB0] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1A2540] transition-colors w-full">
        Learn More
      </button>
    </div>
  );
};

export default ProductCard;
