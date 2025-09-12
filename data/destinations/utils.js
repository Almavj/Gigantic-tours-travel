import { allDestinations } from './index.js';

export const filterDestinations = (destinations = allDestinations, filters) => {
  return destinations.filter(destination => {
    return Object.entries(filters).every(([key, value]) => {
      if (key === 'priceRange') {
        return destination.price >= value.min && destination.price <= value.max;
      }
      if (key === 'highlights') {
        return value.some(highlight => 
          destination.highlights?.includes(highlight)
        );
      }
      if (key === 'type') {
        return destination.type === value;
      }
      return true;
    });
  });
};

export const sortDestinations = (destinations, sortBy) => {
  if (!destinations || !Array.isArray(destinations)) return [];
  
  return [...destinations].sort((a, b) => {
    if (sortBy === 'price-asc') return (a.price || 0) - (b.price || 0);
    if (sortBy === 'price-desc') return (b.price || 0) - (a.price || 0);
    if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
    return 0;
  });
};

// Removed getAllDestinations from here - it's now in index.jsc