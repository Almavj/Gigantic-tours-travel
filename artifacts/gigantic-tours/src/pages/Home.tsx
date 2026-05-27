import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import type { Destination } from '../types/destination';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AITravelQuiz from '../components/AITravelQuiz';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import BookingForm from '../components/BookingForm';
import TrustBadges from '../components/TrustBadges';
import TravelStyles from '../components/TravelStyles';
import DestinationCard from '../components/DestinationCard';
import DealsTicker from '../components/DealsTicker';
import { homeDestinations, kenyanDestinations, seasonalDestinations, allDestinations } from '../data/destinations';
import { ArrowRight } from 'lucide-react';

const FEATURED_SLUGS = ['maasai-mara', 'diani-beach', 'bali-indonesia', 'santorini', 'amboseli', 'zanzibar-tanzania'];

const featuredDestinations = FEATURED_SLUGS.map(slug =>
  allDestinations.find(d => d.slug === slug)
).filter(Boolean) as Destination[];

const HomePage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<Destination | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  const handlePackageSelect = (pkg: Destination) => {
    setSelectedPackage(pkg);
    setIsBookingModalOpen(true);
  };

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  useEffect(() => {
    document.title = 'Gigantic Tours & Travel | Africa\'s Premier Tour Company';
  }, []);

  const stats = [
    { value: '10K+', label: 'Happy Travelers' },
    { value: '50+', label: 'Destinations' },
    { value: '4.9', label: 'Avg. Rating' },
    { value: '12+', label: 'Years Experience' },
  ];

  return (
    <>
      <Navbar />
      <div className="fixed top-20 w-full z-40">
        <DealsTicker />
      </div>
      <div className="pt-20">
        <Hero onQuizOpen={() => setIsQuizOpen(true)} />
        <AITravelQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 py-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-black text-amber-400 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.value}</div>
                  <div className="text-blue-200 text-sm font-medium">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-4">
                  <span className="text-amber-600 text-sm font-semibold">✨ Handpicked For You</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Featured Destinations
                </h2>
                <p className="text-gray-500 text-lg mt-3 max-w-xl">
                  From Kenya's iconic wilderness to the world's most-loved destinations
                </p>
              </div>
              <Link
                href="/destinations"
                className="flex-shrink-0 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all group"
              >
                Browse All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {(featuredDestinations.length > 0 ? featuredDestinations : homeDestinations).slice(0, 6).map((destination: Destination) => (
                <DestinationCard key={destination.slug} destination={destination} />
              ))}
            </div>
          </div>
        </section>

        <Packages
          title="Kenyan Adventures"
          description="Experience the magic of Kenya's iconic wildlife, pristine beaches, and rich culture"
          packages={kenyanDestinations.slice(0, 6)}
          region="kenya"
          onSelect={handlePackageSelect}
          dark={true}
        />

        <TravelStyles />

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
                <span className="text-green-600 text-sm font-semibold">🌿 Seasonal Highlights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Best in {currentMonth}
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Time your visit perfectly — these destinations are at their absolute best right now
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {seasonalDestinations.map((destination: Destination) => (
                <DestinationCard key={destination.slug} destination={destination} showSeasonBadge />
              ))}
            </div>
          </div>
        </section>

        <Packages
          title="International Getaways"
          description="Curated global escapes for the discerning traveler — from Bali to Barcelona"
          packages={allDestinations.filter(d => d.location?.country !== 'Kenya').slice(0, 6)}
          region="international"
          onSelect={handlePackageSelect}
        />

        <Testimonials />
        <TrustBadges />
        <Newsletter />
        <Footer />

        <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
          {selectedPackage && (
            <BookingForm destination={selectedPackage} onClose={() => setIsBookingModalOpen(false)} />
          )}
        </Modal>
      </div>
    </>
  );
};

export default HomePage;
