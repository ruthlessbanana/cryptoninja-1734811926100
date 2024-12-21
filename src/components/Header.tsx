'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Community', href: '#community' },
];

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-emerald-950/80 backdrop-blur-md border-b border-emerald-500/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
              <Code2 className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xl font-mono text-emerald-400 font-bold">
              Builder
              <span className="text-yellow-400">_</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-mono text-emerald-300/80 hover:text-emerald-300 transition-colors relative group"
              >
                <span className="text-emerald-400/60">$</span> {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-emerald-400/50"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </nav>

          {/* Buy Now Button */}
          <Link
            href="https://app.builder.fi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <motion.div 
              className="absolute -inset-[2px] bg-emerald-400/20 rounded-lg blur-sm transition-all duration-500 group-hover:bg-emerald-400/30 group-hover:blur-md"
              animate={{
                opacity: [0.5, 0.4, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <div className="relative px-4 py-1.5 bg-emerald-950/90 rounded-lg font-mono text-emerald-400 flex items-center gap-2 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors header-button-glow">
              <span className="text-emerald-400 group-hover:text-emerald-300">Buy Now</span>
              <ChevronRight className="w-4 h-4 text-emerald-400/70 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all" />
            </div>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}