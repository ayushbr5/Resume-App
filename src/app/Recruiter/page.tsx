'use client';
import { useState } from 'react';
import { Search, Zap, User, Briefcase, Users, Save, Download, Eye } from 'lucide-react';

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState('saved-candidates');
  const [jobTitleFilter, setJobTitleFilter] = useState('');
  const [skillsFilter, setSkillsFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [atsScoreFilter, setAtsScoreFilter] = useState('');
  const [sortBy, setSortBy] = useState('ats-desc');

  // Sample received resumes from applicants
  const [receivedResumes] = useState([
    {
      id: 1,
      name: 'John Smith',
      role: 'Software Engineer',
      appliedFor: 'Senior Frontend Developer',
      skills: 'Python, Django, AWS, SQL, React, Node.js',
      matchPercentage: 92,
      atsScore: 88,
      status: 'New Application',
      applicationDate: '2025-09-15',
      email: 'john.smith@email.com',
      experience: '5 years'
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'Project Manager',
      appliedFor: 'Senior Project Manager',
      skills: 'R, Python, Machine Learning, Agile, Scrum, JIRA',
      matchPercentage: 88,
      atsScore: 68,
      status: 'Under Review',
      applicationDate: '2025-09-14',
      email: 'jane.doe@email.com',
      experience: '7 years'
    },
    {
      id: 3,
      name: 'Emily Wong',
      role: 'UX Designer',
      appliedFor: 'Lead UX Designer',
      skills: 'Figma, Sketch, Jira, Adobe Creative Suite, Prototyping',
      matchPercentage: 65,
      atsScore: 78,
      status: 'Interview Scheduled',
      applicationDate: '2025-09-13',
      email: 'emily.wong@email.com',
      experience: '4 years'
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'Data Scientist',
      appliedFor: 'Senior Data Scientist',
      skills: 'Python, TensorFlow, SQL, Machine Learning, Statistics',
      matchPercentage: 95,
      atsScore: 92,
      status: 'New Application',
      applicationDate: '2025-09-16',
      email: 'michael.chen@email.com',
      experience: '6 years'
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      appliedFor: 'Digital Marketing Lead',
      skills: 'Google Analytics, SEO, Social Media, Content Strategy',
      matchPercentage: 76,
      atsScore: 82,
      status: 'Under Review',
      applicationDate: '2025-09-12',
      email: 'sarah.johnson@email.com',
      experience: '3 years'
    },
    {
      id: 6,
      name: 'David Rodriguez',
      role: 'DevOps Engineer',
      appliedFor: 'Senior DevOps Engineer',
      skills: 'Docker, Kubernetes, AWS, Jenkins, Terraform, Git',
      matchPercentage: 89,
      atsScore: 85,
      status: 'New Application',
      applicationDate: '2025-09-17',
      email: 'david.rodriguez@email.com',
      experience: '5 years'
    }
  ]);

  const exportToCSV = () => {
    if (filteredResumes.length === 0) {
      alert('No resumes to export');
      return;
    }

    const headers = ['Name', 'Applied For', 'Skills', 'Match Percentage', 'ATS Score', 'Status', 'Application Date', 'Email', 'Experience'];
    const csvContent = [
      headers.join(','),
      ...filteredResumes.map(resume => [
        `"${resume.name}"`,
        `"${resume.appliedFor}"`,
        `"${resume.skills}"`,
        resume.matchPercentage,
        resume.atsScore,
        `"${resume.status}"`,
        resume.applicationDate,
        `"${resume.email}"`,
        `"${resume.experience}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `received_resumes_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter and sort resumes
  const filteredResumes = receivedResumes.filter(resume => {
    const matchesSearch = searchQuery === '' || 
      resume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.appliedFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.skills.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesJobTitle = jobTitleFilter === '' || 
      resume.appliedFor.toLowerCase().includes(jobTitleFilter.toLowerCase());
    
    const matchesSkills = skillsFilter === '' || 
      resume.skills.toLowerCase().includes(skillsFilter.toLowerCase());
    
    const matchesAtsScore = atsScoreFilter === '' || 
      resume.atsScore >= parseInt(atsScoreFilter);
    
    return matchesSearch && matchesJobTitle && matchesSkills && matchesAtsScore;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'ats-desc':
        return b.atsScore - a.atsScore;
      case 'ats-asc':
        return a.atsScore - b.atsScore;
      case 'match-desc':
        return b.matchPercentage - a.matchPercentage;
      case 'match-asc':
        return a.matchPercentage - b.matchPercentage;
      case 'date-desc':
        return new Date(b.applicationDate).getTime() - new Date(a.applicationDate).getTime();
      case 'date-asc':
        return new Date(a.applicationDate).getTime() - new Date(b.applicationDate).getTime();
      default:
        return 0;
    }
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New Application':
        return 'bg-blue-100 text-blue-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Interview Scheduled':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-semibold">SkillRank AI</span>
          </div>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by skills (e.g. Python, SQL) or job title (e.g. Data Scientist)"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <User className="w-6 h-6" />
            <span className="font-medium">Sarah Chen, HR Manager</span>
          </div>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4 space-y-2">
            <button 
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setActiveTab('dashboard')}
            >
              <Briefcase className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            
            <button 
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setActiveTab('my-jobs')}
            >
              <Users className="w-5 h-5" />
              <span>My Jobs</span>
            </button>
            
            <button 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'saved-candidates' 
                  ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('saved-candidates')}
            >
              <Save className="w-5 h-5" />
              <span>Received Resumes</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Received Resumes</h1>
                <p className="text-gray-600 mt-2">Review and manage applications from job seekers</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                  <span className="text-sm text-gray-600">Total Applications: </span>
                  <span className="font-semibold text-blue-600">{filteredResumes.length}</span>
                </div>
                <button
                  onClick={exportToCSV}
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>
            
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer"
                    value={jobTitleFilter}
                    onChange={(e) => setJobTitleFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Skills</label>
                  <input
                    type="text"
                    placeholder="e.g. Python, React"
                    value={skillsFilter}
                    onChange={(e) => setSkillsFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Min ATS Score</label>
                  <input
                    type="number"
                    placeholder="e.g. 70"
                    min="0"
                    max="100"
                    value={atsScoreFilter}
                    onChange={(e) => setAtsScoreFilter(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="ats-desc">ATS Score (High to Low)</option>
                    <option value="ats-asc">ATS Score (Low to High)</option>
                    <option value="match-desc">Match % (High to Low)</option>
                    <option value="match-asc">Match % (Low to High)</option>
                    <option value="date-desc">Application Date (Newest)</option>
                    <option value="date-asc">Application Date (Oldest)</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search applicants by name, job title, or skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Zap className="w-4 h-4" />
                  <span>Instant Filter</span>
                </button>
              </div>
            </div>

            {/* Results Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {filteredResumes.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
                  <p className="text-gray-500">Try adjusting your filters to see more results</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Applicant</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Applied For</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Skills & Match</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">ATS Score</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredResumes.map((resume) => (
                        <tr key={resume.id} className="hover:bg-gray-50">
                          <td className="px-6 py-6">
                            <div>
                              <div className="font-semibold text-gray-900">{resume.name}</div>
                              <div className="text-sm text-gray-600">{resume.email}</div>
                              <div className="text-sm text-gray-500">{resume.experience} experience</div>
                              <div className="text-xs text-gray-400">Applied: {resume.applicationDate}</div>
                            </div>
                          </td>
                          <td className="px-6 py-6">
                            <div className="font-medium text-gray-900">{resume.appliedFor}</div>
                            <div className="text-sm text-gray-600">Current: {resume.role}</div>
                          </td>
                          <td className="px-6 py-6">
                            <div className="flex items-start space-x-3">
                              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                {resume.matchPercentage}%
                              </div>
                              <div className="flex-1">
                                <div className="text-sm text-gray-700 line-clamp-2">{resume.skills}</div>
                                <div className="text-xs text-gray-500 mt-1">Skills Match</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-6">
                            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                              {resume.atsScore}%
                            </div>
                          </td>
                          <td className="px-6 py-6">
                            {/* FIX 2: Corrected the className to use a template literal */}
                            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(resume.status)}`}>
                              {resume.status}
                            </span>
                          </td>
                          <td className="px-6 py-6">
                            <div className="flex space-x-2">
                              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-1">
                                <Eye className="w-3 h-3" />
                                <span>View Resume</span>
                              </button>
                              <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                                Shortlist
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}