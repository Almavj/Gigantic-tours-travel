import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Check, Instagram, Facebook } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contactMethods = [
  {
    Icon: Phone,
    title: 'Call Us',
    details: ['+254 742 977 975', '+254 710 875 330'],
    action: 'tel:+254742977975',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    Icon: Mail,
    title: 'Email Us',
    details: ['machariaallan881@gmail.com', 'gigantictourstravels@gmail.com'],
    action: 'mailto:machariaallan881@gmail.com',
    color: 'from-amber-500 to-orange-500',
  },
  {
    Icon: MapPin,
    title: 'Visit Us',
    details: ['Ongata Rongai', 'Nairobi, Kenya'],
    action: 'https://maps.google.com/?q=Ongata+Rongai+Nairobi',
    color: 'from-green-500 to-emerald-600',
  },
  {
    Icon: Clock,
    title: 'Working Hours',
    details: ['Mon–Fri: 8am – 7pm', 'Sat–Sun: 9am – 5pm'],
    action: null,
    color: 'from-purple-500 to-violet-600',
  },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = 'Contact Us — Gigantic Tours & Travel';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try emailing us directly at machariaallan881@gmail.com');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="relative h-52 md:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Let's Talk
          </h1>
          <p className="text-white/70 text-lg">We'd love to help plan your next adventure</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactMethods.map(({ Icon, title, details, action, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} mb-4 shadow-lg`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              {details.map((d, di) => (
                action && di === 0 ? (
                  <a key={di} href={action} className="block text-sm text-blue-600 hover:text-blue-700 font-medium">{d}</a>
                ) : (
                  <p key={di} className="text-sm text-gray-500">{d}</p>
                )
              ))}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Send Us a Message
            </h2>
            <p className="text-gray-500 mb-8">Our team typically responds within 2–4 business hours.</p>

            {status === 'success' ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. We'll get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-5 text-blue-600 font-semibold text-sm hover:underline">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+254 700 000 000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white transition-all"
                    >
                      <option>General Inquiry</option>
                      <option>Booking Question</option>
                      <option>Custom Tour Request</option>
                      <option>Group Travel</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell us about your dream trip, questions, or how we can help..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-all"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3 border border-red-100">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 text-base"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Find Our Office
            </h2>
            <p className="text-gray-500 mb-6">Come visit us in Ongata Rongai, Nairobi. We'd love to meet you in person!</p>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.654!2d36.7403!3d-1.3948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f05d3e5e8b8b7%3A0x8e8e8e8e8e8e8e8e!2sOngata%20Rongai!5e0!3m2!1sen!2ske!4v1"
                width="100%"
                height={300}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Follow Our Adventures</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/p/C-4oDbhNNpk/?igsh=ZDFoeTIyN2YxdGRv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white font-semibold text-sm rounded-xl transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
