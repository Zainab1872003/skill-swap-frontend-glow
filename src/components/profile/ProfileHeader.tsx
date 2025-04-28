
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pencil, Star, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProfileHeaderProps {
  user: {
    id: string;
    name: string;
    avatar?: string;
    bio: string;
    joinedDate: string;
    verified: boolean;
    rating: number;
    reviewCount: number;
    studentsCount: number;
    sessionsCount: number;
  };
  isOwnProfile?: boolean;
  onTabChange?: (tab: string) => void;
}

const ProfileHeader = ({ 
  user, 
  isOwnProfile = false,
  onTabChange
}: ProfileHeaderProps) => {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <div>
      <div className="relative h-48 rounded-xl overflow-hidden">
        <div className="absolute inset-0 skill-gradient opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-bold text-3xl">Profile</h1>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 -mt-16">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="relative flex-shrink-0 -mt-16">
                <Avatar className="h-24 w-24 border-4 border-white">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-2xl">
                    {user.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {user.verified && (
                  <CheckCircle className="absolute bottom-1 right-1 h-6 w-6 text-blue-600 bg-white rounded-full" />
                )}
              </div>
              <div className="mt-6 sm:mt-0 flex-1">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  {user.verified && (
                    <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">Verified</Badge>
                  )}
                </div>
                <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span>Member since {user.joinedDate}</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                      <span>{user.rating.toFixed(1)}</span>
                      <span className="ml-1">({user.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500 max-w-3xl">
                  {user.bio || "No bio provided yet."}
                </p>
              </div>
            </div>
            <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              {isOwnProfile ? (
                <Button variant="outline" className="flex items-center gap-2">
                  <Pencil className="h-4 w-4" />
                  Edit Profile
                </Button>
              ) : (
                <Button>Message</Button>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 pt-6 border-t">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{user.sessionsCount}</span>
                <span className="text-sm text-gray-500">Sessions</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{user.studentsCount}</span>
                <span className="text-sm text-gray-500">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{user.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{user.reviewCount}</span>
                <span className="text-sm text-gray-500">Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Tabs defaultValue={activeTab} onValueChange={handleTabChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              value="skills"
              className={cn(activeTab === 'skills' && "skill-gradient")}
            >
              Skills Offered
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className={cn(activeTab === 'reviews' && "skill-gradient")}
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className={cn(activeTab === 'history' && "skill-gradient")}
            >
              Teaching History
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileHeader;
