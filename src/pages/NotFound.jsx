import { Link } from 'wouter';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white font-semibold px-6 py-3 hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound
