import { FC } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

const About: FC = () => {
  const interests = [
    'Artificial Intelligence & Large Language Models',
    'Machine Learning & Deep Learning',
    'Natural Language Processing & RAG Systems',
    'Computer Vision & Edge Computing',
    'Cloud Infrastructure & MLOps'
  ];

  const hobbies = [
    'Reading Tech Blogs',
    'Contributing to Open Source',
    'Learning New Technologies',
    'Problem Solving',
    'Tech Community Events'
  ];

  const facts = [
    'Based in Vietnam',
    'Continuously learning frontend technologies',
    'Experience in AI/ML Development',
    'My goal in 2025 is to deploy large-scale AI models on cloud platforms',
    'Specialized in LLMs, RAG Systems, and Agentic AI',
    'Proficient in both AI Development and Full-Stack Engineering'
  ];

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me better"
    >
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src="/assets/images/about.jpg"
                alt="Phi Nguyen"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-grow"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl hover:bg-white 
                         transition-all duration-300 border border-primary/10">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-4">
                Phi Nguyen
              </h3>
              <h4 className="text-lg text-primary mb-6">AI Engineer & Data Scientist</h4>
              <p className="text-text-secondary leading-relaxed">
                Hello! I'm Phi Nguyen, an AI Engineer based in Vietnam. I specialize in developing intelligent 
                systems and solutions that combine the power of artificial intelligence with robust software 
                engineering practices. With a strong foundation in both AI/ML and full-stack development, 
                I bring a unique perspective to every project. My goal is to create innovative solutions 
                that not only solve complex problems but also provide exceptional user experiences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white 
                     transition-all duration-300 border border-primary/10"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-4">Interests</h3>
            <ul className="space-y-3">
              {interests.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white 
                     transition-all duration-300 border border-primary/10"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-4">Hobbies</h3>
            <ul className="space-y-3">
              {hobbies.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white 
                     transition-all duration-300 border border-primary/10"
          >
            <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              {facts.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
