import { motion } from 'framer-motion';
import myPhoto from '../assets/my-photo.png';

const AboutMe = () => {
  return (
    <section id="about" className="py-[120px] px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDF2F8 0%, #ECFDF5 50%, #F0F9FF 100%)' }}>
      {/* Abstract Modern Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/3 w-[600px] h-[600px] abstract-shape animate-abstract parallax-slow"
          style={{ background: 'linear-gradient(135deg, #F472B6, #FB9A8B)' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] abstract-shape-2 animate-abstract-2 parallax-medium"
          style={{ background: 'linear-gradient(135deg, #67E8F9, #B794F6)' }}
        />
        <div className="abstract-wave top-0" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-20 text-center vibrant-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            fontFamily: 'Poppins, Nunito, sans-serif',
            fontWeight: 900,
            letterSpacing: '-0.02em' 
          }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-square rounded-[40px] overflow-hidden frosted-glass floating-card">
              <img 
                src={myPhoto} 
                alt="Alba Garza" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="frosted-glass rounded-[40px] p-10 floating-card">
              <p className="text-lg sm:text-xl text-[#1A1A2E]/85 leading-relaxed space-y-6 font-light" style={{ letterSpacing: '-0.01em' }}>
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
