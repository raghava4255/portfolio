import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin, Mail, Calendar, Server, Container, Code, Settings, Briefcase, Award, Phone } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import { profile } from '../../data/profile';
import profileImg from '../../assets/profile.png';

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
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="Who I Am" title="About Me" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          {/* Row 1 Left: Summary & Contact */}
          <motion.div variants={itemVariants} className="md:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                {/* Round Profile DP with Gradient Border */}
                <div className="relative shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-tr from-blue-600 via-neon-purple to-neon-cyan shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-slate-950 flex items-center justify-center">
                    <img 
                      src={profileImg} 
                      alt={profile.name} 
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white bg-slate-800"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>`;
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h4 className="text-xl font-bold flex items-center gap-2 text-slate-800 dark:text-white justify-center md:justify-start">
                    <User size={20} className="text-blue-600 dark:text-cyan-400" />
                    Professional Summary
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center md:text-left">
                    {profile.bio}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200/50 dark:border-white/5 pt-6">
                <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                  <MapPin size={16} className="text-neon-purple dark:text-purple-400 shrink-0" />
                  <span>{profile.address}</span>
                </div>
                <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                  <Mail size={16} className="text-neon-purple dark:text-purple-400 shrink-0" />
                  <a href={`mailto:${profile.email}`} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors truncate">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                  <Phone size={16} className="text-neon-purple dark:text-purple-400 shrink-0" />
                  <span>{profile.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Row 1 Right: Core Focus */}
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

        {/* Row 2: Work Experience & Education/Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-8"
        >
          {/* Work Experience Column */}
          <motion.div variants={itemVariants} className="md:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-white">
                <Briefcase size={20} className="text-blue-600 dark:text-cyan-400" />
                Work Experience
              </h4>
              {profile.workExperience.map((work, idx) => (
                <div key={idx} className="relative pl-6 border-l border-slate-300 dark:border-slate-800 py-1.5 space-y-3">
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400 left-[-5px] top-[14px]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {work.duration}
                    </span>
                    <span className="text-blue-600 dark:text-cyan-400">{work.company}</span>
                  </div>
                  <h5 className="text-base font-bold text-slate-800 dark:text-slate-200">
                    {work.role}
                  </h5>
                  <ul className="list-disc list-inside space-y-1.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-1">
                    {work.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications Column */}
          <motion.div variants={itemVariants} className="md:col-span-6 space-y-6">
            {/* Education Box */}
            <div className="glass-card p-6 sm:p-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                <GraduationCap size={20} className="text-blue-600 dark:text-cyan-400" />
                Education
              </h4>
              <div className="space-y-6">
                {profile.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-slate-300 dark:border-slate-800 py-1 space-y-1">
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400 left-[-5px] top-[10px]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {edu.duration}
                      </span>
                      <span className="text-blue-600 dark:text-cyan-400">{edu.institution}</span>
                    </div>
                    <h5 className="text-base font-bold text-slate-800 dark:text-slate-200">
                      {edu.degree}
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Box */}
            <div className="glass-card p-6 sm:p-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                <Award size={20} className="text-blue-600 dark:text-cyan-400" />
                Internships & Certifications
              </h4>
              <ul className="space-y-3">
                {profile.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple dark:bg-purple-400 mt-2 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
