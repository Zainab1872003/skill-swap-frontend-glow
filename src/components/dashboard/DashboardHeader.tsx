
import { ReactNode } from 'react';
import { Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  coinBalance?: number;
}

const DashboardHeader = ({ 
  title, 
  subtitle, 
  action,
  coinBalance
}: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
      </div>
      
      <div className="flex items-center gap-4">
        {coinBalance !== undefined && (
          <div className="flex items-center gap-2 bg-amber-50 text-skill-coral font-medium px-4 py-2 rounded-full">
            <Coins size={18} />
            <span>{coinBalance}</span>
            <Button variant="link" size="sm" className="text-skill-coral px-0 h-auto">
              Get more
            </Button>
          </div>
        )}
        
        {action}
      </div>
    </div>
  );
};

export default DashboardHeader;
