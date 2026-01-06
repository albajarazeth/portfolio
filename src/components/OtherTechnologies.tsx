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
  'Canva': null, // No icon available
};

const techCategories = [
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Jenkins', 'CI/CD', 'Git'],
  },
  {
    title: 'Testing',
    items: ['Jest', 'Cypress', 'JUnit', 'Postman'],
  },
  {
    title: 'Website Builders',
    items: ['Squarespace', 'Shopify', 'WordPress'],
  },
  {
    title: 'Tools',
    items: ['Jira', 'Asana', 'Confluence', 'Figma', 'Canva'],
  },
];

const OtherTechnologies = () => {
  return (
    <section id="other-tech" className="py-24 px-6 sm:px-8 lg:px-12 bg-dark-bg-alt">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Other Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-pink-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, itemIndex) => {
                  const Icon = iconMap[item];
                  return (
                    <motion.span
                      key={item}
                      className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium border border-gray-700 flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        borderColor: '#E91E63',
                        backgroundColor: '#1a1a1a'
                      }}
                    >
                      {Icon && <Icon className="text-base" />}
                      <span>{item}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTechnologies;

