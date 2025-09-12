import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Packages = ({ 
  title, 
  description, 
  packages = [], 
  region, 
  onSelect,
  bgClass = 'bg-white'
}) => {
  if (!packages.length) return null;

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.slice(0, 6).map((pkg) => (
            <motion.div 
              key={pkg.slug}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={pkg.images?.[0] || '/images/default-destination.jpg'}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                  priority={pkg.featured}
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
                  <Link
  href={`/destinations/${pkg.slug}`}
  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors text-center"
>
  View Details
</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {packages.length > 6 && (
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

Packages.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  packages: PropTypes.array.isRequired,
  region: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  bgClass: PropTypes.string
};

export default Packages;