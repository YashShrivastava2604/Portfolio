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
          {/* HEADER */}
          <div className="flex items-start justify-between gap-4 px-6 md:px-8 pt-6 pb-4 border-b border-orange-500/25 bg-black/40 backdrop-blur-md">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-orange-400 mb-1">
                Project
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {project.title}
              </h2>
              <p className="text-xs md:text-sm text-gray-400 mt-1">
                {project.shortDesc}
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

          {/* BODY */}
          <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 space-y-10">
            {/* Screenshots */}
            {project.images?.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                  Screenshots
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full aspect-video object-contain rounded-2xl border border-orange-500/25"
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Tech Stack */}
            {project.tech?.length > 0 && (
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-orange-600/15 border border-orange-500/40 text-[11px] text-orange-200 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Overview */}
            {project.fullDesc && (
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                  Overview
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.fullDesc}
                </p>
              </section>
            )}

            {/* Features & Challenges */}
            <section className="grid md:grid-cols-2 gap-8">
              {project.features?.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-orange-400 mt-[2px]">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges?.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                    Challenges
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-orange-400 mt-[2px]">→</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Learnings */}
            {project.learnings?.length > 0 && (
              <section className="space-y-3">
                <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-[0.16em]">
                  Learnings
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {project.learnings.map((l, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-orange-400 mt-[2px]">✓</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* FOOTER */}
          <div className="px-6 md:px-8 py-4 border-t border-orange-500/25 bg-black/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
            <div className="text-[11px] text-gray-500">
              {project.metrics &&
                Object.entries(project.metrics)
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(' • ')}
            </div>
            <div className="flex gap-3">
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-orange-500/40 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-orange-500/60 text-orange-300 text-xs font-semibold hover:bg-orange-600/10 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
