import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer Frontend - Lead',
    company: 'Towa – Easybee AI',
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
    <section id="experience" className="py-[120px] px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #FEF3F2 50%, #F5F3FF 100%)' }}>
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] abstract-shape animate-abstract parallax-slow"
          style={{ background: 'linear-gradient(135deg, #B794F6, #F472B6)' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[550px] h-[550px] abstract-shape-2 animate-abstract-2 parallax-medium"
          style={{ background: 'linear-gradient(135deg, #FB9A8B, #67E8F9)' }}
        />
        <div className="abstract-wave bottom-0 rotate-180" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
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
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className="frosted-glass rounded-[40px] p-10 floating-card interactive-glow"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-2" style={{ 
                  fontFamily: 'Poppins, Nunito, sans-serif',
                  fontWeight: 800,
                  letterSpacing: '-0.01em' 
                }}>{exp.title}</h3>
                <p className="text-lg vibrant-text mb-3 font-semibold">{exp.company}</p>
                <p className="text-sm text-[#1A1A2E]/65 uppercase tracking-wide font-medium" style={{ letterSpacing: '0.05em' }}>{exp.stack}</p>
              </div>
              <ul className="space-y-4">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <motion.li
                    key={bulletIndex}
                    className="text-[#1A1A2E]/85 flex items-start gap-4 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + bulletIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className="text-[#B794F6] mt-2 flex-shrink-0 font-bold">—</span>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
