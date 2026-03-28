import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        import Image from "next/image";

<div className="flex justify-center mb-6">
  <Image
    src="/logo-full.png"
    alt="Qovavo"
    width={220}
    height={60}
    className="h-auto w-auto"
    priority
  />
</div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Qovavo
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Empowering your digital journey with innovative tools and solutions
        </p>
        <a
          href="#get-started"
          className="inline-block bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;