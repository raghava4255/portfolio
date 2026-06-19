import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export function Loader() {
  return (
    <motion.div
      key="loader"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      className="fixed inset-0 bg-[#030014] text-cyan-400 font-mono text-sm flex flex-col items-center justify-center z-50 p-6"
    >
      <div className="max-w-md w-full space-y-4">
        <div className="flex items-center gap-2 text-cyan-500 font-semibold mb-2">
          <Cpu size={24} className="animate-spin" style={{ animationDuration: '3s' }} />
          <span>Challa Boot Loader v1.0.4</span>
        </div>
        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-4 space-y-1.5 shadow-2xl">
          <div>$ dotnet run --project portfolio</div>
          <div className="text-slate-400">Loading assembly assemblies... OK</div>
          <div className="text-slate-400">Restoring package caches... OK</div>
          <div className="text-slate-400">Initializing Tailwind Design Tokens... OK</div>
          <div className="text-slate-400">Establishing DevOps connection... OK</div>
          <div className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-2">
            <span>● Hosting environment: Production</span>
          </div>
          <div className="text-slate-400">Content root: c:/Users/chall/OneDrive/Desktop/portfolio</div>
        </div>
        <div className="flex justify-between items-center text-[10px] text-slate-600 px-2 mt-4 select-none">
          <span>Ctrl+C to shut down</span>
          <span className="animate-pulse">Active Shell Port: 5173</span>
        </div>
      </div>
    </motion.div>
  );
}
