import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-navBgC w-screen z-50 backdrop-blur-sm fixed shadow-sm border-b-[1px]">
      <div className="w-full lg:w-4/5 container px-6 py-2 md:py-4 mx-auto">
        <div className="flex flex-row justify-between items-center">
          {/* Logo and Name - always visible */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/Saarthi-logo-transparent.png"
                alt="Saarthi Logo"
                className="h-12"
              />
            </Link>
            <Link to="/">
              <p
                className="ml-6 font-bold text-2xl text-center text-white"
                id="Name"
              >
                Saarthi
              </p>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex font-bold gap-2 px-4 space-x-10 text-teal-50">
            <Link to="/dashboard" className="text-lg">
              Sponsors
            </Link>
            <Link to="/about" className="text-lg">
              About
            </Link>
            <Link to="/loginpage" className="text-lg">
              Login / SignUp
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {!menuOpen ? <FaTimes /> : <CiMenuFries />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-navBgC shadow-lg py-4 flex flex-col items-center z-50">
            <Link
              to="/dashboard"
              className="text-lg text-teal-50 py-2"
              onClick={() => setMenuOpen(true)}
            >
              Sponsors
            </Link>
            <Link
              to="/about"
              className="text-lg text-teal-50 py-2"
              onClick={() => setMenuOpen(true)}
            >
              About
            </Link>
            <Link
              to="/loginpage"
              className="text-lg text-teal-50 py-2"
              onClick={() => setMenuOpen(true)}
            >
              Login / SignUp
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
