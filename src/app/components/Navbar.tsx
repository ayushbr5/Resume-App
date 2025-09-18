import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">SkillRank AI</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-teal-400 text-teal-600"
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Features
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Recruiter Login
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Candidate Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
          <a 
            href="#how-it-works" 
            className="block px-3 py-2 text-sm font-medium text-teal-600 border-l-4 border-teal-400"
          >
            How It Works
          </a>
          <a 
            href="#features" 
            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Features
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Contact
          </a>
          <div className="pt-4 space-y-2">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Recruiter Login
            </button>
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium">
              Candidate Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;