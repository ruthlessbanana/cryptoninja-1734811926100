'use client';

import { motion } from 'framer-motion';
import { Rocket, Flag, Target, Zap, Star, Award } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    description: 'Building the core infrastructure',
    icon: Flag,
    color: 'emerald',
    gradient: 'from-emerald-400 to-emerald-600',
    items: [
      'Smart Contract Development',
      'Website Launch',
      'Community Building',
      'Initial Marketing Campaign'
    ],
    status: 'completed'
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    description: 'Expanding our reach',
    icon: Target,
    color: 'yellow',
    gradient: 'from-yellow-400 to-yellow-600',
    items: [
      'Exchange Listings',
      'Partnership Development',
      'Platform Beta Launch',
      'Community Events'
    ],
    status: 'in-progress'
  },
  {
    phase: 'Phase 3',
    title: 'Innovation',
    description: 'Breaking new ground',
    icon: Zap,
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
    items: [
      'Advanced Features Release',
      'Cross-chain Integration',
      'Builder DAO Launch',
      'Ecosystem Expansion'
    ],
    status: 'upcoming'
  },
  {
    phase: 'Phase 4',
    title: 'Acceleration',
    description: 'Scaling for success',
    icon: Rocket,
    color: 'purple',
    gradient: 'from-purple-400 to-purple-600',
    items: [
      'Global Marketing Push',
      'Major Partnerships',
      'Platform V2 Launch',
      'Community Governance'
    ],
    status: 'upcoming'
  },
  {
    phase: 'Phase 5',
    title: 'Mastery',
    description: 'Achieving excellence',
    icon: Star,
    color: 'red',
    gradient: 'from-red-400 to-red-600',
    items: [
      'Enterprise Solutions',
      'Builder Labs Launch',
      'Research & Development',
      'Industry Leadership'
    ],
    status: 'upcoming'
  },
  {
    phase: 'Phase 6',
    title: 'Legacy',
    description: 'Building the future',
    icon: Award,
    color: 'pink',
    gradient: 'from-pink-400 to-pink-600',
    items: [
      'Global Builder Network',
      'Innovation Hub',
      'Builder Academy',
      'Ecosystem Maturity'
    ],
    status: 'upcoming'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_100%)]" />
      </div>

      <div className="container mx-auto relative">
        {/* Section Title */}
        <SectionTitle 
          title="Roadmap" 
          description="Our strategic journey towards building the ultimate decentralized builder platform. Each phase brings us closer to our vision."
        />

        {/* Roadmap Grid */}
        <div className="mt-16 md:mt-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.phase}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="terminal-window p-6 relative group"
                >
                  {/* Gradient Border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 to-yellow-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-emerald-950 rounded-lg" />
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`terminal-dot terminal-dot-${phase.status === 'completed' ? 'green' : phase.status === 'in-progress' ? 'yellow' : 'red'}`}></div>
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-2 rounded-lg bg-gradient-to-br ${phase.gradient}`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-mono text-emerald-400">{phase.phase}</h3>
                        <p className="text-sm text-emerald-300/80">{phase.title}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-emerald-400/80 mb-4 font-mono">{phase.description}</p>

                    {/* Items */}
                    <div className="space-y-2 font-mono">
                      {phase.items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <span className="text-emerald-400">$</span>
                          <span className="text-sm text-emerald-200">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Status Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${
                        phase.status === 'completed' ? 'bg-emerald-400' :
                        phase.status === 'in-progress' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`} />
                      <span className="text-xs font-mono text-emerald-400/60 uppercase">
                        {phase.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}