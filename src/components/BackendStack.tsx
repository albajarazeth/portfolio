import { motion } from 'framer-motion';
import { FaJava } from 'react-icons/fa';
import { SiSpring, SiPython, SiDjango } from 'react-icons/si';

const backendTech = [
  { name: 'Java', years: '2+ years', color: 'bg-orange-500', textColor: 'text-white', icon: FaJava },
  { name: 'Spring Boot', years: '2+ years', color: 'bg-green-600', textColor: 'text-white', icon: SiSpring },
  { name: 'Python', years: '<1 year', color: 'bg-blue-500', textColor: 'text-white', icon: SiPython },
  { name: 'Django', years: '2 months', color: 'bg-emerald-700', textColor: 'text-white', icon: SiDjango },
];

const BackendStack = () => {
  return (
    <section id="backend" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-16 text-center"
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
              className={`${tech.color} ${tech.textColor} p-8 rounded-2xl font-bold text-3xl sm:text-4xl shadow-lg cursor-pointer flex flex-col items-center justify-center hover:shadow-2xl transition-shadow`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
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

export default BackendStack;

