import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white px-6 md:px-16 pt-24 md:pt-32 bg-[url(/assets/Section.png)] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <span className="text-teal-400 font-semibold text-sm">Hello I'm</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Mosfaqur Rahman
          </h1>
          <p className="text-lg text-gray-300">Frontend Developer</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 pt-4">
            <FaFacebookF className="hover:text-teal-400 cursor-pointer" />
            <FaTwitter className="hover:text-teal-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-teal-400 cursor-pointer" />
            <FaDribbble className="hover:text-teal-400 cursor-pointer" />
          </div>

          {/* Buttons */}
          <div className="pt-6 space-x-4">
            <button className="bg-teal-500 text-black px-6 py-3 rounded-full font-medium hover:bg-teal-400">
              Download CV
            </button>
            <a
              href="#about"
              className="text-teal-400 underline hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal-500 shadow-xl">
            <img
              src="/assets/profile.jpg"
              alt="Mosfaqur Rahman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
