import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

const Projects = ({ selectedProject, onSelectProject }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Click any project to explore the full story, screenshots, and impact
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer h-full"
              variants={itemVariants}
              onClick={() => onSelectProject(project.id)}
              whileHover={{ y: -8 }}
            >
              {/* Card Background Blur */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8 group-hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                {/* Top Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-orange-500/20 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Number Badge */}
                  <div className="inline-block mb-4 px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full">
                    <span className="text-xs font-mono text-orange-400">PROJECT {project.id.toString().padStart(2, '0')}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-300 font-mono">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-orange-400 font-semibold group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <span>View Details</span>
                    <span className="text-xl">→</span>
                  </motion.div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/10 rounded-tr-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-400 mb-6">More projects coming soon...</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More on GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={projects.find((p) => p.id === selectedProject)}
            onClose={() => onSelectProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;