import type { Destination } from '../../types/destination';
import { kenyanDestinations } from './kenya';
import { internationalDestinations } from './international';
import { seasonalDestinations } from './seasonal';

export { kenyanDestinations, internationalDestinations, seasonalDestinations };

export const allDestinations: Destination[] = [
  ...kenyanDestinations,
  ...internationalDestinations,
  ...seasonalDestinations
];

const HOMEPAGE_DESTINATION_SLUGS = [
  'maasai-mara',
  'diani-beach',
  'bali-indonesia',
  'santorini'
];

const FEATURED_DESTINATION_SLUGS = [
  'masai-mara',
  'serengeti',
  'diani-beach',
  'samburu'
];

const SEASONAL_FEATURED_SLUGS = [
  'amboseli-elephants',
  'lamu-island',
  'tsavo-migration'
];

export const homeDestinations: Destination[] = allDestinations.filter(dest =>
  HOMEPAGE_DESTINATION_SLUGS.includes(dest.slug)
);

export const featuredDestinations: Destination[] = allDestinations.filter(dest =>
  FEATURED_DESTINATION_SLUGS.includes(dest.slug)
);

export const seasonalFeatured: Destination[] = allDestinations.filter(dest =>
  SEASONAL_FEATURED_SLUGS.includes(dest.slug)
);

export const selectedDestinations: Destination[] = [
  ...featuredDestinations,
  ...seasonalFeatured
];

export const otherDestinations: Destination[] = allDestinations.filter(dest =>
  !FEATURED_DESTINATION_SLUGS.includes(dest.slug) &&
  !SEASONAL_FEATURED_SLUGS.includes(dest.slug)
);

const destinationCache: {
  bySlug: Map<string, Destination>;
  byCategory: Map<string, Destination[]>;
  byTag: Map<string, Destination[]>;
} = {
  bySlug: new Map(),
  byCategory: new Map(),
  byTag: new Map()
};

allDestinations.forEach(dest => {
  destinationCache.bySlug.set(dest.slug, dest);

  if (dest.category) {
    dest.category.forEach(cat => {
      const normalizedCat = cat.toLowerCase();
      if (!destinationCache.byCategory.has(normalizedCat)) {
        destinationCache.byCategory.set(normalizedCat, []);
      }
      destinationCache.byCategory.get(normalizedCat)!.push(dest);
    });
  }

  if (dest.tags) {
    dest.tags.forEach(tag => {
      const normalizedTag = tag.toLowerCase();
      if (!destinationCache.byTag.has(normalizedTag)) {
        destinationCache.byTag.set(normalizedTag, []);
      }
      destinationCache.byTag.get(normalizedTag)!.push(dest);
    });
  }
});

export function getAllDestinations(): Destination[] {
  return allDestinations;
}

export function getDestinationBySlug(slug: string): Destination | null {
  return destinationCache.bySlug.get(slug) || null;
}

export function getAllDestinationSlugs(): { params: { slug: string } }[] {
  return allDestinations.map(dest => ({
    params: { slug: dest.slug }
  }));
}

export function getDestinationsByCategory(category: string): Destination[] {
  const normalizedCategory = category.toLowerCase();
  return destinationCache.byCategory.get(normalizedCategory) || [];
}

export function getDestinationsByTag(tag: string): Destination[] {
  const normalizedTag = tag.toLowerCase();
  return destinationCache.byTag.get(normalizedTag) || [];
}

export function getRelatedDestinations(destination: Destination, limit: number = 3): Destination[] {
  if (!destination) return [];

  const related: Destination[] = [];
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

  return related
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
}

export function filterDestinations(
  destinations: Destination[],
  filters: Record<string, any>
): Destination[] {
  if (!destinations || !Array.isArray(destinations)) return [];

  return destinations.filter(destination => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;

      switch (key) {
        case 'priceRange':
          return destination.price >= value.min && destination.price <= value.max;

        case 'highlights':
          return Array.isArray(destination.highlights) && value.some((highlight: string) =>
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

export function sortDestinations(destinations: Destination[], sortBy: string): Destination[] {
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
        return (a.name || '').localeCompare(b.name || '');

      default:
        return 0;
    }
  });
}

export function getDestinationsForDisplay(): {
  selected: Destination[];
  others: Destination[];
  featured: Destination[];
  seasonal: Destination[];
  home: Destination[];
  all: Destination[];
} {
  return {
    selected: selectedDestinations,
    others: otherDestinations,
    featured: featuredDestinations,
    seasonal: seasonalFeatured,
    home: homeDestinations,
    all: allDestinations
  };
}

export function getDestinationStats(): {
  total: number;
  selected: number;
  others: number;
  featured: number;
  seasonal: number;
  home: number;
} {
  return {
    total: allDestinations.length,
    selected: selectedDestinations.length,
    others: otherDestinations.length,
    featured: featuredDestinations.length,
    seasonal: seasonalFeatured.length,
    home: homeDestinations.length
  };
}
