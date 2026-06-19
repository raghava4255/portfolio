import React from 'react';
import { motion } from 'framer-motion';

export function SkillCard({ skill }) {
  return (
    <div className="group/item">
      <div className="flex justify-between items-end mb-2">
        <div>
          <span className="text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200 block">
            {skill.name}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {skill.description}
          </span>
        </div>
        <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400">
          {skill.level}%
        </span>
      </div>
      
      {/* Animated meter bar */}
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-600 to-neon-purple dark:from-cyan-500 dark:to-neon-purple rounded-full"
        />
      </div>
    </div>
  );
}
