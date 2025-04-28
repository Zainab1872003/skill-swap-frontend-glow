
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface SkillFormProps {
  isOpen: boolean;
  onClose: () => void;
  existingSkill?: {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
  };
}

const SkillForm = ({ isOpen, onClose, existingSkill }: SkillFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: existingSkill?.title || '',
    description: existingSkill?.description || '',
    category: existingSkill?.category || '',
    price: existingSkill?.price || 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setForm(prev => ({
      ...prev,
      category: value
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setForm(prev => ({
        ...prev,
        price: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would be replaced with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: existingSkill ? "Skill Updated" : "Skill Created",
        description: existingSkill 
          ? `${form.title} has been updated successfully.`
          : `${form.title} has been created successfully.`,
      });
      
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock categories
  const categories = [
    { value: "programming", label: "Programming" },
    { value: "design", label: "Design" },
    { value: "language", label: "Languages" },
    { value: "music", label: "Music" },
    { value: "business", label: "Business" },
    { value: "fitness", label: "Fitness" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>
            {existingSkill ? 'Edit Skill' : 'Add New Skill'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Skill Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="E.g., JavaScript Programming"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe what you'll teach in this skill..."
              value={form.description}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              value={form.category}
              onValueChange={handleSelectChange}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">Price (in coins)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              min={1}
              placeholder="10"
              value={form.price}
              onChange={handlePriceChange}
              required
            />
            <p className="text-xs text-gray-500">
              This is how many coins students will pay per session
            </p>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting 
                ? (existingSkill ? "Updating..." : "Creating...")
                : (existingSkill ? "Update Skill" : "Create Skill")
              }
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SkillForm;
