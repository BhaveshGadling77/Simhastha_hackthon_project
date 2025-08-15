import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
// import { CiMenuFries } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <> <nav className="bg-navBgC w-screen z-50 backdrop-blur-sm fixed shadow-sm border-b-[1px] opacity-80">
      <div className="w-full lg:w-4/5 container px-6 py-2 md:py-4 mx-auto">
        <div className="flex flex-row justify-between items-center">
          {/* Logo and Name - always visible */}
          <div className="flex items-center">
            <Link to="/" className="px-0 mr-4 inline-block">
              <img
                src="/images/Saarthi-logo-transparent.png"
                alt="Saarthi Logo"
                className="h-12"
              />
            </Link>
            <Link to="/" className="inline-block p-0">
              <p
                className="font-bold text-2xl text-center text-white p-0"
                id="Name"

              >
                Saarthi
              </p>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex font-bold gap-2 px-4 space-x-10 text-teal-50">
            <Link to="/dashboard" className="text-lg p-0">
              Sponsors
            </Link>
            <Link to="/about" className="text-lg p-0">
              About
            </Link>
            <Link to="/loginpage" className="text-lg p-0">
              Login / SignUp
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl focus:outline-none"
            >
              {!menuOpen ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        
      </div>
              
    </nav>
    {!menuOpen && (
          <div className="md:hidden absolute top-6 w-full mt-60 left-0 align-middle text-center bg-navBgC shadow-lg flex-col items-center z-50 ">
          <div className="rounded-md bg-slate-900 mt-2 ">
                <Link to="/about" className="text-white block ">About</Link>
            </div>
            <div className="rounded-md bg-slate-900 mt-2 ">
                <Link to="/dashboard" className="text-white  block">DashBoard</Link>
            </div>
            <div className="rounded-md bg-slate-900 mt-2 ">
                <Link to="/loginpage" className="text-white  block">Login / SignUp</Link>
            </div>
          
          </div>
        )}
    </>
   
  );
}

export default Navbar;
