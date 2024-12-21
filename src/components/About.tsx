'use client';

import { motion } from 'framer-motion';
import { Terminal, Zap, Shield, Rocket, Crown, Star } from 'lucide-react';

const levels = [
  { 
    title: 'Level 1', 
    name: 'Good Builder', 
    description: 'The foundation of all builders',
    icon: Terminal,
    color: 'from-emerald-400 to-emerald-600'
  },
  { 
    title: 'Level 2', 
    name: 'Mighty Builder', 
    description: 'Crafting with confidence',
    icon: Shield,
    color: 'from-blue-400 to-blue-600'
  },
  { 
    title: 'Level 3', 
    name: 'Savage Builder', 
    description: 'Breaking boundaries',
    icon: Zap,
    color: 'from-purple-400 to-purple-600'
  },
  { 
    title: 'Level 4', 
    name: 'Deadly Builder', 
    description: 'Unstoppable force',
    icon: Rocket,
    color: 'from-red-400 to-red-600'
  },
  { 
    title: 'Level 5', 
    name: 'Ninety Builder', 
    description: 'Peak performance',
    icon: Crown,
    color: 'from-yellow-400 to-yellow-600'
  },
  { 
    title: 'Level 6', 
    name: 'Ultimate Builder', 
    description: 'Beyond limitations',
    icon: Star,
    color: 'from-pink-400 to-pink-600'
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

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 bg-emerald-950/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_100%)]" />
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Title and Description - Left Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6"
              >
                {/* Glowing Line */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-16 sm:w-24 mb-8"
                />

                {/* Title */}
                <h2 className="text-4xl font-bold terminal-font bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                  The Builder Scale
                </h2>

                {/* Description */}
                <p className="text-lg text-emerald-300/80 terminal-font">
                  Discover the six levels of builder mastery, from foundational skills to ultimate achievement. Each level represents a milestone in your journey to becoming a legendary builder.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Cards Grid - Right Side */}
          <div className="lg:col-span-8">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {levels.map((level, index) => {
                const Icon = level.icon;
                return (
                  <motion.div
                    key={level.title}
                    variants={item}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)"
                    }}
                    className="terminal-window p-6 relative group"
                  >
                    {/* Gradient Border Animation */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 to-yellow-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-emerald-950 rounded-lg" />
                    
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="terminal-dot terminal-dot-green"></div>
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`p-2 rounded-lg bg-gradient-to-br ${level.color}`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-mono text-emerald-400">{level.title}</h3>
                      </div>

                      <div className="font-mono space-y-2">
                        <p className="text-lg text-emerald-200 mb-2">{level.name}</p>
                        <p className="text-sm text-emerald-400/80">{level.description}</p>
                      </div>

                      {/* Progress Indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(index + 1) * 16.67}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-4 h-1 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}