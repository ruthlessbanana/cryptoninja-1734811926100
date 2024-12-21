'use client';

import '../styles/tokenomics.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coins, Users, Code, Megaphone, ShieldCheck, Gauge, Terminal, Shield } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const tokenDistribution = [
  { 
    name: 'Public Sale', 
    percentage: 40, 
    icon: Users,
    color: 'emerald',
    description: 'Fair launch for the community',
    gradient: 'from-emerald-400 to-emerald-600'
  },
  { 
    name: 'Development', 
    percentage: 20, 
    icon: Code,
    color: 'yellow',
    description: 'Platform development & maintenance',
    gradient: 'from-yellow-400 to-yellow-600'
  },
  { 
    name: 'Team', 
    percentage: 15, 
    icon: ShieldCheck,
    color: 'blue',
    description: 'Core team allocation',
    gradient: 'from-blue-400 to-blue-600'
  },
  { 
    name: 'Marketing', 
    percentage: 15, 
    icon: Megaphone,
    color: 'purple',
    description: 'Growth & partnerships',
    gradient: 'from-purple-400 to-purple-600'
  },
  { 
    name: 'Reserve', 
    percentage: 10, 
    icon: Gauge,
    color: 'red',
    description: 'Ecosystem stability',
    gradient: 'from-red-400 to-red-600'
  }
];

const infoCards = [
  {
    title: 'Smart Contract',
    value: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    icon: Terminal,
    color: 'emerald',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent'
  },
  {
    title: 'Network',
    value: 'Ethereum Mainnet',
    icon: Shield,
    color: 'yellow',
    gradient: 'from-yellow-500/20 via-yellow-500/5 to-transparent'
  },
  {
    title: 'Decimals',
    value: '18',
    icon: Gauge,
    color: 'blue',
    gradient: 'from-blue-500/20 via-blue-500/5 to-transparent'
  },
  {
    title: 'Tax',
    value: '0% Buy / 0% Sell',
    icon: Coins,
    color: 'purple',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Tokenomics() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="tokenomics" className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_100%)]" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.03)_1px,transparent_1px)]"
        />
      </div>

      <div className="container mx-auto relative">
        {/* Section Title */}
        <SectionTitle 
          title="Tokenomics" 
          description="Explore the transparent and fair distribution of $BUILDER tokens, designed to support long-term growth and community engagement."
        />

        {/* Token Distribution */}
        <div className="mt-16 md:mt-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {tokenDistribution.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  variants={itemVariant}
                  whileHover={{ scale: 1.02 }}
                  className="terminal-window p-6 relative group"
                >
                  {/* Gradient Border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 to-yellow-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-emerald-950 rounded-lg" />
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="terminal-dot terminal-dot-green"></div>
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-2 rounded-lg bg-gradient-to-br ${item.gradient}`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-mono text-emerald-400">{item.name}</h3>
                    </div>

                    {/* Content */}
                    <div className="font-mono space-y-2">
                      <p className="text-3xl text-emerald-200 mb-2">{item.percentage}%</p>
                      <p className="text-sm text-emerald-400/80">{item.description}</p>
                    </div>

                    {/* Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="mt-4 h-1 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 md:mt-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={itemVariant}
                  whileHover={{ scale: 1.02 }}
                  className="terminal-window p-6 relative group"
                >
                  {/* Gradient Border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 to-yellow-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-emerald-950 rounded-lg" />
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="terminal-dot terminal-dot-green"></div>
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`p-2 rounded-lg bg-gradient-to-br ${card.gradient}`}
                      >
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </motion.div>
                      <h3 className="text-xl font-mono text-emerald-400">{card.title}</h3>
                    </div>

                    {/* Content */}
                    <div className="font-mono">
                      <p className="text-sm text-emerald-200 break-all">{card.value}</p>
                    </div>

                    {/* Terminal Line Animation */}
                    <div className="mt-4 h-px bg-gradient-to-r from-emerald-500/20 to-transparent animate-border-flow" />
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