import React from "react";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <h1 className="text-5xl font-bold mb-4 text-blue-600">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p className="mb-6 text-gray-600">
      Sorry, the page you are looking for does not exist.
    </p>
    <a
      href="/"
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Go Home
    </a>
  </div>
);

export default NotFound;
