import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { 
  getDestinationBySlug, 
  getAllDestinationSlugs, 
  getRelatedDestinations 
} from '../../data/destinations';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DestinationCard from '../../components/DestinationCard';
import { useRouter } from 'next/router';

function DestinationDetails({ destination }) {
  const router = useRouter();

  const handleBookNow = () => {
    router.push({
      pathname: '/booking',
      query: { 
        slug: destination.slug,
        name: destination.name,
        price: destination.price,
        image: destination.images[0],
        location: `${destination.location.city}, ${destination.location.country}`
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-12">
        <div className="relative h-96">
          <Image
            src={destination.images[0]}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {destination.name}
            </h1>
            <div className="flex items-center mt-4 text-white">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{destination.location.address || `${destination.location.city}, ${destination.location.country}`}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-gray-600 mb-8">{destination.detailedDescription}</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Attractions</h2>
            <div className="space-y-8">
              {destination.attractions.map((attraction) => (
                <div key={attraction.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                    <p className="text-gray-600 mb-4">{attraction.description}</p>
                    <div className="space-y-4">
                      {attraction.tours.map((tour) => (
                        <div key={tour.id} className="border-t border-gray-200 pt-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">{tour.name}</h4>
                              <p className="text-sm text-gray-500">{tour.duration}</p>
                            </div>
                            <span className="text-lg font-bold text-blue-600">${tour.price}</span>
                          </div>
                          <ul className="mt-2 space-y-1">
                            {tour.highlights.map((item, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-600">
                                <svg
                                  className="h-4 w-4 text-blue-500 mr-1.5 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                                  />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Booking Card */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                  <p className="text-gray-900">{destination.duration}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Best Time to Visit</h4>
                  <p className="text-gray-900">
                    {destination.climate.bestTimeToVisit.join(', ')}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Price</h4>
                  <p className="text-3xl font-bold text-blue-600">
                    ${destination.price.toLocaleString()}
                    <span className="text-sm font-normal text-gray-500"> / person</span>
                  </p>
                </div>
              </div>

              <button 
                onClick={handleBookNow}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-150"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Included/Not Included */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-2">
                {destination.included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Not Included</h3>
              <ul className="space-y-2">
                {destination.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-red-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {destination.reviews && destination.reviews.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Guest Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destination.reviews.map((review) => (
              <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.avatar}
                      alt={review.user}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{review.user}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                    </div>
                  </div>
                </div>
                <h5 className="font-medium text-gray-900 mb-2">{review.title}</h5>
                <p className="text-gray-600">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {destination.faqs && destination.faqs.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {destination.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  try {
    const paths = getAllDestinationSlugs();
    return { 
      paths, 
      fallback: 'blocking' 
    };
  } catch (error) {
    console.error('Error generating paths:', error);
    return { 
      paths: [], 
      fallback: 'blocking' 
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const destination = getDestinationBySlug(params.slug);
    
    if (!destination) {
      return { notFound: true };
    }

    const relatedDestinations = getRelatedDestinations(destination) || [];
    
    return { 
      props: { 
        destination,
        relatedDestinations 
      },
      revalidate: 86400 // ISR: Revalidate once per day
    };
  } catch (error) {
    console.error(`Error fetching destination ${params.slug}:`, error);
    return { notFound: true };
  }
}

export default function DestinationPage({ destination, relatedDestinations = [] }) {
  if (!destination) {
    return (
      <>
        <Head>
          <title>Destination Not Found | Travel Explorer</title>
        </Head>
        <Navbar />
        <main className="bg-white pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Destination Not Found
            </h1>
            <Link href="/destinations" className="text-blue-600 hover:underline">
              Browse all destinations
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const firstCategory = destination.category?.[0]?.toLowerCase() || 'safari';
  const primaryImage = destination.images?.[0] || '/images/default-destination.jpg';

  return (
    <>
      <Head>
        <title>{`${destination.name} | Travel Explorer`}</title>
        <meta name="description" content={destination.description} />
        <meta property="og:title" content={`${destination.name} | Travel Explorer`} />
        <meta property="og:description" content={destination.description} />
        <meta property="og:image" content={primaryImage} />
      </Head>
      
      <Navbar />
      
      <main className="bg-white pt-20">
        <DestinationDetails destination={destination} />
        
        {/* Related Destinations */}
        {relatedDestinations.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">You Might Also Like</h2>
              <Link 
                href={`/destinations/${firstCategory}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View All {destination.category?.[0] || 'Related'} Destinations →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedDestinations.slice(0, 3).map(dest => (
                <DestinationCard 
                  key={dest.slug} 
                  destination={dest} 
                />
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </>
  );
}