import { useEffect } from 'react';
import { Link, useSearch } from 'wouter';
import BookingForm from '../components/BookingForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { Destination } from '../types/destination';

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
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold mb-4">Booking Information Missing</h1>
            <p className="text-gray-600 mb-6">
              Please select a destination from our listings to begin your booking.
            </p>
            <Link
              href="/destinations"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Browse Destinations
            </Link>
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
