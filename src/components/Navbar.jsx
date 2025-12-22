import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-lg border-b border-orange-600/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-orange-500">&lt;</span>
            <span className="text-white">Dev</span>
            <span className="text-orange-500">/&gt;</span>
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;