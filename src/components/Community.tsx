'use client';

import { motion } from 'framer-motion';
import { Twitter, MessageSquare, MessagesSquare, Github, Globe, Users } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const socials = [
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/builder',
    color: 'blue',
    gradient: 'from-blue-400 to-blue-600',
    followers: '50K+'
  },
  {
    name: 'Discord',
    icon: MessageSquare,
    url: 'https://discord.gg/builder',
    color: 'indigo',
    gradient: 'from-indigo-400 to-indigo-600',
    followers: '25K+'
  },
  {
    name: 'Telegram',
    icon: MessagesSquare,
    url: 'https://t.me/builder',
    color: 'sky',
    gradient: 'from-sky-400 to-sky-600',
    followers: '30K+'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/builder',
    color: 'gray',
    gradient: 'from-gray-400 to-gray-600',
    followers: '1K+'
  },
  {
    name: 'Website',
    icon: Globe,
    url: 'https://builder.fi',
    color: 'emerald',
    gradient: 'from-emerald-400 to-emerald-600',
    followers: '100K+'
  },
  {
    name: 'Community',
    icon: Users,
    url: 'https://community.builder.fi',
    color: 'purple',
    gradient: 'from-purple-400 to-purple-600',
    followers: '10K+'
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

export default function Community() {
  return (
    <section id="community" className="relative py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_100%)]" />
      </div>

      <div className="container mx-auto relative">
        {/* Section Title */}
        <SectionTitle 
          title="Join Our Community" 
          description="Connect with fellow builders and stay updated with the latest developments in the Builder ecosystem."
        />

        {/* Social Links Grid */}
        <div className="mt-16 md:mt-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="terminal-window p-6 relative group cursor-pointer"
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
                        className={`p-2 rounded-lg bg-gradient-to-br ${social.gradient}`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-mono text-emerald-400">{social.name}</h3>
                    </div>

                    {/* Content */}
                    <div className="font-mono space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">$</span>
                        <span className="text-sm text-emerald-200">join-community</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">$</span>
                        <span className="text-sm text-emerald-200">members: {social.followers}</span>
                      </div>
                    </div>

                    {/* Terminal Line Animation */}
                    <div className="mt-4 h-px bg-gradient-to-r from-emerald-500/20 to-transparent animate-border-flow" />

                    {/* Hover Message */}
                    <div className="mt-4 text-xs font-mono text-emerald-400/60">
                      Click to connect with our {social.name} community
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="terminal-window p-6 relative inline-block">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500/50 to-yellow-500/50 rounded-lg" />
            <div className="absolute inset-0 bg-emerald-950 rounded-lg" />
            <div className="relative font-mono">
              <p className="text-emerald-400 mb-2">$ total-community-size</p>
              <p className="text-2xl sm:text-3xl text-emerald-200">200K+ Builders Worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}