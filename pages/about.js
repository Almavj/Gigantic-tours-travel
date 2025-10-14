import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Victory Wanjiku',
      role: 'Founder & CEO',
      bio: 'With over 15 years in the travel industry, Alex founded Giganti TOurs & Travels to share his passion for authentic travel experiences.',
      image: '/images/image1.jpeg'
    },
    {
      id: 2,
      name: 'Allan Macharia',
      role: 'Head of Operations',
      bio: 'Maria ensures every trip runs smoothly with her exceptional organizational skills and attention to detail.',
      image: '/images/team2.jpeg'
    },
    {
      id: 3,
      name: 'Steve White',
      role: 'Travel Expert',
      bio: 'James has visited over 60 countries and brings unparalleled destination knowledge to our team.',
      image: '/images/team3.jpeg'
    },
    {
      id: 4,
      name: 'Careb Kimani',
      role: 'Customer Experience',
      bio: 'Sarah makes sure every traveler feels valued and supported throughout their journey.',
      image: '/images/team4.jpeg'
    }
  ];

  const stats = [
    { id: 1, name: 'Destinations', value: '50+' },
    { id: 2, name: 'Happy Travelers', value: '10,000+' },
    { id: 3, name: 'Years Experience', value: '12' },
    { id: 4, name: 'Countries', value: '35' }
  ];

  const values = [
    {
      id: 1,
      name: 'Authenticity',
      description: 'We create genuine experiences that connect you with local cultures.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 2,
      name: 'Sustainability',
      description: "We're committed to responsible travel that benefits local communities.",
            icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      name: 'Excellence',
      description: 'We deliver exceptional service at every step of your journey.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>About Us - gigantictourstravels</title>
        <meta name="description" content="Learn about Gigantic Tours & Travels and our mission" />
      </Head>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            About us
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-500 mx-auto">
            Our story, mission, and the team behind your perfect journeys.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020,  began as a small team of travel enthusiasts with a big dream: to make world-class travel experiences accessible to everyone.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a local tour operator has grown into an internationally recognized travel company, serving thousands of happy customers across six continents.
            </p>
            <p className="text-gray-600">
              Our journey has been filled with incredible experiences, and we're committed to sharing that passion with our travelers.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/images/team.jpeg" 
              alt="Our team" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-last md:order-first">
            <img 
              src="/images/mission.jpeg" 
              alt="Our mission" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Gigantic Tours & Travel, we believe that travel has the power to transform lives, broaden perspectives, and create lasting memories.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to craft exceptional travel experiences that go beyond the ordinary, connecting people with the world's most incredible destinations in meaningful ways.
            </p>
            <p className="text-gray-600">
              We're dedicated to responsible tourism that benefits both travelers and local communities alike.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-xl py-12 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">By The Numbers</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <p className="text-4xl font-extrabold text-blue-600">{stat.value}</p>
                  <p className="mt-2 text-lg font-medium text-gray-500">{stat.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full object-cover mb-4"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-blue-700 rounded-xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Gigantic Travels?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert-curated itineraries designed by travel specialists</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 customer support during your travels</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Local guides who provide authentic experiences</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible booking options and payment plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sustainable travel practices that support communities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Best price guarantee for all our packages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Let us help you plan the perfect trip.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium">
            Contact Our Travel Experts
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}