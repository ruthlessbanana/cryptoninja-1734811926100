'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-emerald-950 relative min-h-screen`}>
        {/* Global Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15)_0%,transparent_50%)]" />
          
          {/* Animated Orbs */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -left-64 top-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-yellow-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -right-64 top-3/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          />

          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)]" 
            style={{ backgroundSize: '24px 24px' }}
          />

          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
          }} />
        </div>

        {/* Content */}
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}