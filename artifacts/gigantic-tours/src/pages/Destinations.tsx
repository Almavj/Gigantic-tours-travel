import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { getAllDestinations } from '../data/destinations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import DestinationCard from '../components/DestinationCard';
import type { Destination } from '../types/destination';
import { Search, Filter } from 'lucide-react';

const FILTERS = ['All', 'Kenya', 'International', 'Beach', 'Safari', 'Adventure', 'Cultural', 'Seasonal'];

const DestinationsPage = () => {
  const allDestinations: Destination[] = getAllDestinations();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.title = 'All Destinations | Gigantic Tours & Travel';
    window.scrollTo({ top: 0 });
  }, []);

  const filtered = useMemo(() => {
    let result = allDestinations;

    if (activeFilter !== 'All') {
      const filterLow = activeFilter.toLowerCase();
      result = result.filter(d => {
        if (filterLow === 'kenya') return d.location?.country === 'Kenya' || d.location?.country?.toLowerCase() === 'kenya';
        if (filterLow === 'international') return d.location?.country !== 'Kenya';
        if (filterLow === 'seasonal') return d.tags?.includes('seasonal') || d.category?.some(c => c.toLowerCase().includes('seasonal'));
        return d.category?.some(c => c.toLowerCase().includes(filterLow)) || d.tags?.some(t => t.toLowerCase().includes(filterLow));
      });
    }

    if (search.trim()) {
      const s = search.toLowerCase();
      result = result.filter(d =>
        d.name.toLowerCase().includes(s) ||
        d.description?.toLowerCase().includes(s) ||
        d.location?.country?.toLowerCase().includes(s) ||
        d.location?.city?.toLowerCase().includes(s)
      );
    }

    return result;
  }, [allDestinations, activeFilter, search]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="relative h-80 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=85"
            alt="Destinations"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                All Destinations
              </h1>
              <p className="text-white/70 text-lg max-w-xl">
                {allDestinations.length} handpicked destinations — from Kenya's wilderness to the world's finest spots
              </p>
            </motion.div>
          </div>
        </div>

        <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
                {FILTERS.map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeFilter === f
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No destinations found</h3>
              <p className="text-gray-500">Try adjusting your search or filter</p>
              <button onClick={() => { setSearch(''); setActiveFilter('All'); }} className="mt-4 text-blue-600 font-semibold hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <p className="text-gray-500 text-sm">
                  Showing <span className="font-bold text-gray-900">{filtered.length}</span> destination{filtered.length !== 1 ? 's' : ''}
                  {activeFilter !== 'All' && ` in ${activeFilter}`}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {filtered.map((destination: Destination, i: number) => (
                  <motion.div
                    key={destination.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
                  >
                    <DestinationCard destination={destination} />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default DestinationsPage;
