import { motion } from 'framer-motion';
import { useState } from 'react';
import { SiJavascript, SiTypescript, SiReact, SiAngular } from 'react-icons/si';

const frontendTech = [
  { name: 'JavaScript', color: '#F7DF1E', glowClass: 'glow-orange', icon: SiJavascript },
  { name: 'TypeScript', color: '#3178C6', glowClass: 'glow-blue', icon: SiTypescript },
  { name: 'React', color: '#61DAFB', glowClass: 'glow-cyan', icon: SiReact },
  { name: 'Angular', color: '#DD0031', glowClass: 'glow-pink', icon: SiAngular },
];

const TechIcon = ({ tech, index }: { tech: typeof frontendTech[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center cursor-pointer"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, scale: 1.05 }}
      style={{ transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)' }}
    >
      <motion.div
        className="mb-4"
        animate={{
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <tech.icon 
          className={`text-6xl sm:text-7xl transition-all duration-300 ${isHovered ? tech.glowClass : ''}`}
          style={{ color: tech.color }}
        />
      </motion.div>
      <div className="text-sm font-semibold tracking-wide uppercase mt-2" style={{ letterSpacing: '0.05em', color: '#B794F6' }}>
        {tech.name}
      </div>
    </motion.div>
  );
};

const FrontendStack = () => {
  return (
    <section id="frontend" className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 50%, #FDF2F8 100%)' }}>
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
          Frontend Stack
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {frontendTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              style={{ 
                transform: index % 2 === 0 ? 'translateY(-20px)' : 'translateY(20px)',
              }}
            >
              <TechIcon tech={tech} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontendStack;
