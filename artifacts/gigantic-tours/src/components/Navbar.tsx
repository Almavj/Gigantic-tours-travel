import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Globe, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const isHeroPage = location === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Destinations',
      path: '/destinations',
      dropdown: [
        {
          label: '🌍 Kenya',
          items: [
            { name: 'Maasai Mara', path: '/destinations/maasai-mara', badge: 'Popular' },
            { name: 'Amboseli', path: '/destinations/amboseli' },
            { name: 'Diani Beach', path: '/destinations/diani-beach' },
            { name: 'Lake Naivasha', path: '/destinations/lake-naivasha' },
            { name: 'Mount Kenya', path: '/destinations/mount-kenya' },
            { name: 'Samburu', path: '/destinations/samburu' },
            { name: 'Tsavo', path: '/destinations/tsavo' },
            { name: 'Lamu', path: '/destinations/lamu' },
            { name: 'Mombasa', path: '/destinations/mombasa' },
          ]
        },
        {
          label: '🌏 International',
          items: [
            { name: 'Bali, Indonesia', path: '/destinations/bali-indonesia', badge: 'Trending' },
            { name: 'Santorini, Greece', path: '/destinations/santorini' },
            { name: 'Kyoto, Japan', path: '/destinations/kyoto' },
            { name: 'Barcelona, Spain', path: '/destinations/barcelona' },
            { name: 'Swiss Alps', path: '/destinations/swiss-alps' },
            { name: 'Tanzania', path: '/destinations/tanzania' },
            { name: 'South Africa', path: '/destinations/south-africa' },
            { name: 'Sahara Desert', path: '/destinations/sahara-desert' },
          ]
        },
        {
          label: '🌿 Seasonal',
          items: [
            { name: 'Zanzibar', path: '/destinations/zanzibar-tanzania', badge: 'Hot' },
            { name: 'Northern Lights', path: '/destinations/northern-lights-tromso' },
            { name: 'Serengeti Migration', path: '/destinations/serengeti-great-migration' },
            { name: 'Kyoto Cherry Blossom', path: '/destinations/kyoto-cherry-blossom' },
            { name: 'Himalayas', path: '/destinations/himalayas-snow-leopard' },
          ]
        }
      ]
    },
    {
      name: 'Local Packages',
      path: '/destinations',
      dropdown: [
        {
          label: '🏖️ Coast',
          items: [
            { name: 'Diani Beach', path: '/destinations/diani-beach', badge: 'Popular' },
            { name: 'Mombasa', path: '/destinations/mombasa' },
            { name: 'Watamu', path: '/destinations/watamu' },
            { name: 'Malindi', path: '/destinations/malindi' },
            { name: 'Lamu', path: '/destinations/lamu' },
          ]
        },
        {
          label: '🦁 Safari',
          items: [
            { name: 'Maasai Mara', path: '/destinations/maasai-mara', badge: 'Best' },
            { name: 'Amboseli', path: '/destinations/amboseli' },
            { name: 'Tsavo', path: '/destinations/tsavo' },
            { name: 'Samburu', path: '/destinations/samburu' },
            { name: 'Lewa', path: '/destinations/lewa-wildlife-conservancy' },
          ]
        },
        {
          label: '⛰️ Highlands',
          items: [
            { name: 'Mount Kenya', path: '/destinations/mount-kenya', badge: 'Adventure' },
            { name: 'Lake Naivasha', path: '/destinations/lake-naivasha' },
          ]
        }
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const forceScrolled = !isHeroPage;
  const isScrolled = scrolled || forceScrolled;

  const navbarBg = isScrolled
    ? 'bg-slate-900/98 backdrop-blur-xl shadow-xl border-b border-white/10'
    : 'bg-transparent';

  const textColor = isScrolled ? 'text-white/90' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-amber-400' : 'hover:text-amber-400';
  const activeColor = 'text-amber-400';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Gigantic Tours
              </span>
              <div className="text-xs font-medium text-amber-400">
                & Travel
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => (
              <div
                key={item.path + item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${textColor} ${hoverColor} hover:bg-white/10`}>
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${location === item.path ? activeColor : `${textColor} ${hoverColor}`} hover:bg-white/10`}
                  >
                    {item.name}
                  </Link>
                )}

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-max"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex gap-8">
                        {item.dropdown.map((col, ci) => (
                          <div key={ci} className="min-w-[160px]">
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                              {col.label}
                            </div>
                            <ul className="space-y-1">
                              {col.items.map((sub, si) => (
                                <li key={si}>
                                  <Link
                                    href={sub.path}
                                    className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <span className="font-medium group-hover:translate-x-0.5 transition-transform">{sub.name}</span>
                                    {sub.badge && (
                                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <a
              href="tel:+254742977975"
              className={`hidden lg:flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${textColor} ${hoverColor}`}
            >
              <Phone className="w-3.5 h-3.5" />
              +254 742 977 975
            </a>

            <Link
              href="/booking"
              className="ml-3 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-sm rounded-full shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-50"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 py-2 space-y-1">
                          {item.dropdown.map((col) =>
                            col.items.slice(0, 4).map((sub, si) => (
                              <Link
                                key={si}
                                href={sub.path}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                                {sub.badge && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{sub.badge}</span>}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className="block px-4 py-3 text-gray-700 font-semibold rounded-xl hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/booking"
                className="block mt-3 px-6 py-3 bg-amber-500 text-gray-900 font-bold text-center rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
