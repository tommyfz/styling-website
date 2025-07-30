// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Mobile: Top section with hamburger + logo */}
        <div className="flex justify-between md:hidden items-center w-full mb-2">
          <Link href="/">
            {/* <Image src="/logo.png" alt="Logo" width={120} height={40} /> */}
          </Link>
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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

        {/* Desktop nav layout */}
        <div className="hidden md:flex flex-1 justify-between items-center">
          {/* Left nav links */}
          <div className="flex gap-6">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-black ${
                  pathname === link.href ? "text-black" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo in center */}
          <div>
            <Link href="/">
              {/* <Image src="/logo.png" alt="Logo" width={120} height={40} /> */}
            </Link>
          </div>

          {/* Right nav links */}
          <div className="flex gap-6">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-black ${
                  pathname === link.href ? "text-black" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col gap-2 items-center bg-gray-50 rounded p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium hover:text-black ${
                  pathname === link.href ? "text-black" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
