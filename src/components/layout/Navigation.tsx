
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Menu, X, User, LogOut, Settings, Book, Coins } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Auth state would typically come from a context/Redux
  const isLoggedIn = false; // Placeholder, replace with actual auth state

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="skill-gradient rounded-md w-8 h-8 flex items-center justify-center font-bold">S</span>
              <span className="font-heading font-bold text-xl">SkillSwap</span>
            </Link>
          </div>

          {!isMobile && (
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/marketplace" className="text-sm font-medium hover:text-primary transition-colors">
                Explore Skills
              </Link>
              <Link to="/teach" className="text-sm font-medium hover:text-primary transition-colors">
                Teach
              </Link>
              <Link to="/learn" className="text-sm font-medium hover:text-primary transition-colors">
                Learn
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </Link>
            </div>
          )}

          <div className="flex items-center space-x-4">
            {!isMobile && (
              <Button variant="outline" size="sm" className="gap-2">
                <Search size={16} />
                <span>Search Skills</span>
              </Button>
            )}

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard/coins" className="flex items-center gap-1 text-skill-coral font-medium">
                  <Coins size={18} />
                  <span>120</span>
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>US</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="flex items-center gap-2 cursor-pointer w-full">
                        <User size={16} />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center gap-2 cursor-pointer w-full">
                        <Settings size={16} />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/skills" className="flex items-center gap-2 cursor-pointer w-full">
                        <Book size={16} />
                        <span>My Skills</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <div className="flex items-center gap-2 cursor-pointer w-full">
                        <LogOut size={16} />
                        <span>Logout</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/auth/login">Log in</Link>
                </Button>
                <Button asChild className="skill-gradient">
                  <Link to="/auth/register">Sign up</Link>
                </Button>
              </div>
            )}
            
            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <Link to="/marketplace" className="py-2 text-sm font-medium">
              Explore Skills
            </Link>
            <Link to="/teach" className="py-2 text-sm font-medium">
              Teach
            </Link>
            <Link to="/learn" className="py-2 text-sm font-medium">
              Learn
            </Link>
            <Link to="/about" className="py-2 text-sm font-medium">
              How It Works
            </Link>
            <div className="relative w-full py-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input 
                className="w-full rounded-md pl-9 pr-4 py-2 text-sm border" 
                placeholder="Search for skills..."
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
