import { motion } from 'framer-motion';
import dashboardImage from '../assets/dashboard.png';
import solarieImage from '../assets/solarie.png';
import rgvImage from '../assets/rgv.png';

const projects = [
  {
    title: 'SpaceX Mission Control Dashboard',
    description: 'Real-time dashboard tracking rocket launches, success rates, and mission analytics',
    image: dashboardImage,
    url: 'https://spacex-mission-control-i7lg.vercel.app/dashboard',
    size: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Solarie',
    description: 'A grounding tool that helps you pause intrusive thoughts and find mental clarity',
    image: solarieImage,
    url: 'https://solarie.app/',
    size: 'col-span-1',
  },
  {
    title: 'RGV Computer Guys',
    description: 'Business website for computer services and support',
    image: rgvImage,
    url: 'https://rgv-computer-guys.vercel.app/',
    size: 'col-span-1',
  },
];

const PersonalProjects = () => {
  return (
    <section id="projects" className="py-[120px] px-6 sm:px-8 lg:px-12 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background liquid auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[900px] h-[900px] rounded-full opacity-25 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)' }}
          animate={{
            x: [0, 70, 0],
            y: [0, -70, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[800px] h-[800px] rounded-full opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #BF00FF 0%, #FF8C69 50%, transparent 70%)' }}
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 35,
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
          Personal Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl frosted-glass frosted-glass-hover block ${project.size}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-video overflow-hidden relative rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF1493] transition-colors" style={{ letterSpacing: '-0.02em' }}>
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
