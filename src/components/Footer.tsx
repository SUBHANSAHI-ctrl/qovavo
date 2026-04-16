'use client';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0F1220] border-t border-[#1A2540]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo-icon.png" alt="Qovavo" width={28} height={28} />
            <span className="text-[#DDE4F0] font-semibold text-base tracking-tight">Qovavo</span>
          </div>
          <p className="text-[#7B8BB0] text-sm leading-relaxed">
            Tools that help traders understand their performance and improve with real data.
          </p>
        </div>

        <div>
          <h3 className="text-[#DDE4F0] font-semibold text-sm mb-4">Products</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/products" className="text-[#7B8BB0] text-sm hover:text-[#4361EE] transition-colors">
                Trakvex
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#7B8BB0] text-sm hover:text-[#4361EE] transition-colors">
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#DDE4F0] font-semibold text-sm mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/contact" className="text-[#7B8BB0] text-sm hover:text-[#4361EE] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1A2540] py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#4A5880] text-sm">© {new Date().getFullYear()} Qovavo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
