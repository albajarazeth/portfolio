import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Flower icon component for the hamburger menu
const FlowerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
  >
    <defs>
      <radialGradient id="flowerMenuGradient" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#F472B6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#B794F6" stopOpacity="0.7" />
      </radialGradient>
    </defs>
    <g opacity={isOpen ? 0.9 : 0.8}>
      {/* 5 petals */}
      <ellipse cx="20" cy="10" rx="5" ry="8" fill="url(#flowerMenuGradient)" transform="rotate(0 20 20)" />
      <ellipse cx="20" cy="10" rx="5" ry="8" fill="url(#flowerMenuGradient)" transform="rotate(72 20 20)" />
      <ellipse cx="20" cy="10" rx="5" ry="8" fill="url(#flowerMenuGradient)" transform="rotate(144 20 20)" />
      <ellipse cx="20" cy="10" rx="5" ry="8" fill="url(#flowerMenuGradient)" transform="rotate(216 20 20)" />
      <ellipse cx="20" cy="10" rx="5" ry="8" fill="url(#flowerMenuGradient)" transform="rotate(288 20 20)" />
      {/* Center */}
      <circle cx="20" cy="20" r="4" fill="#EC4899" opacity="0.8" />
    </g>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 100);
  });

  // Also use scroll event as fallback
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click - scroll to section and close menu
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Small delay to let menu close animation start
      setTimeout(() => {
        const navbarHeight = 80; // Account for fixed navbar
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.7)' 
          : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(183, 148, 246, 0.15), 0 2px 8px rgba(251, 154, 139, 0.1)' 
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            className="text-xl font-bold transition-colors"
            style={{ 
              fontFamily: 'Clash Display, Space Grotesk, Poppins, Nunito, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#1A1A2E'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Alba Garza
          </motion.a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm transition-colors font-semibold tracking-wide uppercase cursor-pointer ${
                  isScrolled 
                    ? 'text-[#1A1A2E]/80 hover:text-[#B794F6]' 
                    : 'text-[#1A1A2E]/90 hover:text-[#B794F6]'
                }`}
                style={{ letterSpacing: '0.05em' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Flower Menu Button */}
          <motion.button
            className="md:hidden flex items-center justify-center p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
              boxShadow: '0 4px 12px rgba(183, 148, 246, 0.2)',
            }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <FlowerIcon isOpen={isMobileMenuOpen} />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              borderTop: '1px solid rgba(183, 148, 246, 0.2)',
            }}
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block py-3 px-4 text-base font-semibold text-[#1A1A2E]/90 hover:text-[#B794F6] transition-colors rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'Clash Display, Space Grotesk, Poppins, Nunito, sans-serif',
                    letterSpacing: '0.02em',
                  }}
                  whileHover={{
                    backgroundColor: 'rgba(183, 148, 246, 0.1)',
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
