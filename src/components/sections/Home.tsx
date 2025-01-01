import { FC } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

const Home: FC = () => {
  return (
    <SectionWrapper
      id="home"
      title=""
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background-light"
    >
      <div className="text-center space-y-12 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Phi Nguyen
          </h1>
          <h2 className="text-2xl md:text-3xl text-text-secondary font-medium">
            AI Engineer & Data Scientist
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto border border-primary/10"
        >
          <p className="text-lg text-text-primary leading-relaxed ">
            Crafting intelligent solutions at the intersection of AI and software engineering. 
            Passionate about building innovative systems that make a meaningful impact through 
            cutting-edge technology and thoughtful design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
         
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-lg rounded-lg font-medium transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1AOVuchSrpYKhZW35qvEDDtJwDjMnS0m0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-lg rounded-lg font-medium transition-colors duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary-hover hover:text-white text-lg rounded-lg font-medium transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center space-x-8 pt-6"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary hover:-translate-y-1 transition-all duration-300 transform"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/phinx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary hover:-translate-y-1 transition-all duration-300 transform"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="mailto:xphi.work@gmail.com"
            className="text-text-secondary hover:text-primary hover:-translate-y-1 transition-all duration-300 transform"
          >
            <span className="sr-only">Email</span>
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
