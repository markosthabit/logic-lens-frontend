import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputCard from './components/InputCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-base-100 to-base-200">
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Header />
          <main className="mt-8">
            <InputCard />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;