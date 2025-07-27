"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href={"/about"} className="text-gray-700 hover:text-gray-900">
            About
          </Link>
        </div>

        {/* Logo in the center */}
        <div className="flex-shrink-0">
          {/* <img src="/path/to/your/logo.png" alt="Styling Site Logo" className="h-8 w-auto" /> */}
        </div>

        {/* Right Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/portfolio" className="text-gray-700 hover:text-gray-900">
            Portfolio
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-100 p-4`}
      >
        {/* Logo for Mobile */}
        <div className="text-xl font-semibold text-gray-800 text-center mb-4">
          {/* <img src="/path/to/your/logo.png" alt="Styling Site Logo" className="h-8 w-auto" /> */}
        </div>

        <Link href="/" className="block text-gray-700 py-2">
          Home
        </Link>
        <Link href="/about" className="block text-gray-700 py-2">
          About
        </Link>
        <Link href="/portfolio" className="block text-gray-700 py-2">
          Portfolio
        </Link>
        <Link href="/contact" className="block text-gray-700 py-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
