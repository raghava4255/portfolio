import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';

const LOADER_STEPS = [
  "dotnet run --project portfolio",
  "Loading assembly dependencies... OK",
  "Restoring NuGet packages... OK",
  "Initializing Tailwind custom tokens... OK",
  "Establishing DevOps network pipelines... OK",
  "Portfolio successfully serving on port:5173"
];

export function Loader() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 14);

    // Stagger terminal lines
    const stepsInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= LOADER_STEPS.length - 1) {
          clearInterval(stepsInterval);
          return LOADER_STEPS.length - 1;
        }
        return prev + 1;
      });
    }, 280);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepsInterval);
    };
  }, []);

  return (
    <motion.div
      key="loader"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 bg-[#030014] text-cyan-400 font-mono text-sm flex flex-col items-center justify-center z-50 p-6"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-[30%] right-[30%] w-[40vw] h-[40vw] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="max-w-md w-full space-y-6 z-10 relative">
        {/* Glowing Spinning CPU Header */}
        <div className="flex flex-col items-center gap-3 text-center mb-6">
          <motion.div
            animate={{ 
              rotate: 360,
              boxShadow: [
                "0 0 15px rgba(6, 182, 212, 0.2)",
                "0 0 30px rgba(6, 182, 212, 0.5)",
                "0 0 15px rgba(6, 182, 212, 0.2)"
              ]
            }}
            transition={{ 
              rotate: { repeat: Infinity, duration: 6, ease: "linear" },
              boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
            className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-400"
          >
            <Cpu size={32} />
          </motion.div>
          
          <h3 className="text-base font-bold tracking-widest text-slate-100 uppercase">
            Challa Boot Loader
            <span className="text-cyan-400 text-xs ml-1.5 animate-pulse">v1.1.2</span>
          </h3>
        </div>

        {/* Terminal Container */}
        <div className="bg-slate-950/80 border border-cyan-500/10 rounded-2xl p-5 space-y-2.5 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          
          {LOADER_STEPS.slice(0, currentStep + 1).map((step, idx) => {
            const isCommand = idx === 0;
            const isSuccess = idx === LOADER_STEPS.length - 1;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-xs ${
                  isCommand 
                    ? 'text-cyan-400 font-semibold' 
                    : isSuccess 
                      ? 'text-emerald-400 font-bold' 
                      : 'text-slate-400'
                }`}
              >
                {isCommand ? `$ ${step}` : step}
              </motion.div>
            );
          })}
        </div>

        {/* Progress Bar & percentage */}
        <div className="space-y-2 px-1 select-none">
          <div className="flex justify-between items-center text-[10px] text-slate-500">
            <span className="animate-pulse">SYSTEM INITIALIZING...</span>
            <span className="font-bold text-cyan-500">{progress}%</span>
          </div>
          
          <div className="h-1.5 w-full bg-slate-900 border border-white/5 rounded-full overflow-hidden">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full"
            />
          </div>
        </div>

        <div className="text-[10px] text-center text-slate-600 select-none">
          Active Shell Port: <span className="text-slate-500">5173</span>
        </div>
      </div>
    </motion.div>
  );
}
