'use client';

import { useEffect, useRef, useState } from 'react';
import Logo from '../ui/Logo';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#050810] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a962]/5 rounded-full blur-3xl" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size={80} />
          </div>

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic text-[#c9a962] mb-12 border-none pl-0">
            &ldquo;A society grows great when old men plant trees whose shade they
            shall never sit in.&rdquo;
          </blockquote>

          {/* Message */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-[#8b8680] leading-relaxed mb-6">
              The ancient Library burned because it existed in one place.
            </p>
            <p className="text-xl text-[#e8e6e3] leading-relaxed">
              This one will exist everywhere.
            </p>
          </div>

          {/* Divider */}
          <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mb-12" />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a href="#join" className="btn-primary tracking-wide">
              Become an Organization
            </a>
            <a href="/docs" className="btn-secondary tracking-wide">
              Read the Whitepaper
            </a>
          </div>

          {/* Closing */}
          <p className="text-[#c9a962] italic text-lg">
            The fire satisfies itself. We do not have to.
          </p>
        </div>
      </div>
    </section>
  );
}
