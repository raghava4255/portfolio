import React from 'react';
import { Terminal } from 'lucide-react';
import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200/50 dark:border-white/5 bg-white/40 dark:bg-slate-950/40 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-1.5 font-mono text-[10px] select-none">
          <Terminal size={12} className="text-blue-600 dark:text-cyan-400" />
          <span>Powered by React + Vite + Tailwind v4 + Docker</span>
        </div>
      </div>
    </footer>
  );
}
