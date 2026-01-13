import { motion } from 'framer-motion';
import FloralPattern from './FloralPattern';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FEF3F2 0%, #F0F9FF 50%, #F5F3FF 100%)' }}>
      {/* Subtle Pink Floral Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <FloralPattern position="top" size="large" />
        <FloralPattern position="bottom" size="large" />
        <FloralPattern position="left" size="medium" />
        <FloralPattern position="right" size="medium" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="frosted-glass rounded-[40px] p-12 md:p-16 floaty-enter floating-card"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 leading-tight vibrant-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: 'Clash Display, Space Grotesk, Poppins, Nunito, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em'
            }}
          >
            Alba Garza
          </motion.h1>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0.3em] uppercase text-[#1A1A2E] font-bold" style={{ letterSpacing: '0.3em', fontWeight: 800 }}>
              Senior Software Engineer
            </p>
          </motion.div>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[#1A1A2E]/85 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ letterSpacing: '-0.01em' }}
          >
            Full-Stack Engineer Specializing in Frontend Development & Process Optimization | Enthusiastic About AI Solutions
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
