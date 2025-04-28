
import { useState } from 'react';
import SkillCard from '@/components/marketplace/SkillCard';
import FilterSidebar from '@/components/marketplace/FilterSidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Marketplace = () => {
  const isMobile = useIsMobile();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<any>({});

  // Mock data
  const categories = [
    { id: 'programming', name: 'Programming & Development' },
    { id: 'design', name: 'Design & Creative' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'business', name: 'Business & Finance' },
    { id: 'language', name: 'Languages' },
    { id: 'music', name: 'Music' },
    { id: 'academics', name: 'Academics' },
    { id: 'health', name: 'Health & Fitness' },
  ];

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
      title: 'UI/UX Design Principles',
      description: 'Master the key principles of user interface and experience design. Learn to create intuitive and beautiful interfaces.',
      category: 'Design & Creative',
      price: 20,
      rating: 4.9,
      ratingCount: 87,
      studentCount: 24,
      teacher: {
        id: 'user2',
        name: 'Sarah Chen',
      }
    },
    {
      id: '3',
      title: 'Content Marketing Strategy',
      description: 'Develop effective content marketing strategies that drive engagement and conversion.',
      category: 'Marketing',
      price: 12,
      rating: 4.5,
      ratingCount: 63,
      studentCount: 19,
      teacher: {
        id: 'user3',
        name: 'Michael Brown',
        avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=100&auto=format&fit=crop'
      }
    },
    {
      id: '4',
      title: 'Spanish for Beginners',
      description: 'Start your journey to Spanish fluency with lessons focused on practical conversation skills.',
      category: 'Languages',
      price: 10,
      rating: 4.7,
      ratingCount: 92,
      studentCount: 41,
      teacher: {
        id: 'user4',
        name: 'Elena Rodriguez',
      }
    },
    {
      id: '5',
      title: 'Financial Planning Basics',
      description: 'Learn how to manage your finances, create budgets, and plan for your financial future.',
      category: 'Business & Finance',
      price: 18,
      rating: 4.6,
      ratingCount: 45,
      studentCount: 15,
      teacher: {
        id: 'user5',
        name: 'David Wilson',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop'
      }
    },
    {
      id: '6',
      title: 'Guitar for Beginners',
      description: 'Start playing guitar with easy-to-follow lessons covering basic chords, strumming, and simple songs.',
      category: 'Music',
      price: 15,
      rating: 4.8,
      ratingCount: 78,
      studentCount: 32,
      teacher: {
        id: 'user6',
        name: 'James Taylor',
      }
    },
  ];
  
  const handleFilterChange = (filters: any) => {
    console.log('Filters applied:', filters);
    setActiveFilters(filters);
    if (isMobile) {
      setIsFilterOpen(false);
    }
  };

  const clearFilters = () => {
    setActiveFilters({});
  };
  
  const FilterComponent = (
    <FilterSidebar
      categories={categories}
      onFilterChange={handleFilterChange}
    />
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Skill Marketplace</h1>
          <p className="text-gray-500 mt-2">Browse and book sessions with skilled teachers</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop filter sidebar */}
        {!isMobile && (
          <div className="w-64 flex-shrink-0 hidden md:block">
            {FilterComponent}
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input 
                placeholder="Search for skills or teachers..." 
                className="pl-9" 
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="recommended">
                <SelectTrigger className="w-44">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="highest_rated">Highest Rated</SelectItem>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              
              {isMobile && (
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <SlidersHorizontal size={16} />
                      <span>Filters</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <div className="h-full py-6 pr-6">
                      {FilterComponent}
                    </div>
                  </SheetContent>
                </Sheet>
              )}
            </div>
          </div>
          
          {/* Active filters */}
          {Object.keys(activeFilters).length > 0 && (
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-sm text-gray-500">Active filters:</span>
              {activeFilters.searchTerm && (
                <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center">
                  Search: {activeFilters.searchTerm}
                  <button className="ml-1 text-blue-500 hover:text-blue-700">
                    <X size={14} />
                  </button>
                </div>
              )}
              {activeFilters.maxPrice && (
                <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center">
                  Max price: {activeFilters.maxPrice} coins
                  <button className="ml-1 text-blue-500 hover:text-blue-700">
                    <X size={14} />
                  </button>
                </div>
              )}
              {activeFilters.minRating > 0 && (
                <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center">
                  Min rating: {activeFilters.minRating} stars
                  <button className="ml-1 text-blue-500 hover:text-blue-700">
                    <X size={14} />
                  </button>
                </div>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-sm h-7" 
                onClick={clearFilters}
              >
                Clear all
              </Button>
            </div>
          )}
          
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.id}
                id={skill.id}
                title={skill.title}
                description={skill.description}
                category={skill.category}
                price={skill.price}
                rating={skill.rating}
                ratingCount={skill.ratingCount}
                studentCount={skill.studentCount}
                teacher={skill.teacher}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
