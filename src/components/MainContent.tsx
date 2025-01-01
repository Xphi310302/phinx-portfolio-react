import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    x: 20
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -20
  }
};

const MainContent: FC = () => {
  return (
    <main className="ml-64 min-h-screen bg-secondary-DEFAULT">
      <div className="container mx-auto">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                key="home"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
                className="divide-y divide-primary/10"
              >
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                key="about"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
                className="divide-y divide-primary/10"
              >
                <About />
              </motion.div>
            } />
            <Route path="/skills" element={
              <motion.div
                key="skills"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
                className="divide-y divide-primary/10"
              >
                <Skills />
              </motion.div>
            } />
            <Route path="/education" element={
              <motion.div
                key="education"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
                className="divide-y divide-primary/10"
              >
                <Education />
              </motion.div>
            } />
            <Route path="/experience" element={
              <motion.div
                key="experience"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
                className="divide-y divide-primary/10"
              >
                <Experience />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                key="contact"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.3 }}
                className="divide-y divide-primary/10"
              >
                <Contact />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default MainContent;