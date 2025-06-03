import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f0f1c] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">Mosfaqur Rahman</h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {[
            "Home",
            "About",
            "Skills",
            "Experience",
            "Portfolio",
            "Pricing",
            "Blog",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70} // adjusts for fixed header
              className="cursor-pointer hover:text-teal-400 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden md:inline-block bg-teal-500 text-black font-medium px-5 py-2 rounded-full hover:bg-teal-400 transition"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

export default Navbar;
