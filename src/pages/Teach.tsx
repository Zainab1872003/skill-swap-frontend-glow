
import { BookOpen, Users, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Teach = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Share Your Skills</h1>
        <p className="text-xl text-muted-foreground">
          Make a difference by teaching others and earn coins in return
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <BookOpen className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Create Tutorials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Share your expertise by creating engaging tutorials in your area of expertise
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Users className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Connect with Learners</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Help others grow while building your teaching portfolio
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Coins className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Earn Coins</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get rewarded with coins for every successful teaching session
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button asChild size="lg" className="skill-gradient">
          <Link to="/auth/register">Start Teaching Today</Link>
        </Button>
      </div>
    </div>
  );
};

export default Teach;
