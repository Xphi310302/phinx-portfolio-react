import { FC } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">
          Phi Nguyen
        </h1>
        <h2 className="text-3xl text-primary-light mb-8">
          AI Engineer & Data Scientist
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg text-text-secondary">
            Crafting intelligent solutions at the intersection of AI and software
            engineering. Passionate about building innovative systems that make a
            meaningful impact through cutting-edge technology and thoughtful design.
          </p>
        </div>
        <div className="flex gap-4 justify-center mb-12">
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors">
            View Projects
          </button>
          <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
            Get in Touch
          </button>
        </div>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <FaGithub className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            <FaEnvelope className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
