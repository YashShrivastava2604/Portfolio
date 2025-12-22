import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import './styles/globals.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a0f0a] to-black text-[#F5F5F0]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects selectedProject={selectedProject} onSelectProject={setSelectedProject} />
      {/* <Timeline /> */}
      <Contact />
    </div>
  );
}

export default App;