'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UsersRound, TrendingUp } from 'lucide-react';

const RoleSelection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCandidateClick = () => {
    router.push('/auth/signin?role=candidate');
  };

  const handleRecruiterClick = () => {
    router.push('/auth/signin?role=recruiter');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative w-full max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Role</span>
          </h1>
          <p className="text-lg text-gray-600">Select how you'd like to use SkillRank AI</p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          
          {/* Candidate Card */}
          <div className={`group transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-4 hover:scale-105">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <TrendingUp size={40} className="group-hover:animate-pulse" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  I'm a Candidate
                </h2>
                <p className="text-blue-100 mb-6 group-hover:text-white transition-colors duration-300">
                  Find your dream job and get hired fairly
                </p>
                
                <button 
                  onClick={handleCandidateClick}
                  className="w-full rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition-all duration-300 hover:bg-indigo-50 hover:shadow-xl transform hover:scale-105 group-hover:animate-bounce"
                >
                  Get Started as Candidate
                  <svg className="inline-block ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Floating emoji */}
              <div className="absolute top-4 right-4 text-2xl animate-bounce">🎯</div>
            </div>
          </div>

          {/* Recruiter Card */}
          <div className={`group transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 p-8 text-white shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-4 hover:scale-105">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <UsersRound size={40} className="group-hover:animate-pulse" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  I'm a Recruiter
                </h2>
                <p className="text-teal-100 mb-6 group-hover:text-white transition-colors duration-300">
                  Discover top talent and build an ideal team
                </p>
                
                <button 
                  onClick={handleRecruiterClick}
                  className="w-full rounded-xl bg-white px-6 py-3 font-semibold text-cyan-700 shadow-lg transition-all duration-300 hover:bg-cyan-50 hover:shadow-xl transform hover:scale-105 group-hover:animate-bounce"
                >
                  Get Started as Recruiter
                  <svg className="inline-block ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Floating emoji */}
              <div className="absolute top-4 right-4 text-2xl animate-pulse">🚀</div>
            </div>
          </div>

        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 grid grid-cols-3 gap-8 text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-1">50k+</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-teal-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Match Accuracy</div>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">AI Processing</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Secure & Private</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">⚡</span>
            <span>Instant Results</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-teal-500">🎯</span>
            <span>AI Powered</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default RoleSelection;