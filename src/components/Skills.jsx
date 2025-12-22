// src/components/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { allSkills } from '../data/skills';

const primarySkills = [
  'React',
  'Node.js',
  'MongoDB',
  'Express.js',
  'Tailwind CSS',
  'Framer Motion',
  'JavaScript (ES6+)',
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-[-6rem] w-72 h-72 bg-orange-600/14 rounded-full blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-8rem] w-[26rem] h-[26rem] bg-red-600/12 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Skill <span className="text-orange-500">Constellation</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Every tag below is something you&apos;ve actually used to ship real projects.
            Hover around and explore the stack.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)] gap-10 items-center">
          {/* LEFT: skill cloud */}
          <motion.div
            className="relative h-[440px] md:h-[500px] lg:h-[540px] rounded-3xl bg-gradient-to-br from-black/60 via-black/40 to-black/70 border border-orange-500/20 backdrop-blur-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* central core – no rotation now */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-orange-500 via-orange-400 to-red-500 shadow-[0_0_70px_rgba(255,107,53,0.65)] flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/75 border border-orange-200/40 flex items-center justify-center">
                <span className="text-[10px] sm:text-xs text-gray-300 font-mono uppercase tracking-[0.18em] text-center leading-relaxed">
                  MERN
                  <br />
                  Core
                </span>
              </div>
            </div>

            {/* bigger orbit rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-orange-500/22" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[21rem] h-[21rem] rounded-full border border-orange-500/14" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full border border-orange-500/8" />

            {/* primary skills – fixed, no motion so no overlap */}
            {primarySkills.map((skill, index) => {
              const angle = (index / primarySkills.length) * Math.PI * 2;
              const radius = 132; // bigger radius
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={skill}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <motion.div
                    className="px-3 py-1.5 rounded-full bg-orange-600/22 border border-orange-400/70 text-[11px] text-orange-100 font-mono shadow-[0_0_18px_rgba(255,107,53,0.45)] whitespace-nowrap"
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    {skill}
                  </motion.div>
                </div>
              );
            })}

            {/* secondary skills – distributed by angle & ring, subtle drift but spaced */}
            {allSkills
              .filter((s) => !primarySkills.includes(s))
              .map((skill, index) => {
                const ringIndex = index % 2; 
                const baseRadius = 220;   
                const radius = baseRadius + ringIndex * 50; 

                const angle = ((index * 1.4) % 12) * (Math.PI / 6);
                const baseX = Math.cos(angle) * radius;
                const baseY = Math.sin(angle) * radius * 0.6; 

                return (
                  <motion.div
                    key={skill}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{ x: baseX, y: baseY, opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    animate={{
                      x: [baseX - 4, baseX + 4, baseX - 2],
                      y: [baseY + 2, baseY - 2, baseY],
                    }}
                    transition={{
                      duration: 12 + (index % 4),
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    whileHover={{ scale: 1.08 }}
                  >
                    <div className="px-3 py-1 rounded-full bg-black/70 border border-orange-500/30 text-[10px] text-gray-200 font-mono whitespace-nowrap">
                      {skill}
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>

          {/* RIGHT: explanation */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.2em]">
              How to read this
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The bright tags orbiting the core are the tools you&apos;re strongest in and
              use on almost every project. The lighter tags drifting around are
              technologies you&apos;re comfortable with and can plug into a stack when
              needed.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white/5 border border-orange-500/25 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-orange-300 mb-2">
                  Core stack
                </p>
                <p className="text-gray-300 text-sm">
                  React, Node.js, Express, MongoDB, Tailwind, and animation with Framer
                  Motion – optimized for full‑stack SaaS apps.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-orange-500/25 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-orange-300 mb-2">
                  Surrounding tools
                </p>
                <p className="text-gray-300 text-sm">
                  Auth, storage, payments, and deployment tools that you swap in project
                  by project: Cloudinary, Clerk, Stripe, Render, Vercel, and more.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-orange-600/15 to-red-600/15 border border-orange-500/40 px-4 py-3 text-xs text-gray-200 font-mono">
              <span className="text-orange-300 font-semibold mr-1">Tip:</span>
              In an interview, you can literally point to the skills on screen as you
              talk through each project below.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
