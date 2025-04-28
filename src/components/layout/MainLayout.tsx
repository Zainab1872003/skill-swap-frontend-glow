
import { ReactNode } from 'react';
import Navigation from './Navigation';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  const isAuthPage = location.pathname.includes('/auth');

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Navigation />}
      <main className={`flex-1 ${!isAuthPage ? 'container mx-auto px-4 py-6' : ''}`}>
        {children}
      </main>
      
      {!isAuthPage && (
        <footer className="bg-white border-t py-6">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default MainLayout;
