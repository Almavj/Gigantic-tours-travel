import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('../components/Navbar'));
const Hero = dynamic(() => import('../components/Hero'));
const AITravelQuiz = dynamic(() => import('../components/AITravelQuiz'));
const Packages = dynamic(() => import('../components/Packages'));
const Testimonials = dynamic(() => import('../components/Testimonials'));
const Newsletter = dynamic(() => import('../components/Newsletter'));
const Footer = dynamic(() => import('../components/Footer'));
const Modal = dynamic(() => import('../components/Modal'));
const BookingForm = dynamic(() => import('../components/BookingForm'));
const TrustBadges = dynamic(() => import('../components/TrustBadges'));
const TravelStyles = dynamic(() => import('../components/TravelStyles'));
const DestinationCard = dynamic(() => import('../components/DestinationCard'));
const DealsTicker = dynamic(() => import('../components/DealsTicker'));
import { homeDestinations, kenyanDestinations, seasonalDestinations } from '../data/destinations';

const HomePage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const navItems = [
    { name: 'Destinations', href: '/destinations' },
    { name: 'Travel Styles', href: '/travel-styles' },
    { name: 'Deals', href: '/deals' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setIsBookingModalOpen(true);
  };

  // Get current month for seasonal highlights
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <>
      <Head>
        <title>Gigantic Tours & Travel | Luxury Travel Experiences</title>
        <meta name="description" content="Discover handcrafted luxury travel experiences with our AI-powered recommendation engine and exclusive deals." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar: Assumed to be fixed with 'top-0' and a specific height (e.g., h-16) */}
      <Navbar navItems={navItems} />

      {/* Deals Ticker: This is the ONLY instance of DealsTicker.
          It's fixed right below the Navbar. */}
      <div className="fixed top-16 w-full z-40">
        <DealsTicker />
      </div>

      {/* Main content area:
          'pt-24' (6rem or 96px) is crucial here. It pushes all the content
          below the Navbar (h-16) AND the DealsTicker (which is assumed to be h-8 or 32px).
          (16px + 8px = 24px, 16*1.5rem = 24rem if using rem scale, so pt-24 should be okay)
          Adjust 'pt-24' if your Navbar or DealsTicker have different heights. */}
      <div className="min-h-screen pt-24">
        <Hero onQuizOpen={() => setIsQuizOpen(true)} />
        <AITravelQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />

        {/* Featured Destinations Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Destinations</h2>
            <p className="mt-4 text-xl text-gray-600">
              Handpicked travel experiences for your next adventure
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>
        </section>

        {/* Kenyan Destinations Section */}
        <Packages
          title="Kenyan Adventures"
          description="Experience the magic of Kenya's wildlife and landscapes"
          packages={kenyanDestinations}
          region="kenya"
          onSelect={handlePackageSelect}
        />

        {/* Seasonal Recommendations */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Seasonal Highlights</h2>
            <p className="mt-4 text-xl text-gray-600">
              Best destinations to visit in {currentMonth}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {seasonalDestinations.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
                showSeasonBadge={true}
              />
            ))}
          </div>
        </section>

        {/* International Getaways */}
        <Packages
          title="International Getaways"
          description="Curated global travel packages"
          packages={homeDestinations.filter((d) => d.location.country !== 'Kenya')}
          region="international"
          onSelect={handlePackageSelect}
        />

        <TravelStyles />
        <Testimonials />
        <TrustBadges />
        <Newsletter />
        <Footer navItems={navItems} />

        {/* Booking Modal */}
        <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
          {selectedPackage && <BookingForm destination={selectedPackage} />}
        </Modal>
      </div>
    </>
  );
};

export default HomePage;