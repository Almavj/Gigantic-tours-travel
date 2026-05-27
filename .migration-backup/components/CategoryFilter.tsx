import { useState, useEffect } from 'react';
import { Destination } from '../types/destination';

interface CategoryFilterProps {
  categories: string[];
  destinations?: Destination[];
  onFilterChange?: (filtered: Destination[]) => void;
}

export default function CategoryFilter({ categories, destinations = [], onFilterChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (onFilterChange) {
      if (activeCategory === 'all') {
        onFilterChange(destinations);
      } else {
        onFilterChange(
          destinations.filter(dest =>
            dest.category?.some(cat => cat.toLowerCase() === activeCategory.toLowerCase())
          )
        );
      }
    }
  }, [activeCategory, destinations, onFilterChange]);

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setActiveCategory('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
            activeCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
