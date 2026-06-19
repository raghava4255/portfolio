import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Mail, Calendar, Server, Container, Code, Settings } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { profile } from '../../data/profile';

const CORE_SERVICES = [
  {
    icon: <Server className="text-blue-500 dark:text-cyan-400" size={24} />,
    title: "Backend Engineering",
    desc: "Building production-grade Web APIs using ASP.NET Core & clean database architectures."
  },
  {
    icon: <Container className="text-purple-500 dark:text-purple-400" size={24} />,
    title: "DevOps & Containers",
    desc: "Containerizing services with Docker and designing automated CI/CD pipelines via YAML/Actions."
  },
  {
    icon: <Code className="text-pink-500 dark:text-pink-400" size={24} />,
    title: "Full Stack Integration",
    desc: "Developing seamless user interfaces in React connecting securely with JWT/REST API endpoints."
  }
];

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="Who I Am" title="About Me" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          {/* Left Summary Box */}
          <motion.div variants={itemVariants} className="md:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                <User size={20} className="text-blue-600 dark:text-cyan-400" />
                Professional Summary
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I am a focused software developer based in Hyderabad, specializing in the Microsoft .NET stack and DevOps lifecycle. I enjoy bridging the gap between coding robust backend web services and setting up efficient pipelines. My goal is to build containers, deploy microservices, and write API integrations that satisfy user needs perfectly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200/50 dark:border-white/5 pt-6">
                <div className="flex items-center gap-2.5">
                  <MapPin size={16} className="text-neon-purple dark:text-purple-400 shrink-0" />
                  <span>{profile.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-neon-purple dark:text-purple-400 shrink-0" />
                  <a href={`mailto:${profile.email}`} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors truncate">
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Education Box */}
            <div className="glass-card p-6 sm:p-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                <GraduationCap size={20} className="text-blue-600 dark:text-cyan-400" />
                Education & Learning
              </h4>
              {profile.education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-slate-300 dark:border-slate-800 py-1.5 space-y-2">
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400 left-[-5px] top-[14px]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {edu.duration}
                    </span>
                    <span className="text-blue-600 dark:text-cyan-400">{edu.institution}</span>
                  </div>
                  <h5 className="text-base font-bold text-slate-800 dark:text-slate-200">
                    {edu.degree}
                  </h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Core Services */}
          <motion.div variants={itemVariants} className="md:col-span-5 space-y-6">
            <div className="text-slate-800 dark:text-white mb-2">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Settings size={20} className="text-blue-600 dark:text-cyan-400" />
                Core Focus
              </h4>
            </div>
            
            {CORE_SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover p-6 flex gap-4 items-start"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h5 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                    {service.title}
                  </h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
