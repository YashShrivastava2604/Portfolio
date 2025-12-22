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
        {/* LEFT: text only */}
        <div className="flex-1 text-left">
          <motion.p
            className="text-orange-400 font-semibold text-sm sm:text-base mb-3"
            variants={itemVariants}
          >
            Hey, welcome! 👋
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6"
            variants={itemVariants}
          >
            I Build Digital
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-red-500 bg-clip-text text-transparent">
              Experiences
            </span>
            <br />
            That Inspire
          </motion.h1>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8"
            variants={itemVariants}
          >
            Final-year Computer Science student crafting production-grade full-stack
            applications with smooth animations, AI integration, and zero bloat.
            Building the next generation of SaaS products.
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

        {/* RIGHT: single profile card */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-full max-w-sm"
            whileHover={{ scale: 1.02, translateY: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500 via-red-500 to-orange-300 rounded-3xl blur-3xl opacity-60" />

            {/* glass card */}
            <div className="relative rounded-3xl bg-white/5 border border-orange-500/30 backdrop-blur-xl p-6 sm:p-7 shadow-[0_0_60px_rgba(255,107,53,0.35)]">
              {/* top: avatar + name */}
              <div className="flex items-center gap-4 mb-5">
                {/* avatar (replace with your image later) */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center overflow-hidden">
                  <span className="text-3xl sm:text-4xl">🧑‍💻</span>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    Yash Shrivastava
                  </h2>
                  <p className="text-xs sm:text-sm text-orange-300 font-medium">
                    MERN &nbsp;•&nbsp; AI-Powered SaaS
                  </p>
                </div>
              </div>

              {/* const developer snippet */}
              <div className="mb-5">
                <div className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3">
                  <code className="text-[11px] sm:text-xs font-mono text-orange-200">
                    const developer = &#123;
                    <br />
                    &nbsp;&nbsp;name: &quot;Yash&quot;,
                    <br />
                    &nbsp;&nbsp;role: &quot;Full‑Stack Web Dev&quot;,
                    <br />
                    &nbsp;&nbsp;focus: [&quot;MERN&quot;, &quot;AI/ML&quot;, &quot;SaaS&quot;]
                    <br />
                    &#125;;
                  </code>
                </div>
              </div>

              {/* tags / highlights */}
              <div className="mb-4 flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Framer Motion', 'Tailwind'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs px-3 py-1 rounded-full bg-orange-600/15 border border-orange-500/40 text-orange-200 font-mono"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              {/* small bio inside card */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Building smooth, animation-rich experiences and AI‑powered tools
                that feel fast, focused, and delightful to use.
              </p>

              {/* mini actions */}
              <div className="flex items-center justify-between gap-3">
                <a
                  href="#projects"
                  className="text-[11px] sm:text-xs font-semibold text-orange-300 hover:text-orange-100 transition-colors"
                >
                  • View portfolio
                </a>
                <div className="flex gap-2 text-[13px]">
                  <span className="w-7 h-7 rounded-full bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-200">
                    G
                  </span>
                  <span className="w-7 h-7 rounded-full bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-200">
                    in
                  </span>
                  <span className="w-7 h-7 rounded-full bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-orange-200">
                    🐙
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator at bottom of viewport */}
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
