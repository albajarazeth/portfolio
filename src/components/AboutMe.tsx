import { motion } from 'framer-motion';
import myPhoto from '../assets/my-photo.png';
import FloralPattern from './FloralPattern';

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDF2F8 0%, #ECFDF5 50%, #F0F9FF 100%)' }}>
      {/* Subtle Pink Floral Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloralPattern position="top" size="medium" />
        <FloralPattern position="bottom" size="medium" />
        <FloralPattern position="left" size="small" />
        <FloralPattern position="right" size="small" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-8 lg:px-12">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 lg:mb-24 text-center vibrant-text"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <motion.div
            className="order-2 lg:order-1 lg:col-span-5 lg:col-start-1 relative"
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-square rounded-[40px] overflow-hidden frosted-glass floating-card relative z-10">
              <img 
                src={myPhoto} 
                alt="Alba Garza" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6 relative lg:-mt-12"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="frosted-glass rounded-[40px] p-10 lg:p-12 floating-card relative z-20">
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
