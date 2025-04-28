
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SkillCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  ratingCount: number;
  studentCount: number;
  teacher: {
    id: string;
    name: string;
    avatar?: string;
  };
}

const SkillCard = ({
  id,
  title,
  description,
  category,
  price,
  rating,
  ratingCount,
  studentCount,
  teacher,
}: SkillCardProps) => {
  return (
    <Link to={`/skill/${id}`} className="block">
      <Card className="h-full transition-all hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline">{category}</Badge>
            <div className="flex items-center text-amber-500">
              <Star className="h-3.5 w-3.5 fill-current text-amber-500 mr-1" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground ml-1">({ratingCount})</span>
            </div>
          </div>
          <h3 className="font-heading font-semibold text-lg">{title}</h3>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2 w-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={teacher.avatar} alt={teacher.name} />
              <AvatarFallback>{teacher.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">{teacher.name}</p>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users size={14} />
              <span className="text-xs">{studentCount}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Coins className="h-4 w-4 text-skill-coral mr-1" />
              <span className="font-medium">{price}</span>
              <span className="text-xs text-muted-foreground ml-1">coins</span>
            </div>
            <Button size="sm">Book Session</Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default SkillCard;
