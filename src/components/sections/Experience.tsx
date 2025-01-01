import { FC } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

const Experience: FC = () => {
  const experiences = [
    {
      title: 'AI Engineer',
      company: 'ORIENT SOFTWARE DEVELOPMENT CORPORATION',
      period: '9/2024 - Current',
      description: 'Developing enterprise-level AI solutions with focus on LLMs and conversational AI',
      achievements: [
        'Contributed to the development of Neurond Assistant, an enterprise chatbot with advanced features including RAG, internet search, and multi-agent coordination',
        'Architected and implemented microservice-based backend infrastructure',
        'Developed intelligent search and retrieval systems for enhanced user support'
      ]
    },
    {
      title: 'AI Intern',
      company: 'BOSCH GLOBAL SOFTWARE TECHNOLOGIES',
      period: '9/2023 - 3/2024',
      description: 'Applied ML/AI solutions to industrial and business challenges',
      achievements: [
        'Developed temperature forecasting model using ML/DL techniques, reducing simulation costs',
        'Created quantized LLM solution using Mistral-7B for efficient feedback summarization',
        'Implemented data pipeline for multiple sources and visualization systems'
      ]
    },
    {
      title: 'AI Intern',
      company: 'CÔNG TY CỔ PHẦN CÔNG NGHỆ & KỸ THUẬT STECH',
      period: '7/2023 - 9/2023',
      description: 'Focused on AI applications in social networking',
      achievements: [
        'Developed recommender system using social network data and ML techniques',
        'Conducted extensive EDA to identify key features for recommendation algorithms'
      ]
    }
  ];

  return (
    <SectionWrapper
      id="experience"
      title="Professional Experience"
      subtitle="My journey in AI and Software Development"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white 
                       transition-all duration-300 border border-primary/10"
            >
              {/* Header */}
              <div className="flex justify-between items-start border-b border-primary/10 pb-3 mb-4">
                <div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    {exp.title}
                  </h3>
                  <p className="text-primary/70 mt-1">{exp.company}</p>
                </div>
                <span className="text-sm text-text-secondary">{exp.period}</span>
              </div>

              {/* Description */}
              <p className="text-text-secondary mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0 mt-2" />
                    <span className="text-text-secondary">{achievement}</span>
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

export default Experience;
