import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { useRef } from 'react';

interface MagneticButtonProps extends Omit<HTMLMotionProps<'a'>, 'ref'> {
  children: React.ReactNode;
  href: string;
}

const MagneticButton = ({ children, href, ...props }: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const maxDistance = 100;
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance;
      x.set(distanceX * strength * 0.3);
      y.set(distanceY * strength * 0.3);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic-button relative z-10"
      {...props}
    >
      {children}
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-[120px] px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FEF3F2 0%, #F5F3FF 50%, #ECFDF5 100%)' }}>
      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] abstract-shape-3 animate-abstract-3"
          style={{ background: 'linear-gradient(135deg, #B794F6, #F472B6, #FB9A8B)' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] abstract-shape animate-abstract-4 parallax-slow"
          style={{ background: 'linear-gradient(135deg, #67E8F9, #60A5FA)' }}
        />
        <div className="abstract-wave bottom-0 rotate-180" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-16 vibrant-text"
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
          Get in touch
        </motion.h2>
        <motion.div
          className="frosted-glass rounded-[40px] p-12 md:p-16 mb-16 floating-card"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <MagneticButton
              href="https://www.linkedin.com/in/albajarazet/"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-10 py-4 text-sm font-bold uppercase tracking-wide"
              style={{ letterSpacing: '0.05em' }}
            >
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href="https://github.com/albajarazeth"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-10 py-4 text-sm font-bold uppercase tracking-wide"
              style={{ letterSpacing: '0.05em' }}
            >
              GitHub
            </MagneticButton>
            <MagneticButton
              href="mailto:jarazethalba@gmail.com"
              className="gradient-button px-10 py-4 text-sm font-bold uppercase tracking-wide"
              style={{ letterSpacing: '0.05em' }}
            >
              Email
            </MagneticButton>
          </div>
        </motion.div>
        <motion.footer
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg font-bold text-[#1A1A2E]/75" style={{ 
            fontFamily: 'Poppins, Nunito, sans-serif',
            fontWeight: 800,
            letterSpacing: '-0.01em' 
          }}>
            Alba Garza
          </p>
          <p className="mt-2 text-sm text-[#1A1A2E]/60">&copy; {new Date().getFullYear()} Alba Garza. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
