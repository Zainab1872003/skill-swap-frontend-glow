
import { Button } from '@/components/ui/button';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatisticsCards from '@/components/dashboard/StatisticsCards';
import UpcomingSessionsCard from '@/components/dashboard/UpcomingSessionsCard';
import RecentActivities from '@/components/dashboard/RecentActivities';
import { PlusCircle } from 'lucide-react';

const Dashboard = () => {
  // Mock data
  const stats = {
    earnings: 160,
    taught: 12,
    learned: 8,
    scheduled: 4
  };

  const upcomingSessions = [
    {
      id: '1',
      title: 'Advanced JavaScript Concepts',
      teacher: 'Alex Johnson',
      date: 'May 2, 2025',
      time: '3:00 PM',
      isTeaching: false
    },
    {
      id: '2',
      title: 'UX Design Fundamentals',
      teacher: 'Sarah Chen',
      date: 'May 5, 2025',
      time: '11:00 AM',
      isTeaching: true
    },
  ];

  const recentActivities = [
    {
      id: '1',
      type: 'session_taught' as const,
      title: 'Data Visualization with D3.js',
      timestamp: '2 hours ago',
      user: {
        name: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop'
      }
    },
    {
      id: '2',
      type: 'review_received' as const,
      title: 'Python for Data Science',
      timestamp: 'Yesterday',
      user: {
        name: 'Michael Brown',
      },
      rating: 5,
      message: 'Great teacher, explained complex concepts in a simple way!'
    },
    {
      id: '3',
      type: 'session_attended' as const,
      title: 'Digital Marketing Basics',
      timestamp: '3 days ago',
      user: {
        name: 'Lisa Taylor',
      }
    },
    {
      id: '4',
      type: 'message_received' as const,
      title: 'UI Design Workshop',
      timestamp: '5 days ago',
      user: {
        name: 'James Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
      },
      message: 'Hi, I\'m interested in your workshop. Do you have any slots available next week?'
    }
  ];

  return (
    <div className="space-y-8">
      <DashboardHeader 
        title="Dashboard"
        subtitle="Welcome back! Here's an overview of your SkillSwap activity"
        action={
          <Button className="skill-gradient">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Skill
          </Button>
        }
        coinBalance={120}
      />

      <StatisticsCards stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UpcomingSessionsCard sessions={upcomingSessions} />
        <RecentActivities activities={recentActivities} />
      </div>
    </div>
  );
};

export default Dashboard;
