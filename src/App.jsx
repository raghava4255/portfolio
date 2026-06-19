import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Loader } from './components/ui/Loader';
import Home from './pages/Home';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <Loader />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen bg-slate-50 dark:bg-[#030014] transition-colors duration-300 overflow-hidden"
          >
            {/* Interactive Grid & Canvas particles background */}
            <AnimatedBackground theme={theme} />

            {/* Sticky Navigation */}
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            {/* Core Portfolio Page sections */}
            <main>
              <Home />
            </main>

            {/* Layout Footer */}
            <Footer />

            {/* Back-To-Top Trigger */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30 text-white dark:text-cyan-400 border border-slate-300/30 dark:border-cyan-500/30 shadow-lg cursor-pointer transition-all active:scale-95"
                  aria-label="Back to top"
                >
                  <ArrowUp size={20} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
