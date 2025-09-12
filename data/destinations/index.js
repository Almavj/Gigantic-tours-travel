// Import the individual destination files first
import { kenyanDestinations } from './kenya';
import { internationalDestinations } from './international';
import { seasonalDestinations } from './seasonal';
export { destinations };
// Export individual collections
export { kenyanDestinations, internationalDestinations, seasonalDestinations };

// Create the combined array of all destinations
export const allDestinations = [
  ...kenyanDestinations,
  ...internationalDestinations,
  ...seasonalDestinations
];

// Hand-picked slugs for different sections
const HOMEPAGE_DESTINATION_SLUGS = [
  'maasai-mara',      // Kenyan
  'diani-beach',      // Kenyan
  'bali-indonesia',   // International
  'santorini'         // International
];

const FEATURED_DESTINATION_SLUGS = [
  'masai-mara',       // Note: keeping your original slug
  'serengeti',
  'diani-beach',
  'samburu'
];

const SEASONAL_FEATURED_SLUGS = [
  'amboseli-elephants',
  'lamu-island',
  'tsavo-migration'
];

// Create filtered destination collections
export const homeDestinations = allDestinations.filter(dest => 
  HOMEPAGE_DESTINATION_SLUGS.includes(dest.slug)
);

export const featuredDestinations = allDestinations.filter(dest => 
  FEATURED_DESTINATION_SLUGS.includes(dest.slug)
);

export const seasonalFeatured = allDestinations.filter(dest => 
  SEASONAL_FEATURED_SLUGS.includes(dest.slug)
);

// Selected destinations (combines featured and seasonal)
export const selectedDestinations = [
  ...featuredDestinations,
  ...seasonalFeatured
];

// Other destinations (everything not in selected)
export const otherDestinations = allDestinations.filter(dest => 
  !FEATURED_DESTINATION_SLUGS.includes(dest.slug) && 
  !SEASONAL_FEATURED_SLUGS.includes(dest.slug)
);

// Cache for frequently accessed data
const destinationCache = {
  bySlug: new Map(),
  byCategory: new Map(),
  byTag: new Map()
};

// Initialize cache
allDestinations.forEach(dest => {
  // Cache by slug
  destinationCache.bySlug.set(dest.slug, dest);
  
  // Cache by category
  if (dest.category) {
    dest.category.forEach(cat => {
      const normalizedCat = cat.toLowerCase();
      if (!destinationCache.byCategory.has(normalizedCat)) {
        destinationCache.byCategory.set(normalizedCat, []);
      }
      destinationCache.byCategory.get(normalizedCat).push(dest);
    });
  }
  
  // Cache by tag
  if (dest.tags) {
    dest.tags.forEach(tag => {
      const normalizedTag = tag.toLowerCase();
      if (!destinationCache.byTag.has(normalizedTag)) {
        destinationCache.byTag.set(normalizedTag, []);
      }
      destinationCache.byTag.get(normalizedTag).push(dest);
    });
  }
});

// Utility functions
export function getAllDestinations() {
  return allDestinations;
}

export function getDestinationBySlug(slug) {
  return destinationCache.bySlug.get(slug) || null;
}

export function getAllDestinationSlugs() {
  return allDestinations.map(dest => ({
    params: { slug: dest.slug }
  }));
}

export function getDestinationsByCategory(category) {
  const normalizedCategory = category.toLowerCase();
  return destinationCache.byCategory.get(normalizedCategory) || [];
}

export function getDestinationsByTag(tag) {
  const normalizedTag = tag.toLowerCase();
  return destinationCache.byTag.get(normalizedTag) || [];
}

export function getRelatedDestinations(destination, limit = 3) {
  if (!destination) return [];
  
  // Find destinations with matching categories
  const related = [];
  if (destination.category) {
    destination.category.forEach(cat => {
      const categoryDests = getDestinationsByCategory(cat);
      categoryDests.forEach(dest => {
        if (dest.slug !== destination.slug && !related.some(r => r.slug === dest.slug)) {
          related.push(dest);
        }
      });
    });
  }
  
  // If not enough by category, try tags
  if (related.length < limit && destination.tags) {
    destination.tags.forEach(tag => {
      const tagDests = getDestinationsByTag(tag);
      tagDests.forEach(dest => {
        if (dest.slug !== destination.slug && !related.some(r => r.slug === dest.slug)) {
          related.push(dest);
        }
      });
    });
  }
  
  // Sort by rating and limit results
  return related
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
}

export function filterDestinations(destinations, filters) {
  if (!destinations || !Array.isArray(destinations)) return [];
  
  return destinations.filter(destination => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      
      switch (key) {
        case 'priceRange':
          return destination.price >= value.min && destination.price <= value.max;
        
        case 'highlights':
          return Array.isArray(destination.highlights) && value.some(highlight => 
            destination.highlights.includes(highlight)
          );
        
        case 'type':
          return destination.type === value;
        
        case 'category':
          return Array.isArray(destination.category) && destination.category.includes(value);
        
        case 'tag':
          return Array.isArray(destination.tags) && destination.tags.includes(value);
        
        default:
          return true;
      }
    });
  });
}

export function sortDestinations(destinations, sortBy) {
  if (!destinations || !Array.isArray(destinations)) return [];
  
  return [...destinations].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return (a.price || 0) - (b.price || 0);
      
      case 'price-desc':
        return (b.price || 0) - (a.price || 0);
      
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      
      case 'duration-asc': {
        const aDuration = typeof a.duration === 'string' ? parseInt(a.duration.split(' ')[0], 10) : 0;
        const bDuration = typeof b.duration === 'string' ? parseInt(b.duration.split(' ')[0], 10) : 0;
        return aDuration - bDuration;
      }
      
      case 'duration-desc': {
        const aDuration = typeof a.duration === 'string' ? parseInt(a.duration.split(' ')[0], 10) : 0;
        const bDuration = typeof b.duration === 'string' ? parseInt(b.duration.split(' ')[0], 10) : 0;
        return bDuration - aDuration;
      }
      
      case 'alphabetical':
        return (a.title || '').localeCompare(b.title || '');
      
      default:
        return 0;
    }
  });
}

// Helper function to get destinations for display
export function getDestinationsForDisplay() {
  return {
    selected: selectedDestinations,
    others: otherDestinations,
    featured: featuredDestinations,
    seasonal: seasonalFeatured,
    home: homeDestinations,
    all: allDestinations
  };
}

// Stats helper
export function getDestinationStats() {
  return {
    total: allDestinations.length,
    selected: selectedDestinations.length,
    others: otherDestinations.length,
    featured: featuredDestinations.length,
    seasonal: seasonalFeatured.length,
    home: homeDestinations.length
  };
}