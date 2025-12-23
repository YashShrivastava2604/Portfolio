// src/components/Hero.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden pt-24 px-4 md:px-10 lg:px-20 flex items-center"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-32 w-80 h-80 bg-orange-600/18 rounded-full blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] w-[26rem] h-[26rem] bg-red-600/14 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT */}
        <div className="flex-1 text-left">
          <motion.p
            className="text-orange-400 font-semibold text-sm sm:text-base mb-3"
            variants={itemVariants}
          >
            Hey, welcome! 👋
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-6"
            variants={itemVariants}
          >
            I Build Digital
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
              Experiences
            </span>
            <br />
            That Actually Ship
          </motion.h1>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8"
            variants={itemVariants}
          >
            Final-year Computer Science student learning and building real-world
            full-stack applications using modern web technologies. I enjoy
            turning ideas into clean, reliable products with thoughtful UI,
            scalable APIs, and smooth animations.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-start"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-7 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-7 sm:px-8 py-3 sm:py-4 border-2 border-orange-500/60 text-orange-400 rounded-lg font-semibold hover:bg-orange-600/10 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
  className="relative w-full max-w-sm"
  whileHover={{ scale: 1.02, translateY: -4 }}
  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
>
  {/* soft glow */}
  <div className="absolute -inset-3 bg-gradient-to-tr from-orange-500/40 via-red-500/30 to-orange-300/30 rounded-3xl blur-3xl opacity-40" />

  {/* card */}
  <div className="relative rounded-3xl bg-white/5 border border-orange-500/25 backdrop-blur-xl p-7 sm:p-8">
    {/* name */}
    <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
      Yash Shrivastava
    </h2>

    {/* role */}
    <p className="text-sm sm:text-base text-orange-300 font-medium mb-5">
      Full-Stack Web Developer (Fresher)
    </p>

    {/* divider */}
    <div className="w-12 h-[2px] bg-orange-500/60 rounded-full mb-5" />

    {/* focus */}
    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
      Currently focused on building clean, real-world full-stack applications
      and strengthening my fundamentals in frontend, backend, and problem-solving.
    </p>

    {/* focus points */}
    <ul className="space-y-2 text-xs sm:text-sm text-gray-300 mb-6">
      <li>• React & modern frontend patterns</li>
      <li>• REST APIs & backend logic</li>
      <li>• Writing clean, maintainable code</li>
    </ul>

    {/* tech chips */}
    <div className="flex flex-wrap gap-2 mb-6">
      {['React', 'Node.js', 'MongoDB', 'Express', 'Javascript'].map((tag) => (
        <span
          key={tag}
          className="text-[11px] px-3 py-1 rounded-full bg-orange-600/10 border border-orange-500/30 text-orange-200"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* links */}
    <div className="flex items-center gap-4 text-sm">
      <a
        href="#projects"
        className="text-orange-300 hover:text-orange-100 transition-colors font-semibold"
      >
        View Work  
      </a>
      <a
        href="#contact"
        className="text-gray-300 hover:text-gray-200 transition-colors font-semibold"
      >
        Connect
      </a>
    </div>
  </div>
</motion.div>

      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-gray-500 text-xs sm:text-sm">Scroll to explore</p>
        <div className="w-6 h-9 border-2 border-orange-500/60 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-orange-400 rounded-full mt-2"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
