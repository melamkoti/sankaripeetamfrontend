import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 main_head ">
      <div className="max-w-md w-full text-center ">
        {/* Animated 404 Text */}
        <div className="mb-4 mt-[150px]">
          <h1 className="text-9xl font-bold text-gray-800 animate-bounce">
            4<span className="text-indigo-600">0</span>4
          </h1>
        </div>

        {/* Message */}
        <div className="mb-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Oops! Page not found
          </h2>
          <p className="text-gray-600 text-lg">
            The page you're looking for seems to have wandered off into the digital wilderness.
          </p>
        </div>

        {/* Illustration/SVG */}
        <div className="mb-4">
          <svg
            className="w-64 h-64 mx-auto text-indigo-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-8">
          <p className="text-gray-500 text-sm">
            Need help?{' '}
            <a
              href="/contact"
              className="text-indigo-600 hover:text-indigo-800 underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;