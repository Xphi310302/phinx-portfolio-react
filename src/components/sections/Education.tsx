import { FC } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

const Education: FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering in Robotics & Artificial Intelligence',
      school: 'HCMC University of Science and Technology',
      specialization: 'Focus on Robotics and AI',
      period: '2020 - 2024',
      achievements: [
        '4-year scholarship program for free tuition',
        'Researched and developed multiple projects in robotics and AI',
        'Completed internship at leading tech company',
        'Outstanding GPA: 8.76/10'
      ]
    }
  ];

  const competitions = [
    {
      title: 'SoICT Hackathon 2024',
      category: 'AI-Powered Applications',
      project: 'CivicBot: Hệ thống trợ lý ảo AI cho dịch vụ công trực tuyến',
      achievement: 'Winner',
      year: '2024'
    },
    {
      title: 'Data Science Challenge 2024',
      category: 'AI-Powered Applications',
      project: 'Xây dựng hệ thống chatbot tư vấn tuyển sinh dựa trên mô hình ngôn ngữ lớn',
      achievement: 'Winner',
      year: '2024'
    },
    {
      title: 'Eureka 2024',
      category: 'Academic Competitions',
      achievement: 'Semi-finalist',
      year: '2024'
    },
    {
      title: 'XC AI Challenge 2023',
      category: 'AI Competition',
      achievement: 'Ranked 1st (Public) & 2nd (Private) out of 50 teams',
      organizer: 'BOSCH',
      year: '2023'
    },
  
    {
      title: 'Autonomous Vehicle Competition',
      category: 'Innovative Technology Solutions',
      organizer: 'HCMC University of Technology and Education',
      achievement: 'Semi-finalist',
      year: '2024'
    },
    {
      title: 'AIOT InnoWorks Competition',
      category: 'Innovative Technology Solutions',
      project: 'Smart Cart use AI and embedded system for better user experience',
      achievement: 'Participant',
      year: '2023'
    }
  ];

  return (
    <SectionWrapper
      id="education"
      title="Education & Achievements"
      subtitle="Academic background and competition achievements"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Education Section */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Education
          </h3>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white 
                       transition-all duration-300 border border-primary/10"
            >
              <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
              <p className="text-text-secondary mt-2">{edu.school}</p>
              <p className="text-text-secondary italic">{edu.specialization}</p>
              <p className="text-text-secondary">{edu.period}</p>
              <ul className="mt-4 space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                    <span className="text-text-secondary">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Competitions Section */}
        <div className="space-y-8">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Competitions & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {competitions.map((competition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white 
                         transition-all duration-300 border border-primary/10"
              >
                {/* Title and Year */}
                <div className="flex justify-between items-center border-b border-primary/10 pb-2 mb-3">
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                    {competition.title}
                  </h4>
                  <span className="text-sm text-text-secondary">{competition.year}</span>
                </div>

                {/* Category */}
                <div className="border-b border-primary/10 pb-2 mb-3">
                  <span className="text-sm text-primary/70">{competition.category}</span>
                </div>

                {/* Project */}
                {competition.project && (
                  <div className="border-b border-primary/10 pb-2 mb-3">
                    <p className="text-text-primary">{competition.project}</p>
                  </div>
                )}

                {/* Achievement */}
                <div className="border-b border-primary/10 pb-2 mb-3">
                  <span className="text-primary font-medium">{competition.achievement}</span>
                </div>

                {/* Organizer */}
                {competition.organizer && (
                  <div>
                    <span className="text-sm text-text-secondary">{competition.organizer}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
