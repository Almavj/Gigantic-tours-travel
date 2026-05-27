export interface DestinationLocation {
  lat: number
  lng: number
  address?: string
  city?: string
  country?: string
}

export interface DestinationClimate {
  averageTemp: number
  bestTimeToVisit: string[]
}

export interface Tour {
  id: string
  name: string
  price: number
  duration: string
  highlights: string[]
}

export interface Attraction {
  id: string
  name: string
  image: string
  description: string
  tours: Tour[]
}

export interface Review {
  id: string
  user: string
  avatar: string
  rating: number
  date: string
  title: string
  content: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Destination {
  id?: string
  name: string
  image?: string
  fallbackImage?: string
  images: string[]
  price: number
  duration: string
  rating: number
  reviewCount: number
  category: string[]
  tags: string[]
  slug: string
  featured?: boolean
  type?: string
  description: string
  detailedDescription: string
  highlights: string[]
  location: DestinationLocation
  climate: DestinationClimate
  included: string[]
  notIncluded: string[]
  attractions: Attraction[]
  reviews: Review[]
  faqs: FAQ[]
}

export interface NavItem {
  name: string
  href: string
}
