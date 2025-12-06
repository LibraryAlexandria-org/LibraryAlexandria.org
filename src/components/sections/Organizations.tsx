'use client';

import { useEffect, useRef, useState } from 'react';

const requirements = [
  {
    title: 'Application',
    description: 'Submit credentials, mission statement, and leadership information',
    icon: '01',
  },
  {
    title: 'Bond',
    description: 'Post $1,000 bond (can be DAO-sponsored for worthy organizations)',
    icon: '02',
  },
  {
    title: 'Vote',
    description: 'Approved by existing Organizations (or Counsel in Year 1)',
    icon: '03',
  },
  {
    title: 'Agreement',
    description: 'Sign Organization Agreement accepting preservation responsibilities',
    icon: '04',
  },
  {
    title: 'Verification',
    description: 'Leadership completes KYC verification for accountability',
    icon: '05',
  },
];

const bondOutcomes = [
  {
    status: 'Good Standing',
    result: 'Bond held; earns rewards',
    color: 'text-green-400',
  },
  {
    status: 'Content Blacklisted',
    result: 'Partial forfeiture ($200-500)',
    color: 'text-yellow-400',
  },
  {
    status: 'Serious Violation',
    result: 'Full forfeiture ($1,000), status revoked',
    color: 'text-red-400',
  },
];

export default function Organizations() {
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
      id="join"
      className="relative py-32 bg-gradient-to-b from-[#0a0e17] to-[#050810]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-xs tracking-[0.3em] text-[#c9a962] uppercase mb-4 block">
            Participation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            Organizations
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mb-8" />
          <p className="text-lg text-[#8b8680] max-w-2xl mx-auto">
            Only approved Organizations can submit content to the Library.
            Because someone needs to be accountable.
          </p>
        </div>

        {/* Who Can Submit */}
        <div
          className={`mb-20 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-light text-center mb-8 text-[#dcc584]">
            Who Can Submit Documents?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Universities', 'Museums', 'News Organizations', 'Government Archives', 'Cultural Heritage Groups', 'Research Institutions', 'Historical Societies', 'Libraries'].map(
              (org, index) => (
                <div
                  key={index}
                  className="p-4 text-center border border-[#c9a962]/20 hover:border-[#c9a962]/50 transition-colors"
                >
                  <span className="text-sm text-[#8b8680]">{org}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Requirements */}
        <div
          className={`mb-20 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-light text-center mb-12 text-[#dcc584]">
            Organization Requirements
          </h3>
          <div className="space-y-4 max-w-3xl mx-auto">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 border border-[#c9a962]/10 hover:border-[#c9a962]/30 transition-colors"
              >
                <span className="text-2xl font-light text-[#c9a962]/50">
                  {req.icon}
                </span>
                <div>
                  <h4 className="text-lg font-medium text-[#e8e6e3] mb-1">
                    {req.title}
                  </h4>
                  <p className="text-[#8b8680]">{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bond System */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-light text-center mb-4 text-[#dcc584]">
            Bond-Based Accountability
          </h3>
          <p className="text-center text-[#8b8680] mb-12 max-w-2xl mx-auto">
            Every Organization posts a $1,000 bond. Think of it like a security
            deposit. If an Organization submits illegal content or behaves
            badly, they lose their bond.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {bondOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="p-6 text-center border border-[#c9a962]/20"
              >
                <h4 className={`text-lg font-medium mb-2 ${outcome.color}`}>
                  {outcome.status}
                </h4>
                <p className="text-sm text-[#8b8680]">{outcome.result}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#c9a962] mt-8 text-sm">
            Can&apos;t afford the bond? The DAO can vote to sponsor bonds for
            worthy Organizations serving underrepresented communities.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="border-2 border-[#c9a962] p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-[#e8e6e3] mb-4">
              Ready to Preserve History?
            </h3>
            <p className="text-[#8b8680] mb-8">
              If you represent a university, museum, archive, or cultural
              institution, apply to become an approved Organization.
            </p>
            <a
              href="/apply"
              className="btn-primary inline-block tracking-wide"
            >
              Apply as Organization
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
