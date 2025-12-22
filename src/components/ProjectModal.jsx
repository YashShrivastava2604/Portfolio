// src/components/ProjectModal.jsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-5xl max-h-[90vh] rounded-3xl bg-gradient-to-br from-black/90 via-orange-950/15 to-black/95 border border-orange-500/30 shadow-2xl overflow-hidden flex flex-col"
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* HEADER (fixed) */}
          <div className="flex items-start justify-between gap-4 px-6 md:px-8 pt-6 pb-4 border-b border-orange-500/25 bg-black/40 backdrop-blur-md">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-orange-400 mb-1">
                Project
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {project.title || 'Project Title'}
              </h2>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                {/* short one-liner summary */}
                {project.shortDesc || 'Short summary of what this project does.'}
              </p>
            </div>

            <motion.button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </div>

          {/* BODY (scrollable) */}
          <div className="flex-1 overflow-y-auto px-6 md:px-8 py-5 space-y-8">
            {/* IMAGE AREA – you fill with your own images */}
            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                Screenshots
              </h3>
              <p className="text-xs text-gray-400">
                Add one or multiple screenshots here (carousel or stacked). Keep them 16:9 for best results.
              </p>

              {/* Placeholder image container (you replace with your own <img> / carousel) */}
              <div className="w-full aspect-video rounded-2xl bg-white/5 border border-orange-500/25 flex items-center justify-center text-gray-500 text-xs">
                Screenshot area – put your images / slider here
              </div>
            </section>

            {/* TECH STACK – you fill the badges */}
            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                Tech Stack
              </h3>
              <p className="text-xs text-gray-400">
                List the main technologies, libraries, and services used.
              </p>
              <div className="flex flex-wrap gap-2">
                {(project.tech || ['React', 'Node.js', 'MongoDB']).map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-orange-600/15 border border-orange-500/40 text-[11px] text-orange-200 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>

            {/* DESCRIPTION – you write everything here */}
            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                Overview
              </h3>
              <p className="text-xs text-gray-400">
                Replace this block with a detailed explanation: what the problem was, how your solution works, and what makes it interesting.
              </p>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  {/* You will replace all paragraphs in this section */}
                  Lorem ipsum placeholder. Write about the core idea of the project, the target
                  users, and what value it provides.
                </p>
                <p>
                  Add implementation details: architecture, API design, database structure, and
                  any interesting patterns or optimizations.
                </p>
              </div>
            </section>

            {/* OPTIONAL SECTIONS – keep or remove as needed */}
            <section className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                  Key Features
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400 mt-[2px]">•</span>
                    <span>Feature 1 – describe something impressive you built.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400 mt-[2px]">•</span>
                    <span>Feature 2 – show off an AI/ML or UX detail.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400 mt-[2px]">•</span>
                    <span>Feature 3 – performance, scalability, or dev‑experience.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                  Challenges & Learnings
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400 mt-[2px]">→</span>
                    <span>Challenge 1 you faced and how you solved it.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400 mt-[2px]">→</span>
                    <span>Challenge 2 – deployment, auth, performance, etc.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400 mt-[2px]">→</span>
                    <span>Key takeaway that you would mention in an interview.</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* FOOTER (fixed) */}
          <div className="px-6 md:px-8 py-4 border-t border-orange-500/25 bg-black/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
            <div className="text-[11px] text-gray-500">
              Tip: Use this space to highlight metrics (users, performance, revenue).
            </div>
            <div className="flex gap-3">
              <motion.a
                href={project.live || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-orange-500/40 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.a>
              <motion.a
                href={project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-orange-500/60 text-orange-300 text-xs font-semibold hover:bg-orange-600/10 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                View Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
