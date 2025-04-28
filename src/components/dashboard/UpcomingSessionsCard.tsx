
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';

interface Session {
  id: string;
  title: string;
  teacher: string;
  date: string;
  time: string;
  isTeaching: boolean;
}

interface UpcomingSessionsCardProps {
  sessions: Session[];
}

const UpcomingSessionsCard = ({ sessions }: UpcomingSessionsCardProps) => {
  if (sessions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>You have no upcoming sessions</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
          <div className="rounded-full bg-muted p-3 mb-4">
            <Video size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No scheduled sessions</h3>
          <p className="text-muted-foreground mb-4">
            Browse the marketplace to find skills to learn or start teaching your own skills!
          </p>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <a href="/marketplace">Find Skills</a>
            </Button>
            <Button className="skill-gradient" asChild>
              <a href="/teach">Teach a Skill</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Sessions</CardTitle>
        <CardDescription>Your scheduled learning and teaching sessions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sessions.map((session) => (
            <div key={session.id} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 border rounded-lg">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{session.title}</h3>
                  <Badge variant={session.isTeaching ? "default" : "secondary"}>
                    {session.isTeaching ? "Teaching" : "Learning"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {session.isTeaching ? "Student" : "Teacher"}: {session.teacher}
                </p>
                <p className="text-sm text-muted-foreground">{session.date} • {session.time}</p>
              </div>
              <div className="flex gap-2 self-end md:self-auto">
                <Button variant="outline" size="sm">Reschedule</Button>
                <Button size="sm">Join</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingSessionsCard;
