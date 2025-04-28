
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Award, Coins, Calendar } from 'lucide-react';

interface StatisticsCardsProps {
  stats: {
    earnings: number;
    taught: number;
    learned: number;
    scheduled: number;
  };
}

const StatisticsCards = ({ stats }: StatisticsCardsProps) => {
  const cards = [
    {
      title: "Total Coins Earned",
      value: stats.earnings,
      description: "From teaching sessions",
      icon: <Coins className="h-4 w-4 text-skill-coral" />,
      trend: "+12% from last month"
    },
    {
      title: "Sessions Taught",
      value: stats.taught,
      description: "Across all skills",
      icon: <Award className="h-4 w-4 text-skill-indigo" />,
      trend: "+5 since last month"
    },
    {
      title: "Skills Learned",
      value: stats.learned,
      description: "Sessions attended",
      icon: <BookOpen className="h-4 w-4 text-skill-teal" />,
      trend: "+2 since last month"
    },
    {
      title: "Upcoming Sessions",
      value: stats.scheduled,
      description: "In next 7 days",
      icon: <Calendar className="h-4 w-4 text-skill-purple" />,
      trend: "3 teaching, 1 learning"
    }
  ];

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {card.title}
            </CardTitle>
            <div className="rounded-full p-1 bg-muted">
              {card.icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {card.description}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              {card.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatisticsCards;
