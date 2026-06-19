import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, MessageSquare } from 'lucide-react';
import { profile } from '../../data/profile';

const ROLES = ["Web API Developer", "MVC Developer", "DevOps Engineer", "Full Stack Specialist"];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = ROLES[roleIndex];
    
    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }
      }

      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-blue-500/10 dark:bg-cyan-500/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[25%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-neon-purple/10 dark:bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 dark:border-cyan-400/20 dark:bg-cyan-400/5 text-blue-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 dark:bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 dark:bg-cyan-500"></span>
          </span>
          Recruiter-Ready Developer Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-800 dark:text-white leading-tight mb-4"
        >
          Hi, I'm <span className="text-gradient font-black">{profile.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-3xl font-medium text-slate-600 dark:text-slate-300 min-h-[40px] mb-8"
        >
          I am a{' '}
          <span className="text-blue-600 dark:text-cyan-400 border-r-2 border-blue-600 dark:border-cyan-400 pr-1 animate-pulse font-semibold">
            {currentText}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold accent-gradient-bg cursor-pointer text-sm"
          >
            View Projects
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold accent-outline-btn cursor-pointer text-sm"
          >
            Contact Me
            <MessageSquare size={18} />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer select-none text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors z-10"
        onClick={() => scrollToSection('about')}>
        <span className="text-[10px] uppercase font-bold tracking-widest mb-1.5">Scroll Down</span>
        <ChevronDown className="animate-bounce" size={20} />
      </div>
    </section>
  );
}
