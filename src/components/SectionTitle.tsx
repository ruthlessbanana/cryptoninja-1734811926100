'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  description: string;
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      {/* Glowing Line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-16 sm:w-24 mx-auto mb-8"
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold terminal-font bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent mb-6"
      >
        {title}
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-lg sm:text-xl text-emerald-300/80 terminal-font max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
}