import ProductCard from '@/src/components/ProductCard';
import Link from 'next/link';

export default function Products() {
  return (
    <main className="min-h-screen bg-[#08090F] text-[#DDE4F0]">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold text-[#4361EE] uppercase tracking-widest mb-3">Our Products</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#DDE4F0] mb-3 tracking-tight">
              Products Built for Traders
            </h1>
            <p className="text-[#7B8BB0] max-w-xl">
              Discover our tools designed to help traders understand their performance and improve with real data.
            </p>
          </div>

          <div className="max-w-md mb-16">
            <ProductCard
              title="Traderos Lite"
              description="A performance-driven trading journal that helps you understand your results, behavior, and edge. Track every trade, measure your performance, and uncover the patterns behind your wins and losses."
              link="https://traderos.qovavo.com"
              isExternal={true}
            />
          </div>

          <div className="bg-[#131826] border border-[#1A2540] rounded-xl p-8 max-w-2xl hover:border-[#4361EE]/20 transition-colors">
            <h2 className="text-xl font-bold text-[#DDE4F0] mb-3">Questions or Collaborations?</h2>
            <p className="text-[#7B8BB0] mb-6 text-sm leading-relaxed">
              Interested in partnerships, custom solutions, or have specific requirements?
              We&apos;d love to hear from you and explore how we can work together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-[#4361EE] text-white text-sm font-semibold rounded-lg hover:bg-[#3451D1] transition-colors"
              data-track="contact-us"
            >
              Let&apos;s Talk Business
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
