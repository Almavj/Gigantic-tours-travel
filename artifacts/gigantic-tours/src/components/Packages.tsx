import { motion } from 'framer-motion';
import { Link } from 'wouter';
import type { Destination } from '../types/destination';

interface PackagesProps {
  bgClass?: string;
  description?: string;
  subtitle?: string;
  onSelect?: (pkg: Destination) => void;
  packages?: Destination[];
  region?: string;
  title: string;
}

const Packages = ({
  title,
  description,
  subtitle,
  packages = [],
  region,
  onSelect,
  bgClass = 'bg-white'
}: PackagesProps) => {
  if (!packages || !packages.length) return null;

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description || subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.slice(0, 6).map((pkg: Destination) => (
            <motion.div
              key={pkg.slug}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.images?.[0] || '/images/hero-fallback.webp'}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-fallback.webp'; }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    ${pkg.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{pkg.duration}</span>
                  {onSelect ? (
                    <button
                      onClick={() => onSelect(pkg)}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-center"
                    >
                      Book Now
                    </button>
                  ) : (
                    <Link
                      href={`/destinations/${pkg.slug}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-center"
                    >
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {packages.length > 6 && region && (
          <div className="mt-12 text-center">
            <Link
              href={`/destinations/${region}`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              View All {title}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Packages;
