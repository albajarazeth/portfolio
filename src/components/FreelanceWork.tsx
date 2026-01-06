import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const freelanceRoles = [
  {
    title: 'Web Developer',
    stack: 'React, JavaScript, WordPress, Squarespace, Shopify, CSS',
    bullets: [
      'Develop, design, and maintain responsive websites for small businesses, optimizing for usability and performance',
      'Customize and deploy sites across CMS platforms including WordPress, Squarespace, and Shopify',
      'Implement design updates and functionality enhancements to align with client goals and brand identity',
    ],
  },
  {
    title: 'Blog Content Writer & SEO Specialist',
    stack: 'SquareSpace, WordPress, Google Analytics, SEO Tools',
    bullets: [
      'Write, publish, and optimize blog articles to boost search visibility and audience engagement',
      'Manage on-page SEO, metadata, and indexing to ensure content ranks effectively on search engines',
      'Conduct keyword research and monitor analytics to refine content strategy and performance',
    ],
  },
  {
    title: 'Project Manager',
    stack: 'Asana, WordPress',
    bullets: [
      'Directed and prioritized a portfolio of up to 20 website projects, ensuring timely delivery and alignment with client objectives',
      'Partnered with clients to develop creative ideas and strategic recommendations, shaping websites that reflected brand vision and business goals',
      'Translated client requirements into actionable project roadmaps, balancing technical feasibility with strategic impact',
      'Managed developers, clarified requirements, and ensured technical execution met project standards',
      'Coordinated timelines, tracked progress, and maintained communication between clients, designers, and developers',
    ],
  },
  {
    title: 'Software Developer & Data Analyst',
    subtitle: 'AWS Email Marketing & SEO System',
    stack: 'AWS, Python, SEO Tools, Google Analytics',
    bullets: [
      'Designed and developed an automated email marketing and SEO campaign system hosted on AWS',
      'Used AWS Lambda functions, AWS CloudWatch, AWS SES',
      'Managed campaign execution, analytics tracking, and performance reporting',
      'Improved campaign efficiency by creating internal tools for report making as well as Google Analytics',
    ],
  },
  {
    title: 'Software Engineer AI Trainer',
    stack: 'React, TypeScript, JavaScript, HTML, CSS, Python, Plotly',
    bullets: [
      'Performed QA and code reviews of LLM outputs for code generation and software development tasks, verifying correctness and identifying failure cases',
      'Applied prompt engineering to guide the model toward producing reliable, task-specific programming solutions',
      'Compared and evaluated programming responses across prompts to identify strengths, weaknesses, and areas for improvement',
    ],
  },
];

const FreelanceWork = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="freelance" className="py-24 px-6 sm:px-8 lg:px-12 bg-dark-bg-alt">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Freelance Work
        </motion.h2>
        <div className="space-y-4">
          {freelanceRoles.map((role, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={`${role.title}-${index}`}
                className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800/30 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ borderColor: '#E91E63' }}
              >
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-pink-accent focus:ring-offset-2 focus:ring-offset-dark-bg-alt rounded-xl"
                  whileHover={{ backgroundColor: 'rgba(233, 30, 99, 0.05)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-1">
                      {role.title}
                    </h3>
                    {role.subtitle && (
                      <p className="text-sm text-pink-accent mb-2">{role.subtitle}</p>
                    )}
                    <p className="text-xs text-gray-400">{role.stack}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <svg
                      className="w-6 h-6 text-pink-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-700/50">
                        <ul className="space-y-3 mt-4">
                          {role.bullets.map((bullet, bulletIndex) => (
                            <motion.li
                              key={bulletIndex}
                              className="text-gray-300 flex items-start text-sm sm:text-base"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: bulletIndex * 0.1 }}
                            >
                              <span className="text-pink-accent mr-3 mt-1.5 flex-shrink-0">▸</span>
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreelanceWork;

