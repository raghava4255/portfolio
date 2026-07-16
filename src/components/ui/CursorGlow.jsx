import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorGlow() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  // Gentle physics configuration for a smooth, lag-free organic trail
  const springConfig = { damping: 50, stiffness: 250, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of width/height (160px) to center the element on the cursor
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: glowX,
        y: glowY,
        willChange: 'transform',
      }}
      className="fixed top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 dark:from-cyan-400/15 dark:to-purple-600/15 blur-[70px] pointer-events-none z-30 select-none hidden sm:block"
    />
  );
}
