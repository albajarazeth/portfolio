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
    <section id="freelance" className="py-[120px] px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F3FF 0%, #FDF2F8 50%, #ECFDF5 100%)' }}>
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] abstract-shape-2 animate-abstract-2 parallax-medium"
          style={{ background: 'linear-gradient(135deg, #FB9A8B, #B794F6)' }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[450px] h-[450px] abstract-shape animate-abstract-4"
          style={{ background: 'linear-gradient(135deg, #67E8F9, #F472B6)' }}
        />
        <div className="abstract-wave bottom-0 rotate-180" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
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
          Freelance Work
        </motion.h2>
        <div className="space-y-6">
          {freelanceRoles.map((role, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={`${role.title}-${index}`}
                className="overflow-hidden rounded-[40px] frosted-glass floating-card"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none rounded-[40px] transition-colors"
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A2E] mb-2" style={{ 
                      fontFamily: 'Poppins, Nunito, sans-serif',
                      fontWeight: 800,
                      letterSpacing: '-0.01em' 
                    }}>
                      {role.title}
                    </h3>
                    {role.subtitle && (
                      <p className="text-sm vibrant-text mb-2 font-semibold">
                        {role.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-[#1A1A2E]/65 uppercase tracking-wide font-medium" style={{ letterSpacing: '0.05em' }}>{role.stack}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <svg
                      className="w-5 h-5 vibrant-text"
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
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.8
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-white/30">
                        <ul className="space-y-4 mt-6">
                          {role.bullets.map((bullet, bulletIndex) => (
                            <motion.li
                              key={bulletIndex}
                              className="text-[#1A1A2E]/80 flex items-start text-sm sm:text-base leading-relaxed"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                                delay: bulletIndex * 0.05
                              }}
                            >
                              <span className="text-[#B794F6] mr-3 mt-2 flex-shrink-0 font-bold">—</span>
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
