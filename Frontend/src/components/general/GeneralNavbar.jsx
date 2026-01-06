import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const GeneralNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-white">
      <div className="main h-20 bg-gradient-to-r from-black via-gray-900 to-black px-6 md:px-12 flex items-center justify-between ">
        
        {/* Brand */}
        <div className="title text-3xl  font-extrabold tracking-wide cursor-pointer text-purple-400 hover:text-purple-300 transition">
          <h1>ShopOrbits</h1>
        </div>

        {/* Search Bar */}
        <div className="search-input flex-1 flex items-center justify-center px-4">
          <input
            type="text"
            className="bg-gray-200 text-black px-4 py-2 w-full max-w-sm rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search items..."
          />
        </div>

        {/* Links (desktop only) */}
        <div className="list hidden lg:flex gap-7 px-8 text-lg font-medium">
          <Link className="hover:text-purple-400 transition">Home</Link>
          <Link className="hover:text-purple-400 transition">Cart</Link>
          <Link className="hover:text-purple-400 transition">Wishlist</Link>
        </div>

        {/* Auth Buttons (desktop only) */}
        <div className="auth-button hidden md:flex gap-4">
          <Link
            to="/login"
            className="bg-purple-600 px-6 py-2 rounded-xl text-lg font-bold cursor-pointer hover:bg-purple-400 hover:text-black transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-purple-600 px-6 py-2 rounded-xl text-lg font-bold cursor-pointer hover:bg-purple-400 hover:text-black transition-colors duration-300"
          >
            Register
          </Link>
        </div>

        {/* Hamburger (mobile/tablet only) */}
        <div className="hamburger flex lg:hidden">
          {isOpen ? (
            <FaTimes
              onClick={toggleHamburger}
              className="text-3xl text-white cursor-pointer hover:text-purple-400 transition-transform duration-300"
            />
          ) : (
            <FaBars
              onClick={toggleHamburger}
              className="text-3xl text-white cursor-pointer hover:text-purple-400 transition-transform duration-300"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-r from-black via-gray-900 to-black w-full text-center px-4 py-6 rounded-b-xl shadow-md animate-slideDown">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <Link className="hover:text-purple-400 transition">Home</Link>
            <Link className="hover:text-purple-400 transition">Cart</Link>
            <Link className="hover:text-purple-400 transition">Wishlist</Link>
            <div className="auth-button flex flex-col gap-3 mt-4">
              <Link
                to="/login"
                className="bg-purple-600 px-6 py-2 rounded-xl font-bold cursor-pointer hover:bg-purple-400 hover:text-black transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-purple-600 px-6 py-2 rounded-xl font-bold cursor-pointer hover:bg-purple-400 hover:text-black transition-colors duration-300"
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeneralNavbar;