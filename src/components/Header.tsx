import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold mb-4">Systems Automation Audit</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-blue-600 hover:text-blue-800">Summary</Link></li>
          <li><Link to="/current-system" className="text-blue-600 hover:text-blue-800">Current System</Link></li>
          <li><Link to="/future-system" className="text-blue-600 hover:text-blue-800">Future System</Link></li>
          <li><Link to="/solutions" className="text-blue-600 hover:text-blue-800">Solutions</Link></li>
          <li><Link to="/insights" className="text-blue-600 hover:text-blue-800">Insights</Link></li>
          <li><Link to="/implementation" className="text-blue-600 hover:text-blue-800">Implementation</Link></li>
          <li><Link to="/questionnaire" className="text-blue-600 hover:text-blue-800">Questionnaire</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;