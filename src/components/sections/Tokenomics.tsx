'use client';

import { useEffect, useRef, useState } from 'react';

const distribution = [
  { label: 'Storage Node Rewards', percentage: 40, color: '#c9a962' },
  { label: 'DAO Treasury', percentage: 25, color: '#9a7a3a' },
  { label: 'Ecosystem Development', percentage: 15, color: '#dcc584' },
  { label: 'Founders (20yr vesting)', percentage: 10, color: '#7a5a2a' },
  { label: 'Initial Liquidity', percentage: 10, color: '#b89952' },
];

const nodeTypes = [
  {
    type: 'Archive Node',
    stake: '10,000 ALEX',
    role: 'Store complete document files',
  },
  {
    type: 'Validator Node',
    stake: '100,000 ALEX',
    role: 'Consensus & challenges',
  },
  {
    type: 'Gateway Node',
    stake: '5,000 ALEX',
    role: 'API access & caching',
  },
];

const vestingSchedule = [
  { years: '1-10', status: 'Fully Locked', description: 'Zero access' },
  { years: '11-20', status: '10% per year', description: 'Gradual release' },
];

export default function Tokenomics() {
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
      id="tokenomics"
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
            Economics
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            ALEX Token
          </h2>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mb-8" />
          <p className="text-lg text-[#8b8680] max-w-2xl mx-auto">
            The native token powering the Library of Alexandria protocol.
            Staking, governance, and rewards—all in one.
          </p>
        </div>

        {/* Total Supply */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block border-2 border-[#c9a962] px-12 py-6">
            <span className="text-sm text-[#8b8680] tracking-wide block mb-2">
              TOTAL SUPPLY
            </span>
            <span className="text-4xl md:text-5xl font-light text-[#c9a962]">
              1,000,000,000
            </span>
            <span className="text-lg text-[#8b8680] ml-2">ALEX</span>
          </div>
        </div>

        {/* Distribution */}
        <div
          className={`mb-20 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-light text-center mb-12 text-[#dcc584]">
            Token Distribution
          </h3>

          {/* Visual Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="h-12 flex rounded overflow-hidden">
              {distribution.map((item, index) => (
                <div
                  key={index}
                  className="h-full flex items-center justify-center text-xs font-medium transition-all hover:opacity-90"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                    color: '#050810',
                  }}
                >
                  {item.percentage}%
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {distribution.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-[#8b8680]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Vesting */}
        <div
          className={`mb-20 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-light text-center mb-4 text-[#dcc584]">
            Founder Vesting Schedule
          </h3>
          <p className="text-center text-[#8b8680] mb-8 max-w-2xl mx-auto">
            The longest lock-up in crypto history. 20 years to full release.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {vestingSchedule.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-[#c9a962]/20 text-center"
              >
                <span className="text-sm text-[#c9a962] block mb-2">
                  Years {item.years}
                </span>
                <span className="text-2xl font-light text-[#e8e6e3] block mb-1">
                  {item.status}
                </span>
                <span className="text-sm text-[#8b8680]">
                  {item.description}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-[#c9a962] mt-6 text-sm italic">
            Founders can&apos;t cash out and disappear. They&apos;re incentivized to make
            the project succeed for decades.
          </p>
        </div>

        {/* Node Types */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-light text-center mb-12 text-[#dcc584]">
            Node Types & Staking
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {nodeTypes.map((node, index) => (
              <div
                key={index}
                className="p-8 border border-[#c9a962]/20 hover:border-[#c9a962]/50 transition-colors text-center"
              >
                <h4 className="text-xl font-medium text-[#e8e6e3] mb-4">
                  {node.type}
                </h4>
                <div className="text-3xl font-light text-[#c9a962] mb-2">
                  {node.stake}
                </div>
                <p className="text-sm text-[#8b8680]">{node.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Proof of Access */}
        <div
          className={`mt-20 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="border-gradient p-8 max-w-3xl mx-auto">
            <h4 className="text-xl text-[#c9a962] mb-4 text-center">
              Proof of Access
            </h4>
            <p className="text-[#8b8680] leading-relaxed text-center mb-6">
              Validators randomly challenge archive nodes to prove they store
              the files they claim. Nodes must respond within{' '}
              <span className="text-[#e8e6e3]">500ms</span>—too fast to fake.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-[#050810]">
                <span className="text-green-400 block text-lg">Success</span>
                <span className="text-[#8b8680] text-sm">= Reward</span>
              </div>
              <div className="p-4 bg-[#050810]">
                <span className="text-red-400 block text-lg">Failure</span>
                <span className="text-[#8b8680] text-sm">= Penalty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
