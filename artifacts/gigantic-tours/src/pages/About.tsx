import { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Award, Leaf, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const teamMembers = [
  {
    name: 'Victory Wanjiku',
    role: 'Founder & CEO',
    bio: 'With 15+ years in the travel industry, Victory founded Gigantic Tours to share her passion for authentic African experiences with the world.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
  },
  {
    name: 'Allan Macharia',
    role: 'Head of Operations',
    bio: 'Allan ensures every journey runs flawlessly, overseeing logistics, partnerships, and quality control across all our destinations.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  },
  {
    name: 'Steve White',
    role: 'Senior Travel Expert',
    bio: 'Having visited 60+ countries, Steve crafts our international itineraries with unrivaled destination knowledge and cultural sensitivity.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Careb Kimani',
    role: 'Guest Experience Lead',
    bio: 'Careb ensures every traveler receives five-star service from the first inquiry to the final farewell — and everything in between.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  }
];

const stats = [
  { value: '50+', label: 'Destinations' },
  { value: '10,000+', label: 'Happy Travelers' },
  { value: '12+', label: 'Years Experience' },
  { value: '35', label: 'Countries' }
];

const values = [
  {
    Icon: Heart,
    name: 'Authenticity',
    description: 'We curate genuine experiences that form deep connections between travelers and the cultures they explore.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    Icon: Leaf,
    name: 'Sustainability',
    description: 'Committed to responsible tourism practices that preserve natural habitats and empower local communities.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    Icon: Award,
    name: 'Excellence',
    description: 'We deliver five-star quality at every touchpoint — from first contact through to your safe return home.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  }
];

export default function About() {
  useEffect(() => {
    document.title = 'About Us — Gigantic Tours & Travel';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=85"
          alt="About Gigantic Tours"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400 text-sm font-semibold">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About Gigantic<br />
              <span className="text-amber-400">Tours & Travel</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Born in Kenya, inspired by the world — crafting extraordinary journeys since 2012
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-black text-amber-400 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.value}</div>
              <div className="text-blue-200 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-600 text-sm font-semibold">Our Story</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Where It All Began
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2012, Gigantic Tours & Travel grew from a simple idea: that everyone deserves to experience the magic of Kenya's wilderness — and the wonders of the wider world.
              </p>
              <p>
                What started as a small team of passionate adventurers in Nairobi has grown into a full-service international travel company serving thousands of guests from over 35 countries each year.
              </p>
              <p>
                Today, we're proud to be Kenya Tourism Board certified and internationally recognized as one of East Africa's most trusted tour operators.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&q=80"
                alt="Our story"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="text-3xl font-black text-blue-700">12+</div>
                <div className="text-gray-500 text-sm">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div className="order-last md:order-first" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800&q=80"
                alt="Our mission"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 rounded-2xl shadow-xl p-5 text-white">
                <div className="text-3xl font-black">10K+</div>
                <div className="text-amber-100 text-sm">Travelers Served</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-600 text-sm font-semibold">Our Mission</span>
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Transforming Lives<br />Through Travel
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We believe travel has the power to transform perspectives, forge lasting friendships, and create memories that define a lifetime.
              </p>
              <p>
                Our mission is to craft extraordinary journeys that go beyond the ordinary — connecting people with the world's most spectacular destinations in deeply meaningful ways.
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              {['Expert-curated itineraries by certified travel specialists', '24/7 dedicated support throughout your journey', 'Sustainable tourism that gives back to local communities'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Core Values</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">The principles that guide every journey we craft</p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {values.map(({ Icon, name, description, color, bg }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl ${bg} mb-5`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
                <p className="text-gray-500 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Meet Our Team</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">The passionate people behind your perfect journey</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mx-auto w-40 h-40 rounded-full overflow-hidden mb-5 shadow-xl border-4 border-white ring-4 ring-gray-100 group-hover:ring-amber-300 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=70'; }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Start Your Adventure?
          </h2>
          <p className="text-blue-200 text-xl mb-8 max-w-xl mx-auto">
            Let us design the trip of your lifetime. Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold rounded-full transition-all hover:scale-105 shadow-xl"
            >
              Explore Destinations
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
