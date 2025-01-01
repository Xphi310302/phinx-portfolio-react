import { FC } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SidebarProps {
  activeSection: string;
  onSetActive: (section: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ activeSection, onSetActive }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'skills', label: 'Skills', icon: '💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-accent-light border-r border-accent-dark/10 p-6">
      <div className="h-full flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">
            Phi Nguyen Xuan
          </h1>
          <p className="text-text-secondary mt-2">AI Engineer in Vietnam</p>
        </div>

        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={300}
                  offset={-20}
                  onSetActive={() => onSetActive(item.id)}
                  className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg cursor-pointer
                           ${activeSection === item.id 
                             ? 'text-primary font-bold' 
                             : 'text-text-secondary hover:text-primary hover:font-medium'}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-6 border-t border-accent-dark/10">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
          <p className="text-text-muted text-sm text-center mt-4">
            &copy; 2025 Phi Nguyen Xuan
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;