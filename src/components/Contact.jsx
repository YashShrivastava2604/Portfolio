import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: '💬',
      label: 'LinkedIn',
      value: 'Your LinkedIn Profile',
      link: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'Your GitHub Profile',
      link: 'https://github.com/yourprofile',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's Build<span className="text-orange-500"> Together</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Open to collaborations, job opportunities, and interesting conversations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-orange-500/20 rounded-xl p-6 group-hover:border-orange-500/50 transition-all duration-300 text-center h-full">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {method.label}
                </h3>
                <p className="text-gray-400 text-sm">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { name: 'GitHub', icon: '🐙', link: '#' },
            { name: 'LinkedIn', icon: '💼', link: '#' },
            { name: 'Twitter', icon: '𝕏', link: '#' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-orange-600/20 border border-orange-500/40 flex items-center justify-center text-xl hover:bg-orange-600/40 hover:border-orange-500/60 transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 12 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm mb-6">
            © 2024 Your Name. Built with React, Framer Motion & ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;