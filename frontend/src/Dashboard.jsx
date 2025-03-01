import React, { useState } from 'react';
import { 
  Trophy, Code, Github, BarChart3, 
  Settings, LogOut, ChevronRight
} from 'lucide-react';

// Mock data for the dashboard
const mockAchievements = {
  leetcode: { easy: 45, medium: 32, hard: 12 },
  hackerrank: { easy: 38, medium: 25, hard: 8 },
  codeforces: { easy: 29, medium: 18, hard: 5 }
};

const mockProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather tracking application using OpenWeather API",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    techStack: ["JavaScript", "HTML/CSS", "REST API"],
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "#"
  }
];

const mockContributions = [
  {
    id: 1,
    repo: "react/react",
    description: "Fixed memory leak in useEffect cleanup",
    pullRequest: "#23456",
    impact: "High",
    date: "2023-09-15"
  },
  {
    id: 2,
    repo: "tailwindlabs/tailwindcss",
    description: "Added new utility classes for animations",
    pullRequest: "#7890",
    impact: "Medium",
    date: "2023-08-22"
  },
  {
    id: 3,
    repo: "vercel/next.js",
    description: "Improved error handling in API routes",
    pullRequest: "#12345",
    impact: "High",
    date: "2023-07-10"
  }
];

const mockRankings = {
  global: 1256,
  country: 78,
  score: 785,
  skills: {
    problemSolving: 82,
    openSource: 76,
    projects: 88
  }
};

function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'contributions':
        return <ContributionsContent />;
      case 'rankings':
        return <RankingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-800">DevAchieve</h1>
          </div>
          <p className="text-xs text-gray-500 mt-1">Developer Achievement Platform</p>
        </div>
        
        <div className="px-4 py-2">
          <div className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Profile" 
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-800">Alex Johnson</h3>
              <p className="text-xs text-gray-500">Full Stack Developer</p>
            </div>
          </div>
        </div>
        
        <nav className="mt-6">
          <div 
            className={`flex items-center px-4 py-3 ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'} cursor-pointer`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Trophy className="h-5 w-5 mr-3" />
            <span>Achievement Dashboard</span>
            {activeTab === 'dashboard' && <ChevronRight className="h-4 w-4 ml-auto" />}
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 ${activeTab === 'projects' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'} cursor-pointer`}
            onClick={() => setActiveTab('projects')}
          >
            <Code className="h-5 w-5 mr-3" />
            <span>Project Showcase</span>
            {activeTab === 'projects' && <ChevronRight className="h-4 w-4 ml-auto" />}
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 ${activeTab === 'contributions' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'} cursor-pointer`}
            onClick={() => setActiveTab('contributions')}
          >
            <Github className="h-5 w-5 mr-3" />
            <span>Open Source</span>
            {activeTab === 'contributions' && <ChevronRight className="h-4 w-4 ml-auto" />}
          </div>
          
          <div 
            className={`flex items-center px-4 py-3 ${activeTab === 'rankings' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'} cursor-pointer`}
            onClick={() => setActiveTab('rankings')}
          >
            <BarChart3 className="h-5 w-5 mr-3" />
            <span>Ranking System</span>
            {activeTab === 'rankings' && <ChevronRight className="h-4 w-4 ml-auto" />}
          </div>
        </nav>
        
        <div className="absolute bottom-0 w-64 border-t border-gray-200">
          <div className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 cursor-pointer">
            <Settings className="h-5 w-5 mr-3" />
            <span>Settings</span>
          </div>
          <div className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 cursor-pointer">
            <LogOut className="h-5 w-5 mr-3" />
            <span>Logout</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab === 'dashboard' && 'Achievement Dashboard'}
              {activeTab === 'projects' && 'Project Showcase'}
              {activeTab === 'contributions' && 'Open Source Contributions'}
              {activeTab === 'rankings' && 'Ranking System'}
            </h2>
          </div>
        </header>
        
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Dashboard Content Component
function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Coding Platform Integration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlatformCard 
            platform="LeetCode" 
            easy={mockAchievements.leetcode.easy} 
            medium={mockAchievements.leetcode.medium} 
            hard={mockAchievements.leetcode.hard} 
            color="orange"
          />
          <PlatformCard 
            platform="HackerRank" 
            easy={mockAchievements.hackerrank.easy} 
            medium={mockAchievements.hackerrank.medium} 
            hard={mockAchievements.hackerrank.hard} 
            color="green"
          />
          <PlatformCard 
            platform="CodeForces" 
            easy={mockAchievements.codeforces.easy} 
            medium={mockAchievements.codeforces.medium} 
            hard={mockAchievements.codeforces.hard} 
            color="blue"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Achievements</h3>
          <div className="space-y-4">
            <AchievementItem 
              title="Solved 100 LeetCode Problems" 
              date="2 days ago" 
              points={50}
            />
            <AchievementItem 
              title="Contributed to React Repository" 
              date="1 week ago" 
              points={100}
            />
            <AchievementItem 
              title="Completed HackerRank Algorithm Certification" 
              date="2 weeks ago" 
              points={75}
            />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Progress Tracking</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Interactive chart showing progress over time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Projects Content Component
function ProjectsContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Project</h3>
        <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          + Add Project
        </button>
      </div>
    </div>
  );
}

