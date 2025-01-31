"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div
      className={`absolute top-0 p-2 w-full z-10 mt-2 transition-all duration-300 ${
        pathname === "/" ? "bg-transparent" : "bg-white mt-0 relative pt-0"
      }`}
    >
      <div className="max-w-screen-xl container py-2 mx-auto px-4 md:py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a href={`/`}>
          <Image
            alt="logo"
            src={
              pathname === "/"
                ? "/Green and Blue Minimalist Pharmacy Logo (3).svg"
                : "/Green and Blue Minimalist Pharmacy Logo (4).svg"
            }
            width={180}
            height={60}
            className="w-[130px] h-[60px] sm:w-[100px] sm:h-[60px] md:w-[180px] md:h-[60px]"
          />
        </a>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex lg:space-x-8 space-x-6 text-xs ${
            pathname === "/" ? "text-white" : "text-slate-800"
          }`}
        >
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT US", path: "/about" },
            { name: "HEALTHCARE SOLUTIONS", path: "/healthcare-solutions" },
            { name: "PHARMACY SOLUTIONS", path: "/pharmacy-solutions" },
            { name: "CONTACT US", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative transition-all duration-300 ${
                pathname === link.path ? "text-teal-500" : "hover:text-teal-500"
              }`}
            >
              {link.name}
              {/* Hover underline */}
              <span
                className={`absolute left-0 bottom-[-3px] h-[2px] w-full transition-all duration-300 ${
                  pathname === link.path
                    ? "bg-teal-500"
                    : "bg-transparent hover:bg-teal-500"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${
              pathname === "/" ? "text-white" : "text-teal-600"
            }`}
          >
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
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg transition-opacity duration-300 ease-in-out">
          <div
            className={`fixed top-0 right-0 w-4/5 sm:w-2/5 h-full bg-teal-600 shadow-lg transition-transform duration-300 ease-in-out transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-5 p-2 text-white hover:text-black transition-colors"
              onClick={closeMenu}
            >
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-8 mt-36 pl-8 text-lg font-light">
              {[
                { name: "HOME", path: "/" },
                { name: "ABOUT", path: "/about" },
                { name: "HEALTHCARE SOLUTION", path: "/healthcare-solutions" },
                { name: "PHARMACY SOLUTION", path: "/pharmacy-solutions" },
                { name: "CONTACT US", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-white transition-all duration-300 ${
                    pathname === link.path
                      ? "text-gray-300"
                      : "hover:text-gray-300"
                  }`}
                  onClick={closeMenu} // Close menu when a link is clicked
                >
                  {link.name}
                  {/* Hover underline */}
                  <span
                    className={`absolute left-0 bottom-[-3px] h-[2px] w-full transition-all duration-300 ${
                      pathname === link.path
                        ? "bg-gray-300"
                        : "bg-transparent hover:bg-gray-300"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
