import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-12 border-t border-base-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold">Logic Lens</h3>
            <p className="text-sm text-base-content/70">
              AI-powered logical fallacy detection
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/yourusername/logic-lens" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle"
              aria-label="GitHub repository"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-base-content/50">
          <p>Built with React, Vite, Tailwind CSS, and DaisyUI</p>
          <p className="mt-1">© {new Date().getFullYear()} Logic Lens. Educational tool for fallacy detection.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;