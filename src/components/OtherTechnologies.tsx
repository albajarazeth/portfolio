import { motion } from 'framer-motion';
import { 
  SiAmazon, SiDocker, SiJenkins, SiGit, 
  SiJest, SiCypress, SiPostman,
  SiWordpress, SiShopify,
  SiJira, SiFigma, SiConfluence
} from 'react-icons/si';
import { FaSquarespace } from 'react-icons/fa';
import { TbBrandAsana } from 'react-icons/tb';

const iconMap: { [key: string]: any } = {
  'AWS': SiAmazon,
  'Docker': SiDocker,
  'Jenkins': SiJenkins,
  'CI/CD': SiGit,
  'Git': SiGit,
  'Jest': SiJest,
  'Cypress': SiCypress,
  'JUnit': SiJest,
  'Postman': SiPostman,
  'Squarespace': FaSquarespace,
  'Shopify': SiShopify,
  'WordPress': SiWordpress,
  'Jira': SiJira,
  'Asana': TbBrandAsana,
  'Confluence': SiConfluence,
  'Figma': SiFigma,
  'Canva': null,
};

const techCategories = [
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Jenkins', 'CI/CD', 'Git'],
    size: 'col-span-1 md:col-span-2',
  },
  {
    title: 'Testing',
    items: ['Jest', 'Cypress', 'JUnit', 'Postman'],
    size: 'col-span-1',
  },
  {
    title: 'Website Builders',
    items: ['Squarespace', 'Shopify', 'WordPress'],
    size: 'col-span-1',
  },
  {
    title: 'Tools',
    items: ['Jira', 'Asana', 'Confluence', 'Figma', 'Canva'],
    size: 'col-span-1 md:col-span-2',
  },
];

const TechBadge = ({ item }: { item: string }) => {
  const Icon = iconMap[item];

  return (
    <span
      className="relative px-4 py-2 text-sm font-bold rounded-full overflow-hidden group"
      style={{
        opacity: 1,
        background: 'rgba(255, 255, 255, 0.95)',
        border: '2px solid rgba(183, 148, 246, 0.9)',
        boxShadow: 'inset 0 0 20px rgba(183, 148, 246, 0.15), 0 8px 24px rgba(183, 148, 246, 0.3), 0 4px 12px rgba(183, 148, 246, 0.2)',
      }}
    >
      <span className="relative z-10 flex items-center gap-2 tech-pill-text">
        {Icon && (
          <Icon className="text-base tech-pill-icon" />
        )}
        <span className="tech-pill-text" style={{ fontWeight: 800 }}>{item}</span>
      </span>
    </span>
  );
};

const OtherTechnologies = () => {
  return (
    <section id="other-tech" className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #F0F9FF 50%, #F5F3FF 100%)' }}>
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
          Other Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`frosted-glass rounded-[40px] p-8 floating-card ${category.size} relative`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transform: categoryIndex % 3 === 1 ? 'translateY(-20px)' : categoryIndex % 3 === 2 ? 'translateY(20px)' : 'none',
              }}
            >
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-6 uppercase tracking-wide text-sm" style={{ 
                fontFamily: 'Poppins, Nunito, sans-serif',
                fontWeight: 800,
                letterSpacing: '0.05em' 
              }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <TechBadge key={item} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTechnologies;
