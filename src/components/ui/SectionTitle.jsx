import React from 'react';

export function SectionTitle({ subtitle, title }) {
  return (
    <div className="text-center mb-16 select-none">
      <h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-cyan-400 mb-2">
        {subtitle}
      </h2>
      <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-white">
        {title}
      </h3>
      <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-neon-purple rounded mx-auto mt-4" />
    </div>
  );
}
