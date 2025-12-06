'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';

const navLinks = [
  { href: '#problem', label: 'The Problem' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#governance', label: 'Governance' },
  { href: '#tokenomics', label: 'ALEX Token' },
  { href: '/docs', label: 'Documentation' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050810]/95 backdrop-blur-md border-b border-[#c9a962]/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size={40} />
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-wide text-[#c9a962] group-hover:text-[#dcc584] transition-colors">
                LIBRARY
              </span>
              <span className="text-xs tracking-[0.3em] text-[#8b8680] -mt-1">
                OF ALEXANDRIA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-[#8b8680] hover:text-[#c9a962] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#join"
              className="btn-primary text-sm tracking-wide"
            >
              Join as Organization
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#c9a962] p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#c9a962]/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm tracking-wide text-[#8b8680] hover:text-[#c9a962] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-sm tracking-wide text-center mt-2"
              >
                Join as Organization
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
