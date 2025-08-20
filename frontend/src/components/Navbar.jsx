import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
// import { CiMenuBurger } from "react-icons/ci";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    let location = useLocation();
    const [onDashBoard, setOnDashBoard] = useState(false);
    useEffect(() => {
        if (location.pathname.includes('/dashboard')) {
            setOnDashBoard(true);
        } else{
            setOnDashBoard(false)
        }
    }, [location]);
    const style = { color: "#f3e3b2" };
    return (
        <>
            {" "}
            <nav className="bg-navBgC w-screen z-50 backdrop-blur-sm fixed shadow-sm border-b-[1px] opacity-80 border-none">
                <div className="w-full lg:w-4/5 container px-6 py-2 md:py-4 mx-auto">
                    <div className="flex flex-row justify-between items-center">
                        {/* Logo and Name - always visible */}
                        <div className="flex items-center">
                            <Link
                                to="/"
                                className="px-0 mr-4 inline-block active:text-red-700"
                            >
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
                        { onDashBoard ? (
                            <div className="hidden md:flex font-bold gap-2 px-4 space-x-10 text-teal-50">
                                <Link
                                    to="/"
                                    className={`text-lg p-0 ${
                                        location.pathname == "/"
                                            ? "text-[#ffd045]"
                                            : ""
                                    }`}
                                >
                                    Home
                                </Link>
                                                                <Link
                                    to="/dashboard"
                                    className={`text-lg p-0 ${
                                        location.pathname == "/dashboard"
                                            ? "text-[#ffd045]"
                                            : ""
                                    }`}
                                >
                                    DashBoard
                                </Link>
                                <Link
                                    to="/dashboard/signout"
                                    className={`text-lg p-0 ${
                                        location.pathname == "/dashboard/signout"
                                            ? "text-[#ffd045]"
                                            : ""
                                    }`}
                                >
                                    SignOut
                                </Link>
                                <Link
                                    to="/about"
                                    className={`text-lg p-0 ${
                                        location.pathname == "/about"
                                            ? "text-[#ffd045]"
                                            : ""
                                    }`}
                                >
                                    About
                                </Link>
                                <Link
                                    to="dashboard/settings"
                                    className={`text-lg p-0 ${
                                        location.pathname == "/dashboard/settings"
                                            ? "text-[#ffd045]"
                                            : ""
                                    }`}
                                >
                                    Settings
                                </Link>
                                                                
                                </div>
                        ):(<div className="hidden md:flex font-bold gap-2 px-4 space-x-10 text-teal-50">
                                <Link
                                    to="/"
                                    className={`text-lg p-0 ${
                                        location.pathname == "/"
                                            ? "text-[#ffd045]"
                                            : ""
                                    }`}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/dashboard"
                                    className={`text-lg p-0 ${
                                        location.pathname == "/dashboard"
                                            ? "text-[#ffd045]"
                                            : ""
                                    }`}
                                >
                                    DashBoard
                                </Link>
                                <Link
                                    to="/about"
                                    className={`text-lg p-0 ${
                                        location.pathname == "/about"
                                            ? "text-[#ffd045]"
                                            : ""
                                    }`}
                                >
                                    About
                                </Link>
                                <Link
                                    to="/loginpage"
                                    className={`text-lg p-0 ${
                                        location.pathname == "/loginpage"
                                            ? "text-[#ffd045]"
                                            : ""
                                    }`}
                                >
                                    Login / SignUp
                                </Link>
                            </div>) 
                        }
                        {/* Hamburger Icon for Mobile */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-white text-3xl focus:outline-none opacity-100"
                            >
                                {menuOpen ? (
                                    <FaTimes style={style} size={25} />
                                ) : (
                                    <CiMenuFries style={style} size={25} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden-[800px] p-12 opacity-95  top-6 w-full border-none rounded-lg mt-40 left-0 fixed align-middle text-center bg-navBgC shadow-lg block flex-col items-center z-50 ">
                    <div className="rounded-md bg-[#f4e4b3] mt-2">
                        <Link to="/about" className="text-[#284121] block ">
                            About
                        </Link>
                    </div>
                    <div className="rounded-md bg-[#f4e4b3] mt-2 ">
                        <Link to="/dashboard" className="text-[#0e210e]  block">
                            DashBoard
                        </Link>
                    </div>
                    <div className="rounded-md bg-[#f4e4b3] mt-2 ">
                        <Link to="/" className="text-[#0e210e]  block">
                            Home
                        </Link>
                    </div>
                    <div className="rounded-md bg-[#f4e4b3] mt-2 ">
                        <Link to="/loginpage" className="text-[#284121] block">
                            Login / SignUp
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
