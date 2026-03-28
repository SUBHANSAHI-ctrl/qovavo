'use client';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logo-icon.png"
              alt="Qovavo"
              width={32}
              height={32}
            />
            <span className="text-white font-semibold text-lg">Qovavo</span>
          </div>

          <p className="mb-4">
            Empowering your digital journey with innovative tools and solutions.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><Link href="/products">Traderos Lite</Link></li>
            <li><Link href="/contact">Get In Touch</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 text-center py-6 text-sm">
        © {new Date().getFullYear()} Qovavo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;