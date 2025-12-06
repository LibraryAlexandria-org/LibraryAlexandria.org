'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Organizations Submit',
    description:
      'Universities, museums, news organizations, and cultural heritage groups submit documents to the Library. They verify authenticity and take responsibility.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Cryptographic Hashing',
    description:
      'Each document receives a unique mathematical fingerprint (hash). This proves authenticity forever—unforgeable, untamperable, permanent.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Blockchain Record',
    description:
      'The hash is recorded permanently on-chain. Even if content is later removed, the fingerprint proves it existed and when it was submitted.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Distributed Storage',
    description:
      'Documents are copied to thousands of computers worldwide. Minimum 10 copies across geographically distributed nodes—if one fails, others persist.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Economic Incentives',
    description:
      'Node operators are paid in ALEX tokens to store files. Constant challenges verify they actually preserve what they claim—Proof of Access.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const tiers = [
  {
    name: 'The Library',
    subtitle: 'Public Permanent Archive',
    features: [
      'Public access — anyone can read',
      'Only approved Organizations can submit',
      'Hash permanent; content preserved',
      'Unencrypted — transparent by design',
    ],
    highlight: true,
  },
  {
    name: 'Personal Drive',
    subtitle: 'Private Encrypted Storage',
    features: [
      'Private access — only you control',
      'End-to-end encryption',
      '$20/month subscription',
      'No backdoor, no master key',
    ],
    highlight: false,
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-32 bg-[#0a0e17]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-xs tracking-[0.3em] text-[#c9a962] uppercase mb-4 block">
            Part II
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            How It Works
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mb-8" />
          <p className="text-lg text-[#8b8680] max-w-2xl mx-auto">
            Imagine a library that can never burn down. Not because it&apos;s
            fireproof, but because it exists in thousands of places at once.
          </p>
        </div>

        {/* Process Steps */}
        <div
          className={`mb-24 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 border border-[#c9a962]/10 hover:border-[#c9a962]/30 transition-colors group"
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-light text-[#c9a962]/30 group-hover:text-[#c9a962]/60 transition-colors">
                    {step.number}
                  </span>
                  <div className="text-[#c9a962]">{step.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-[#e8e6e3] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#8b8680] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Tier Storage */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-light text-center mb-12 text-[#dcc584]">
            Two-Tier Storage Model
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`p-8 ${
                  tier.highlight
                    ? 'border-2 border-[#c9a962] bg-[#c9a962]/5'
                    : 'border border-[#c9a962]/20'
                }`}
              >
                <div className="mb-6">
                  <h4 className="text-2xl font-light text-[#e8e6e3] mb-1">
                    {tier.name}
                  </h4>
                  <p className="text-sm text-[#c9a962] tracking-wide">
                    {tier.subtitle}
                  </p>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#c9a962] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#8b8680]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insight */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="border-gradient p-8 max-w-3xl mx-auto">
            <h4 className="text-xl text-[#c9a962] mb-4">The Key Insight</h4>
            <p className="text-lg text-[#e8e6e3] leading-relaxed">
              The <span className="text-[#c9a962] font-medium">hash</span> is
              what&apos;s truly permanent. Even if the actual document is later
              removed, the fingerprint remains. Anyone with a copy can verify
              it&apos;s authentic by checking against the permanent fingerprint.
            </p>
            <p className="text-[#c9a962] mt-4 font-medium">
              The hash is the proof. The hash lives forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
