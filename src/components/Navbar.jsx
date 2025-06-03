import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Make sure lucide-react is installed

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Portfolio",
    "Pricing",
    "Blog",
    "Contact",
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f0f1c] text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold">Mosfaqur Rahman</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-teal-400 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Download Button (Desktop) */}
        <a
          href="#"
          className="hidden md:inline-block bg-teal-500 text-black font-medium px-5 py-2 rounded-full hover:bg-teal-400 transition"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f1c] px-6 py-4 space-y-4 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="block text-sm cursor-pointer hover:text-teal-400 transition"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          <a
            href="#"
            className="block w-full bg-teal-500 text-black text-center font-medium px-4 py-2 rounded-full hover:bg-teal-400 transition"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
