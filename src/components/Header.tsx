
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 px-6 md:px-12 lg:px-24 bg-dark-navy border-b border-dark-accent/30">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Digital Fraud Awareness - By DarkWave Solutions
        </h1>
        <p className="mt-2 text-gray-300 text-lg">
          Understanding modern cyber threats and their impact
        </p>
      </div>
    </header>
  );
};

export default Header;
