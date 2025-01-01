import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  subtitle, 
  children,
  className = ""
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 border-b border-primary/10 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-display font-semibold text-primary-dark"
            >
              {title}
            </motion.h2>
            {subtitle && (
              <p className="text-lg text-text-primary">
                {subtitle}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="bg-secondary-light rounded-xl shadow-sm p-8 border border-primary/10">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper;
