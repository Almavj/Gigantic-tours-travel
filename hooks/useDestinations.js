import { useState, useEffect } from 'react';
import { 
  kenyanDestinations,
  internationalDestinations,
  filterByCategory
} from '../data/destinations';

const allDestinations = [...kenyanDestinations, ...internationalDestinations];

export const useDestinations = () => {
  const [filtered, setFiltered] = useState(allDestinations);
  const [loading, setLoading] = useState(false);

  const filterDestinations = (category, searchTerm = '') => {
    setLoading(true);
    
    const categoryFiltered = filterByCategory(allDestinations, category);
    
    const searchFiltered = categoryFiltered.filter(dest => 
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFiltered(searchFiltered);
    setLoading(false);
  };

  return { destinations: filtered, loading, filterDestinations };
};