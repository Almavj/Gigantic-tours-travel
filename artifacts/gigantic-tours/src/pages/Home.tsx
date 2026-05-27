import { useState, useEffect } from 'react';
import type { Destination, NavItem } from '../types/destination';
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
import { homeDestinations, kenyanDestinations, seasonalDestinations } from '../data/destinations';

const HomePage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<Destination | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: 'Destinations', href: '/destinations' },
    { name: 'Travel Styles', href: '/travel-styles' },
    { name: 'Deals', href: '/deals' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const handlePackageSelect = (pkg: Destination) => {
    setSelectedPackage(pkg);
    setIsBookingModalOpen(true);
  };

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  useEffect(() => {
    document.title = 'Gigantic Tours & Travel | Luxury Travel Experiences';
  }, []);

  return (
    <>
      <Navbar />
      <div className="fixed top-16 w-full z-40">
        <DealsTicker />
      </div>
      <div className="min-h-screen pt-24">
        <Hero onQuizOpen={() => setIsQuizOpen(true)} />
        <AITravelQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Destinations</h2>
            <p className="mt-4 text-xl text-gray-600">
              Handpicked travel experiences for your next adventure
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeDestinations.map((destination: Destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </section>

        <Packages
          title="Kenyan Adventures"
          description="Experience the magic of Kenya's wildlife and landscapes"
          packages={kenyanDestinations}
          region="kenya"
          onSelect={handlePackageSelect}
        />

        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Seasonal Highlights</h2>
            <p className="mt-4 text-xl text-gray-600">
              Best destinations to visit in {currentMonth}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {seasonalDestinations.map((destination: Destination) => (
              <DestinationCard key={destination.slug} destination={destination} showSeasonBadge={true} />
            ))}
          </div>
        </section>

        <Packages
          title="International Getaways"
          description="Curated global travel packages"
          packages={homeDestinations.filter((d: Destination) => d.location.country !== 'Kenya')}
          region="international"
          onSelect={handlePackageSelect}
        />

        <TravelStyles />
        <Testimonials />
        <TrustBadges />
        <Newsletter />
        <Footer navItems={navItems} />

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
