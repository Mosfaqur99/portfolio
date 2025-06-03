import React, { useState } from "react";
import clsx from "clsx";

const categories = [
  "All Categories",
  "Web Design",
  "Branding",
  "Mockups",
  "Photography",
];

const images = [
  { id: 1, src: "assets/p1.jpg", category: "Branding" },
  { id: 2, src: "assets/p2.jpg", category: "Mockups" },
  { id: 3, src: "assets/p3.jpg", category: "Photography" },
  { id: 4, src: "assets/p4.jpg", category: "Web Design" },
  { id: 5, src: "assets/p5.jpg", category: "Web Design" },
  { id: 6, src: "assets/p6.jpg", category: "Branding" },
  { id: 7, src: "assets/p7.jpg", category: "Mockups" },
  { id: 8, src: "assets/p8.jpg", category: "Photography" },
  { id: 9, src: "assets/p9.jpg", category: "Branding" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Categories");

  const filteredImages =
    activeCategory === "All Categories"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-20" id="portfolio">
      <h2 className="text-4xl font-bold text-center mb-12">Recent Portfolio</h2>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={clsx(
              "text-sm font-medium px-3 py-1 border-b-2 transition-all duration-200",
              activeCategory === cat
                ? "text-teal-400 border-teal-400"
                : "text-gray-400 border-transparent hover:text-white"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="bg-[#1c1c1c] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
