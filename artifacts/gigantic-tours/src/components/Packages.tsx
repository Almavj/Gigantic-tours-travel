import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Star, Clock, Users, ArrowRight, ChevronRight } from 'lucide-react';
import type { Destination } from '../types/destination';

interface PackagesProps {
  bgClass?: string;
  description?: string;
  subtitle?: string;
  onSelect?: (pkg: Destination) => void;
  packages?: Destination[];
  region?: string;
  title: string;
  dark?: boolean;
}

const Packages = ({
  title,
  description,
  subtitle,
  packages = [],
  region,
  onSelect,
  dark = false,
}: PackagesProps) => {
  if (!packages || !packages.length) return null;

  return (
    <section className={`py-24 ${dark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className={`text-4xl md:text-5xl font-black mb-3 ${dark ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
              {title}
            </h2>
            <p className={`text-lg max-w-2xl ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
              {description || subtitle}
            </p>
          </div>
          {region && (
            <Link
              href="/destinations"
              className={`flex-shrink-0 inline-flex items-center gap-2 font-semibold text-sm transition-all ${dark ? 'text-amber-400 hover:text-amber-300' : 'text-blue-600 hover:text-blue-700'}`}
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {packages.slice(0, 6).map((pkg: Destination, i: number) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.images?.[0] || 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80'}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-xl px-3 py-2 shadow-lg text-center">
                    <div className="text-blue-700 font-black text-base">${pkg.price?.toLocaleString()}</div>
                    <div className="text-gray-400 text-xs">/ person</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-white text-sm font-semibold">{pkg.rating}</span>
                  <span className="text-white/70 text-xs">({pkg.reviewCount?.toLocaleString()})</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {pkg.name}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">{pkg.description}</p>

                <div className="flex items-center gap-4 mb-5 text-gray-400 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    Group tours
                  </div>
                </div>

                {onSelect ? (
                  <button
                    onClick={() => onSelect(pkg)}
                    className="group/btn flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-blue-500/25"
                  >
                    Book This Package
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <Link
                    href={`/destinations/${pkg.slug}`}
                    className="group/btn flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-md hover:shadow-blue-500/25"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
