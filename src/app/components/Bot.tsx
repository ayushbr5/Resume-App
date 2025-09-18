'use client';
import React from 'react';
import { FileText } from 'lucide-react';

export default function AIRecruitmentSimulation() {
  const [currentStep, setCurrentStep] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  const candidates = [
    {
      name: "Quinn Rivers",
      title: "Senior Marketing Manager",
      experience: "8 Years experience",
      match: 89,
      avatar: "👩‍💼"
    },
    {
      name: "Charles Petrin",
      title: "Content and Growth Marketer",
      experience: "2 Years experience",
      match: 32,
      avatar: "👨‍💼"
    }
  ];

  return (
    <div className="relative h-96 w-full rounded-2xl bg-gradient-to-br from-amber-800 to-amber-900 overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${20 + i * 10}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main search bar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-amber-700 bg-opacity-50 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-600">
          <div className="text-amber-200 text-lg font-medium text-center">
            AI recruitment software
          </div>
        </div>
      </div>

      {/* Actions Panel - Top Left */}
      <div className="absolute top-4 left-4">
        <div className="bg-white rounded-lg shadow-lg p-3 space-y-2 min-w-32">
          <div className="text-sm font-medium text-gray-800">Actions</div>
          {['Rephrase', 'Summarize', 'Simplify', 'Open Prompt'].map((action, i) => (
            <div 
              key={action}
              className={`text-xs p-2 rounded cursor-pointer transition-colors ${
                currentStep === i ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {action}
            </div>
          ))}
        </div>
      </div>

      {/* Resume File - Top Right */}
      <div className="absolute top-4 right-4">
        <div className="bg-blue-100 rounded-lg p-3 flex items-center space-x-2 shadow-lg">
          <FileText className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-800">Resume_CharlesPetrin.pdf</span>
        </div>
      </div>

      {/* Candidate Cards */}
      {candidates.map((candidate, index) => (
        <div
          key={candidate.name}
          className={`absolute transition-all duration-1000 ${
            index === 0 
              ? 'top-16 left-1/4 transform -translate-x-1/2' 
              : 'bottom-16 right-1/4 transform translate-x-1/2'
          }`}
          style={{
            transform: `${index === 0 ? 'translateX(-50%)' : 'translateX(50%)'} scale(${currentStep % 2 === index ? 1.05 : 1})`,
            opacity: currentStep % 2 === index ? 1 : 0.8
          }}
        >
          <div className="bg-white rounded-2xl p-4 shadow-xl min-w-64">
            <div className="flex items-center space-x-3">
              {/* Match percentage circle */}
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={candidate.match > 50 ? "#10b981" : "#f59e0b"}
                    strokeWidth="2"
                    strokeDasharray={`${candidate.match}, 100`}
                    className="transition-all duration-1000"
                    style={{
                      strokeDasharray: currentStep % 2 === index ? `${candidate.match}, 100` : '0, 100'
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{candidate.match}%</div>
                    <div className="text-xs text-gray-500">Match</div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-lg">{candidate.name}</h3>
                <p className="text-sm text-gray-600">{candidate.title}</p>
                <p className="text-xs text-gray-500">{candidate.experience}</p>
              </div>

              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-lg">
                {candidate.avatar}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Chat Assistant - Bottom Left */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-white rounded-2xl p-4 shadow-lg max-w-64">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center flex-shrink-0">
              🤖
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-800 mb-2">
                Hi, I'm Natasha- Here to help you find your dream job!
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                Find matching jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tone Settings - Bottom Center */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-lg p-3 shadow-lg">
          <div className="text-sm font-medium text-gray-800 mb-2">Tone</div>
          <div className="space-y-2">
            {[
              { icon: '💼', label: 'Professional' },
              { icon: '✏️', label: 'Casual' },
              { icon: '😊', label: 'Humorous' }
            ].map((tone, i) => (
              <div 
                key={tone.label}
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer transition-colors ${
                  i === 0 ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>{tone.icon}</span>
                <span className="text-sm">{tone.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile avatars on sides */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg">
          👩‍💻
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
          👨‍💻
        </div>
      </div>

      <div className="absolute right-4 top-1/3">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
          👨‍💼
        </div>
      </div>
    </div>
  );
}