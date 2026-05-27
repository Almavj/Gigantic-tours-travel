import type { Destination } from '../types/destination';
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
