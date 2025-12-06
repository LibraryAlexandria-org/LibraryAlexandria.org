'use client';

import { useEffect, useRef, useState } from 'react';

const timeline = [
  {
    period: 'Year 0-1',
    title: 'Counsel Formation',
    description: 'Counsel of 12 appointed members guides early development with full control.',
    active: true,
  },
  {
    period: 'Year 1',
    title: 'Initial Organizations',
    description: 'Counsel approves 50 initial Organizations with $1,000 bonds.',
    active: true,
  },
  {
    period: 'Year 1-5',
    title: 'Shared Governance',
    description: 'Counsel + Organizations share governance responsibilities.',
    active: false,
  },
  {
    period: 'Year 5+',
    title: 'Full Democracy',
    description: 'Counsel dissolves. Organizations have full voting control.',
    active: false,
  },
];

const counselLimitations = [
  'Cannot release locked tokens',
  'Cannot pay themselves rewards',
  'Cannot access liquidity pool',
  'Cannot override open source requirement',
];

const moderationRules = {
  canBlock: [
    'CSAM',
    'Terrorist propaganda',
    'Content violating international law',
    'Fraudulent submissions',
    'Malware',
  ],
  cannotBlock: [
    'Controversial but legal content',
    'Political speech',
    'Historical documents with objectionable content',
    'Content legal in most jurisdictions',
  ],
};

export default function Governance() {
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
      id="governance"
      className="relative py-32 bg-[#0a0e17]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-xs tracking-[0.3em] text-[#c9a962] uppercase mb-4 block">
            Decentralized
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            Governance
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mb-8" />
          <p className="text-lg text-[#8b8680] max-w-2xl mx-auto">
            A DAO governs the protocol. Community over corporation. Democracy
            over autocracy.
          </p>
        </div>

        {/* Timeline */}
        <div
          className={`mb-20 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-light text-center mb-12 text-[#dcc584]">
            Governance Timeline
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#c9a962] to-[#c9a962]/20" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item.active
                        ? 'bg-[#c9a962] ring-4 ring-[#c9a962]/20'
                        : 'bg-[#c9a962]/40'
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <span className="text-sm text-[#c9a962] font-medium">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-medium text-[#e8e6e3] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#8b8680]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Counsel Limitations */}
        <div
          className={`mb-20 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-light text-center mb-4 text-[#dcc584]">
            Counsel Limitations
          </h3>
          <p className="text-center text-[#8b8680] mb-8 max-w-2xl mx-auto">
            Even during the training wheels period, the Counsel cannot:
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {counselLimitations.map((limitation, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border border-red-500/20 bg-red-500/5"
              >
                <svg
                  className="w-5 h-5 text-red-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-[#8b8680]">{limitation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Moderation */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-light text-center mb-12 text-[#dcc584]">
            Content Moderation
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Can Block */}
            <div className="p-6 border border-[#c9a962]/20">
              <h4 className="text-lg font-medium text-red-400 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                CAN Be Blacklisted
              </h4>
              <ul className="space-y-2">
                {moderationRules.canBlock.map((item, index) => (
                  <li key={index} className="text-[#8b8680] text-sm">
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cannot Block */}
            <div className="p-6 border border-[#c9a962]/20">
              <h4 className="text-lg font-medium text-green-400 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                CANNOT Be Blacklisted
              </h4>
              <ul className="space-y-2">
                {moderationRules.cannotBlock.map((item, index) => (
                  <li key={index} className="text-[#8b8680] text-sm">
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Fork Rights */}
        <div
          className={`mt-20 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="border-gradient p-8 max-w-3xl mx-auto text-center">
            <h4 className="text-xl text-[#c9a962] mb-4">
              Open Source Forever
            </h4>
            <p className="text-[#8b8680] leading-relaxed mb-4">
              The Library of Alexandria protocol MUST remain open source
              forever. If governance is ever hijacked, corrupted, or
              compromised, the community can fork the entire protocol.
            </p>
            <p className="text-[#e8e6e3] italic">
              Precedent: When Steem&apos;s governance was captured, the community
              forked to Hive and continued operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
