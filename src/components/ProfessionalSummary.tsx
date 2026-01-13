import { motion } from 'framer-motion';
import FloralPattern from './FloralPattern';

const ProfessionalSummary = () => {
  return (
    <section id="summary" className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F3FF 0%, #FEF3F2 50%, #ECFDF5 100%)' }}>
      {/* Subtle Pink Floral Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloralPattern position="top" size="medium" />
        <FloralPattern position="bottom" size="medium" />
        <FloralPattern position="left" size="small" />
        <FloralPattern position="right" size="small" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-8 lg:col-start-3"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
          <div className="frosted-glass rounded-[40px] p-10 md:p-14 lg:p-16 floating-card relative">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1A1A2E]/90 leading-relaxed text-balance font-light space-y-4" style={{ letterSpacing: '-0.005em', fontFamily: 'Google Sans, Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              <span className="block font-semibold text-[#1A1A2E]" style={{ fontFamily: 'Clash Display, Space Grotesk, Poppins, Nunito, sans-serif', letterSpacing: '-0.01em' }}>
                I specialize in building scalable web applications using React, TypeScript, and robust backend systems.
              </span>
              <span className="block">
                Currently, I'm pursuing a part-time master's degree, expanding my expertise into AI and machine learning to apply intelligent solutions to real-world challenges.
              </span>
              <span className="block">
                I'm recognized for quickly mastering new technologies, collaborating seamlessly across teams, and delivering clean, maintainable code.
              </span>
              <span className="block">
                I'm passionate about automation and streamlining processes, always looking for ways to innovate and enhance efficiency.
              </span>
            </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
