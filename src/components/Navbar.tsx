'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/shots', label: 'Types of Shots' },
  { href: '/services', label: 'Services' },
  { href: '/equipment', label: 'Equipment' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05080f]/95 backdrop-blur-md border-b border-[#0d3d54] shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
              <Image
                src="/kodneraeriallogoofficial.png"
                alt="Kodner Aerial Services"
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight tracking-wide group-hover:text-[#f4952a] transition-colors">
                KODNER
              </div>
              <div className="text-[#e8701a] text-xs tracking-[0.2em] font-medium uppercase">
                Aerial Services
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide rounded transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-[#1a8fbf] border-b-2 border-[#1a8fbf]'
                    : 'text-[#7a99b8] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-[#e8701a] text-white text-sm font-semibold rounded tracking-wide hover:bg-[#f4952a] transition-colors glow-blue"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#7a99b8] hover:text-white p-2 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a1220]/98 backdrop-blur-md border-t border-[#0d3d54] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 text-sm font-medium rounded transition-all ${
                pathname === link.href
                  ? 'text-[#1a8fbf] bg-[#1a8fbf]/10 border-l-2 border-[#1a8fbf]'
                  : 'text-[#7a99b8] hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 px-4 py-3 bg-[#e8701a] text-white text-sm font-semibold rounded text-center hover:bg-[#f4952a] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
