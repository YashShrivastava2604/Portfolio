import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              About <span className="text-orange-500">Me</span>
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a final-year Computer Science student from Indore, Madhya Pradesh, passionate
                about building production-grade full-stack applications that solve real problems.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a obsession with
                clean code, smooth animations, and shipping fast. I specialize in the MERN stack
                and love integrating cutting-edge AI/ML models into web applications.
              </p>
              <p>
                Currently, I'm working on Fitify, an AI-powered nutrition tracking app, while
                exploring ways to build the next generation of monetizable SaaS products. When
                I'm not coding, you'll find me debugging production issues, learning new frameworks,
                or brainstorming the next big idea.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-3">
              {[
                '✨ Building AI-powered applications',
                '🚀 Full-stack development (MERN)',
                '🎨 Smooth animations & UI/UX',
                '📦 Production-ready code',
                '🔧 Problem-solving mindset',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-orange-400 font-semibold"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Code Block */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-black/50 border border-orange-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <pre className="text-orange-400 font-mono text-sm overflow-x-auto">
                <code>{`const developer = {
  name: "Your Name",
  location: "Indore, India",
  education: "CS Final Year",
  expertise: [
    "React",
    "Node.js",
    "MongoDB",
    "AI/ML Integration",
    "UI Animations"
  ],
  current_focus: "Fitify",
  looking_for: [
    "Full-stack roles",
    "Internships",
    "Collaborations"
  ],
  open_to: "Exciting opportunities"
};

// Let's build something amazing!`}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;