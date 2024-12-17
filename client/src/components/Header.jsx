import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showAuth, setShowAuth] = useState(false);

  const toggleAuth = () => {
    setShowAuth((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Navigation Bar with Glassmorphism (Dark Blue & Blurry Effect) */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-lg bg-black/50 backdrop-blur-lg rounded-b-2xl md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-blue-600 rounded-full shadow-md backdrop-blur-lg hover:scale-110">
            <span className="text-xl font-extrabold text-white drop-shadow-lg">
              LS
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-wider text-white drop-shadow-md">
            LearnSphere
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="items-center hidden space-x-8 font-semibold text-white md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative text-white transition-all duration-300 transform group ${
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }`
              }
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 group-hover:w-full group-hover:scale-x-100"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative text-white transition-all duration-300 transform group ${
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }`
              }
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 group-hover:w-full group-hover:scale-x-100"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/course"
              className={({ isActive }) =>
                `relative text-white transition-all duration-300 transform group ${
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }`
              }
            >
              Courses
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 group-hover:w-full group-hover:scale-x-100"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative text-white transition-all duration-300 transform group ${
                  isActive ? "text-yellow-400" : "hover:text-yellow-400"
                }`
              }
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 group-hover:w-full group-hover:scale-x-100"></span>
            </NavLink>
          </li>
        </ul>

        {/* Call to Action Button */}
        <button
          onClick={toggleAuth}
          className="hidden px-6 py-2 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full shadow-md md:inline-block hover:bg-blue-500 hover:shadow-lg"
        >
          Join Now ✨
        </button>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button className="text-white focus:outline-none hover:text-yellow-400">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Login/Signup Modal */}
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="p-8 rounded-lg shadow-lg bg-white/10 w-96 backdrop-blur-md">
            <h2 className="mb-4 text-2xl font-bold text-center text-white">
              Welcome to LearnSphere
            </h2>
            <div className="flex justify-center mb-6">
              <NavLink
                to="/login"
                className="w-1/2 py-2 font-semibold text-center text-white transition-all duration-300 bg-blue-600 rounded-l-lg hover:bg-blue-500 focus:outline-none"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="w-1/2 py-2 font-semibold text-center text-white transition-all duration-300 bg-gray-700 rounded-r-lg hover:bg-gray-600 focus:outline-none"
              >
                Signup
              </NavLink>
            </div>
            <p className="text-center text-gray-300">
              Enter your details to access courses and resources.
            </p>
            <button
              onClick={toggleAuth}
              className="w-full py-2 mt-4 font-semibold text-gray-200 transition-all duration-300 bg-gray-600 rounded-lg hover:bg-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
