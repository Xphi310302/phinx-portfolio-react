import { FC } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../common/SectionWrapper';

const Contact: FC = () => {
  const contactMethods = [
    {
      title: 'Email',
      value: 'xphi.work@gmail.com',
      icon: '📧',
      link: 'mailto:xphi.work@gmail.com'
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/phinx',
      icon: '💼',
      link: 'https://www.linkedin.com/in/phinx'
    },
    {
      title: 'GitHub',
      value: 'github.com/Xphi310302',
      icon: '💻',
      link: 'https://github.com/Xphi310302'
    }
  ];

  return (
    <SectionWrapper
      id="contact"
      title="Get in Touch"
      subtitle="Let's connect and discuss potential collaborations"
      className="bg-gradient-to-b from-background-light to-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white 
                          transition-all duration-300 border border-primary/10">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-primary">{method.icon}</span>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {method.value}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white 
                        transition-all duration-300 border border-primary/10">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-4">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white/90 backdrop-blur-sm
                         focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none 
                         transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white/90 backdrop-blur-sm
                         focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none 
                         transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white/90 backdrop-blur-sm
                         focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white outline-none 
                         transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-medium py-3 px-6 rounded-xl shadow-md
                       hover:bg-primary-dark transform hover:-translate-y-1
                       transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
