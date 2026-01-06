import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 bg-dark-bg-alt">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-4xl">
                {/* Placeholder for image - replace with actual image */}
                <span>AG</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed space-y-6">
              <span>
                I'm a Software Engineer who loves building things people actually enjoy using. Whether it's automating a process or designing something that just looks and feels right, I'm all about creating clean, thoughtful experiences.
              </span>
              <span>
                I'm currently pursuing my master's in Artificial Intelligence to expand my skills and explore how smart tech can make everyday life a little smoother. I'm currently working on creating full-stack applications that integrate AI models, combining intelligent functionality with intuitive design.
              </span>
              <span>
                I enjoy working across different areas and switching things up — I believe you're worth what you know, and I'm always learning something new.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

