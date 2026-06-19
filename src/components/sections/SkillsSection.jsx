import React from 'react';
import { motion } from 'framer-motion';
import { Server, Terminal } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { SkillCard } from '../ui/SkillCard';
import { profile } from '../../data/profile';

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="My Expertise" title="Technical Skills" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Backend Block */}
          <motion.div variants={itemVariants} className="glass-card p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 dark:bg-cyan-500/5 blur-2xl group-hover:bg-blue-500/10 dark:group-hover:bg-cyan-500/10 transition-all duration-300" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-blue-500/10 dark:bg-cyan-400/10 border border-blue-500/20 dark:border-cyan-400/20 text-blue-600 dark:text-cyan-400">
                <Server size={22} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                Backend Development
              </h4>
            </div>

            <div className="space-y-6">
              {profile.skills.backend.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* DevOps Block */}
          <motion.div variants={itemVariants} className="glass-card p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-neon-purple/5 dark:bg-purple-600/5 blur-2xl group-hover:bg-neon-purple/10 dark:group-hover:bg-purple-600/10 transition-all duration-300" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-purple-500/10 dark:bg-purple-400/10 border border-purple-500/20 dark:border-purple-400/20 text-neon-purple dark:text-purple-400">
                <Terminal size={22} />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                DevOps & Tooling
              </h4>
            </div>

            <div className="space-y-6">
              {profile.skills.devops.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 glass-card border-dashed border-slate-300 dark:border-slate-800 text-center max-w-2xl mx-auto select-none"
        >
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed italic">
            "I write code with a focus on ASP.NET Core SOLID principles, database optimization, CI/CD pipeline automation, and container orchestration."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
