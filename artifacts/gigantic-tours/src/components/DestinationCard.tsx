import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Destination } from '../types/destination';

interface DestinationCardProps {
  destination: Destination;
  showSeasonBadge?: boolean;
}

export default function DestinationCard({ destination, showSeasonBadge }: DestinationCardProps) {
  const locationText = destination.location?.city ||
    destination.location?.country ||
    destination.location?.address || '';

  const categoryLabel = destination.category?.[0] || 'Safari';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=75';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          {showSeasonBadge && (
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              🌟 Seasonal Pick
            </span>
          )}
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
            {categoryLabel}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <div className="bg-white rounded-xl px-3 py-1.5 shadow-lg">
            <div className="text-blue-700 font-black text-sm">${destination.price?.toLocaleString()}</div>
            <div className="text-gray-400 text-xs text-center">/ person</div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-black text-white mb-1 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {destination.name}
          </h3>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin className="flex-shrink-0 mr-1 w-3.5 h-3.5 text-amber-400" />
            <span className="truncate">{locationText}</span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-bold text-gray-900 text-sm">{destination.rating}</span>
            <span className="text-gray-400 text-sm">({destination.reviewCount?.toLocaleString()})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Clock className="w-3.5 h-3.5" />
            <span>{destination.duration}</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">{destination.description}</p>

        <Link
          href={`/destinations/${destination.slug}`}
          className="group/btn flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-blue-500/25 hover:shadow-lg"
        >
          Explore Package
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
