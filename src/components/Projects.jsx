import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "WRAP",
    category: "WEB DESIGN",
    description:
      "Stamp is a clean and elegant Multipurpose Landing Page Template...",
    image: "assets/post1.jpg",
    button: "View Details",
    quote: "Excellent Template - suits my needs perfectly...",
    author: "Shane Kavanagh",
  },
  {
    id: 2,
    title: "DashboardX",
    category: "WEB DEVELOPMENT",
    description: "An advanced analytics dashboard for modern startups...",
    image: "assets/p1.jpg",
    button: "View Details",
    quote: "Great for scaling SaaS projects quickly.",
    author: "Jane Smith",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const current = projects[index];

  const handleNext = () => setIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[url(/assets/Section.png)] bg-cover bg-center text-white px-4 md:px-20 py-24"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Project Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
              src={current.image}
              alt={current.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover aspect-video"
              onError={(e) => {
                if (!e.target.dataset.fallback) {
                  e.target.src = "/images/fallback.jpg";
                  e.target.dataset.fallback = "true";
                }
              }}
            />
          </AnimatePresence>

          {/* Project Content */}
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <p className="text-teal-400 font-semibold">{current.category}</p>
            <h3 className="text-3xl font-bold">{current.title}</h3>
            <p className="text-gray-300 leading-relaxed">
              {current.description}
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-semibold text-black">
              {current.button}
            </button>
            <div className="pt-6 border-t border-gray-600 mt-6">
              <p className="italic text-gray-400">"{current.quote}"</p>
              <p className="font-semibold mt-2">– {current.author}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Nav Arrows */}
      <div className="absolute top-1/2 left-4 md:left-12 transform -translate-y-1/2 z-10">
        <button
          onClick={handlePrev}
          className="text-white text-xl hover:text-teal-400"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 md:right-12 transform -translate-y-1/2 z-10">
        <button
          onClick={handleNext}
          className="text-white text-xl hover:text-teal-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
