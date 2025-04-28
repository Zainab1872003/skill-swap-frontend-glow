
import { GraduationCap, Coins, BookCheck, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "1. Create Your Profile",
      description: "Sign up and list your skills and expertise areas. Add your educational background and certifications."
    },
    {
      icon: <Layers className="w-12 h-12 text-primary" />,
      title: "2. Browse Skills",
      description: "Explore available tutorials or create your own to share your knowledge with others."
    },
    {
      icon: <Coins className="w-12 h-12 text-primary" />,
      title: "3. Earn & Spend Coins",
      description: "Get 10 coins when you join. Earn more by teaching, spend them to learn new skills."
    },
    {
      icon: <BookCheck className="w-12 h-12 text-primary" />,
      title: "4. Learn & Grow",
      description: "Attend sessions, rate your experience, and build your skills portfolio."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">How SkillSwap Works</h1>
        <p className="text-xl text-muted-foreground">
          Learn new skills by teaching what you know
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <Button asChild size="lg" className="skill-gradient">
          <Link to="/auth/register">Join SkillSwap Now</Link>
        </Button>
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
