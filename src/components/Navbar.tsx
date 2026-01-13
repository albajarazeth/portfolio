import { motion } from 'framer-motion';

const Navbar = () => {
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 frosted-glass border-b border-white/30"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            className="text-xl font-bold transition-colors"
            style={{ 
              fontFamily: 'Clash Display, Space Grotesk, Poppins, Nunito, sans-serif',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: '#0F0F1E'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Alba Garza
          </motion.a>
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm text-[#1A1A2E]/80 hover:text-[#B794F6] transition-colors font-semibold tracking-wide uppercase"
                style={{ letterSpacing: '0.05em' }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
