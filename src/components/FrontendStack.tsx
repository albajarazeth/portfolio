import { motion } from 'framer-motion';
import { SiJavascript, SiTypescript, SiReact, SiAngular } from 'react-icons/si';

const frontendTech = [
  { name: 'JavaScript', years: '3+ years', color: '#F7DF1E', icon: SiJavascript },
  { name: 'TypeScript', years: '3+ years', color: '#3178C6', icon: SiTypescript },
  { name: 'React', years: '3+ years', color: '#61DAFB', icon: SiReact },
  { name: 'Angular', years: '1 year', color: '#DD0031', icon: SiAngular },
];

const FrontendStack = () => {
  return (
    <section id="frontend" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A148C] mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Frontend Stack
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {frontendTech.map((tech, index) => (
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

export default FrontendStack;
