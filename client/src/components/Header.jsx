import { NavLink } from "react-router-dom";
import { useTokenContext } from "../context/TokenContext";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const { isLogout, user } = useTokenContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-500 scale-110 transition-transform duration-200"
      : "hover:text-orange-500 hover:scale-105 transition-transform duration-200";

  return (
    <header className="h-[5rem] w-full bg-gradient-to-r from-red-500 to-purple-700 shadow-md text-white border-b-2 border-white">
      <nav className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center h-full">
        <div>
          <h1 className="text-2xl font-bold text-white">EduLearn</h1>
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div className="hidden lg:flex items-center space-x-6">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/course" className={getLinkClass}>
            Courses
          </NavLink>
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
          {user && user.isAdmin && (
            <NavLink to="/admin" className={getLinkClass}>
              Admin
            </NavLink>
          )}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          {isLogout ? (
            <>
              <NavLink to="/login" className={getLinkClass}>
                Login
              </NavLink>
              <NavLink to="/signup" className={getLinkClass}>
                Register
              </NavLink>
            </>
          ) : (
            <NavLink to="/logout" className={getLinkClass}>
              Logout
            </NavLink>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-purple-800 text-white space-y-4 p-4">
          <NavLink
            to="/"
            className={getLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={getLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/course"
            className={getLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink
            to="/contact"
            className={getLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
          {user && user.isAdmin && (
            <NavLink
              to="/admin"
              className={getLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </NavLink>
          )}
          {isLogout ? (
            <>
              <NavLink
                to="/login"
                className={getLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={getLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/logout"
              className={getLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Logout
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
