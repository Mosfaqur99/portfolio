import React from "react";
import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush size={32} />,
    title: "Front-End Design",
    desc: "Clean and modern interface designs for web.",
  },
  {
    icon: <FaCode size={32} />,
    title: "Web Development",
    desc: "Responsive and high-performance websites built with React, Vue, and more.",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "Responsive Design",
    desc: "Cross-platform mobile and web both.",
  },
];

function WhatIDo() {
  return (
    <section
      id="services"
      className="bg-[#0f0f1c] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What I Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#191926] border border-gray-700 rounded-2xl p-8 hover:shadow-lg hover:border-teal-400 transition"
            >
              <div className="text-teal-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
