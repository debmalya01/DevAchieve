import React, { useState } from 'react';
import { 
  Trophy, Code, Github, BarChart3, 
  ArrowRight, CheckCircle, Lock, User
} from 'lucide-react';

function LandingPage({ onLogin }) {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center space-x-2">
              <Trophy className="h-6 w-6" />
              <h1 className="text-xl font-bold">DevAchieve</h1>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#features" className="hover:text-indigo-200 transition">Features</a>
              <a href="#testimonials" className="hover:text-indigo-200 transition">Testimonials</a>
              <a href="#pricing" className="hover:text-indigo-200 transition">Pricing</a>
              <button 
                onClick={() => setActiveTab('login')}
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition"
              >
                Login
              </button>
            </div>
          </nav>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Showcase Your Developer Journey Like Never Before
              </h2>
              <p className="text-lg md:text-xl mb-8 text-indigo-100">
                DevAchieve brings all your coding achievements, projects, and contributions together in one beautiful portfolio.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveTab('signup')}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition flex items-center"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <a 
                  href="#features"
                  className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition"
                >
                  Learn More
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="flex mb-6">
                  <button
                    className={`flex-1 py-3 font-medium ${activeTab === 'login' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'} rounded-lg`}
                    onClick={() => setActiveTab('login')}
                  >
                    Login
                  </button>
                  <button
                    className={`flex-1 py-3 font-medium ${activeTab === 'signup' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'} rounded-lg ml-4`}
                    onClick={() => setActiveTab('signup')}
                  >
                    Sign Up
                  </button>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="password"
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder={activeTab === 'login' ? "Enter your password" : "Create a password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                  >
                    {activeTab === 'login' ? 'Login to Your Account' : 'Create Your Account'}
                  </button>
                </form>
                
                {activeTab === 'login' && (
                  <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account? 
                    <button 
                      className="text-indigo-600 font-medium ml-1 hover:text-indigo-800"
                      onClick={() => setActiveTab('signup')}
                    >
                      Sign up
                    </button>
                  </p>
                )}
                
                {activeTab === 'signup' && (
                  <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account? 
                    <button 
                      className="text-indigo-600 font-medium ml-1 hover:text-indigo-800"
                      onClick={() => setActiveTab('login')}
                    >
                      Login
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose DevAchieve?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The all-in-one platform to showcase your developer journey and stand out in the tech industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Trophy className="h-8 w-8 text-indigo-600" />}
              title="Achievement Dashboard"
              description="Automatically sync and showcase your coding achievements from LeetCode, HackerRank, and CodeForces."
            />
            <FeatureCard 
              icon={<Code className="h-8 w-8 text-indigo-600" />}
              title="Project Showcase"
              description="Create beautiful visual galleries of your projects with custom descriptions and tech stack tags."
            />
            <FeatureCard 
              icon={<Github className="h-8 w-8 text-indigo-600" />}
              title="Open Source Tracking"
              description="Highlight your contributions to open source projects and track your impact on the community."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-8 w-8 text-indigo-600" />}
              title="Ranking System"
              description="See how you compare to other developers globally and track your progress over time."
            />
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Developers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of developers who have transformed their online presence with DevAchieve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="DevAchieve helped me land my dream job at Google. The interviewer was impressed by my comprehensive portfolio."
              author="Sarah Chen"
              role="Senior Frontend Developer"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            />
            <TestimonialCard 
              quote="I love how DevAchieve automatically syncs with my LeetCode progress. It's the perfect way to showcase my problem-solving skills."
              author="Michael Rodriguez"
              role="Software Engineer"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            />
            <TestimonialCard 
              quote="The ranking system motivates me to keep improving. I've moved up 200 spots globally in just 3 months!"
              author="Priya Sharma"
              role="Full Stack Developer"
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            />
          </div>
        </div>
      </div>
      
      {/* Pricing */}
      <div id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include core features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              tier="Free"
              price="$0"
              description="Perfect for getting started"
              features={[
                "Achievement Dashboard",
                "Up to 3 Projects",
                "Basic Analytics",
                "Community Support"
              ]}
              buttonText="Get Started"
              buttonAction={() => setActiveTab('signup')}
              highlighted={false}
            />
            <PricingCard 
              tier="Pro"
              price="$9"
              period="per month"
              description="Everything you need to grow"
              features={[
                "Everything in Free",
                "Unlimited Projects",
                "Advanced Analytics",
                "Custom Domain",
                "Priority Support"
              ]}
              buttonText="Try Pro"
              buttonAction={() => setActiveTab('signup')}
              highlighted={true}
            />
            <PricingCard 
              tier="Team"
              price="$29"
              period="per month"
              description="For development teams"
              features={[
                "Everything in Pro",
                "Team Dashboard",
                "Team Analytics",
                "Admin Controls",
                "API Access",
                "Dedicated Support"
              ]}
              buttonText="Contact Sales"
              buttonAction={() => window.open('mailto:sales@devachieve.com')}
              highlighted={false}
            />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Trophy className="h-6 w-6 text-indigo-400" />
                <h3 className="text-xl font-bold">DevAchieve</h3>
              </div>
              <p className="text-gray-400">
                Showcase your developer journey like never before.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 DevAchieve. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6">{quote}</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="h-10 w-10 rounded-full mr-3" />
        <div>
          <h4 className="font-medium text-gray-800">{author}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ tier, price, period, description, features, buttonText, buttonAction, highlighted }) {
  return (
    <div className={`rounded-lg overflow-hidden ${highlighted ? 'ring-2 ring-indigo-600 shadow-lg' : 'border border-gray-200'}`}>
      {highlighted && (
        <div className="bg-indigo-600 text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{tier}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-800">{price}</span>
          {period && <span className="text-gray-500 ml-2">{period}</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={buttonAction}
          className={`w-full py-3 rounded-lg font-medium transition ${
            highlighted 
              ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LandingPage;