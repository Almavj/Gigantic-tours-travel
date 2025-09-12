export const kenyanDestinations = [
{
        name: 'Maasai Mara',
    image: '/images/kenya/maasai-man.webp',
    fallbackImage: '/images/kenya/maasai-man2.webp',
    images: [
      '/images/kenya/maasai-man.webp',
      '/images/kenya/maasai-man2.webp'
    ],
    price: 1200,
    duration: '4 days',
    rating: 4.9,
    reviewCount: 856,
    category: ['safari'],
    tags: ['wildlife', 'adventure', 'luxury', 'kenya'],
    slug: 'maasai-mara',
    description: 'Experience the Great Migration and witness the Big Five in one of Africa\'s most famous game reserves.',
    detailedDescription: 'The Maasai Mara National Reserve is a large game reserve in Narok County, Kenya, contiguous with the Serengeti National Park in Tanzania. It is named in honor of the Maasai people, the ancestral inhabitants of the area, and their description of the area when looked at from afar: "Mara" means "spotted" in the local Maasai language.',
    highlights: ['Game drives', 'Hot air balloon safari', 'Maasai cultural visits'],
    location: {
      lat: -1.5815,
      lng: 35.2518,
      address: 'Maasai Mara, Kenya'
    },
    climate: {
      averageTemp: 25,
      bestTimeToVisit: ['July', 'August', 'September', 'October']
    },
    included: [
      '3 nights luxury tented camp',
      'All meals',
      'Daily game drives',
      'Park fees',
      'Professional guide'
    ],
    notIncluded: [
      'International flights',
      'Travel insurance',
      'Gratuities'
    ],
    attractions: [
      {
        id: 'k1-a1',
        name: 'Mara River Crossing',
        image: '/images/kenya/mara-river.webp',
        description: 'Witness the dramatic river crossings during the Great Migration.',
        tours: [
          {
            id: 'k1-a1-t1',
            name: 'Migration Special Tour',
            price: 150,
            duration: 'Full day',
            highlights: [
              'Expert wildlife guide',
              'Picnic lunch by the river',
              'Photography opportunities'
            ]
          }
        ]
      }
    ],
    reviews: [
      {
        id: 'k1-r1',
        user: 'James Wilson',
        avatar: '/avatars/user9.jpg',
        rating: 5,
        date: '2023-11-15',
        title: 'Unforgettable Experience',
        content: 'Seeing the Great Migration was a once-in-a-lifetime experience. Our guide was incredibly knowledgeable and we saw all the Big Five!'
      }
    ],
    faqs: [
      {
        question: 'What is the best time to see the Great Migration?',
        answer: 'The best time is typically between July and October when the herds cross the Mara River.'
      }
  ]
},
  {
    id: 'k2',
    name: 'Lake Naivasha',
  image: '/images/kenya/naivasha.webp',
  fallbackImage: '/images/kenya/naivasha2.webp',
  images: [
    '/images/kenya/naivasha-main.webp',
    '/images/kenya/naivasha-boat.webp',
    '/images/kenya/naivasha-hike.webp',
    '/images/kenya/naivasha-birds.webp'
  ],
  price: 850,
  duration: '3 days',
  rating: 4.7,
  reviewCount: 648,
  category: ['adventure', 'relaxation'],
  tags: ['boating', 'nature', 'spa', 'kenya'],
  slug: 'lake-naivasha',
  description: 'Relax by the lake, enjoy boat rides with hippos, hike volcanic craters, and soak in geothermal spas.',
  detailedDescription: 'Lake Naivasha, located in the Great Rift Valley, is a freshwater lake known for its serene beauty and abundant wildlife. Surrounded by flower farms and acacia forests, the lake is a popular getaway for both adventure and relaxation. Visitors can explore Hell\'s Gate National Park, take boat rides among hippos, and rejuvenate at geothermal spas.',
  highlights: [
    'Boat ride with hippos',
    'Crescent Island walking safari',
    'Hell’s Gate hiking & cycling',
    'Geothermal spa at Olkaria',
    'Flamingo and birdwatching'
  ],
  location: {
    lat: -0.7174,
    lng: 36.4351,
    address: 'Lake Naivasha, Kenya'
  },
  climate: {
    averageTemp: 23,
    bestTimeToVisit: ['January', 'February', 'June', 'July', 'August']
  },
  included: [
    '2 nights accommodation at lakeside resort',
    'Daily breakfast and dinner',
    'Boat ride on Lake Naivasha',
    'Guided hike at Hell\'s Gate',
    'Crescent Island entrance fees'
  ],
  notIncluded: [
    'Lunch meals',
    'Personal expenses',
    'Bike hire at Hell\'s Gate',
    'Spa treatments (optional)'
  ],
  attractions: [
    {
      id: 'k2-a1',
      name: 'Crescent Island Sanctuary',
      image: '/images/kenya/crescent-island.webp',
      description: 'A walking safari haven with zebras, giraffes, and antelopes in their natural setting.',
      tours: [
        {
          id: 'k2-a1-t1',
          name: 'Walking Safari Experience',
          price: 40,
          duration: '2 hours',
          highlights: [
            'Walk among wildlife',
            'Lake views',
            'Nature guide'
          ]
        }
      ]
    },
    {
      id: 'k2-a2',
      name: 'Hell’s Gate National Park',
      image: '/images/kenya/hells-gate.webp',
      description: 'Explore scenic gorges and volcanic landscapes on foot or by bike.',
      tours: [
        {
          id: 'k2-a2-t1',
          name: 'Geological Adventure Tour',
          price: 60,
          duration: 'Half day',
          highlights: [
            'Hike the gorge',
            'Optional rock climbing',
            'Bike rental available'
          ]
        }
      ]
    },
    {
      id: 'k2-a3',
      name: 'Olkaria Geothermal Spa',
      image: '/images/kenya/olkaria-spa.webp',
      description: 'A relaxing geothermal hot spring experience set in a unique volcanic landscape.',
      tours: [
        {
          id: 'k2-a3-t1',
          name: 'Spa & Wellness Pass',
          price: 30,
          duration: '2 hours',
          highlights: [
            'Hot water pool access',
            'Volcanic mineral waters',
            'Locker & shower facilities'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'k2-r1',
      user: 'Emily Njeri',
      avatar: '/avatars/user4.jpg',
      rating: 5,
      date: '2024-12-02',
      title: 'Perfect Weekend Getaway',
      content: 'I loved the boat ride with the hippos and the peaceful vibe of the lake. Crescent Island was magical. Highly recommend it!'
    },
    {
      id: 'k2-r2',
      user: 'Tom Limo',
      avatar: '/avatars/user5.jpg',
      rating: 4.5,
      date: '2024-11-10',
      title: 'Adventure and relaxation combined!',
      content: 'We hiked Hell\'s Gate, biked through the gorge, and ended with a spa soak. The best short trip ever.'
    }
  ],
  faqs: [
    {
      question: 'Are there hippos in Lake Naivasha?',
      answer: 'Yes, Lake Naivasha is home to many hippos. Boat tours are conducted at safe distances.'
    },
    {
      question: 'Do I need a guide for Crescent Island?',
      answer: 'A guide is recommended but not mandatory. It enhances the experience through wildlife insights.'
    },
    {
      question: 'Is the Olkaria Spa family-friendly?',
      answer: 'Yes, the spa has facilities suitable for families and children.'
    }
  ]
},
{
  id: 'i3',
  name: 'Amboseli National Park, Kenya',
  image: '/images/kenya/amboseli.webp',
  fallbackImage: '/images/kenya/amboseli2.webp',
  images: [
    '/images/kenya/amboseli.webp',
    '/images/kenya/amboseli2.webp',
    '/images/international/amboseli-sunset.webp',
    '/images/international/amboseli-lodge.webp'
  ],
  price: 1450,
  duration: '5 days',
  rating: 4.95,
  reviewCount: 786,
  category: ['wildlife', 'scenic', 'photography'],
  tags: ['elephant-encounters', 'panoramic-views', 'luxury-lodge'],
  slug: 'amboseli',
  description: 'Iconic views of Mount Kilimanjaro and up-close encounters with elephants.',
  detailedDescription: 'Amboseli is a jewel of Kenya’s national parks, famous for its large herds of elephants, stunning views of snow-capped Mount Kilimanjaro, and vibrant Maasai culture. It’s a paradise for photographers, wildlife lovers, and those seeking immersive safari experiences.',
  highlights: [
    'Guided sunrise safari with Kilimanjaro backdrop',
    'Elephant herds at Observation Hill',
    'Cultural visit to Maasai village',
    'Luxury tented lodge experience'
  ],
  location: {
    lat: -2.6485,
    lng: 37.2606,
    address: 'Amboseli National Park, Kenya'
  },
  climate: {
    averageTemp: 24,
    bestTimeToVisit: ['June', 'July', 'August', 'January', 'February']
  },
  included: [
    '4 nights luxury lodge accommodation',
    'All park entry fees',
    'Daily morning and evening game drives',
    'Cultural Maasai village tour',
    'Meals and refreshments',
    'Airport pick-up and drop-off'
  ],
  notIncluded: [
    'International airfare',
    'Travel insurance',
    'Personal purchases',
    'Optional hot air balloon safari'
  ],
  attractions: [
    {
      id: 'i3-a1',
      name: 'Observation Hill',
      image: '/images/international/amboseli-observation-hill.webp',
      description: 'Panoramic viewpoint perfect for watching elephants, hippos, and flamingos below.',
      tours: [
        {
          id: 'i3-a1-t1',
          name: 'Sunset Game Drive & Hill Climb',
          price: 80,
          duration: '3.5 hours',
          highlights: [
            'Golden hour wildlife spotting',
            'Climb to the top of Observation Hill',
            'Sundowners with Kilimanjaro views'
          ]
        }
      ]
    },
    {
      id: 'i3-a2',
      name: 'Maasai Cultural Village',
      image: '/images/international/maasai-village.webp',
      description: 'Authentic cultural exchange with the Maasai community.',
      tours: [
        {
          id: 'i3-a2-t1',
          name: 'Maasai Life Experience Tour',
          price: 45,
          duration: '2 hours',
          highlights: [
            'Traditional dance and storytelling',
            'Visit to a local homestead',
            'Craft-making and beadwork display'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'i3-r1',
      user: 'Liam K.',
      avatar: '/avatars/user3.jpg',
      rating: 5,
      date: '2024-11-10',
      title: 'Unforgettable Safari!',
      content: 'Amboseli gave us the ultimate African safari. The elephants were majestic and the Kilimanjaro view was surreal. Highly recommend the luxury lodge option!'
    },
    {
      id: 'i3-r2',
      user: 'Emily Chen',
      avatar: '/avatars/user4.jpg',
      rating: 4.9,
      date: '2024-09-23',
      title: 'Breathtaking scenes and lovely people',
      content: 'The game drives were thrilling, but what touched me most was the warmth of the Maasai community. A trip I’ll cherish forever.'
    }
  ],
  faqs: [
    {
      question: 'Is Amboseli good for first-time safari goers?',
      answer: 'Yes, Amboseli is one of the best parks for beginners, with high chances of spotting wildlife and excellent guide services.'
    },
    {
      question: 'Can you see Mount Kilimanjaro clearly from Amboseli?',
      answer: 'Yes, early mornings often provide stunning views of the mountain rising above the plains.'
    },
    {
      question: 'Are children allowed on safaris?',
      answer: 'Yes, most tours welcome families, though age restrictions may apply for certain activities.'
    }
  ]
},

{
  id: 'k3',
  name: 'Mount Kenya',
  image: '/images/kenya/mount-kenya.webp',
  fallbackImage: '/images/kenya/mount-kenya2.webp',
  images: [
    '/images/kenya/mount-kenya.webp',
    '/images/kenya/mount-kenya2.webp',
    '/images/kenya/mount-kenya-climb.webp'
  ],
  price: 1400,
  duration: '5 days',
  rating: 4.8,
  reviewCount: 489,
  category: ['mountain', 'adventure', 'nature'],
  tags: ['hiking', 'climbing', 'scenery', 'kenya', 'eco-tourism'],
  slug: 'mount-kenya',
  description: 'Climb Africa’s second-highest mountain and explore stunning alpine landscapes, glaciers, and unique wildlife.',
  detailedDescription: 'Mount Kenya, standing at 5,199 meters, is Kenya’s highest mountain and the second-highest in Africa after Kilimanjaro. A UNESCO World Heritage Site, it offers breathtaking scenery, from bamboo forests and alpine moorlands to jagged peaks and glaciers. Trekkers often ascend Point Lenana (4,985m), a non-technical but rewarding climb with panoramic views. The mountain is sacred to the Kikuyu people and is home to rare species like the Mount Kenya rock hyrax, giant lobelias, and sunbirds.',
  highlights: [
    'Multi-day trek to Point Lenana',
    'Alpine lakes and glacial valleys',
    'Unique high-altitude flora and fauna',
    'Guided cultural storytelling at the base',
    'Unmatched sunrise from the summit'
  ],
  location: {
    lat: -0.1521,
    lng: 37.3084,
    address: 'Mount Kenya National Park, Kenya'
  },
  climate: {
    averageTemp: 10,
    bestTimeToVisit: ['January', 'February', 'August', 'September']
  },
  included: [
    '4 nights mountain hut/camp accommodation',
    'All meals during the trek',
    'Certified mountain guide and porters',
    'Park fees and permits',
    'Rescue support and acclimatization plan'
  ],
  notIncluded: [
    'Personal hiking gear (boots, jackets)',
    'Tips for porters and guides',
    'Travel insurance',
    'Transport to and from Naro Moru/Chogoria'
  ],
  attractions: [
    {
      id: 'k3-a1',
      name: 'Point Lenana',
      image: '/images/kenya/point-lenana.webp',
      description: 'The third-highest peak of Mount Kenya, accessible to trekkers without technical climbing gear.',
      tours: [
        {
          id: 'k3-a1-t1',
          name: '5-Day Lenana Summit Trek',
          price: 1400,
          duration: '5 days',
          highlights: [
            'Gradual ascent for acclimatization',
            'Sunrise summit attempt',
            'Spectacular mountain scenery'
          ]
        }
      ]
    },
    {
      id: 'k3-a2',
      name: 'Lake Michaelson',
      image: '/images/kenya/lake-michaelson.webp',
      description: 'A crater lake nestled in a high-altitude basin surrounded by cliffs—an iconic photo spot.',
      tours: [
        {
          id: 'k3-a2-t1',
          name: 'Chogoria Route Scenic Trek',
          price: 1550,
          duration: '5 days',
          highlights: [
            'Lake Michaelson viewpoint',
            'Cave camping',
            'Rare flora along the trail'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'k3-r1',
      user: 'Naomi Wambui',
      avatar: '/avatars/user7.jpg',
      rating: 5,
      date: '2024-09-12',
      title: 'Life-changing hike!',
      content: 'Mount Kenya is an underrated gem. The Chogoria route was beautiful and the summit day was unforgettable!'
    },
    {
      id: 'k3-r2',
      user: 'Robert Njoroge',
      avatar: '/avatars/user12.jpg',
      rating: 4.6,
      date: '2023-10-01',
      title: 'Challenging but worth it',
      content: 'Physically demanding but totally worth the effort. The mountain guides were incredibly supportive.'
    }
  ],
  faqs: [
    {
      question: 'Do I need prior mountaineering experience?',
      answer: 'No technical skills are needed for Point Lenana, but good fitness is required. Guides help with pacing and acclimatization.'
    },
    {
      question: 'Which route is best for first-timers?',
      answer: 'The Sirimon-Chogoria traverse is popular among beginners for its varied landscapes and better acclimatization.'
    },
    {
      question: 'Is altitude sickness a concern?',
      answer: 'Yes, it can affect anyone. Our itinerary includes slow ascents and rest days to reduce risk.'
    }
  ]
},
{
  id: 'k4',
  name: 'Diani Beach',
  image: '/images/kenya/diani-beach.webp',
  fallbackImage: '/images/kenya/diani-beach2.webp',
  images: [
    '/images/kenya/diani-beach.webp',
    '/images/kenya/diani-beach2.webp',
    '/images/kenya/diani-snorkeling.webp'
  ],
  price: 900,
  duration: '3 days',
  rating: 4.7,
  reviewCount: 1023,
  category: ['beach', 'relaxation', 'romantic'],
  tags: ['coast', 'kenya', 'luxury', 'family', 'honeymoon', 'beach'],
  slug: 'diani-beach',
  description: 'Relax on the white sands of Diani Beach and explore coral reefs, dolphin safaris, and vibrant coastal culture.',
  detailedDescription: 'Diani Beach is a top coastal destination in Kenya, known for its powdery white sands, turquoise waters, and palm-lined shores. Located south of Mombasa, it combines natural beauty with luxury resorts and vibrant local experiences. From water sports and marine parks to Swahili cuisine and coastal heritage, Diani is ideal for both adventure seekers and relaxation lovers.',
  highlights: [
    'Snorkeling and scuba diving',
    'Jet skiing and skydiving',
    'Sunset dhow cruises',
    'Colobus monkey sanctuary',
    'Beachfront dining and nightlife'
  ],
  location: {
    lat: -4.2806,
    lng: 39.5937,
    address: 'Diani Beach, Kwale County, Kenya'
  },
  climate: {
    averageTemp: 28,
    bestTimeToVisit: ['December', 'January', 'February', 'July', 'August']
  },
  included: [
    '2 nights beachfront hotel stay',
    'Daily breakfast',
    'Guided snorkeling tour',
    'Airport transfers (Ukunda)',
    'Welcome drink and towel service'
  ],
  notIncluded: [
    'Flights to Mombasa or Ukunda',
    'Personal expenses',
    'Travel insurance',
    'Optional excursions like skydiving'
  ],
  attractions: [
    {
      id: 'k4-a1',
      name: 'Kisite-Mpunguti Marine Park',
      image: '/images/kenya/kisite-mpunguti.webp',
      description: 'A marine reserve teeming with dolphins, coral reefs, and tropical fish—perfect for snorkeling.',
      tours: [
        {
          id: 'k4-a1-t1',
          name: 'Full-Day Marine Safari',
          price: 120,
          duration: '8 hours',
          highlights: [
            'Dolphin spotting',
            'Snorkeling gear included',
            'Swahili lunch on Wasini Island'
          ]
        }
      ]
    },
    {
      id: 'k4-a2',
      name: 'Skydiving Over Diani',
      image: '/images/kenya/diani-skydive.webp',
      description: 'Enjoy a once-in-a-lifetime tandem skydiving experience with incredible views of the coastline.',
      tours: [
        {
          id: 'k4-a2-t1',
          name: 'Tandem Skydive Package',
          price: 350,
          duration: '1 hour (30 min prep + jump)',
          highlights: [
            'Free-fall from 12,000 feet',
            'Professional instructors',
            'Photo and video included'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'k4-r1',
      user: 'Fatma Ali',
      avatar: '/avatars/user5.jpg',
      rating: 5,
      date: '2024-12-22',
      title: 'Best beach holiday ever!',
      content: 'Diani is a paradise. The beach was clean, peaceful, and the marine safari was magical!'
    },
    {
      id: 'k4-r2',
      user: 'Thomas Müller',
      avatar: '/avatars/user13.jpg',
      rating: 4.5,
      date: '2024-10-03',
      title: 'A hidden gem',
      content: 'Less crowded than Mombasa, but just as beautiful. We saw dolphins and the reef was stunning!'
    }
  ],
  faqs: [
    {
      question: 'Is Diani Beach family-friendly?',
      answer: 'Yes! Many resorts offer kids’ clubs, and activities like snorkeling and camel rides are great for all ages.'
    },
    {
      question: 'Can I fly directly to Diani?',
      answer: 'Yes. Flights from Nairobi land at Ukunda Airstrip, just 10 minutes from most hotels.'
    },
    {
      question: 'Is it safe for tourists?',
      answer: 'Diani is generally safe, especially within resort areas. Always follow local guidance and avoid isolated beaches at night.'
    }
  ]
},
{
  id: 'k5',
  name: 'Lewa Wildlife Conservancy',
  image: '/images/kenya/lewa-conservancy.webp',
  fallbackImage: '/images/kenya/lewa-conservancy2.webp',
  images: [
    '/images/kenya/lewa-conservancy.webp',
    '/images/kenya/lewa-conservancy2.webp',
    '/images/kenya/lewa-wildlife.webp'
  ],
  price: 1500,
  duration: '4 days',
  rating: 4.8,
  reviewCount: 612,
  category: ['conservation', 'safari', 'luxury'],
  tags: ['wildlife', 'conservation', 'luxury', 'kenya', 'mountain region'],
  slug: 'lewa-wildlife-conservancy',
  description: 'A world-renowned conservancy dedicated to protecting endangered species and offering intimate wildlife experiences.',
  detailedDescription: 'Lewa Wildlife Conservancy is a UNESCO World Heritage Site located in northern Kenya, near the foothills of Mount Kenya. It is a model for community-based conservation, playing a key role in protecting rhinos, Grevy’s zebras, and other endangered species. Visitors enjoy luxury accommodations, exclusive game drives, and an immersive look into conservation and local culture.',
  highlights: [
    'Private game drives and walking safaris',
    'Rhino and Grevy’s zebra tracking',
    'Horseback riding with wildlife',
    'Visits to community schools and projects',
    'Stargazing and bush dinners'
  ],
  location: {
    lat: 0.2962,
    lng: 37.4306,
    address: 'Lewa Wildlife Conservancy, Meru County, Kenya'
  },
  climate: {
    averageTemp: 22,
    bestTimeToVisit: ['June', 'July', 'August', 'September', 'January']
  },
  included: [
    '3 nights luxury lodge or tented camp',
    'All meals and drinks (excluding premium brands)',
    'Daily game drives and guided walks',
    'Park and conservancy fees',
    'Transfers from Lewa airstrip'
  ],
  notIncluded: [
    'International and domestic flights',
    'Travel insurance',
    'Gratuities',
    'Optional helicopter tours or camel rides'
  ],
  attractions: [
    {
      id: 'k5-a1',
      name: 'Rhino Sanctuary Experience',
      image: '/images/kenya/lewa-rhinos.webp',
      description: 'Track black and white rhinos on foot or by vehicle with expert rangers.',
      tours: [
        {
          id: 'k5-a1-t1',
          name: 'Rhino Tracking Safari',
          price: 180,
          duration: 'Half-day',
          highlights: [
            'Track rhinos in their natural habitat',
            'Learn from conservationists',
            'Photography session included'
          ]
        }
      ]
    },
    {
      id: 'k5-a2',
      name: 'Grevy’s Zebra Research Tour',
      image: '/images/kenya/grevys-zebra.webp',
      description: 'Meet the rarest zebra species and support research efforts on site.',
      tours: [
        {
          id: 'k5-a2-t1',
          name: 'Conservation in Action Tour',
          price: 160,
          duration: '3 hours',
          highlights: [
            'Observe Grevy’s zebras up close',
            'Visit ranger stations and research centers',
            'Interactive Q&A with scientists'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'k5-r1',
      user: 'Sarah Kimani',
      avatar: '/avatars/user15.jpg',
      rating: 5,
      date: '2023-10-12',
      title: 'Incredible Conservation Experience',
      content: 'Lewa changed how I see conservation. We saw rhinos every day and learned so much from the rangers.'
    },
    {
      id: 'k5-r2',
      user: 'Mark Johansson',
      avatar: '/avatars/user7.jpg',
      rating: 4.8,
      date: '2024-01-07',
      title: 'Luxury and Purpose Combined',
      content: 'It felt great staying in a luxury lodge and knowing we were supporting real conservation work.'
    }
  ],
  faqs: [
    {
      question: 'How do I get to Lewa?',
      answer: 'You can fly from Nairobi’s Wilson Airport to Lewa Airstrip. Charter flights and road transfers are also available.'
    },
    {
      question: 'Is Lewa family-friendly?',
      answer: 'Yes, Lewa offers activities for kids and family-focused lodges with guides trained in engaging younger guests.'
    },
    {
      question: 'What makes Lewa unique?',
      answer: 'Its commitment to conservation, community engagement, and low-impact tourism make it one of Africa’s most respected wildlife conservancies.'
    }
  ]
},
{
  id: 'i4',
  name: 'Tsavo National Park, Kenya',
  image: '/images/international/tsavo-elephants.webp',
  fallbackImage: '/images/international/tsavo-savannah.webp',
  images: [
    '/images/international/tsavo-elephants.webp',
    '/images/international/tsavo-savannah.webp',
    '/images/international/tsavo-lava-landscape.webp',
    '/images/international/tsavo-lions.webp'
  ],
  price: 1600,
  duration: '6 days',
  rating: 4.85,
  reviewCount: 642,
  category: ['wildlife', 'adventure', 'off-the-beaten-path'],
  tags: ['red-elephants', 'untamed-wilderness', 'photography-safari'],
  slug: 'tsavo',
  description: 'The wild, vast, and rugged beauty of Kenya’s largest national park.',
  detailedDescription: 'Divided into Tsavo East and Tsavo West, this massive national park is a treasure trove of dramatic landscapes, red-dusted elephants, lava flows, and diverse wildlife. It’s less crowded, raw, and perfect for real explorers seeking authentic adventure.',
  highlights: [
    'Mudanda Rock and Yatta Plateau',
    'Mzima Springs and hippo pools',
    'Shetani Lava Flow exploration',
    'Red elephants of Tsavo'
  ],
  location: {
    lat: -3.3262,
    lng: 38.4850,
    address: 'Tsavo National Park, Kenya'
  },
  climate: {
    averageTemp: 27,
    bestTimeToVisit: ['June', 'July', 'August', 'September', 'January', 'February']
  },
  included: [
    '5 nights accommodation in eco-safari lodges',
    'All park entrance fees',
    'Guided game drives (morning & evening)',
    'Full board meals',
    'Nature walks with rangers',
    'Transfers from Nairobi or Mombasa'
  ],
  notIncluded: [
    'International flights',
    'Optional activities like balloon safaris',
    'Travel insurance',
    'Personal expenses'
  ],
  attractions: [
    {
      id: 'i4-a1',
      name: 'Mzima Springs',
      image: '/images/international/mzima-springs.webp',
      description: 'Crystal-clear pools teeming with hippos and crocodiles, fed by underground rivers from Kilimanjaro.',
      tours: [
        {
          id: 'i4-a1-t1',
          name: 'Nature Walk to Mzima Springs',
          price: 40,
          duration: '2 hours',
          highlights: [
            'Guided eco-walk',
            'Underwater viewing chamber',
            'Hippos and crocs in natural setting'
          ]
        }
      ]
    },
    {
      id: 'i4-a2',
      name: 'Shetani Lava Flow',
      image: '/images/international/shetani-lava.webp',
      description: 'A massive black lava field that tells the story of a violent volcanic past.',
      tours: [
        {
          id: 'i4-a2-t1',
          name: 'Lava Trek and Sunset View',
          price: 60,
          duration: '3 hours',
          highlights: [
            'Walk over hardened lava beds',
            'Learn volcanic history',
            'Stunning panoramic sunset shots'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'i4-r1',
      user: 'Rajiv Patel',
      avatar: '/avatars/user5.jpg',
      rating: 5,
      date: '2024-08-12',
      title: 'True wilderness!',
      content: 'Tsavo felt like untouched Africa. The red elephants, the lava landscapes, and the remoteness gave us a sense of true adventure.'
    },
    {
      id: 'i4-r2',
      user: 'Helena Gómez',
      avatar: '/avatars/user6.jpg',
      rating: 4.8,
      date: '2024-10-02',
      title: 'Epic safari off the grid',
      content: 'If you want to disconnect and immerse yourself in raw nature, Tsavo is the place. The guides were excellent and so knowledgeable.'
    }
  ],
  faqs: [
    {
      question: 'What makes Tsavo different from other parks?',
      answer: 'Tsavo is the largest park in Kenya, known for its red elephants, fewer crowds, lava flows, and rugged wilderness perfect for seasoned travelers.'
    },
    {
      question: 'Is Tsavo suitable for families?',
      answer: 'Yes, though it’s better suited for older children due to long drives and wilder terrain.'
    },
    {
      question: 'How do I get to Tsavo?',
      answer: 'You can access Tsavo by road or train from Nairobi or Mombasa, or via small charter flights.'
    }
  ]
},
{
  id: 'i5',
  name: 'Samburu National Reserve, Kenya',
  image: '/images/international/samburu-elephants.webp',
  fallbackImage: '/images/international/samburu-landscape.webp',
  images: [
    '/images/international/samburu-elephants.webp',
    '/images/international/samburu-warrior-dance.webp',
    '/images/international/samburu-leopard.webp',
    '/images/international/samburu-river.webp'
  ],
  price: 1550,
  duration: '5 days',
  rating: 4.87,
  reviewCount: 531,
  category: ['wildlife', 'cultural', 'scenic'],
  tags: ['rare-species', 'tribal-heritage', 'luxury-safari'],
  slug: 'samburu',
  description: 'Untamed beauty, rare wildlife, and the vibrant Samburu culture.',
  detailedDescription: 'Located in northern Kenya along the banks of the Ewaso Ng’iro River, Samburu is a gem for seasoned safari-goers. It’s famous for unique wildlife like the Grevy’s zebra and the Gerenuk, and for its deep cultural immersion with the Samburu people.',
  highlights: [
    'Grevy’s zebra & Gerenuk spotting',
    'Cultural dances with Samburu warriors',
    'Sunset game drives by the river',
    'Luxury camps with stargazing decks'
  ],
  location: {
    lat: 0.6196,
    lng: 37.5281,
    address: 'Samburu National Reserve, Kenya'
  },
  climate: {
    averageTemp: 30,
    bestTimeToVisit: ['June', 'July', 'August', 'January', 'February']
  },
  included: [
    '4 nights stay in luxury tented camps',
    'All park fees and conservancy charges',
    'Daily game drives and guided walks',
    'Cultural visit to Samburu village',
    'All meals and bottled water',
    'Transfers from Nanyuki or Nairobi'
  ],
  notIncluded: [
    'International or local flights',
    'Alcoholic beverages',
    'Travel insurance',
    'Tips and personal shopping'
  ],
  attractions: [
    {
      id: 'i5-a1',
      name: 'Samburu Village Experience',
      image: '/images/international/samburu-village.webp',
      description: 'Experience the traditional lifestyle, beadwork, and music of the Samburu people.',
      tours: [
        {
          id: 'i5-a1-t1',
          name: 'Warrior Dance and Storytelling Evening',
          price: 45,
          duration: '2.5 hours',
          highlights: [
            'Authentic Samburu music and dance',
            'Local stories and legends',
            'Handcrafted beadwork and attire'
          ]
        }
      ]
    },
    {
      id: 'i5-a2',
      name: 'Buffalo Springs Game Drive',
      image: '/images/international/buffalo-springs.webp',
      description: 'Visit the neighboring Buffalo Springs Reserve for more wildlife action and lush springs.',
      tours: [
        {
          id: 'i5-a2-t1',
          name: 'Combined Game Safari with Lunch Stop',
          price: 85,
          duration: '6 hours',
          highlights: [
            'Grevy’s zebras and reticulated giraffes',
            'Lunch in the wild near natural springs',
            'Birdwatching and scenic riverside drives'
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: 'i5-r1',
      user: 'Elisa Mutiso',
      avatar: '/avatars/user10.jpg',
      rating: 5,
      date: '2023-11-22',
      title: 'Heart of Northern Kenya',
      content: 'Samburu was soulful and stunning. We saw animals we never see elsewhere, and the cultural visit was humbling and beautiful.'
    },
    {
      id: 'i5-r2',
      user: 'Jonas Richter',
      avatar: '/avatars/user11.jpg',
      rating: 4.7,
      date: '2024-01-10',
      title: 'Hidden safari treasure',
      content: 'Much quieter than the big parks, and so rewarding. Gerenuks are bizarre and awesome. Loved our tent with a river view!'
    }
  ],
  faqs: [
    {
      question: 'Is Samburu a good alternative to Maasai Mara?',
      answer: 'Yes! Samburu offers a more intimate, less crowded safari experience with rare wildlife and strong cultural experiences.'
    },
    {
      question: 'What animals can I expect to see?',
      answer: 'Apart from lions and elephants, look for the “Samburu Five” – Grevy’s zebra, Somali ostrich, Beisa oryx, Gerenuk, and reticulated giraffe.'
    },
    {
      question: 'How do I reach Samburu?',
      answer: 'You can fly into Samburu airstrip from Nairobi (1 hr) or drive (about 6 hours by road).'
    }
  ]
},
{
  id: "i7",
  name: "Malindi, Kenya",
  slug: "malindi",
  image: "/images/kenya/malindi.webp",
  fallbackImage: "/images/kenya/malindi2.webp",
  images: [
    "/images/kenya/malindi.webp",
    "/images/kenya/malindi2.webp",
    "/images/kenya/malindi-ruins.webp",
    "/images/kenya/malindi-snorkeling.webp"
  ],
  price: 1180,
  duration: "4 days",
  rating: 4.75,
  reviewCount: 365,
  category: ["beach", "historical", "marine"],
  tags: ["coral-coast", "heritage", "snorkeling"],
  description: "A historic Swahili town with stunning beaches, coral reefs, and centuries of culture.",
  detailedDescription: "Malindi, located on Kenya’s north coast, blends Swahili culture with Italian influences and Indian Ocean charm. It's known for its pristine beaches, vibrant marine life, and ancient ruins like Gede. Visitors enjoy the mix of historical exploration, laid-back beach days, and oceanic adventures from deep-sea fishing to snorkeling in marine parks.",
  highlights: [
    "Malindi Marine National Park",
    "Gede Ruins historical site",
    "Portuguese Chapel",
    "Snorkeling and dolphin spotting"
  ],
  location: {
    lat: -3.2189,
    lng: 40.1169,
    address: "Malindi, Kilifi County, Kenya"
  },
  climate: {
    averageTemp: 29,
    bestTimeToVisit: ["December", "January", "February", "July", "August"]
  },
  included: [
    "3 nights in a seaside hotel",
    "Daily breakfast and dinner",
    "Guided tour of Gede Ruins",
    "Marine Park boat excursion",
    "Airport transfers"
  ],
  notIncluded: [
    "Flights",
    "Lunches and drinks",
    "Travel insurance",
    "Personal expenses"
  ],
  attractions: [
    {
      id: "i7-a1",
      name: "Gede Ruins",
      image: "/images/kenya/gede-ruins.webp",
      description: "Ancient Swahili village ruins hidden in a tropical forest.",
      tours: [
        {
          id: "i7-a1-t1",
          name: "Gede Ruins Guided Walk",
          price: 30,
          duration: "2 hours",
          highlights: [
            "Swahili architecture",
            "Archaeological history",
            "Guided storytelling tour"
          ]
        }
      ]
    },
    {
      id: "i7-a2",
      name: "Malindi Marine National Park",
      image: "/images/kenya/malindi-marine-park.webp",
      description: "Protected marine area with vibrant coral reefs and crystal-clear waters.",
      tours: [
        {
          id: "i7-a2-t1",
          name: "Glass-bottom Boat Snorkeling Safari",
          price: 60,
          duration: "3 hours",
          highlights: [
            "Colorful coral reefs",
            "Marine biodiversity",
            "Family-friendly adventure"
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: "i7-r1",
      user: "Maria Njeri",
      avatar: "/avatars/user12.jpg",
      rating: 5,
      date: "2024-08-10",
      title: "Beautiful and rich in culture",
      content: "Loved the peaceful beaches and the historical vibes of the town. Gede ruins were fascinating!"
    },
    {
      id: "i7-r2",
      user: "Luca Bianchi",
      avatar: "/avatars/user13.jpg",
      rating: 4.5,
      date: "2023-12-22",
      title: "Malindi is a coastal jewel",
      content: "The marine park is gorgeous and snorkeling was unforgettable. Also great Italian food!"
    }
  ],
  faqs: [
    {
      question: "Is Malindi suitable for families?",
      answer: "Absolutely. The calm beaches and activities like marine park tours are perfect for children and adults alike."
    },
    {
      question: "What languages are spoken in Malindi?",
      answer: "Swahili is widely spoken, but English and Italian are also common due to the town's international influence."
    },
    {
      question: "How do I get to Malindi?",
      answer: "You can fly from Nairobi to Malindi Airport (about 1 hour) or take a scenic drive from Mombasa."
    }
  ]
},
{
  id: "i8",
  name: "Lamu",
  slug: "lamu",
  image: "/images/kenya/lamu.webp",
  fallbackImage: "/images/kenya/lamu2.webp",
  images: [
    "/images/kenya/lamu.webp",
    "/images/kenya/lamu-town.webp",
    "/images/kenya/lamu-dhow.webp",
    "/images/kenya/lamu-sunset.webp"
  ],
  price: 1300,
  duration: "4 days",
  rating: 4.88,
  reviewCount: 402,
  category: ["cultural", "beach", "historical"],
  tags: ["swahili-culture", "island-escape", "unesco-heritage"],
  description: "An island steeped in Swahili tradition, peaceful beaches, and historical charm.",
  detailedDescription: "Lamu is a UNESCO World Heritage Site and one of Kenya's oldest towns, where life moves at the rhythm of the tides and donkeys are more common than cars. Known for its rich Swahili culture, ornate architecture, and laid-back charm, Lamu is perfect for travelers seeking a mix of history, relaxation, and cultural immersion.",
  highlights: [
    "Visit Lamu Old Town",
    "Traditional dhow sailing trip",
    "Explore Takwa Ruins on Manda Island",
    "Swahili cooking class"
  ],
  location: {
    lat: -2.2717,
    lng: 40.9020,
    address: "Lamu Island, Lamu County, Kenya"
  },
  climate: {
    averageTemp: 28,
    bestTimeToVisit: ["December", "January", "February", "July", "August"]
  },
  included: [
    "3 nights stay in a boutique guesthouse",
    "Daily breakfast",
    "Lamu town historical tour",
    "Dhow sunset cruise",
    "Transfers from Manda Airport"
  ],
  notIncluded: [
    "Flights",
    "Lunch and dinner",
    "Personal purchases",
    "Travel insurance"
  ],
  attractions: [
    {
      id: "i8-a1",
      name: "Lamu Old Town Walking Tour",
      image: "/images/kenya/lamu-old-town.webp",
      description: "Wander the ancient narrow streets lined with coral stone buildings and carved doors.",
      tours: [
        {
          id: "i8-a1-t1",
          name: "Swahili Heritage Walk",
          price: 25,
          duration: "2 hours",
          highlights: [
            "Lamu Fort and Museum",
            "Local artisan workshops",
            "Swahili cultural insights"
          ]
        }
      ]
    },
    {
      id: "i8-a2",
      name: "Sunset Dhow Cruise",
      image: "/images/kenya/lamu-dhow-sunset.webp",
      description: "Sail the Lamu channel at sunset on a traditional dhow with snacks and Swahili music.",
      tours: [
        {
          id: "i8-a2-t1",
          name: "Romantic Dhow Experience",
          price: 50,
          duration: "2.5 hours",
          highlights: [
            "Swahili snacks and drinks",
            "Ocean sunset views",
            "Peaceful sail with optional storytelling"
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: "i8-r1",
      user: "Nadia Wambua",
      avatar: "/avatars/user14.jpg",
      rating: 5,
      date: "2024-09-15",
      title: "Dreamy island with soul",
      content: "Lamu is pure magic. From the culture to the sea breezes and dhows, I felt like I stepped back in time."
    },
    {
      id: "i8-r2",
      user: "Thomas Müller",
      avatar: "/avatars/user15.jpg",
      rating: 4.8,
      date: "2023-12-02",
      title: "Authentic and beautiful",
      content: "No cars, no stress. Just history, beach walks, and the friendliest people. Highly recommended."
    }
  ],
  faqs: [
    {
      question: "Is Lamu safe for tourists?",
      answer: "Yes, Lamu is generally very safe. Local hospitality is warm, and the town is peaceful. Just follow basic travel precautions."
    },
    {
      question: "How do you get to Lamu?",
      answer: "You can fly to Manda Airport via Nairobi or Mombasa. A short boat transfer takes you to Lamu Island."
    },
    {
      question: "What makes Lamu unique?",
      answer: "Its preserved Swahili architecture, strong local traditions, and the absence of cars make it a rare and memorable destination."
    }
  ]
},

{
  id: "k0",
  name: "Watamu, Kenya",
  image: "/images/kenya/watamu-beach.webp",
  fallbackImage: "/images/kenya/watamu-coastline.webp",
  images: [
    "/images/kenya/watamu-beach.webp",
    "/images/kenya/watamu-marine-park.webp",
    "/images/kenya/watamu-dhow-sailing.webp",
    "/images/kenya/watamu-ruins.webp"
  ],
  price: 980,
  duration: "5 days",
  rating: 4.83,
  reviewCount: 614,
  category: ["beach", "nature", "cultural"],
  tags: ["marine-park", "relaxation", "family-friendly"],
  slug: "watamu",
  description: "Serene white sand beaches, coral gardens, and Swahili culture by the Indian Ocean.",
  detailedDescription: "Watamu is a tranquil coastal village on Kenya’s north coast, celebrated for its unspoiled beaches, rich marine biodiversity, and archaeological heritage. Home to the Watamu Marine National Park and the Gede Ruins, it is ideal for snorkeling, dolphin spotting, and cultural exploration.",
  highlights: [
    "Snorkeling at Watamu Marine Park",
    "Dhow sailing and dolphin watching",
    "Exploration of Gede Ruins",
    "Sunset beach walks and seafood cuisine"
  ],
  location: {
    lat: -3.3696,
    lng: 40.0209,
    address: "Watamu, Kilifi County, Kenya"
  },
  climate: {
    averageTemp: 29,
    bestTimeToVisit: ["December", "January", "July", "August"]
  },
  included: [
    "4 nights beachfront hotel stay",
    "Daily breakfast and one seafood dinner",
    "Marine park entry fees",
    "Snorkeling equipment and boat transfers",
    "Guided tour to Gede Ruins"
  ],
  notIncluded: [
    "Airfare to Malindi or Mombasa",
    "Alcoholic drinks",
    "Personal expenses and shopping",
    "Travel insurance"
  ],
  attractions: [
    {
      id: "k2-a1",
      name: "Watamu Marine Park",
      image: "/images/kenya/watamu-marine-life.webp",
      description: "A vibrant marine reserve with coral reefs, turtles, and tropical fish.",
      tours: [
        {
          id: "k2-a1-t1",
          name: "Reef Snorkeling Safari",
          price: 40,
          duration: "3 hours",
          highlights: [
            "Snorkel over coral gardens",
            "Turtle and dolphin spotting",
            "Glass-bottom boat option"
          ]
        }
      ]
    },
    {
      id: "k2-a2",
      name: "Gede Ruins",
      image: "/images/kenya/gede-ruins.webp",
      description: "Mysterious ancient Swahili town with a rich historical narrative.",
      tours: [
        {
          id: "k2-a2-t1",
          name: "Guided Ruins Walk and Storytelling",
          price: 25,
          duration: "1.5 hours",
          highlights: [
            "Swahili architecture",
            "Local legends and ghost stories",
            "Nature trail through ancient forest"
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: "k2-r1",
      user: "Angela Nduta",
      avatar: "/avatars/user20.jpg",
      rating: 5,
      date: "2024-12-19",
      title: "Pure beach bliss",
      content: "The marine life was magical and the beach uncrowded. Great for families too!"
    },
    {
      id: "k2-r2",
      user: "Martin Zuko",
      avatar: "/avatars/user21.jpg",
      rating: 4.6,
      date: "2025-01-07",
      title: "Hidden coastal gem",
      content: "Much quieter than Diani, and rich in heritage. The ruins were haunting and beautiful."
    }
  ],
  faqs: [
    {
      question: "Is Watamu good for snorkeling?",
      answer: "Absolutely! The marine park offers calm, clear waters perfect for snorkeling and marine photography."
    },
    {
      question: "What’s the best way to reach Watamu?",
      answer: "Fly to Malindi Airport (30 mins drive) or Mombasa Airport (2.5 hours drive). Shuttle transfers are available."
    },
    {
      question: "Are there cultural experiences in Watamu?",
      answer: "Yes, you can visit the Gede Ruins and local Swahili markets, or enjoy traditional Swahili meals."
    }
  ]
},
{
  id: "k11",
  name: "Mombasa, Kenya",
  image: "/images/kenya/mombasa-fort-jesus.webp",
  fallbackImage: "/images/kenya/mombasa-beach.webp",
  images: [
    "/images/kenya/mombasa-fort-jesus.webp",
    "/images/kenya/mombasa-beach.webp",
    "/images/kenya/mombasa-old-town.webp",
    "/images/kenya/mombasa-tamarind-dhow.webp"
  ],
  price: 1350,
  duration: "6 days",
  rating: 4.84,
  reviewCount: 832,
  category: ["beach", "historical", "cultural"],
  tags: ["coastal-city", "island-vibes", "heritage"],
  slug: "mombasa",
  description: "A vibrant coastal city blending history, Swahili culture, and tropical relaxation.",
  detailedDescription: "Mombasa is Kenya’s oldest and second-largest city, offering a rich cultural experience rooted in centuries of Swahili heritage. With stunning beaches, historical landmarks like Fort Jesus, and a bustling Old Town filled with markets and architecture, Mombasa is a gateway to coastal adventures.",
  highlights: [
    "Fort Jesus and Mombasa Old Town",
    "White sands of Nyali and Bamburi Beach",
    "Swahili seafood cuisine",
    "Tamarind Dhow sunset cruise"
  ],
  location: {
    lat: -4.0435,
    lng: 39.6682,
    address: "Mombasa, Kenya"
  },
  climate: {
    averageTemp: 29,
    bestTimeToVisit: ["July", "August", "December", "January"]
  },
  included: [
    "5 nights accommodation in a beach resort",
    "Daily breakfast and dinner",
    "Guided tour of Fort Jesus and Old Town",
    "Sunset Dhow cruise",
    "Transfers from Mombasa SGR station or airport"
  ],
  notIncluded: [
    "International or local flights",
    "Lunches and drinks",
    "Personal shopping",
    "Travel insurance"
  ],
  attractions: [
    {
      id: "k11-a1",
      name: "Fort Jesus Museum",
      image: "/images/kenya/fort-jesus-inside.webp",
      description: "A 16th-century Portuguese fort with exhibitions on Mombasa’s rich history.",
      tours: [
        {
          id: "k1-a1-t1",
          name: "Guided Historical Tour",
          price: 30,
          duration: "2 hours",
          highlights: [
            "Fort architecture and cannons",
            "Swahili and Portuguese history",
            "View over Mombasa harbor"
          ]
        }
      ]
    },
    {
      id: "k11-a2",
      name: "Tamarind Dhow Cruise",
      image: "/images/kenya/mombasa-dhow.webp",
      description: "A magical sunset cruise on a traditional dhow with live music and seafood dinner.",
      tours: [
        {
          id: "k11-a2-t1",
          name: "Luxury Evening Dhow Experience",
          price: 80,
          duration: "3 hours",
          highlights: [
            "Live band and traditional entertainment",
            "Gourmet seafood buffet",
            "Romantic sunset views on the ocean"
          ]
        }
      ]
    }
  ],
  reviews: [
    {
      id: "k11-r1",
      user: "Neema Ali",
      avatar: "/avatars/user12.jpg",
      rating: 5,
      date: "2024-12-30",
      title: "Swahili magic",
      content: "Mombasa was full of flavor, history, and beauty. I loved the Old Town walking tour and the dhow dinner cruise was unforgettable."
    },
    {
      id: "k11-r2",
      user: "Peter Schwarz",
      avatar: "/avatars/user13.jpg",
      rating: 4.8,
      date: "2024-08-10",
      title: "Great mix of culture and beach",
      content: "A perfect vacation blend – learned a lot about Swahili culture and relaxed by the ocean."
    }
  ],
  faqs: [
    {
      question: "Is Mombasa safe for tourists?",
      answer: "Yes, it is generally safe. Stick to known tourist areas and follow local advice for a smooth visit."
    },
    {
      question: "Can I swim at the beaches?",
      answer: "Absolutely! Nyali, Bamburi, and Tiwi beaches are great for swimming and water sports."
    },
    {
      question: "How do I get to Mombasa?",
      answer: "You can fly into Moi International Airport or take the SGR train from Nairobi (approx. 5 hours)."
    }
  ]
}






 ]
