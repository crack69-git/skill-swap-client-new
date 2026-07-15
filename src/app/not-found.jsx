import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4 py-10">
      <div className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 text-center">
        <div className="text-7xl mb-4">🚫</div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          404
        </h1>

        <h2 className="text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-200">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          ← Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default notFound;
