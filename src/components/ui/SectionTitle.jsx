import React from 'react';
import { motion } from 'framer-motion';

export function SectionTitle({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16 select-none"
    >
      <h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-cyan-400 mb-2">
        {subtitle}
      </h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
        {title}
      </h3>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "3rem" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="h-1 bg-gradient-to-r from-blue-600 to-neon-purple rounded mx-auto mt-4"
      />
    </motion.div>
  );
}
