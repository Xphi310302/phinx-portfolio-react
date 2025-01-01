import { FC } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

const Skills: FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'TypeScript'],
      icon: '💻'
    },
    {
      title: 'AI/ML Frameworks',
      skills: ['LangChain', 'Llama Index', 'Tensorflow', 'PyTorch', 'HuggingFace'],
      icon: '🧠'
    },
    {
      title: 'Natural Language Processing',
      skills: ['Prompt Engineering', 'LLM Fine-tuning', 'Retrieval-Augmented Generation (RAG)', 'Agentic AI'],
      icon: '📝'
    },
    {
      title: 'Data & Analysis',
      skills: ['Exploratory Data Analysis (EDA)', 'Feature Engineering', 'SQL', 'NoSQL', 'Vector Databases'],
      icon: '📊'
    },
    {
      title: 'Computer Vision & Edge',
      skills: ['Optical Character Recognition (OCR)', 'Jetson Nano', 'Raspberry Pi'],
      icon: '👁️'
    },
    {
      title: 'Cloud & MLOps',
      skills: ['Azure Webapp Deployment', 'Google Cloud Run', 'AWS EC2', 'Docker'],
      icon: '☁️'
    },
    {
      title: 'Web Development',
      skills: ['REST API Development (FastAPI)', 'ReactJS', 'Tailwind CSS', 'Git'],
      icon: '🌐'
    }
  ];

  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="My technical expertise and tools I work with"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white 
                       transition-all duration-300 border border-primary/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                    <span className="text-text-secondary">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
