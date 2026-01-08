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
    <section id="experience" className="py-[120px] px-6 sm:px-8 lg:px-12 bg-[#0D0D0D] relative overflow-hidden">
      {/* Liquid auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[900px] h-[900px] rounded-full opacity-25 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #BF00FF 0%, #FF1493 50%, transparent 70%)' }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[800px] h-[800px] rounded-full opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FF1493 0%, #FF8C69 50%, transparent 70%)' }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ letterSpacing: '-0.02em' }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className="floating-pane rounded-3xl p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ letterSpacing: '-0.02em' }}>{exp.title}</h3>
                <p className="text-lg text-[#FF1493] mb-3 font-semibold">{exp.company}</p>
                <p className="text-sm text-white/50 uppercase tracking-wide font-medium" style={{ letterSpacing: '0.05em' }}>{exp.stack}</p>
              </div>
              <ul className="space-y-4">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <motion.li
                    key={bulletIndex}
                    className="text-white/80 flex items-start gap-4 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + bulletIndex * 0.05 }}
                  >
                    <span className="text-[#FF1493] mt-2 flex-shrink-0">—</span>
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
