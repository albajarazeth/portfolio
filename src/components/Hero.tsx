import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FEF3F2 0%, #F0F9FF 50%, #F5F3FF 100%)' }}>
      {/* Abstract Modern Shapes - Layered for Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large background shapes */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] abstract-shape animate-abstract parallax-slow"
          style={{ background: 'linear-gradient(135deg, #B794F6, #F472B6)' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] abstract-shape-2 animate-abstract-2 parallax-medium"
          style={{ background: 'linear-gradient(135deg, #FB9A8B, #67E8F9)' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] abstract-shape-3 animate-abstract-3"
          style={{ background: 'linear-gradient(135deg, #60A5FA, #B794F6)' }}
        />
        
        {/* Flowing ribbon effect */}
        <motion.div
          className="abstract-ribbon top-1/4 -left-[10%]"
          animate={{
            x: [0, 50, 0],
            rotate: [-5, -3, -5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
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
              fontFamily: 'Poppins, Nunito, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.03em'
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
            <p className="text-sm sm:text-base tracking-[3px] uppercase text-[#1A1A2E]/75 font-semibold" style={{ letterSpacing: '0.15em' }}>
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
