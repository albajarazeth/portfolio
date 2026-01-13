import { motion } from 'framer-motion';

const ProfessionalSummary = () => {
  return (
    <section id="summary" className="py-[120px] px-6 sm:px-8 lg:px-12 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background liquid auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FF8C69 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-[700px] h-[700px] rounded-full opacity-15 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)' }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="frosted-glass rounded-3xl p-12 md:p-16">
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed text-balance font-light" style={{ letterSpacing: '-0.02em' }}>
            I specialize in building scalable web applications using React, TypeScript, and robust backend systems. Currently, I'm pursuing a part-time master's degree, expanding my expertise into AI and machine learning to apply intelligent solutions to real-world challenges. I’m recognized for quickly mastering new technologies, collaborating seamlessly across teams, and delivering clean, maintainable code. I’m passionate about automation and streamlining processes, always looking for ways to innovate and enhance efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
