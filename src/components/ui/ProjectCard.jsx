import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Server, Container } from 'lucide-react';

export function ProjectCard({ project }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  const getSpotlightColor = (category) => {
    switch (category) {
      case 'Web API':
        return 'rgba(6, 182, 212, 0.12)';
      case 'DevOps':
        return 'rgba(168, 85, 247, 0.12)';
      default:
        return 'rgba(236, 72, 153, 0.12)';
    }
  };

  const getProjectIcon = (category) => {
    switch (category) {
      case 'Web API':
        return <Server className="text-cyan-400" size={32} />;
      case 'DevOps':
        return <Container className="text-purple-400" size={32} />;
      default:
        return <Code2 className="text-pink-400" size={32} />;
    }
  };

  const getVisualPattern = (category) => {
    if (category === 'Web API') {
      return (
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3"/>
          <rect x="25" y="25" width="50" height="8" rx="2" fill="currentColor"/>
          <rect x="25" y="40" width="50" height="8" rx="2" fill="currentColor"/>
          <rect x="25" y="55" width="50" height="8" rx="2" fill="currentColor"/>
          <path d="M50 10V90M10 50H90" stroke="currentColor" strokeWidth="0.25"/>
        </svg>
      );
    } else if (category === 'DevOps') {
      return (
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="20" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="0.5"/>
          <rect x="40" y="20" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="0.5"/>
          <rect x="65" y="20" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M25 40V70H75V40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
          <circle cx="50" cy="70" r="6" fill="currentColor"/>
        </svg>
      );
    } else {
      return (
        <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="80" height="50" rx="6" stroke="currentColor" strokeWidth="0.5"/>
          <rect x="10" y="65" width="80" height="15" rx="3" fill="currentColor"/>
          <circle cx="18" cy="72" r="2" fill="var(--color-dark-bg)"/>
          <circle cx="26" cy="72" r="2" fill="var(--color-dark-bg)"/>
          <circle cx="34" cy="72" r="2" fill="var(--color-dark-bg)"/>
          <path d="M30 35H70M30 45H55" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      );
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card glass-card-hover group flex flex-col justify-between overflow-hidden h-full border border-slate-200/50 dark:border-white/5 relative"
    >
      {/* Category Spotlight Overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(220px circle at ${mouseX}px ${mouseY}px, ${getSpotlightColor(project.category)}, transparent 80%)`,
          }}
        />
      )}
      <div>
        {/* Schematic header mockup */}
        <div className="h-44 w-full bg-slate-100 dark:bg-slate-950 border-b border-slate-200/50 dark:border-white/5 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            {getVisualPattern(project.category)}
          </div>
          {/* Neon logo orb */}
          <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900/80 shadow-md border border-slate-200/30 dark:border-white/5 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300">
            {getProjectIcon(project.category)}
          </div>
        </div>

        {/* Info contents */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] tracking-wider uppercase font-bold text-blue-600 dark:text-cyan-400 px-2 py-0.5 rounded bg-blue-500/10 dark:bg-cyan-400/10">
              {project.category}
            </span>
          </div>

          <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
            {project.title}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>
      </div>

      {/* Badges footer */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-200/40 dark:border-white/5">
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/30 dark:border-white/5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
          >
            <Github size={14} />
            View Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold accent-gradient-bg cursor-pointer"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 dark:text-slate-600 bg-slate-100/50 dark:bg-slate-950 border border-dashed border-slate-200 dark:border-white/5 select-none">
              Local Host Server
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
