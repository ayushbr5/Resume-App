import type { NextPage } from 'next';
import {
  LayoutDashboard,
  User,
  FileText,
  Briefcase,
  Sparkles,
  Search,
  UploadCloud,
  CheckCircle2,
  Circle,
} from 'lucide-react';

// --- MOCK DATA ---
const recommendedJobs = [
  {
    logoUrl: '/logo-placeholder-1.png', // Replace with actual logo path
    title: 'Software Engineer',
    company: 'TechStrive Global',
    details: ['Company Mission', 'On-site/Hybrid'],
    matchScore: 92,
  },
  {
    logoUrl: '/logo-placeholder-2.png', // Replace with actual logo path
    title: 'Data Scientist',
    company: 'Innovate Startup',
    details: ['Company Mission', 'On-site/Hybrid'],
    matchScore: 92,
  },
];

const profileTasks = [
  { text: 'Upload Resume', completed: true },
  { text: 'Add Skills', completed: false },
  { text: 'Write Bio', completed: false },
];

// --- HELPER COMPONENTS ---

// A simple component to create the circular progress bar
const CircularProgress = ({ percentage }: { percentage: number }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative h-32 w-32">
      <svg className="h-full w-full" viewBox="0 0 120 120">
        <circle
          className="text-gray-200"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className="text-teal-500"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{percentage}%</span>
        <span className="text-sm text-gray-500">Complete</span>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const CandidateDashboardPage: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar Navigation */}
      <aside className="hidden w-72 flex-col bg-[#1e293b] text-gray-300 md:flex">
        <div className="flex items-center gap-3 p-6">
          <Sparkles className="text-teal-400" />
          <h1 className="text-xl font-bold text-white">SkillRank AI</h1>
        </div>
        <div className="px-6 pb-6">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border-transparent bg-gray-700 py-2 pl-10 pr-4 text-white focus:bg-gray-600 focus:outline-none"
            />
          </div>
        </div>
        <nav className="flex-1 px-6">
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 rounded-md bg-teal-500/20 px-4 py-3 font-semibold text-white"
              >
                <LayoutDashboard size={20} />
                <span>My Dashboard</span>
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 hover:bg-gray-700"
              >
                <User size={20} />
                <span>My Profile</span>
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 hover:bg-gray-700"
              >
                <FileText size={20} />
                <span>Resume & Skills</span>
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 hover:bg-gray-700"
              >
                <Briefcase size={20} />
                <span>Find Jobs</span>
              </a>
            </li>
            <li className="mt-2">
              <a
                href="#"
                className="flex items-center gap-3 rounded-md px-4 py-3 hover:bg-gray-700"
              >
                <Sparkles size={20} />
                <span>AI Career Assistant</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="relative flex flex-1 flex-col">
        <main className="flex-1 p-8">
          {/* Main Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome Back, Alex!
              </h1>
              <p className="mt-1 text-gray-500">My Dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                <User size={20} className="text-gray-600" />
              </div>
              <span className="font-semibold">Alex Thompson</span>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Resume & Profile Card */}
            <div className="rounded-xl border bg-white p-6 shadow-sm lg:col-span-2">
              <h2 className="text-xl font-semibold">Resume & Profile</h2>
              <div className="mt-4 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-8">
                  <UploadCloud className="text-gray-400" size={48} />
                  <p className="mt-2 text-gray-500">Drag & drop files here</p>
                  <button className="mt-4 rounded-lg bg-teal-500 px-6 py-2 font-semibold text-white hover:bg-teal-600">
                    Upload New Resume
                  </button>
                  <a href="#" className="mt-2 text-sm text-gray-500 hover:underline">
                    Update Profile
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <CircularProgress percentage={75} />
                  <ul className="mt-4 space-y-2">
                    {profileTasks.map((task, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {task.completed ? (
                          <CheckCircle2 className="text-teal-500" size={20} />
                        ) : (
                          <Circle className="text-gray-300" size={20} />
                        )}
                        <span className={task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}>
                          {task.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recommended Jobs Card */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Recommended Jobs</h2>
              <div className="mt-4 space-y-4">
                {recommendedJobs.map((job, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                      {/* Placeholder for logo */}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{job.title}</p>
                      <p className="text-sm text-gray-500">{job.company}</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
                      {job.matchScore}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Floating AI Chat Button */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700">
            <Sparkles size={32} />
          </button>
          <span className="mt-2 text-sm font-medium text-gray-600">Chat with AI</span>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboardPage;