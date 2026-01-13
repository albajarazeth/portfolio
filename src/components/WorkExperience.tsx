import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import FloralPattern from './FloralPattern';

const experiences = [
  {
    title: 'Software Engineer Frontend - Lead',
    company: 'Towa - Easybee AI',
    stack: 'React, TypeScript, FastAPI, SQL, JavaScript, HTML, CSS',
    bullets: [
      'Owned the frontend architecture and UI/UX direction for AI agent products, acting as the primary decision-maker for workflows and interface design',
      'Led frontend development and partnered with UI/UX designers to review, approve, and refine designs for usability, scalability, and consistency',
      'Took ownership of key initiatives, including analytics dashboards for tracking AI agent performance and usage',
      'Translated complex AI system data into clear, actionable user experiences, collaborating cross-functionally and leading stakeholder demos. Used tools like cursor for faster development.',
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'Medallia',
    stack: 'React, TypeScript, JavaScript, HTML, SCSS, Java, Spring Boot, PostgreSQL',
    bullets: [
      'Maintained and enhanced survey form applications in a monorepo using React + TypeScript',
      'Built scalable, WCAG-compliant frontend features',
      'Developed Chrome Extension UI and internal configuration tools',
      'Migrated authentication workflows (Okta, generic configs)',
      'Investigated frontend issues that revealed backend/API problems',
      'Migrated legacy Angular apps to React',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Encora (Imagine Learning)',
    stack: 'React, TypeScript, REST APIs, Jest, Cypress',
    bullets: [
      'Built e-learning features (passages, questions, assessments)',
      'Integrated frontend with REST APIs (microservices)',
      'Improved accessibility and responsiveness',
      'Fixed production bugs and collaborated with QA',
      'CI/CD contributions',
      'Jest + Cypress testing',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Neoris',
    stack: 'React, Java, PostgreSQL, JSP',
    bullets: [
      'Internal tools with React, Java, PostgreSQL',
      'Backend endpoints with Java & JSP',
      'Component modularization and UI consistency',
      'Agile teamwork and API integration',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #FEF3F2 50%, #F5F3FF 100%)' }}>
      {/* Subtle Pink Floral Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <FloralPattern position="top" size="large" />
        <FloralPattern position="bottom" size="large" />
        <FloralPattern position="left" size="medium" />
        <FloralPattern position="right" size="medium" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-8 lg:px-12">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 lg:mb-24 text-center vibrant-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ 
            fontFamily: 'Clash Display, Space Grotesk, Poppins, Nunito, sans-serif',
            fontWeight: 600,
            letterSpacing: '-0.015em' 
          }}
        >
          Work Experience
        </motion.h2>
        
        {/* Glassmorphism Container Lane */}
        <div className="max-w-6xl mx-auto">
          <div className="frosted-glass rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
            {/* Ambient glow wash */}
            <div className="absolute inset-0 rounded-[40px] pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(183, 148, 246, 0.05), rgba(244, 114, 182, 0.05), rgba(103, 232, 249, 0.05))',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }} />

            <div className="relative z-10 flex flex-col gap-12 lg:gap-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col gap-6 lg:gap-8 ${index % 2 === 0 ? 'lg:items-start' : 'lg:items-end'}`}
                >
                  {/* Orbital anchor */}
                  <div className="absolute -z-0" style={{
                    top: '-16px',
                    left: index % 2 === 0 ? '-32px' : 'auto',
                    right: index % 2 !== 0 ? '-32px' : 'auto',
                    width: '160px',
                    height: '160px',
                    filter: 'blur(40px)',
                    background: index % 2 === 0
                      ? 'radial-gradient(circle, rgba(183,148,246,0.35), rgba(244,114,182,0.25), rgba(103,232,249,0.2))'
                      : 'radial-gradient(circle, rgba(244,114,182,0.35), rgba(103,232,249,0.25), rgba(183,148,246,0.2))'
                  }} />

                  {/* Role content */}
                  <div className="frosted-glass rounded-[32px] p-6 lg:p-8 floating-card max-w-3xl w-full" style={{
                    boxShadow: '0 18px 48px rgba(183,148,246,0.2), 0 6px 18px rgba(244,114,182,0.14), inset 0 1px 0 rgba(255,255,255,0.7)'
                  }}>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full frosted-glass flex-shrink-0" style={{
                          boxShadow: '0 8px 22px rgba(183,148,246,0.35), 0 0 18px rgba(244,114,182,0.25)'
                        }}>
                          <FiBriefcase className="text-[#B794F6] text-xl" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A2E] mb-2" style={{ 
                            fontFamily: 'Poppins, Nunito, sans-serif',
                            fontWeight: 800,
                            letterSpacing: '-0.01em',
                            lineHeight: '1.2'
                          }}>
                            {exp.title}
                          </h3>
                          <p className="text-lg lg:text-xl vibrant-text font-semibold mb-2">{exp.company}</p>
                          <p className="text-xs sm:text-sm text-[#1A1A2E]/65 uppercase tracking-wide font-medium" style={{ letterSpacing: '0.05em' }}>
                            {exp.stack}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3 lg:space-y-3.5 mt-6">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bulletIndex}
                            className="text-sm sm:text-base lg:text-base text-[#1A1A2E]/90 flex items-start gap-3 leading-relaxed"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -6 : 6 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.08 + bulletIndex * 0.04, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <span className="text-[#B794F6] mt-1.5 flex-shrink-0 font-bold text-base">-</span>
                            <span className="flex-1">{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Connector accent except last */}
                  {index < experiences.length - 1 && (
                    <motion.div
                      className="w-full flex justify-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="h-16 lg:h-20 w-px relative">
                        <div className="absolute inset-0 w-[3px] rounded-full" style={{
                          background: 'linear-gradient(180deg, rgba(183,148,246,0.35), rgba(244,114,182,0.25), rgba(103,232,249,0.2))',
                          boxShadow: '0 0 18px rgba(183,148,246,0.4)'
                        }} />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
