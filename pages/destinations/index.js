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
import DestinationCard from '../../components/DestinationCard';

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

function DestinationCard({ destination }) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={destination.images[0]}
          alt={destination.name}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{destination.name}</h3>
          <div className="flex items-center text-white/90">
            <FiMapPin className="flex-shrink-0 mr-1" />
            <span className="text-sm truncate">
              {destination.location.address || `${destination.location.city}, ${destination.location.country}`}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 font-medium text-gray-900">{destination.rating}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-600">{destination.reviewCount} reviews</span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-blue-600">
              ${destination.price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">per person</div>
          </div>
        </div>
        <p className="mt-3 text-gray-600 line-clamp-2">{destination.description}</p>
        <Link
          href={`/destinations/${destination.slug}`}
          className="mt-4 inline-block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}