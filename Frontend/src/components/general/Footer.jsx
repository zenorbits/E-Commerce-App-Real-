import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-8 px-2">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left - Branding */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-extrabold text-purple-400 mb-2">Orbit</h2>
          <p className="text-sm text-gray-400">
            Building immersive digital experiences that feel cinematic.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          <Link to="/register" className="hover:text-purple-400 transition-colors">Join the Orbit</Link>
        </div>

        {/* Right - Socials */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 hover:text-purple-400 text-xl transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 hover:text-purple-400 text-xl transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-purple-400 text-xl transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Orbit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;