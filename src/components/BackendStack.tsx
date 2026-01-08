import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { SiSpring, SiPython, SiDjango } from 'react-icons/si';

const backendTech = [
  { name: 'Java', years: '2+ years', color: '#ED8B00', icon: FaJava },
  { name: 'Spring Boot', years: '2+ years', color: '#6DB33F', icon: SiSpring },
  { name: 'Python', years: '<1 year', color: '#3776AB', icon: SiPython },
  { name: 'Django', years: '2 months', color: '#092E20', icon: SiDjango },
];

const BackendStack = () => {
  return (
    <section id="backend" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A148C] mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Backend Stack
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {backendTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="clay-card rounded-[40px] p-8 cursor-pointer flex flex-col items-center justify-center relative transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative z-10 mb-4">
                <tech.icon 
                  className="text-5xl sm:text-6xl transition-transform duration-300"
                  style={{ color: tech.color }}
                />
              </div>
              
              <div className="text-2xl sm:text-3xl font-bold text-[#333] mb-2 relative z-10">
                {tech.name}
              </div>
              <div className="text-base sm:text-lg text-[#4A148C] relative z-10">
                {tech.years}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendStack;
