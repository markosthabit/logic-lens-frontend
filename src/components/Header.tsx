import React from 'react';
import { FaBrain } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="w-full py-10 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <FaBrain className="text-primary text-3xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Logic Lens
            </h1>
            <p className="mt-3 text-lg text-base-content/80 max-w-2xl mx-auto">
              Analyze arguments and detect logical fallacies with AI-powered precision
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;