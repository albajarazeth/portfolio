import { motion } from 'framer-motion';
import { SiJavascript, SiTypescript, SiReact, SiAngular } from 'react-icons/si';

const frontendTech = [
  { name: 'JavaScript', years: '3+ years', color: 'bg-yellow-400', textColor: 'text-black', icon: SiJavascript },
  { name: 'TypeScript', years: '3+ years', color: 'bg-blue-600', textColor: 'text-white', icon: SiTypescript },
  { name: 'React', years: '3+ years', color: 'bg-cyan-500', textColor: 'text-white', icon: SiReact },
  { name: 'Angular', years: '1 year', color: 'bg-red-600', textColor: 'text-white', icon: SiAngular },
];

const FrontendStack = () => {
  return (
    <section id="frontend" className="py-24 px-6 sm:px-8 lg:px-12 bg-dark-bg-alt">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-16 text-center"
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
              className={`${tech.color} ${tech.textColor} p-8 rounded-2xl font-bold text-3xl sm:text-4xl shadow-lg cursor-pointer flex flex-col items-center justify-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, shadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <tech.icon className="text-5xl sm:text-6xl mb-4" />
              <div className="mb-4">{tech.name}</div>
              <div className="text-lg sm:text-xl opacity-90">{tech.years}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontendStack;