// Contributions Content Component
function ContributionsContent() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Open Source Contributions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Repository</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pull Request</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockContributions.map(contribution => (
                <tr key={contribution.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contribution.repo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contribution.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">{contribution.pullRequest}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      contribution.impact === 'High' ? 'bg-green-100 text-green-800' : 
                      contribution.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {contribution.impact}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contribution.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contribution Metrics</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Metrics visualization</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">GitHub Activity</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">GitHub contribution graph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Rankings Content Component
function RankingsContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Global Rank</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">#{mockRankings.global}</p>
          <p className="text-sm text-gray-500 mt-1">Top 5%</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Country Rank</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">#{mockRankings.country}</p>
          <p className="text-sm text-gray-500 mt-1">United States</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Achievement Score</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">{mockRankings.score}</p>
          <p className="text-sm text-gray-500 mt-1">Advanced Level</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Skill Breakdown</h3>
        <div className="space-y-4">
          <SkillBar skill="Problem Solving" percentage={mockRankings.skills.problemSolving} />
          <SkillBar skill="Open Source" percentage={mockRankings.skills.openSource} />
          <SkillBar skill="Projects" percentage={mockRankings.skills.projects} />
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Global Leaderboard</h3>
        <div className="space-y-4">
          <LeaderboardItem rank={1} name="Sarah Chen" score={892} country="China" />
          <LeaderboardItem rank={2} name="Michael Rodriguez" score={875} country="Spain" />
          <LeaderboardItem rank={3} name="Priya Sharma" score={864} country="India" />
          <LeaderboardItem rank={4} name="James Wilson" score={843} country="UK" />
          <LeaderboardItem rank={5} name="Yuki Tanaka" score={821} country="Japan" />
        </div>
      </div>
    </div>
  );
}

// Helper Components
function PlatformCard({ platform, easy, medium, hard, color }) {
  const getColorClass = () => {
    switch(color) {
      case 'orange': return 'bg-orange-100 text-orange-800';
      case 'green': return 'bg-green-100 text-green-800';
      case 'blue': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <div className={`px-4 py-2 ${getColorClass()}`}>
        <h4 className="font-medium">{platform}</h4>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Easy</span>
          <span className="text-sm font-medium text-green-600">{easy}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">Medium</span>
          <span className="text-sm font-medium text-yellow-600">{medium}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Hard</span>
          <span className="text-sm font-medium text-red-600">{hard}</span>
        </div>
        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Total</span>
            <span className="text-sm font-medium">{easy + medium + hard}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AchievementItem({ title, date, points }) {
  return (
    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
      <div className="bg-indigo-100 p-2 rounded-full">
        <Trophy className="h-5 w-5 text-indigo-600" />
      </div>
      <div className="ml-3 flex-1">
        <h4 className="text-sm font-medium text-gray-800">{title}</h4>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <div className="bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded-full">
        +{points} pts
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{project.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex space-x-2">
          <a 
            href={project.demoLink} 
            className="flex-1 text-center py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition"
          >
            Live Demo
          </a>
          <a 
            href={project.repoLink} 
            className="flex-1 text-center py-2 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

function SkillBar({ skill, percentage }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function LeaderboardItem({ rank, name, score, country }) {
  return (
    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
      <div className="w-8 h-8 flex items-center justify-center font-semibold text-gray-700">
        {rank}
      </div>
      <div className="ml-3 flex-1">
        <h4 className="text-sm font-medium text-gray-800">{name}</h4>
        <p className="text-xs text-gray-500">{country}</p>
      </div>
      <div className="font-medium text-indigo-600">
        {score} pts
      </div>
    </div>
  );
}

export default Dashboard;