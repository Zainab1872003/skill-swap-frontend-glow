
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Award, BookOpen, MessageSquare, Star } from 'lucide-react';

interface Activity {
  id: string;
  type: 'session_taught' | 'session_attended' | 'review_received' | 'message_received';
  title: string;
  timestamp: string;
  user?: {
    name: string;
    avatar?: string;
  };
  rating?: number;
  message?: string;
}

interface RecentActivitiesProps {
  activities: Activity[];
}

const RecentActivities = ({ activities }: RecentActivitiesProps) => {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'session_taught':
        return <Award className="h-4 w-4 text-skill-indigo" />;
      case 'session_attended':
        return <BookOpen className="h-4 w-4 text-skill-teal" />;
      case 'review_received':
        return <Star className="h-4 w-4 text-skill-coral" />;
      case 'message_received':
        return <MessageSquare className="h-4 w-4 text-skill-purple" />;
    }
  };

  const getActivityTitle = (activity: Activity) => {
    switch (activity.type) {
      case 'session_taught':
        return (
          <>
            You taught <span className="font-medium">{activity.title}</span> to{' '}
            <span className="font-medium">{activity.user?.name}</span>
          </>
        );
      case 'session_attended':
        return (
          <>
            You attended <span className="font-medium">{activity.title}</span> by{' '}
            <span className="font-medium">{activity.user?.name}</span>
          </>
        );
      case 'review_received':
        return (
          <>
            <span className="font-medium">{activity.user?.name}</span> gave you a{' '}
            <span className="font-medium">{activity.rating}-star rating</span> for{' '}
            <span className="font-medium">{activity.title}</span>
          </>
        );
      case 'message_received':
        return (
          <>
            <span className="font-medium">{activity.user?.name}</span> sent you a message about{' '}
            <span className="font-medium">{activity.title}</span>
          </>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest interactions and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              {activity.user && (
                <Avatar className="h-9 w-9 mr-4">
                  <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                  <AvatarFallback>
                    {activity.user.name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              )}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-full p-1 bg-muted">
                    {getActivityIcon(activity.type)}
                  </div>
                  <p className="text-sm">
                    {getActivityTitle(activity)}
                  </p>
                </div>
                {activity.message && (
                  <div className="text-sm text-muted-foreground ml-7">
                    "{activity.message}"
                  </div>
                )}
                <p className="text-xs text-muted-foreground ml-7">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
