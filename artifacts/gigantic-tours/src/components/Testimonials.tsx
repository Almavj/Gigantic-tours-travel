import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "The Maasai Mara safari was the most breathtaking experience of my life. Seeing hundreds of wildebeest cross the Mara River at dawn — I still get chills. Gigantic Tours made every moment perfect.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    trip: "Maasai Mara Safari",
  },
  {
    name: "James Mitchell",
    location: "London, UK",
    text: "Diani Beach was pure paradise. The turquoise waters, the white sand, the expertly planned itinerary — everything was seamless. My family will be talking about this trip for years.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    trip: "Diani Beach Escape",
  },
  {
    name: "Maria Rodriguez",
    location: "Barcelona, Spain",
    text: "Lamu Island was like stepping back in time. Rich Swahili architecture, dhow boat rides, incredible seafood. Our guide was incredibly knowledgeable. Highly recommend!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    trip: "Lamu Cultural Journey",
  },
  {
    name: "David Chen",
    location: "Sydney, Australia",
    text: "Trekking Mount Kenya was challenging in the best possible way. Our guides were professional, safety was prioritized at every step, and the summit views were indescribable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    trip: "Mount Kenya Trek",
  },
  {
    name: "Emma Thompson",
    location: "Toronto, Canada",
    text: "The Santorini package was exceptional. From the caldera-view hotel to the private sunset cruise, every detail was thoughtfully arranged. Worth every penny!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    trip: "Santorini, Greece",
  },
  {
    name: "Ahmed Hassan",
    location: "Dubai, UAE",
    text: "Samburu exceeded all expectations. The rare northern species — reticulated giraffe, Grevy's zebra — were astonishing. The camp was luxurious and the guides were world-class.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0dc05ae18ece?w=200&q=80",
    trip: "Samburu Safari",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-5">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-400 text-sm font-semibold">4.9/5 from 10,000+ travelers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Stories From Our Travelers
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real experiences from real people who trusted us with their most precious memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-900 rounded-2xl p-7 border border-gray-800 hover:border-amber-500/30 transition-all duration-300 hover:shadow-2xl group"
            >
              <Quote className="w-8 h-8 text-amber-500/30 mb-5 group-hover:text-amber-500/60 transition-colors" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-500/30"
                  onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=70'; }}
                />
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.location}</div>
                </div>
                <div className="ml-auto">
                  <div className="text-xs bg-blue-900/40 text-blue-400 px-2.5 py-1 rounded-full border border-blue-800/50 whitespace-nowrap">{t.trip}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
