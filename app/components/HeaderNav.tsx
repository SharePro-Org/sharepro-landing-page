import React from 'react';
import { Link } from 'react-router';

const HeaderNav = () => {
    return (
        <header className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/assets/logo-white.svg" className="w-32" alt="Logo" />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            to="/tutorials"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            How It Works
                        </Link>
                        <a
                            href="#features"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Features
                        </a>
                        <a
                            href="#pricing"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Pricing
                        </a>
                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            About
                        </Link>
                        <Link
                            to="/help-support"
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Help & Support
                        </Link>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link to="/user/auth/login">
                            <button className="text-gray-700 hover:text-gray-900 font-medium">
                                Login
                            </button>
                        </Link>
                        <Link to={""}>
                            <button className="bg-primary text-white px-4 py-2 rounded-sm font-medium">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderNav;