
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Category {
  id: string;
  name: string;
}

interface FilterSidebarProps {
  categories: Category[];
  onFilterChange: (filters: any) => void;
}

const FilterSidebar = ({ categories, onFilterChange }: FilterSidebarProps) => {
  const [maxPrice, setMaxPrice] = useState([50]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minRating, setMinRating] = useState([0]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setSelectedCategories(prev => {
      if (checked) {
        return [...prev, categoryId];
      } else {
        return prev.filter(id => id !== categoryId);
      }
    });
  };

  const applyFilters = () => {
    onFilterChange({
      maxPrice: maxPrice[0],
      categories: selectedCategories,
      minRating: minRating[0],
      searchTerm
    });
  };

  const resetFilters = () => {
    setMaxPrice([50]);
    setSelectedCategories([]);
    setMinRating([0]);
    setSearchTerm("");
    onFilterChange({
      maxPrice: 50,
      categories: [],
      minRating: 0,
      searchTerm: ""
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input
            placeholder="Search skills..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Price Range (Coins)</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={maxPrice}
            max={100}
            step={1}
            onValueChange={setMaxPrice}
          />
          <div className="flex items-center justify-between">
            <span className="text-sm">0 coins</span>
            <span className="text-sm font-medium">{maxPrice[0]} coins</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
          {categories.map(category => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category.id}`} 
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true)}
              />
              <Label htmlFor={`category-${category.id}`} className="text-sm">
                {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-medium mb-3">Minimum Rating</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={minRating}
            max={5}
            step={0.5}
            onValueChange={setMinRating}
          />
          <div className="flex items-center justify-between">
            <span className="text-sm">0</span>
            <span className="text-sm font-medium">{minRating[0]} stars</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <Button onClick={applyFilters} className="w-full">Apply Filters</Button>
        <Button onClick={resetFilters} variant="outline" className="w-full">Reset</Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
