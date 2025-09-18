import React from 'react';

// Type definition for the icon names for better reusability and type safety.
type IconName = 'ats' | 'chatbot' | 'recommendations' | 'reviewer';

// --- Icon Component ---
// This component returns the correct SVG icon based on the name prop.
// I've added FeatureIconProps to define the expected props, fixing the TypeScript error.
interface FeatureIconProps {
  name: IconName;
}

const FeatureIcon = ({ name }: FeatureIconProps) => {
  switch (name) {
    case 'ats':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-scan"><path d="M20 10V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1"/><path d="M4 14v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1"/><path d="M4 10h2.5"/><path d="M15 14h2.5"/><path d="M12 3v2.5"/><path d="M12 21v-2.5"/><path d="M3 12h18"/></svg>
      );
    case 'chatbot':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-question"><path d="M8 10h.01"/><path d="m12 14-2-2-2 2"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/><path d="M12 17.5A2.5 2.5 0 0 0 14.5 15a2.5 2.5 0 0 0-5 0A2.5 2.5 0 0 0 12 17.5Z"/></svg>
      );
    case 'recommendations':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
      );
    case 'reviewer':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-search-2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m18 18-2.5-2.5"/><circle cx="14.5" cy="14.5" r="2.5"/></svg>
      );
    default:
      return null;
  }
};

// --- Feature Card Component ---
// This is a reusable component for each feature, styled to match the sign-in page.
// I've also typed this component's props with the FeatureCardProps interface.
interface FeatureCardProps {
    icon: IconName;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <div className="feature-card bg-white/60 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-start border border-white/20 shadow-lg">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-3 rounded-lg mb-4 border border-white">
                <FeatureIcon name={icon} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
};

// --- Data for the Feature Cards ---
// Explicitly typing the data array ensures each object matches the shape FeatureCardProps expects.
const featuresData: FeatureCardProps[] = [
    {
        icon: 'ats',
        title: 'ATS Optimization',
        description: 'Beat the bots. Our software ensures your resume is formatted to pass through any Applicant Tracking System and get seen by recruiters.',
    },
    {
        icon: 'chatbot',
        title: 'Candidate Chatbot',
        description: 'Our AI chatbot is available 24/7 to provide instant guidance, answer your queries, and help you through the resume-building process.',
    },
    {
        icon: 'recommendations',
        title: 'AI Recommendations',
        description: 'Get personalized, AI-driven suggestions to improve impact. We analyze your content and recommend powerful verbs, skills, and phrasing.',
    },
    {
        icon: 'reviewer',
        title: 'AI Resume Reviewer',
        description: 'Receive an instant, detailed review. Our AI analyzes your resume for clarity, impact, and common mistakes, giving you a score and feedback.',
    },
];

// --- Main App Component ---
export default function App() {
    return (
        <>
            <style>{`
                .feature-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-10px) scale(1.03);
                    box-shadow: 0 25px 40px -12px rgb(0 0 0 / 0.15);
                }

                @keyframes blob {
                  0%, 100% { transform: translate(0px, 0px) scale(1); }
                  33% { transform: translate(30px, -50px) scale(1.1); }
                  66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
            `}</style>
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center relative overflow-hidden p-4 font-sans">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-base font-semibold leading-7 text-blue-600">Our Features</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything You Need to Land Your Dream Job
                        </p>
                        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
                            We've packed our platform with AI-powered tools designed to give you a competitive edge.
                        </p>
                    </div>

                    {/* Grid Container for Feature Cards */}
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                        {/* We map over the data array to render each card */}
                        {featuresData.map((feature) => (
                            <FeatureCard
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}