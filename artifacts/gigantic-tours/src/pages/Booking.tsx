import { useEffect } from 'react';
import { Link, useSearch } from 'wouter';
import BookingForm from '../components/BookingForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { Destination } from '../types/destination';
import { homeDestinations } from '../data/destinations';

const BookingPage = () => {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const slug = params.get('slug');
  const name = params.get('name');
  const price = params.get('price');
  const image = params.get('image');
  const city = params.get('city');
  const country = params.get('country');

  useEffect(() => {
    if (name) document.title = `Book ${name} | Gigantic Tours & Travel`;
    else document.title = 'Booking | Gigantic Tours & Travel';
  }, [name]);

  if (!slug || !name || !price) {
    // Show a booking landing so users who click "Book" reach a useful page
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-50 py-12 pt-28">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Start Your Booking</h1>
              <p className="text-gray-600 mt-2">Choose a destination below to begin your booking.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {homeDestinations.map((dest) => (
                <div key={dest.slug} className="bg-white rounded-lg shadow p-4 flex flex-col">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{dest.name}</h3>
                    <p className="text-sm text-gray-500">{dest.location.city}, {dest.location.country}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-blue-600 font-bold">${dest.price.toLocaleString()}</span>
                    <Link
                      href={`/booking?slug=${encodeURIComponent(dest.slug)}&name=${encodeURIComponent(dest.name)}&price=${encodeURIComponent(String(dest.price))}&image=${encodeURIComponent(dest.images?.[0]||'')}&city=${encodeURIComponent(dest.location.city||'')}&country=${encodeURIComponent(dest.location.country||'')}`}
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const destination = {
    slug,
    name,
    price: Number(price),
    images: [image || ''],
    location: { city: city || 'Unknown City', country: country || 'Unknown Country' }
  } as unknown as Destination;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12 pt-28">
        <div className="max-w-4xl mx-auto px-4">
          <BookingForm
            destination={destination}
            onClose={() => { window.location.href = '/destinations'; }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
