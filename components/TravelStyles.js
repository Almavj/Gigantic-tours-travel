import { FiGlobe, FiMapPin, FiHeart, FiClock } from 'react-icons/fi';

const TravelStyles = () => {
  const styles = [
    {
      id: 1,
      name: 'Adventure',
      icon: <FiGlobe className="w-8 h-8" />,
      description: 'Thrilling experiences for adrenaline seekers'
    },
    {
      id: 2,
      name: 'Cultural',
      icon: <FiMapPin className="w-8 h-8" />,
      description: 'Immerse yourself in local traditions'
    },
    {
      id: 3,
      name: 'Luxury',
      icon: <FiHeart className="w-8 h-8" />,
      description: 'Premium experiences with top-tier accommodations'
    },
    {
      id: 4,
      name: 'Quick Getaways',
      icon: <FiClock className="w-8 h-8" />,
      description: 'Perfect short trips for busy travelers'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Travel Style</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer diverse travel experiences tailored to your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {styles.map((style) => (
            <div 
              key={style.id}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-blue-100 rounded-full text-blue-600">
                {style.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{style.name}</h3>
              <p className="text-gray-600 text-center">{style.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelStyles;