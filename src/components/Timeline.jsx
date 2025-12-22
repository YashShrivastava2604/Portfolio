import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const experiences = [
    {
      year: '2024-2025',
      title: 'Final Year Project',
      company: 'Fitify - AI Nutrition Tracker',
      description: 'Building an AI-powered food recognition and nutrition tracking application using React, Node.js, and TensorFlow.',
      skills: ['React', 'ML Models', 'MongoDB', 'Cloudinary'],
    },
    {
      year: '2023-2024',
      title: 'Full-Stack Developer',
      company: 'Job Copilot Project',
      description: 'Developed a job aggregation platform that scrapes multiple job boards and auto-tailors resumes for applications.',
      skills: ['Web Scraping', 'Express', 'React', 'MongoDB'],
    },
    {
      year: '2023',
      title: 'MERN Stack Learning',
      company: 'Self-Directed Projects',
      description: 'Completed multiple full-stack projects including Imagify and various portfolio applications, mastering the complete MERN ecosystem.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-orange-500">Journey</span>
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12 pl-8 md:pl-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="md:grid md:grid-cols-2 md:gap-8"
                variants={itemVariants}
              >
                {/* Left content on desktop */}
                <div className={`${i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 w-4 h-4 bg-orange-500 rounded-full -translate-x-1.5 md:translate-x-0 md:left-1/2 md:-translate-x-2 top-2"></div>

                  <div className="bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 group">
                    <div className="text-sm font-mono text-orange-400 font-semibold mb-2">
                      {exp.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-orange-400 font-semibold mb-3">{exp.company}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-300 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;