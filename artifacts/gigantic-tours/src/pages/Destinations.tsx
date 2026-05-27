import { useEffect } from 'react';
import { getAllDestinations } from '../data/destinations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import DestinationCard from '../components/DestinationCard';
import type { Destination } from '../types/destination';

const DestinationsPage = () => {
  const allDestinations: Destination[] = getAllDestinations();

  useEffect(() => {
    document.title = 'All Destinations | Gigantic Tours & Travel';
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <img
              src="/images/destinations-hero.jpg"
              alt="Destinations"
              className="w-full h-full object-cover opacity-50"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center pt-36">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Our Destinations
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Discover breathtaking locations for your next adventure
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((destination: Destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default DestinationsPage;
