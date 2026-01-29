import React, { useState } from "react";
import { Link } from "react-router";

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-[#0D0B12] shadow-sm w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/">
                            <img src="/assets/logo-new.png" className="w-32" alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="text-[#B7B4C7] font-medium">
                            Home
                        </Link>
                        {/* <Link to="/tutorials" className="text-[#B7B4C7] font-medium">
                            How It Works
                        </Link> */}
                        <a href="#features" className="text-[#B7B4C7] font-medium">
                            Features
                        </a>
                        <a href="#pricing" className="text-[#B7B4C7] font-medium">
                            Pricing
                        </a>
                        <Link to="/about" className="text-[#B7B4C7] font-medium">
                            About
                        </Link>
                        <Link to="/help-support" className="text-[#B7B4C7] font-medium">
                            Help & Support
                        </Link>
                    </nav>

                    {/* Auth Buttons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="https://sharepro-web.netlify.app/auth/sign-in">
                            <button className="text-[#B7B4C7] font-medium">
                                Login
                            </button>
                        </Link>
                        <Link to="https://sharepro-web.netlify.app/auth/sign-up">
                            <button className="bg-primary text-white px-4 py-2 rounded-sm font-medium">
                                Get Started
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-700 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md border-t border-gray-100">
                    <nav className="flex flex-col space-y-4 px-6 py-4">
                        <Link
                            to="/tutorials"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            How It Works
                        </Link>
                        <a
                            href="/#features"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="/#pricing"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Pricing
                        </a>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            to="/help-support"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                            onClick={() => setMenuOpen(false)}
                        >
                            Help & Support
                        </Link>

                        <hr className="border-gray-200" />

                        <Link to="https://sharepro-web.netlify.app/auth/sign-in" onClick={() => setMenuOpen(false)}>
                            <button className="w-full text-left text-gray-700 hover:text-gray-900 font-medium">
                                Login
                            </button>
                        </Link>
                        <Link to="https://sharepro-web.netlify.app/auth/sign-up" onClick={() => setMenuOpen(false)}>
                            <button className="w-full bg-primary text-white px-4 py-2 rounded-sm font-medium">
                                Get Started
                            </button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default HeaderNav;
