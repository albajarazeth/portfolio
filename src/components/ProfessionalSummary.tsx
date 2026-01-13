import { motion } from 'framer-motion';

const ProfessionalSummary = () => {
  return (
    <section id="summary" className="py-[120px] px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F3FF 0%, #FEF3F2 50%, #ECFDF5 100%)' }}>
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] abstract-shape-3 animate-abstract-3"
          style={{ background: 'linear-gradient(135deg, #B794F6, #60A5FA)' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] abstract-shape animate-abstract-4 parallax-slow"
          style={{ background: 'linear-gradient(135deg, #FB9A8B, #67E8F9)' }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="frosted-glass rounded-[40px] p-12 md:p-16 floating-card">
            <p className="text-lg sm:text-xl md:text-2xl text-[#1A1A2E]/85 leading-relaxed text-balance font-light" style={{ letterSpacing: '-0.01em' }}>
            I specialize in building scalable web applications using React, TypeScript, and robust backend systems. Currently, I'm pursuing a part-time master's degree, expanding my expertise into AI and machine learning to apply intelligent solutions to real-world challenges. I'm recognized for quickly mastering new technologies, collaborating seamlessly across teams, and delivering clean, maintainable code. I'm passionate about automation and streamlining processes, always looking for ways to innovate and enhance efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
