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

// Brand colors for gradient borders and inner glow
const techColors: { [key: string]: { gradient: string, glow: string } } = {
  'AWS': { gradient: 'linear-gradient(135deg, #FF9900, #FF6600)', glow: 'rgba(255, 153, 0, 0.2)' },
  'Docker': { gradient: 'linear-gradient(135deg, #0db7ed, #0066cc)', glow: 'rgba(13, 183, 237, 0.2)' },
  'Jenkins': { gradient: 'linear-gradient(135deg, #D24939, #8B0000)', glow: 'rgba(210, 73, 57, 0.2)' },
  'CI/CD': { gradient: 'linear-gradient(135deg, #F05032, #C73E1D)', glow: 'rgba(240, 80, 50, 0.2)' },
  'Git': { gradient: 'linear-gradient(135deg, #F05032, #C73E1D)', glow: 'rgba(240, 80, 50, 0.2)' },
  'Jest': { gradient: 'linear-gradient(135deg, #C21325, #8B0000)', glow: 'rgba(194, 19, 37, 0.2)' },
  'Cypress': { gradient: 'linear-gradient(135deg, #17202C, #5A5A5A)', glow: 'rgba(23, 32, 44, 0.2)' },
  'JUnit': { gradient: 'linear-gradient(135deg, #C21325, #8B0000)', glow: 'rgba(194, 19, 37, 0.2)' },
  'Postman': { gradient: 'linear-gradient(135deg, #FF6C37, #FF4500)', glow: 'rgba(255, 108, 55, 0.2)' },
  'Squarespace': { gradient: 'linear-gradient(135deg, #000000, #333333)', glow: 'rgba(0, 0, 0, 0.2)' },
  'Shopify': { gradient: 'linear-gradient(135deg, #96BF48, #5E8E3E)', glow: 'rgba(150, 191, 72, 0.2)' },
  'WordPress': { gradient: 'linear-gradient(135deg, #21759B, #0F4C75)', glow: 'rgba(33, 117, 155, 0.2)' },
  'Jira': { gradient: 'linear-gradient(135deg, #0052CC, #003D99)', glow: 'rgba(0, 82, 204, 0.2)' },
  'Asana': { gradient: 'linear-gradient(135deg, #F06A6A, #E84A5F)', glow: 'rgba(240, 106, 106, 0.2)' },
  'Confluence': { gradient: 'linear-gradient(135deg, #172B4D, #0052CC)', glow: 'rgba(23, 43, 77, 0.2)' },
  'Figma': { gradient: 'linear-gradient(135deg, #F24E1E, #A259FF)', glow: 'rgba(242, 78, 30, 0.2)' },
  'Canva': { gradient: 'linear-gradient(135deg, #00C4CC, #00A8B5)', glow: 'rgba(0, 196, 204, 0.2)' },
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

const TechBadge = ({ item, index }: { item: string, index: number }) => {
  const Icon = iconMap[item];
  const colors = techColors[item] || { gradient: 'linear-gradient(135deg, #666, #999)', glow: 'rgba(100, 100, 100, 0.2)' };

  return (
    <motion.span
      className="relative px-4 py-2 text-sm font-bold rounded-full overflow-hidden group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        border: `1px solid rgba(183, 148, 246, 0.5)`,
        boxShadow: `inset 0 0 20px ${colors.glow}, 0 4px 12px rgba(183, 148, 246, 0.3)`,
        color: '#1A1A2E',
      }}
    >
      <span 
        className="absolute inset-0 rounded-full opacity-70"
        style={{
          background: colors.gradient,
          filter: 'blur(3px)',
          zIndex: -1,
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {Icon && (
          <Icon className="text-base" style={{ color: '#1A1A2E' }} />
        )}
        <span style={{ color: '#1A1A2E', fontWeight: 700 }}>{item}</span>
      </span>
    </motion.span>
  );
};

const OtherTechnologies = () => {
  return (
    <section id="other-tech" className="py-[120px] px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #F0F9FF 50%, #F5F3FF 100%)' }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-20 text-center vibrant-text"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`frosted-glass rounded-[40px] p-8 floating-card ${category.size}`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-6 uppercase tracking-wide text-sm" style={{ 
                fontFamily: 'Poppins, Nunito, sans-serif',
                fontWeight: 800,
                letterSpacing: '0.05em' 
              }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, itemIndex) => (
                  <TechBadge key={item} item={item} index={itemIndex} />
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
