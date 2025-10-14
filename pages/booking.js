import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link'; // Added this import
import BookingForm from '../components/BookingForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BookingPage() {
  const router = useRouter();
  const { slug, name, price, image, city, country } = router.query;

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
    images: [image],
    location: {
      city: city || 'Unknown City',
      country: country || 'Unknown Country'
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{`Book ${name} | Travel Explorer`}</title>
      </Head>
      <Navbar />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <BookingForm 
            destination={destination} 
            onClose={() => router.push('/destinations')}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}