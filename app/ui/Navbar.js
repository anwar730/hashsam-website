"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu(); // Close the menu after navigation
    }
  };

  return (
    <div
      className={`absolute top-0 p-2 w-full z-10 mt-2 transition-all duration-300 ${
        pathname === "/" ? "bg-transparent" : "bg-white mt-0 relative"
      }`}
    >
      <div className="max-w-screen-xl container py-2 mx-auto px-4 md:py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleScroll(e, "home")}>
          <Image
            alt="logo"
            src={pathname === "/" ? "/Green and Blue Minimalist Pharmacy Logo (3).svg" : "/Green and Blue Minimalist Pharmacy Logo (4).svg"}
            width={180}
            height={60}
          />
        </a>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex lg:space-x-8 space-x-6 text-xs ${
  pathname === "/" ? "text-white" : "text-slate-800"
}`}>

          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            HOME
          </a>
          <a href="/about">ABOUT US</a>
          <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
            HEALTHCARE SOLUTIONS
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            PHARMACY SOLUTIONS
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
            CONTACT US
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-full bg-white z-50 transition-transform duration-300 ease-in-out">
          <div className="flex flex-col p-6">
            <button className="self-end mb-4 text-black focus:outline-none" onClick={closeMenu}>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="flex flex-col gap-6 mt-24 items-center">
              <a className="text-black" href="#home" onClick={(e) => handleScroll(e, "home")}>
                Home
              </a>
              <a className="text-black" href="#about">
                About
              </a>
              <a className="text-black" href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                Projects
              </a>
              <a className="text-black" href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
