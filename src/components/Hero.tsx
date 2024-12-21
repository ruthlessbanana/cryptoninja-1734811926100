'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const commands = [
  { cmd: 'builder --version', output: 'Builder v1.0.0 - The Ultimate Builder' },
  { cmd: 'builder --info', output: 'Building the world&apos;s first decentralized builder platform' },
  { cmd: 'builder --vibe-check', output: '[ ████████████████████ ] 100% Builder detected!' },
  { cmd: 'builder --quote', output: '"Build it and they will come" - Ancient Builder Wisdom' },
];

export default function Hero() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typing, setTyping] = useState(true);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    if (currentCommand < commands.length) {
      const timer = setTimeout(() => {
        setTyping(false);
        setTimeout(() => {
          if (currentCommand < commands.length - 1) {
            setCurrentCommand(prev => prev + 1);
            setTyping(true);
          }
        }, 1000);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentCommand]);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-16 md:pt-20 pb-32 md:pb-40">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]" />
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-transparent to-emerald-950/50"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Hero Content */}
        <div className="max-w-[90rem] mx-auto">
          <div className="grid gap-16 md:gap-20 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="text-center max-w-3xl mx-auto">
              {/* Glowing Line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-16 sm:w-24 mx-auto mb-8"
              />

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6"
              >
                <div className="flex items-center justify-center gap-2 text-emerald-400/80 font-mono text-sm sm:text-base mb-4">
                  <span className="text-emerald-400">&lt;/&gt;</span>
                  Builder<span className="animate-pulse">_</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-mono">
                  <span className="inline-block bg-gradient-to-br from-emerald-400 via-emerald-300 to-yellow-400 bg-clip-text text-transparent">
                    Building the Future
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg sm:text-xl text-emerald-300/80 font-mono max-w-2xl mx-auto mb-10 sm:mb-12"
              >
                The world&apos;s first decentralized builder platform. Join us in creating the future of building.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <a href="#" className="relative group w-full sm:w-auto min-w-[200px]">
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-lg opacity-75 blur-sm group-hover:opacity-100 transition-all duration-500" />
                  <button className="relative w-full px-8 py-3 bg-emerald-950 rounded-lg font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    $ get-started
                  </button>
                </a>
                <a href="#" className="relative group w-full sm:w-auto min-w-[200px]">
                  <div className="absolute -inset-[2px] bg-emerald-500/20 rounded-lg opacity-75 blur-sm group-hover:opacity-100 transition-all duration-500" />
                  <button className="relative w-full px-8 py-3 bg-emerald-950/50 rounded-lg font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors border border-emerald-500/20">
                    $ join-community
                  </button>
                </a>
              </motion.div>
            </div>

            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="w-full max-w-3xl mx-auto mt-8 md:mt-12"
            >
              <div className="terminal-window backdrop-blur-sm bg-emerald-950/90">
                {/* Terminal Header */}
                <div className="terminal-header p-3 sm:p-4 flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="terminal-dot terminal-dot-red"></div>
                    <div className="terminal-dot terminal-dot-yellow"></div>
                    <div className="terminal-dot terminal-dot-green"></div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="ml-4 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-mono text-sm">builder.sh</span>
                  </motion.div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 sm:p-6 font-mono text-sm sm:text-base text-emerald-200">
                  {commands.slice(0, currentCommand + 1).map((cmd, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="mb-4"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 flex-shrink-0">$</span>
                        <div className="flex-1 min-w-0">
                          <span className="typing-text break-all">{cmd.cmd}</span>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ delay: 0.3 }}
                            className="mt-2 text-emerald-300/80 break-words"
                          >
                            {cmd.output}
                            {index === currentCommand && typing && (
                              <span className="cursor-blink">▋</span>
                            )}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}