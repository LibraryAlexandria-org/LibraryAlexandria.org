'use client';

import { useEffect, useState } from 'react';
import Logo from '../ui/Logo';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#050810]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17] via-transparent to-[#050810]" />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#c9a962 1px, transparent 1px), linear-gradient(90deg, #c9a962 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#c9a962]/40" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#c9a962]/40" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#c9a962]/40" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#c9a962]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size={120} />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] mb-4">
            <span className="gradient-text">LIBRARY</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] text-[#e8e6e3] mb-8">
            OF ALEXANDRIA
          </h2>

          {/* Divider */}
          <div className="w-64 h-px mx-auto bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mb-8" />

          {/* Subtitle */}
          <p className="text-lg md:text-xl tracking-[0.15em] text-[#c9a962] uppercase mb-12">
            Decentralized Archive Protocol
          </p>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-[#dcc584] max-w-3xl mx-auto mb-16 leading-relaxed">
            Preserving Humanity&apos;s Written Heritage
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#how-it-works" className="btn-primary tracking-wide">
              Explore the Protocol
            </a>
            <a href="/docs" className="btn-secondary tracking-wide">
              Read Documentation
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-[#8b8680]">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#c9a962] to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
