
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-yellow-500/80 mb-4">Oops! Page not found</p>
        <a href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
