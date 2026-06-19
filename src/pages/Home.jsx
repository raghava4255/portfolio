import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/sections/HeroSection';
import { DevOpsTerminal } from '../components/ui/DevOpsTerminal';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ContactSection } from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div className="relative z-10 w-full">
      {/* Hero split-screen structure */}
      <div className="relative min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 text-left">
            <HeroSection />
          </div>
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <DevOpsTerminal />
            </motion.div>
          </div>
        </div>
      </div>

      <AboutSection />
      
      <SkillsSection />
      
      <ProjectsSection />
      
      <ContactSection />
    </div>
  );
}
