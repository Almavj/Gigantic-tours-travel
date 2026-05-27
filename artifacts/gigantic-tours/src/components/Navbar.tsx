import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

interface NavSubItem {
  name: string;
  path: string;
  highlight?: boolean;
  image?: string;
}

interface NavColumn {
  title: string;
  icon: string;
  featured?: boolean;
  items: NavSubItem[];
}

interface NavDropdown {
  title: string;
  description: string;
  columns: NavColumn[];
}

interface NavItem {
  name: string;
  path: string;
  dropdown?: NavDropdown;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const navItems: NavItem[] = [
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
              { name: 'Safari Adventure', path: '/destinations/kenya' },
              { name: 'Beach Paradise', path: '/destinations/diani-beach' },
              { name: 'Cultural Journey', path: '/destinations' },
            ]
          }
        ]
      }
    },
    {
      name: 'Local Packages',
      path: '/destinations/kenya',
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
              { name: 'Lamu', path: '/destinations/lamu-island' },
            ]
          },
          {
            title: 'Bush Region',
            icon: '🦁',
            items: [
              { name: 'Maasai Mara', path: '/destinations/maasai-mara', highlight: true },
              { name: 'Amboseli', path: '/destinations/amboseli-elephants' },
              { name: 'Tsavo', path: '/destinations/tsavo-migration' },
              { name: 'Samburu', path: '/destinations/samburu' },
            ]
          },
          {
            title: 'Mountain Region',
            icon: '⛰️',
            items: [
              { name: 'Mount Kenya', path: '/destinations/mount-kenya', highlight: true },
              { name: 'Aberdares', path: '/destinations/aberdare' },
              { name: 'Lake Naivasha', path: '/destinations/lake-naivasha' },
            ]
          },
          {
            title: 'Urban Region',
            icon: '🏙️',
            items: [
              { name: 'Nairobi', path: '/destinations/nairobi', highlight: true },
              { name: 'Nakuru', path: '/destinations/lake-nakuru' },
              { name: 'Kisumu', path: '/destinations' },
            ]
          },
          {
            title: 'Special Offers',
            icon: '🔥',
            featured: true,
            items: [
              { name: 'Weekend Getaways', path: '/destinations/kenya' },
              { name: 'Honeymoon Special', path: '/destinations/diani-beach' },
              { name: 'Family Packages', path: '/destinations/kenya' },
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
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <img src="/logos/GTT-LOGO.png" alt="Gigantic Tours & Travel Logo" className="h-10 w-auto object-contain mr-2 transition-transform group-hover:scale-105" style={{maxWidth:'48px'}} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Gigantic Tours & Travel
              </span>
            </Link>
          </div>

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
                        location.startsWith(item.path)
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
                    </div>

                    {activeDropdown === item.name && (
                      <div
                        className="absolute left-0 w-screen bg-white shadow-xl border-t border-gray-200 z-50"
                        style={{ left: '50%', transform: 'translateX(-50%)' }}
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
                      location === item.path
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700">
              Book Now
            </button>
          </div>

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

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-xl`}>
        <div className="px-2 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.path}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                      location.startsWith(item.path)
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

                  {activeDropdown === item.name && (
                    <div className="pl-4 space-y-3 mt-1">
                      <div className="border-l-2 border-blue-200 pl-3">
                        {item.dropdown.columns.slice(0, 4).map((column, colIndex) => (
                          <div key={colIndex} className="mb-3">
                            <div className="flex items-center mb-1">
                              <span className="text-sm mr-1">{column.icon}</span>
                              <h4 className="text-sm font-medium text-gray-700">{column.title}</h4>
                            </div>
                            <ul className="space-y-1 pl-4">
                              {column.items.slice(0, 3).map((subItem, subIndex) => (
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
                    location === item.path
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
