
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

const RegisterForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (form.password !== form.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // This would be replaced with actual registration
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Registration Successful",
        description: "Welcome to SkillSwap! You've been awarded 10 coins to start your journey.",
      });
      
      // Redirect would happen here
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    setIsLoading(true);
    
    // This would be replaced with Google OAuth
    toast({
      title: "Google Authentication",
      description: "Connecting to Google...",
    });
    
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Button 
        variant="outline" 
        className="w-full flex items-center gap-3"
        onClick={handleGoogleSignup}
        disabled={isLoading}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_2)">
            <path d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.8789 15.7789 19.9895 13.221 19.9895 10.1871Z" fill="#4285F4"/>
            <path d="M10.1993 19.9314C12.9527 19.9314 15.2643 19.0456 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9314 10.1993 19.9314Z" fill="#34A853"/>
            <path d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z" fill="#FBBC05"/>
            <path d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z" fill="#EB4335"/>
          </g>
          <defs>
            <clipPath id="clip0_1_2">
              <rect width="20" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        Sign up with Google
      </Button>

      <div className="flex items-center">
        <Separator className="flex-1" />
        <span className="px-3 text-xs text-gray-400">OR</span>
        <Separator className="flex-1" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input 
            id="name"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input 
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input 
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full skill-gradient"
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </Button>
        
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>
        
        <p className="text-xs text-gray-500 text-center">
          By signing up, you agree to our{" "}
          <Link to="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
