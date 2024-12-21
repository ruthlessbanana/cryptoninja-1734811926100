'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-emerald-950/50 py-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center gap-2 font-mono text-sm text-emerald-300/60">
          <span>© 2024 Builder. All rights reserved.</span>
          <span className="text-emerald-400/40">|</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400" /> by Builders
          </span>
        </div>
      </div>
    </footer>
  );
}