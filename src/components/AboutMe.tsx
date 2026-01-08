import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="py-[120px] px-6 sm:px-8 lg:px-12 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background liquid auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/3 w-[800px] h-[800px] rounded-full opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #BF00FF 0%, transparent 70%)' }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full opacity-18 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FF8C69 0%, transparent 70%)' }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ letterSpacing: '-0.02em' }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden frosted-glass flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center text-white/10 text-8xl font-bold" style={{ letterSpacing: '-0.02em' }}>
                AG
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
            <div className="frosted-glass rounded-3xl p-10">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed space-y-6 font-light" style={{ letterSpacing: '-0.02em' }}>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
