import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaJava } from 'react-icons/fa';
import { SiSpring, SiPython, SiDjango } from 'react-icons/si';

const backendTech = [
  { name: 'Java', color: '#ED8B00', glowClass: 'glow-orange', icon: FaJava },
  { name: 'Spring Boot', color: '#6DB33F', glowClass: 'glow-green', icon: SiSpring },
  { name: 'Python', color: '#3776AB', glowClass: 'glow-blue', icon: SiPython },
  { name: 'Django', color: '#092E20', glowClass: 'glow-green', icon: SiDjango },
];

const TechIcon = ({ tech, index }: { tech: typeof backendTech[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
      <div className="text-sm text-white/60 font-semibold tracking-wide uppercase mt-2" style={{ letterSpacing: '0.05em' }}>
        {tech.name}
      </div>
    </motion.div>
  );
};

const BackendStack = () => {
  return (
    <section id="backend" className="py-[120px] px-6 sm:px-8 lg:px-12 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background liquid auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[700px] h-[700px] rounded-full opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #BF00FF 0%, transparent 70%)' }}
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ letterSpacing: '-0.02em' }}
        >
          Backend Stack
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 md:gap-16">
          {backendTech.map((tech, index) => (
            <TechIcon key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendStack;
