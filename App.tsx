import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-pastel selection:text-pastel-text">
      <Navbar />
      <main>
        <Hero />
        
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Education />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>

        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>

        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
      <Footer />
    </div>
  );
};

export default App;