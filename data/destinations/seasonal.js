export const seasonalDestinations = [
{
    id: 's1',
    name: 'Zanzibar, Tanzania',
    image: '/images/seasonal/zanzibar.webp',
    fallbackImage: '/images/seasonal/zanzibar2.webp',
    images: [
      '/images/seasonal/zanzibar.webp',
      '/images/seasonal/zanzibar2.webp'
    ],
    price: 1400,
    duration: '6 days',
    rating: 4.8,
    reviewCount: 765,
    category: ['beach'],
    tags: ['island', 'spice tours', 'historical', 'seasonal'],
    slug: 'zanzibar-tanzania',
    description: 'Tropical island paradise with white sand beaches.',
    detailedDescription: 'Zanzibar is a semi-autonomous region of Tanzania in East Africa. It is composed of the Zanzibar Archipelago in the Indian Ocean, 25-50 kilometers off the coast of the mainland.',
    highlights: ['Stone Town', 'Prison Island', 'Spice plantations'],
    location: {
      lat: -6.1659,
      lng: 39.2026,
      address: 'Zanzibar, Tanzania'
    },
    climate: {
      averageTemp: 27,
      bestTimeToVisit: ['June', 'July', 'August', 'September']
    },
    included: [
      '5 nights beach resort',
      'Breakfast included',
      'Spice tour',
      'Airport transfers'
    ],
    notIncluded: [
      'International flights',
      'Scuba diving',
      'Optional tours'
    ],
    attractions: [
      {
        id: 's1-a1',
        name: 'Stone Town',
        image: '/images/seasonal/stone-town.webp',
        description: 'Historic center of Zanzibar City with unique architecture.',
        tours: [
          {
            id: 's1-a1-t1',
            name: 'Historical Walking Tour',
            price: 45,
            duration: '3 hours',
            highlights: [
              'Old Fort visit',
              'Local market experience',
              'Freddie Mercury House'
            ]
          }
        ]
      }
    ],
    reviews: [
      {
        id: 's1-r1',
        user: 'Emma Thompson',
        avatar: '/avatars/user10.jpg',
        rating: 4,
        date: '2023-08-22',
        title: 'Beautiful Island',
        content: 'The beaches were incredible and the spice tour was fascinating. Stone Town has so much history!'
      }
    ],
    faqs: [
      {
        question: 'Is Zanzibar safe for tourists?',
        answer: 'Yes, Zanzibar is generally safe but take normal precautions against petty theft.'
      }
    ]
  },
  {
  id: 'season1',
  name: 'Kyoto Cherry Blossom',
  image: '/images/seasonal/kyoto-cherry-blossom.webp',
  fallbackImage: '/images/seasonal/kyoto-cherry-blossom2.webp',
  images: [
    '/images/seasonal/kyoto-cherry-blossom.webp',
    '/images/seasonal/kyoto-cherry-blossom2.webp'
  ],
  price: 1500,
  duration: '5 days',
  rating: 4.8,
  reviewCount: 650,
  category: ['seasonal', 'culture', 'nature'],
  tags: ['cherry-blossom', 'spring', 'japan', 'seasonal'],
  slug: 'kyoto-cherry-blossom',
  description: 'Witness the breathtaking cherry blossoms in Kyoto during springtime, a magical and culturally rich experience.',
  detailedDescription: 'Kyoto becomes a breathtaking pink paradise during the cherry blossom season, with hundreds of cherry trees blooming across its temples, parks, and streets. This seasonal event is celebrated with hanami (flower viewing) festivals, traditional tea ceremonies, and cultural activities.',
  highlights: [
    'Hanami picnics under cherry trees',
    'Visit historic temples and shrines',
    'Traditional Japanese tea ceremonies',
    'Guided walking tours through gardens'
  ],
  location: {
    lat: 35.0116,
    lng: 135.7681,
    address: 'Kyoto, Japan'
  },
  climate: {
    averageTemp: 15,
    bestTimeToVisit: ['March', 'April']
  },
  included: [
    '4 nights hotel stay',
    'Daily breakfast',
    'Cherry blossom walking tour',
    'Cultural experience sessions'
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Personal expenses'
  ],
  attractions: [
    {
      id: 'season1-a1',
      name: 'Maruyama Park',
      image: '/images/seasonal/maruyama-park.webp',
      description: 'Kyoto’s most famous spot for cherry blossom viewing.',
      tours: [
        {
          id: 'season1-a1-t1',
          name: 'Evening Hanami Tour',
          price: 60,
          duration: '2 hours',
          highlights: [
            'Illuminated cherry blossoms',
            'Guided cultural insights',
            'Sakura-themed refreshments'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'season1-r1',
      user: 'Emily Zhang',
      avatar: '/avatars/user55.jpg',
      rating: 5,
      date: '2024-04-10',
      title: 'A breathtaking spring!',
      content: 'The cherry blossoms were stunning, and Kyoto’s cultural richness made the trip unforgettable.'
    }
  ],
  faqs: [
    {
      question: 'When is the peak cherry blossom season?',
      answer: 'Typically late March to early April, but it varies slightly each year.'
    }
  ]
},
{
  id: 'season2',
  name: 'Northern Lights in Tromsø',
  image: '/images/seasonal/northern-lights-tromso.webp',
  fallbackImage: '/images/seasonal/northern-lights-tromso2.webp',
  images: [
    '/images/seasonal/northern-lights-tromso.webp',
    '/images/seasonal/northern-lights-tromso2.webp'
  ],
  price: 1700,
  duration: '5 days',
  rating: 4.7,
  reviewCount: 480,
  category: ['seasonal', 'nature', 'adventure'],
  tags: ['northern-lights', 'aurora', 'winter', 'norway', 'seasonal'],
  slug: 'northern-lights-tromso',
  description: 'Experience the spectacular Aurora Borealis in the Arctic city of Tromsø, Norway during the winter months.',
  detailedDescription: 'Tromsø is one of the best places on Earth to witness the Northern Lights. From cozy lodges to snow activities and Sami culture, this seasonal destination offers a magical winter adventure with chances to see the dazzling auroras.',
  highlights: [
    'Northern Lights viewing tours',
    'Dog sledding and snowmobiling',
    'Visit Sami cultural centers',
    'Stay in traditional lodges'
  ],
  location: {
    lat: 69.6496,
    lng: 18.9560,
    address: 'Tromsø, Norway'
  },
  climate: {
    averageTemp: -5,
    bestTimeToVisit: ['December', 'January', 'February', 'March']
  },
  included: [
    '4 nights lodge accommodation',
    'Northern Lights tours',
    'Snow activities',
    'Breakfast and some dinners',
    'Airport transfers'
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Personal expenses'
  ],
  attractions: [
    {
      id: 'season2-a1',
      name: 'Aurora Camp',
      image: '/images/seasonal/aurora-camp.webp',
      description: 'Cozy camp away from city lights perfect for aurora viewing.',
      tours: [
        {
          id: 'season2-a1-t1',
          name: 'Aurora Night Tour',
          price: 100,
          duration: '4 hours',
          highlights: [
            'Guided aurora spotting',
            'Warm drinks and snacks',
            'Photography tips'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'season2-r1',
      user: 'Sven Larsen',
      avatar: '/avatars/user66.jpg',
      rating: 5,
      date: '2024-01-22',
      title: 'Mesmerizing lights!',
      content: 'Seeing the Northern Lights was a dream come true. The guides were excellent and the atmosphere magical.'
    }
  ],
  faqs: [
    {
      question: 'What clothing should I bring?',
      answer: 'Warm winter clothing including thermal layers, hats, gloves, and boots are essential.'
    }
  ]
},
{
  id: 'season3',
  name: 'Serengeti Great Migration',
  image: '/images/seasonal/serengeti.webp',
  fallbackImage: '/images/seasonal/serengeti2.webp',
  images: [
    '/images/seasonal/serengeti.webp',
    '/images/seasonal/serengeti2.webp'
  ],
  price: 1800,
  duration: '6 days',
  rating: 4.9,
  reviewCount: 720,
  category: ['seasonal', 'wildlife', 'adventure', 'safari'],
  tags: ['migration', 'wildlife', 'serengeti', 'tanzania', 'seasonal'],
  slug: 'serengeti-great-migration',
  description: 'Witness the awe-inspiring Great Migration of millions of wildebeests and zebras across the Serengeti plains.',
  detailedDescription: 'The Serengeti National Park in Tanzania hosts one of the most extraordinary natural events on Earth — the annual migration of over 1.5 million wildebeests, accompanied by zebras and gazelles. This journey includes dramatic river crossings fraught with crocodile ambushes and offers unparalleled wildlife viewing opportunities.',
  highlights: [
    'Witness the Mara River crossings',
    'Spot predators like lions, cheetahs, and crocodiles',
    'Guided game drives and walking safaris',
    'Photographic safaris with expert guides'
  ],
  location: {
    lat: -2.3333,
    lng: 34.8333,
    address: 'Serengeti National Park, Tanzania'
  },
  climate: {
    averageTemp: 27,
    bestTimeToVisit: ['June', 'July', 'August', 'September', 'October']
  },
  included: [
    '5 nights lodge or tented camp',
    'All meals',
    'Daily game drives',
    'Park entry fees',
    'Professional safari guides'
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Tips and gratuities'
  ],
  attractions: [
    {
      id: 'season3-a1',
      name: 'Mara River Crossing',
      image: '/images/seasonal/mara-river-crossing.webp',
      description: 'Dramatic river crossings where thousands of animals brave the crocodile-infested waters.',
      tours: [
        {
          id: 'season3-a1-t1',
          name: 'River Crossing Safari',
          price: 200,
          duration: 'Full day',
          highlights: [
            'Close-up views of migration crossings',
            'Expert wildlife commentary',
            'Lunch by the river'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'season3-r1',
      user: 'Anna Roberts',
      avatar: '/avatars/user77.jpg',
      rating: 5,
      date: '2023-09-18',
      title: 'Nature at its finest',
      content: 'The migration was spectacular, and we saw lions hunting by the river. Truly a once-in-a-lifetime experience!'
    }
  ],
  faqs: [
    {
      question: 'When is the best time to see the Great Migration?',
      answer: 'Between June and October, especially July to September for the river crossings.'
    }
  ]
},
{
  id: 'season4',
  name: 'Snow Leopard Expedition',
  image: '/images/seasonal/himalayas-snow-leopard.webp',
  fallbackImage: '/images/seasonal/himalayas-snow-leopard2.webp',
  images: [
    '/images/seasonal/himalayas-snow-leopard.webp',
    '/images/seasonal/himalayas-snow-leopard2.webp'
  ],
  price: 2200,
  duration: '8 days',
  rating: 4.7,
  reviewCount: 230,
  category: ['seasonal', 'wildlife', 'adventure', 'mountains'],
  tags: ['snow-leopard', 'wildlife', 'himalayas', 'nepal', 'seasonal'],
  slug: 'himalayas-snow-leopard',
  description: 'Embark on a rare expedition to glimpse the elusive snow leopard in the remote mountains of Nepal.',
  detailedDescription: 'The high-altitude landscapes of the Nepalese Himalayas are home to the mysterious snow leopard, one of the most elusive big cats in the world. This expedition combines rugged trekking with expert-guided wildlife tracking, offering a chance to see these magnificent predators in their natural habitat.',
  highlights: [
    'Guided snow leopard tracking',
    'Scenic Himalayan trekking',
    'Visit remote mountain villages',
    'Photography of rare wildlife'
  ],
  location: {
    lat: 28.3949,
    lng: 84.1240,
    address: 'Annapurna Region, Nepal'
  },
  climate: {
    averageTemp: -5,
    bestTimeToVisit: ['January', 'February', 'March']
  },
  included: [
    '7 nights lodge and tent accommodation',
    'All meals',
    'Guided treks',
    'Wildlife tracking experts',
    'Airport transfers'
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Permits'
  ],
  attractions: [
    {
      id: 'season4-a1',
      name: 'Snow Leopard Habitat',
      image: '/images/seasonal/snow-leopard-habitat.webp',
      description: 'Remote mountain areas where snow leopards roam.',
      tours: [
        {
          id: 'season4-a1-t1',
          name: 'Tracking Expedition',
          price: 350,
          duration: 'Full day',
          highlights: [
            'Wildlife spotting',
            'Expert guides',
            'Mountain scenery'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'season4-r1',
      user: 'Rajesh Singh',
      avatar: '/avatars/user88.jpg',
      rating: 5,
      date: '2024-02-10',
      title: 'A rare wildlife encounter',
      content: 'Seeing a snow leopard in the wild was unforgettable. The trek was challenging but so worth it!'
    }
  ],
  faqs: [
    {
      question: 'How difficult is the trek?',
      answer: 'Moderate to challenging; prior trekking experience is recommended.'
    }
  ]
},
{
  id: 'season5',
  name: 'Sahara Desert Festival',
  image: '/images/seasonal/sahara-festival.webp',
  fallbackImage: '/images/seasonal/sahara-festival2.webp',
  images: [
    '/images/seasonal/sahara-festival.webp',
    '/images/seasonal/sahara-festival2.webp'
  ],
  price: 1300,
  duration: '4 days',
  rating: 4.5,
  reviewCount: 300,
  category: ['seasonal', 'culture', 'desert'],
  tags: ['sahara', 'desert', 'festival', 'morocco', 'seasonal'],
  slug: 'sahara-desert-festival',
  description: 'Join the vibrant Sahara Desert Festival in Merzouga, experiencing Berber culture, music, and desert adventures.',
  detailedDescription: 'The Sahara Desert Festival is a colorful celebration held annually in Merzouga, Morocco. Visitors can enjoy traditional Berber music, camel trekking over golden dunes, and nights under the stars in desert camps. This festival is perfect for those wanting to immerse themselves in desert culture and stunning landscapes.',
  highlights: [
    'Camel rides on the dunes',
    'Traditional Berber music and dance',
    'Star gazing in the desert',
    'Local crafts and cuisine'
  ],
  location: {
    lat: 31.1025,
    lng: -4.0125,
    address: 'Merzouga, Morocco'
  },
  climate: {
    averageTemp: 30,
    bestTimeToVisit: ['October', 'November', 'February', 'March']
  },
  included: [
    '3 nights desert camp',
    'All meals',
    'Festival access',
    'Camel trekking',
    'Airport transfers'
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Personal expenses'
  ],
  attractions: [
    {
      id: 'season5-a1',
      name: 'Erg Chebbi Dunes',
      image: '/images/seasonal/erg-chebbi-dunes.webp',
      description: 'Towering sand dunes perfect for camel trekking and sunset views.',
      tours: [
        {
          id: 'season5-a1-t1',
          name: 'Sunset Camel Trek',
          price: 50,
          duration: '2 hours',
          highlights: [
            'Camel ride over dunes',
            'Sunset photography',
            'Guided tour'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'season5-r1',
      user: 'Fatima El-Mansouri',
      avatar: '/avatars/user99.jpg',
      rating: 4,
      date: '2023-11-05',
      title: 'A magical desert experience',
      content: 'The festival was lively and the desert scenery spectacular. Loved the camel rides and music.'
    }
  ],
  faqs: [
    {
      question: 'What should I wear in the desert?',
      answer: 'Light, breathable clothing during the day and warm layers for the cool desert nights.'
    }
  ]
} ]


