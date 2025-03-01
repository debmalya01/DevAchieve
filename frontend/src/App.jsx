import React, { useState } from 'react';
import { 
  Trophy, Code, Github, BarChart3, 
  Settings, LogOut, ChevronRight, 
  ArrowRight, CheckCircle, Lock, User
} from 'lucide-react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = (email, password) => {
    // In a real app, you would validate credentials here
    console.log('Login attempt with:', email, password);
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <LandingPage onLogin={handleLogin} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;