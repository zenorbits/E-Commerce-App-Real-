import React from "react";
import { Link } from "react-router-dom";

const JoinTheOrbit = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-16">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-purple-400 mb-6">
        Join the Orbit
      </h1>

      {/* Button */}
      <Link
        to="/register"
        className="bg-purple-600 px-8 py-3 rounded-xl text-lg font-bold cursor-pointer hover:bg-purple-400 hover:text-black transition-colors duration-300"
      >
        Create Account
      </Link>
    </div>
  );
};

export default JoinTheOrbit;