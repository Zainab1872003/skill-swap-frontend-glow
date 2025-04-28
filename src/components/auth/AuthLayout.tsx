
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - content */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 md:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="flex items-center mb-8">
              <span className="skill-gradient rounded-md w-10 h-10 flex items-center justify-center font-bold text-lg">S</span>
              <span className="font-heading font-bold text-2xl ml-2">SkillSwap</span>
            </Link>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-gray-500 mt-2">{subtitle}</p>
          </div>
          
          {children}
        </div>
      </div>
      
      {/* Right side - illustration */}
      <div className="hidden md:flex flex-1 bg-gradient-to-br from-skill-blue to-skill-indigo items-center justify-center p-12">
        <div className="max-w-lg text-white">
          <h2 className="text-3xl font-bold mb-6">Unlock the power of knowledge exchange</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-full mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5 22 16.5 17.5228 16.5 12C16.5 6.47715 14.5 2 12 2M12 22C9.5 22 7.5 17.5228 7.5 12C7.5 6.47715 9.5 2 12 2M2 12C2 6.47715 6.47715 2 12 2M2 12H6" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Global Skill Exchange</h3>
                <p className="text-white/70">Connect with experts and learners from around the world.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-full mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L14 14M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Learn On Your Schedule</h3>
                <p className="text-white/70">Book sessions that fit your availability and learn at your own pace.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 p-2 rounded-full mr-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg">Earn By Teaching</h3>
                <p className="text-white/70">Share your expertise and earn coins to invest in your own learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
