import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ChevronDown, MapPin, Star, Users, Award } from 'lucide-react';

interface HeroImage {
  src: string;
  title: string;
  subtitle: string;
  location: string;
}

interface HeroProps {
  onQuizOpen?: () => void;
}

const heroImages: HeroImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1920&q=90',
    title: 'Witness the Great Migration',
    subtitle: 'Maasai Mara, Kenya',
    location: 'Kenya, East Africa'
  },
  {
    src: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1920&q=90',
    title: 'Paradise Found',
    subtitle: 'Diani Beach, Kenya',
    location: 'Indian Ocean Coast'
  },
  {
    src: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=90',
    title: 'Sunsets in Santorini',
    subtitle: 'Greek Island Magic',
    location: 'Santorini, Greece'
  },
  {
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=90',
    title: 'Giants of Amboseli',
    subtitle: 'Elephants & Kilimanjaro',
    location: 'Amboseli, Kenya'
  },
  {
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=90',
    title: 'Ancient Kyoto',
    subtitle: 'Tradition Meets Serenity',
    location: 'Kyoto, Japan'
  }
];

const Hero = ({ onQuizOpen }: HeroProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen min-h-[700px] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${heroImages[currentIndex].src}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        <motion.div
          key={`text-${currentIndex}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
              {heroImages[currentIndex].location}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {heroImages[currentIndex].title}
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 font-light mb-10">
            {heroImages[currentIndex].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/destinations"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
            >
              Explore Destinations
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform rotate-[-90deg]" />
            </Link>
            <button
              onClick={onQuizOpen}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-lg rounded-full border border-white/30 transition-all duration-300 hover:scale-105"
            >
              ✨ Find My Perfect Trip
            </button>
          </div>
        </motion.div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === currentIndex
                    ? 'w-10 h-2 bg-amber-400'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              <div>
                <div className="text-lg font-bold">4.9/5</div>
                <div className="text-xs text-white/60">Avg Rating</div>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-lg font-bold">10,000+</div>
                <div className="text-xs text-white/60">Happy Travelers</div>
              </div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-lg font-bold">50+</div>
                <div className="text-xs text-white/60">Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 z-10"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.div>
    </div>
  );
};

export default Hero;
