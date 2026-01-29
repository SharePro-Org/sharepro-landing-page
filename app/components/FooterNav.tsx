import React from 'react';
import { Link } from 'react-router';
import { Facebook, Twitter, Instagram } from "lucide-react";

const FooterNav = () => {
    return (
        <footer className="bg-[#0D0B12] py-12 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    {/* Logo and Tagline */}
                    <div className="mb-6 md:mb-0">
                        <img src="/assets/logo-new.png" alt="Logo" className="w-32 mb-2" />
                        <p className=" max-w-xs">
                            Built to help businesses grow through smart loyalty and
                            referrals.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap gap-6 md:gap-8">
                        <Link to="/tutorials" className="">
                            How It Works
                        </Link>
                        <Link to="/terms-of-use" className="">
                            Terms of Use
                        </Link>
                        <Link to="/privacy-policy" className="">
                            Privacy Policy
                        </Link>
                        <Link to="/about" className="">
                            About
                        </Link>
                        <Link to="/help-support" className="">
                            Help & Support
                        </Link>
                    </nav>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">
                        © 2025 SharePro. All rights reserved.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="">
                            <Instagram size={20} />
                        </a>
                        {/* </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <LinkedIn size={20} />
              </a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterNav;