import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { FiMapPin } from 'react-icons/fi';

export default function DestinationCard({ destination }) {
  const locationText = destination.location?.address || 
                      `${destination.location?.city}, ${destination.location?.country}`;

  return (
    <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={destination.images[0]}
          alt={destination.name}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          quality={80}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{destination.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <FiMapPin className="flex-shrink-0 mr-1" />
            <span className="truncate">{locationText}</span>
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
              ${destination.price?.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">{destination.duration}</div>
          </div>
        </div>
        <p className="mt-3 text-gray-600 line-clamp-2 text-sm">{destination.description}</p>
        <Link
          href={`/destinations/${destination.slug}`}
          className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          View Details
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}