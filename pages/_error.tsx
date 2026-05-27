import type { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import Head from 'next/head';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>{statusCode ? `${statusCode} Error` : 'Error'} | Gigantic Tours & Travel</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            {statusCode || 'Error'}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {statusCode
              ? `An error ${statusCode} occurred on the server.`
              : 'An unexpected error occurred.'}
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
