import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation | Library of Alexandria',
  description: 'Complete technical documentation for the Library of Alexandria decentralized archive protocol.',
};

// Types for sections
interface PrincipleItem {
  name: string;
  description: string;
}

interface Tier {
  name: string;
  features: string[];
}

interface BondType {
  type: string;
  amount: string;
}

interface BondOutcome {
  status: string;
  result: string;
}

interface ModerationLevel {
  name: string;
  description: string;
}

interface DistributionItem {
  allocation: string;
  percentage: string;
}

interface TimelineItem {
  period: string;
  description: string;
}

interface NodeType {
  type: string;
  stake: string;
  role: string;
}

export default function DocsPage() {
  const principles: PrincipleItem[] = [
    {
      name: 'Permanence Through Hashing',
      description: 'The cryptographic hash of every document is permanently recorded on-chain. This hash proves originality forever, regardless of whether the actual content remains in storage.',
    },
    {
      name: 'Organization-Gated Submission',
      description: 'Only approved Organizations can submit content to the Library. Individuals must work through an approved Org. This makes Orgs the first line of moderation.',
    },
    {
      name: 'Bond-Based Accountability',
      description: 'Every approved Organization posts a bond. Violations result in bond forfeiture. Good behavior earns rewards.',
    },
    {
      name: 'Decentralized Governance',
      description: 'A DAO governs the protocol. The Counsel guides early development, then dissolves as Organizations take full control.',
    },
    {
      name: 'Open Source Forever',
      description: 'The protocol must remain open source. If governance is ever hijacked, the community can fork.',
    },
  ];

  const tiers: Tier[] = [
    {
      name: 'Tier 1: The Library (Public Permanent Archive)',
      features: [
        'Access: Public — anyone can read',
        'Submission: Only approved Organizations',
        'Permanence: Hash permanent; content preserved unless blacklisted',
        'Encryption: None — public content',
      ],
    },
    {
      name: 'Tier 2: Personal Drive (Private Encrypted Storage)',
      features: [
        'Access: Private — only you (unless you share key)',
        'Cost: $20/month subscription',
        'Encryption: End-to-end; only key holder can decrypt',
        'NOT part of the Library',
      ],
    },
  ];

  const orgRequirements: PrincipleItem[] = [
    { name: 'Application', description: 'Submit credentials, mission, leadership' },
    { name: 'Bond', description: 'Post $1,000 bond (can be DAO-sponsored)' },
    { name: 'Vote', description: 'Approved by existing Orgs (or Counsel in Year 1)' },
    { name: 'Agreement', description: 'Sign Organization Agreement accepting responsibilities' },
    { name: 'Verification', description: 'Leadership completes KYC verification' },
  ];

  const bondTypes: BondType[] = [
    { type: 'Standard Org Bond', amount: '$1,000 required for all Organizations' },
    { type: 'DAO-Sponsored Bond', amount: '$1,000 paid by DAO for worthy Orgs' },
  ];

  const bondOutcomes: BondOutcome[] = [
    { status: 'Good Standing', result: 'Bond held; earns rewards' },
    { status: 'Content Blacklisted', result: 'Partial forfeiture ($200-500)' },
    { status: 'Serious Violation', result: 'Full forfeiture ($1,000), Org status revoked' },
    { status: 'False Blacklist', result: 'Full forfeiture ($1,000), Org status revoked' },
  ];

  const moderationLevels: ModerationLevel[] = [
    {
      name: 'Level 1: Organization Moderation (Primary)',
      description: 'Organizations review content BEFORE submission, respond to reports about their submissions, and can voluntarily blacklist their own content. Most moderation happens here.',
    },
    {
      name: 'Level 2: DAO Appeals (Rare)',
      description: 'When Level 1 fails: Appeals of Org decisions go to DAO, cross-Org disputes resolved by DAO, Org misconduct reviewed by DAO. In Years 1-5, appeals go to Counsel first.',
    },
  ];

  const canBlacklist = ['CSAM', 'Terrorist propaganda', 'Content violating international law', 'Fraudulent submissions', 'Malware'];
  const cannotBlacklist = ['Controversial but legal content', 'Political speech', 'Historical documents with objectionable content', 'Content legal in most jurisdictions'];

  const tokenDistribution: DistributionItem[] = [
    { allocation: 'Storage Node Rewards', percentage: '40%' },
    { allocation: 'DAO Treasury', percentage: '25%' },
    { allocation: 'Ecosystem Development', percentage: '15%' },
    { allocation: 'Founders', percentage: '10% (20-year vesting)' },
    { allocation: 'Initial Liquidity', percentage: '10%' },
  ];

  const governanceTimeline: TimelineItem[] = [
    { period: 'Year 0-1', description: 'Counsel of 12 (full control)' },
    { period: 'Year 1', description: 'Counsel approves 50 initial Orgs with $1,000 bonds' },
    { period: 'Year 1-5', description: 'Counsel + Orgs (shared governance)' },
    { period: 'Year 5+', description: 'Orgs only (Counsel dissolved)' },
  ];

  const counselLimitations = [
    'Cannot release locked tokens',
    'Cannot pay themselves rewards',
    'Cannot access liquidity pool',
    'Cannot override open source requirement',
  ];

  const nodeTypes: NodeType[] = [
    { type: 'Archive Node', stake: '10,000 ALEX', role: 'Store complete document files' },
    { type: 'Validator Node', stake: '100,000 ALEX', role: 'Consensus, challenges' },
    { type: 'Gateway Node', stake: '5,000 ALEX', role: 'API access, caching' },
  ];

  const proofOfAccessProtocol = [
    'Validator randomly selects an archive node',
    'Validator requests a random byte range from a specific file',
    'Archive node must respond within 500ms',
    'Response verified against known file hash',
    'Success = reward; Failure = penalty',
  ];

  const immutables = [
    'Open source requirement',
    'Hash permanence guarantee',
    'Fork rights',
    'Founder vesting schedule (can be extended, not shortened)',
  ];

  const tableOfContents = [
    { id: 'mission', title: 'Mission' },
    { id: 'principles', title: 'Core Principles' },
    { id: 'storage', title: 'Two-Tier Storage Model' },
    { id: 'organizations', title: 'Organization Requirements' },
    { id: 'bonds', title: 'Bond System' },
    { id: 'moderation', title: 'Content Moderation' },
    { id: 'tokenomics', title: 'ALEX Token Economics' },
    { id: 'governance', title: 'Governance Timeline' },
    { id: 'infrastructure', title: 'Technical Infrastructure' },
    { id: 'proof-of-access', title: 'SPK Proof of Access' },
    { id: 'immutables', title: 'What Cannot Be Changed' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e17] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <Link href="/" className="text-[#c9a962] text-sm tracking-wide hover:text-[#dcc584] transition-colors mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
            Technical Documentation
          </h1>
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mb-6" />
          <p className="text-[#8b8680] max-w-2xl mx-auto">
            Complete specification for the Library of Alexandria decentralized archive protocol.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-16 p-6 border border-[#c9a962]/20">
          <h2 className="text-lg font-medium text-[#c9a962] mb-4">Contents</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            {tableOfContents.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-[#8b8680] hover:text-[#c9a962] text-sm transition-colors">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mission */}
        <section id="mission" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-4 pb-2 border-b border-[#c9a962]/20">
            Mission
          </h2>
          <p className="text-[#e8e6e3] leading-relaxed">
            The Library of Alexandria is a decentralized protocol for the permanent preservation of humanity&apos;s written heritage—historical records, literature, scientific papers, news archives, and documents worthy of being remembered forever.
          </p>
        </section>

        {/* Core Principles */}
        <section id="principles" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            Core Principles
          </h2>
          <div className="space-y-6">
            {principles.map((item, index) => (
              <div key={index} className="pl-4 border-l-2 border-[#c9a962]/30">
                <h3 className="text-lg font-medium text-[#e8e6e3] mb-2">
                  {index + 1}. {item.name}
                </h3>
                <p className="text-[#8b8680]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Two-Tier Storage */}
        <section id="storage" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            Two-Tier Storage Model
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tiers.map((tier, index) => (
              <div key={index} className="p-6 border border-[#c9a962]/20">
                <h3 className="text-lg font-medium text-[#c9a962] mb-4">{tier.name}</h3>
                <ul className="space-y-2">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-sm text-[#8b8680]">
                      &bull; {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Organization Requirements */}
        <section id="organizations" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            Organization Requirements
          </h2>
          <div className="space-y-4">
            {orgRequirements.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 border border-[#c9a962]/10">
                <span className="text-[#c9a962] font-light">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <span className="text-[#e8e6e3] font-medium">{item.name}:</span>{' '}
                  <span className="text-[#8b8680]">{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bond System */}
        <section id="bonds" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            Bond System
          </h2>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#e8e6e3] mb-4">Bond Types</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {bondTypes.map((bond, index) => (
                <div key={index} className="p-4 bg-[#050810] border border-[#c9a962]/20">
                  <span className="text-[#c9a962] block mb-1">{bond.type}</span>
                  <span className="text-sm text-[#8b8680]">{bond.amount}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#e8e6e3] mb-4">Bond Outcomes</h3>
            <div className="space-y-2">
              {bondOutcomes.map((outcome, index) => (
                <div key={index} className="flex justify-between p-3 border border-[#c9a962]/10">
                  <span className="text-[#e8e6e3]">{outcome.status}</span>
                  <span className="text-[#8b8680] text-sm">{outcome.result}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Moderation */}
        <section id="moderation" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            Content Moderation
          </h2>
          <div className="space-y-6 mb-8">
            {moderationLevels.map((level, index) => (
              <div key={index} className="p-4 border-l-2 border-[#c9a962]/30">
                <h3 className="text-lg font-medium text-[#e8e6e3] mb-2">{level.name}</h3>
                <p className="text-[#8b8680]">{level.description}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-red-500/20 bg-red-500/5">
              <h3 className="text-lg font-medium text-red-400 mb-4">CAN Be Blacklisted</h3>
              <ul className="space-y-2">
                {canBlacklist.map((item, index) => (
                  <li key={index} className="text-sm text-[#8b8680]">&bull; {item}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 border border-green-500/20 bg-green-500/5">
              <h3 className="text-lg font-medium text-green-400 mb-4">CANNOT Be Blacklisted</h3>
              <ul className="space-y-2">
                {cannotBlacklist.map((item, index) => (
                  <li key={index} className="text-sm text-[#8b8680]">&bull; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ALEX Token */}
        <section id="tokenomics" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            ALEX Token Economics
          </h2>
          <div className="text-center mb-8 p-6 border-2 border-[#c9a962]">
            <span className="text-sm text-[#8b8680] block mb-2">TOTAL SUPPLY</span>
            <span className="text-3xl font-light text-[#c9a962]">1,000,000,000 (1 billion) ALEX</span>
          </div>
          <h3 className="text-lg font-medium text-[#e8e6e3] mb-4">Distribution</h3>
          <div className="space-y-2 mb-8">
            {tokenDistribution.map((item, index) => (
              <div key={index} className="flex justify-between p-3 border border-[#c9a962]/10">
                <span className="text-[#8b8680]">{item.allocation}</span>
                <span className="text-[#c9a962]">{item.percentage}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-[#050810] border border-[#c9a962]/20 mb-4">
            <h4 className="text-[#c9a962] mb-2">Founder Vesting</h4>
            <p className="text-sm text-[#8b8680]">Years 1-10 fully locked. Years 11-20: 10% released each year. Total time to full release: 20 years.</p>
          </div>
          <div className="p-4 bg-[#050810] border border-[#c9a962]/20">
            <h4 className="text-[#c9a962] mb-2">Purchasing ALEX</h4>
            <p className="text-sm text-[#8b8680]">Tokens can be purchased from the DAO using ETH, SOL, HIVE, or any smart-contract-capable cryptocurrency. Funds go into the liquidity pool for node rewards.</p>
          </div>
        </section>

        {/* Governance Timeline */}
        <section id="governance" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            Governance Timeline
          </h2>
          <div className="space-y-4 mb-8">
            {governanceTimeline.map((item, index) => (
              <div key={index} className="flex gap-4 p-4 border border-[#c9a962]/10">
                <span className="text-[#c9a962] font-medium min-w-[80px]">{item.period}</span>
                <span className="text-[#8b8680]">{item.description}</span>
              </div>
            ))}
          </div>
          <div className="p-6 border border-red-500/20 bg-red-500/5">
            <h3 className="text-lg font-medium text-red-400 mb-4">Counsel Limitations</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {counselLimitations.map((item, index) => (
                <li key={index} className="text-sm text-[#8b8680] flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Infrastructure */}
        <section id="infrastructure" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            Technical Infrastructure
          </h2>
          <h3 className="text-lg font-medium text-[#e8e6e3] mb-4">Node Types</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {nodeTypes.map((node, index) => (
              <div key={index} className="p-6 border border-[#c9a962]/20 text-center">
                <h4 className="text-[#e8e6e3] font-medium mb-2">{node.type}</h4>
                <span className="text-[#c9a962] block mb-2">{node.stake}</span>
                <span className="text-sm text-[#8b8680]">{node.role}</span>
              </div>
            ))}
          </div>
          <div className="p-4 bg-[#050810] border border-[#c9a962]/20">
            <h4 className="text-[#c9a962] mb-2">Storage Model</h4>
            <p className="text-sm text-[#8b8680]">Each document stored as whole file on multiple archive nodes. Minimum 10 copies across geographically distributed nodes. Faster delivery (no reassembly required), simpler architecture, proven sustainable model.</p>
          </div>
        </section>

        {/* Proof of Access */}
        <section id="proof-of-access" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            SPK Proof of Access
          </h2>
          <p className="text-[#e8e6e3] mb-6">Proof of Access ensures storage nodes actually store the files they claim to store.</p>
          <h3 className="text-lg font-medium text-[#e8e6e3] mb-4">Challenge-Response Protocol</h3>
          <ol className="space-y-2 mb-6">
            {proofOfAccessProtocol.map((step, index) => (
              <li key={index} className="flex gap-4 p-3 border border-[#c9a962]/10">
                <span className="text-[#c9a962]">{index + 1}.</span>
                <span className="text-[#8b8680]">{step}</span>
              </li>
            ))}
          </ol>
          <div className="p-4 bg-[#050810] border border-[#c9a962]/20">
            <h4 className="text-[#c9a962] mb-2">Why 500ms?</h4>
            <p className="text-sm text-[#8b8680]">500ms is too fast to download from another node, retrieve from cold storage, or generate fake responses. Only nodes with files on fast local storage can respond in time.</p>
          </div>
        </section>

        {/* What Cannot Be Changed */}
        <section id="immutables" className="mb-16">
          <h2 className="text-2xl font-light text-[#dcc584] mb-6 pb-2 border-b border-[#c9a962]/20">
            What Cannot Be Changed (Even by DAO Vote)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {immutables.map((item, index) => (
              <div key={index} className="p-4 border border-[#c9a962]/30 bg-[#c9a962]/5">
                <span className="text-[#e8e6e3]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-[#c9a962]/20">
          <p className="text-[#c9a962] italic mb-4">
            Library of Alexandria Protocol
          </p>
          <p className="text-[#8b8680] text-sm">
            Preserving humanity&apos;s written heritage — permanently, responsibly, together.
          </p>
          <p className="text-[#8b8680]/60 text-xs mt-4">
            November 2025
          </p>
        </div>
      </div>
    </div>
  );
}
