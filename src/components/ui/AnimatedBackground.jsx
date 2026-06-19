import React, { useEffect, useRef } from 'react';

export function AnimatedBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            
            this.x -= directionX * force * 1.5;
            this.y -= directionY * force * 1.5;
          }
        }
      }

      draw() {
        ctx.fillStyle = theme === 'dark' ? 'rgba(147, 51, 234, 0.55)' : 'rgba(99, 102, 241, 0.55)';
        if (theme === 'dark') {
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(147, 51, 234, 0.7)';
        } else {
          ctx.shadowBlur = 6;
          ctx.shadowColor = 'rgba(99, 102, 241, 0.4)';
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 18000));
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      const maxDistance = 100;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.hypot(dx, dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(8, 145, 178, ${opacity * 0.15})` 
              : `rgba(71, 85, 105, ${opacity * 0.08})`; 
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
        
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[a].x - mouse.x;
          const dy = particles[a].y - mouse.y;
          const distance = Math.hypot(dx, dy);
          
          if (distance < mouse.radius) {
            const opacity = (1 - distance / mouse.radius) * 0.25;
            ctx.strokeStyle = theme === 'dark'
              ? `rgba(147, 51, 234, ${opacity})`
              : `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <>
      {/* Moving Blurred Neon Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-40 dark:opacity-65">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-cyan/20 dark:bg-neon-cyan/35 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-neon-purple/20 dark:bg-neon-purple/35 blur-[120px] animate-float-medium" />
        <div className="absolute top-[35%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-neon-pink/15 dark:bg-neon-pink/25 blur-[100px] animate-float-fast" />
      </div>

      {/* Radial Mask Grid Layer */}
      <div 
        className="fixed inset-0 bg-grid-pattern opacity-65 dark:opacity-100 pointer-events-none z-1" 
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black 15%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 15%, transparent 80%)'
        }}
      />
      {/* Node Net Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-2 transition-opacity duration-500"
        style={{ opacity: theme === 'dark' ? 0.75 : 0.45 }}
      />
    </>
  );
}
