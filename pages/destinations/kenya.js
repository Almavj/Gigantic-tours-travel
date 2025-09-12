import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { kenyanDestinations } from '../../data/destinations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DestinationCard from '../../components/DestinationCard';
import CategoryFilter from '../../components/CategoryFilter';

export default function KenyanDestinationsPage() {
  const categories = [...new Set(kenyanDestinations.flatMap(dest => dest.category))];

  return (
    <>
      <Head>
        <title>Kenya Safaris & Tours | World Life Safaris</title>
        <meta name="description" content="Explore our collection of Kenya safari packages, from Maasai Mara to Diani Beach and Mount Kenya adventures." />
      </Head>

      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-0">
            <Image
              src="/images/kenya-hero.jpg"
              alt="Kenya Safaris"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Kenya Safaris
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the magic of Kenya's diverse landscapes and wildlife
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CategoryFilter categories={categories} />
        </div>

        {/* Destinations Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Kenya Destinations</h2>
            <Link href="/destinations" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to All Destinations
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kenyanDestinations.map(destination => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}