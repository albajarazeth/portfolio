import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A148C] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Get in touch with me
        </motion.h2>
        <motion.div
          className="clay-card rounded-[40px] p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF69B4] hover:to-[#BA68C8] transition-all text-lg font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF69B4] hover:to-[#BA68C8] transition-all text-lg font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="mailto:jarazethalba@gmail.com"
              className="text-[#333] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#FF69B4] hover:to-[#BA68C8] transition-all text-lg font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              jarazethalba@gmail.com
            </motion.a>
          </div>
        </motion.div>
        <motion.footer
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF69B4] to-[#BA68C8]">
            Alba G.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
