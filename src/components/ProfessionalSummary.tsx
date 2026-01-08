import { motion } from 'framer-motion';

const ProfessionalSummary = () => {
  return (
    <section id="summary" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="clay-card rounded-[40px] p-8 md:p-12">
            <p className="text-lg sm:text-xl md:text-2xl text-[#333] leading-relaxed text-balance">
              Software Engineer with 3+ years of full-stack experience building scalable web applications using React, TypeScript, and backend systems. Currently pursuing a part-time master's and expanding into AI and machine learning to apply intelligent solutions to real-world problems. Recognized for quickly mastering new technologies, collaborating across teams, and delivering clean, maintainable solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
