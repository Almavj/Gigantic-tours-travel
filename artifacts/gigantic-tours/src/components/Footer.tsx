import { Link } from 'wouter';
import { MapPin, Phone, Mail, Globe, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const destinations = [
    { name: 'Maasai Mara Safari', path: '/destinations/maasai-mara' },
    { name: 'Diani Beach', path: '/destinations/diani-beach' },
    { name: 'Amboseli National Park', path: '/destinations/amboseli' },
    { name: 'Bali, Indonesia', path: '/destinations/bali-indonesia' },
    { name: 'Santorini, Greece', path: '/destinations/santorini' },
    { name: 'Zanzibar', path: '/destinations/zanzibar-tanzania' },
  ];

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about' },
    { name: 'Careers', path: '/contact' },
    { name: 'Press', path: '/contact' },
    { name: 'Blog', path: '/contact' },
  ];

  const support = [
    { name: 'Book a Trip', path: '/booking' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/contact' },
    { name: 'Travel Insurance', path: '/contact' },
    { name: 'Cancellation Policy', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>Gigantic Tours</div>
                <div className="text-xs text-amber-400 font-semibold">& Travel</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Africa's premier travel company crafting unforgettable safari and international experiences since 2012. Your dream journey starts here.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Ongata Rongai, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+254742977975" className="text-gray-400 hover:text-white transition-colors">+254 742 977 975</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+254710875330" className="text-gray-400 hover:text-white transition-colors">+254 710 875 330</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:machariaallan881@gmail.com" className="text-gray-400 hover:text-white transition-colors">machariaallan881@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Top Destinations</h4>
            <ul className="space-y-2.5">
              {destinations.map((d) => (
                <li key={d.path}>
                  <Link href={d.path} className="text-gray-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.name}>
                  <Link href={c.path} className="text-gray-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Support</h4>
            <ul className="space-y-2.5 mb-7">
              {support.map((s) => (
                <li key={s.name}>
                  <Link href={s.path} className="text-gray-400 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, url: 'https://facebook.com', color: 'hover:bg-blue-600' },
                { Icon: Instagram, url: 'https://www.instagram.com/p/C-4oDbhNNpk/?igsh=ZDFoeTIyN2YxdGRv', color: 'hover:bg-pink-600' },
                { Icon: Twitter, url: 'https://twitter.com', color: 'hover:bg-sky-500' },
                { Icon: Youtube, url: 'https://youtube.com', color: 'hover:bg-red-600' },
              ].map(({ Icon, url, color }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 bg-gray-800 ${color} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gigantic Tours & Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 bg-gray-800 px-3 py-1 rounded-full">🏆 Award Winning Tour Operator</span>
            <span className="text-xs text-gray-600 bg-gray-800 px-3 py-1 rounded-full">🌿 Eco-Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
