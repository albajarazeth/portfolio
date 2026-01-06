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
    <section id="experience" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className="border-l-2 border-pink-accent pl-8 pb-12 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-accent rounded-full"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-2">{exp.title}</h3>
              <p className="text-xl text-pink-accent mb-4">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-6">{exp.stack}</p>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <motion.li
                    key={bulletIndex}
                    className="text-gray-300 flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + bulletIndex * 0.1 }}
                  >
                    <span className="text-pink-accent mr-3 mt-1">•</span>
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

