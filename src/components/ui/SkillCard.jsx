import React from 'react';
import { motion } from 'framer-motion';

export function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ x: 6 }}
      className="group/item cursor-pointer"
    >
      <div className="flex justify-between items-end mb-2">
        <div>
          <span className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200 block group-hover/item:text-blue-600 dark:group-hover/item:text-cyan-400 transition-colors duration-300">
            {skill.name}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 group-hover/item:text-slate-600 dark:group-hover/item:text-slate-300 transition-colors duration-300">
            {skill.description}
          </span>
        </div>
        <motion.span 
          className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400"
          whileHover={{ scale: 1.1 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      
      {/* Animated meter bar wrapper */}
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.1, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="h-full bg-gradient-to-r from-blue-600 via-neon-purple to-neon-cyan dark:from-cyan-500 dark:via-neon-purple dark:to-neon-pink rounded-full relative overflow-hidden"
        >
          {/* Subtle neon glow sweep */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2.2,
              ease: "linear",
              delay: index * 0.1 + 0.5
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
