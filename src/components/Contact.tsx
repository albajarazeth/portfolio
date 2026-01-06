import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Get in touch with me
        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-accent transition-colors text-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-accent transition-colors text-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="mailto:jarazethalba@gmail.com"
            className="text-gray-300 hover:text-pink-accent transition-colors text-lg font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            jarazethalba@gmail.com
          </motion.a>
        </motion.div>
      </div>
      <motion.footer
        className="mt-24 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-2xl font-bold text-gray-400">Alba G.</p>
      </motion.footer>
    </section>
  );
};

export default Contact;

