import React from "react";

function About() {
  return (
    <section id="about" className="bg-[#000] text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Illustration Left */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/assets/ab.png" // replace with your vector
            alt="About illustration"
            className="h-auto"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-400 text-base leading-relaxed">
            👋 Hi, I’m Mosfaqur Rahman, a front-end developer who turns designs
            into functional, high-performing React applications. With experience
            in responsive UI, modern JavaScript, and CSS frameworks like
            Tailwind, I build interfaces that don’t just look good—but also feel
            great to use.
          </p>

          {/* Roles */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-4 py-1 bg-[#191926] text-sm rounded-full border border-teal-500">
              HTML 5
            </span>
            <span className="px-4 py-1 bg-[#191926] text-sm rounded-full border border-teal-500">
              CSS
            </span>
            <span className="px-4 py-1 bg-[#191926] text-sm rounded-full border border-teal-500">
              JAVA Script
            </span>
            <span className="px-4 py-1 bg-[#191926] text-sm rounded-full border border-teal-500">
              React
            </span>
            <span className="px-4 py-1 bg-[#191926] text-sm rounded-full border border-teal-500">
              Mongo DB
            </span>
            <span className="px-4 py-1 bg-[#191926] text-sm rounded-full border border-teal-500">
              Firebase
            </span>
            <span className="px-4 py-1 bg-[#191926] text-sm rounded-full border border-teal-500">
              Tailwind
            </span>
            <span className="px-4 py-1 bg-[#191926] text-sm rounded-full border border-teal-500">
              Node JS
            </span>
          </div>

          {/* Button */}
          <button className="mt-4 bg-teal-500 text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-teal-400 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
