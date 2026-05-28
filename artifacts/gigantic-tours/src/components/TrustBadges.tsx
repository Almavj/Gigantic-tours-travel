import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users, Globe, Leaf } from 'lucide-react';

const badges = [
  {
    Icon: Award,
    title: "Award Winning",
    description: "Recognized as East Africa's top tour operator for 5 consecutive years",
    stat: "#1 Rated",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    Icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your travel needs and emergencies",
    stat: "Always On",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    Icon: Shield,
    title: "Fully Licensed",
    description: "Kenya Tourism Board certified and internationally accredited operator",
    stat: "KTB Cert.",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    Icon: Users,
    title: "10,000+ Travelers",
    description: "Thousands of satisfied customers across 35+ countries trust us",
    stat: "10K+ Happy",
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    Icon: Globe,
    title: "50+ Destinations",
    description: "Curated experiences across Kenya, East Africa and beyond",
    stat: "50+ Places",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    Icon: Leaf,
    title: "Eco-Certified",
    description: "Committed to sustainable tourism that preserves nature and communities",
    stat: "Carbon Offset",
    color: "from-teal-500 to-green-500",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  }
];

export default function TrustBadges() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Thousands Choose Us
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Over a decade of crafting extraordinary journeys — here's why travelers trust Gigantic Tours
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map(({ Icon, title, description, stat, color, bg, border }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative p-7 rounded-2xl border ${border} ${bg} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 text-xs font-bold bg-gradient-to-r ${color} text-white px-3 py-1.5 rounded-bl-2xl`}>
                {stat}
              </div>
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} mb-5 shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
