import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { useRef, useState } from 'react';
import CVDownloadButton from './CVDownloadButton';

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
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'jarazethalba@gmail.com';

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailModalOpen(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleCloseModal = () => {
    setIsEmailModalOpen(false);
    setCopied(false);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FEF3F2 0%, #F5F3FF 50%, #ECFDF5 100%)' }}>
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
      
      <div className="max-w-5xl mx-auto text-center relative z-10 px-6 sm:px-8 lg:px-12">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 lg:mb-20 text-black"
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
          className="frosted-glass rounded-[40px] p-10 md:p-14 lg:p-16 mb-12 lg:mb-16 floating-card max-w-3xl mx-auto"
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
            <motion.button
              onClick={handleEmailClick}
              className="gradient-button px-10 py-4 text-sm font-bold uppercase tracking-wide cursor-pointer"
              style={{ letterSpacing: '0.05em' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Email
            </motion.button>
            <CVDownloadButton />
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

      {/* Email Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            />
            
            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            >
              <motion.div
                className="frosted-glass rounded-[32px] p-8 max-w-md w-full relative"
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-[#1A1A2E]" style={{ 
                    fontFamily: 'Clash Display, Space Grotesk, Poppins, Nunito, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '-0.01em'
                  }}>
                    Email Address
                  </h3>
                  
                  <div className="flex items-center justify-center gap-3">
                    <p 
                      className="text-lg text-[#1A1A2E]/90 font-medium select-all"
                      style={{ fontFamily: 'Google Sans, Inter, sans-serif' }}
                    >
                      {email}
                    </p>
                  </div>

                  <motion.button
                    onClick={handleCopyEmail}
                    className="gradient-button px-8 py-3 text-sm font-bold uppercase tracking-wide w-full cursor-pointer"
                    style={{ letterSpacing: '0.05em' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {copied ? 'Copied!' : 'Copy Email'}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
