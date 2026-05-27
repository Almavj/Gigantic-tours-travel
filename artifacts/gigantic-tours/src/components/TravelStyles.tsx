import { motion } from 'framer-motion';
import { Link } from 'wouter';

const styles = [
  {
    name: 'Safari & Wildlife',
    description: 'Track the Big Five through iconic African landscapes with expert naturalist guides.',
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80',
    path: '/destinations/maasai-mara',
    badge: 'Most Popular',
  },
  {
    name: 'Beach & Ocean',
    description: 'Pristine white sands, coral reefs, and crystal-clear Indian Ocean waters await.',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80',
    path: '/destinations/diani-beach',
    badge: 'Trending',
  },
  {
    name: 'Mountain Trekking',
    description: 'Conquer ancient peaks and breathtaking alpine scenery with world-class guides.',
    image: 'https://images.unsplash.com/photo-1577548373535-b33ee6afbfd7?w=800&q=80',
    path: '/destinations/mount-kenya',
    badge: 'Adventure',
  },
  {
    name: 'Cultural Immersion',
    description: 'Step into centuries-old traditions, architecture, and authentic local experiences.',
    image: 'https://images.unsplash.com/photo-1552832618-fbf88ed7c1cf?w=800&q=80',
    path: '/destinations/lamu',
    badge: 'Unique',
  },
];

export default function TravelStyles() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Find Your Travel Style
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every traveler is unique. Discover the experience that speaks to your soul.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={style.image}
                alt={style.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=75'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">
                  {style.badge}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-black text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {style.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {style.description}
                </p>
                <Link
                  href={style.path}
                  className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Explore
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
