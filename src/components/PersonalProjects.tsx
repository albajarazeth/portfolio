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
  },
  {
    title: 'Solarie',
    description: 'A grounding tool that helps you pause intrusive thoughts and find mental clarity',
    image: solarieImage,
    url: 'https://solarie.app/',
  },
  {
    title: 'RGV Computer Guys',
    description: 'Business website for computer services and support',
    image: rgvImage,
    url: 'https://rgv-computer-guys.vercel.app/',
  },
];

const PersonalProjects = () => {
  return (
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A148C] mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Personal Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[40px] clay-card cursor-pointer block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div className="aspect-video overflow-hidden relative rounded-t-[40px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF69B4] group-hover:to-[#BA68C8] transition-all">
                  {project.title}
                </h3>
                <p className="text-[#4A148C]">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
