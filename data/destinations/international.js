export const internationalDestinations = [
{
    id: 'i1',
    name: 'Bali, Indonesia',
    image: '/images/bali-1.webp',
    fallbackImage: '/images/international/Bali Indonesia2.webp',
    images: [
      '/images/international/Bali Indonesia.webp',
      '/images/international/Bali Indonesia2.webp',
      '/images/international/Bali Indonesia.webp'
    ],
    price: 1800,
    duration: '7 days',
    rating: 4.9,
    reviewCount: 1245,
    category: ['beach', 'cultural'],
    tags: ['luxury', 'romantic', 'honeymoon'],
    slug: 'bali-indonesia',
    description: 'The island of gods with beautiful beaches and temples.',
    detailedDescription: 'Bali is a tropical paradise known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites like the cliffside Uluwatu Temple.',
    highlights: ['Uluwatu Temple', 'Tegallalang Rice Terraces', 'Seminyak Beach'],
    location: {
      lat: -8.409518,
      lng: 115.188919,
      address: 'Bali, Indonesia'
    },
    climate: {
      averageTemp: 28,
      bestTimeToVisit: ['April', 'May', 'June', 'September', 'October']
    },
    included: [
      '6 nights accommodation',
      'Airport transfers',
      'Daily breakfast',
      '3 guided tours'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Personal expenses'
    ],
    attractions: [
      {
        id: 'i1-a1',
        name: 'Uluwatu Temple',
        image: '/images/international/uluwatu-temple.webp',
        description: 'Stunning sea temple perched on a cliff with breathtaking ocean views.',
        tours: [
          {
            id: 'i1-a1-t1',
            name: 'Sunset Kecak Dance Tour',
            price: 75,
            duration: '4 hours',
            highlights: [
              'Traditional Kecak fire dance',
              'Spectacular sunset views',
              'Cultural performance'
            ]
          }
        ]
      }
    ],
    reviews: [
      {
        id: 'i1-r1',
        user: 'Sarah Johnson',
        avatar: '/avatars/user1.jpg',
        rating: 5,
        date: '2023-05-15',
        title: 'Paradise on Earth',
        content: 'Bali exceeded all our expectations. The beaches were pristine and the culture was fascinating.'
      }
    ],
    faqs: [
      {
        question: 'What is the best time to visit Bali?',
        answer: 'The dry season from April to October offers the best weather.'
      }
    ]
  },
  {
  id: 'int2',
  name: 'Santorini',
  image: '/images/international/santorini.webp',
  fallbackImage: '/images/international/santorini2.webp',
  images: [
    '/images/international/santorini.webp',
    '/images/international/santorini2.webp'
  ],
  price: 1800,
  duration: '6 days',
  rating: 4.9,
  reviewCount: 947,
  category: ['romantic', 'island'],
  tags: ['greece', 'international', 'luxury', 'scenic', 'couples'],
  slug: 'santorini',
  description: 'Discover iconic whitewashed villages, crystal-clear waters, and unforgettable sunsets over the Aegean Sea.',
  detailedDescription: 'Santorini, part of the Cyclades islands in the Aegean Sea, is famous for its dramatic views, stunning sunsets, and volcanic-sand beaches. The island offers a mix of romance, history, and relaxation, making it ideal for couples and adventurers alike. Explore ancient ruins, enjoy fresh Mediterranean cuisine, and unwind in charming cliffside resorts.',
  highlights: [
    'Sunset views in Oia',
    'Wine tasting tours',
    'Sailing around the caldera',
    'Volcano and hot spring visits'
  ],
  location: {
    lat: 36.3932,
    lng: 25.4615,
    address: 'Santorini, Greece'
  },
  climate: {
    averageTemp: 24,
    bestTimeToVisit: ['May', 'June', 'September', 'October']
  },
  included: [
    '5 nights hotel accommodation',
    'Breakfast daily',
    'Airport transfers',
    'Santorini volcano boat tour',
    'Travel insurance'
  ],
  notIncluded: [
    'International flights to Greece',
    'Lunch and dinner',
    'Optional excursions'
  ],
  attractions: [
    {
      id: 'int2-a1',
      name: 'Oia Village',
      image: '/images/international/oia-santorini.webp',
      description: 'Explore narrow alleys, traditional shops, and the most photographed sunset spot in Greece.',
      tours: [
        {
          id: 'int2-a1-t1',
          name: 'Oia Sunset Walking Tour',
          price: 90,
          duration: '3 hours',
          highlights: [
            'Guided exploration',
            'Photo stops at iconic viewpoints',
            'Traditional Greek dessert tasting'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'int2-r1',
      user: 'Emily Turner',
      avatar: '/avatars/user12.jpg',
      rating: 5,
      date: '2024-08-02',
      title: 'Magical Honeymoon Spot',
      content: 'We had the most romantic time in Santorini! The sunsets were breathtaking, and the hospitality was top-notch.'
    }
  ],
  faqs: [
    {
      question: 'Do I need a visa to visit Greece?',
      answer: 'It depends on your country of origin. Most EU and U.S. passport holders can stay visa-free for up to 90 days.'
    }
  ]
},

{
  id: 'int3',
  name: 'Kyoto',
  image: '/images/international/kyoto.webp',
  fallbackImage: '/images/international/kyoto2.webp',
  images: [
    '/images/international/kyoto.webp',
    '/images/international/kyoto2.webp'
  ],
  price: 1600,
  duration: '6 days',
  rating: 4.8,
  reviewCount: 783,
  category: ['cultural', 'city'],
  tags: ['japan', 'international', 'culture', 'temples', 'scenic'],
  slug: 'kyoto',
  description: 'Step into timeless beauty in Kyoto—Japan’s cultural capital with centuries-old temples, tea houses, and cherry blossoms.',
  detailedDescription: 'Kyoto, once the capital of Japan, is known for its classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses. It’s a perfect mix of historical charm and modern convenience. Walk through geisha districts, take part in tea ceremonies, and witness the elegance of ancient Japan.',
  highlights: [
    'Fushimi Inari Shrine',
    'Arashiyama Bamboo Forest',
    'Gion geisha district',
    'Traditional tea ceremonies'
  ],
  location: {
    lat: 35.0116,
    lng: 135.7681,
    address: 'Kyoto, Japan'
  },
  climate: {
    averageTemp: 16,
    bestTimeToVisit: ['March', 'April', 'October', 'November']
  },
  included: [
    '5 nights in a traditional ryokan (Japanese inn)',
    'Daily breakfast and 2 cultural dinners',
    'Private guided tours',
    'Entry to selected temples and shrines',
    'Travel insurance'
  ],
  notIncluded: [
    'International flights to Japan',
    'Personal expenses',
    'Rail pass (can be arranged separately)'
  ],
  attractions: [
    {
      id: 'int3-a1',
      name: 'Fushimi Inari Taisha',
      image: '/images/international/fushimi-inari.webp',
      description: 'Walk through the iconic red torii gates of Kyoto’s most famous shrine.',
      tours: [
        {
          id: 'int3-a1-t1',
          name: 'Sunrise Shrine Hike',
          price: 75,
          duration: '2.5 hours',
          highlights: [
            'Early access to avoid crowds',
            'Local guide with cultural insights',
            'Scenic trail photography'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'int3-r1',
      user: 'Liam Chen',
      avatar: '/avatars/user18.jpg',
      rating: 5,
      date: '2024-10-14',
      title: 'Cultural immersion at its best',
      content: 'Kyoto offered such a peaceful and rich cultural experience. I loved the temples and getting to try on traditional attire.'
    }
  ],
  faqs: [
    {
      question: 'Is Kyoto suitable for first-time travelers to Japan?',
      answer: 'Absolutely. It’s tourist-friendly, has plenty of English signage, and offers a deep cultural experience.'
    }
  ]
},
{
  id: 'int4',
  name: 'Barcelona',
  image: '/images/international/barcelona.webp',
  fallbackImage: '/images/international/barcelona2.webp',
  images: [
    '/images/international/barcelona.webp',
    '/images/international/barcelona.webp'
  ],
  price: 1400,
  duration: '5 days',
  rating: 4.7,
  reviewCount: 920,
  category: ['city', 'cultural', 'beach'],
  tags: ['spain', 'europe', 'architecture', 'beach', 'culture'],
  slug: 'barcelona',
  description: 'Discover Barcelona’s stunning architecture, sandy beaches, and vibrant food scene in the heart of Catalonia.',
  detailedDescription: 'Barcelona is famous for its unique blend of Gothic and Modernist architecture, stunning Mediterranean coastline, and lively street culture. Highlights include the awe-inspiring works of Antoni Gaudí, bustling markets, and tapas bars that offer a true taste of Catalan cuisine.',
  highlights: [
    'Sagrada Familia Basilica',
    'Park Güell',
    'La Rambla',
    'Barceloneta Beach'
  ],
  location: {
    lat: 41.3851,
    lng: 2.1734,
    address: 'Barcelona, Spain'
  },
  climate: {
    averageTemp: 20,
    bestTimeToVisit: ['May', 'June', 'September', 'October']
  },
  included: [
    '4 nights hotel accommodation',
    'Daily breakfast',
    'Guided city tour',
    'Beach day pass',
    'Airport transfer'
  ],
  notIncluded: [
    'International flights',
    'Personal expenses',
    'Travel insurance'
  ],
  attractions: [
    {
      id: 'int4-a1',
      name: 'Sagrada Familia',
      image: '/images/international/sagrada-familia.webp',
      description: 'Marvel at Gaudí’s unfinished masterpiece, a stunning basilica with intricate facades and interiors.',
      tours: [
        {
          id: 'int4-a1-t1',
          name: 'Guided Basilica Tour',
          price: 50,
          duration: '2 hours',
          highlights: [
            'Skip-the-line entry',
            'Expert guide explaining the architecture',
            'Access to towers with panoramic city views'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'int4-r1',
      user: 'Sophia Martinez',
      avatar: '/avatars/user22.jpg',
      rating: 5,
      date: '2024-04-20',
      title: 'Stunning city with incredible vibes',
      content: 'Barcelona is a perfect mix of history, beach, and nightlife. The architecture blew me away!'
    }
  ],
  faqs: [
    {
      question: 'When is the best time to visit Barcelona?',
      answer: 'Spring (May-June) and early autumn (September-October) offer pleasant weather and fewer crowds.'
    }
  ]
},
{
  id: 'int5',
  name: 'Swiss Alps',
  image: '/images/international/swiss-alps.webp',
  fallbackImage: '/images/international/swiss-alps2.webp',
  images: [
    '/images/international/swiss-alps.webp',
    '/images/international/swiss-alps2.webp'
  ],
  price: 1800,
  duration: '6 days',
  rating: 4.8,
  reviewCount: 780,
  category: ['mountain', 'adventure', 'skiing'],
  tags: ['switzerland', 'alps', 'skiing', 'snow', 'adventure'],
  slug: 'swiss-alps',
  description: 'Experience breathtaking snowy peaks, world-class skiing, and alpine charm in the heart of Europe.',
  detailedDescription: 'The Swiss Alps offer spectacular mountain scenery, charming villages, and endless outdoor activities including skiing, snowboarding, and winter hiking. Visit iconic spots like Zermatt and Interlaken, enjoy cozy chalets, and savor Swiss cuisine surrounded by stunning snowy landscapes.',
  highlights: [
    'Skiing and snowboarding',
    'Scenic mountain train rides',
    'Winter hiking trails',
    'Alpine villages and chalets'
  ],
  location: {
    lat: 46.8182,
    lng: 8.2275,
    address: 'Swiss Alps, Switzerland'
  },
  climate: {
    averageTemp: -2,
    bestTimeToVisit: ['December', 'January', 'February', 'March']
  },
  included: [
    '5 nights mountain lodge stay',
    'Ski pass and equipment rental',
    'Daily breakfast and dinner',
    'Guided ski lessons',
    'Airport transfers'
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Personal expenses'
  ],
  attractions: [
    {
      id: 'int5-a1',
      name: 'Matterhorn Mountain',
      image: '/images/international/matterhorn.webp',
      description: 'Iconic pyramid-shaped peak perfect for skiing and hiking.',
      tours: [
        {
          id: 'int5-a1-t1',
          name: 'Guided Ski Tour',
          price: 120,
          duration: 'Full day',
          highlights: [
            'Ski with professional guides',
            'Scenic mountain views',
            'Lunch at a mountain lodge'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'int5-r1',
      user: 'Liam Schwartz',
      avatar: '/avatars/user33.jpg',
      rating: 5,
      date: '2024-02-15',
      title: 'Winter wonderland experience',
      content: 'The Swiss Alps are stunning! The skiing was fantastic, and the mountain views are unforgettable.'
    }
  ],
  faqs: [
    {
      question: 'Is skiing experience necessary?',
      answer: 'Beginners and experts are welcome. Guided lessons are included for beginners.'
    }
  ]
},
{
  id: 'int6',
  name: 'Sahara Desert',
  image: '/images/international/sahara-desert-main.webp',
  fallbackImage: '/images/international/sahara-desert-alt.webp',
  images: [
    '/images/international/sahara-desert.webp',
    '/images/international/sahara-desert2.webp'
  ],
  price: 1300,
  duration: '4 days',
  rating: 4.6,
  reviewCount: 420,
  category: ['desert', 'adventure', 'cultural'],
  tags: ['morocco', 'desert', 'adventure', 'culture'],
  slug: 'sahara-desert',
  description: 'Explore the vast golden dunes of the Sahara Desert with camel treks and traditional Berber experiences.',
  detailedDescription: 'The Sahara Desert in Morocco offers a mesmerizing landscape of endless sand dunes, vibrant Berber culture, and unforgettable nights under the stars. Travel through desert villages, ride camels, and experience traditional music and cuisine in desert camps.',
  highlights: [
    'Camel trekking',
    'Overnight desert camping',
    'Berber cultural experiences',
    'Sunset and sunrise dune views'
  ],
  location: {
    lat: 31.7917,
    lng: -7.0926,
    address: 'Sahara Desert, Morocco'
  },
  climate: {
    averageTemp: 30,
    bestTimeToVisit: ['October', 'November', 'February', 'March']
  },
  included: [
    '3 nights desert camp stay',
    'Camel treks',
    'All meals in the desert',
    'Cultural performances',
    'Guided tours'
  ],
  notIncluded: [
    'International flights',
    'Travel insurance',
    'Personal expenses'
  ],
  attractions: [
    {
      id: 'int6-a1',
      name: 'Erg Chebbi Dunes',
      image: '/images/international/erg-chebbi.webp',
      description: 'Massive dunes perfect for camel rides and stunning desert photography.',
      tours: [
        {
          id: 'int6-a1-t1',
          name: 'Sunset Camel Trek',
          price: 80,
          duration: '3 hours',
          highlights: [
            'Camel ride through dunes',
            'Sunset over the desert',
            'Traditional tea in a desert camp'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'int6-r1',
      user: 'Fatima Alami',
      avatar: '/avatars/user44.jpg',
      rating: 5,
      date: '2024-03-05',
      title: 'Magical desert experience',
      content: 'The Sahara was breathtaking. Riding camels and sleeping under the stars was unforgettable.'
    }
  ],
  faqs: [
    {
      question: 'What should I pack for the desert?',
      answer: 'Light clothing for the day, warm layers for the night, sunscreen, and a hat are recommended.'
    }
  ]
},
{
  id: 'i2',
  name: 'Tanzania',
  image: '/images/international/tanzania-safari.webp',
  fallbackImage: '/images/international/tanzania-zanzibar.webp',
  images: [
    '/images/international/tanzania-safari.webp',
    '/images/international/tanzania-zanzibar.webp',
    '/images/international/tanzania-mount-kilimanjaro.webp'
  ],
  price: 2100,
  duration: '8 days',
  rating: 4.8,
  reviewCount: 987,
  category: ['wildlife', 'adventure'],
  tags: ['safari', 'nature', 'photography'],
  slug: 'tanzania',
  description: 'Experience the wild heart of Africa with safaris, mountains, and idyllic beaches.',
  detailedDescription: 'Tanzania offers a spectacular mix of wildlife safaris in the Serengeti, stunning landscapes like Mount Kilimanjaro, and the serene beaches of Zanzibar. It’s a top destination for nature lovers and adventure seekers.',
  highlights: ['Serengeti National Park', 'Ngorongoro Crater', 'Zanzibar Beaches'],
  location: {
    lat: -6.369028,
    lng: 34.888822,
    address: 'Tanzania, East Africa'
  },
  climate: {
    averageTemp: 26,
    bestTimeToVisit: ['June', 'July', 'August', 'September']
  },
  included: [
    '7 nights accommodation',
    'All ground transportation',
    'Daily meals',
    '4 guided safaris or tours'
  ],
  notIncluded: [
    'International flights',
    'Visa fees',
    'Personal expenses',
    'Travel insurance'
  ],
  attractions: [
    {
      id: 'i2-a1',
      name: 'Serengeti National Park',
      image: '/images/international/serengeti.webp',
      description: 'One of the most famous wildlife reserves in the world, home to the Big Five.',
      tours: [
        {
          id: 'i2-a1-t1',
          name: 'Big Five Safari Adventure',
          price: 150,
          duration: '6 hours',
          highlights: [
            'Guided game drives',
            'Professional rangers',
            'Chance to see lions, elephants, rhinos, leopards, and buffalo'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'i2-r1',
      user: 'Michael Davis',
      avatar: '/avatars/user2.jpg',
      rating: 5,
      date: '2023-06-20',
      title: 'A once-in-a-lifetime safari!',
      content: 'Seeing wildlife up close in the Serengeti was breathtaking. Every moment felt like a documentary come to life.'
    }
  ],
  faqs: [
    {
      question: 'Do I need a visa to enter Tanzania?',
      answer: 'Yes, most travelers will need a tourist visa, which can be obtained on arrival or online.'
    },
    {
      question: 'Is it safe to travel on safari in Tanzania?',
      answer: 'Yes, safaris are well-organized and led by experienced guides to ensure safety and comfort.'
    }
  ]
},
{
  id: "sa1",
  name: "Cape Town, South Africa",
  image: "/images/international/cape-town-table-mountain.webp",
  fallbackImage: "/images/international/cape-town-beach.webp",
  images: [
    "/images/international/cape-town-table-mountain.webp",
    "/images/international/cape-town-beach.webp",
    "/images/international/cape-town-waterfront.webp",
    "/images/international/cape-town-penguins.webp"
  ],
  price: 1750,
  duration: "7 days",
  rating: 4.9,
  reviewCount: 945,
  category: ["city", "beach", "wildlife"],
  tags: ["table-mountain", "wine-country", "penguins", "honeymoon"],
  slug: "south-africa",
  description: "Stunning coastal city with iconic Table Mountain, penguin colonies, and world-class vineyards.",
  detailedDescription: "Cape Town is one of the world's most beautiful cities, nestled between the iconic Table Mountain and the Atlantic Ocean. Experience breathtaking landscapes, vibrant culture, and diverse wildlife including penguins at Boulders Beach. The nearby Cape Winelands offer world-renowned vineyards and gourmet dining.",
  highlights: [
    "Table Mountain cable car experience",
    "Cape Peninsula scenic drive",
    "Penguin viewing at Boulders Beach",
    "Wine tasting in Stellenbosch",
    "V&A Waterfront shopping and dining"
  ],
  location: {
    lat: -33.9249,
    lng: 18.4241,
    address: "Cape Town, South Africa"
  },
  climate: {
    averageTemp: 22,
    bestTimeToVisit: ["March", "April", "September", "October"]
  },
  included: [
    "6 nights accommodation in a 4-star hotel",
    "Daily breakfast",
    "Table Mountain cable car tickets",
    "Cape Peninsula full-day tour",
    "Airport transfers"
  ],
  notIncluded: [
    "International flights",
    "Lunches and dinners",
    "Wine tasting fees",
    "Travel insurance"
  ],
  attractions: [
    {
      id: "sa1-a1",
      name: "Table Mountain",
      image: "/images/international/table-mountain.webp",
      description: "Iconic flat-topped mountain offering panoramic views of Cape Town.",
      tours: [
        {
          id: "sa1-a1-t1",
          name: "Sunset Cable Car Experience",
          price: 45,
          duration: "2 hours",
          highlights: [
            "360° rotating cable car",
            "Spectacular sunset views",
            "Guided nature walk at the summit"
          ]
        }
      ]
    },
    {
      id: "sa1-a2",
      name: "Boulders Beach Penguins",
      image: "/images/international/boulders-beach.webp",
      description: "Protected beach with a colony of endangered African penguins.",
      tours: [
        {
          id: "sa1-a2-t1",
          name: "Penguin Conservation Tour",
          price: 35,
          duration: "1.5 hours",
          highlights: [
            "Guided walk along boardwalks",
            "Penguin viewing platforms",
            "Conservation education"
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: "sa1-r1",
      user: "James Wilson",
      avatar: "/avatars/user14.jpg",
      rating: 5,
      date: "2024-11-15",
      title: "Absolutely breathtaking",
      content: "Table Mountain was incredible and the penguins at Boulders Beach were adorable. The wine tour was a perfect addition to our trip."
    },
    {
      id: "sa1-r2",
      user: "Sarah Johnson",
      avatar: "/avatars/user15.jpg",
      rating: 4.8,
      date: "2024-10-05",
      title: "Perfect honeymoon destination",
      content: "Cape Town had everything - beautiful scenery, amazing food, and romantic experiences. The sunset cruise was magical."
    }
  ],
  faqs: [
    {
      question: "Is Cape Town safe for tourists?",
      answer: "Generally yes, especially in tourist areas. Take normal precautions and follow local advice about areas to avoid."
    },
    {
      question: "When can I see the penguins?",
      answer: "The penguins are present year-round at Boulders Beach, best viewed in the morning or late afternoon."
    },
    {
      question: "How far are the wine regions?",
      answer: "Stellenbosch and Franschhoek are about 45 minutes to 1 hour drive from central Cape Town."
    }
  ]
}
];
