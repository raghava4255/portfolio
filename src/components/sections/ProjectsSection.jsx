import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { profile } from '../../data/profile';

const CATEGORIES = ['All', 'Web API', 'DevOps', 'Full Stack'];

const CATEGORY_DESCRIPTIONS = {
  'All': "A comprehensive showcase of my projects spanning API development, automated DevOps pipelines, containerized deployments, and full-stack systems.",
  'Web API': "I implemented high-performance Web APIs using HTTP, secure REST endpoints, and robust relational database designs.",
  'DevOps': "I deployed AMS (Attendance Management System) and invoice applications using Docker, container orchestration, and automated CI/CD pipelines.",
  'Full Stack': "Designed and developed full-stack architectures, seamlessly connecting interactive React frontends with secure .NET backend services."
};

const getCategoryStyles = (category) => {
  switch (category) {
    case 'Web API':
      return {
        bg: 'bg-gradient-to-r from-cyan-500/5 to-blue-500/10 dark:from-cyan-950/20 dark:to-blue-950/20',
        border: 'border-cyan-500/20 dark:border-cyan-500/30',
        shadow: 'shadow-[0_0_25px_rgba(6,182,212,0.12)]'
      };
    case 'DevOps':
      return {
        bg: 'bg-gradient-to-r from-purple-500/5 to-pink-500/10 dark:from-purple-950/20 dark:to-pink-950/20',
        border: 'border-purple-500/20 dark:border-purple-500/30',
        shadow: 'shadow-[0_0_25px_rgba(168,85,247,0.12)]'
      };
    case 'Full Stack':
      return {
        bg: 'bg-gradient-to-r from-blue-500/5 to-purple-500/10 dark:from-blue-950/20 dark:to-purple-950/20',
        border: 'border-blue-500/20 dark:border-blue-500/30',
        shadow: 'shadow-[0_0_25px_rgba(59,130,246,0.12)]'
      };
    default:
      return {
        bg: 'bg-gradient-to-r from-slate-500/5 to-blue-500/5 dark:from-slate-900/40 dark:to-slate-950/40',
        border: 'border-slate-300/20 dark:border-white/5',
        shadow: 'shadow-md shadow-slate-100/5 dark:shadow-none'
      };
  }
};

export function ProjectsSection() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = profile.projects.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-600/5 dark:bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-neon-purple/5 dark:bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        <SectionTitle subtitle="My Portfolio" title="Featured Projects" />

        {/* Categories Tab */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 select-none relative z-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                filter === cat
                  ? 'text-blue-600 dark:text-cyan-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {filter === cat && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className="absolute inset-0 bg-blue-500/10 dark:bg-cyan-400/15 rounded-xl border border-blue-500/20 dark:border-cyan-500/30 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Animated Intro Description Box */}
        <div className="min-h-[70px] flex items-center justify-center mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className={`p-5 w-full max-w-2xl rounded-2xl glass-card border text-center transition-all duration-300 ${getCategoryStyles(filter).bg} ${getCategoryStyles(filter).border} ${getCategoryStyles(filter).shadow}`}
            >
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {CATEGORY_DESCRIPTIONS[filter]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
