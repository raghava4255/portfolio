import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { profile } from '../../data/profile';

const CATEGORIES = ['All', 'Web API', 'DevOps', 'Full Stack'];

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
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 select-none relative z-10">
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
