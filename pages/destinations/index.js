import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { FiMapPin } from 'react-icons/fi';
import { getAllDestinations } from '../../data/destinations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Newsletter from '../../components/Newsletter';
import Packages from '../../components/Packages';
import DestinationCard from '../../components/DestinationCard'; // Keep this import

export default function DestinationsPage() {
  const allDestinations = getAllDestinations();

  return (
    <>
      <Head>
        <title>All Destinations | Travel Explorer</title>
        <meta name="description" content="Browse our complete list of travel destinations" />
      </Head>

      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/images/destinations-hero.jpg"
              alt="Destinations"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Our Destinations
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Discover breathtaking locations for your next adventure
            </p>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>

        {/* Featured Packages */}
        <Packages 
          title="Featured Travel Packages"
          subtitle="Handpicked experiences for every traveler"
          limit={3}
        />

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}