'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '100', label: 'Average lifespan of a webpage in days' },
  { value: '25%', label: 'Of NYT links are now dead' },
  { value: '116', label: 'Plays by Sophocles lost forever' },
  { value: '50M', label: 'Songs lost in MySpace "migration"' },
];

export default function Problem() {
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
      id="problem"
      className="relative py-32 bg-gradient-to-b from-[#050810] to-[#0a0e17]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-xs tracking-[0.3em] text-[#c9a962] uppercase mb-4 block">
            Part I
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            The Last Copy
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
        </div>

        {/* Narrative */}
        <div
          className={`max-w-3xl mx-auto mb-20 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="border-gradient p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-[#e8e6e3] mb-6">
              You are holding it. The last surviving manuscript of Marcus
              Aurelius&apos;s private journals—not the Meditations you know, but the
              other one. The one where he wrote about his fears.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#e8e6e3] mb-6">
              Your hands are trembling. You&apos;re standing in a library in
              Constantinople. The year is 1453. Outside, Ottoman cannons are
              breaching the walls.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-[#c9a962] font-medium">
              You have maybe ten minutes. There is no backup.
            </p>
          </div>
        </div>

        {/* The Weight of Ashes */}
        <div
          className={`mb-20 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-light text-center mb-12 text-[#dcc584]">
            The Weight of Ashes
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-[#8b8680] leading-relaxed">
                That scenario happened thousands of times. Not with that
                specific manuscript—we don&apos;t know what was in that library when
                it burned, and that&apos;s exactly the point.
              </p>
              <p className="text-[#8b8680] leading-relaxed">
                <span className="text-[#e8e6e3]">We will never know.</span>
              </p>
              <p className="text-[#8b8680] leading-relaxed">
                When the Great Library of Alexandria was destroyed, humanity
                didn&apos;t just lose books. We lost the capacity to know what we
                lost.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-[#8b8680] leading-relaxed">
                Sophocles wrote 123 plays; we have 7. The engineering manuals
                explaining the Antikythera mechanism—a clockwork computer built
                two thousand years before the Industrial Revolution.
              </p>
              <p className="text-[#8b8680] leading-relaxed">
                Medical texts. Philosophy. Mathematics.
              </p>
              <p className="text-[#c9a962] font-medium text-lg">
                Gone. Not archived. Just... gone.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-light text-center mb-4 text-[#dcc584]">
            And it&apos;s still happening.
          </h3>
          <p className="text-center text-[#8b8680] mb-12">Right now. While you read this.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card p-6 text-center hover:border-[#c9a962]/40 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-light text-[#c9a962] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#8b8680] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl md:text-2xl italic text-[#c9a962] max-w-2xl mx-auto">
            &ldquo;We are creating more information than any civilization in history
            while building the worst preservation infrastructure in human
            history.&rdquo;
          </p>
          <p className="mt-6 text-[#8b8680]">
            We&apos;re writing on water and calling it permanent.
          </p>
        </div>
      </div>
    </section>
  );
}
