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
    <section id="contact" className="py-[120px] px-6 sm:px-8 lg:px-12 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background liquid auras */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full opacity-20 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FF1493 0%, #BF00FF 50%, transparent 70%)' }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] rounded-full opacity-15 blur-[140px]"
          style={{ background: 'radial-gradient(circle, #FF8C69 0%, transparent 70%)' }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ letterSpacing: '-0.02em' }}
        >
          Get in touch
        </motion.h2>
        <motion.div
          className="frosted-glass rounded-3xl p-12 md:p-16 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <MagneticButton
              href="https://linkedin.com/in/albajarazeth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/15 transition-all uppercase tracking-wide border border-white/20"
              style={{ letterSpacing: '0.05em' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </MagneticButton>
            <MagneticButton
              href="https://github.com/albajarazeth"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/15 transition-all uppercase tracking-wide border border-white/20"
              style={{ letterSpacing: '0.05em' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </MagneticButton>
            <MagneticButton
              href="mailto:jarazethalba@gmail.com"
              className="px-10 py-4 bg-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/15 transition-all uppercase tracking-wide border border-white/20"
              style={{ letterSpacing: '0.05em' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg font-bold text-white/60" style={{ letterSpacing: '-0.02em' }}>
            Alba Garza
          </p>
          <p className="mt-2 text-sm text-white/40">&copy; {new Date().getFullYear()} Alba Garza. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
