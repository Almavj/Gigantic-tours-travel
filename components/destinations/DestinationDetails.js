import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import DestinationCard from '../DestinationCard'; // Updated import path

export default function DestinationDetails({ destination, relatedDestinations = [] }) {
  const primaryCategory = destination.category?.[0] || 'destination';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-sm text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link 
                href={`/destinations/${primaryCategory.toLowerCase()}`}
                className="text-sm text-gray-700 hover:text-blue-600 capitalize"
              >
                {primaryCategory}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-sm font-medium text-gray-500">
                {destination.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <div className="relative h-96 rounded-xl overflow-hidden mb-4">
            <Image
              src={destination.image || destination.images[0]}
              alt={destination.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {destination.images.slice(0, 3).map((image, index) => (
              <div key={index} className="relative h-24 rounded overflow-hidden">
                <Image
                  src={image}
                  alt={`${destination.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{destination.name}</h1>
          <div className="flex items-center mb-4">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 font-medium">{destination.rating}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span>{destination.reviewCount} reviews</span>
          </div>
          
          <div className="prose max-w-none mb-6">
            <p className="text-lg text-gray-700">{destination.detailedDescription}</p>
          </div>
          
          {destination.highlights?.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">Highlights</h3>
              <ul className="list-disc pl-5 space-y-1">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-600">{highlight}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  ${destination.price?.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">{destination.duration}</div>
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </div>
            {destination.included?.length > 0 && (
              <div className="text-sm text-gray-600">
                <p className="font-medium mb-1">What's included:</p>
                <ul className="space-y-1">
                  {destination.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-4 w-4 text-green-500 mr-1.5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Destinations */}
      {relatedDestinations.length > 0 && (
        <section className="border-t border-gray-200 pt-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              More {primaryCategory} Destinations
            </h2>
            <Link href={`/destinations/${primaryCategory.toLowerCase()}`} className="text-sm font-medium text-blue-600 hover:text-blue-800">
              View all →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedDestinations.map(dest => (
              <DestinationCard key={dest.slug} destination={dest} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}