// src/components/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { allSkills } from '../data/skills';

const coreSkills = [
  'React',
  'Node.js',
  'MongoDB',
  'Express.js',
  'JavaScript (ES6+)',
];

const secondarySkills = allSkills.filter((s) => !coreSkills.includes(s));

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 left-[-4rem] w-56 h-56 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-6rem] w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            Skills &amp; Stack
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            The tools used day‑to‑day to ship full‑stack products, plus the
            technologies that support them.
          </p>
        </motion.div>

        <div className="space-y-10">
          {/* Core skills */}
          <motion.div
            className="grid md:grid-cols-[140px_minmax(0,1fr)] gap-4 md:gap-8 items-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-orange-300 pt-1">
              Core
            </div>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-orange-600/20 border border-orange-400/60 text-[12px] text-orange-100 font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Secondary skills */}
          <motion.div
            className="grid md:grid-cols-[140px_minmax(0,1fr)] gap-4 md:gap-8 items-start"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500 pt-1">
              Secondary
            </div>
            <div className="flex flex-wrap gap-2">
              {secondarySkills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] text-gray-200"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Optional short note */}
          <motion.p
            className="text-xs md:text-sm text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
