'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full bg-[#08090F]/90 backdrop-blur-md border-b border-[#1A2540] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-icon.png"
              alt="Qovavo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-[#DDE4F0] text-xl font-bold tracking-tight">Qovavo</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  pathname === link.href
                    ? 'text-[#4361EE] bg-[#4361EE]/10'
                    : 'text-[#7B8BB0] hover:text-[#DDE4F0]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/products"
            className="bg-[#4361EE] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#3451D1] transition-colors"
            data-track="get-started"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
