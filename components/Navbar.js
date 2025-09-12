import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(router.pathname);
  }, [router.pathname]);

  // Nav items data
  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Destinations', 
      path: '/destinations',
      dropdown: {
        title: 'Explore Our World',
        description: 'Discover breathtaking destinations across the globe',
        columns: [
          {
            title: 'Africa',
            icon: '🌍',
            items: [
              { name: 'Kenya', path: '/destinations/kenya', highlight: true },
              { name: 'Tanzania', path: '/destinations/tanzania' },
              { name: 'South Africa', path: '/destinations/south-africa' },
              { name: 'Zanzibar', path: '/destinations/zanzibar' },
              { name: 'Egypt', path: '/destinations/egypt' },
              { name: 'Morocco', path: '/destinations/morocco' },
            ]
          },
          {
            title: 'Asia',
            icon: '🗼',
            items: [
              { name: 'China', path: '/destinations/china' },
              { name: 'Japan', path: '/destinations/japan', highlight: true },
              { name: 'Thailand', path: '/destinations/thailand' },
              { name: 'Indonesia', path: '/destinations/indonesia' },
              { name: 'Vietnam', path: '/destinations/vietnam' },
            ]
          },
          {
            title: 'Middle East',
            icon: '🕌',
            items: [
              { name: 'Dubai', path: '/destinations/dubai', highlight: true },
              { name: 'Qatar', path: '/destinations/qatar' },
              { name: 'Turkey', path: '/destinations/turkey' },
              { name: 'Jordan', path: '/destinations/jordan' },
            ]
          },
          {
            title: 'Europe',
            icon: '🏰',
            items: [
              { name: 'France', path: '/destinations/france', highlight: true },
              { name: 'Italy', path: '/destinations/italy' },
              { name: 'Spain', path: '/destinations/spain' },
              { name: 'Greece', path: '/destinations/greece' },
            ]
          },
          {
            title: 'Popular Packages',
            icon: '⭐',
            featured: true,
            items: [
              { name: 'Safari Adventure', path: '/packages/safari', image: '/images/safari.jpg' },
              { name: 'Beach Paradise', path: '/packages/beach', image: '/images/beach.jpg' },
              { name: 'Cultural Journey', path: '/packages/cultural', image: '/images/culture.jpg' },
            ]
          }
        ]
      }
    },
    { 
      name: 'Local Packages', 
      path: '/local-packages',
      dropdown: {
        title: 'Kenyan Adventures',
        description: 'Experience the beauty of Kenya with our curated local packages',
        columns: [
          {
            title: 'Coastal Region',
            icon: '🏖️',
            items: [
              { name: 'Mombasa', path: '/destinations/mombasa', highlight: true },
              { name: 'Diani', path: '/destinations/diani-beach' },
              { name: 'Watamu', path: '/destinations/watamu' },
              { name: 'Malindi', path: '/destinations/malindi' },
              { name: 'Lamu', path: '/destinations/lamu' },
            ]
          },
          {
            title: 'Bush Region',
            icon: '🦁',
            items: [
              { name: 'Maasai Mara', path: '/destinations/maasai-mara', highlight: true },
              { name: 'Amboseli', path: '/destinations/amboseli' },
              { name: 'Tsavo', path: '/destinations/tsavo' },
              { name: 'Samburu', path: '/destinations/samburu' },
            ]
          },
          {
            title: 'Mountain Region',
            icon: '⛰️',
            items: [
              { name: 'Mount Kenya', path: '/destinations/mount-kenya', highlight: true },
              { name: 'Aberdares', path: '/destinations/aberdare' },
              { name: 'Mount Elgon', path: '/destinations/mount-elgon' },
            ]
          },
          {
            title: 'Urban Region',
            icon: '🏙️',
            items: [
              { name: 'Nairobi', path: '/destinations/nairobi', highlight: true },
              { name: 'Nakuru', path: '/destinations/nakuru' },
              { name: 'Kisumu', path: '/destinations/kisumu' },
              { name: 'Eldoret', path: '/destinations/eldoret' },
            ]
          },
          {
            title: 'Special Offers',
            icon: '🔥',
            featured: true,
            items: [
              { name: 'Weekend Getaways', path: '/offers/weekend', image: '/images/weekend.jpg' },
              { name: 'Honeymoon Special', path: '/offers/honeymoon', image: '/images/honeymoon.jpg' },
              { name: 'Family Packages', path: '/offers/family', image: '/images/family.jpg' },
            ]
          }
        ]
      }
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TravelEase
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.path}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <div
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-default ${
                        activePath.startsWith(item.path) 
                          ? 'text-blue-600' 
                          : 'text-gray-600 hover:text-blue-500'
                      }`}
                    >
                      {item.name}
                      <svg 
                        className="ml-1 h-4 w-4 inline transition-transform duration-200 transform group-hover:rotate-180" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {activePath.startsWith(item.path) && (
                        <span className="absolute inset-x-1 -bottom-2 h-0.5 bg-blue-600 rounded-full"></span>
                      )}
                    </div>
                    
                    {/* Mega Menu Content */}
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute left-0 right-0 w-screen bg-white shadow-xl border-t border-gray-200 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="max-w-7xl mx-auto px-8 py-6">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-gray-900">{item.dropdown.title}</h3>
                            <p className="text-gray-500">{item.dropdown.description}</p>
                          </div>
                          <div className="grid grid-cols-5 gap-8">
                            {item.dropdown.columns.map((column, colIndex) => (
                              <div key={colIndex} className={`${column.featured ? 'col-span-2' : ''}`}>
                                <div className="flex items-center mb-3">
                                  <span className="text-xl mr-2">{column.icon}</span>
                                  <h4 className="text-lg font-semibold text-gray-900">{column.title}</h4>
                                </div>
                                {column.featured ? (
                                  <div className="grid grid-cols-3 gap-4">
                                    {column.items.map((subItem, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        href={subItem.path}
                                        className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <div className="h-32 bg-gray-200 relative">
                                          {/* Replace with actual image */}
                                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 opacity-70"></div>
                                          <span className="absolute bottom-0 left-0 p-2 text-white font-medium">
                                            {subItem.name}
                                          </span>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                ) : (
                                  <ul className="space-y-2">
                                    {column.items.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <Link
                                          href={subItem.path}
                                          className={`flex items-center px-2 py-1 text-sm rounded transition-colors ${
                                            subItem.highlight 
                                              ? 'bg-blue-50 text-blue-600 font-medium' 
                                              : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                          }`}
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          {subItem.name}
                                          {subItem.highlight && (
                                            <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Popular</span>
                                          )}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      activePath === item.path 
                        ? 'text-blue-600' 
                        : 'text-gray-600 hover:text-blue-500'
                    }`}
                  >
                    {item.name}
                    {activePath === item.path && (
                      <span className="absolute inset-x-1 -bottom-2 h-0.5 bg-blue-600 rounded-full"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
              aria-label="Main menu"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-xl`}>
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.path}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                      activePath.startsWith(item.path)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                    <svg 
                      className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Dropdown Content */}
                  {activeDropdown === item.name && (
                    <div className="pl-4 space-y-3 mt-1">
                      <div className="border-l-2 border-blue-200 pl-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.dropdown.title}</h3>
                        <p className="text-xs text-gray-500 mb-2">{item.dropdown.description}</p>
                        {item.dropdown.columns.map((column, colIndex) => (
                          <div key={colIndex} className="mb-3">
                            <div className="flex items-center mb-1">
                              <span className="text-sm mr-1">{column.icon}</span>
                              <h4 className="text-sm font-medium text-gray-700">{column.title}</h4>
                            </div>
                            <ul className="space-y-1 pl-4">
                              {column.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subItem.path}
                                    className={`block px-2 py-1 text-sm rounded transition-colors ${
                                      subItem.highlight 
                                        ? 'text-blue-600 font-medium' 
                                        : 'text-gray-600 hover:text-blue-500'
                                    }`}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activePath === item.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md shadow hover:shadow-md transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;