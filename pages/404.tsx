import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Gigantic Tours & Travel</title>
      </Head>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Custom404;
