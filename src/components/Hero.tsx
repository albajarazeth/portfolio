import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-[#0D0D0D]">
      {/* Animated liquid auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[900px] h-[900px] rounded-full opacity-30 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)' }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] rounded-full opacity-25 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #BF00FF 0%, transparent 70%)' }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FF8C69 0%, transparent 70%)' }}
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6 leading-tight tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.04em'
            }}
          >
            Alba Garza
          </motion.h1>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm sm:text-base tracking-[2px] uppercase text-white/70 font-semibold" style={{ letterSpacing: '0.1em' }}>
              Senior Software Engineer
            </p>
          </motion.div>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ letterSpacing: '-0.02em' }}
          >
            Full-Stack Engineer Specializing in Frontend Development & Process Optimization | Enthusiastic About AI Solutions
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
