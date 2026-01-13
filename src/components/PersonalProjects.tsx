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
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDF2F8 0%, #F0F9FF 50%, #F5F3FF 100%)' }}>
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] abstract-shape animate-abstract parallax-slow"
          style={{ background: 'linear-gradient(135deg, #F472B6, #B794F6)' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] abstract-shape-2 animate-abstract-2 parallax-medium"
          style={{ background: 'linear-gradient(135deg, #60A5FA, #67E8F9)' }}
        />
        <div className="abstract-wave top-0" />
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
          Personal Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-[40px] frosted-glass floating-card interactive-glow block ${project.size} ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transform: index % 3 === 1 ? 'translateY(-15px)' : index % 3 === 2 ? 'translateY(15px)' : 'none',
              }}
            >
              <div className="aspect-video overflow-hidden relative rounded-t-[40px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 group-hover:vibrant-text transition-all" style={{ 
                  fontFamily: 'Poppins, Nunito, sans-serif',
                  fontWeight: 800,
                  letterSpacing: '-0.01em' 
                }}>
                  {project.title}
                </h3>
                <p className="text-sm text-[#1A1A2E]/75 leading-relaxed">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
