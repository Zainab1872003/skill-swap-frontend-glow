
import { useState } from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import SkillCard from '@/components/marketplace/SkillCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlusCircle, Star } from 'lucide-react';
import SkillForm from '@/components/profile/SkillForm';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [isSkillFormOpen, setIsSkillFormOpen] = useState(false);

  // Mock user data
  const user = {
    id: 'user1',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
    bio: 'Full-stack developer with 8 years of experience. Passionate about teaching web development and helping others grow their coding skills.',
    joinedDate: 'January 2024',
    verified: true,
    rating: 4.8,
    reviewCount: 124,
    studentsCount: 36,
    sessionsCount: 48
  };

  // Mock skills data
  const skills = [
    {
      id: '1',
      title: 'JavaScript Fundamentals',
      description: 'Learn the basics of JavaScript including variables, functions, objects, and asynchronous programming.',
      category: 'Programming & Development',
      price: 15,
      rating: 4.8,
      ratingCount: 124,
      studentCount: 36,
      teacher: {
        id: 'user1',
        name: 'Alex Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop'
      }
    },
    {
      id: '2',
      title: 'React & Redux Masterclass',
      description: 'Deep dive into React ecosystem with state management using Redux and modern React patterns.',
      category: 'Programming & Development',
      price: 25,
      rating: 4.9,
      ratingCount: 87,
      studentCount: 28,
      teacher: {
        id: 'user1',
        name: 'Alex Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop'
      }
    },
  ];

  // Mock reviews data
  const reviews = [
    {
      id: '1',
      text: "Alex is an exceptional teacher. He explained complex JavaScript concepts in a way that was easy to understand, and was patient with all my questions. Highly recommend!",
      rating: 5,
      date: "April 15, 2025",
      user: {
        name: "Emma Wilson",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
      },
      skillTitle: "JavaScript Fundamentals"
    },
    {
      id: '2',
      text: "Great session on React hooks. Alex provided practical examples and helped me understand some advanced patterns that I was struggling with.",
      rating: 5,
      date: "April 2, 2025",
      user: {
        name: "Michael Brown",
      },
      skillTitle: "React & Redux Masterclass"
    },
    {
      id: '3',
      text: "Very knowledgeable instructor. The session was informative but I felt like we could have covered more material in the allotted time.",
      rating: 4,
      date: "March 28, 2025",
      user: {
        name: "Lisa Taylor",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
      },
      skillTitle: "JavaScript Fundamentals"
    },
  ];

  // Mock history data
  const history = [
    {
      id: '1',
      skillTitle: "JavaScript Fundamentals",
      student: "Emma Wilson",
      date: "April 15, 2025",
      duration: "1 hour",
      earnings: 15,
      rating: 5,
      review: "Alex is an exceptional teacher!"
    },
    {
      id: '2',
      skillTitle: "React & Redux Masterclass",
      student: "Michael Brown",
      date: "April 2, 2025",
      duration: "1.5 hours",
      earnings: 38,
      rating: 5,
      review: "Great session on React hooks."
    },
    {
      id: '3',
      skillTitle: "JavaScript Fundamentals",
      student: "Lisa Taylor",
      date: "March 28, 2025",
      duration: "1 hour",
      earnings: 15,
      rating: 4,
      review: "Very knowledgeable instructor."
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Skills Offered</h2>
              <Button 
                onClick={() => setIsSkillFormOpen(true)}
                className="flex items-center gap-2"
              >
                <PlusCircle size={16} />
                Add Skill
              </Button>
            </div>
            
            {skills.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-muted-foreground mb-4">You haven't added any skills yet.</p>
                  <Button 
                    onClick={() => setIsSkillFormOpen(true)}
                    className="flex items-center gap-2"
                  >
                    <PlusCircle size={16} />
                    Add Your First Skill
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    {...skill}
                  />
                ))}
              </div>
            )}
          </div>
        );
      
      case 'reviews':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-6">Reviews</h2>
            
            {reviews.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-muted-foreground">You haven't received any reviews yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarImage src={review.user.avatar} alt={review.user.name} />
                          <AvatarFallback>
                            {review.user.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{review.user.name}</h3>
                            <div className="flex items-center text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={`${i < review.rating ? 'fill-amber-500' : 'fill-gray-200'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{review.date} • {review.skillTitle}</p>
                          <p className="mt-2">{review.text}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        );
      
      case 'history':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-6">Teaching History</h2>
            
            {history.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-muted-foreground">You haven't taught any sessions yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Skill</th>
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Student</th>
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Date</th>
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Duration</th>
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Earnings</th>
                      <th className="px-4 py-2 text-left font-medium text-muted-foreground">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((session) => (
                      <tr key={session.id} className="border-b">
                        <td className="px-4 py-4">{session.skillTitle}</td>
                        <td className="px-4 py-4">{session.student}</td>
                        <td className="px-4 py-4">{session.date}</td>
                        <td className="px-4 py-4">{session.duration}</td>
                        <td className="px-4 py-4">{session.earnings} coins</td>
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <span className="mr-1">{session.rating}</span>
                            <Star size={14} className="fill-amber-500 text-amber-500" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <ProfileHeader 
        user={user} 
        isOwnProfile={true}
        onTabChange={setActiveTab}
      />
      
      <div className="mt-4">
        {renderTabContent()}
      </div>
      
      <SkillForm 
        isOpen={isSkillFormOpen}
        onClose={() => setIsSkillFormOpen(false)}
      />
    </div>
  );
};

export default Profile;
